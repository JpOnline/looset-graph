(ns looset-trace.app
  (:require
    [reagent.core :as reagent]
    [re-frame.alpha :as re-frame]
    [clojure.string :as str]))

(defn trace-styles []
  [:style "
    .trace-wrapper {
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      min-height: 85vh; padding: 0 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #202124;
    }
    .trace-logo { font-size: 2.5rem; font-weight: 600; letter-spacing: -0.05rem; margin-bottom: 2rem; color: #1a1a1a; }

    /* Container relativo para posicionar o dropdown */
    .search-container {
      position: relative;
      width: 100%;
      max-width: 650px;
      z-index: 50;
    }

    .search-box {
      display: flex; align-items: center; width: 100%;
      background: #ffffff; border: 1px solid #dfe1e5;
      box-shadow: 0 1px 5px rgba(32,33,36,0.1); border-radius: 24px;
      padding: 14px 24px; transition: all 0.2s ease-in-out;
    }
    .search-box.has-dropdown {
      border-bottom-left-radius: 0; border-bottom-right-radius: 0;
      box-shadow: 0 4px 6px rgba(32,33,36,0.1); border-bottom-color: transparent;
    }
    .search-box:hover, .search-box:focus-within { box-shadow: 0 1px 8px rgba(32,33,36,0.2); border-color: #dcdcdc; }
    .search-input { flex-grow: 1; border: none; outline: none; font-size: 1.1rem; padding-left: 12px; color: #202124; background: transparent; }
    .search-input::placeholder { color: #9aa0a6; }

    /* Dropdown de Autocomplete */
    .dropdown-menu {
      position: absolute; top: 100%; left: 0; right: 0;
      background: #ffffff; border: 1px solid #dfe1e5; border-top: none;
      border-bottom-left-radius: 24px; border-bottom-right-radius: 24px;
      box-shadow: 0 4px 6px rgba(32,33,36,0.1); overflow: hidden;
    }
    .dropdown-item {
      padding: 12px 24px; cursor: pointer; display: flex; align-items: center; gap: 12px;
    }
    .dropdown-item:hover { background: #f8f9fa; }
    .dropdown-item:last-child { padding-bottom: 18px; }

    .item-icon { color: #9aa0a6; display: flex; align-items: center; justify-content: center; width: 20px;}
    .item-text { font-size: 1rem; color: #202124; }
    .item-subtext { font-size: 0.85rem; color: #5f6368; margin-top: 2px; }

    /* Not Found Item */
    .not-found-item { border-bottom: 1px solid #f1f3f4; background: #fafafa; }
    .not-found-item .item-icon { color: #ea4335; } /* Vermelho para indicar atenção/voto */

    /* Os Cards de 'Isca' (mantidos) */
    .cards-container { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; justify-content: center; max-width: 700px; }
    .trace-card { padding: 10px 16px; border-radius: 16px; border: 1px solid #e5e7eb; background: #ffffff; color: #4b5563; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.15s ease; }
    .trace-card:hover { background: #f9fafb; border-color: #d1d5db; }
    .trace-card.highlight { border-color: #3b82f6; color: #1d4ed8; background: #eff6ff; font-weight: 500; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1); }
    .trace-card.highlight:hover { background: #dbeafe; }
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
   {:id :rebase :label "How to resolve a merge conflict during rebase"}
   {:id :detached :label "Fixing a detached HEAD state"}
   {:id :cherry :label "Cherry-pick a commit from another branch"}])

;; Utils
(defn fuzzy-match? [query target]
  (str/includes? (str/lower-case target) (str/lower-case query)))

(defn search-questions [query]
  (if (str/blank? query)
    []
    (filter #(fuzzy-match? query (:label %)) mapped-questions)))

(defn search-view []
  (let [search-text (reagent/atom "")
        is-focused? (reagent/atom false)
        vote-timer (atom nil)]

    (fn []
      (let [query @search-text
            matches (search-questions query)
            has-query? (not (str/blank? query))
            no-matches? (and has-query? (empty? matches))
            show-dropdown? (and @is-focused? has-query?)]

        [:div.trace-wrapper
         [trace-styles]
         [:h1.trace-logo "Looset Trace"]

         [:div.search-container
          ;; A Barra de Busca
          [:div.search-box {:class (when show-dropdown? "has-dropdown")}
           [:svg {:width "20" :height "20" :viewBox "0 0 24 24" :fill "none" :stroke "#9aa0a6" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round"}
            [:circle {:cx "11" :cy "11" :r "8"}] [:line {:x1 "21" :y1 "21" :x2 "16.65" :y2 "16.65"}]]

           [:input.search-input
            {:type "text"
             :placeholder "Problem, goal or subject related to Git."
             :value query
             :on-focus #(reset! is-focused? true)
             :on-blur #(reset! is-focused? false)
             :on-change (fn [e]
                          (let [v (-> e .-target .-value)]
                            (reset! search-text v)

                            ;; Lógica do Auto-Vote (Debounce de 1.5 segundos)
                            (when @vote-timer (js/clearTimeout @vote-timer))
                            (when (not (str/blank? v))
                              (reset! vote-timer
                                      (js/setTimeout
                                       (fn []
                                         ;; Se depois de 1.5s não houver resultados para o texto atual, votamos.
                                         (when (empty? (search-questions @search-text))
                                           (js/console.log "[AUTO-VOTE] User finished typing unmapped problem:" @search-text)))
                                       1500)))))}]]

          ;; O Dropdown de Resultados
          (when show-dropdown?
            [:div.dropdown-menu

             ;; Cenário 1: Sem resultados (Mostra o Voto + Featured)
             (if no-matches?
               [:<>
                ;; Opção de Voto Manual no topo
                [:div.dropdown-item.not-found-item
                 ;; on-mouse-down evita que o input perca o blur antes do click registrar
                 {:on-mouse-down (fn [e]
                                   (.preventDefault e)
                                   (js/console.log "[MANUAL VOTE] Clicked to vote for:" query))}
                 [:div.item-icon
                  [:svg {:width "18" :height "18" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"}
                   [:path {:d "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]] ;; Ícone simbólico
                 [:div
                  [:div.item-text (str "\"" query "\"")]
                  [:div.item-subtext "Not mapped yet. Click to vote to map this next."]]]

                ;; Lista de Featured como Fallback
                (for [{:keys [id label]} featured-questions]
                  ^{:key (str "feat-" id)}
                  [:div.dropdown-item
                   {:on-mouse-down (fn [e] (.preventDefault e) (js/console.log "Selected:" id))}
                   [:div.item-icon
                    [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"}
                     [:polyline {:points "20 6 9 17 4 12"}]]]
                   [:div.item-text label]])]

               ;; Cenário 2: Com resultados
               (for [{:keys [id label]} matches]
                 ^{:key id}
                 [:div.dropdown-item
                  {:on-mouse-down (fn [e] (.preventDefault e) (js/console.log "Selected mapped:" id))}
                  [:div.item-icon
                   [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"}
                    [:circle {:cx "11" :cy "11" :r "8"}]]]
                  [:div.item-text label]]))])]


         ;; Pre defined search cards.
         (when (not show-dropdown?)
           [:div.cards-container
            (for [{:keys [id label highlight? icon]} featured-questions]
              ^{:key id}
              [:div.trace-card
               {:class (when highlight? "highlight")
                :on-click #(js/console.log "Clicked card:" id)}
               (when icon [:span {:style {:font-size "1.1em"}} icon])
               label])])]))))

(defn main []
  [:div
   [search-view]])
