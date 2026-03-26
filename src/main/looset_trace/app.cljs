(ns looset-trace.app
  (:require
    ["firebase/app" :refer [initializeApp]]
    ["firebase/firestore" :refer [getFirestore collection addDoc]]
    ["react-markdown" :default ReactMarkdown]
    [clojure.set :as set]
    [clojure.string :as str]
    [looset-graph.app :as looset-graph]
    [looset-graph.util :as util :refer [<sub >evt]]
    [re-frame.alpha :as re-frame]
    [reagent.core :as reagent]))

(def show-tooltips? (< (rand) 0.5))

;; ---------------------------------------------------------
;; -- Firebase
;; ---------------------------------------------------------
(def firebase-config
  #js {:apiKey "AIzaSyCAwzD3kjiEd8T3MJKWbsCsCr3cY7KYt1c"
       :authDomain "looset-trace.firebaseapp.com"
       :projectId "looset-trace"
       :storageBucket "looset-trace.firebasestorage.app"
       :messagingSenderId "351450280071"
       :appId "1:351450280071:web:83b0d040e06927e32d0822"
       :measurementId "G-VTGW1PZNVC"})

(defonce firebase-app (initializeApp firebase-config))
(defonce firestore-db (getFirestore firebase-app))

(defn send-to-firestore
  [_ [_ collection-name* payload]]
  (let [collection-name (if ^boolean js/goog.DEBUG (str "debug-" collection-name*) collection-name*)
        col (collection firestore-db collection-name)
        js-payload (clj->js (assoc payload :timestamp (.toISOString (js/Date.))))]
    (-> (addDoc col js-payload)
      (.then #(js/console.log "Saved to Firebase!"))
      (.catch #(js/console.error "Firebase save failed:" %)))
    {}))
(re-frame/reg-event-fx ::send-to-firestore send-to-firestore)

(comment
  (send-to-firestore {:app-state nil} [:evt "test" {:a "a" :b :b :c 1}]))
;; ---------------------------------------------------------
;; -- STYLES
;; ---------------------------------------------------------
(def LIGHT-RED "#ffd7d7")
(def LIGHT-YELLOW "#fff6c4")
(def LIGHT-GREEN "#d6ffcf")

(defn trace-styles []
  [:style "
    /* -----------------------------------------
;; --- Global scrollbar definitions
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

    /* -----------------------------------------
;; --- Global App Container
       ----------------------------------------- */
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
;; --- Background Graph Layer
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
;; --- Interaction Layer (The panel that moves)
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
;; --- Problem Panel (Left Side)
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
;; --- Knowledge Panel (Right Side)
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
;; --- Search UI (Zero-State content)
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

    .cards-container { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; justify-content: center; max-width: 740px; }
    .trace-card { padding: 10px 16px; border-radius: 16px; border: 1px solid #e5e7eb; background: #ffffff; color: #4b5563; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.15s ease; }
    .trace-card:hover { background: #f9fafb; border-color: #d1d5db; }
    .trace-card.highlight { border-color: #3b82f6; color: #1d4ed8; background: #eff6ff; font-weight: 500; box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1); }

    .section-divider {
      font-family: Quattrocento, serif;
      margin-top: 3.5rem;    /* Larger space above to clearly separate sections */
      margin-bottom: -0.5rem; /* Tighter space below to associate it with the next set of cards */
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #64748b;
      font-weight: 600;
    }

    /* -----------------------------------------
;; --- QUIZ PANELS & WATERMARKS
       ----------------------------------------- */
    .quiz-container {
      --panel-bg: #ffffff;
      background-color: var(--panel-bg); /* For highlighting there's more options with scroll. */
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
    .panel-correct { --panel-bg: #e9f9ef; }
    .panel-wrong { --panel-bg: #fcebeb; }
    .panel-info-gathered { --panel-bg: #f0f1f3; }

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

      /* For highlighting that there's more options with scroll.*/
      background:
        /* Top Cover (Hides top shadow when scrolled to the top) */
        linear-gradient(var(--panel-bg) 30%, rgba(255,255,255,0)),
        /* Bottom Cover (Hides bottom shadow when scrolled to the bottom) */
        linear-gradient(rgba(255,255,255,0), var(--panel-bg) 70%) 0 100%,
        /* Top Shadow (Fixed) */
        radial-gradient(farthest-side at 50% 0, rgba(0,0,0,0.12), rgba(0,0,0,0)),
        /* Bottom Shadow (Fixed) */
        radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,0.42), rgba(0,0,0,0)) 0 100%;

      background-repeat: no-repeat;
      /* Size of covers (40px) and shadows (14px) */
      background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;

      /* `local` attaches to the scrolling content. `scroll` attaches to the element viewport. */
      background-attachment: local, local, scroll, scroll;
    }

    /* Inner wrapper uses auto margins to center content safely without cutting off the top when scrolling */
    .quiz-inner {
      margin: auto 0;
      padding-top: 4px;
      padding-bottom: 20px;
      padding-right: 6px;
      padding-left: 8px;
    }

    .quiz-inner.has-action-bar {
      padding-bottom: 80px;
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
    .quiz-option.option-assumed { border: 2px dashed #9ca3af; background: #00000010; color: #374151; font-weight: 500; }
    .quiz-option.option-selected { background: #4b5563; color: #fff; border-color: #4b5563; font-weight: 500; }

    .action-bar-container {
      position: absolute;
      bottom: 26px; left: 0; right: 0;
      padding: 16px 48px;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.03);
      display: flex;
      justify-content: space-between;
      align-items: center;
      transform: translateY(100%); /* Hidden completely off the bottom */
      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      z-index: 10;
    }

    .action-bar-container.visible {
      transform: translateY(0); /* Slides up */
    }

    .action-feedback-text {
      font-weight: 600;
      font-size: 1.1rem;
    }
    .action-feedback-text.correct { color: #059669; }
    .action-feedback-text.wrong { color: #dc2626; }

    .btn-continue {
      background: #5abb4ed6;
      color: white;
      border: none;
      padding: 10px 24px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-continue:hover { background: #4e813bd6; }

    /* -----------------------------------------
;; --- RIGHT PANEL (Node Details & Resources)
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
    .node-desc {
      color: #6b7280;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-bottom: 30px;
      padding-bottom: calc(30vh + 30px);
    }

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

    @keyframes highlight-update {
      0% {
        background-color: #fef8c7; /* Light yellow */
      }
      100% {
        background-color: #ffffff;
      }
    }
    .content-updated-flash {
      /* Runs for 1.2 seconds, perfectly catching the eye without being annoying */
      animation: highlight-update 1.2s ease-out;
    }

    /* -----------------------------------------
;; --- Markdown Code Styles
       ----------------------------------------- */
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
    /* -----------------------------------------
;; --- Email Capture Prompt (modal/popup)
       ----------------------------------------- */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(15, 23, 42, 0.6); /* Dark slate overlay */
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background: white;
      padding: 24px;
      border-radius: 12px;
      width: 400px;
      max-width: 90vw;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  "])

;; ---------------------------------------------------------
;; -- DATA
;; ---------------------------------------------------------
(def featured-questions
  [{:id "❓ Undo last commits" :label "How to undo most recent commits?" :highlight? true :icon "🔥"}
   {:id "❓ Pull vs Fetch" :label "What's the difference between 'pull' and 'fetch'?"}
   {:id "❓ Delete local and remote branches" :label "How do I delete a Git branch locally and remotely?"}])

(def other-subjects
  [{:label "AI / LLM"}
   {:label "Functional Programming"}
   {:label "Software Architecture"}
   {:label "Web Development"}
   {:label "SQL"}])

(def mapped-questions
  featured-questions) ;; Eventually I can have more questions than only the featured ones.

(def searchable-nodes
  (memoize
    (fn [explanations trace-scenarios]
      (let [has-resource (->> explanations
                           (filter #(re-find #"```curated-resources" (second %)))
                           (map #(:id (first %)))
                           (set))
            has-prerequisite (->> trace-scenarios
                               (filter #(seq (:prerequisites (second %))))
                               (map first)
                               (set))]
        (map
          #(into {:id % :label % :type :concept})
          (set/intersection has-resource has-prerequisite))))))

(def trace-scenarios
  {:fallback-problem-questions ;; A variaty of question descriptions and options that are generic and independent, it can be replaced or augmented by any other set of questions.
   (for [question ["What is your primary goal while exploring Git today?"
                   "Which direction would you like to take your understanding?"
                   "To help tailor this map, what would be your next step?"
                   "Where should we take this exploration from here?"]
         [h1-id option-h1] [[".git/hooks" "I want to automate scripts (like linters or tests) to run automatically right before I commit or push."]
                            [".git/hooks" "I want to automatically trigger scripts or tests every time someone attempts to save code."]
                            ["Detached HEAD" "I need to travel back in time to look at an old commit without accidentally messing up my current work."]
                            ["Detached HEAD" "I want to know what happens when I explore past code and suddenly lose my branch context."]
                            ["Directed Acyclic Graph (DAG)" "I'd like to understand the invisible mathematical structure that connects all commits together."]
                            ["Directed Acyclic Graph (DAG)" "I'm curious about the mathematical structure Git uses to connect history behind the scenes."]
                            ["git bisect" "I need a fast, automated way to hunt down exactly which past change introduced a bug."]
                            ["git bisect" "I need to hunt down the exact, specific commit that introduced a bug into the project."]
                            ["git cherry-pick" "I want to grab one specific change from another branch and copy it into mine without merging everything."]
                            ["git cherry-pick" "I want to grab one specific, isolated commit from another branch and apply it to mine."]
                            ["git rebase" "I want to clean up, squash, or edit my commit history before opening a Pull Request."]
                            ["git rebase" "I want to clean up, squash, or reorder my local history before sharing it with the team."]
                            ["git reflog" "I made a terrible mistake and need to recover a commit that seems to be completely 'lost'."]
                            ["git reflog" "I need to know how to rescue a deleted commit—the 'undo button for the undo button'."]
                            ["git reset" "I need to unstage files or completely wipe out my recent local work by moving my branch pointer."]
                            ["git reset" "I want to completely undo my recent local work and forcefully move the timeline backward."]
                            ["Immutability" "I want to explore the underlying principle that makes Git history secure and theoretically unchangeable."]
                            ["Immutability" "I want to understand the core principle that makes Git history permanent and safe."]]
         [h2-id option-h2] [[".git/hooks" "I want to automate scripts (like linters or tests) to run automatically right before I commit or push."]
                            [".git/hooks" "I want to automatically trigger scripts or tests every time someone attempts to save code."]
                            ["Detached HEAD" "I need to travel back in time to look at an old commit without accidentally messing up my current work."]
                            ["Detached HEAD" "I want to know what happens when I explore past code and suddenly lose my branch context."]
                            ["Directed Acyclic Graph (DAG)" "I'd like to understand the invisible mathematical structure that connects all commits together."]
                            ["Directed Acyclic Graph (DAG)" "I'm curious about the mathematical structure Git uses to connect history behind the scenes."]
                            ["git bisect" "I need a fast, automated way to hunt down exactly which past change introduced a bug."]
                            ["git bisect" "I need to hunt down the exact, specific commit that introduced a bug into the project."]
                            ["git cherry-pick" "I want to grab one specific change from another branch and copy it into mine without merging everything."]
                            ["git cherry-pick" "I want to grab one specific, isolated commit from another branch and apply it to mine."]
                            ["git rebase" "I want to clean up, squash, or edit my commit history before opening a Pull Request."]
                            ["git rebase" "I want to clean up, squash, or reorder my local history before sharing it with the team."]
                            ["git reflog" "I made a terrible mistake and need to recover a commit that seems to be completely 'lost'."]
                            ["git reflog" "I need to know how to rescue a deleted commit—the 'undo button for the undo button'."]
                            ["git reset" "I need to unstage files or completely wipe out my recent local work by moving my branch pointer."]
                            ["git reset" "I want to completely undo my recent local work and forcefully move the timeline backward."]
                            ["Immutability" "I want to explore the underlying principle that makes Git history secure and theoretically unchangeable."]
                            ["Immutability" "I want to understand the core principle that makes Git history permanent and safe."]]
         [e-id option-e] [["Branch" "I want to learn how to safely build new features in an isolated parallel timeline."]
                          ["Branch" "I want to understand how to work on new features in total isolation without breaking the main code."]
                          ["Commit Object" "I want to dissect exactly what data is captured when a snapshot is saved."]
                          ["Commit Object" "I want to peek under the hood to see what a 'snapshot' actually looks like to Git."]
                          ["git clone" "I want to download a complete copy of an existing project from the internet."]
                          ["git clone" "I want to learn how to download an existing project to my local machine to start working."]
                          ["git log" "I want to learn how to search, read, and filter the history of past changes."]
                          ["git log" "I want to view the chronological history of what has happened in this project."]
                          ["git pull" "I want to download the latest updates from my team and merge them into my current work."]
                          ["git pull" "I want to update my local files with the newest code my teammates just published."]
                          ["git push" "I am ready to upload my local, finished commits for the rest of my team to see."]
                          ["git push" "I want to upload my finished local work so the rest of the team can see it."]
                          ["git status" "I just need a quick summary of what state my working files are currently in."]
                          ["git status" "I want to learn how to quickly check exactly which of my files are modified or untracked."]
                          ["Remote Repository" "I want to understand how my local code connects to servers like GitHub or GitLab."]
                          ["Remote Repository" "I want to understand the bridge between my local machine and a server like GitHub."]
                          ["Repository (.git)" "I want to know where and how Git physically stores all its data and history on my computer."]
                          ["Repository (.git)" "I want to peek inside the hidden folder where Git actually stores all its data."]
                          ["Staging Area (Index)" "I want to learn how to prepare and group specific file changes before permanently saving them."]
                          ["Staging Area (Index)" "I want to understand the 'waiting room' where files sit before they become a permanent commit."]]
         :when (not= h1-id h2-id)]
     {:description question
      :options [{:id e-id :text option-e}
                {:id h1-id :text option-h1}
                {:id h2-id :text option-h2}]})

   ;; Problem Space
   "❓ Undo last commits"
   {:routing [;; The first routing is an assumption of path. Be careful to
              ; review the text of the first path to check if it doesn't says
              ; words like "assumption", otherwise the order of the assumed path
              ; shouldn't be changed freely (if a user actually took that path
              ; it's weird to see a description saying it's assuming the answer,
              ; but as a tutorial it's valid).
              [:pushed :collaborating] "git revert"
              [:local] "git reset"
              [:pushed :personal-branch] "git push -f"
              [:local :keep] "git reset --soft"
              [:local :delete] "git reset --hard"
              [:local :--any :premature] "git commit --amend"
              [:local :--any :premature :checklist] "Pre-Commit Checklist"
              [:local :--any :premature :unit-test] "Unit Testing"
              [:local :--any :premature :git-hooks] "Pre-Commit Hooks"]
    ; [:local :--any :premature :git-hooks] "pre-commit git hook"] ;; Let's not do this one for the first version
    :questions {[] {:description "Have these commits already been pushed to a remote repository, or do they only exist locally on your computer?"
                    :options [{:id :local :text "I'm **local only**. I have not run a `git push` command yet."}
                              {:id :pushed :text "I've **already pushed** to a remote repository."}]}
                [:local] {:description "Do you want to preserve the code changes you made, or permanently discard them?"
                          :options [{:id :keep :text "**Keep the changes**: I want to undo the commit but keep all the work I did as \"unstaged\" changes in my folder."}
                                    {:id :delete :text "**Delete the changes**: I want to completely delete the last commits and the work inside them (reset to a clean previous state)."}]}
                [:pushed] {:description "Are you collaborating with others on this specific branch, or is it a personal branch where rewriting history is safe?"
                           :options [{:id :collaborating :text "Collaborating with others (Shared Branch)"}
                                     {:id :personal-branch :text "Personal branch (Safe to rewrite history)"}]}
                [:local :--any] {:description "Why did these specific commits need to be undone in the first place?"
                                 :options [{:id :premature :text "It was a premature commit. I need to add more things to the commit."}
                                           {:id :batched-work :text "Work is being batched together too broadly before being reviewed."}]}
                [:local :--any :premature] {:description "Which of the following could avoid the problem of happening again?"
                                            :options [{:id :checklist :text "**Manual Checklists**: Creating a step-by-step list to manually verify my code and requirements before staging."}
                                                      {:id :unit-test :text "**Local Unit Testing**: Running automated tests to verify the code actually fixes the issue before saving."}
                                                      {:id :git-hooks :text "**Automated Git Hooks**: Setting up scripts that automatically block my commits if linters or tests fail."}]}}}
   "❓ Pull vs Fetch"
   {:related-nodes ["git fetch" "git pull" "git merge" "Remote-Tracking Branch" "Working Directory" "Local Repository" "Remote Repository" "origin/main" "refs/remotes/" "git rebase" "pull.ff" "pull.rebase" "Upstream Branch" "Tracking Branch" "Fast-Forward Merge" "git merge --ff-only" "origin" "git status" "git branch -r" "Merge Conflicts" "Upstream Repository" "Branch" "main" "git remote"]
    :routing [
              [:integrate :clean] "git pull"
              [:review] "git fetch"
              [:integrate :dirty :commit] "git commit"
              [:integrate :dirty :discard] "git reset"
              [:integrate :dirty :commit :blocked] "git commit"
              [:integrate :dirty :discard :blocked] "git reset"
              [:integrate :dirty :stash :blocked] "git stash"
              [:integrate :dirty :--any :shared-branch] "Feature Branching"]
    :questions {[] {:description "What is your immediate goal with the remote updates?"
                    :options [{:id :review :text "Review safely without modifying local files."}
                              {:id :integrate :text "Integrate changes immediately."}]}
                [:integrate] {:description "What is the state of your local working directory?"
                              :options [{:id :clean :text "Clean: all changes committed."}
                                        {:id :dirty :text "Dirty: uncommitted work in progress."}]}
                [:integrate :dirty] {:description "How do you want to handle your uncommitted work before integrating?"
                                     :options [{:id :stash :text "Temporarily hide it."}
                                               {:id :commit :text "Permanently save it."}
                                               {:id :discard :text "Discard it entirely."}]}
                [:integrate :dirty :stash] {:description "What is driving the constant need to pull while work is incomplete?"
                                            :options [{:id :shared-branch :text "Working directly on a shared main branch with others"}
                                                      {:id :blocked :text "Unexpectedly blocked by missing remote dependencies"}]}}}
   "❓ Delete local and remote branches"
   {:related-nodes ["git branch -d" "git branch -D" "git push --deleted" "Branch" "git push" "Local Repository" "Remote Repository" "git fetch --prune" "HEAD" "git checkout / git switch" "git checkout" "Remote-Tracking Branch" "Tracking Branch" "Upstream Branch" "refs/remotes/" "origin" "git branch" "git merge" "git branch -r" "git branch -vv"]
    :routing [
              [:simple-safe] "git branch -d"
              [:simple-force] "git branch -D"
              [:advanced :ghosts] "git fetch --prune"
              [:advanced :unresolved :action-force] "git branch -D"
              [:advanced :unresolved :action-merge] "git merge" ;; Cite the full command: "git checkout main && git merge <branch-name>"
              [:advanced :unresolved :action-archive :tag] "git tag" ;; Cite the full command:"git tag archive/<branch-name> <branch-name> && git branch -D <branch-name>"
              [:advanced :unresolved :action-archive :branch] "git branch" ;; Cite the full command: "git tag archive/<branch-name> <branch-name> && git branch -D <branch-name>"
              [:advanced :unresolved :action-analyze] "git diff" ;; Cite the full command: Run `git log main..<branch-name> --oneline` and `git diff main..<branch-name>` to review the changes.
              [:advanced :unresolved :action-analyze :post-merge] "git merge" ;; "git checkout main && git merge <branch-name>"
              [:advanced :unresolved :action-analyze :post-force] "git branch -D"
              [:advanced :unresolved :action-analyze :post-archive :tag] "git tag" ;; "git tag archive/<branch-name> <branch-name> && git branch -D <branch-name>"
              [:advanced :unresolved :action-analyze :post-archive :branch] "git branch"] ;; "git tag archive/<branch-name> <branch-name> && git branch -D <branch-name>"
    :questions {[] {:description "What kind of branch cleanup are you trying to perform?"
                    :options [{:id :simple-safe :text "Safely delete a branch I have already merged"}
                              {:id :simple-force :text "Force-delete an unmerged branch"}
                              {:id :advanced :text "Clean up a large branch list or stale branches"}]}
                [:advanced] {:description "What type of clutter are you dealing with?"
                             :options [{:id :ghosts :text "Local tracking branches that no longer exist on the remote server"}
                                       {:id :unresolved :text "Old, unmerged branches that I need to process"}]}
                [:advanced :unresolved] {:description "What do you want to do with this unresolved branch?"
                                         :options [{:id :action-merge :text "Merge it into main."}
                                                   {:id :action-analyze :text "Analyze its contents first."}
                                                   {:id :action-force :text "Force delete it permanently."}
                                                   {:id :action-archive :text "I want to clean my branch list, but keep the branch as history."}]}
                [:advanced :unresolved :action-analyze] {:description "After analyzing the branch, what do you want to do with this unresolved branch?"
                                                         :options [{:id :post-merge :text "The work is complete. Merge it into main."}
                                                                   {:id :post-force :text "It's junk. Force delete it permanently."}
                                                                   {:id :post-archive :text "I want to clean my branch list, but keep the branch as history."}]}
                ;; Same question as [.. :action-analyze :post-archive]
                [:advanced :unresolved :action-archive] {:description "How would you like to store this archived branch?"
                                                         :options [{:id :tag :text "Convert it to a read-only tag and delete the branch."}
                                                                   {:id :branch :text "Rename the branch into an 'archive/' folder."}]}
                ;; Same question as [.. :action-archive]
                [:advanced :unresolved :action-analyze :post-archive] {:description "How would you like to store this archived branch?"
                                                                       :options [{:id :tag :text "Convert it to a read-only tag and delete the branch."}
                                                                                 {:id :branch :text "Rename the branch into an 'archive/' folder."}]}}}
   ;; Knowledge Space
   "git branch -d"
   {:prerequisites ["git push --deleted"]}

   "git branch -D"
   {:prerequisites ["git push --deleted"]}

   "git fetch"
   {:prerequisites ["Remote Repository" "Local Repository"]
    :questions {:1 {:description "What is the primary function of the `--prune` (or `-p`) flag when running `git fetch --prune`?"
                    :options [{:id :a :text "It permanently deletes local branches that have already been merged into `main`."
                               :why "Fetching with prune only affects remote-tracking branches, not your local working branches."}
                              {:id :b :text "It removes local **remote-tracking branches** (like `origin/feature-branch`) if the corresponding branch has been deleted on the remote repository."
                               :why "By default, `git fetch` does not remove references. The `--prune` flag forces Git to clean up stale remote-tracking references that no longer exist on the remote."}
                              {:id :c :text "It runs `git gc` in the background to prune dangling commits from the local database."
                               :why "Garbage collection (`git gc`) is a separate process that handles dangling commits."}
                              {:id :d :text "It clears the remote reflog to save space before downloading new objects."
                               :why "The reflog is local, and `git fetch --prune` does not clear it."}
                              {:id :e :text "It forcefully overwrites local tags with the tags from the remote repository."
                               :why "Tag pruning or force-updating tags requires different flags (like `--tags` or `--prune-tags`)."}]
                    :hint "Over time, as teammates delete branches on GitHub/GitLab, your local `git branch -r` list gets cluttered. How do you clean it up?"
                    :correct-id :b}}}

   "git pull"
   {:prerequisites ["git fetch" "git merge"]
    :questions {:3 {:description "Why would a developer choose to use `git pull --rebase` instead of a standard `git pull`?"
                    :options [{:id :a :text "To ensure that all local uncommitted changes are discarded before bringing in remote changes."
                               :why "Rebase does not discard uncommitted changes; it rewrites history. Discarding changes requires `git reset` or `git checkout`."}
                              {:id :b :text "To maintain a linear project history by applying their local commits directly on top of the newly fetched remote commits, avoiding an unnecessary **merge commit**."
                               :why "Rebasing rewrites local history by temporarily setting aside local commits, updating the branch to the remote's tip, and then reapplying the local commits one by one."}
                              {:id :c :text "To automatically squash all remote commits into a single commit before integrating them locally."
                               :why "`git pull --rebase` maintains the remote commits as they are; it rebases local commits, not remote ones."}
                              {:id :d :text "To bypass conflict resolution, as rebasing automatically accepts the remote changes."
                               :why "Rebasing can still result in conflicts, which must be resolved commit-by-commit."}
                              {:id :e :text "To force the remote repository to accept their local history, overwriting remote changes."
                               :why "Modifying the remote requires a `git push`, usually with `--force`, not a `git pull`."}]
                    :hint "Standard pulls often result in 'Merge branch main of origin into main' commits, cluttering the log."
                    :correct-id :b}}}

   "git merge"
   {:prerequisites ["Staging Area (Index)" "Working Directory" "git rebase"]
    :questions {:5 {:description "What is the result of executing `git merge --squash feature-branch`?"
                    :options [{:id :a :text "It automatically creates a single merge commit that combines all commit messages from `feature-branch`."
                               :why "It prepares the working tree but does *not* automatically create the commit."}
                              {:id :b :text "It takes all the changes from `feature-branch` and stages them in your working directory as uncommitted changes, without recording a merge link in the history."
                               :why "Squash merges take the net effect of the target branch and put it in the index, allowing you to create a brand new, disconnected commit containing all changes."}
                              {:id :c :text "It deletes the `feature-branch` immediately after merging it into the current branch."
                               :why "Git never deletes branches automatically during a merge operation."}
                              {:id :d :text "It performs an interactive rebase of `feature-branch` onto the current branch."
                               :why "Interactive rebasing (`git rebase -i`) is a completely separate command for editing history."}
                              {:id :e :text "It forces a 3-way merge commit even if a fast-forward is possible."
                               :why "This is the behavior of `--no-ff`, not `--squash`."}]
                    :hint "This flag is highly useful when you want to bring a messy branch into `main` as one clean, isolated change."
                    :correct-id :b}}}

   "Remote-Tracking Branch"
   {:prerequisites ["origin/main" "Upstream Branch" "refs/remotes/"]
    :questions {:7 {:description "If you have a local branch named `backend-api` and you want it to track a remote branch named `origin/feat/api-v2`, what command should you use?"
                    :options [{:id :a :text "`git remote add origin feat/api-v2`"
                               :why "`git remote add` is used to define a new remote server URL, not to set branch tracking."}
                              {:id :b :text "`git checkout origin/feat/api-v2 -- backend-api`"
                               :why "This syntax attempts to checkout specific files from a remote branch, not set tracking."}
                              {:id :c :text "`git branch --set-upstream-to=origin/feat/api-v2 backend-api`"
                               :why "This command explicitly configures the local branch `backend-api` to use `origin/feat/api-v2` as its upstream branch, enabling shorthand `git pull` and `git push`."}
                              {:id :d :text "`git push --track origin backend-api:feat/api-v2`"
                               :why "While `git push -u` can set tracking, the syntax provided is invalid for strictly setting tracking on an existing local branch without pushing."}
                              {:id :e :text "`git branch -m backend-api origin/feat/api-v2`"
                               :why "The `-m` flag is used to rename a branch, not to set its upstream tracker."}]
                    :hint "You need to set the 'upstream' reference for your current local branch."
                    :correct-id :c}}}

   "Remote Repository"
   {:prerequisites ["Local Repository" "Tracking Branch"]
    :questions {:27 {:description "What is a 'bare' remote repository, and why is it preferred for central collaboration servers?"
                     :options [{:id :a :text "It is a repository that has been stripped of its commit history to save space." :why "Bare repositories retain full history."}
                               {:id :b :text "It is a repository with no working directory, designed specifically to receive pushes without conflicts over working tree state." :why "Because no one works directly inside a bare repo, pushing to it won't conflict with checked-out files."}
                               {:id :c :text "It is a repository that lacks the `.git` directory." :why "A bare repo is essentially *only* the contents of the `.git` directory."}
                               {:id :d :text "It is a repository initialized with `git init --shallow`." :why "Shallow clones lack history, but are not necessarily bare."}
                               {:id :e :text "It is a remote that does not accept SSH connections." :why "Bare repos work perfectly fine over SSH."}]
                     :hint "If a server had files checked out, pushing to the branch it was currently viewing would cause massive chaos."
                     :correct-id :b}}}

   "origin/main"
   {:prerequisites ["main" "git fetch" "Remote-Tracking Branch"]
    :questions {:17 {:description "If `origin/main` is pointing to an older commit than the actual remote `main` branch, which command is necessary to update just this reference without altering your working directory?"
                     :options [{:id :a :text "`git pull origin main`" :why "Pull modifies the working directory by merging."}
                               {:id :b :text "`git update origin main`" :why "There is no such command."}
                               {:id :c :text "`git fetch origin main`" :why "Fetch safely downloads new data and updates remote-tracking branches without touching local working branches."}
                               {:id :d :text "`git rebase origin/main`" :why "This rebases your current branch; it doesn't fetch new remote data."}
                               {:id :e :text "`git checkout origin/main`" :why "This puts you in a detached HEAD state; it doesn't update the reference from the remote."}]
                     :hint "This command is the first half of what `git pull` does behind the scenes."
                     :correct-id :c}}}

   "refs/remotes/"
   {:prerequisites ["Local Repository" "git branch -r" "Remote-Tracking Branch"]
    :questions {:23 {:description "How does Git logically differentiate between branches stored in `refs/heads/` and those in `refs/remotes/`?"
                     :options [{:id :a :text "`refs/heads/` stores tag pointers, while `refs/remotes/` stores branch pointers." :why "Tags are stored in `refs/tags/`."}
                               {:id :b :text "`refs/heads/` branches can be checked out and directly modified; `refs/remotes/` branches are read-only snapshots of remote state." :why "If you check out a remote branch directly, you end up in a 'detached HEAD' state because Git prevents direct commits to them."}
                               {:id :c :text "`refs/heads/` is for the upstream, `refs/remotes/` is for the origin fork." :why "Both upstreams and origins have refs under `refs/remotes/`."}
                               {:id :d :text "`refs/heads/` uses SHA-1, while `refs/remotes/` uses SHA-256." :why "Hash algorithms are consistent across the entire repository."}
                               {:id :e :text "There is no difference; Git symlinks one to the other." :why "They are completely separate pointers managed differently."}]
                     :hint "Think about what happens when you try to directly `git commit` to `origin/main`."
                     :correct-id :b}}}

   "git rebase"
   {:prerequisites ["Commit Object" "Branch" "git merge" "DAG (Directed Acyclic Graph)"]
    :questions {:1 {:description "In the command `git rebase --onto main branchA branchB`, which commits are rebased?"
                    :options [{:id :a :text "All commits from `branchA` and `branchB` are applied to `main`." :why "The `--onto` flag uses specific ranges, not all commits."}
                              {:id :b :text "Commits reachable from `branchA` but not `branchB`, placed onto `main`." :why "The order of arguments is reversed; `branchB` is the target branch."}
                              {:id :c :text "Commits reachable from `branchB` but not `branchA`, placed onto `main`." :why "Git takes the commits exclusive to `branchB` (since `branchA`) and replays them on `main`."}
                              {:id :d :text "Only the tip commit of `branchB` is placed onto `main`." :why "Git replays the entire sequence of commits between `branchA` and `branchB`, not just the tip."}
                              {:id :e :text "It merges `branchA` and `branchB`, then rebases the result onto `main`." :why "Rebase `--onto` operates on a linear range of commits, it does not perform a merge."}]
                    :hint "The syntax is `git rebase --onto <newbase> <upstream> <branch>`."
                    :correct-id :c}}}

   "pull.ff"
   {:prerequisites ["git pull" "git merge" "git merge --ff-only" "Fast-Forward Merge"]
    :questions {:28 {:description "What does setting `git config pull.ff only` ensure during your workflow?"
                     :options [{:id :a :text "It forces `git pull` to only execute fast-forward merges, failing entirely if the local branch has diverged." :why "This acts as a safety valve, forcing developers to manually rebase or merge if histories diverge."}
                               {:id :b :text "It only fetches branches that have fast-forwarded on the remote." :why "Fetch retrieves all configured branches."}
                               {:id :c :text "It speeds up the network transfer during a pull." :why "`ff` stands for fast-forward (history), not network speed."}
                               {:id :d :text "It automatically creates merge commits for everything." :why "It explicitly prevents merge commits."}
                               {:id :e :text "It ignores all file conflicts." :why "Fast-forwards by definition cannot have file conflicts."}]
                     :hint "It strictly prevents Git from automatically creating a merge commit when pulling."
                     :correct-id :a}}}

   "pull.rebase"
   {:prerequisites ["git pull" "git rebase"]
    :questions {:15 {:description "Setting `pull.rebase` to `interactive` accomplishes what specific workflow during a `git pull`?"
                     :options [{:id :a :text "It prompts the user to confirm every single file change before downloading." :why "Fetch downloads objects automatically; interaction is during integration."}
                               {:id :b :text "It opens an interactive rebase session, allowing the user to squash, reorder, or edit local commits before applying them on top of the pulled commits." :why "This allows cleanup of local commits right as they are integrated with remote changes."}
                               {:id :c :text "It automatically attempts to resolve conflicts using an interactive GUI tool." :why "Conflict resolution uses `mergetool`, not interactive rebase."}
                               {:id :d :text "It pauses the pull to ask whether to use merge or rebase." :why "It actively begins a rebase in interactive mode (`-i`)."}
                               {:id :e :text "It requests a password interactively for SSH keys." :why "SSH authentication is separate from the `pull.rebase` config."}]
                     :hint "Think about what `git rebase -i` does."
                     :correct-id :b}}}

   "Upstream Branch"
   {:prerequisites ["git branch -vv" "git push -u" "Remote-Tracking Branch"]
    :questions {:31 {:description "Which shorthand syntax can be used to refer to the upstream branch of the currently checked-out branch?"
                     :options [{:id :a :text "`HEAD^`" :why "This refers to the parent of the current commit."}
                               {:id :b :text "`~upstream`" :why "Tildes are used for ancestral navigation (e.g., `HEAD~1`)."}
                               {:id :c :text "`@{upstream}` or `@{u}`" :why "This syntax dynamically resolves to the upstream tracking branch, e.g., `git merge @{u}`."}
                               {:id :d :text "`origin/HEAD`" :why "This points to the default branch on the remote, not necessarily the upstream of the *current* branch."}
                               {:id :e :text "`^upstream`" :why "Carets are used for parent selection or negation."}]
                     :hint "It uses the 'at' symbol combined with braces."
                     :correct-id :c}}}

   "Tracking Branch"
   {:prerequisites ["origin/main" "main" "Remote-Tracking Branch"]
    :questions {:2 {:description "How do you configure an existing local branch to track a remote branch named `origin/feature`?"
                    :options [{:id :a :text "`git branch -u origin/feature`" :why "The `-u` (or `--set-upstream-to`) flag sets the tracking relationship for the current branch."}
                              {:id :b :text "`git track origin/feature`" :why "There is no `track` command in Git."}
                              {:id :c :text "`git push --track origin/feature`" :why "While `git push -u` sets tracking, `--track` is used with checkout or branch creation."}
                              {:id :d :text "`git branch --track origin/feature`" :why "This creates a new branch that tracks a remote, it doesn't set an existing one."}
                              {:id :e :text "`git remote add origin/feature`" :why "This adds a new remote repository, not a tracking branch."}]
                    :hint "Look for the flag that stands for 'set upstream'."
                    :correct-id :a}}}

   "Fast-Forward Merge"
   {:prerequisites ["git merge --ff-only" "git merge" "Merge Conflicts"]
    :questions {:41 {:description "Why might a release manager explicitly prevent a fast-forward merge using `git merge --no-ff`?"
                     :options [{:id :a :text "To force the creation of a merge commit, thereby preserving the historical grouping of commits from a feature branch." :why "Even if a fast-forward is possible, `--no-ff` creates a merge node, visibly grouping the feature's commits together in the history graph."}
                               {:id :b :text "To automatically squash the commits." :why "Squashing is done with `--squash`."}
                               {:id :c :text "To prevent network lag." :why "Merge flags do not affect network."}
                               {:id :d :text "To ensure that all commits are signed by GPG." :why "Signing is handled by `-S`."}
                               {:id :e :text "To completely erase the feature branch." :why "It preserves the feature branch's historical context."}]
                     :hint "Sometimes a straight linear history hides the fact that a group of commits represented a single unified feature."
                     :correct-id :a}}}

   "git merge --ff-only"
   {:prerequisites ["Fast-Forward Merge" "git merge" "Merge Conflicts"]
    :questions {:19 {:description "Why might an engineering team enforce `--ff-only` policies globally on their continuous integration server?"
                     :options [{:id :a :text "To ensure that code is always compressed." :why "Merges do not dictate object compression."}
                               {:id :b :text "To maintain a perfectly linear project history without any extraneous merge commits." :why "Enforcing fast-forwards means developers must rebase their changes before merging, keeping history clean and linear."}
                               {:id :c :text "To bypass pre-commit hooks." :why "Merge strategies do not bypass hooks."}
                               {:id :d :text "To automatically resolve all text conflicts." :why "Fast-forwards don't resolve conflicts; they avoid merges entirely."}
                               {:id :e :text "To allow unrelated histories to be merged safely." :why "Fast-forwarding fundamentally requires related, linear histories."}]
                     :hint "Think about the visual graph of commits in platforms like GitHub when examining large projects."
                     :correct-id :b}}}

   "origin"
   {:prerequisites ["Remote-Tracking Branch" "Upstream Repository" "origin/main" "refs/remotes/"]
    :questions {:7 {:description "Which command securely updates the URL of the remote named `origin` to a new endpoint?"
                    :options [{:id :a :text "`git remote update origin <new-url>`" :why "`remote update` fetches updates from remotes; it doesn't change URLs."}
                              {:id :b :text "`git push origin --set-url <new-url>`" :why "Push does not configure remote URLs."}
                              {:id :c :text "`git remote set-url origin <new-url>`" :why "This command directly modifies the URL associated with the remote name 'origin'."}
                              {:id :d :text "`git config remote.origin <new-url>`" :why "You would need to specify `remote.origin.url` for this to work via config."}
                              {:id :e :text "`git origin url <new-url>`" :why "There is no built-in `git origin` command."}]
                    :hint "Look for the command under the `git remote` namespace that explicitly sets a URL."
                    :correct-id :c}}}

   "git status"
    :questions {:38 {:description "Which three distinct areas does `git status` primarily compare to show you the state of your project?"
                     :options [{:id :a :text "Local repo, Remote repo, Staging area" :why "Status does not dynamically check the remote repo (unless fetching first)."}
                               {:id :b :text "Working Directory, the Staging Area (Index), and the HEAD commit." :why "`git status` compares Working Dir vs Index (un-staged changes) and Index vs HEAD (staged changes)."}
                               {:id :c :text "Branch A, Branch B, Branch C" :why "Status focuses on the current checked-out branch only."}
                               {:id :d :text "Untracked files, Ignored files, Stashed files" :why "It shows untracked files, but usually hides ignored and stashed files."}
                               {:id :e :text "Commit history, Reflog, Remote HEAD" :why "Status does not show history or reflog."}]
                     :hint "Think about the journey of a file from editing to committing."
                     :correct-id :b}}}

   "git branch -r"
   {:prerequisites ["refs/remotes/"]
    :questions {:33 {:description "If `git branch -r` shows `origin/stale-branch` but you know a colleague deleted it on GitHub, why is it still showing and how do you fix it?"
                     :options [{:id :a :text "Git preserves branches forever; use `git branch -D origin/stale-branch`." :why "Directly deleting remote-tracking branches is bad practice; pruning is better."}
                               {:id :b :text "Your colleague didn't delete it properly; tell them to delete it again." :why "The remote server was updated, but the local repo hasn't fetched the deletion."}
                               {:id :c :text "The local cached reference hasn't been updated; you must run `git fetch --prune` to remove it." :why "Fetching normally only adds or updates; `--prune` explicitly removes local remote-tracking refs that no longer exist upstream."}
                               {:id :d :text "It is locked due to an ongoing rebase; run `git rebase --abort`." :why "Stale remote branches have nothing to do with active local rebases."}
                               {:id :e :text "You must delete the remote repository and clone again." :why "Cloning again is massive overkill for a simple synchronization."}]
                     :hint "Your local Git client doesn't know what happened on the server until it explicitly checks and cleans up."
                     :correct-id :c}}}

   "Merge Conflicts"
   {:prerequisites ["git merge" "Feature Branching Workflow" "Staging Area"]
    :questions {:45 {:description "When manually resolving a merge conflict in a file, what do the markers `<<<<<<<`, `=======`, and `>>>>>>>` indicate?"
                     :options [{:id :a :text "They represent syntax errors caused by the compiler." :why "They are standard text markers injected by Git."}
                               {:id :b :text "`<<<<<<<` marks the start of the file, `=======` the middle, and `>>>>>>>` the end." :why "They only wrap the conflicted hunk, not the whole file."}
                               {:id :c :text "`<<<<<<<` begins your current local branch's changes, `=======` separates the conflicting versions, and `>>>>>>>` ends the incoming/target branch's changes." :why "These markers clearly isolate the two competing hunks of code so the developer can edit them into a final resolved state."}
                               {:id :d :text "`<<<<<<<` means the code is older, `>>>>>>>` means the code is newer." :why "They represent branch perspectives (HEAD vs incoming), not strict timestamps."}
                               {:id :e :text "They are encrypted keys verifying the merge." :why "They are plain text visual aids."}]
                     :hint "The markers divide the conflicting area into 'Ours' and 'Theirs'.":correct-id :c}}}

   "Upstream Repository"
   {:prerequisites ["origin" "Local Repository"]
    :questions {:12 {:description "In a standard fork-and-pull-request workflow on platforms like GitHub, what does the term 'Upstream Repository' conventionally refer to?"
                     :options [{:id :a :text "The personal fork residing in the user's account." :why "This is usually referred to as the 'origin'."}
                               {:id :b :text "The local clone on the developer's computer." :why "This is the local repository."}
                               {:id :c :text "The original, central repository from which a user forked their personal remote repository." :why "Developers sync changes from the 'upstream' to keep their fork updated."}
                               {:id :d :text "The branch currently checked out in the working directory." :why "This is the active local branch."}
                               {:id :e :text "The staging environment server." :why "Git does not inherently know about staging servers."}]
                     :hint "It's the source of truth that multiple contributors fork from."
                     :correct-id :c}}}

   "main"
   {:prerequisites ["origin/main" "master"]
    :questions {:24 {:description "In modern Git environments, what is the role of the `main` branch?"
                     :options [{:id :a :text "It is a protected namespace that cannot be deleted." :why "Git allows deleting the `main` branch just like any other."}
                               {:id :b :text "It is a special branch that always tracks remote changes automatically." :why "Tracking must be configured for all branches."}
                               {:id :c :text "It is simply the conventional default name for the primary, base branch of a repository." :why "It has no special technical powers over other branches; it is just a naming convention."}
                               {:id :d :text "It is the only branch allowed to push to `origin`." :why "Any tracking branch can be pushed."}
                               {:id :e :text "It is a hidden branch used for storing internal metadata." :why "It is a standard, visible development branch."}]
                     :hint "Does it have special privileges, or is it just a commonly agreed-upon standard?"
                     :correct-id :c}}}

   "git remote"
   {:prerequisites ["Remote Repository"]
    :questions {:21 {:description "What does the command `git remote prune origin` accomplish?"
                     :options [{:id :a :text "It deletes the remote repository `origin` entirely." :why "To remove a remote, you use `git remote remove origin`."}
                               {:id :b :text "It permanently deletes all local branches that have been merged." :why "That requires custom scripting or `git branch -d`."}
                               {:id :c :text "It pushes a command to delete obsolete branches on the server." :why "Prune affects local tracking branches, not remote server branches directly."}
                               {:id :d :text "It deletes local remote-tracking branches under `refs/remotes/origin/` that no longer exist on the remote `origin`." :why "It cleans up stale pointers to branches that colleagues may have deleted on the server."}
                               {:id :e :text "It garbage collects loose objects in the remote." :why "Prune cleans up refs, while `gc` handles objects."}]
                     :hint "Think about cleaning up 'stale' references after someone deletes a branch on GitHub."
                     :correct-id :d}}}

   "git reset"
   {:prerequisites ["Staging Area (Index)" "HEAD"]
    :questions {:43 {:description "If you accidentally perform `git reset --hard` and seem to lose unpushed commits, how can you effectively recover them?"
                     :options [{:id :a :text "They are gone forever; `--hard` securely erases them from disk." :why "Git retains orphaned objects for typically 30 days before garbage collection."}
                               {:id :b :text "By finding the lost commit hashes using `git reflog` and checking them out or resetting back to them." :why "The reflog tracks all movements of the HEAD pointer, allowing you to find the hashes of 'lost' commits and restore them."}
                               {:id :c :text "By querying the remote repository's recycle bin." :why "Remote repositories do not have a standard recycle bin for unpushed commits."}
                               {:id :d :text "By running `git undelete`." :why "There is no such command."}
                               {:id :e :text "By extracting them from `.git/hooks`." :why "Hooks are shell scripts, not data backups."}]
                     :hint "Git keeps a journal of every time your HEAD pointer moves locally."
                     :correct-id :b}}}

   "git reset --soft"
   {:prerequisites ["HEAD"]
    :questions {:0 {:title "The Three Trees Architecture"
                    :description "When executing `git reset --soft <commit>`, which of Git's **Three Trees** are updated?"
                    :options [{:id :a :text "`HEAD` is updated, the **Index** is updated, but the **Working Directory** is left untouched."
                               :why "This accurately describes the behavior of `git reset --mixed`, which is the default mode, not `--soft`."}
                              {:id :b :text "`HEAD` is updated, and both the **Index** and **Working Directory** are left completely untouched."
                               :why "Because `--soft` stops after moving `HEAD`, the Staging Area (Index) and the files on your disk remain exactly as they were before the command was run."}
                              {:id :c :text "Only the **Working Directory** is updated to match the target `<commit>`."
                               :why "Git commands rarely update the Working Directory without also updating the Index. This option is incorrect for any reset mode."}
                              {:id :d :text "`HEAD` is updated, the **Index** is cleared, and the **Working Directory** is violently overwritten."
                               :why "This describes the highly destructive `git reset --hard` command, which wipes out uncommitted work."}
                              {:id :e :text "`HEAD` remains unchanged, but the **Index** is updated with the contents of `<commit>`."
                               :why "If `HEAD` does not move, it is not a reset. This behavior is closer to what `git restore --staged` accomplishes."}]
                    :hint "Think about the 'blast radius' of the reset flags. `--soft` is the gentlest form of time travel Git offers."
                    :correct-id :b}}}

   "HEAD"
   {:prerequisites ["Commit Object" "git checkout / git switch" "Branch" ".git/HEAD"]
    :questions {:0 {:title "The Internals of HEAD"
                    :description "What are the exact text contents of the `.git/HEAD` file when you have successfully run `git checkout feature/login` (assuming it is a normal, attached branch)?"
                    :options [{:id :a :text "The 40-character **SHA-1 hash** of the latest commit on the `feature/login` branch."
                               :why "This would be the case only if you were in a **detached HEAD** state (e.g., checking out a specific commit hash directly)."}
                              {:id :b :text "A binary pointer referencing the `feature/login` tree object in the `.git/objects` database."
                               :why "Git references are strictly plain text files, not binary pointers."}
                              {:id :c :text "`ref: refs/heads/feature/login`"
                               :why "In an attached state, `HEAD` acts as a **symbolic reference** (symref). It stores the exact textual path to the branch reference file it is currently tracking."}
                              {:id :d :text "`branch: feature/login`"
                               :why "Git does not use the `branch:` syntax internally. It explicitly uses the `ref:` keyword followed by the full internal path."}
                              {:id :e :text "An OS-level symlink pointing to the `.git/refs/heads/feature/login` file."
                               :why "While conceptually similar to a symlink, Git uses its own plain-text symbolic reference mechanism (`ref: ...`) to maintain cross-platform compatibility without relying on the OS file system features."}]
                    :hint "Think about how Git knows which branch to update when you type `git commit`. It needs a direct map to the branch reference file, not just a hash."
                    :correct-id :c}}}

   "Working Directory"
   {:prerequisites ["git add" "git status" "git restore" "Repository (.git)"]
    :questions {:34 {:description "What exactly constitutes the Working Directory in Git?"
                     :options [{:id :a :text "The hidden `.git` folder." :why "This is the local repository/database."}
                               {:id :b :text "The Staging Area where files wait to be committed." :why "The index/staging area is separate from the working directory."}
                               {:id :c :text "The local filesystem directory containing the currently checked-out version of your project files." :why "This is the sandbox where you actually view, create, and modify your code files."}
                               {:id :d :text "The remote server's filesystem." :why "The working directory is strictly local."}
                               {:id :e :text "A temporary memory buffer used during merges." :why "Merges happen in the working tree, but the tree itself is persistent filesystem data."}]
                     :hint "It is the folder you open in your IDE or text editor."
                     :correct-id :c}}}

   "Staging Area (Index)"
   {:prerequisites ["Snapshot" "Repository (.git)" "Cache"]
    :questions {:2 {:description "If you have modified a tracked file but have NOT yet run `git add`, what does `git diff` compare by default?"
                    :options [{:id :a :text "The Working Directory against the latest Commit (HEAD)." :why "This is what `git diff HEAD` does, not the default `git diff`."}
                              {:id :b :text "The Staging Area (Index) against the latest Commit (HEAD)." :why "This is what `git diff --staged` (or `--cached`) does."}
                              {:id :c :text "The Working Directory against the Staging Area (Index)." :why "By default, `git diff` shows what you have changed in your local files that hasn't yet been staged."}
                              {:id :d :text "The local Index against the Remote Repository's Index." :why "Git doesn't compare local and remote indexes this way; it compares commits."}
                    :hint "If you haven't staged it yet, you are looking at the difference between your raw files and what is currently in the draft space."
                    :correct-id :c}}}

   "Staging Area"
   {:prerequisites ["Staging Area (Index)"]
    :questions {:1 {:description "When you execute `git add <file>`, what exact changes occur within the Git architecture regarding the Index?"
                    :options [{:id :a :text "Git copies the raw file directly into the `.git/index` directory." :why "The Index is a single binary file, not a directory that holds raw files."}
                              {:id :b :text "Git generates a Blob Object in the database and records its SHA-1 hash and file path in the Index." :why "This perfectly describes the mechanism. The Index acts as a manifest pointing to the newly hashed Blobs."}
                              {:id :c :text "Git creates a temporary Commit Object and places it in the Staging Area." :why "Commits are only created when `git commit` is run, never by `git add`."}
                              {:id :d :text "Git flags the file in the Working Directory as 'ready' but doesn't move any data to the `.git` folder yet." :why "`git add` physically hashes and compresses the file into the `.git/objects` database immediately."}
                              {:id :e :text "Git creates a new Tree object representing the current directory state and stages it." :why "Tree objects are built from the Index during the `git commit` phase, not during `git add`."}]
                    :hint "Think about how Git separates the file's content (the Blob) from its name and location."
                    :correct-id :b}}}

   "Cache"
   {:prerequisites ["Staging Area (Index)"]
    :questions {:4 {:description "How does the command `git commit -a` interact with the Index?"
                    :options [{:id :a :text "It completely bypasses the Index, committing files directly from the Working Directory." :why "Git never bypasses the Index. It always builds the Commit Object from the state of the Index."}
                              {:id :b :text "It stages all modified, deleted, AND untracked files, then creates a commit." :why "The `-a` flag does not stage newly created (untracked) files."}
                              {:id :c :text "It automatically updates the Index, and immediately creates a Commit Object." :why "It is a shortcut that essentially runs `git add -u` (for tracked files) silently before executing the commit."}
                              {:id :d :text "It clears the Index completely before building the new commit from the Working Directory." :why "Clearing the Index would result in an empty commit. It updates it, not clears it."}
                              {:id :e :text "It creates a commit containing only what was already in the Index, ignoring the Working Directory." :why "This is what a standard `git commit` (without `-a`) does."}]
                    :hint "Think of `-a` as a shortcut for tracked files that saves you from typing `git add`."
                    :correct-id :c}}}

   "git revert"
   {:prerequisites ["Commit Object"]
    :questions {:4 {:description "Unlike `git reset`, how does `git revert` undo changes?"
                    :options [{:id :a :text "It deletes the targeted commit and all subsequent commits from the history." :why "This describes `git reset --hard`."}
                              {:id :b :text "It creates a new commit that applies the exact inverse of the changes from a specific commit." :why "`git revert` is safe for shared histories because it rolls forward, negating the old changes."}
                              {:id :c :text "It moves the changes from the commit back into the Staging Area." :why "This describes `git reset --soft`."}
                              {:id :d :text "It detaches the HEAD pointer to a previous state without altering commits." :why "Checking out a specific commit hash detaches the HEAD."}
                              {:id :e :text "It permanently deletes files modified in the reverted commit from the working directory." :why "It simply inverses changes; it doesn't blindly delete files unless the reverted commit added them."}]
                    :hint "Think about how to safely undo changes in a shared, public repository."
                    :correct-id :b}}}

   "Commit Object"
   {:prerequisites ["Tree" "Snapshot" "SHA-1 Hash"]
    :questions {:1 {:description "If you execute `git commit --amend --no-edit` without staging any new changes, why does the resulting commit object resolve to a completely different SHA-1 hash than the original?"
                    :options [{:id :a :text "Git automatically injects a new cryptographic nonce into the commit header to enforce global graph uniqueness."}
                              {:id :b :text "The  `tree` object is recursively re-hashed to guarantee data integrity against the `.git/index.`"}
                              {:id :c :text "The committer timestamp is updated to the current execution time, fundamentally altering the raw text payload used for the SHA-1 calculation."}
                              {:id :d :text "The parent pointer is reassigned to reference the original commit, strictly enforcing a linear Directed Acyclic Graph."}]
                    :correct-id :c}}}

   "Repository (.git)"
   {:prerequisites ["Local Repository"]
    :questions {:1 {:title "Dangling Objects"
                    :description "When rewriting history using commands like `` `git commit --amend` `` or `` `git reset` ``, Git creates **\"dangling\" objects**. How does the `` `.git` `` repository manage and eventually remove these orphaned objects?"
                    :options [{:id :a :text "Git immediately deletes any object the moment no branch or tag points to it to save disk space."
                               :why "Git is extremely conservative with data deletion. Immediate deletion would make commands like `git reset` irreversibly destructive."}
                              {:id :b :text "The `` `git push` `` command automatically detects dangling objects and deletes them from the local `` `.git/objects` `` folder before syncing."
                               :why "`git push` only calculates the objects needed by the remote server and sends them; it does not perform local cleanup."}
                              {:id :c :text "The `` `git gc` `` (garbage collection) command runs in the background, pruning unreachable loose objects that are older than a specific expiration period."
                               :why "Git safely orphans commits during history rewrites. `git gc` runs automatically on certain commands to pack objects and permanently delete unreachable (dangling) objects that have expired from the **Reflog** (typically after 14 to 30 days)."}
                              {:id :d :text "They are kept indefinitely until the user manually deletes the `` `.git/objects` `` folder and runs `` `git init` `` again."
                               :why "Manually deleting the objects folder would completely corrupt and destroy the entire repository, not just the dangling commits."}
                              {:id :e :text "The `` `.git/reflog` `` automatically purges dangling commits every time you checkout a new branch."
                               :why "The Reflog's exact purpose is to keep dangling commits alive and reachable for a safety period, not to purge them on checkout."}]
                    :hint "Git is extremely hesitant to delete data immediately. It relies on a background maintenance task and an expiration timer to clean house."
                    :correct-id :c}}}

   "Local Repository"
   {:prerequisites ["Remote Repository"]
    :questions {:9 {:description "What is the primary internal function of the `git gc` command in a local repository?"
                    :options [{:id :a :text "It forcefully deletes all untracked files in the working directory." :why "This is done by `git clean`."}
                              {:id :b :text "It automatically resolves dangling merge conflicts." :why "Git requires human intervention to resolve logical conflicts."}
                              {:id :c :text "It cleans up unnecessary files and optimizes the repository by compressing loose objects into packfiles." :why "`git gc` (garbage collection) compresses data and removes unreachable objects to save space and improve performance."}
                              {:id :d :text "It pushes all unpushed garbage commits to the remote origin." :why "Garbage collection is a local maintenance operation."}
                              {:id :e :text "It checks out the repository to an earlier clean state." :why "This is handled by commands like `git checkout` or `git reset`."}]
                    :hint "The 'gc' stands for Garbage Collection."
                    :correct-id :c}}}

   "Snapshot"
   {:prerequisites ["Tree"]
    :questions {:2 {:title "Optimizing the Snapshot Storage"
                    :description "Git's core philosophy dictates that it stores complete **Snapshots**, not file differences (deltas). However, to prevent a repository from growing too large over time, how does Git eventually optimize these snapshots behind the scenes?"
                    :options [{:id :a :text "By running a background process that permanently converts older `Tree` objects into delta-based `Commit` objects."
                               :why "Git never changes the fundamental Object Model of its history. Tree objects remain Tree objects."}
                              {:id :b :text "By automatically deleting the `Blob` objects of older snapshots and only keeping the `Tree` structure metadata."
                               :why "Deleting Blobs would corrupt the repository, making it impossible to check out older versions of the code."}
                              {:id :c :text "Git never optimizes them; it relies entirely on SHA-1 deduplication of unchanged files to keep repository size manageable forever."
                               :why "While deduplication is powerful, modifying a large file many times still creates many full Blobs, which eventually requires compression."}
                              {:id :d :text "By moving older snapshots to a dedicated `.git/archive` folder that uses standard ZIP compression."
                               :why "Git does not archive older history in separate folders; the history must remain instantly accessible in the DAG."}
                              {:id :e :text "By periodically executing `git gc`, which compresses loose objects (including snapshots and blobs) into **Packfiles** using reverse-delta compression."
                               :why "While the conceptual model is full snapshots, the storage engine eventually optimizes space by packing similar objects together, storing the newest version entirely and using deltas to calculate older versions."}]
                    :correct-id :e}}}

   "Tree"
   {:prerequisites ["SHA-1 Hash"]
    :questions {:36 {:description "In Git's internal object model, what does a Tree object roughly map to?"
                     :options [{:id :a :text "A single line of text in a code file." :why "Git objects track whole files, not individual lines."}
                               {:id :b :text "The entire commit history graph." :why "The graph is built from commit objects, not tree objects."}
                               {:id :c :text "A filesystem directory, containing pointers to blobs (files) and other trees (subdirectories)." :why "Tree objects represent directory structures, holding lists of filenames, modes, and SHA-1 hashes of their contents."}
                               {:id :d :text "A remote branch." :why "Branches are ref pointers."}
                               {:id :e :text "A merge conflict marker." :why "Conflicts are temporary text markers in the working directory."}]
                     :hint "If a 'blob' is a file, what would group blobs together?"
                     :correct-id :c}}}

   "Branch"
   {:prerequisites ["Commit Object" "HEAD" "git branch"]
    :questions {:1 {:description "Physically, how is a local branch represented inside the `.git` directory?"
                    :options [{:id :a :text "A fully duplicated copy of the working directory at that point in time."
                               :why "Git does not copy files for branches, making them extremely lightweight and fast."}
                              {:id :b :text "A compressed binary packfile containing the differences (deltas) from the main branch."
                               :why "Packfiles store immutable object data, not movable branch definitions."}
                              {:id :c :text "A simple text file containing the 40-character SHA-1 hash of the commit it points to."
                               :why "Branches are literally just lightweight references (pointers) to a specific commit object, stored in `.git/refs/heads/`."}
                              {:id :d :text "A symbolic link pointing directly to the `HEAD` file."
                               :why "It's the inverse: `HEAD` is usually a symbolic link pointing to a branch."}
                              {:id :e :text "An immutable database object stored inside the `.git/objects` folder."
                               :why "Branch pointers are mutable and change constantly; they are not stored as immutable hashed objects."}]
                    :hint "Think about why creating a branch in Git is almost instantaneous compared to older systems like SVN."
                    :correct-id :c}}}

   ".git/hooks"
   {:prerequisites ["Repository (.git)" "git commit" "git push" "git commit --no-verify"]
    :questions {:1 {:description "What is the primary purpose of the `pre-commit` hook in Git?"
                    :options [{:id :a :text "To format the commit message before it is saved."
                               :why "That is the job of the `prepare-commit-msg` or `commit-msg` hook."}
                              {:id :b :text "To automatically push changes to the remote repository immediately after a commit."
                               :why "Hooks don't usually push automatically, and if they did, that would be a `post-commit` action."}
                              {:id :c :text "To inspect the snapshot that is about to be committed (e.g., run linters or tests) and potentially abort the commit."
                               :why "The pre-commit hook is typically used to check the code itself for formatting, trailing whitespace, or syntax errors before the commit object is created."}
                              {:id :d :text "To magically resolve merge conflicts before saving."
                               :why "Hooks cannot automatically resolve complex human logic like merge conflicts."}
                              {:id :e :text "To track which user is currently typing a commit in the project."
                               :why "Git is a decentralized system; it has no concept of tracking who is currently typing locally."}]
                    :hint "Think about what a team might want to do to your code *before* it is permanently recorded in the database."
                    :correct-id :c}}}

   "Detached HEAD"
   {:prerequisites ["HEAD" "Commit Object" "Branch" "git checkout [hash]"]
    :questions {:4 {:description "You are in a Detached HEAD state, have made three experimental commits, and decide you want to keep them. What is the safest and most direct way to save this timeline?"
                    :options [{:id :a :text "Run `git branch new-experiment` and then `git checkout new-experiment`." :why "Creating a branch at your current detached location gives the commits a permanent pointer, fully saving the history."}
                              {:id :b :text "Run `git stash`, checkout `main`, and then run `git stash pop`." :why "Stash is for uncommitted changes. These changes are already committed to the database."}
                              {:id :c :text "Run `git push origin HEAD` to force the commits to the server." :why "Pushing a detached HEAD without a local branch is highly problematic and often rejected by remote servers."}
                              {:id :d :text "Run `git commit --amend --attach`." :why "There is no `--attach` flag in Git."}
                              {:id :e :text "Run `git merge main` to bring the main timeline to your detached commits." :why "This merges `main` into your detached state, but still leaves the whole combined structure orphaned if you switch away."}]
                    :hint "You are standing on top of your commits, but you don't have a label. How do you stick a label on your current location?"
                    :correct-id :a}}}

   "DAG (Directed Acyclic Graph)"
   {:prerequisites ["Commit Object" "SHA-1 Hash" "Branch"]
    :questions {:1 {:description "What fundamental guarantee does the 'Acyclic' property of Git's DAG provide?"
                    :options [{:id :a :text "It ensures that commits can never be deleted from the repository." :why "Garbage collection can delete unreachable commits; acyclic does not mean permanent."}
                              {:id :b :text "It guarantees that a repository can only have one root commit." :why "Git actually supports multiple root commits (e.g., orphan branches)."}
                              {:id :c :text "It prevents infinite loops when Git traverses the repository's history." :why "Because there are no cycles, tracing parents will always eventually stop at a root commit, preventing software hangs."}
                              {:id :d :text "It strictly prevents two branches from ever merging together." :why "The DAG perfectly supports merging; in fact, it is what makes merging trackable."}
                              {:id :e :text "It ensures that every commit has exactly one parent." :why "Merge commits have two or more parents, which is fully supported by the DAG."}]
                    :hint "Think about what happens when software tries to read a linked list or graph that connects back to itself."
                    :correct-id :c}}}

   "git bisect"
   {:prerequisites ["Commit Object" "HEAD" "Detached HEAD" "DAG (Directed Acyclic Graph)"]
    :questions {:3 {:description "How can you fully automate the `git bisect` process so you don't have to manually test and type `good` or `bad` at every step?"
                    :options [{:id :a :text "By using `git bisect auto <script>`." :why "The `auto` subcommand does not exist in the bisect suite."}
                              {:id :b :text "By using `git bisect run <script>`." :why "This command takes a script (like a test suite). If the script exits with code 0, Git marks it good; if it exits with 1-127, Git marks it bad, fully automating the search."}
                              {:id :c :text "By passing the `--test` flag during `git bisect start`." :why "You must provide the script to a specific subcommand after bisect has been started."}
                              {:id :d :text "By setting up a `.git/hooks/pre-bisect` hook." :why "Git hooks trigger on repository events, but they are not used to drive the bisect loop itself."}
                              {:id :e :text "By using `git bisect exec <script>`." :why "While `exec` is used in interactive rebasing, `run` is the correct command for bisect automation."}]
                    :hint "You need to give Git a script to execute and evaluate at every step."
                    :correct-id :b}}}

   "git cherry-pick"
   {:prerequisites ["Commit Object" "SHA-1 Hash" "HEAD" "Atomic Commits"]
    :questions {:4 {:description "In a highly regulated repository, your team needs to track the exact origin of backported hotfixes. Which `git cherry-pick` flag automates this tracking?"
                    :options [{:id :a :text "`-s` (or `--signoff`)" :why "This appends a 'Signed-off-by' line, which is used for developer certification/legal compliance, not origin tracking."}
                              {:id :b :text "`-e` (or `--edit`)" :why "This simply opens your default text editor so you can manually rewrite the commit message."}
                              {:id :c :text "`--record-origin`" :why "This flag does not exist in the Git command line interface."}
                              {:id :d :text "`-x`" :why "This flag automatically appends '(cherry picked from commit <hash>)' to the generated commit message, creating a permanent, searchable audit trail."}
                              {:id :e :text "`--track`" :why "This is used with `git branch` or `git checkout` to set up upstream network tracking, not for cherry-picking."}]
                    :hint "You are looking for a flag that leaves a permanent note in the commit message itself."
                    :correct-id :d}}}

   "git reflog"
   {:prerequisites ["HEAD" "Commit Object" "git reset" "SHA-1 Hash"]
    :questions {:1 {:description "What exactly does the `git reflog` command track by default?"
                    :options [{:id :a :text "Every change made to the Working Directory, even if uncommitted." :why "Git does not track uncommitted modifications in its database or the reflog."}
                              {:id :b :text "Only destructive commands like `git reset` or `git rebase`." :why "It tracks all HEAD movements, including completely safe actions like checkouts and standard commits."}
                              {:id :c :text "Every time the `HEAD` pointer moves in your local repository." :why "The reflog is essentially a chronological journal of exactly where HEAD has pointed over time."}
                              {:id :d :text "The movement of all remote-tracking branches across the network." :why "The reflog is strictly a local mechanism and does not track remote network states by default."}
                              {:id :e :text "Every file modification stored inside the staging area." :why "The index/staging area is independent of the reflog, which only tracks reference pointers."}]
                    :hint "Think about the specific pointer Git uses to determine 'where you are right now'."
                    :correct-id :c}}}

   "Immutability"
   {:prerequisites ["SHA-1 Hash" ".git/objects" "Commit Object"]
    :questions {:4 {:description "How does Git mathematically enforce the principle of Immutability at the deepest database level?"
                    :options [{:id :a :text "By assigning read-only file system permissions (e.g., `chmod 444`) to every file inside `.git/objects`." :why "While Git does set read-only permissions as a safeguard, true immutability is enforced by the cryptographic naming mechanism, not just OS-level file permissions."}
                              {:id :b :text "By using a strict append-only B-tree structure for the Git index." :why "The index is mutable and frequently rewritten; it's the Object Database that is immutable."}
                              {:id :c :text "By checking the `pull.rebase` configuration before allowing any modifications to an object." :why "Configuration settings dictate user workflow behavior, not the core mathematical immutability of the database."}
                              {:id :d :text "By using a content-addressable storage model where an object's ID (SHA-1 hash) is strictly derived from its byte content." :why "If you attempt to change an object's content, the hashing algorithm guarantees a different ID will be produced, meaning you've inherently created a new object rather than modifying the old one."}
                              {:id :e :text "By requiring GPG signatures on all commit objects to prevent tampering." :why "GPG signatures verify author identity, not the structural immutability of the database objects themselves."}]
                    :hint "Think about how Git names the files it stores in the database. What directly dictates that file name?"
                    :correct-id :d}}}

   "git branch"
   {:prerequisites ["Commit Object" "HEAD" "Branch"]
    :questions {:3 {:description "If you successfully execute `git branch -d feature_branch`, what data is actually deleted from your repository?"
                    :options [{:id :a :text "All of the Commit Objects that were uniquely created on `feature_branch`."
                               :why "Commits are not deleted immediately; they become dangling objects until garbage collection (`git gc`) runs."}
                              {:id :b :text "The files in your Working Directory that were modified by `feature_branch`."
                               :why "Branch deletion only affects `.git` metadata, never the files currently sitting in your active workspace."}
                              {:id :c :text "Only the 40-byte text file pointer located in `.git/refs/heads/feature_branch`."
                               :why "Deleting a branch simply removes the lightweight reference file, leaving the history mathematically intact in the database."}
                              {:id :d :text "The branch pointer and any associated Tag Objects on that timeline."
                               :why "Tags are entirely separate reference files and are immune to branch deletions."}
                              {:id :e :text "The corresponding Remote-Tracking Branch in `refs/remotes/origin/`."
                               :why "A standard local `-d` only deletes the local branch pointer, not the remote tracking references."}]
                    :hint "Remember Git's core design philosophy: it is extremely hesitant to actually delete your snapshot data."
                    :correct-id :c}}}

   "git clone"
   {:prerequisites ["Remote Repository" "Local Repository" "Working Directory" "origin"]
    :questions {:1 {:level "Intermediate"
                    :description "What sequence of foundational Git commands does `git clone` essentially automate under the hood?"
                    :options [{:id :a :text "`git init`, `git pull`, and `git checkout`."
                               :why "While it initializes and checks out, `git pull` is technically a fetch + merge, which isn't the precise setup sequence for a brand new repo."}
                              {:id :b :text "`git init`, `git remote add`, `git fetch`, and `git checkout`."
                               :why "Clone creates an empty repo (`init`), links the URL (`remote add`), downloads the data (`fetch`), and populates your workspace (`checkout`)."}
                              {:id :c :text "`git remote add`, `git pull`, and `git branch`."
                               :why "This sequence misses the crucial initial step of creating the `.git` directory (`git init`)."}
                              {:id :d :text "`git fetch`, `git checkout`, and `git branch`."
                               :why "You cannot fetch data if a repository hasn't been initialized and a remote hasn't been added yet."}
                              {:id :e :text "`git init`, `git fetch`, and `git merge`."
                               :why "A fresh clone checks out the files directly; it doesn't need to perform a merge because there is no local history to merge into."}]
                    :hint "Think about the exact chronological steps required to go from an empty folder to a fully working project connected to a server."
                    :correct-id :b}}}

   "git log"
   {:prerequisites ["Commit Object" "HEAD" "DAG (Directed Acyclic Graph)" "SHA-1 Hash"]
    :questions {:2 {:description "If you want to see a condensed, visual representation of how your branches have diverged and merged, which flag combination is best?"
                    :options [{:id :a :text "`--stat --pretty=fuller`" :why "This makes the log extremely verbose, showing full metadata and file changes, which is the opposite of condensed."}
                              {:id :b :text "`--oneline --graph`" :why "This combination shrinks each commit to a single line and draws an ASCII text graph on the left side showing branch pathways."}
                              {:id :c :text "`--visualize --short`" :why "These are not valid `git log` flags."}
                              {:id :d :text "`--name-only --decorate`" :why "`--name-only` just lists changed files, it doesn't draw a branching graph."}
                              {:id :e :text "`-p --all`" :why "While `--all` shows all branches, adding `-p` will flood your screen with every single line of code ever written in the repo."}]
                    :hint "You need one flag to shrink the text size, and another to draw the lines connecting the commits."
                    :correct-id :b}}}

   "git push"
   {:prerequisites ["Remote Repository" "Local Repository"]
    :questions {:3 {:description "What is the primary architectural danger of using `git push --force` (or `-f`) on a shared branch?"
                    :options [{:id :a :text "It permanently deletes your local `.git/objects` folder." :why "`git push` never deletes local data; it only sends data to the remote."}
                              {:id :b :text "It overwrites the remote history, permanently." :why "Force pushing tells the server 'make your timeline look exactly like mine,' instantly destroying any divergent commits on the server."}
                              {:id :c :text "It forces Git to resolve merge conflicts automatically by choosing the remote code." :why "Pushing does not resolve conflicts; merging or rebasing does."}
                              {:id :d :text "It creates a detached HEAD state on the remote server." :why "Remote servers are generally bare repositories and don't have a working tree or active HEAD in the same way local repos do."}
                              {:id :e :text "It bypasses all network security and SSH key verification." :why "Force pushing still requires standard authentication and repository access rights."}]
                    :hint "If you rewrote history locally with `git reset` or `git commit --amend`, what happens to the 'old' history on the server when you force your new timeline onto it?"
                    :correct-id :b}}}

   "SHA-1 Hash"
   {:prerequisites ["git revert"] ;; TODO: "git revert" is here only for attractig the brain icon in the demo.
    :questions {:0 {:description "Which of the following accurately describes how Git computes the SHA-1 hash for a Blob object?"
                    :options [{:id :a :text "It hashes the directory structure path alongside the file's raw content."
                               :why "..."}
                              {:id :b :text "It hashes the commit message, the author's details, and the file's raw content."
                               :why "..."}
                              {:id :c :text "It hashes the file's name, creation timestamp, and raw content."
                               :why "..."}
                              {:id :d :text "It hashes only the file's raw content, ignoring any metadata or headers." ;;
                               :why "If Git hashed only the raw content, it wouldn't be able to distinguish between an empty tree and an empty blob."}
                              {:id :e :text "It hashes a header containing the object type and size, followed by a null byte `\0`, and then the file's raw content." ;;
                               :why "Git prepends a header (e.g., blob 1610) to the raw content before passing it to the SHA-1 algorithm, ensuring that even identical content of different object types yields different hashes."}]
                    :hint "..."
                    :correct-id :e}
                :1 {:description "..."
                    :options [{:id :a :text "..."}
                              {:id :b :text "..."}
                              {:id :c :text "..."}
                              {:id :d :text "..."}
                              {:id :e :text "..."}]
                    :hint "..."
                    :correct-id :e}
                :2 {:description "..."
                    :options [{:id :a :text "..."}
                              {:id :b :text "..."}
                              {:id :c :text "..."}
                              {:id :d :text "..."}
                              {:id :e :text "..."}]
                    :hint "..."
                    :correct-id :e}}}})

;; ---------------------------------------------------------
;; -- UTILITIES
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

(defn search-questions [query questions-and-nodes]
  (if (str/blank? query) [] (filter #(fuzzy-match? query (:label %)) questions-and-nodes)))

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

(defn contain-node-as-prerequisite?
  "Checks if the candidate-node has the target-node listed in its prerequisites."
  [node candidate-node]
  (let [prereqs (get-in trace-scenarios [candidate-node :prerequisites] [])]
    (some #{node} prereqs)))

;; ---------------------------------------------------------
;; ---   question-result defmulti ---------------------------------------------------------
;; ---------------------------------------------------------

(defmulti question-result (fn [opts] (keys opts)))

(defmethod question-result '(:node :question-id :answer)
  [{:keys [node question-id answer]}]
  (let [correct-answer (get-in trace-scenarios [node :questions question-id :correct-id])
        _ (when (and question-id (nil? correct-answer)) (throw (ex-info "Resposta correta não tá definida." {:question-for-node node})))]
    ;; Maybe I could have different states to define another node based on the answer.
    (cond
      (nil? question-id) :no-answer
      (= answer correct-answer) :right
      :else :wrong)))

(defmethod question-result '(:app-state :node)
  [{:keys [app-state node]}]
  (let [[question-id answer] (first (get-in app-state [:trace-ui :answered-questions node] [nil nil]))]
    (question-result {:node node :question-id question-id :answer answer})))

(defmethod question-result '(:answered-questions :node)
  [{:keys [answered-questions node]}]
  (let [[question-id answer] (first (get answered-questions node [nil nil]))]
    (question-result {:node node :question-id question-id :answer answer})))

;; ---------------------------------------------------------
;; ---   checking the assummed problem route ---------------------------------------------------------
;; ---------------------------------------------------------
(defn path-match?
  "Check if the user's current path is a valid prefix of a route
  (handling the wildcards :--any)."
  [current-path route]
  (and (<= (count current-path) (count route))
       (every? true? (map (fn [c r] (or (= r :--any) (= c r)))
                          current-path route))))

;; TODO: Actualy :matched-solution is a much better name than :matched-node
(defn evaluate-routing
  "Returns a map {:matched-node matched-node :assumed-answer next-step :is-final? bool}
   for the first matching route in the priority list."
  [routing-vec current-path]
  (let [routes (partition 2 routing-vec)] ;; Group the vector into [route target] pairs
    (reduce (fn [_ [route target]]
              (when (path-match? current-path route) ;; Short circuits to the found match
                (reduced {:matched-node target
                          ;; The next ID we assume they will click
                          :assumed-answer (when (< (count current-path) (count route))
                                            (nth route (count current-path)))
                          ;; True if they reached the end of this route
                          :is-final? (= (count current-path) (count route))}))) ;; TODO: Is it necessary? I could write some tests to be confortable in deleting it.
            nil
            routes)))

(comment
  (evaluate-routing
    (get-in trace-scenarios ["❓ Delete local and remote branches" :routing])
    [:advanced :unresolved :action-analyze])
  (evaluate-routing
    (get-in trace-scenarios ["❓ Pull vs Fetch" :routing])
    [:integrate :dirty :commit])
  (evaluate-routing
    (get-in trace-scenarios ["❓ Undo last commits" :routing])
    [:local :keep :premature])
  (evaluate-routing
    [[:pushed :collaborating] "git revert"
     [:pushed :personal-branch] "git push -f"
     [:local] "git reset"
     [:local :keep] "git reset --soft"
     [:local :delete] "git reset --hard"
     [:local :--any :premature] "git commit --amend --no-edit"
     [:local :--any :premature :git-hooks] "pre-commit git hook"]
    [:local :x :y]))

(defn question-match?
  "Helper to find the right question for the current path (handling the wildcard :--any)."
  [current-path q-key]
  (and (= (count current-path) (count q-key))
       (every? true? (map (fn [c q] (or (= q :--any) (= c q)))
                          current-path q-key))))

(defn get-question-for-path [questions-map current-path fallback-questions]
  (let [matched-key (first (filter #(question-match? current-path %) (keys questions-map)))
        fallback (first (shuffle fallback-questions))]
    (get questions-map matched-key fallback)))
;; ---
(defn node-color
  [app-state node]
  (case (question-result {:app-state app-state :node node})
    :right LIGHT-GREEN
    :no-answer LIGHT-YELLOW
    :wrong LIGHT-RED))

(defn nwphac ;; node-with-props-hidden-and-color)
  [app-state node extra-props]
  [node (merge {:hidden? false :color (node-color app-state node)}
               extra-props)])
;; ---------------------------------------------------------
;; -- COMPONENTS---------------------------------------------------------

(defn markdown-view [content]
  (let [custom-components
        {:a looset-graph/markdown-view-node-link
         :code (fn [js-props]
                 (let [class-name (.-className js-props)
                       inline? (.-inline js-props)
                       ;; ReactMarkdown passes the text content as an array in children
                       children (.-children js-props)
                       raw-text (when (seq children) (first children))
                       urls (some->> (str/split raw-text #"\n")
                             (remove str/blank?))
                       resources (when (seq urls) (<sub [::all-resources-meta]))
                       raw-resources (map #(into (get resources % {:title % :depth 50}) {:url %}) urls)
                       resources-with-gradient (->> raw-resources
                                                 (map #(assoc % :depth (calculate-depth %)))
                                                 (calculate-depth-gradients))]
                   (cond
                     inline?
                     (reagent/as-element [:code.markdown-inline-code {:class class-name} children])

                     (= class-name "language-curated-resources")
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
                           [:div.res-meta (str type summary)]])])

                     :else ;; Fallback: Default Code Block
                     (reagent/as-element [:code.markdown-block-code {:class class-name} children]))))}]

    ;; Render the ReactMarkdown component
    [:> ReactMarkdown
     {:components (clj->js custom-components)
      :children content}]))

(defn right-panel-view []
  (let [target (<sub [::target-node])
        selected-or-fallback-node (let [[selected-node & osn] @(re-frame/sub :flow {:id :f-selected-nodes})
                                        _ (when (seq osn) (js/console.error "Mais de um Node selecionado:" (cons selected-node osn)))
                                        visible-nodes (when-not selected-node @(re-frame/sub :flow {:id :f-visible-nodes}))]
                                    (or selected-node
                                        (util/get-pred #(when % (str/starts-with? % "❓")) visible-nodes)
                                        target))
        explanations (<sub [::looset-graph/explanation-content])
        matched-solution (:matched-node (<sub [::problem-evaluation]))
        markdown-content (or (get explanations {:type :node :id selected-or-fallback-node})
                             (get explanations {:type :edge :src selected-or-fallback-node :edge-string "solved by" :target matched-solution})
                             "More curated resources coming soon..")]
    ^{:key markdown-content}
    [:div.node-details-panel.content-updated-flash
     [:h2.node-title selected-or-fallback-node]
     [:p.node-desc [markdown-view markdown-content]]]))

;; ---   PROBLEM QUIZ COMPONENT ---
;; ----    re-frame subs/events
(re-frame/reg-sub ::problem-path-taken
  (fn [db _] (get-in db [:trace-ui :answers-for-problem-questions] [])))

(re-frame/reg-sub ::problem-evaluation
  :<- [::problem-node]
  :<- [::problem-path-taken]
  (fn [[node path] _]
    (let [routing-vec (get-in trace-scenarios [node :routing] [])]
      (evaluate-routing routing-vec path))))

(defn events-to-show-prerequisites
  [{:keys [ms ms-step node app-state]
    :or {ms-step 0}}] ;; Time between each prerequisite to show up.
  (map-indexed
    #(into [:dispatch-later {:ms (+ ms (* %1 ms-step)) :dispatch [::add-node-props (nwphac app-state %2 {})]}])
    (get-in trace-scenarios [node :prerequisites] [])))

(declare problem-node)
(declare brain-node)
(declare target-node)
(declare answered-questions)
(defn answered-problem
  [{app-state :db} [evt chosen-id]]
  (let [app-state* (-> app-state
                     (update-in [:trace-ui :answers-for-problem-questions] (fnil conj []) chosen-id)
                     (update-in [:trace-ui :target-when-no-problem] #(when (string? %2) %2) chosen-id))
        problem (problem-node app-state evt)
        brain (brain-node [problem (target-node app-state evt) (answered-questions app-state)])
        brain* (brain-node [problem (target-node app-state* evt) (answered-questions app-state*)])
        target (target-node app-state evt)
        target* (target-node app-state* evt)
        update-problem? (and (not (string? chosen-id))
                             (not= target target*))
        fx-seq (cond-> []
                 update-problem?
                 (concat [[:dispatch-later {:ms 100  :dispatch [::add-node-props [problem {:hidden? false :edges-to nil}]]}] ;; Remove edge
                          [:dispatch-later {:ms 600  :dispatch [::add-node-props [problem {:hidden? false :edges-to {"solved by" #{target*}}}]]}]]) ;; Add edge to new target.

                 (not= target target*)
                 (concat [[:dispatch-later {:ms 100  :dispatch [::add-node-props [target  {:hidden? false :name target}]]}] ;; Remove target icon
                          [:dispatch-later {:ms 600  :dispatch [::add-node-props [target* {:hidden? false :name (str "🎯 "target*) :color LIGHT-RED}]]}] ;; Add icon to new target
                          [:dispatch-later {:ms 1200 :dispatch [::add-node-props (nwphac app-state* brain   {:name brain})]}]
                          [:dispatch-later {:ms 1200 :dispatch [::add-node-props (nwphac app-state* brain*  {:name (str "🧠 "brain*)})]}]]
                         (events-to-show-prerequisites {:ms 1800 :ms-step 600 :node target* :app-state app-state*})))]
    {:db app-state*
     :fx fx-seq}))
(re-frame/reg-event-fx ::answered-problem answered-problem)
;; ----
(defn quiz-problem [question-data assumed-answer]
  (let [clicked-id (reagent.core/atom nil)]
    (fn [question-data assumed-answer]
      (let [;; Sort options: Assumed goes first.
            sorted-options (sort-by (fn [opt] (if (= (:id opt) assumed-answer) -1 1))
                                    (shuffle (:options question-data)))
            is-waiting? (some? @clicked-id)]
        [:div.quiz-container
         {:class (when is-waiting? "panel-info-gathered")
          :title (when show-tooltips? "Until you answer this question, your codebase is simultaneously perfectly fine and completely destroyed. I've highlighted my best guess below, but if you want the actual solution instead of a hallucinated one, you need to narrow down the variables. Work with me here; I promise I won't judge your commit message history.")}

         [:div.panel-watermark.left "❓"]

         (if (empty? question-data)
           [:div.quiz-content [:div.quiz-inner [:h3.question-title "More questions coming soon.."]]]
           [:div.quiz-content
            [:div.quiz-inner
             (when-let [title (:title question-data)] [:h3.question-title [markdown-view title]])
             (when-let [desc (:description question-data)] [:p.question-desc [markdown-view desc]])

             [:div.options-list
              (for [{:keys [id text]} sorted-options]
                (let [is-this-clicked? (= id @clicked-id)
                      opt-class (cond
                                  is-this-clicked? "option-selected"
                                  is-waiting?      "option-disabled"
                                  (= id assumed-answer) "option-assumed"
                                  :else "option-default")]
                  ^{:key id}
                  [:button.quiz-option
                   {:class opt-class
                    :on-click #(when-not is-waiting?
                                 (reset! clicked-id id)
                                 (js/setTimeout ;; A little delay before changing the whole UI.
                                   (fn []
                                     (>evt [::answered-problem id])
                                     (reset! clicked-id nil))
                                   2000))}
                   [markdown-view text]]))]]])]))))

;; ---------------------------------------------------------
;; ---   KNOWLEDGE QUIZ COMPONENT ---
;; ----    re-frame subs/events
;; ---------------------------------------------------------
(re-frame/reg-sub
 ::staged-knowledge-answer
 (fn [db _]
   (get-in db [:trace-ui :staged-knowledge-answer])))

(re-frame/reg-event-db
 ::stage-knowledge-answer
 (fn [db [_ question-id chosen-option]]
   (assoc-in db [:trace-ui :staged-knowledge-answer] {:question-id question-id :answer chosen-option})))

(defn commit-knowledge-answer
  [{app-state :db} [evt]]
  (let [has-no-edge? #(not (some #{:edges-to :edges-from} (keys (get-in app-state [:domain :nodes-map %]))))
        staged (get-in app-state [:trace-ui :staged-knowledge-answer])
        question-id (:question-id staged)
        chosen-option (:answer staged)
        brain (brain-node [(problem-node app-state evt) (target-node app-state evt) (answered-questions app-state)])
        app-state* (-> app-state
                     (assoc-in [:trace-ui :answered-questions brain question-id] chosen-option)
                     (assoc-in [:trace-ui :staged-knowledge-answer] nil))
        brain* (brain-node [(problem-node app-state evt) (target-node app-state* evt) (answered-questions app-state*)])
        target (target-node app-state evt)
        target* (target-node app-state* evt)
        fx-seq (cond-> []
                 (not= brain brain*)
                 (concat [[:dispatch-later {:ms 100 :dispatch [::add-node-props (nwphac app-state* brain {:name brain})]}]
                          [:dispatch-later {:ms 100 :dispatch [::add-node-props (nwphac app-state* brain* {:name (str "🧠 "brain*)})]}]
                           ;; I can define a Node in trace-scenarios that is
                           ;; not in the graph-text, in this case it won't have
                           ;; connections, so let's create between it and the
                           ;; current-target.
                          (when (has-no-edge? brain*)
                            [:dispatch-later {:ms 100 :dispatch [::add-node-props (nwphac app-state* target*
                                                                                          {:edges-to (merge-with (comp set concat)
                                                                                                                 (get-in app-state* [:domain :nodes-map target* :edges-to] {})
                                                                                                                 {"depends of" #{brain*}})})]}])])
                 (not= target target*)
                 (concat [[:dispatch-later {:ms 700 :dispatch [::add-node-props [target {:name target}]]}]
                          [:dispatch-later {:ms 700 :dispatch [::add-node-props (nwphac app-state* target* {:name (str "🎯 "target*)})]}]]
                         (events-to-show-prerequisites {:ms 1300 :ms-step 600 :node target* :app-state app-state*})))]
    (tap> {:target* target*
           :fx-seq fx-seq})
    {:db app-state*
     :fx fx-seq}))
(re-frame/reg-event-fx ::commit-knowledge-answer commit-knowledge-answer)
;; ----
;; ----     knowledge quiz component ---
(defn quiz-knowledge [brain-id question-id data]
  (let [answered-map (<sub [::answered-questions])
        staged-data  (<sub [::staged-knowledge-answer])
        staged?      (some? staged-data)
        ;; Use staged answer if it exists, otherwise check if it was previously fully answered
        selected-id  (if staged?
                       (:answer staged-data)
                       (get-in answered-map [brain-id question-id]))
        answered?    (some? selected-id)
        is-correct?  (= selected-id (:correct-id data))]

    [:div.quiz-container
     ;; Correct/Wrong (green/red) background when answered
     {:class (when answered? (if is-correct? "panel-correct" "panel-wrong"))
      :title (when show-tooltips? "To execute this solution without setting the server on fire, you need to understand the underlying mechanics. If you miss this question, I'm going to dynamically rebuild your learning path to cover the basics. Don't complain to the UI; physics is physics, and Git is Git.")}

     [:div.panel-watermark.right "🧠"]

     (if (empty? data)
       [:div.quiz-content [:div.quiz-inner [:h3.question-title "More questions coming soon.."]]]
       [:div.quiz-content
        [:div.quiz-inner {:class (when staged? "has-action-bar")}
         (when-let [title (:title data)] [:h3.question-title title])
         (when-let [desc (:description data)] [:p.question-desc [markdown-view desc]])

         [:div.options-list
          (for [{:keys [id text]} (shuffle (:options data))]
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
                :on-click #(when-not answered?
                             (>evt [::stage-knowledge-answer question-id id]))}
               [markdown-view text]]))]]])

     [:div.action-bar-container {:class (when staged? "visible")}
      [:div.action-feedback-text {:class (if is-correct? "correct" "wrong")}
       (if is-correct? "✓ Exactly!" "✗ Not quite...")]
      [:button.btn-continue
       {:on-click #(>evt [::commit-knowledge-answer])}
       "Continue ➔"]]]))

;; ---------------------------------------------------------
;; ---   Search UI Component
;; ---- re-frame subs/events
(defmulti start-trace
  ;; If a problem node is chosen then the :problem version of start-trace is triggered.
  ;; If a concept node is chosen then the :concept version of start-trace is triggered.
  #(let [scenario (get trace-scenarios (second %2) :not-in-trace)]
     (cond
       (= :not-in-trace scenario) nil
       (:routing scenario) :problem
       (:prerequisites scenario) :concept
       :else (js/console.error "start-trace defmulti de um node que não é :problem e nem :concept" (second %2)))))
(defmethod start-trace :concept
  [{app-state :db} [evt node-id]]
  (let [app-state* (-> app-state
                       (assoc-in [:trace-ui :problem-node] :no-problem)
                       (assoc-in [:trace-ui :target-when-no-problem] node-id)
                       (assoc-in [:trace-ui :answers-for-problem-questions] [])
                       (assoc-in [:trace-ui :answered-questions] {})
                       (assoc-in [:trace-ui :staged-knowledge-answer] nil))
        target node-id
        brain  (brain-node [:no-problem target (answered-questions app-state*)])
        ; Opening Animation Sequence
        fx-seq (cond-> []
                 target
                 (concat [[:dispatch-later {:ms 600 :dispatch [::add-node-props [target {:hidden? false :name (str "🎯 " target) :color LIGHT-RED}]]}]]
                         (events-to-show-prerequisites {:ms 1200 :ms-step 600 :node target :app-state app-state*}))
                 ;; Reveal the Initial Brain
                 brain
                 (concat [[:dispatch-later {:ms 1800 :dispatch [::add-node-props (nwphac app-state* brain {:name (str "🧠 " brain)})]}]]))]
    {:db app-state*
     :fx fx-seq}))
(defmethod start-trace :problem
  [{app-state :db} [evt problem-id]]
  (let [app-state* (-> app-state
                       (assoc-in [:trace-ui :problem-node] problem-id)
                       (assoc-in [:trace-ui :answers-for-problem-questions] [])
                       (assoc-in [:trace-ui :answered-questions] {})
                       (assoc-in [:trace-ui :staged-knowledge-answer] nil))
        target (target-node app-state* evt)
        brain  (brain-node [(problem-node app-state evt) (target-node app-state* evt) (answered-questions app-state*)])
        ; Opening Animation Sequence
        fx-seq (cond-> []
                 ;; Reveal the Problem Node
                 true
                 (concat [[:dispatch-later {:ms 100 :dispatch [::add-node-props [problem-id {:hidden? false :color LIGHT-RED}]]}]])
                 ;; Draw the edge to the Initial Target and reveal it
                 target
                 (concat [[:dispatch-later {:ms 600 :dispatch [::add-node-props [problem-id {:edges-to {"solved by" #{target}}}]]}]
                          [:dispatch-later {:ms 600 :dispatch [::add-node-props [target {:hidden? false :name (str "🎯 " target) :color LIGHT-RED}]]}]])
                 ;; Reveal the Initial Brain
                 brain
                 (concat [[:dispatch-later {:ms 1200 :dispatch [::add-node-props (nwphac app-state* brain {:name (str "🧠 " brain)})]}]])
                 ;; Pop in the Target's prerequisites sequentially
                 target
                 (concat (events-to-show-prerequisites {:ms 1800 :ms-step 600 :node target :app-state app-state*})))]
    {:db app-state*
     :fx fx-seq}))
(re-frame/reg-event-fx ::start-trace start-trace)

(re-frame/reg-sub ::is-focused?
  :-> #(get-in % [:trace-ui :search-ui :is-focused?] false))
(re-frame/reg-sub ::vote-timer
  :-> #(get-in % [:trace-ui :search-ui :vote-timer] nil))
(re-frame/reg-sub ::email-modal-state
  :-> #(get-in % [:trace-ui :search-ui :email-modal-state] nil)) ;; Tracks modal: nil -> :prompting -> :submitted
;; ---------------------------------------------------------
(defn email-capture-prompt
  []
  (let [email-input (reagent/atom "")]
    (fn []
      (let [modal-state (<sub [::email-modal-state])
            assoc-in-modal-state! #(>evt [::util/assoc-in [:trace-ui :search-ui :email-modal-state] %])
            assoc-in-email-input! #(reset! email-input %)]
        (when (or (= (:state modal-state) :prompting)
                  (= (:state modal-state) :submitted))
          [:div.modal-overlay
           ;; Clicking the dark background closes the modal
           {:on-click #(assoc-in-modal-state! nil)}

           [:div.modal-content
            ;; Prevent clicks inside the white box from bubbling up and closing the modal
            {:on-click (fn [e] (.stopPropagation e))}

            (if (= (:state modal-state) :submitted)

              ;; --- SUCCESS STATE ---
              [:div {:style {:text-align "center" :padding "16px 0"}}
               [:h3 {:style {:color "#15803d" :margin-top "0"}} "✓ Email saved!"]
               [:p {:style {:color "#475569"}} "We'll let you know when this topic is ready."]
               [:button.btn-continue {:style {:margin-top "16px" :width "100%"}
                                      :on-click #(assoc-in-modal-state! nil)}
                "Close"]]

              ;; --- PROMPT STATE ---
              [:div
               [:h3 {:style {:margin-top "0" :color "#0f172a"}} (:title modal-state)]
               [:p {:style {:color "#475569" :font-size "0.95rem" :line-height "1.5" :margin-bottom "20px"}}
                (str "Drop your email below if you want a quick ping when we release a map for \"") [:strong (:subject modal-state)] "\"."]

               [:input.search-input
                {:type "email"
                 :auto-focus true
                 :placeholder "your@email.com (optional)"
                 :value @email-input
                 :style {:margin-bottom "20px" :width "100%" :box-sizing "border-box"}
                 :on-change #(assoc-in-email-input! (-> % .-target .-value))
                 :on-key-down (fn [e]
                                (when (= (.-key e) "Enter")
                                  (.preventDefault e)
                                  (>evt [::send-to-firestore "emails" {:email @email-input :voted-subject (:subject modal-state)}])
                                  (assoc-in-modal-state! {:state :submitted})))}]

               [:div {:style {:display "flex" :justify-content "flex-end" :gap "12px"}}
                [:button {:style {:background "transparent" :border "none" :color "#64748b" :cursor "pointer" :font-weight "500"}
                          :on-click #(assoc-in-modal-state! nil)}
                 "Skip"]
                [:button.btn-continue
                 {:on-click (fn []
                              (>evt [::send-to-firestore "emails" {:email @email-input :voted-subject (:subject modal-state)}])
                              (assoc-in-modal-state! :submitted))}
                 "Notify Me"]]])]])))))

; (defmulti start-trace! :type)
; (defmethod start-trace! :problem
;   [{:keys [id]}]
;   (if (contains? trace-scenarios id)
;     (>evt [::start-trace id])
;     (trigger-vote! id "Not mapped yet" "not in trace-scenarios")))
; (defmethod start-trace! :concept
;   [{:keys [id]}]
;   (js/console.log "É um conceito!!" id))

(defn search-ui []
  (let [search-text (reagent/atom "")]
    (fn []
      (let [query          @search-text
            is-focused?    (<sub [::is-focused?])
            vote-timer     (<sub [::vote-timer])
            assoc-in-is-focused?! #(>evt [::util/assoc-in [:trace-ui :search-ui :is-focused?] %])
            assoc-in-search-text! #(reset! search-text %)
            assoc-in-vote-timer! #(>evt [::util/assoc-in [:trace-ui :search-ui :vote-timer] %])
            searchable-terms (concat mapped-questions (searchable-nodes (<sub [::looset-graph/explanation-content]) trace-scenarios))
            matches        (search-questions query searchable-terms)
            has-query?     (not (str/blank? query))
            no-matches?    (and has-query? (empty? matches))

            ;; Fetch active trace from re-frame to hide dropdown if tracing
            problem-node   (<sub [::problem-node])
            is-tracing?    (some? problem-node)
            show-dropdown? (and is-focused? has-query? (not is-tracing?))
            trigger-vote! (fn [q title vote-type]
                            (>evt [::util/assoc-in [:trace-ui :search-ui :email-modal-state] {:state :prompting :subject q :title title}])
                            (>evt [::send-to-firestore "votes" {:subject q :type vote-type}]))
            start-trace!  (fn [target]
                            (if (contains? trace-scenarios target)
                              (>evt [::start-trace target])
                              (trigger-vote! target "Not mapped yet" "not in trace-scenarios"))
                            (assoc-in-search-text! ""))]
              ; trigger-not-mapped-featured (fn [featured-label]
              ;                               (>evt [::send-to-firestore "votes" {:type "featured" :subject featured-label}])
              ;                               (trigger-manual-vote! label "Not mapped yet"))]

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
               :on-focus #(assoc-in-is-focused?! true)
               :on-blur #(assoc-in-is-focused?! false)

               ;; Keyboard interaction (Enter to select)
               :on-key-down (fn [e]
                              (.stopPropagation e)
                              (when (= (.-key e) "Enter")
                                (.preventDefault e)
                                (if no-matches?
                                  (trigger-vote! query "Vote recorded!" "manual") ;; Enter key triggers vote & modal
                                  (let [target (if has-query?
                                                 (:id (first matches))
                                                 (:id (first featured-questions)))]
                                   (when target (start-trace! target))))))
               :on-change (fn [e]
                            (let [v (-> e .-target .-value)]
                              (assoc-in-search-text! v)
                              (when vote-timer (js/clearTimeout vote-timer))
                              (when (not (str/blank? v))
                                (assoc-in-vote-timer!
                                  (js/setTimeout
                                    (fn []
                                      (when (empty? (search-questions query searchable-terms))
                                        ;; Silent auto-vote
                                        (>evt [::send-to-firestore "votes" {:type "auto" :subject query}])))
                                    1500)))))}]]

            ;; Dropdown Menu
            (when show-dropdown?
              [:div.dropdown-menu
               ;; Scenario 1: No results (show vote + featured)
               (if no-matches?
                 [:<> ;; Manual vote option on top
                  [:div.dropdown-item.not-found-item
                   ;; Click triggers the immediate vote AND opens the email modal.
                   {:on-mouse-down (fn [e]
                                     (.preventDefault e)
                                     (trigger-vote! query "Vote recorded!" "manual"))}
                   [:div.item-icon [:svg {:width "18" :height "18" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:path {:d "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]]
                   [:div [:div.item-text (str "\"" query "\"")] [:div.item-subtext "Not mapped yet. Click to vote to map this next."]]]
                  (for [{:keys [id label]} featured-questions] ;; featured list as fallback
                    ^{:key (str "feat-" label)}
                    [:div.dropdown-item {:on-mouse-down (fn [e] (.preventDefault e) (start-trace! id))}
                     [:div.item-icon [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:polyline {:points "20 6 9 17 4 12"}]]]
                     [:div.item-text label]])]

                 ;; Scenario 2: With matches
                 (for [{:keys [id label]} matches]
                   ^{:key label}
                   [:div.dropdown-item
                    {:on-mouse-down (fn [e]
                                      (.preventDefault e)
                                      (start-trace! id))}
                    [:div.item-icon [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:circle {:cx "11" :cy "11" :r "8"}]]]
                    [:div.item-text label]]))])

            ;; Sits outside the normal flow, waiting for email-modal-state to not be nil.
            [email-capture-prompt]]

           (when (not show-dropdown?)
             [:<>
               ;; --- Featured Questions ---
               [:div.cards-container
                (for [{:keys [id label highlight? icon]} featured-questions]
                  ^{:key label}
                  [:div.trace-card
                   {:class (when highlight? "highlight")
                    :on-click #(start-trace! id)}
                   (when icon [:span {:style {:font-size "1.1em"}} icon])
                   label])]

               ;; --- Divider ---
               [:div.section-divider "Other subjects"]

               ;; --- Other Subjects Cards ---
               [:div.cards-container
                (for [{:keys [label]} other-subjects]
                  ^{:key label}
                  [:div.trace-card
                   {:on-click #(start-trace! label)}
                   label])]])]))))

;; ---- Other re-frame subs/events -----------------------------------------------------
(defn node-link-clicked
  [app-state [_ev node-id]]
  (assoc-in app-state [:ui :selected-nodes] #{node-id}))
(re-frame/reg-event-db ::node-link-clicked node-link-clicked)

(defn all-resources-meta [app-state]
  (get-in app-state [:domain :resources-meta] {}))
(re-frame/reg-sub ::all-resources-meta all-resources-meta)
;; ----
;; ---------------------------------------------------------
;; -- Main ---------------------------------------------------------
;; ---------------------------------------------------------
;; ---   Re-frame Events/Subs
;; ---------------------------------------------------------
(defn problem-node ;; Holds the ID of the selected question
  [app-state _]
  (get-in app-state [:trace-ui :problem-node] nil))
(re-frame/reg-sub ::problem-node problem-node)

; (defn set-problem-node [app-state [_e id]]
;   (assoc-in app-state [:trace-ui :problem-node] id))
; (re-frame/reg-event-db ::set-problem-node set-problem-node)
;
; (defn reset-problem-node [app-state]
;   (assoc-in app-state [:trace-ui :problem-node] nil))
; (re-frame/reg-event-db ::reset-problem-node reset-problem-node)
;
;; this one doesn't belong here.. add to another Re-frame Events/Subs
(defn add-node-props [app-state [_e [node props]]]
  (update-in app-state [:domain :nodes-map node] merge props))
(re-frame/reg-event-db ::add-node-props add-node-props)

(defn target-node
  "Depends on the problem the user has and the problem related questions she answered.
  Actually it depends on the knowledge related questions as well.."
  [app-state _event]
  (if-let [target-when-no-problem (get-in app-state [:trace-ui :target-when-no-problem] nil)]
    target-when-no-problem
    (let [problem-node (get-in app-state [:trace-ui :problem-node] nil)
          answered-questions (get-in app-state [:trace-ui :answers-for-problem-questions] [])
          trace-scenarios-routing  (get-in trace-scenarios [problem-node :routing] [])
          target-from-problem (:matched-node (evaluate-routing trace-scenarios-routing answered-questions))
          target-prerequisites (get-in trace-scenarios [target-from-problem :prerequisites])
                  ;; TODO: I'll need a recursion here to get the prerequisites of the prerequisites.
          aim-fn (fn [target prerequisite]
                   (if (= :wrong (question-result {:app-state app-state :node prerequisite}))
                     ;; wront answer for prerequisite then prerequisite
                     prerequisite
                     ;; no prerequisite then target
                     ;; no answer for prerequisite then target
                     ;; right answer for prerequisite then target
                     target))
          target-from-knowledge (reduce aim-fn target-from-problem target-prerequisites)]
      target-from-knowledge)))
(re-frame/reg-sub ::target-node target-node)

(defn answered-questions
  [app-state]
  (get-in app-state [:trace-ui :answered-questions] {}))
(re-frame/reg-sub ::answered-questions answered-questions)

(defn brain-node
  "Calculates the next node to test based on prerequisites, the target, and advanced concepts."
  [[problem-node target-node answered-questions]]
  (let [answered-question? #(not= :no-answer (question-result {:answered-questions answered-questions :node %}))
        has-question? #(:questions (get trace-scenarios % {}))
        target's-prerequisites (get-in trace-scenarios [target-node :prerequisites] []) ;; Hum, it's possible to name a var with '. It might bite me in the future..
        unanswered-prereq (->> target's-prerequisites
                            (remove answered-question?)
                            (filter has-question?)
                            (first)) ;; Find the first prerequisite that is NOT answered.
        unanswered-advanced (when-not unanswered-prereq
                              (->> trace-scenarios
                                (keys)
                                (filter #(contain-node-as-prerequisite? target-node %))
                                (remove answered-question?)
                                (filter has-question?)
                                (first)))
        problem-related (when-not unanswered-advanced
                          (-> trace-scenarios
                            (get-in [problem-node :related-nodes])
                            (->> (remove answered-question?))
                            (->> (remove #{problem-node target-node}))
                            (->> (filter has-question?))
                            (first)))
        any-unnanswered (when-not unanswered-advanced
                          (->> trace-scenarios
                            (keys)
                            (remove answered-question?)
                            (filter has-question?)
                            (remove #{target-node})
                            (remove #(str/starts-with? % "❓"))
                            (first)))]
    (or unanswered-prereq
        unanswered-advanced ;; Nodes with question that has the target as prerequisite.
        problem-related
        any-unnanswered
        target-node)))
(re-frame/reg-sub
  ::brain-node
  :<- [::problem-node]
  :<- [::target-node]
  :<- [::answered-questions]
  brain-node)

#_:clj-kondo/ignore
(comment
  (do
    (looset-graph.app/load-graph-text)
    (re-frame/dispatch-sync [::reset-problem-node])
    [:dispatch-later {:ms 600  :dispatch [::add-node-props [problem {:hidden? false :edges-to {"solved by" target*}}]]}] ;; Add edge to new target.
    (re-frame/dispatch-sync [::add-node-props ["❓ Undo last commits" {:hidden? false :edges-to {"solved by" #{"git reset"}}}]])))
;; (re-frame/dispatch-sync [::add-node-props ["git reset" {:color nil}]])
;; (re-frame/dispatch-sync [::add-node-props ["git revert" {:name "x git revert"}]])

;; ---------------------------------------------------------
;; ---   Main view ---------------------------------------------------------
;; ---------------------------------------------------------
(defn main []
  (let [problem-node (<sub [::problem-node])
        is-tracing?  (some? problem-node)

        ;; --- Problem Panel Setup ---
        problem-path-takeen (<sub [::problem-path-taken])
        assumed-answer (or (:assumed-answer (<sub [::problem-evaluation]))
                           (<sub [::target-node]))
        ;; Fetch the specific question for the current path
        questions-map (get-in trace-scenarios [problem-node :questions] {})
        fallback-questions (:fallback-problem-questions trace-scenarios)
        problem-question-data (get-question-for-path questions-map problem-path-takeen fallback-questions)

        ;; --- Knowledge Panel Setup ---
        current-brain  (<sub [::brain-node])
        questions-map  (get-in trace-scenarios [current-brain :questions] {})
        [knowledge-question-id knowledge-question-data] (first questions-map)]

    [:div.app-container {:class (when is-tracing? "state-trace")}
     [trace-styles]

     (when ^boolean js/goog.DEBUG
       [:div "debug"
        [:pre (str "problem-node: "problem-node)]
        [:pre (str "current-target "(<sub [::target-node]))]
        [:pre (str "current-brain: "(<sub [::brain-node]))]
        [:pre (str "problem-path-takeen: "(<sub [::problem-path-taken]))]
        [:pre (str "Assumed id: "(<sub [::problem-evaluation]))]
        [:pre (str "problem-question-data: "problem-question-data)]
        [:pre (str "knowledge-question-data: "knowledge-question-data)]])


     ;; === BACKGROUND GRAPH LAYER (Moves from Full Screen to Bottom) ===
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
         [quiz-problem problem-question-data assumed-answer])]

      ;; Right: Knowledge Panel (Visible during trace)
      [:div.knowledge-panel
       (when is-tracing?
         [quiz-knowledge current-brain knowledge-question-id knowledge-question-data])]]]))

#_:clj-kondo/ignore
(comment
  (require '[cljs.core.async :refer [go <!]])
  (require '[cljs.core.async.interop :refer-macros [<p!]])
  trace-scenarios
  (cljs.core.async/go
    (looset-graph/init-state)
    (looset-graph/load-graph-text)
    (core/load-resources-meta!)
    (re-frame/dispatch-sync [::looset-graph/fetch-markdown-explanation-content])
    (cljs.core.async/<! (cljs.core.async/timeout 10)))
    ; (re-frame/dispatch-sync [:looset-trace.app/start-trace "❓ Pull vs Fetch"]))

  (cljs.core.async/go
    (looset-graph/init-state)
    (looset-graph/load-graph-text)
    (core/load-resources-meta!)
    (re-frame/dispatch-sync [::looset-graph/fetch-markdown-explanation-content])
    (cljs.core.async/<! (cljs.core.async/timeout 10))
    (re-frame/dispatch-sync [:looset-trace.app/start-trace "❓ Undo last commits"])
    (cljs.core.async/<! (cljs.core.async/timeout 1800))
    (re-frame/dispatch-sync [:looset-trace.app/stage-knowledge-answer :1 :c])
    (re-frame/dispatch-sync [:looset-trace.app/commit-knowledge-answer])
    (cljs.core.async/<! (cljs.core.async/timeout 1800))
    (re-frame/dispatch-sync [:looset-trace.app/answered-problem :local])
    (cljs.core.async/<! (cljs.core.async/timeout 1800))
    (re-frame/dispatch-sync [:looset-trace.app/stage-knowledge-answer :0 :a])
    (re-frame/dispatch-sync [:looset-trace.app/commit-knowledge-answer])
    (cljs.core.async/<! (cljs.core.async/timeout 1800))
    (re-frame/dispatch-sync [:looset-trace.app/answered-problem :keep])
    (cljs.core.async/<! (cljs.core.async/timeout 1800))
    (re-frame/dispatch-sync [:looset-trace.app/answered-problem :premature]))


  (some #{:xgame} (:media-type (second (first res))))
  (map first (filter (fn [[k v]] (some #(re-find #"index" %) (:concepts-matched v))) res))
  (map #(into {(first %) (:concepts-matched (second %))}) (filter (fn [[k v]] (and (some #{:game} (:media-type v))
                                                                                   (some #(re-find #"amend" (.toLowerCase %)) (:concepts-matched v))))
                                                                  res))
  (filter #(:game-meta (keys (second %))) (keep 3 res))

  res)
