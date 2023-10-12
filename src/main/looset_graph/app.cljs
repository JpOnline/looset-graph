(ns looset-graph.app
  (:require
    [clojure.set]
    [clojure.string]
    [looset-graph.graph-parser :as graph-parser]
    [looset-graph.util :as util]
    [re-frame.core :as re-frame]
    [reagent.core :as reagent]
    [reagent.dom]))

;; ---- Util ----

(when ^boolean js/goog.DEBUG ;; Code removed in production
  (js/console.log "Debugger mode!"))

;; Redef re-frame subscribe and dispatch for brevity
(def <sub (comp deref re-frame.core/subscribe))
(def >evt re-frame.core/dispatch)

;; ---- Subs ----

;; (defn dot-graph
;;   [app-state]
;;   (get-in app-state [:domain :dot-graph] ""))
;; (re-frame/reg-sub ::dot-graph dot-graph)

(def type-str->type #(if (= "labelID" %) :label :lix))

(defn extract-nodes-from-edge-rule
  [edge]
  (let [node-from-id (get-in edge [1 1 1 1])
        node-from-type (type-str->type (get-in edge [1 1 0]))
        node-to-type   (type-str->type (get-in edge [2 1 0]))
        node-to-id   (get-in edge [2 1 1 1])]
    [{node-from-id {:type node-from-type :edges-to {:nameless #{node-to-id}}}}
     {node-to-id {:type node-to-type :edges-from {:nameless #{node-from-id}}}}]))

;; (defn  graph-ast->dot-graph
;;   [graph-ast]
;;   (->> graph-ast
;;     (filter #(= "edge" (first %)))
;;     (mapv edge->dot-graph-line)
;;     (apply str)
;;     (#(str "dinetwork {"%"}"))
;;     (#(do (tap> "a2") (tap> %) %))))
;; (re-frame/reg-sub
;;   ::dot-graph
;;   :<- [::graph-ast]
;;   graph-ast->dot-graph)

(defn find-visible
  ([visibles nodes-map node] (find-visible #{} #{} #{} visibles nodes-map node))
  ([result to-visit visited visibles nodes-map node]
   (let [new-visited (conj visited node)
         parent-node (:parent (nodes-map node))
         node-labels (:label (nodes-map node))
         new-to-visit (-> to-visit
                        (conj parent-node)
                        (clojure.set/union node-labels)
                        (clojure.set/difference visited))
         new-result (if (visibles node)
                      (conj result node)
                      result)]
     (if (seq new-to-visit)
       (find-visible new-result new-to-visit new-visited visibles nodes-map (first to-visit))
       new-result))))

(defn visible-nodes
  [fold-list]
  (->> fold-list
    (remove :opened?)
    (remove :hidden?)
    (map :node-id)
    (set)))
(re-frame/reg-sub
  ::visible-nodes
  :<- [::fold-list]
  visible-nodes)

(defn selected-nodes
  [[hovered-node visible-nodes nodes-map]]
  (-> nodes-map
    (get hovered-node)
    (:children)
    (conj hovered-node)
    (set)
    (clojure.set/intersection visible-nodes)
    (vec)
    (clj->js)))
(re-frame/reg-sub
  ::selected-nodes
  :<- [::hovered-node]
  :<- [::visible-nodes]
  :<- [::nodes-map]
  selected-nodes)

(defn text->color [text]
  (case (mod (hash text) 50)
  ;; Greens
    0 "#31711c"
    1 "#58a73e"
    2 "#4ca72e"
    3 "#308b12"
    4 "#256311"
    5 "#204b12"
    6 "#234518"
    7 "#2f4d26"
    8 "#466d3a"
    9 "#5b9549"
  ;; Purples
    10 "#762974"
    11 "#551653"
    12 "#532051"
    13 "#6b3269"
    14 "#954692"
    15 "#af46ab"
    16 "#b336ae"
    17 "#a524a0"
    18 "#8b1786"
    19 "#5f105b"
  ;; Indigos
    20 "#061870"
    21 "#04135f"
    22 "#0b1a69"
    23 "#152681"
    24 "#1129a5"
    25 "#041ea7"
    26 "#0826c3"
    27 "#1931b1"
    28 "#1c3097"
    29 "#19297b"
  ;; Yellows
    30 "#f7c545"
    31 "#f7c031"
    32 "#dbaa29"
    33 "#c59c30"
    34 "#c39f41"
    35 "#cbaa52"
    36 "#f1cb65"
    37 "#b39648"
    38 "#9d8033"
    39 "#bd8f13"
  ;; Blues
    40 "#6b90bc"
    41 "#73a1d7"
    42 "#5980ad"
    43 "#587597"
    44 "#3e6695"
    45 "#4f84c1"
    46 "#629bdd"
    47 "#65a9f7"
    48 "#37567b"
    49 "#4283d1"))

(def label-font-family "Proza Libre")

(defn vis-data
  [[visible-nodes nodes-map]]
  (let [nodes (->> nodes-map
                (filter #(visible-nodes (first %)))
                (into {}))
        ->node
        (fn [[node-id
              {{:strs [x y]} :position
               :keys [type]}]]
          {:id node-id
           :label (if (= type :label)
                    (str "<b>"node-id"</b>")
                    node-id)
           :shape "box"
           :color {:background "white" :border "gray"}
           :x x :y y
           :margin 7
           :shadow true
           :font
           (when (= type :label)
             {:face label-font-family
              :multi "html"
              :color (text->color node-id)})})

        get-from-set #(find-visible visible-nodes nodes-map %)
        get-to-set #(->> %
                      (:edges-to)
                      (map val) ;; TODO: get the text in the relationship/edge.
                      (apply concat)
                      (mapcat (partial find-visible visible-nodes nodes-map)))
        ->edge
        (fn [[k v]]
          (for [from (get-from-set k)
                to (get-to-set v)
                :when (not= from to)]
            {:from from :to to :arrows {:to {:enabled true :type "arrow"}}}))]
    (clj->js {:nodes (map ->node nodes)
              :edges (mapcat ->edge nodes-map)})))
(re-frame/reg-sub
  ::vis-data
  :<- [::visible-nodes]
  :<- [::nodes-map]
  vis-data)

(defn left-panel-size
  [app-state]
  (get-in app-state [:ui :panels :left-panel-size] "400px"))
(re-frame/reg-sub ::left-panel-size left-panel-size)

(defn graph-text
  [app-state]
  (get-in app-state [:domain :graph-text] ""))
(re-frame/reg-sub ::graph-text graph-text)

(defn graph-ast
  [app-state]
  (get-in app-state [:ui :validation :valid-graph-ast]))
(re-frame/reg-sub ::graph-ast graph-ast)

(defn extract-nodes-from-foldable-rule
  [foldable]
  (let [foldable-id-name (get-in foldable [1 1 1 1])
        foldable-type-str (get-in foldable [1 1 0])
        foldable-type (type-str->type foldable-type-str)
        label-or-parent (if (= :label foldable-type)
                          {:label #{foldable-id-name}}
                          {:parent foldable-id-name})
        extract-node-info (fn [node]
                            (let [id (get-in node [1 1 1])
                                  type-str (get-in node [1 0])
                                  type (type-str->type type-str)]
                              {id (merge label-or-parent {:type type})}))
        inner-nodes (map extract-node-info (drop 2 foldable))
        foldable-id-node {foldable-id-name {:type foldable-type
                                            :children (set (mapcat keys inner-nodes))
                                            :foldable (if (seq inner-nodes) true false)
                                            :parent :global}}]
    (apply merge foldable-id-node inner-nodes)))

(defn deep-merge-with
  "Code extracted from https://clojuredocs.org/clojure.core/merge-with#example-5b80843ae4b00ac801ed9e74
  Like merge-with, but merges maps recursively, applying the given fn
  only when there's a non-map at a particular level.
  (deep-merge-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
                     {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
  -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}"
  [f & maps]
  (apply
    (fn m [& maps]
      (if (every? map? maps)
        (apply merge-with m maps)
        (apply f maps)))
    maps))

(defn merge-nodes
  "union for the set of labels and merge the rest"
  [nodes]
  (apply deep-merge-with
         (fn [res latter]
           (if (set? res)
             (clojure.set/union res latter)
             latter))
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
(defn nodes-hierarchy
  [nodes-map]
  (:global
    (reduce
      (fn [r [k v]]
          (let [v (if-not (or (:parent v) (:label v))
                    (assoc v :parent :global) ;; Add global as a parent of nodes that have edges, but are not in a label.
                    v)
                path (fn path
                       ([cur-k cur-v] (conj (path cur-v) cur-k))
                       ([cur]
                        (if-let [parent (:parent cur)]
                          (conj (path (nodes-map parent)) parent)
                          [])))
                ;; _ (tap> {:k k :path (path k v) :global? (if (and (not (:label v)) (not (:parent v))) :global (:parent v))})
                to-assoc (get-in r (path k v) {})
                with-node-assoced (assoc-in r (path k v) to-assoc)
                with-its-labels-assoced (reduce
                                          #(assoc-in %1 (conj (path %2 (nodes-map %2)) k) to-assoc)
                                          with-node-assoced
                                          (:label v))]
            with-its-labels-assoced))
      {} nodes-map)))

(defn nodes-list
  [path nodes-map fold-ui [node node-children]]
  (let [opened? (when (seq node-children)
                    (:opened? (fold-ui node) false))]
    (cons {:node-id node
           :node-type (:type (nodes-map node))
           :path (conj path node)
           :level (count path)
           :color (text->color node)
           :opened? opened?
           :hidden? (:hidden? (nodes-map node))}
          (when opened?
            (mapcat #(nodes-list (conj path node) nodes-map (fold-ui node) %) node-children)))))

(defn nodes-ui
  [app-state]
  (get-in app-state [:ui :nodes] {}))
(re-frame/reg-sub ::nodes-ui nodes-ui)

(defn fold-ui
  [app-state]
  (tap> {:a (get-in app-state [:ui :fold] {})})
  (get-in app-state [:ui :fold] {}))
(re-frame/reg-sub ::fold-ui fold-ui)

;; TODO: Also sort by the order that it was mentioned
;; TODO: Also sort inner structure
(defn sort-nodes
  [nodes-map nodes-hierarchy]
  (sort-by (fn [[k _v]] (-> k nodes-map :type)) nodes-hierarchy))

(defn nodes-map->fold-list
  [[nodes-map fold-ui]]
  (->> nodes-map
    ;; (#(do (tap> {:nodes-map %}) %))
    (nodes-hierarchy)
    (sort-nodes nodes-map)
    ;; (#(do (tap> {:nodes-hierarchy %}) %))
    (mapcat #(nodes-list [] nodes-map fold-ui %))))
    ;; (#(do (tap> {:nodes-list %}) %))))
(re-frame/reg-sub
  ::fold-list
  :<- [::nodes-map]
  :<- [::fold-ui]
  nodes-map->fold-list)

;; TODO: review this, it's probably going to be a sub merging the info user
;;provides (like closing and opening) with the ast calculated from the graph-text
(defn graph-ast->nodes-map
  [graph-ast]
  (let [nodes-from-edges (->> graph-ast
                           (filter #(= "edge" (first %)))
                           (mapcat extract-nodes-from-edge-rule))]
    (->> graph-ast
      ;; (#(do (tap> "a1") (tap> %) %))
      (filter #(= "foldable" (first %)))
      ;; (#(do (tap> "jp2") (tap> %) %))
      (mapv extract-nodes-from-foldable-rule)
      (concat nodes-from-edges)
      (merge-nodes))))
      ;; (#(do (tap> "nodes-map") (tap> %) %)))))
(re-frame/reg-sub
  ::nodes-map*
  :<- [::graph-ast]
  graph-ast->nodes-map)

(defn nodes-map
  [[nodes-ui nodes-map*]]
  (deep-merge-with merge nodes-ui nodes-map*))
(re-frame/reg-sub
  ::nodes-map
  :<- [::nodes-ui]
  :<- [::nodes-map*]
  nodes-map)

(defn foldable?
  [nodes-map [_ node]]
  ;; (tap> {:c7 nodes-map})
  (-> node nodes-map :foldable))
(re-frame/reg-sub
  ::foldable-node?
  :<- [::nodes-map]
  foldable?)

(defn valid-graph?
  [app-state]
  (get-in app-state [:ui :validation :valid-graph?] false))
(re-frame/reg-sub ::valid-graph? valid-graph?)

(defn hovered-node
  [app-state]
  (get-in app-state [:ui :hovered-node] nil))
(re-frame/reg-sub ::hovered-node hovered-node)

;; ---- Events ----

(defn resizing-panels
  [app-state [_event new-state]]
  (assoc-in app-state [:ui :panels :resizing-panels] new-state))
(re-frame/reg-event-db ::resizing-panels resizing-panels)

(defn mouse-moved
  [app-state [_event x _y]]
  (let [resizing-panels? (get-in app-state [:ui :panels :resizing-panels])]
    (cond-> app-state
      resizing-panels?
      (assoc-in [:ui :panels :left-panel-size] (str x"px")))))
(re-frame/reg-event-db ::mouse-moved mouse-moved)

(defn set-graph-text
  [app-state [_event v]]
  (try (-> app-state
         (update-in [:ui :nodes] #(merge-with merge % (get-in app-state [:ui :nodes-positions] {})))
         (assoc-in [:domain :graph-text] v)
         (assoc-in [:ui :validation :valid-graph-ast] (graph-parser/graph-ast v))
         (assoc-in [:ui :validation :valid-graph?] true))
       (catch :default _
         (-> app-state
           (assoc-in [:domain :graph-text] v)
           (assoc-in [:ui :validation :valid-graph?] false)))))
(re-frame/reg-event-db ::set-graph-text set-graph-text)

(defn toggle-open-close
  [app-state [_event path]]
  (-> app-state
    (update-in [:ui :nodes] #(merge-with merge % (get-in app-state [:ui :nodes-positions] {})))
    (update-in (concat [:ui :fold] path [:opened?]) not)))
(re-frame/reg-event-db ::toggle-open-close toggle-open-close)

(defn set-vis-nodes-positions
  [app-state [_event nodes-positions*]]
  (let [nodes-positions (reduce-kv (fn [m k v]
                                     (assoc m k {:position v}))
                                   {}
                                   (js->clj nodes-positions*))
        dragging? (get-in app-state [:ui :graph-dragging?] false)]
    ;; (tap> {:set-pos nodes-positions})
    (if dragging?
      app-state
      (update-in app-state [:ui :nodes-positions] merge nodes-positions))))
(re-frame/reg-event-db ::set-vis-nodes-positions set-vis-nodes-positions)

(defn drag-changed
  [app-state [_event dragging?]]
  (assoc-in app-state [:ui :graph-dragging?] dragging?))
(re-frame/reg-event-db ::drag-changed drag-changed)

(defn toggle-hidden
  [app-state [_event node-id]]
  ;; (tap> {:c3 (get-in app-state [:ui :nodes])})
  (-> app-state
    (update-in [:ui :nodes] #(merge-with merge % (get-in app-state [:ui :nodes-positions] {})))
    (update-in [:ui :nodes node-id :hidden?] not)))
(re-frame/reg-event-db ::toggle-hidden toggle-hidden)

(defn node-hovered
  [app-state [_event node-id]]
  ;; (tap> {:node-hovered node-id})
  (assoc-in app-state [:ui :hovered-node] node-id))
(re-frame/reg-event-db ::node-hovered node-hovered)

;; ---- Views ----

;; (defn draw-graph-no-memo [id data options]
;;   (fn []
;;     (let [container (-> js/document (.getElementById id))
;;           network (-> js/vis .-Network (new container data options))]
;;       ;; (.on network "dragEnd" #(>evt [::set-vis-nodes-positions ^Object (.getPositions network)]) )
;;       (def network network)
;;       network)))
;;
;; (def draw-graph (memoize draw-graph-no-memo))

(defn graph-component-inner []
  (let [graph-component-id "looset-graph"
        options #js {:physics #js {:enabled true
                                   :minVelocity 1.5}
                     :nodes #js {:borderWidth 1}}
        network (atom nil)
        update-comp (fn [component [_ prev-props]]
                      (let [prev-vis-data (:vis-data prev-props)
                            {:keys [selected-nodes vis-data _options]} (reagent/props component)]
                        ;; (def network network)
                        (when (not= prev-vis-data vis-data)
                          (.setData @network vis-data))
                        ;; ^js (.setOptions @network options)
                        (tap> {:vis-data vis-data})
                        (.selectNodes @network selected-nodes)))
        mount-comp (fn [component]
                     (let [container (-> js/document (.getElementById graph-component-id))]
                       (reset! network (-> js/vis .-Network (new container nil options))))
                     (.on @network "dragStart" #_(js/console.log "dragStart") #(>evt [::drag-changed true]))
                     (.on @network "dragEnd" #_(js/console.log "dragEnd") #(>evt [::drag-changed false]))
                     (.on @network "stabilized" #_(js/console.log "stabilized") #(>evt [::set-vis-nodes-positions ^Object (.getPositions @network)]))
                     (update-comp component nil))]
    (reagent/create-class
      {:reagent-render (fn []
                         [:div
                          {:id graph-component-id
                           :style #js {:height "100%" :width "100%"
                                       :opacity (if (<sub [::valid-graph?]) "100%" "40%")}}
                          [:p "Loading.."]])
       :component-did-mount mount-comp
       :component-did-update update-comp})))

(defn graph-component []
  [graph-component-inner
   {:selected-nodes (<sub [::selected-nodes])
    :vis-data       (<sub [::vis-data])}])
    ;; :options #js {:physics #js {:enabled true
    ;;                             :minVelocity 1.5}
    ;;               :nodes #js {:borderWidth 1}}}])
    ;;

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

(defn svg-eye
  [props]
  [:svg#eye.hover-gray
   (merge
     props
     {:fill "currentColor" :viewBox "0 0 16 16" :xmlns "http://www.w3.org/2000/svg"})
   [:path {:fill-rule "evenodd" :d "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}]
   [:path {:fill-rule "evenodd" :d "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}]])

(defn svg-filled-eye
  [props]
  [:svg#eye.hover-gray
   (merge
     props
     {:fill "currentColor" :viewBox "0 0 16 16" :xmlns "http://www.w3.org/2000/svg"})
   [:path {:fill-rule "evenodd" :d "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}]
   [:path {:fill-rule "evenodd" :d "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}]])

(defn node-view
  [{:keys [class]
    {:keys [color]} :style
    {:keys [level hidden? path node-id]} :node}
   text]
  [:div
   {:style {:paddingLeft (+ 5 (* 12 level))}
    :class class
    :onMouseOver #(>evt [::node-hovered node-id])
    :onMouseOut #(>evt [::node-hovered nil])}
   (if hidden?
     [svg-eye
      {:onClick #(>evt [::toggle-hidden node-id])
       :style {:paddingRight 6}
       :width "27" :height "27"}]
     [svg-filled-eye
      {:onClick #(>evt [::toggle-hidden node-id])
       :style {:paddingRight 6}
       :width "27" :height "27"}])
   [:div
    {:onClick #(>evt [::toggle-open-close path])
     :class (when (<sub [::foldable-node? node-id]) "hover-gray")
     :style {:color (or color "inherit")}}
    text]])

(defn label-node [{:keys [node-id color opened?] :as node-item}]
  [node-view
   {:node node-item
    :class "label-style"
    :style {:color color}}
   (str (if opened? "=v " "=> ")
        node-id)])

(defn lix-node [{:keys [node-id opened?] :as node-item}]
  [node-view
   {:node node-item
    :class "lix-style"}
   (str (cond (nil? opened?) ""
              (true? opened?) "v "
              :else "> ")
        node-id)])

(defn nodes-list-view []
  [:div
   {:style {:opacity (if (<sub [::valid-graph?]) "100%" "40%")}}
   (for [node-item (<sub [::fold-list])
         :let [node-type-comp ({:label label-node :lix lix-node} (:node-type node-item))]]
     ;; ^{:key text} ;; Somehow I'm using this key wrongly, if it's uncomment, the items repeat depending on the change.
     [node-type-comp node-item])])

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

(def quattrocento-font "Quattrocento, serif")

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

   .lix-style {
     display: flex;
     flex-direction: row;
     font-family: "label-font-family", sans-serif;
     font-size: large;
     padding-bottom: 10px;
     align-items: center;
   }

   .label-style {
     display: flex;
     flex-direction: row;
     font-family: "label-font-family", sans-serif;
     font-size: large;
     font-weight: bold;
     padding-bottom: 10px;
     align-items: center;
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
     [util/error-boundary
      {:if-error [:h2 "erro"]}
      [graph-component]]]
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
       [util/error-boundary
        {:if-error [:h2 "erro"]}
        [nodes-list-view]]
       [debug-raw-graph-text]]
     [:<>
      [:span "Range "(<sub [::number-input])]
      [:input {:type "range"
               :value (<sub [::number-input])
               :onChange #(>evt [::set-number-input (-> % .-target .-value)])}]]
     [:<> [:span "Number"] [:input {:type "number"
                                    :value (<sub [::number-input])
                                    :onChange #(>evt [::set-number-input (-> % .-target .-value)])}]]
     [:<> [:span "Toggle"] [:input {:type "checkbox"
                                    :onChange #(>evt [::set-toggle-input (-> % .-target .-checked)])}]]
     [botton-buttons]]]])

(defn set-toggle-input
  [app-state [_event n]]
  (js/console.log n)
  (assoc-in app-state [:ui :toggle-input] n))
(re-frame/reg-event-db ::set-toggle-input set-toggle-input)

(defn toggle-input
  [app-state]
  (get-in app-state [:ui :toggle-input] false))
(re-frame/reg-sub ::toggle-input toggle-input)

(defn set-number-input
  [app-state [_event n]]
  (assoc-in app-state [:ui :number-input] n))
(re-frame/reg-event-db ::set-number-input set-number-input)

(defn number-input
  [app-state]
  (get-in app-state [:ui :number-input] 0))
(re-frame/reg-sub ::number-input number-input)

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

(re-frame/reg-event-db ::set-app-state
  (fn [_ [event _application-state]]
    (set-graph-text initial-state [event (get-in initial-state [:domain :graph-text])])))

(defn init-state []
  (re-frame/dispatch-sync [::set-app-state]))
  ;; (let [compressed-graph (.get (js/URLSearchParams. js/window.location.search) "g")
  ;;       default-graph (get-in initial-state [:domain :graph-text])]
  ;;   (if compressed-graph
  ;;     (.then (gzip-decompress (js/atob compressed-graph))
  ;;            #(re-frame/dispatch-sync [::set-app-state "compressed-graph"]))
  ;;     (re-frame/dispatch-sync [::set-app-state default-graph]))))

;; Snippets about mouse-up event
;; (defn mouse-up
;;   [app-state]
;;   (-> app-state
;;     (resizing-panels [::mouse-up false])
;;     (assoc-in [:ui :diagram :zooming?] false)))
;; (re-frame/reg-event-db ::mouse-up mouse-up)
;; (defn init-mouseup []
;;   (js/document.body.addEventListener
;;     "mouseup"
;;     #(>evt [::mouse-up false])))

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
  (mount-app-element))
  ;; (init-mouseup)
  ;; (init-style-observer))
