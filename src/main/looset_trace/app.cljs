(ns looset-trace.app
  (:require
    [reagent.core :as reagent]
    [re-frame.alpha :as re-frame]
    [clojure.string :as str]))

(defn trace-styles []
  [:style "
    /* Global App Container */
    .app-container {
      position: relative;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      background: #fafafa;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #202124;
    }

    /* -----------------------------------------
       Background Graph Layer
       ----------------------------------------- */
    .graph-bg {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 4rem;
      font-weight: 700;
      color: #e5e7eb;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.8s ease;
    }

    /* Reveal the graph when in trace state */
    .state-trace .graph-bg {
      opacity: 1;
    }

    /* -----------------------------------------
       Interaction Layer (The panel that moves)
       ----------------------------------------- */
    .interaction-layer {
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 100%;
      top: 0;
      display: flex;
      flex-direction: row;
      /* Cubic-bezier for a snappy, modern slide effect */
      transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .state-trace .interaction-layer {
      top: 70%;
      height: 30%;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      border-top: 1px solid #e5e7eb;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.05);
    }

    /* -----------------------------------------
       Problem Panel (Left Side)
       ----------------------------------------- */
    .problem-panel {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      position: relative;
    }

    .state-trace .problem-panel {
      width: 50%;
      border-right: 1px solid #e5e7eb;
    }

    /* -----------------------------------------
       Knowledge Panel (Right Side)
       ----------------------------------------- */
    .knowledge-panel {
      width: 0%;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      /* Delay opacity to let the slide start first */
      transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease 0.3s;
    }

    .state-trace .knowledge-panel {
      width: 50%;
      opacity: 1;
    }

    /* -----------------------------------------
       Search UI (Zero-State content)
       ----------------------------------------- */
    .search-ui {
      width: 100%;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .state-trace .search-ui {
      opacity: 0;
      transform: translateY(-20px); /* Slight upward slide when fading out */
      pointer-events: none;
      position: absolute; /* Takes it out of flow so Trace UI can center */
    }

    .trace-logo { font-size: 2.5rem; font-weight: 600; letter-spacing: -0.05rem; margin-bottom: 2rem; color: #1a1a1a; }

    .search-container { position: relative; width: 100%; max-width: 650px; z-index: 50; }

    .search-box {
      display: flex; align-items: center; width: 100%;
      background: #ffffff; border: 1px solid #dfe1e5;
      box-shadow: 0 1px 5px rgba(32,33,36,0.1); border-radius: 24px;
      padding: 14px 24px; transition: all 0.2s ease-in-out;
    }
    .search-box.has-dropdown { border-bottom-left-radius: 0; border-bottom-right-radius: 0; box-shadow: 0 4px 6px rgba(32,33,36,0.1); border-bottom-color: transparent; }
    .search-box:hover, .search-box:focus-within { box-shadow: 0 1px 8px rgba(32,33,36,0.2); border-color: #dcdcdc; }
    .search-input { flex-grow: 1; border: none; outline: none; font-size: 1.1rem; padding-left: 12px; color: #202124; background: transparent; }

    .dropdown-menu {
      position: absolute; top: 100%; left: 0; right: 0;
      background: #ffffff; border: 1px solid #dfe1e5; border-top: none;
      border-bottom-left-radius: 24px; border-bottom-right-radius: 24px;
      box-shadow: 0 4px 6px rgba(32,33,36,0.1); overflow: hidden;
    }
    .dropdown-item { padding: 12px 24px; cursor: pointer; display: flex; align-items: center; gap: 12px; }
    .dropdown-item:hover { background: #f8f9fa; }
    .item-icon { color: #9aa0a6; display: flex; align-items: center; justify-content: center; width: 20px;}
    .item-text { font-size: 1rem; color: #202124; }
    .item-subtext { font-size: 0.85rem; color: #5f6368; margin-top: 2px; }
    .not-found-item { border-bottom: 1px solid #f1f3f4; background: #fafafa; }
    .not-found-item .item-icon { color: #ea4335; }

    .cards-container { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; justify-content: center; max-width: 700px; }
    .trace-card { padding: 10px 16px; border-radius: 16px; border: 1px solid #e5e7eb; background: #ffffff; color: #4b5563; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.15s ease; }
    .trace-card:hover { background: #f9fafb; border-color: #d1d5db; }
    .trace-card.highlight { border-color: #3b82f6; color: #1d4ed8; background: #eff6ff; font-weight: 500; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1); }

    /* -----------------------------------------
       Trace UI (The placeholders)
       ----------------------------------------- */
    .trace-ui {
      opacity: 0;
      position: absolute;
      pointer-events: none;
      transition: opacity 0.3s ease 0.3s; /* Delay fade in until slide finishes */
      font-size: 1.5rem;
      font-weight: 600;
      color: #374151;
    }

    .state-trace .trace-ui {
      opacity: 1;
      position: relative;
      pointer-events: auto;
    }
  "])

;; Mock Data
(def featured-questions
  [{:id :undo :label "Undo the most recent local commits" :highlight? true :icon "🔥"}
   {:id :pull-fetch :label "Difference between 'pull' and 'fetch'"}
   {:id :delete-branch :label "Delete a branch locally and remotely"}
   {:id :undo-add :label "Undo 'git add' before commit"}])

(def mapped-questions
  [{:id :undo :label "Undo the most recent local commits"}
   {:id :pull-fetch :label "Difference between 'pull' and 'fetch'"}
   {:id :delete-branch :label "Delete a branch locally and remotely"}
   {:id :undo-add :label "Undo 'git add' before commit"}
   {:id :rebase :label "How to resolve a merge conflict during rebase"}])

;; Utilities
(defn fuzzy-match? [query target]
  (str/includes? (str/lower-case target) (str/lower-case query)))

(defn search-questions [query]
  (if (str/blank? query) [] (filter #(fuzzy-match? query (:label %)) mapped-questions)))

;; Main View
(defn main []
  (let [active-trace (reagent/atom nil) ;; Holds the ID of the selected question
        search-text  (reagent/atom "")
        is-focused?  (reagent/atom false)
        vote-timer   (atom nil)]

    (fn []
      (let [query          @search-text
            matches        (search-questions query)
            has-query?     (not (str/blank? query))
            no-matches?    (and has-query? (empty? matches))
            is-tracing?    (some? @active-trace)
            ;; Only show dropdown if focused, has query, and NOT tracing yet
            show-dropdown? (and @is-focused? has-query? (not is-tracing?))

            ;; Handler to start the trace
            start-trace!   (fn [id]
                             (js/console.log "Starting trace for:" id)
                             (reset! active-trace id)
                             (reset! search-text ""))]

        ;; Add .state-trace class conditionally to trigger all CSS animations
        [:div.app-container {:class (when is-tracing? "state-trace")}
         [trace-styles]

         ;; === BACKGROUND GRAPH LAYER ===
         [:div.graph-bg
          [:span "graph"]]

         ;; === INTERACTION LAYER (Moves from Full Screen to Bottom) ===
         [:div.interaction-layer

          ;; -- LEFT: PROBLEM PANEL --
          [:div.problem-panel

           ;; View A: Search UI (Visible initially, fades out on trace)
           [:div.search-ui
            [:h1.trace-logo "Looset Trace"]

            [:div.search-container
             [:div.search-box {:class (when show-dropdown? "has-dropdown")}
              [:svg {:width "20" :height "20" :viewBox "0 0 24 24" :fill "none" :stroke "#9aa0a6" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round"}
               [:circle {:cx "11" :cy "11" :r "8"}] [:line {:x1 "21" :y1 "21" :x2 "16.65" :y2 "16.65"}]]

              [:input.search-input
               {:type "text"
                :placeholder "Problem, goal or subject related to Git."
                :value query
                :on-focus #(reset! is-focused? true)
                :on-blur #(reset! is-focused? false)

                ;; Keyboard interaction (Enter to select)
                :on-key-down (fn [e]
                               (when (= (.-key e) "Enter")
                                 (.preventDefault e)
                                 (if no-matches?
                                   (js/console.log "[AUTO-VOTE] Enter pressed on unmapped:" query)
                                   (let [target-id (if has-query?
                                                     (:id (first matches))
                                                     (:id (first featured-questions)))]
                                     (when target-id (start-trace! target-id))))))

                :on-change (fn [e]
                             (let [v (-> e .-target .-value)]
                               (reset! search-text v) ;; Auto-Vote (1.5s debounce)
                               (when @vote-timer (js/clearTimeout @vote-timer))
                               (when (not (str/blank? v))
                                 (reset! vote-timer
                                         (js/setTimeout
                                          (fn []
                                            (when (empty? (search-questions @search-text))
                                              (js/console.log "[AUTO-VOTE] User finished typing:" @search-text)))
                                          1500)))))}]]

             ;; Dropdown Menu
             (when show-dropdown?
               [:div.dropdown-menu ;; Scenario 1: No results (show vote + featured)
                (if no-matches?
                  [:<> ;; Manual vote option on top
                   [:div.dropdown-item.not-found-item
                    {:on-mouse-down (fn [e] (.preventDefault e) (js/console.log "[MANUAL VOTE]:" query))}
                    [:div.item-icon [:svg {:width "18" :height "18" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:path {:d "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]]
                    [:div [:div.item-text (str "\"" query "\"")] [:div.item-subtext "Not mapped yet. Click to vote to map this next."]]]
                   (for [{:keys [id label]} featured-questions] ;; featured list as fallback
                     ^{:key (str "feat-" id)}
                     [:div.dropdown-item {:on-mouse-down (fn [e] (.preventDefault e) (start-trace! id))}
                      [:div.item-icon [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:polyline {:points "20 6 9 17 4 12"}]]]
                      [:div.item-text label]])]

                  ;; Scenario 2: With matches
                  (for [{:keys [id label]} matches]
                    ^{:key id}
                    [:div.dropdown-item {:on-mouse-down (fn [e] (.preventDefault e) (start-trace! id))}
                     [:div.item-icon [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:circle {:cx "11" :cy "11" :r "8"}]]]
                     [:div.item-text label]]))])]


            (when (not show-dropdown?)
              [:div.cards-container
               (for [{:keys [id label highlight? icon]} featured-questions]
                 ^{:key id}
                 [:div.trace-card
                  {:class (when highlight? "highlight")
                   :on-click #(start-trace! id)}
                  (when icon [:span {:style {:font-size "1.1em"}} icon])
                  label])])]

           ;; View B: Active Trace UI (Fades in when trace starts)
           [:div.trace-ui "Problem"]]

          ;; -- RIGHT: KNOWLEDGE PANEL (Expands on trace) --
          [:div.knowledge-panel
           [:div.trace-ui "User knowledge"]]]]))))
