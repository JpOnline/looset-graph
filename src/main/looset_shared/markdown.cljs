(ns looset-shared.markdown
  "Markdown rendering shared by looset-graph.app and looset-trace.app. Kept free of
  any dependency on those app namespaces so both can require it without a cycle.
  Moved here (verbatim) from looset-trace.app / looset-graph.app."
  (:require
    ["react-markdown" :default ReactMarkdown]
    [clojure.string :as str]
    [looset-graph.util :as util :refer [<sub >evt]]
    [re-frame.alpha :as re-frame]
    [reagent.core :as reagent]))

;; --- Curated-resource depth / diataxis helpers -------------------------------

(defn depth->color [depth]
  (let [top-brightness 100
        lowest-brightness 0
        lightness (- top-brightness (* (/ depth 100) (- top-brightness lowest-brightness)))]
    (str "hsl(215, 80%, " lightness "%)")))

(defn get-gradient-style [start-depth end-depth]
  (let [color-start (depth->color start-depth)
        color-end   (depth->color end-depth)]
    {:background (str "linear-gradient(to bottom, " color-start ", " color-end ")")}))

(defn calculate-depth-gradients [resources]
  (if (empty? resources)
    []
    (let [sorted-resources (sort-by :depth resources)
          total-count      (count sorted-resources)]
      (if (= 1 total-count)
        ;; Fallback if there is only 1 resource
        (let [d (:depth (first sorted-resources))]
          [(assoc (first sorted-resources) :start-depth d :end-depth d)])

        ;; Calculate uniform steps for 2 or more resources
        (let [min-depth (:depth (first sorted-resources))
              max-depth (:depth (last sorted-resources))
              step      (/ (- max-depth min-depth) total-count)]

          (map-indexed
           (fn [idx res]
             (assoc res
                    :start-depth (+ min-depth (* idx step))
                    :end-depth   (+ min-depth (* (inc idx) step))))
           sorted-resources))))))

(defn calculate-depth
  "Defines a first grade based on the :media-type, than sum more points.
  But in general the order is
    Game
    Video
    Q&A
    Book
    Reference
  "
  [resource]
  (cond->
    (condp some (:media-type resource)
      #{:game :simulation} 20
      #{:video}            30
      #{:Q&A}              60
      #{:book}             70
      #{:reference}        80
      #{:text}             50 ;; default texts depth
      50) ;; default value
    (= :advanced (:experience-level resource)) (+ 15)
    (= :beginner (:experience-level resource)) (- 15)))

