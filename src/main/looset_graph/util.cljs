(ns looset-graph.util
  (:require
    [re-frame.alpha :as re-frame]
    [reagent.core :as reagent]))

(defn with-mount-fn
  "Wrap component in the create-class fn so the react component-did-mount
  hook can be used."
  [[_n {:keys [component-did-mount component-did-update]} :as to-render]]
  (reagent/create-class
    {:reagent-render #(into [] (update-in to-render [1]
                                          dissoc :component-did-mount))
     :component-did-mount component-did-mount
     :component-did-update component-did-update}))

(defn error-boundary []
  (let [error (reagent/atom nil)]
    (reagent/create-class
      {:component-did-catch (fn [this e info] (js/console.log "this" this "e" e "info" info)) ;; For side effects, like logging the error.
       :get-derived-state-from-error (fn [e]
                                       (reset! error e)
                                       (js/setTimeout
                                         #(do
                                            (js/console.log "Retrying to load component")
                                            (reset! error nil))
                                         500)
                                       #js {})
       :reagent-render (fn [{:keys [if-error]} & children]
                         (if @error
                           [:<> if-error]
                           [:<> (map-indexed #(with-meta %2 {:key %1}) children)]))})))

(def <sub (comp deref re-frame/subscribe))
(def >evt re-frame/dispatch)

(defn get-pred
  "Returns the first element of coll that satisfies the predicate f."
  [f coll]
  (some #(when (f %) %) coll))
