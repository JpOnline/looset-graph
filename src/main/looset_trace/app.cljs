(ns looset-trace.app
  (:require
    ["react-markdown" :default ReactMarkdown]
    [clojure.string :as str]
    [looset-graph.app :as looset-graph]
    [looset-graph.util :as util :refer [<sub >evt]]
    [re-frame.alpha :as re-frame]
    [reagent.core :as reagent]))

;; ---------------------------------------------------------
;; STYLES
;; ---------------------------------------------------------
(def light-red "#ffd7d7")
(def light-yellow "#fff6c4")

(defn trace-styles []
  [:style "
    /* -----------------------------------------
       Global scrollbar definitions
       ----------------------------------------- */
    * {
      /* Firefox: thin scrollbar, semi-transparent thumb, transparent track */
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
    }

    /* Webkit (Chrome, Edge, Safari): Make it thin */
    *::-webkit-scrollbar {
      width: 6px;
      height: 6px; /* For horizontal scrollbars */
    }

    /* Track is always transparent */
    *::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Thumb is INVISIBLE by default (opacity 0) */
    *::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0);
      border-radius: 10px;
      transition: background-color 0.3s ease; /* Smooth fade in */
    }

    /* When hovering ANY scrollable container, show the thumb faintly */
    *:hover::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.15);
    }

    /* When hovering directly OVER the scrollbar, make it slightly darker */
    *::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
    }

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
      overflow: hidden;
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
      transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease 0.3s;
      position: relative;
      overflow: hidden;
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

    .trace-logo {
      font-family: Quattrocento, serif;
      font-size: 2.5em;
      font-weight: normal;
      letter-spacing: -0.05rem;
      margin-bottom: 2rem;
    }

    .search-container { position: relative; width: 100%; max-width: 650px; z-index: 50; }

    .search-box {
      display: flex;
      align-items: center;
      width: 100%;
      background: #ffffff;
      border: 1px solid #dfe1e5;
      box-shadow: 0 1px 5px rgba(32,33,36,0.1);
      border-radius: 24px;
      padding: 14px 24px;
      transition: all 0.2s ease-in-out;
    }
    .search-box.has-dropdown { border-bottom-left-radius: 0; border-bottom-right-radius: 0; box-shadow: 0 4px 6px rgba(32,33,36,0.1); border-bottom-color: transparent; }
    .search-box:hover, .search-box:focus-within { box-shadow: 0 1px 8px rgba(32,33,36,0.2); border-color: #dcdcdc; }
    .search-input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 1.1rem;
      padding-left: 12px;
      color: #202124;
      background: transparent;
    }

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
       QUIZ PANELS & WATERMARKS
       ----------------------------------------- */
    .quiz-container {
      width: 100%;
      height: 100%;
      padding: 24px 10px;
      padding-top: 4px;
      display: flex;
      flex-direction: column;
      transition: background-color 0.4s ease;
      z-index: 2; position: relative;
      overflow: hidden; /* Hide outer overflow so the inner scroll works perfectly */
    }

    /* Background feedback colors */
    .panel-correct { background-color: rgba(220, 252, 231, 0.6); }
    .panel-wrong { background-color: rgba(254, 226, 226, 0.6); }
    .panel-info-gathered { background-color: rgba(243, 244, 246, 0.8); }

    /* The Watermark Emoji */
    .panel-watermark {
      position: absolute; bottom: 11%; font-size: 10rem; opacity: 0.18;
      filter: grayscale(100%); pointer-events: none; user-select: none; z-index: 3;
    }
    .panel-watermark.left { left: -66px; }
    .panel-watermark.right { right: 0px; }

    /* Scrollable Content Area */
    .quiz-content {
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      z-index: 4; /* Above the watermark */
      position: relative;
      padding-right: 8px; /* Room for scrollbar */
    }

    /* Inner wrapper uses auto margins to center content safely without cutting off the top when scrolling */
    .quiz-inner {
      margin: auto 0;
      padding-top: 4px;
      padding-bottom: 20px;
      padding-right: 6px;
      padding-left: 8px;
    }

    /* Text Formatting */
    .question-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 12px;
      margin-top: 6px;
      line-height: 1.4;
    }
    .question-desc { font-size: 1.05rem; color: #4b5563; margin-bottom: 24px; line-height: 1.6; }

    .options-list { display: flex; flex-direction: column; gap: 10px; }

    .quiz-option {
      padding: 14px 20px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      background: #ffffff10;
      backdrop-filter: blur(5px);
      text-align: left;
      font-size: 0.95rem;
      color: #4b5563;
      cursor: pointer;
      transition: all 0.2s ease;
      line-height: 1.5; /* Crucial for wrapped text readability */
      word-wrap: break-word;
    }

    /* Option States */
    .quiz-option.option-default:hover { background: #f9fafb; border-color: #d1d5db; }
    .quiz-option.option-correct { background: #10b981; color: #fff; border-color: #10b981; font-weight: 500; }
    .quiz-option.option-wrong { background: #ef4444; color: #fff; border-color: #ef4444; font-weight: 500; }
    .quiz-option.option-correct-highlight { border: 2px solid #10b981; background: #ecfdf5; color: #065f46; font-weight: 500; }
    .quiz-option.option-disabled { opacity: 0.6; cursor: default; }
    .quiz-option.option-assumed { border: 2px dashed #9ca3af; background: #f3f4f6; color: #374151; font-weight: 500; }
    .quiz-option.option-selected { background: #4b5563; color: #fff; border-color: #4b5563; font-weight: 500; }

    /* -----------------------------------------
       RIGHT PANEL (Node Details & Resources)
       ----------------------------------------- */
    .node-details-panel {
      position: absolute; top: 0; right: 0; width: 380px; height: 100%;
      background: #ffffff; border-left: 1px solid #e5e7eb;
      box-shadow: -4px 0 15px rgba(0,0,0,0.03); z-index: 5;
      padding: 30px 24px; display: flex; flex-direction: column;
      transform: translateX(100%); transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
      text-wrap-style: balance;
      overflow-y: auto;
    }
    .state-trace .node-details-panel { transform: translateX(0); } /* Slides in when trace starts */

    .node-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }
    .node-desc { color: #6b7280; font-size: 0.95rem; line-height: 1.5; margin-bottom: 30px; }

    /* Resource Cards */
    .resource-list { display: flex; flex-direction: column; gap: 12px; }
    .resource-card {
      position: relative; padding: 12px 16px 12px 24px; border-radius: 8px;
      background: #f9fafb; border: 1px solid #f3f4f6;
      display: flex; flex-direction: column; overflow: hidden;
      text-decoration: none; /* Prevents the default link underline */
      color: inherit;        /* Prevents the default link blue color */
      cursor: pointer;       /* Ensures the mouse pointer turns into a hand */
    }
    .resource-card:hover { background: #f3f4f6; }

    /* The Depth Gradient Indicator */
    .depth-indicator {
      position: absolute; left: 0; top: 0; bottom: 0; width: 6px;
    }
    .res-title { font-weight: 600; color: #374151; font-size: 0.95rem; }
    .res-meta { font-size: 0.8rem; color: #9ca3af; margin-top: 4px; }

    .internal-link {
      display: inline-block;
      background: #f3f4f6;
      border: 1px solid #d1d5db;
      border-radius: 12px;
      padding: 0px 8px;
      margin: 0 2px;
      color: #374151;
      font-weight: 500;
      font-size: 0.9em;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .internal-link:hover {
      background: #eff6ff;
      border-color: #3b82f6;
      color: #1d4ed8;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
    }
  "])

;; ---------------------------------------------------------
;; MOCK DATA
;; ---------------------------------------------------------
(def featured-questions
  [{:id :undo :label "Undo last commits" :highlight? true :icon "🔥"}
   {:id :pull-fetch :label "Difference between 'pull' and 'fetch'"}
   {:id :delete-branch :label "Delete a branch locally and remotely"}
   {:id :undo-add :label "Undo 'git add' before commit"}])

(def mapped-questions
  [{:id :undo :label "Undo the most recent local commits"}
   {:id :pull-fetch :label "Difference between 'pull' and 'fetch'"}
   {:id :delete-branch :label "Delete a branch locally and remotely"}
   {:id :undo-add :label "Undo 'git add' before commit"}
   {:id :rebase :label "How to resolve a merge conflict during rebase"}])

(def mock-problem-data
  {:title "Which of the following best describes your goal?"
   ; :description "Git provides several ways to undo changes, but the best approach depends entirely on what you are trying to achieve and whether your changes have been shared with others.Git provides several ways to undo changes, but the best approach depends entirely on what you are trying to achieve and whether your changes have been shared with others.Git provides several ways to undo changes, but the best approach depends entirely on what you are trying to achieve and whether your changes have been shared with others."
   :options [[:span [:strong "Keep the changes: "] "I want to undo the commit but keep all the work I did as \"unstaged\" changes in my folder."]
             [:span [:strong "Delete the changes: "] "I want to completely delete the last commits and the work inside them (reset to a clean previous state)."]
             [:span [:strong "Fix a mistake: "] "I just want to modify the last commit (e.g., fix a typo or add a forgotten file) without creating a new one."]
             [:span [:strong "Undo a push: "] "I already pushed these commits to a remote server (GitHub/GitLab) and need to fix it there too."]]
   :assumed-id 3})

(def mock-knowledge-data
  {;; We omit the :title here to test the optionality, relying only on the :description
   :title "Why do you want to undo your recent commits?Why do you want to undo your recent commits?Why do you want to undo your recent commits?Why do you want to undo your recent commits?"
   :description "What happens to your changes when you execute 'git reset --soft HEAD~1' in your terminal? Consider the state of the Staging Area and the Working Directory.What happens to your changes when you execute 'git reset --soft HEAD~1' in your terminal? Consider the state of the Staging Area and the Working Directory.What happens to your changes when you execute 'git reset --soft HEAD~1' in your terminal? Consider the state of the Staging Area and the Working Directory."
   :options [{:id :a :text "The files are permanently deleted and cannot be recovered from the local history."}
             {:id :b :text "The files remain in the Staging Area, ready to be committed again immediately."}
             {:id :b :text "I forgot to add a file to the commit, so I need to amend the previous commit to include it.I forgot to add a file to the commit, so I need to amend the previous commit to include it.I forgot to add a file to the commit, so I need to amend the previous commit to include it."}
             {:id :b :text "I forgot to add a file to the commit, so I need to amend the previous commit to include it.I forgot to add a file to the commit, so I need to amend the previous commit to include it.I forgot to add a file to the commit, so I need to amend the previous commit to include it."}
             {:id :c :text "The files are moved to the Working Directory (unstaged) and must be re-added.The files are moved to the Working Directory (unstaged) and must be re-added.The files are moved to the Working Directory (unstaged) and must be re-added.The files are moved to the Working Directory (unstaged) and must be re-added."}]
   :correct-id :b})

(def mock-resources
  [{:id 1 :title "Git Reset in 100 Seconds" :type "Video" :depth 0}
   {:id 2 :title "Understanding the 3 Trees of Git" :type "Article" :depth 40}
   {:id 3 :title "Git Reset vs Revert vs Checkout" :type "Article" :depth 60}
   {:id 5 :title "2 Git Reset vs Revert vs Checkout" :type "Article" :depth 60}
   {:id 6 :title "2 Git Reset vs Revert vs Checkout" :type "Article" :depth 60}
   {:id 4 :title "Pro Git: Reset Demystified" :type "Reference" :depth 100}])

(def mock-resources-2
  {"https://learngitbranching.js.org/?level=intro2"
   {:title "Introduction to Git Branches"
    :summary "Learn the fundamentals of creating and switching between lightweight branches in Git."

    ;; Diátaxis Classification
    :diataxis-type {:how-to 0.0
                    :tutorial 0.6
                    :explanation 0.4
                    :reference 0.0}

    ;; Content Format
    :media-type #{:simulation :game}
    :segment-info {:is-segment? true
                   :segment-focus "Understanding branches as lightweight commit pointers and checking them out."}

    ;; Concept Mapping
    :concepts-matched ["Branch" "git branch" "git checkout / git switch"]
    :concepts-new []
    :commands-mentioned ["git branch" "git checkout" "git switch" "git checkout -b"]

    :safety
    {:level :safe
     :reason "Operations are performed in an isolated browser-based simulation sandbox. No risk to actual local repositories."
     :mentions-reflog? false}

    :interface-type :cli
    :estimated-minutes 5
    :straight-to-the-point :straight
    :didactic-score 5
    :experience-level :beginner
    :visual-score 5
    :production-quality 3

    ;; Metadata specific to the game platform
    :game-meta
    {:game-name "Learn Git Branching"
     :game-url "https://learngitbranching.js.org/"
     :level-id "intro2"
     :objective-summary "Make a new branch named bugFix and switch to that branch."
     :required-commands ["git branch bugFix" "git checkout bugFix"]}}

   "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460"
   {:title "Introduction to Git Branching: The Kitchen Analogy"
    :summary "Explains the concept of branching as a safe environment for experimentation using a restaurant kitchen analogy, and demonstrates how to list and create branches."
    :diataxis-type #{:tutorial :explanation}
    :media-type :video
    :segment-info {:is-segment? true
                   :segment-focus "Branching conceptual model and basic creation"}
    :concepts-matched ["Branch"
                       "git branch"
                       "git branch [name]"
                       "git checkout / git switch"
                       "git merge"
                       "Feature Branching"]
    :concepts-new ["Main vs Master Naming" "Kitchen Analogy"]
    :commands-mentioned ["git branch" "git checkout"]
    :safety {:level :safe
             :reason "Operations are read-only (listing) or additive (creating). No destructive actions performed."
             :mentions-reflog? false}
    :interface-type :cli
    :estimated-minutes 3
    :straight-to-the-point :medium
    :didactic-score 5
    :experience-level :beginner
    :visual-score 3
    :production-quality 3

    :youtube-data
    {:title "Git & GitHub Crash Course for Beginners [2026]"
     :channel-name "freeCodeCamp.org"
     :channel-url "https://www.youtube.com/@freeCodeCamp"
     :total-duration "1:21:14"
     :chapter-name "Git Branching Explained"
     :chapter-starts-at "0:40:58"
     :chapter-duration "0:02:55"}}
   })

;; ---------------------------------------------------------
;; UTILITIES
;; ---------------------------------------------------------
;; Calculates an HSL color based on depth (0-100).
;; 0 = "Light Blue"/white, 100 = "Dark Navy"/black.
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

(defn fuzzy-match? [query target]
  (str/includes? (str/lower-case target) (str/lower-case query)))

(defn search-questions [query]
  (if (str/blank? query) [] (filter #(fuzzy-match? query (:label %)) mapped-questions)))

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
;; To test the calculate-depth fn
;; (map #(select-keys % [:depth :media-type :experience-level]) (sort-by :depth (map #(assoc % :depth (calculate-depth %)) (vals (:resources-meta (:domain @re-frame.db/app-db))))))

;; ---------------------------------------------------------
;; -- COMPONENTS---------------------------------------------------------
;; ---------------------------------------------------------

(defn node-link-clicked
  [app-state [_ev node-id]]
  (assoc-in app-state [:ui :selected-nodes] #{node-id}))
(re-frame/reg-event-db ::node-link-clicked node-link-clicked)

(defn all-resources-meta [app-state]
  (get-in app-state [:domain :resources-meta] {}))
(re-frame/reg-sub ::all-resources-meta all-resources-meta)

(defn markdown-view [content]
  (let [custom-components
        {:a looset-graph/markdown-view-node-link
         :code (fn [js-props]
                 (let [class-name (.-className js-props)
                       ;; ReactMarkdown passes the text content as an array in children
                       children (.-children js-props)
                       raw-text (when (seq children) (first children))
                       urls (some->> (clojure.string/split raw-text #"\n")
                             (remove clojure.string/blank?))
                       resources (when (seq urls) (<sub [::all-resources-meta]))
                       raw-resources (map #(into (get resources % {:title % :depth 50}) {:url %}) urls)
                       resources-with-gradient (->> raw-resources
                                                 (map #(assoc % :depth (calculate-depth %)))
                                                 (calculate-depth-gradients))]
                   (if (not= class-name "language-curated-resources")
                     ;; Fallback: Default Code Block
                     (reagent/as-element [:code {:class class-name} children])
                     (reagent/as-element
                       [:div.resource-list
                        (for [{:keys [url title media-type summary start-depth end-depth]} resources-with-gradient
                              :let [type (condp some media-type
                                           #{:game} "🎮 "
                                           #{:video} "🎬 "
                                           #{:tutorial} "🪜 "
                                           #{:Q&A} "💡 "
                                           #{:book} "📚 "
                                           #{:reference} "🔍 "
                                           #{:simulation} "⚙️ "

                                           #{:text} "📄 "
                                           #{:article} "🗞️ "
                                           "")]]
                          ^{:key url}
                          [:a.resource-card
                           {:href url :target "_blank" :rel "noopener noreferrer"}
                           ;; The Visual Depth Gradient
                           [:div.depth-indicator {:style (get-gradient-style start-depth end-depth)}]
                           [:div.res-title title]
                           [:div.res-meta (str type summary)]])]))))}]

    ;; Render the ReactMarkdown component
    [:> ReactMarkdown
     {:components (clj->js custom-components)
      :children content}]))

;; --- PROBLEM QUIZ COMPONENT ---
(defn quiz-problem [data state-atom]
  (let [selected-id @state-atom
        answered?   (some? selected-id)]
    [:div.quiz-container
     ;; Info-gathered (light blue) background when answered
     {:class (when answered? "panel-info-gathered")}

     [:div.panel-watermark.left "❓"]

     [:div.quiz-content
      [:div.quiz-inner
       (when-let [title (:title data)] [:h3.question-title title])
       (when-let [desc (:description data)] [:p.question-desc desc])

       [:div.options-list
        (for [[id text] (map-indexed #(into [%1 %2]) (:options data))]
          (let [is-this-selected (= id selected-id)
                ;; Specific logic for Problem Mode (Assumed vs Selected)
                opt-class (cond
                            is-this-selected "option-selected"
                            answered? "option-disabled"
                            (= id (:assumed-id data)) "option-assumed"
                            :else "option-default")]
            ^{:key id}
            [:button.quiz-option
             {:class opt-class
              :on-click #(when-not answered? (reset! state-atom id))}
             text]))]]]]))

;; --- KNOWLEDGE QUIZ COMPONENT ---
(defn quiz-knowledge [data state-atom]
  (let [selected-id @state-atom
        answered?   (some? selected-id)
        is-correct? (= selected-id (:correct-id data))]
    [:div.quiz-container
     ;; Correct/Wrong (green/red) background when answered
     {:class (when answered? (if is-correct? "panel-correct" "panel-wrong"))}

     [:div.panel-watermark.right "🧠"]

     [:div.quiz-content
      [:div.quiz-inner
       (when-let [title (:title data)] [:h3.question-title title])
       (when-let [desc (:description data)] [:p.question-desc desc])

       [:div.options-list
        (for [{:keys [id text]} (:options data)]
          (let [is-this-selected (= id selected-id)
                is-this-correct  (= id (:correct-id data))
                ;; Specific logic for Knowledge Mode (Right/Wrong evaluation)
                opt-class (cond
                            (not answered?) "option-default"
                            (and is-this-selected is-this-correct) "option-correct"
                            (and is-this-selected (not is-this-correct)) "option-wrong"
                            (and answered? is-this-correct) "option-correct-highlight"
                            :else "option-disabled")]
            ^{:key id}
            [:button.quiz-option
             {:class opt-class
              :on-click #(when-not answered? (reset! state-atom id))}
             text]))]]]]))

(defn right-panel-view []
  (let [selected-or-fallback-node (let [[selected-node & osn] @(re-frame/sub :flow {:id :f-selected-nodes})
                                        _ (when (seq osn) (js/console.error "Mais de um Node selecionado:" (cons selected-node osn)))
                                        visible-nodes (when-not selected-node @(re-frame/sub :flow {:id :f-visible-nodes}))]
                                    (or selected-node
                                        (util/get-pred #(clojure.string/starts-with? % "❓") visible-nodes)
                                        (first visible-nodes)))
        explanations (<sub [::looset-graph/explanation-content])]
    [:div.node-details-panel
     [:h2.node-title selected-or-fallback-node]
     [:p.node-desc [markdown-view (get explanations {:type :node :id selected-or-fallback-node})]]]))

;; ---------------------------------------------------------
;; Search UI Component
;; ---------------------------------------------------------
(defn search-ui []
  ;; Local state for the search input behavior
  (let [search-text (reagent/atom "")
        is-focused? (reagent/atom false)
        vote-timer  (atom nil)]
    (fn []
      (let [query          @search-text
            matches        (search-questions query)
            has-query?     (not (str/blank? query))
            no-matches?    (and has-query? (empty? matches))

            ;; Fetch active trace from re-frame to hide dropdown if tracing
            active-trace   (<sub [::active-trace])
            is-tracing?    (some? active-trace)
            show-dropdown? (and @is-focused? has-query? (not is-tracing?))

            ;; Handler to start the trace using Re-frame
            start-trace!   (fn [id]
                             (js/console.log "Starting trace for:" id)
                             (>evt [::set-problem-node id])
                             (reset! search-text ""))]

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
            [:div.dropdown-menu
             ;; Scenario 1: No results (show vote + featured)
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
                  [:div.item-text label]]))]
            )]

         (when (not show-dropdown?)
           [:div.cards-container
            (for [{:keys [id label highlight? icon]} featured-questions]
              ^{:key id}
              [:div.trace-card
               {:class (when highlight? "highlight")
                :on-click #(start-trace! id)}
               (when icon [:span {:style {:font-size "1.1em"}} icon])
               label])])]))))

;; ---------------------------------------------------------
;; -- Main ---------------------------------------------------------
;; ---------------------------------------------------------

;; ---------------------------------------------------------
;; --- Re-frame Events/Subs
;; ---------------------------------------------------------

(defn active-trace ;; Holds the ID of the selected question
  [app-state _]
  (get-in app-state [:trace-ui :active-trace] nil))
(re-frame/reg-sub ::active-trace active-trace)

(defn set-problem-node [app-state [_e id]]
  (assoc-in app-state [:trace-ui :active-trace] id))
(re-frame/reg-event-db ::set-problem-node set-problem-node)

(defn reset-problem-node [app-state]
  (assoc-in app-state [:trace-ui :active-trace] nil))
(re-frame/reg-event-db ::reset-problem-node reset-problem-node)

;; this one doesn't belong here.. add to another Re-frame Events/Subs
(defn add-node-props [app-state [_e [node props]]]
  (update-in app-state [:domain :nodes-map node] merge props))
(re-frame/reg-event-db ::add-node-props add-node-props)

(defonce counter (atom 0))
(def next-nodes
  [{:delay 100 :node-prop ["❓ Undo last commits" {:color light-red :hidden? false}]}
   {:delay 800 :node-prop ["git revert" {:name "🎯 git revert" :color light-red :hidden? false}]}
   {:delay 1600 :node-prop ["Commit Object" {:name "🧠 Commit Object" :color light-yellow :hidden? false}]}
   {:delay 1600 :node-prop ["Immutability" {:color light-yellow :hidden? false}]}])
(defn next-node [_]
  ; {:fx [[:dispatch-later {:ms 2000 :dispatch [::add-node-props ["git revert" {:color "#fff6c4"}]]}]]})
  {:fx (map #(into [:dispatch-later {:ms (:delay %) :dispatch [::add-node-props (:node-prop %)]}]) next-nodes)})
(re-frame/reg-event-fx ::next-node next-node)

(comment
  (do
    (looset-graph.app/load-graph-text)
    (re-frame/dispatch-sync [::reset-problem-node])))
;; (re-frame/dispatch-sync [::add-node-props ["git reset" {:color nil}]])
;; (re-frame/dispatch-sync [::add-node-props ["git revert" {:name "x git revert"}]])

;; ---------------------------------------------------------
;; --- Main view ---------------------------------------------------------
;; ---------------------------------------------------------

(defn main []
  ;; Local state for quiz answers stays in main (or could be moved to their own components later)
  (let [problem-answer   (reagent/atom nil)
        knowledge-answer (reagent/atom nil)]
    (fn []
      (let [active-trace (<sub [::active-trace])
            is-tracing?  (some? active-trace)]

        ;; Add .state-trace class conditionally to trigger all CSS animations
        [:div.app-container {:class (when is-tracing? "state-trace")
                             :on-click #(>evt [::next-node])}
         [trace-styles]

         ;; === BACKGROUND GRAPH LAYER ===
         [:div.graph-bg
           [util/error-boundary
            {:if-error [:h2 "erro"]}
            [looset-graph/graph-component]]]

         ;; --- Right Panel (Node Details) ---
         ;; Sits behind the interaction layer due to z-index (5 vs 10)
         [right-panel-view]

         ;; === INTERACTION LAYER (Moves from Full Screen to Bottom) ===
         [:div.interaction-layer

          ; Left: Initially search-ui, later problem-quiz
          [:div.problem-panel

           ;; Search UI (Visible initially, fades out on trace via CSS opacity/transform)
           [search-ui]

           ;; Problem Quiz (Visible during trace)
           (when is-tracing?
             [quiz-problem mock-problem-data problem-answer])]

          ;; Right: Knowledge Panel (Visible during trace)
          [:div.knowledge-panel
           [quiz-knowledge mock-knowledge-data knowledge-answer]]]]))))
