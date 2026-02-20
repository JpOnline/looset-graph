(ns looset-trace.app
  (:require
    [reagent.core :as reagent]
    [re-frame.alpha :as re-frame]))

(defn trace-styles []
  [:style "
    .trace-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 85vh; /* Centraliza verticalmente deixando um espaço em cima */
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #202124;
      padding: 0 20px;
    }

    .trace-logo {
      font-size: 2.5rem;
      font-weight: 600;
      letter-spacing: -0.05rem;
      margin-bottom: 2rem;
      color: #1a1a1a;
    }

    /* A Barra de Busca Estilo Google/ChatGPT */
    .search-box {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 650px;
      background: #ffffff;
      border: 1px solid #dfe1e5;
      box-shadow: 0 1px 5px rgba(32,33,36,0.1);
      border-radius: 24px; /* Cantos bem arredondados */
      padding: 14px 24px;
      transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }

    .search-box:hover, .search-box:focus-within {
      box-shadow: 0 1px 8px rgba(32,33,36,0.2);
      border-color: #dcdcdc;
    }

    .search-input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 1.1rem;
      padding-left: 12px;
      color: #202124;
    }

    .search-input::placeholder { color: #9aa0a6; }

    /* Os Cards de 'Isca' (Featured Traces) */
    .cards-container {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 32px;
      justify-content: center;
      max-width: 700px;
    }

    .trace-card {
      padding: 10px 16px;
      border-radius: 16px; /* Pill shape */
      border: 1px solid #e5e7eb;
      background: #ffffff;
      color: #4b5563;
      font-size: 0.95rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: all 0.15s ease;
    }

    .trace-card:hover {
      background: #f9fafb;
      border-color: #d1d5db;
    }

    /* O 'Golden Path' (Destaque visual sutil, mas irresistível) */
    .trace-card.highlight {
      border-color: #3b82f6; /* Azul moderno */
      color: #1d4ed8;
      background: #eff6ff;
      font-weight: 500;
      box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
    }

    .trace-card.highlight:hover { background: #dbeafe; }
  "])

(def featured-questions
  [{:id :undo :label "Undo the most recent local commits" :highlight? true :icon "🔥"}
   {:id :pull-fetch :label "Difference between 'pull' and 'fetch'"}
   {:id :delete-branch :label "Delete a branch locally and remotely"}
   {:id :undo-add :label "Undo 'git add' before commit"}])

(defn search-view []
  (let [search-text (reagent/atom "")]
    (fn []
      [:div.trace-wrapper
       [trace-styles]

       [:h1.trace-logo "Looset Trace"]

       ;; Barra de Busca
       [:div.search-box
        ;; Ícone de Lupa em SVG inline
        [:svg {:width "20" :height "20" :viewBox "0 0 24 24" :fill "none"
               :stroke "#9aa0a6" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round"}
         [:circle {:cx "11" :cy "11" :r "8"}]
         [:line {:x1 "21" :y1 "21" :x2 "16.65" :y2 "16.65"}]]

        [:input.search-input
         {:type "text"
          :placeholder "What Git problem are you facing?"
          :value @search-text
          :on-change #(reset! search-text (-> % .-target .-value))}]]

       ;; Se o usuário digitar algo que não temos, mostramos o fallback
       (when (and (seq @search-text)
                  (< (count @search-text) 5)) ;; Lógica ingênua só para o MVP
         [:div {:style {:margin-top "16px" :color "#6b7280" :font-size "0.9rem"}}
          "Not mapped yet. Try one of our featured traces below."])

       ;; Os Cards de Isca
       [:div.cards-container
        (for [{:keys [id label highlight? icon]} featured-questions]
          ^{:key id}
          [:div.trace-card
           {:class (when highlight? "highlight")
            :on-click #(js/console.log "Iniciando Trace para:" id)}
            ;; No futuro: #(rf/dispatch [:trace/start-diagnostic id])

           (when icon [:span {:style {:font-size "1.1em"}} icon])
           label])]])))

;; Componente Raiz do Domínio Trace
(defn main []
  [:div
   [search-view]])
