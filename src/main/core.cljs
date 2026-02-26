(ns core
  (:require
    [clojure.edn :as edn]
    [looset-graph.app :as looset-graph]
    [looset-graph.util :as util :refer [<sub >evt]]
    [looset-trace.app :as looset-trace]
    [re-frame.alpha :as re-frame]
    [reagent.dom]))

(defn root-component []
  (let [mode (<sub [::looset-graph/app-mode])]
    (if (= mode :trace)
      [looset-trace/main]
      [looset-graph/main])))

(defn ^:dev/after-load mount-app-element []
  (when ^boolean js/goog.DEBUG ;; Code removed in production
    (re-frame/clear-subscription-cache!))
  (when-let [el (.getElementById js/document "root")]
    (reagent.dom/render [root-component] el)))

;; TODO: Might be better using fetch instead of xhr.
; It avoids callback hell and is the current standard.
(defn load-resources-meta! []
  (-> (js/fetch "/resources-meta.edn")
      (.then (fn [response]
               (if (.-ok response)
                 (.text response)
                 (throw (js/Error. (str "HTTP Error: " (.-status response)))))))
      (.then (fn [text]
               (try
                 ;; Safely parse the EDN string
                 (>evt [::util/assoc-in [:domain :resources-meta] (edn/read-string text)])
                 (js/console.log "Successfully loaded resources-meta.edn")
                 (catch :default e
                   ;; Safely catch syntax errors in the EDN file
                   (js/console.error "Failed to parse resources-meta.edn. Check syntax!" e)))))
      (.catch (fn [err]
                ;; Catch network or 404 errors
                (js/console.error "Network or fetch error loading resources:" err)))))

(defn init []
  (looset-graph/init-state)
  (looset-graph/init-mousemove)
  (mount-app-element)
  (looset-graph/init-mouseup)
  (looset-graph/init-url-history-observer)
  (looset-graph/init-keyboard-events)
  ;; (looset-graph/init-style-observer))
  (looset-graph/init-url-state-timer)
  (re-frame/dispatch-sync [::looset-graph/fetch-markdown-explanation-content])
  (load-resources-meta!))