(defn ->content-type [diataxis-type]
  (let [{:keys [how-to tutorial explanation reference]}
        (if (set? diataxis-type)
          (reduce #(into %1 {%2 (/ 1 (count diataxis-type))}) {} diataxis-type)
          diataxis-type)]
    (cond
      (and (>= tutorial 0.4) (>= explanation 0.4)) "Learn it"
      (and (>= how-to 0.4) (>= reference 0.4)) "Do it"
      (and (>= tutorial 0.4) (>= how-to 0.4)) "Heands on"
      (and (>= explanation 0.4) (>= reference 0.4)) "Understand"
      (>= tutorial 0.5) "Practice"
      (>= explanation 0.5) "Theory"
      (>= reference 0.5) "Reference"
      (>= how-to 0.5) "How-to Guide"
      :else nil)))

(defn parse-resource-urls
  "One resource URL per non-blank line of the code block's raw text."
  [raw-text]
  (some->> (str/split raw-text #"\n")
    (remove str/blank?)))

(defn resolve-resources
  "Look up each url's metadata in resources-meta; fall back to a bare
  {:title url :depth 50} entry when the url isn't known."
  [resources-meta urls]
  (map #(into (get resources-meta % {:title % :depth 50}) {:url %}) urls))

(defn resource-type-icon [media-type]
  (condp some media-type
    #{:game} "🎮 "
    #{:video} "🎬 "
    #{:tutorial} "🪜 "
    #{:Q&A} "💡 "
    #{:book} "📚 "
    #{:reference} "🔍 "
    #{:simulation} "⚙️ "
    #{:text} "📄 "
    #{:article} "🗞️ "
    ""))

(defn resource-subtitle
  "Text under a resource card's title: a type icon, then either the diataxis
  content-type label or (if that can't be determined) the resource's summary."
  [{:keys [media-type diataxis-type summary]}]
  (str (resource-type-icon media-type) (or (->content-type diataxis-type) summary)))

(defn assert-resources-meta!
  [resources-meta]
  ;; Every key is a string.
  (when-let [resources-with-problem (seq (remove string? (keys resources-meta)))]
    (throw (ex-info "resources-meta has a problem. Some key is not a string." {:keys-with-problem resources-with-problem})))
  ;; No resource key is a string.
  (when-let [resources-with-problem (seq (remove keyword? (->> resources-meta (vals) (map keys) (flatten))))]
    (throw (ex-info "resources-meta has a problem. Some resource has a string." {:keys-with-problem resources-with-problem}))))

(defn all-resources-meta [app-state]
  (let [resources-meta (get-in app-state [:domain :resources-meta] {})]
    (when ^boolean js/goog.DEBUG (assert-resources-meta! resources-meta))
    resources-meta))
(re-frame/reg-sub ::all-resources-meta all-resources-meta)

;; --- Markdown rendering ------------------------------------------------------

(defn markdown-view-node-link [js-props]
  (let [href (-> js-props .-node .-properties .-href)
        children (.-children js-props)
        node-id (some-> href (subs 5) js/decodeURIComponent)]
    (if (and href (str/starts-with? href "node:"))
      ;; Intercept Link for Internal Navigation
      (reagent/as-element
        [:a.internal-link
         {:href href
          :on-click (fn [e]
                      (.preventDefault e)
                      (>evt [:looset-trace.app/node-link-clicked node-id])
                      ;; Extract ID (remove 'node:') and log
                      (js/console.log "Clicked internal node:" (subs href 5)))}
         children])

      ;; Fallback: Default External Link
      (reagent/as-element [:a {:href href :target "_blank"} children]))))

(defn markdown-view [content]
  (let [custom-components
        {:a markdown-view-node-link
         :code (fn [js-props]
                 (let [class-name (.-className js-props)
                       inline? (.-inline js-props)
                       ;; ReactMarkdown passes the text content as an array in children
                       children (.-children js-props)
                       raw-text (when (seq children) (first children))
                       urls (parse-resource-urls raw-text)
                       resources-meta (when (seq urls) (<sub [::all-resources-meta]))
                       raw-resources (resolve-resources resources-meta urls)
                       resources-with-gradient (->> raw-resources
                                                 (map #(assoc % :depth (calculate-depth %)))
                                                 (calculate-depth-gradients))]
                   (cond
                     inline?
                     (reagent/as-element [:code.markdown-inline-code {:class class-name} children])

                     (= class-name "language-curated-resources")
                     (reagent/as-element
                      [:div.resource-list
                        (for [{:keys [url title start-depth end-depth] :as resource} resources-with-gradient]
                          ^{:key url}
                          [:a.resource-card
                           {:href url :target "_blank" :rel "noopener noreferrer"}
                           ;; The Visual Depth Gradient
                           [:div.depth-indicator {:style (get-gradient-style start-depth end-depth)}]
                           [:div.res-title title]
                           [:div.res-meta (resource-subtitle resource)]])])

                     :else ;; Fallback: Default Code Block
                     (reagent/as-element [:code.markdown-block-code {:class class-name} children]))))}]

    ;; Render the ReactMarkdown component
    [:> ReactMarkdown
     {:components (clj->js custom-components)
      :children content}]))

;; CSS for the classes markdown-view emits. Render once per app that uses
;; markdown-view.
;; `.internal-link` is intentionally omitted: it already lives in
;; looset-graph.app/global-style, which is rendered in both app modes.
(defn markdown-styles []
  [:style "
    .resource-list { display: flex; flex-direction: column; gap: 12px; }
    .resource-card {
      position: relative; padding: 12px 16px 12px 24px; border-radius: 8px;
      background: #f9fafb; border: 1px solid #f3f4f6;
      display: flex; flex-direction: column; overflow: hidden;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    .resource-card:hover { background: #f3f4f6; }
    .depth-indicator {
      position: absolute; left: 0; top: 0; bottom: 0; width: 6px;
    }
    .res-title { font-weight: 600; color: #374151; font-size: 0.95rem; }
    .res-meta { font-size: 0.8rem; color: #9ca3af; margin-top: 4px; }
    .markdown-inline-code {
      background-color: #f3f4f6;
      padding: 2px 6px;
      border-radius: 4px;
      color: #ef4444;
      font-family: monospace;
      font-size: 0.9em;
    }
    .markdown-block-code {
      display: block;
      overflow-x: auto;
      white-space: pre;
      background-color: #f1f5f9;
      border: 1px solid #e2e8f0;
      padding: 16px;
      margin: 12px 0;
      border-radius: 8px;
      color: #334155;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 0.9rem;
      line-height: 1.5;
    }
  "])
