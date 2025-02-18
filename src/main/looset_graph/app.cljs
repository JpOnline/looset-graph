(ns looset-graph.app
  (:require
    [cljs.reader]
    [clojure.data]
    [clojure.set :as set]
    [clojure.string]
    [looset-graph.graph-parser :as graph-parser]
    [looset-graph.util :as util]
    [re-frame.alpha :as re-frame]
    [re-frame.std-interceptors]
    [reagent.core :as reagent]
    [reagent.dom]
    [vis-network]))

;; ---- Util ----

(when ^boolean js/goog.DEBUG ;; Code removed in production
  ;; (day8.re-frame-10x/show-panel! true) ;; Or just press ctrl-shift-x to toggle pannel
  (js/console.log "Debugger mode!"))

;; Redef re-frame subscribe and dispatch for brevity
(def <sub (comp deref re-frame/subscribe))
(def >evt re-frame/dispatch)

(defn with-defaults
  "Meant to be used with `reg-flow` :output. Define default values
  for values in the map and sends the values as a vector."
  [f defaults-vec]
  (fn [m]
    (f (map (fn [[k default]]
              (or (get m k) default))
            (partition 2 defaults-vec)))))

(def event-to-analytics
  (re-frame/->interceptor
    :id :event-to-analytics
    :after (fn [context]
             (let [[evt value] (:event (:coeffects context))
                   evt-name (if (keyword? evt) (name evt) (str evt))
                   map->str (fn [m k v] (assoc m k (if (map? v) (str v) v)))
                   evt-value (if (map? value)
                               (clj->js (reduce-kv map->str {} value))
                               #js{"value" value})]
               (js/gtag "event" evt-name evt-value)
               ;; (js/console.log evt-name evt-value)
               context))))

(defonce events-history (atom []))

(def debugging-save-events
  (re-frame/->interceptor
    :id :debugging-save-events
    :after (fn [context]
             (let [[evt _value] (:event (:coeffects context))
                   ignored-events #{:looset-graph.app/mouse-moved
                                    :looset-graph.app/organize-hierarchy-positions-step-2
                                    :looset-graph.app/node-hovered}]
               (when-not (ignored-events evt)
                 (js/console.log (:event (:coeffects context)))
                 (swap! events-history conj (:event (:coeffects context)))))
             context)))
(re-frame/reg-global-interceptor debugging-save-events)

(comment
  @events-history
  (reset! events-history []))

;; ---- Subs ----

;; TODO: Replace all reg-subs for reg-flow? Maybe there's still usage for subs,
;; it also has the nice effect of defining default values in a single place.

;; I'll want to abstract the subs, make a generic one and pass the path as an
;; argument to subs. There are people doing that as in https://vvvvalvalval.github.io/posts/some-re-frame-patterns-for-composability.html#generic_subscriptions_and_events_for_app-db_paths
;; but my was to follow official re-frame documentation and indeed create a lot
;; of subs to extract data from app-state. Re-frame official documentation about it
;; is in https://day8.github.io/re-frame/correcting-a-wrong/#a-final-faq

;; Reviewing re-frame philosophy https://github.com/day8/re-frame/blob/master/docs/historical.md
;; I can see how I that abstracting the subs doesn't hit the main philosophy,
;; but might be more in sync with my philosophy of to not try to predict how the
;; code will need to change, the point of not generalizing subs is that if I
;; the structure of the app-state I'll need to change all the views, but maybe
;; I won't need it, and if I need might not be such a problem. I might generalize
;; the layer 2 subs and simple events and define defaults value in the initial-state.

;; (defn dot-graph
;;   [app-state]
;;   (get-in app-state [:domain :dot-graph] ""))
;; (re-frame/reg-sub ::dot-graph dot-graph)

(def type-str->type #(if (= "labelID" %) :label :lix))

(defn clean-surrounding-quotes [s]
  (if (= \" (first s) (last s))
    (subs s 1 (dec (count s)))
    s))

(defn extract-nodes-from-edge-rule
  [edge]
  (let [node-from-id (clean-surrounding-quotes (get-in edge [1 1 1 1]))
        node-from-type (type-str->type (get-in edge [1 1 0]))
        node-to-type   (type-str->type (get-in edge [2 1 0]))
        node-to-id   (clean-surrounding-quotes (get-in edge [2 1 1 1]))]
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
(re-frame/reg-flow
  {:id :f-visible-nodes
   :inputs {:fold-list (re-frame/flow<- :f-fold-list)}
   :output (fn [{:keys [fold-list]}] (visible-nodes fold-list))
   :path [:ui :f-visible-nodes]})

(defn get-descendents [nodes-map nodes]
  (let [step-fn #(clojure.set/union
                   %1
                   (get-descendents nodes-map (:children (nodes-map %2))))]
    (reduce step-fn nodes nodes)))

(defn raw-selected-nodes
  [app-state]
  (get-in app-state [:ui :selected-nodes] #{}))
(re-frame/reg-sub ::raw-selected-nodes raw-selected-nodes)

(defn selected-nodes
  [[hovered-node raw-selected-nodes nodes-map]]
  (if (empty? hovered-node)
    raw-selected-nodes
    (get-descendents nodes-map hovered-node)))
(re-frame/reg-sub
  ::selected-nodes
  :<- [::hovered-node]
  :<- [::raw-selected-nodes]
  :<- [::nodes-map]
  selected-nodes)
(re-frame/reg-flow
  {:id :f-selected-nodes
   :inputs {:hovs [:ui :hovered-node]
            :sels [:ui :selected-nodes]
            :nmap [:domain :nodes-map]}
   :output (fn [{:keys [hovs sels nmap]}]
             (selected-nodes [(or hovs #{})
                              (or sels #{})
                              nmap]))
   :path [:ui :f-selected-nodes]})

(defn selected-nodes-visible
  [[selected-nodes visible-nodes]]
  (clojure.set/intersection selected-nodes visible-nodes))
(re-frame/reg-sub
  ::selected-nodes-visible
  :<- [::selected-nodes]
  :<- [::visible-nodes]
  selected-nodes-visible)

(defn selected-node?
  [selected-nodes [_ node]]
  (contains? selected-nodes node))
(re-frame/reg-sub
  ::selected-node?
  :<- [::selected-nodes]
  selected-node?)

(defn text->color [text]
  (let [n (hash text)
        h (mod n 360)
        s (+ 60 (mod (quot n 360) 20))
        l (+ 50 (mod (quot n 7200) 10))]
    (str "hsl("h"deg, "s"%, "l"%)")))

(def label-font-family "Proza Libre")

(defn vis-data
  [[visible-nodes nodes-map]]
  (let [nodes (->> nodes-map
                (filter #(visible-nodes (first %)))
                (into {}))
        ->node
        (fn [[node-id
              {{:strs [x y]} :position
               :keys [type name]
               :or {name node-id}}]]
          {:id node-id
           :label (if (= type :label)
                    (str "<b>"name"</b>")
                    name)
           :shape "box"
           :color {:background "white" :border "gray"}
                   ;; :highlight {:border "#ff0000"}}
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
            {:from from :to to :arrows {:to {:enabled true :type "arrow"}}
             :color {:highlight "#33a0ff"}}))]
    {:nodes (map ->node nodes)
     :edges (mapcat ->edge nodes-map)}))
(re-frame/reg-sub
  ::vis-data
  :<- [::visible-nodes]
  :<- [::nodes-map]
  vis-data)
(re-frame/reg-flow
  {:id :f-vis-data
   :inputs {:visible-nodes (re-frame/flow<- :f-visible-nodes)
            :nodes-map (re-frame/flow<- :nodes-map)}
   :output (fn [{:keys [visible-nodes nodes-map]}] (vis-data [visible-nodes nodes-map]))
   :path [:ui :f-vis-data]})

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
  (let [foldable-id-name (clean-surrounding-quotes (get-in foldable [1 1 1 1]))
        foldable-type-str (get-in foldable [1 1 0])
        foldable-type (type-str->type foldable-type-str)
        label-or-parent (if (= :label foldable-type)
                          {:label #{foldable-id-name}}
                          {:parent foldable-id-name})
        extract-node-info (fn [node]
                            (let [id (clean-surrounding-quotes (get-in node [1 1 1]))
                                  type-str (get-in node [1 0])
                                  type (type-str->type type-str)]
                              {id (assoc label-or-parent :type type)}))
        inner-nodes (map extract-node-info (drop 2 foldable))
        foldable-id-node {foldable-id-name {:type foldable-type
                                            :children (set (mapcat keys inner-nodes))
                                            :foldable (if (seq inner-nodes) true false)}}]
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
(def nodes-hierarchy
  (memoize
    (fn ([nodes-map]
         (let [to-remove (atom #{})
               n-hierarchy (nodes-hierarchy nodes-map (keys nodes-map) to-remove 0)]
           (apply dissoc n-hierarchy @to-remove)))
        ([nodes-map nodes-ids to-remove level]
         (into {}
           (mapcat (fn [node-id]
                     (let [v-children (:children (nodes-map node-id))]
                       (swap! to-remove into v-children)
                       ;; The level avoid that nodes defined in a circular way generates an infinite structure.
                       (if (< level 4)
                         {node-id (nodes-hierarchy nodes-map v-children to-remove (inc level))}
                         {node-id {}})))
                   nodes-ids))))))

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
  (get-in app-state [:domain :nodes-map] {}))
(re-frame/reg-sub ::nodes-ui nodes-ui)

(defn fold-ui
  [app-state]
  (get-in app-state [:ui :fold] {}))
(re-frame/reg-sub ::fold-ui fold-ui)

;; TODO: Also sort by the order that it was mentioned
;; TODO: Also sort inner structure
(defn sort-nodes
  [nodes-map nodes-hierarchy]
  (sort-by (fn [[k _v]] (-> k nodes-map :type)) nodes-hierarchy))

(defn all-instances-of-node-with-same-open-state-with-default
  "I created this version just I can use it with an existing fold-ui and use its
  values as default"
  [nodes-map nodes-hierarchy]
  (reduce
    (fn step-reduce [acc [k v]]
      (let [deeper-levels (reduce step-reduce {} (dissoc v :opened?))]
        (conj acc [k (assoc deeper-levels :opened? (get-in nodes-map [k :opened?] (:opened? v false)))])))
    {}
    nodes-hierarchy))

(defn all-instances-of-node-with-same-open-state
  "A node can have more than one instance, in multiple labels for example. As
  graph-text it can show up only once, so we are setting all occurrences of it
  to the same state."
  [nodes-map nodes-hierarchy]
  (reduce
    (fn step-reduce [acc [k v]]
      (let [deeper-levels (reduce step-reduce {} v)]
        (conj acc [k (assoc deeper-levels :opened? (:opened? (nodes-map k) false))])))
    {}
    nodes-hierarchy))

(defn nodes-map->fold-list
  [[nodes-map fold-ui]]
  (->> nodes-map
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
(re-frame/reg-flow
  {:id :f-fold-list
   :inputs {:nodes-map (re-frame/flow<- :nodes-map)
            :fold-ui [:ui :fold]}
   ;; :output (fn [{:keys [nodes-map fold-ui]}] (nodes-map->fold-list [(or nodes-map {}) (or fold-ui {})]))})
   :output (fn [{:keys [nodes-map fold-ui]}] (nodes-map->fold-list [nodes-map fold-ui]))
   ;; :output (with-defaults nodes-map->fold-list [:nodes-map {} :fold-ui {}])})
   :path [:flow-paths :f-fold-list]})

(defn get-edn-string
  ([all] (get-edn-string "" all))
  ([acc [_ s :as all]]
   (if (array? s)
     (reduce get-edn-string acc (rest all))
     (str acc s))))

(defn extract-edn-props
  [node-prop]
  (let [node-id (clean-surrounding-quotes (get-in node-prop [1 1 1 1]))
        edn (get node-prop 2)]
    [{node-id (cljs.reader/read-string (get-edn-string edn))}]))

(defn no-memo-nodes-map*
  [{:keys [graph-ast]}]
  (let [nodes-from-foldable-rules (->> graph-ast
                                    (filter #(= "foldable" (first %)))
                                    (mapv extract-nodes-from-foldable-rule))

        nodes-from-edges (->> graph-ast
                           (filter #(= "edge" (first %)))
                           (mapcat extract-nodes-from-edge-rule))
        node-props (->> graph-ast
                     (filter #(= "nodeProps" (first %)))
                     (mapcat extract-edn-props))

        ;; Consolidates the nodes from the 3 types of rules.
        merged-nodes
        (merge-nodes
          (concat nodes-from-foldable-rules
                  nodes-from-edges
                  node-props))

        ;; Extra step to go through the nodes and see what are the lixs' children to define
        ;; nodes parents and which ones are global
        nodes-with-parents
        (reduce (fn [nodes [k {:keys [type children]}]]
                  (if (= :lix type)
                    (reduce #(assoc-in %1 [%2 :parent] k) nodes children)
                    nodes))
                merged-nodes
                merged-nodes)]
    nodes-with-parents))

(def nodes-map* (memoize no-memo-nodes-map*))
(re-frame/reg-flow
 {:id     :nodes-map
  :inputs {:graph-ast [:ui :validation :valid-graph-ast]}
  :output nodes-map*
  :path   [:domain :nodes-map]})

;; TODO: I can eventually replace the subs by flows.
(defn nodes-map
  [app-state]
  (get-in app-state [:domain :nodes-map]))
(re-frame/reg-sub ::nodes-map nodes-map)

;; This one might be better as a reg-sub than a flow.
(defn nodes-map-name
  [nodes-map [_ node-id]]
  (try
    (:name (nodes-map node-id))
    (catch :default _
      nil)))
(re-frame/reg-sub
  ::nodes-map-name
  :<- [::nodes-map]
  nodes-map-name)

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
  (get-in app-state [:ui :hovered-node] #{}))
(re-frame/reg-sub ::hovered-node hovered-node)

(defn vis-option-hierarchy
  [app-state]
  (get-in app-state [:ui :vis-options :layout :hierarchical :enabled] false))
(re-frame/reg-sub ::vis-option-hierarchy vis-option-hierarchy)

(defn vis-view
  [app-state]
  (get-in app-state [:ui :vis-view] nil))
(re-frame/reg-sub ::vis-view vis-view)

;; (defn mouse-select-mode-sub
;;   [app-state]
;;   (get-in app-state [:ui :mouse-select-mode] false))
;; (re-frame/reg-sub ::mouse-select-mode mouse-select-mode-sub)
(re-frame/reg-sub
  ::mouse-select-mode
  :-> #(get-in % [:ui :mouse-select-mode] false))

(defn hidden-nodes
  [nodes-ui]
  (some->> nodes-ui
    (filter #(:hidden? (second %)))
    (map first)))
(re-frame/reg-sub
  ::hidden-nodes
  :<- [::nodes-ui]
  hidden-nodes)

(defn show-unhide-button?
  [[selected-nodes hidden-nodes]]
  (and hidden-nodes
       (> (count selected-nodes) 1)
       (seq (clojure.set/intersection
              (set selected-nodes)
              (set hidden-nodes)))))
(re-frame/reg-sub
  ::show-unhide-button?
  :<- [::selected-nodes]
  :<- [::hidden-nodes]
  show-unhide-button?)

(defn show-expand-button?
  [{:keys [selected-nodes fold-list]}]
  (->> fold-list
    (filter #(-> % :opened? false?))
    (map :node-id)
    (set)
    (clojure.set/intersection (set selected-nodes))
    (seq)))
(re-frame/reg-flow
  {:id :f-show-expand-button?
   :inputs {:selected-nodes (re-frame/flow<- :f-selected-nodes)
            :fold-list (re-frame/flow<- :f-fold-list)}
   :output show-expand-button?
   :path [:ui :f-show-expand-button?]})

(defn nodes-map->graph-text-reduce-step
  [nodes-map]
  (fn [[children edges props] [node-k* node-v]]
    (let [rename-if-label #(if (= :label (:type (get nodes-map % {}))) (str "=>"%) %)
          node-k (rename-if-label node-k*)
          node-children (seq (map rename-if-label (:children node-v)))
          edges-to (->> node-v :edges-to vals (map vec) flatten (map rename-if-label) seq)
          custom-props (dissoc node-v :type :edges-to :edges-from :label :children :foldable :parent)
          custom-props* (select-keys node-v [:name :position :hidden? :opened?])
          _ (assert (= custom-props custom-props*)
                    (str "Some new node property was added, so should it be included in the text model or not?\nThe difference was "(clojure.data/diff custom-props custom-props*)))]
      [(if node-children
         (apply str (flatten (concat [children node-k ":\n"] (map #(str "  "%"\n") node-children) ["\n"])))
         children)
       (if edges-to
         (apply str (flatten (concat [edges] (map #(str node-k" -> "%"\n") edges-to))))
         edges)
       (if (seq custom-props)
         (str props node-k" "custom-props"\n")
         props)])))
(defn nodes-map->graph-text
  [[nodes-map]]
  (->> nodes-map
    (reduce (nodes-map->graph-text-reduce-step nodes-map) ["" "" ""])
    ((fn [[children edges props]]
       (str children edges"\n"props)))))
(re-frame/reg-flow
  {:id :graph-text
   :inputs {:nodes-map (re-frame/flow<- :nodes-map)}
   :output (with-defaults nodes-map->graph-text [:nodes-map {}])
   :path [:domain :graph-text]})

;; This would be an example of a layer 2 reg-flow instead of reg-sub
;; Does it make sense to use it like this instead of a subscription? 🤷
(re-frame/reg-flow
  {:id :f-editing-graph-text
   :inputs {:editing-graph-text [:ui :editing-graph-text]}
   :output (with-defaults first [:editing-graph-text false])
   :path [:ui :editing-graph-text]})

(defn disable-select-source-target-button?
  [[selected]]
  (empty? selected))
(re-frame/reg-flow
  {:id :disable-select-source-target-button?
   :inputs {:selected (re-frame/flow<- :f-selected-nodes)}
   :output (with-defaults disable-select-source-target-button? [:selected #{}])
   :path [:flow-paths :disable-select-source-target-button?]})

;; DO NOT create new reg-subs, use reg-flow instead!

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

(defn keypress
  [app-state [_event keypressed]]
  (case keypressed
    "v" (assoc-in app-state [:ui :mouse-select-mode] false)
    "s" (assoc-in app-state [:ui :mouse-select-mode] true)
    app-state))
(re-frame/reg-event-db ::keypress keypress)

(defn set-graph-text
  [app-state [_event v]]
  (try
    (let [g-ast (graph-parser/graph-ast v)
          nm* (-> g-ast (#(into {:graph-ast %})) (nodes-map*))
          n-hierarchy (nodes-hierarchy nm*)
          fold-ui (get-in app-state [:ui :fold] {})
          new-fold-ui (if (seq fold-ui)
                        fold-ui
                        (all-instances-of-node-with-same-open-state ;; If we are loading the page, we don't have information about which nodes are opened, so we use what is loaded in nodes-map from graph-text.
                          nm*
                          n-hierarchy))]
      ;; (tap> {:new-fold-ui new-fold-ui})
      (-> app-state
        (assoc-in [:ui :fold] new-fold-ui)
        (assoc-in [:domain :graph-text] v)
        (assoc-in [:ui :validation :valid-graph-ast] g-ast)
        (assoc-in [:ui :validation :valid-graph?] true)))
    (catch :default _
      (-> app-state
        (assoc-in [:domain :graph-text] v)
        (assoc-in [:ui :validation :valid-graph?] false)))))
(re-frame/reg-event-db ::set-graph-text [event-to-analytics] set-graph-text)

(defn toggle-open-close
  [app-state [_event path]]
  (let [new-state (not (get-in app-state (concat [:ui :fold] path [:opened?]) false))]
    (-> app-state
      (assoc-in (concat [:ui :fold] path [:opened?]) new-state)
      (assoc-in [:domain :nodes-map (last path) :opened?] new-state))))

(re-frame/reg-fx
  :prepare-to-ctrl-c-selected-nodes
  (fn []
    (let [selection-el (-> js/document (.getElementById "selection"))
          range (-> js/document .createRange)]
      (-> js/window .getSelection .removeAllRanges)
      (-> range (.selectNodeContents selection-el))
      (-> js/window .getSelection (.addRange range)))))

(re-frame/reg-event-fx
  ::prepare-to-ctrl-c-selected-nodes
  (fn []
    {:fx [[:prepare-to-ctrl-c-selected-nodes]]}))

(defn nodes-list-item-clicked
  [{app-state :db} [event path]]
  (let [selected-nodes (get-in app-state [:ui :selected-nodes] #{})
        clicked-node (last path)
        nodes-map (get-in app-state [:domain :nodes-map])
        clicked-and-descendents (get-descendents nodes-map #{clicked-node})
        sel-cli-inter (set/intersection selected-nodes clicked-and-descendents)
        new-selection (if (= sel-cli-inter clicked-and-descendents)
                        (set/difference selected-nodes clicked-and-descendents)
                        (set/union selected-nodes clicked-and-descendents))]
    {:fx [[:dispatch-later {:ms 30 :dispatch [::prepare-to-ctrl-c-selected-nodes]}]]
     :db (if (get-in app-state [:ui :mouse-select-mode] false)
           (assoc-in app-state [:ui :selected-nodes] new-selection)
           (toggle-open-close app-state [event path]))}))
(re-frame/reg-event-fx
  ::nodes-list-item-clicked
  [event-to-analytics]
  nodes-list-item-clicked)

(defn round-by [step pos]
  (* step (js/Math.round (/ pos step))))

(defn set-vis-view
  [app-state [_event {:keys [view-position scale]}]]
  (assoc-in app-state [:ui :vis-view] {:position view-position :scale scale}))
(re-frame/reg-event-db ::set-vis-view set-vis-view)

(defn set-nodes-positions-hierarchy
  "Set the nodes positions, but differently of `set-nodes-positions`, it's
  triggered every time the drag ends and as a side effect the zoom is reset 😕"
  [app-state [event {:keys [dragging? nodes-positions* _view-position _scale] :as args}]]
  (if dragging?
    app-state
    (let [nodes-positions (reduce-kv (fn [m k {:strs [x y]}]
                                       (assoc m k {:position {"x" x "y" (round-by 100 y)}}))
                                     {}
                                     nodes-positions*)]
      ;; (tap> {:set-pos nodes-positions})
      (-> app-state
        (assoc-in [:ui :graph-dragging?] dragging?)
        (update-in [:domain :nodes-map] #(merge-with merge % nodes-positions))
        (set-vis-view [event args])))))
(re-frame/reg-event-db ::set-nodes-positions-hierarchy [event-to-analytics] set-nodes-positions-hierarchy)

(defn clear-nodes-positions
  [app-state]
  (update-in app-state [:domain :nodes-map] #(into {} (for [[k v] %] {k (dissoc v :position)}))))
(re-frame/reg-event-db ::clear-nodes-positions [event-to-analytics] clear-nodes-positions)

(defn drag-changed
  [app-state [_event dragging?]]
  (assoc-in app-state [:ui :graph-dragging?] dragging?))
(re-frame/reg-event-db ::drag-changed [event-to-analytics] drag-changed)

(defn toggle-hidden
  [app-state [_event node-id]]
  ;; (tap> {:c3 (get-in app-state [:ui :nodes])})
  (-> app-state
    (update-in [:domain :nodes-map node-id :hidden?] not)))
(re-frame/reg-event-db ::toggle-hidden [event-to-analytics] toggle-hidden)

(defn node-hovered
  [app-state [_event nodes-ids]]
  ;; (tap> {:node-hovered node-id})
  (assoc-in app-state [:ui :hovered-node] nodes-ids))
(re-frame/reg-event-db ::node-hovered node-hovered)

(defn debug-event
  [app-state [_event path value]]
  (assoc-in app-state path value))
(re-frame/reg-event-db ::debug-event debug-event)

(defn organize-hierarchy-positions
  [app-state [_event v]]
  (assoc-in app-state [:ui :vis-options :layout :hierarchical :enabled] v))
(re-frame/reg-event-db ::organize-hierarchy-positions [event-to-analytics] organize-hierarchy-positions)

(defn organize-hierarchy-positions-step-2
  [app-state [event nodes-positions]]
  (if (vis-option-hierarchy app-state)
    (-> app-state
      (set-nodes-positions-hierarchy [event {:dagging? false
                                             :nodes-positions* nodes-positions
                                             :view-position (get-in app-state [:ui :vis-view :position])
                                             :scale (get-in app-state [:ui :vis-view :scale])}])
      (assoc-in [:ui :vis-options :layout :hierarchical :enabled] false))
    app-state))
(re-frame/reg-event-db ::organize-hierarchy-positions-step-2 organize-hierarchy-positions-step-2)

(defn hide-all-or-selected
  [app-state]
  (let [selected-nodes (-> app-state :ui :f-selected-nodes)
        all-nodes (-> app-state (get-in [:domain :nodes-map] {}) (keys))
        nodes-to-hide (if (seq selected-nodes) selected-nodes all-nodes)
        hidden (->> nodes-to-hide
                 (map (fn [node-id] {node-id {:hidden? true}}))
                 (into {}))]
    (update-in app-state [:domain :nodes-map] #(merge-with merge % hidden))))
(re-frame/reg-event-db ::hide-all-or-selected [event-to-analytics] hide-all-or-selected)

(defn show-selected
  [app-state]
  (let [selected-nodes (-> app-state :ui :f-selected-nodes)
        unhidden (->> selected-nodes
                   (map (fn [node-id] {node-id {:hidden? false}}))
                   (into {}))]
    (update-in app-state [:domain :nodes-map] #(merge-with merge % unhidden))))
(re-frame/reg-event-db ::show-selected [event-to-analytics] show-selected)

(defn collapse-all-or-selected
  [app-state]
  (let [selected-nodes (-> app-state :ui :f-selected-nodes)
        all-nodes (-> app-state (get-in [:domain :nodes-map] {}) (keys))
        nodes-to-collapse (if (seq selected-nodes) selected-nodes all-nodes)
        closed (->> nodes-to-collapse
                 (map (fn [node-id] {node-id {:opened? false}}))
                 (into {}))
        close-all-instances #(all-instances-of-node-with-same-open-state-with-default closed %)]
    (update-in app-state [:ui :fold] close-all-instances)))
(re-frame/reg-event-db ::collapse-all-or-selected [event-to-analytics] collapse-all-or-selected)

(defn expand-selected
  [app-state]
  (let [selected-nodes (-> app-state :ui :f-selected-nodes)
        opened (->> selected-nodes
                 (map (fn [node-id] {node-id {:opened? true}}))
                 (into {}))
        open-all-instances #(all-instances-of-node-with-same-open-state-with-default opened %)]
    (update-in app-state [:ui :fold] open-all-instances)))
(re-frame/reg-event-db ::expand-selected [event-to-analytics] expand-selected)

(defn mouse-select-mode-evt
  [app-state [_event state]]
  (assoc-in app-state [:ui :mouse-select-mode] state))
(re-frame/reg-event-db ::mouse-select-mode [event-to-analytics] mouse-select-mode-evt)

(defn network-clicked
  [{app-state :db} [_event nodes]]
  (let [toggly-add #(set/difference (set/union %1 %2) (set/intersection %1 %2))]
    {:fx [[:dispatch-later {:ms 30 :dispatch [::prepare-to-ctrl-c-selected-nodes]}]]
     :db (if (get-in app-state [:ui :mouse-select-mode] false)
           (update-in app-state [:ui :selected-nodes] #(toggly-add (set %) nodes))
           (assoc-in app-state [:ui :selected-nodes] nodes))}))
(re-frame/reg-event-fx ::network-clicked [event-to-analytics] network-clicked)

(defn rerender-vis-sub
  [app-state]
  (get-in app-state [:ui :rerender-vis] false))
(re-frame/reg-sub ::rerender-vis-sub rerender-vis-sub)

(defn rerender-vis
  [app-state]
  (update-in app-state [:ui :rerender-vis] not))
(re-frame/reg-event-db ::rerender-vis rerender-vis)

(defn toggle-edit-graph-text-area
  [app-state]
  (update-in app-state [:ui :editing-graph-text] not))
(re-frame/reg-event-db ::toggle-edit-graph-text-area [event-to-analytics] toggle-edit-graph-text-area)

(defn select-source
  [{app-state :db}]
  (let [selected-nodes (-> app-state :ui :f-selected-nodes)
        vis-edges-from (-> app-state :ui :f-vis-data :edges (->> (filter #(contains? selected-nodes (:to %)))) (->> (map :from)) set)]
    ;; Yep, :clicked-nodes is not a perfect name, the idea is to have it selected as it was clicked..
    {:fx [[:dispatch-later {:ms 30 :dispatch [::prepare-to-ctrl-c-selected-nodes]}]]
     :db (assoc-in app-state [:ui :clicked-nodes] vis-edges-from)}))
(re-frame/reg-event-fx ::select-source [event-to-analytics] select-source)

(defn select-target
  [{app-state :db}]
  (let [selected-nodes (-> app-state :ui :f-selected-nodes)
        vis-edges-to (-> app-state :ui :f-vis-data :edges (->> (filter #(contains? selected-nodes (:from %)))) (->> (map :to)) set)]
    ;; Yep, :clicked-nodes is not a perfect name, the idea is to have it selected as it was clicked..
    {:fx [[:dispatch-later {:ms 30 :dispatch [::prepare-to-ctrl-c-selected-nodes]}]]
     :db (assoc-in app-state [:ui :clicked-nodes] vis-edges-to)}))
(re-frame/reg-event-fx ::select-target [event-to-analytics] select-target)

(comment
  (require '[re-frame.db])
  (clojure.set/union #{1 2} #{3 4})
  (->> @re-frame.db/app-db
    (#(get-in % [:domain :nodes-map]))
    (filter #(#{"FilhosDeMinervinaEElpidio"} (first %)))
    (map second)
    (mapcat :children)
    (concat #{"FilhosDeMinervinaEElpidio"}))
    ;; (first))
  (->> @re-frame.db/app-db
    (#(get-in % [:domain :nodes-map]))
    (map (fn [[k {:keys [position]}]]
           {k [(get position "x") (get position "y")]}))
    (into {})))

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

(defonce network (atom nil))

(defn graph-component-inner []
  (let [graph-component-id "looset-graph"
        update-comp (fn [component [_ prev-props]]
                      (let [prev-vis-data (:vis-data prev-props)
                            {:keys [selected-nodes vis-data options view]} (reagent/props component)]
                        ;; (def network network)
                        ^js (.setOptions @network options)
                        ;; (tap> {:vis-data vis-data})
                        (when (not= prev-vis-data vis-data)
                          (.setData @network (clj->js vis-data)))
                        (when view
                          (.moveTo @network #js {:position (:position view)
                                                 :scale (:scale view)}))
                        (.selectNodes @network selected-nodes)))
        mount-comp (fn [component]
                     (let [container (-> js/document (.getElementById graph-component-id))]
                       (reset! network (-> vis-network .-Network (new container nil #_options))))
                     (.on @network "dragStart" #_(js/console.log "dragStart") #(>evt [::drag-changed true]))
                     (.on @network "dragEnd" #(>evt [::set-nodes-positions-hierarchy {:dragging? false
                                                                                      :nodes-positions* (js->clj ^Object (.getPositions @network))
                                                                                      :view-position ^Object (.getViewPosition @network)
                                                                                      :scale ^Object (.getScale @network)}]))
                     (.on @network "zoom" #(>evt [::set-vis-view {:view-position ^Object (.getViewPosition @network)
                                                                  :scale ^Object (.getScale @network)}]))
                     (.on @network "afterDrawing" #_(js/console.log "configChange")
                          ;; For some reason (specific to visjs) if I don't give this
                          ;; extreme little time extra to organize the graph, it
                          ;; settles with x positions much sparser, might be a hacky
                          ;; solution and this timeout might depend on the environment,
                          ; ;but it's working for now.
                          #(js/setTimeout (fn [] (>evt [::organize-hierarchy-positions-step-2 (js->clj ^Object (.getPositions @network))]))
                                          20))
                     (.on @network "click" #(do (>evt [::network-clicked (set ^js(.-nodes %))])
                                                (when (empty? ^js(.-nodes %)) ;; To avoid the automatic behavior of deselecting all nodes.
                                                  (>evt [::rerender-vis]))))
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
   {:rerender (<sub [::rerender-vis-sub])
    :selected-nodes (clj->js (<sub [::selected-nodes-visible]))
    :vis-data       @(re-frame/sub :flow {:id :f-vis-data})
    :number-input (<sub [::number-input 1])
    :number-input2 (<sub [::number-input 2])
    :view (<sub [::vis-view])
    :options #js {:layout #js {:hierarchical #js {:enabled (<sub [::vis-option-hierarchy])
                                                  :direction "UD"
                                                  :sortMethod "directed"
                                                  :shakeTowards "roots"}}
                                                  ;; :nodeSpacing (int (<sub [::number-input]))}}
                  :physics #js {:enabled false
                                :minVelocity 1
                                :barnesHut
                                #js {:gravitationalConstant (<sub [::number-input 1])
                                     :centralGravity (* 0.01 (<sub [::number-input 2]))}}

                                ;; :hierarchicalRepulsion #js {:avoidOverlap 1
                                ;;                             :nodeDistance 300}}
                  ;; :minVelocity 1.2}
                  :nodes #js {:borderWidth 1}}}])
                              ;; :mass 0.5}}}])

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
   [:button.button-1
    {:title "edit graph"
     :onClick #(>evt [::toggle-edit-graph-text-area])}
    [:svg
     {:width "30" :height "30" :fill "currentColor" :viewBox "0 0 16 16" :xmlns "http://www.w3.org/2000/svg"}
     [:path {:fill-rule "evenodd" :d "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}]
     [:path {:fill-rule "evenodd" :d "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"}]]]
   [:a {:target "_blank" :href "https://docs.google.com/forms/d/e/1FAIpQLSc5SouA_vEHW8jqYrbt7IASidgaTngEwlclkrgeQ6RQXzM5nA/viewform?usp=sf_link"}
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
  [:svg#eye.hover-gray-svg
   (merge
     props
     {:fill "currentColor" :viewBox "0 0 16 16" :xmlns "http://www.w3.org/2000/svg"})
   [:path {:fill-rule "evenodd" :d "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}]
   [:path {:fill-rule "evenodd" :d "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}]])

(defn svg-filled-eye
  [props]
  [:svg#eye.hover-gray-svg
   (merge
     props
     {:fill "#4a484a" :viewBox "0 0 16 16" :xmlns "http://www.w3.org/2000/svg"})
   [:path {:fill-rule "evenodd" :d "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}]
   [:path {:fill-rule "evenodd" :d "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}]])

(defn node-view
  [{:keys [class]
    {:keys [color]} :style
    {:keys [level hidden? path node-id]} :node}
   text]
  (let [selected-node? (<sub [::selected-node? node-id])
        mouse-select-mode (<sub [::mouse-select-mode])
        foldable-node? (<sub [::foldable-node? node-id])]
    [:div
     {:style {:paddingLeft (+ 5 (* 12 level))}
      :class class
      :onMouseOver #(>evt [::node-hovered #{node-id}])
      :onMouseOut #(>evt [::node-hovered #{}])}
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
      {:onClick #(>evt [::nodes-list-item-clicked path])
       :class (str (when selected-node? "selected-shadow ")
                   (cond
                     mouse-select-mode "hover-gray select-mode-cursor"
                     foldable-node? "hover-gray"
                     :else ""))
       :style {:color (or color "inherit")}}
      text]]))

(defn svg-label
  [{:keys [color opened?]}]
  (let [rotation-degree (if opened? "45" "0")]
    [:svg
     {:width "20.3125" :height "13"
      :transform (str "rotate ("rotation-degree")")
      :viewBox (str "20 0 15 32")}
     [:g
      [:rect
       {:fill color
        :width "26.326736" :height "27.940695"
        :x "4"
        :y "4"
        :ry "3.7885695"}]
      [:path {:fill color
              :d "m 24,4 9.30351,0.007 13.81581,13.815798 -13.8158,14.110975 -11.32617,0.007"}]]]))

(defn svg-arrow-triangle
  [{:keys [opened?]}]
  (let [rotation-degree (if opened? "0" "-90")]
    [:svg
     {:width "16" :height "16" :viewBox "0 0 16 16" :fill "#4a484a"
      :transform (str "rotate ("rotation-degree")")
      :style {:verticalAlign "middle"}}
     [:path {:d "M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"}]]))

(defn label-node [{:keys [node-id color opened?] :as node-item}]
  (let [node-name (<sub [::nodes-map-name node-id])]
    [node-view
     {:node node-item
      :class "label-style"
      :style {:color color}}
     [:<>
       [svg-label {:opened? opened?
                   :color color}]
       (or node-name node-id)]]))

(defn lix-node [{:keys [node-id opened?] :as node-item}]
  [node-view
   {:node node-item
    :class "lix-style"}
   [:<>
     (when-not (nil? opened?)
       [svg-arrow-triangle {:opened? opened?}])
     node-id]])

(defn nodes-list-view []
  [:div
   {:style {:opacity (if (<sub [::valid-graph?]) "100%" "40%")}}
   (for [node-item (<sub [::fold-list])
         :let [node-type-comp ({:label label-node :lix lix-node} (:node-type node-item))]]
     ;; ^{:key text} ;; Somehow I'm using this key wrongly, if it's uncomment, the items repeat depending on the change.
     [node-type-comp node-item])])

(def black-cursor-svg-path "M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z")

(defn left-buttons []
  (let [icons-size "22"]
    [:div
     {:style {:position "relative"
              :height "0px"
              :z-index "10"}}
     [:div
      {:style {:z-index "10"
               :display "flex"
               :flex-direction "column"
               :align-items "flex-start"
               :padding "10px"
               :inline-size "fit-content"}}
      [:button.button-2
       {:title "move (shortcut: v)"
        :onClick #(>evt [::mouse-select-mode false])}
       [:svg
        {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
        [:path {:fill-rule "evenodd" :d "M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52z"}]]]
      [:button.button-2
       {:title "select (shortcut: s)"
        :onClick #(>evt [::mouse-select-mode true])}
       [:svg
        {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
        [:path {:fill-rule "evenodd" :d black-cursor-svg-path}]]]
      [:div
       {:style {:height "2px"
                :width "28px"
                :background-color "#000000a1"
                :align-self "center"
                :margin "3px 0px"}}]
      [:button.button-2
       {:title "hierarchy layout"
        :onClick #(>evt [::organize-hierarchy-positions true])}
       [:svg
        {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
        [:path {:fill-rule "evenodd" :d "M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z"}]]]
      [:button.button-2
       {:title "default layout"
        :onClick #(>evt [::clear-nodes-positions])}
       [:svg
        {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
        [:path {:fill-rule "evenodd" :d "M5 1v8H1V1zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm13 2v5H9V2zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 13v2H3v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm12-1v2H9v-2zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"}]]]
      (if (<sub [::show-unhide-button?])
        [:button.button-2
         {:title "show selected"
          :onClick #(>evt [::show-selected])}
         [:svg
           {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
           [:path {:fill-rule "evenodd" :d "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"}]
           [:path {:fill-rule "evenodd" :d "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"}]]]
        [:button.button-2
         {:title "hide all selected"
          :onClick #(>evt [::hide-all-or-selected])}
         [:svg
          {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
          [:path {:fill-rule "evenodd" :d "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}]
          [:path {:fill-rule "evenodd" :d "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}]]])
      (if @(re-frame/sub :flow {:id :f-show-expand-button?})
        [:button.button-2
         {:title "expand selected"
          :onClick #(>evt [::expand-selected])}
         [:svg
          {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
          [:path {:fill-rule "evenodd" :d "M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10"}]]]
        [:button.button-2
         {:title "collapse all"
          :onClick #(>evt [::collapse-all-or-selected])}
         [:svg
          {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
          [:path {:fill-rule "evenodd" :d "M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"}]]])
      (let [disable? @(re-frame/sub :flow {:id :disable-select-source-target-button?})]
        [:<>
         [:button.button-2
          {:title "select source"
           :onClick #(>evt [::select-source])
           :style (when disable?
                    {:borderColor "#00000024"
                     :cursor "not-allowed"})}
          [:svg
           {:width icons-size :height icons-size :fill (if disable? "#00000024" "currentColor") :viewBox "0 0 16 16"}
           [:path {:fill-rule "evenodd" :d "M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"}]
           [:path {:fill-rule "evenodd" :d "M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"}]]]
         [:button.button-2
          {:title "select target"
           :onClick #(>evt [::select-target])
           :style (when disable?
                    {:borderColor "#00000024"
                     :cursor "not-allowed"})}
          [:svg
           {:width icons-size :height icons-size :fill (if disable? "#00000024" "currentColor") :viewBox "0 0 16 16"}
           [:path {:fill-rule "evenodd" :d "M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"}]
           [:path {:fill-rule "evenodd" :d "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"}]]]])]]))

(def code-font-family "dejavu sans mono, monospace")
(def code-font-size "small")
(def code-margin "0")
(def code-padding "0 10px")

(defn edit-raw-graph-text []
  [:textarea
   {:style {:flex-grow "1"
            :margin code-margin
            :padding code-padding
            :min-height "20vw"
            :font-family code-font-family
            :font-size code-font-size}
    :onChange #(>evt [::set-graph-text (-> % .-target .-value)])
    :value @(re-frame/sub :flow {:id :graph-text}) #_(<sub [::graph-text])}])

(defn debug-quick-val-set []
  [:<>
    [:<>
     [:span "Range1 "(<sub [::number-input 1])]
     [:input {:type "range"
              :min -5000
              :max 1000
              :value (<sub [::number-input 1])
              :onChange #(>evt [::set-number-input (-> % .-target .-value) 1])}]
     [:span "Range2 "(<sub [::number-input 2])]
     [:input {:type "range"
              :min 0
              :max 100
              :value (<sub [::number-input 2])
              :onChange #(>evt [::set-number-input (-> % .-target .-value) 2])}]]
    [:<> [:span "Number"] [:input {:type "number"
                                   :value (<sub [::number-input 1])
                                   :onChange #(>evt [::set-number-input (-> % .-target .-value)])}]]
    [:<> [:span "Toggle"] [:input {:type "checkbox"
                                   :onChange #(do (>evt [::set-toggle-input (-> % .-target .-checked)])
                                                  (>evt [::organize-hierarchy-positions (-> % .-target .-checked)]))}]]])

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

   .hover-gray-svg:hover {
     filter: drop-shadow(0px 2px 6px #0008);
     cursor: pointer;
   }

   .hover-gray:hover {
     text-shadow: -5px 3px 7px;
     cursor: pointer;
   }

   .selected-shadow {
     text-shadow: -5px 3px 7px #59d0e8;
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

   .button-2:active {
     background-color: #00000020;
   }

   .button-2 {
      background-color: #0000000d;
      backdrop-filter: blur(3px);
      border-radius: 8px;
      border-style: solid;
      border-width: 2px;
      border-color: #000000a1;
      box-sizing: border-box;
      cursor: pointer;
      padding: 4px;
      margin: 4px 0px;
      transition: color 100ms;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
   }

   .lix-style {
     display: flex;
     flex-direction: row;
     font-family: "label-font-family", sans-serif;
     font-size: large;
     padding-bottom: 10px;
     align-items: center;
     color: #4a484a;
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

   .select-mode-cursor {
     cursor: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 16 16'%3E%3Cpath d='"black-cursor-svg-path"'/%3E%3C/svg%3E\" ) 19 0,crosshair !important;
   }
   ")])

(defn ctrl-c-selected-nodes
  "This is a workaround to be able to copy the id of selected nodes.
  It's a div that is outside of the viewport, its content is the selected nodes
  and its text is selected when new nodes are selected. If ctrl-c is pressed,
  then its text is copied."
  []
  [:div#selection
   {:style {:position "absolute"
            :top "110vh"
            :padding-left "50vw"}}
   (interleave (<sub [::raw-selected-nodes]) (repeat [:br]))])

(defn main []
  [:<>
   [global-style]
   [ctrl-c-selected-nodes]
   [:div#panel-container
    {:class (when (<sub [::mouse-select-mode])
               "select-mode-cursor")
     :style {:display "flex"
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
     [left-buttons]
     [util/error-boundary
      {:if-error [:h2 "erro"]}
      [graph-component]]]
    [panel-splitter]
    [:div#right-panel
     {:style {:width (str "calc(100vw - "(<sub [::left-panel-size])")")
              :overflow "auto"
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
       (when @(re-frame/sub :flow {:id :f-editing-graph-text})
         [edit-raw-graph-text])]
     [botton-buttons]]]])
     ;; [:div
     ;;  (<sub [::fold-list])]
     ;; [:div
     ;;  (str @(re-frame/sub :flow {:id :f-editing-graph-text}))]]]])
     ;; ;; This is for testing values in a fast way, can be plugged in different components.
     ;; [debug-quick-val-set]]]])

(defn set-toggle-input
  [app-state [_event n]]
  (assoc-in app-state [:ui :toggle-input] n))
(re-frame/reg-event-db ::set-toggle-input set-toggle-input)

(defn toggle-input
  [app-state]
  (get-in app-state [:ui :toggle-input] false))
(re-frame/reg-sub ::toggle-input toggle-input)

(defn set-number-input
  [app-state [_event n knob]]
  (assoc-in app-state [:ui :number-input knob] n))
(re-frame/reg-event-db ::set-number-input set-number-input)

(defn number-input
  [app-state [_ knob]]
  (get-in app-state [:ui :number-input knob] 0))
(re-frame/reg-sub ::number-input number-input)

;; ---- Initialization ----

(def initial-state
  {:domain {:graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label2:\n  node5\n\nnode3:\n  node4\n  node5\n\nnode1 -> node2\nnode4->node1\nnodeA->nodeB"
            :nodes-map {}}
   :ui {:panels {:resizing-panels false
                 :left-panel-size "65vw"}
        :editing-graph-text false
        :fold {}}})

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

(def set-url-state-interceptor
  (re-frame.std-interceptors/on-changes
    (fn [graph-text]
      (.then (gzip-compress graph-text)
             #(let [loc js/window.location]
                (js/window.history.pushState
                  graph-text nil
                  (str loc.origin loc.pathname"?graph="
                       (js/encodeURIComponent (js/btoa %)))))))
    nil [:domain :graph-text]))
(re-frame/reg-global-interceptor set-url-state-interceptor)

(defn init-url-history-observer []
  (js/window.addEventListener
    "popstate"
    #(do (js/console.log "back pressed")
         (js/console.log "event" (.-state %)))))
         ;; (>evt [::set-graph-text (.-state %)]))))

(defn init-mousemove []
  (js/document.body.addEventListener
    "mousemove"
    #(>evt [::mouse-moved (-> % .-x) (-> % .-y)])))

(defn init-keyboard-events []
  (js/document.body.addEventListener
    "keypress"
    #(>evt [::keypress (-> % .-key)])))

(re-frame/reg-event-db
  ::set-app-state
  [event-to-analytics]
  (fn [_ [event graph-text]]
    (set-graph-text initial-state [event graph-text])))

(defn init-state []
  (let [compressed-graph (.get (js/URLSearchParams. js/window.location.search) "graph")
        default-graph (get-in initial-state [:domain :graph-text])]
    (if compressed-graph
      (.then (gzip-decompress (js/atob compressed-graph))
             #(re-frame/dispatch-sync [::set-app-state %]))
      (re-frame/dispatch-sync [::set-app-state default-graph]))))

;; Snippets about mouse-up event
(defn mouse-up
  [app-state]
  (-> app-state
    (resizing-panels [::mouse-up false])
    (assoc-in [:ui :diagram :zooming?] false)))
(re-frame/reg-event-db ::mouse-up mouse-up)
(defn init-mouseup []
  (js/document.body.addEventListener
    "mouseup"
    #(>evt [::mouse-up false])))

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
  (mount-app-element)
  (init-mouseup)
  (init-url-history-observer)
  (init-keyboard-events))
  ;; (init-style-observer))
