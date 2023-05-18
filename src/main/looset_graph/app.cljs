(ns looset-graph.app
  (:require
    [reagent.dom]
    [reagent.core :as reagent]
    [re-frame.core :as re-frame]
    ["antlr4" :as antlr4]
    ;; ["/looset_graph/antlr/loosetGraphLexer" :as loosetGraphLexer]
    ["/looset_graph/antlr/loosetGraphParser" :as parser]
    ["/looset_graph/antlr/loosetGraphLexer" :as lexer]))

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


(let [input "
=>label1:
  node1
  node2 
  
node3:
  node4
  node5

node1 -> node2
node4->node1
nodeA->nodeB"
      chrs (new (.-InputStream antlr4) input)
      lxr (new (.-default lexer) chrs)
      tokens (new (.-CommonTokenStream antlr4) lxr)
      _ (js/console.log "jp6" tokens)
      prsr (new (.-default parser) tokens)
      _ (set! (.-buildParseTrees prsr) true)
      tree ^js/LoosetGraphContext (.loosetGraph prsr)]
  (js/console.log "jp7" prsr)
  (js/console.log "jp5" (clj->js (ast tree (mapv keyword (.-ruleNames prsr)) (mapv keyword (.-symbolicNames prsr)) #{} #{"->"}))))

(when ^boolean js/goog.DEBUG ;; Code removed in production
  (js/console.log "Debugger mode!"))

;; Redef re-frame subscribe and dispatch for brevity
(def <sub (comp deref re-frame.core/subscribe))
(def >evt re-frame.core/dispatch)

;; ---- Views ----

(defn main []
  [:h1 "Hi Graph"])

;; ---- Initialization ----

(def initial-state
  {:domain {}
   :ui "Hello graph"})

(re-frame/reg-event-db ::set-app-state
  (fn [_ [_ application-state]]
    application-state))

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

(defn init-state []
  (let [compressed-graph (.get (js/URLSearchParams. js/window.location.search) "g")
        default-graph (get-in initial-state [:domain :graph-text])]
    (if compressed-graph
      (.then (gzip-decompress (js/atob compressed-graph))
             #(re-frame/dispatch-sync [::set-app-state "compressed-graph"]))
      (re-frame/dispatch-sync [::set-app-state default-graph]))))

(defn ^:dev/after-load mount-app-element []
  (when ^boolean js/goog.DEBUG ;; Code removed in production
    (re-frame/clear-subscription-cache!))
  (when-let [el (.getElementById js/document "root")]
    (reagent.dom/render [main] el)))

(defn init []
  (init-state)
  (mount-app-element))
