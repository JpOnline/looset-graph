(ns core
  (:require
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

(defn init []
  (looset-graph/init-state)
  (looset-graph/init-mousemove)
  (mount-app-element)
  (looset-graph/init-mouseup)
  (looset-graph/init-url-history-observer)
  (looset-graph/init-keyboard-events)
  ;; (looset-graph/init-style-observer))
  (looset-graph/init-url-state-timer))
