(ns looset-graph.app
  (:require
    [reagent.dom]
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    ["antlr4" :as antlr4]
    ;; ["/looset_graph/antlr/loosetGraphLexer" :as loosetGraphLexer]
    ["/looset_graph/antlr/loosetGraphParser" :as parser]
    ["/looset_graph/antlr/loosetGraphLexer" :as lexer]))

(defn with-mount-fn
  "Wrap component in the create-class fn so the react component-did-mount
  hook can be used."
  [[_n {:keys [component-did-mount]} :as to-render]]
  (reagent/create-class
    {:reagent-render #(into [] (update-in to-render [1]
                                          dissoc :component-did-mount))
     :component-did-mount component-did-mount}))

(defn draw-graph-no-memo [id dot-string options]
  (fn []
    (let [parsed-data (-> js/vis (.parseDOTNetwork dot-string))
          ;; _ (set! ^js(.-widthConstraint (get (.-nodes parsed-data) 0)) 30)
          ;; _ (set! ^js(.-heightConstraint (get (.-nodes parsed-data) 0)) 30)
          ;; _ (set! ^js(.-font (get (.-nodes parsed-data) 0)) #js{:size 40}) ;; Possibility to differentiate different abstraction levels
          container (-> js/document (.getElementById id))
          data #js {:nodes (.-nodes parsed-data) :edges (.-edges parsed-data)}]
      (js/console.log "parsedDot" parsed-data)
      (-> js/vis .-Network (new container data options)))))

;; (js/console.log "jp6" (clj->js (assoc-in #js{:n [{}]} [:n 0 :a] 1)))

(def draw-graph (memoize draw-graph-no-memo))

(when ^boolean js/goog.DEBUG ;; Code removed in production
  (js/console.log "Debugger mode!"))

;; Redef re-frame subscribe and dispatch for brevity
(def <sub (comp deref re-frame.core/subscribe))
(def >evt re-frame.core/dispatch)

;; ---- Subs ----

(defn dot-graph
  [app-state]
  (get-in app-state [:domain :dot-graph] ""))
(re-frame/reg-sub ::dot-graph dot-graph)

(defn left-panel-size
  [app-state]
  (get-in app-state [:ui :panels :left-panel-size] "400px"))
(re-frame/reg-sub ::left-panel-size left-panel-size)

(defn graph-text
  [app-state]
  (get-in app-state [:domain :graph-text] ""))
(re-frame/reg-sub ::graph-text graph-text)

(defn- parser-rule-meta
  [^ParserRuleContext this]
  (let [start ^js (.-start this)
        stop  ^js (.-stop this)]
    (if (nil? stop)
      ;; no end found - happens on errors
      {:start {:row    (.-line start)
               :column (.-column start)}}
      {:start {:row    (.-line start)
               :column (.-column start)}
       :end   {:row    (.-line stop)
               :column (+ (.-column stop)
                          (count (.-text stop)))}})))

(defn ast
  [tree rule-names token-types hide-tags hide-literals]
  (cond
    (some? (.-children tree))
    (let [meta     (parser-rule-meta tree)
          rule     (get rule-names (.-ruleIndex tree))
          children (sequence (comp (map #(ast % rule-names token-types hide-tags hide-literals))
                                   (remove nil?))
                             (.-children tree))]
      (if (contains? hide-tags rule)
        nil
        ;; attach meta data ... ala instaparse
        (with-meta (cons rule children) meta)))

    ^boolean (.-isErrorNode tree)
    (let [token ^js (.-symbol tree)]
      (with-meta (list :failure (:content (str tree)))
                 {:start {:row    (.getLine token)
                          :column (.getCharPositionInLine token)}}))

    :else
    (let [content (str tree)
          token-type (get token-types (.-type (.-symbol tree)))]
      (when-not (contains? hide-literals content)
        [token-type content]))))

(defn graph-ast [graph-text]
  (let [chrs (new (.-InputStream antlr4) graph-text)
        lxr (new (.-default lexer) chrs)
        tokens (new (.-CommonTokenStream antlr4) lxr)
        prsr (new (.-default parser) tokens)
        _ (set! (.-buildParseTrees prsr) true)
        tree ^js/LoosetGraphContext (.loosetGraph prsr)]
    (clj->js (ast tree (mapv keyword (.-ruleNames prsr)) (mapv keyword (.-symbolicNames prsr)) #{} #{"->" ":"}))))
(re-frame/reg-sub
  ::graph-ast
  :<- [::graph-text]
  graph-ast)

(defn extract-nodes-from-foldable-rule
  [foldable]
  (let [foldable-id-name (get-in foldable [1 1 1])
        foldable-type-str (get-in foldable [1 1 0])
        foldable-type (if (= "LABEL_ID" foldable-type-str) :label :node)
        label-or-parent (if (= :label foldable-type)
                          {:label #{foldable-id-name}}
                          {:parent foldable-id-name})
        extract-node-info (fn [node]
                            (let [id (get-in node [1 1])
                                  type-str (get-in node [1 0])
                                  type (if (= "LABEL_ID" type-str) :label :node)]
                              {id (merge label-or-parent {:type type})}))
        inner-nodes (map extract-node-info (drop 2 foldable))
        foldable-id-node {foldable-id-name {:type foldable-type :foldable true}}]
    (apply merge foldable-id-node inner-nodes)))

(defn merge-nodes
  "union for the set of labels and merge the rest"
  [nodes]
  (apply merge-with
    #(merge-with
       (fn [res latter]
         (if (set? res)
           (clojure.set/union res latter)
           latter))
       %1 %2)
   nodes))

;; This could be optimized as I don't need to process nodes that are closed (maybe change how the graph is defined)
;; This is good enough for MVP, but there's a problem if I have a cycle or depending on the order of the definition, for instance the graph-text
;; =>label5:
;;   =>label6
;; =>label6:
;;   =>label5
;; Should generate a structure like
;; -=vlabel5
;;  -=vlabel6
;;   -=>label5
;; -=vlabel6
;;  -=vlabel5
;;   -=>label6
(defn list-structure
  [nodes-map]
  (reduce
    (fn [r [k v]]
        (let [path (fn path
                     ([cur-k cur-v] (conj (path cur-v) cur-k))
                     ([cur]
                      (if-let [parent (:parent cur)]
                        (conj (path (nodes-map parent)) parent)
                        [])))
              to-assoc (get-in r (path k v) {})]
          ;; (assoc-in r [k] {:path (path k v)
          ;;                  :label (map #(into {% (path % (nodes-map %))}) (:label v))})
          ;; (assoc-in r (path k v) to-assoc)))
          (reduce
            #(assoc-in %1 (path %2 (nodes-map %2)) {k to-assoc})
            (assoc-in r (path k v) to-assoc)
            (:label v))))
    {} nodes-map))

;; TODO: review this, it's probably going to be a sub merging the info user
;;provides (like closing and opening) with the ast calculated from the graph-text
(defn graph-ast->nodes-map
  [graph-ast]
  (->> graph-ast
    (filter #(= "foldable" (first %)))
    (mapv extract-nodes-from-foldable-rule)
    (merge-nodes)
    (#(do (tap> "jp1") (tap> %) %))
    (list-structure)
    (#(do (tap> "jp2") (tap> %) %))))
(re-frame/reg-sub
  ::nodes-map
  :<- [::graph-ast]
  graph-ast->nodes-map)

;; ---- Events ----

(defn resizing-panels
  [app-state [_event new-state]]
  (assoc-in app-state [:ui :panels :resizing-panels] new-state))
(re-frame/reg-event-db ::resizing-panels resizing-panels)

(defn mouse-moved
  [app-state [_event x y]]
  ;; (js/console.log x y)
  (let [resizing-panels? (get-in app-state [:ui :panels :resizing-panels])]
    (cond-> app-state
      resizing-panels?
      (assoc-in [:ui :panels :left-panel-size] (str x"px")))))
(re-frame/reg-event-db ::mouse-moved mouse-moved)

(defn mouse-up
  [app-state]
  (js/console.log "mouse-up")
  (-> app-state
    (resizing-panels [::mouse-up false])
    (assoc-in [:ui :diagram :zooming?] false)))
(re-frame/reg-event-db ::mouse-up mouse-up)

(defn set-graph-text
  [{app-state :db} [_event v]]
  (let [new-app-state (assoc-in app-state [:domain :graph-text] v)]
    {:db new-app-state}))
     ;; :set-url-state (get-in new-app-state [:ui :validation :valid-cardume-text])}))
(re-frame/reg-event-fx ::set-graph-text set-graph-text)

;; ---- Views ----

(def quattrocento-font "Quattrocento, serif")

(defn graph-component []
  [(with-mount-fn
     [:div
      {:id "looset-graph"
       :style #js {:height "100%" :width "100%" #_#_:flexGrow 5}
       :component-did-mount (draw-graph
                              "looset-graph"
                              (<sub [::dot-graph])
                              #js{})}
      [:p "Loading.."]])])

(defn panel-splitter []
  [:div {:style {:display "flex"
                 :justify-content "center"
                 :width "6px"
                 :height "100vh"
                 :cursor "ew-resize"}
         :onMouseDown #(>evt [::resizing-panels true])}
   [:div {:style {:border-left "1px solid gray"}}]])

(defn botton-buttons []
  [:div
   {:style {:display "flex"
            :justify-content "space-evenly"
            :padding "10px"}}
   ;; TODO Setup a new forms
   [:button.button-1
    {:title "Collapse All"
     :onClick #(>evt [::toggle-all "closed"])}
    [:svg
     {:width "30" :height "30" :fill "currentColor" :viewBox "0 0 16 16" :xmlns "http://www.w3.org/2000/svg"}
     [:path {:fill-rule "evenodd" :d "M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"}]]]
   [:a {:target "_blank" :href "" #_"https://docs.google.com/forms/d/e/1FAIpQLSd4DFTcDCl7NwjWziRn2CdoNwdiAedPCZFV0eaGA4QP1K-6iQ/viewform?usp=sf_link"}
    [:button.button-1
     {:title "Feedback"}
     [:svg
      {:width "30" :height "30" :fill "currentColor" :viewBox "0 0 16 16"}
      [:path {:d "M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"}]]
     [:svg
      {:width "30" :height "30" :fill "currentColor" :viewBox "0 0 16 16"}
      [:path {:d "M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"}]]]]])

(defn label-node [{:keys [level color open?]} text]
  [:p.hover-gray
   {:style {:color color
            :paddingLeft (+ 16 (* 12 level))}}
   (str (if open? "=v " "=> ")
        text)])

(defn simple-node [{:keys [level open?]} text]
  [:p.hover-gray
   {:style {:paddingLeft (+ 16 (* 12 level))}}
   (str (cond (nil? open?) ""
              (true? open?) "v "
              :else "> ")
        text)])

(defn nodes-list []
  (let [label-or-simple {:label label-node :node simple-node}]
    [:div
      ;; (for [{:keys [text node-type level color opened?]}
      ;;       (<sub [::nodes-list])]
      ;;   ^{:key text}
      ;;   [(if)])]))
      [:p (<sub [::nodes-map])]
      [label-node
       {:level 0 :color "red" :open? true}
       "Etiqueta 1"]
      [simple-node
       {:level 1}
       "Nó 1"]
      [simple-node
       {:level 1}
       "Nó 2"]
      [simple-node
       {:level 1}
       "Nó 5"]
      [label-node
       {:level 0 :color "blue" :open? true}
       "Etiqueta 2"]
      [simple-node
       {:level 1}
       "Nó 5"]
      [simple-node
       {:level 0 :open? true}
       "Nó 3"]
      [simple-node
       {:level 1}
       "Nó 4"]
      [simple-node
       {:level 1}
       "Nó 5"]
      [simple-node
       {:level 0 :open? true}
       "Nó 6"]
      [simple-node
       {:level 1 :open? true}
       "Nó 7"]
      [simple-node
       {:level 2 :open? true}
       "Nó 8"]
      [simple-node
       {:level 3 :open? true}
       "Nó 9"]
      [simple-node
       {:level 4 :open? true}
       "Nó 10"]]))

(def code-font-family "dejavu sans mono, monospace")
(def code-font-size "small")
(def code-margin "0")
(def code-padding "0 10px")

(defn debug-raw-graph-text []
  [:textarea
   {:style {:flex-grow "1"
            :margin code-margin
            :padding code-padding
            :font-family code-font-family
            :font-size code-font-size}
    :onChange #(>evt [::set-graph-text (-> % .-target .-value)])
    :value (<sub [::graph-text])}])

(defn global-style []
  [:style
   (str "
   @import url('https://fonts.googleapis.com/css2?family=Proza+Libre:wght@400;500;600;700&family=Quattrocento&family=Roboto+Mono:wght@300;400;500;600;700&display=swap');

    *::-webkit-scrollbar-track {
        background: rgb(51 51 51 / 10%);
    }
    *::-webkit-scrollbar-thumb {
        background: #bbb;
    }
    *::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

   .hover-gray:hover {
     background-color: lightgray;
     cursor: pointer;
   }

   .button-1 {
     display: flex;
     background-color: #4c4c4c;
     border-radius: 8px;
     border-style: none;
     box-sizing: border-box;
     color: #FFFFFF;
     cursor: pointer;
     font-family: "quattrocento-font";
     font-size: 14px;
     font-weight: 500;
     line-height: 20px;
     list-style: none;
     margin: 0;
     outline: none;
     padding: 10px;
     position: relative;
     text-align: center;
     text-decoration: none;
     transition: color 100ms;
     vertical-align: baseline;
     user-select: none;
     -webkit-user-select: none;
     touch-action: manipulation;
   }

   .button-1:hover,
   .button-1:focus {
     background-color: #7c7c7c;
   }
   ")])

(defn main []
  [:<>
   [global-style]
   [:div#panel-container
    {:style {:display "flex"
             :user-select "none"
             :max-height "100vh"}}
    [:div#left-panel
     {:style {:width (<sub [::left-panel-size])
              :min-width "20vw"
              :display "flex"
              :flex-direction "column"}}
     [:div {:style {:font-family quattrocento-font
                    :font-size "2em"
                    :padding "10px"
                    :border-bottom "1px solid gray"}}
      "Looset Graph"]
     [graph-component]]
    [panel-splitter]
    [:div#right-panel
     {:style {:width (str "calc(100vw - 500"#_(<sub [::left-panel-size])")") ;; Just a testing value
              :display "flex"
              :flex-direction "column"
              :min-width "20vw"}}
     [:div#text-component
       {:style {:overflow "auto"
                :display "grid"
                :flex-grow "1"
                :padding "7px 0"}}
       [nodes-list]
       [debug-raw-graph-text]]
     [botton-buttons]]]])

;; ---- Initialization ----

(def initial-state
  {:domain {:dot-graph "dinetwork {\"superlongnamethatwontfitboll1\" -> superlongnamethatwontfitboll1 -> 2; 2 -> 3; 2 -- 4; 2 -> superlongnamethatwontfitboll1 }"
            :graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label2:\n  node5\n\nnode3:\n  node4\n  node5\n\nnode1 -> node2\nnode4->node1\nnodeA->nodeB"}
   :ui {:panels {:resizing-panels false
                 :left-panel-size "65vw"}}})


(defn gzip [cs-mode b-array]
  (let [cs (-> "gzip" cs-mode.)
        writer (-> cs .-writable .getWriter)]
    (-> writer (.write b-array))
    (-> writer .close)
    (.arrayBuffer (js/Response. (-> cs .-readable)))))

(defn gzip-compress [string]
  (as-> string $
    (.encode (js/TextEncoder.) $)
    (gzip js/CompressionStream $)
    (.then $ #(->> (js/Uint8Array. %)
                (map char)
                (apply str)))))

(defn gzip-decompress [compressed-string]
  (as-> compressed-string $
    (map #(.charCodeAt % 0) $)
    (js/Uint8Array. $)
    (gzip js/DecompressionStream $)
    (.then $ #(.decode (js/TextDecoder.) %))))

(defn init-mousemove []
  (js/document.body.addEventListener
    "mousemove"
    #(>evt [::mouse-moved (-> % .-x) (-> % .-y)])))

(defn init-mouseup []
  (js/document.body.addEventListener
    "mouseup"
    #(>evt [::mouse-up false])))

(re-frame/reg-event-db ::set-app-state
  (fn [_ [_ _application-state]]
    (-> initial-state
      (assoc-in [:ui :dot-graph-text] "x")
      ;; TODO: review this, it's probably going to be a sub merging the info user
      ;;provides (like closing and opening) with the ast calculated from the graph-text
      (assoc-in [:ui :nodes] (graph-ast->nodes-map (graph-ast (get-in initial-state [:domain :graph-text] "")))))))

(defn init-state []
  (re-frame/dispatch-sync [::set-app-state]))
  ;; (let [compressed-graph (.get (js/URLSearchParams. js/window.location.search) "g")
  ;;       default-graph (get-in initial-state [:domain :graph-text])]
  ;;   (if compressed-graph
  ;;     (.then (gzip-decompress (js/atob compressed-graph))
  ;;            #(re-frame/dispatch-sync [::set-app-state "compressed-graph"]))
  ;;     (re-frame/dispatch-sync [::set-app-state default-graph]))))

;; Snippet on how to react on CSS change
;; (defn init-style-observer []
;;   (let [observer (new js/MutationObserver
;;                    (fn [mutations]
;;                      (js/console.log "something changed" mutations)))
;;         target-element (js/document.getElementById "text-component")]
;;     (.observe observer target-element #js{:attributes true :attributeFilter #js["style"]})))

(defn ^:dev/after-load mount-app-element []
  (when ^boolean js/goog.DEBUG ;; Code removed in production
    (re-frame/clear-subscription-cache!))
  (when-let [el (.getElementById js/document "root")]
    (reagent.dom/render [main] el)))

(defn init []
  (init-state)
  (init-mousemove)
  (init-mouseup)
  (mount-app-element))
  ;; (init-style-observer))
