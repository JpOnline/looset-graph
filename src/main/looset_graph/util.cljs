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

;; -- Re-Frame generics
;; --- Gemini's recommendation:
;; ---------------------------------------------------------
;; Generic for Inputs, Specific for Output.
; Events: Use generic ::assoc-in for simple form inputs and UI toggles. It saves immense time.
; Subscriptions: Keep domain-specific subscriptions for your main entities. Even if they are just a get-in wrapper today, they act as a "Contract."
;; ---
;; Set a value at a path
(re-frame/reg-event-db
 ::assoc-in
 (fn [db [_ path value]]
   (if (vector? path)
     (assoc-in db path value)
     (do (js/console.error "path must be a vector" path) db))))

;; Update a value with a function (e.g., incrementing a counter)
(re-frame/reg-event-db
 ::update-in
 (fn [db [_ path f & args]]
   (if (vector? path)
     (apply update-in db path f args)
     (do (js/console.error "path must be a vector" path) db))))

;; Remove keys from a map at a path
(re-frame/reg-event-db
 ::dissoc-in
 (fn [db [_ path keys-to-remove]]
   (let [ks (if (coll? keys-to-remove) keys-to-remove [keys-to-remove])]
     (update-in db path #(apply dissoc % ks)))))

(re-frame/reg-event-db
 ::toggle
 (fn [db [_ path]]
   (update-in db path not)))
; Usage:
; [:button {:on-click #(re-frame/dispatch [::util/toggle [:ui :sidebar-open?]])} "Toggle"]
;; ---------------------------------------------------------
;; --- My notes before starting using it
;; ---------------------------------------------------------
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
;; --
