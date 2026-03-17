(ns looset-trace.app
  (:require
    ["firebase/app" :refer [initializeApp]]
    ["firebase/firestore" :refer [getFirestore collection addDoc]]
    ["react-markdown" :default ReactMarkdown]
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
  [{:label "❓ Undo last commits" :highlight? true :icon "🔥"}
   {:label "❓ Pull vs Fetch" #_"Difference between 'pull' and 'fetch'"}
   {:label "Delete a branch locally and remotely"}
   {:label "Undo 'git add' before commit"}])

(def other-subjects
  [{:label "AI / LLM"}
   {:label "Functional Programming"}
   {:label "Software Architecture"}
   {:label "Web Development"}
   {:label "SQL"}])

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
             [:span [:strong "Undo a push: "] "I already pushed these commits to a remote server (GitHub/GitLab) and need to fix it there too."]]
   :assumed-id 2})

(def mock-knowledge-data
  {;; We omit the :title here to test the optionality, relying only on the :description
   ; :title "Why do you want to undo your recent commits?Why do you want to undo your recent commits?Why do you want to undo your recent commits?Why do you want to undo your recent commits?"
   :description "If you execute `git commit --amend --no-edit` without staging any new changes, why does the resulting commit object resolve to a completely different SHA-1 hash than the original?"
   :options [{:id :a :text "Git automatically injects a new cryptographic nonce into the commit header to enforce global graph uniqueness."}
             {:id :b :text "The  `tree` object is recursively re-hashed to guarantee data integrity against the `.git/index.`"}
             {:id :c :text "The committer timestamp is updated to the current execution time, fundamentally altering the raw text payload used for the SHA-1 calculation."}
             {:id :d :text "The parent pointer is reassigned to reference the original commit, strictly enforcing a linear Directed Acyclic Graph."}]
   :correct-id :c})

(def trace-scenarios
  {;; Problem Space
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
   {:related-nodes ["git fetch" "git pull" "git merge" "Remote-Tracking Branch" "Working Directory" "Local Repository" "Remote Repository" "origin/main" "refs/remotes/" "git rebase" "pull.ff" "pull.rebase" "Upstream Branch" "Tracking Branch" "Fast-Forward Merge" "git merge --ff-only" "origin" "git status" "git branch -r" "Merge Conflicts" "Upstream Branch" "Upstream Repository" "Branch" "main" "git remote"]
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
   ;; Knowledge Space
   "git fetch"
   {:questions {:x {:title "git fetch"
                    :options [{:id :a :text "right"}
                              {:id :b :text "wrong"}]
                    :correct-id :a}}}
   "git pull"
   {:questions {:x {:title "git pull"
                    :options [{:id :a :text "right"}
                              {:id :b :text "wrong"}]
                    :correct-id :a}}}
   "git merge"
   {:questions {:x {:title "git merge"
                    :options [{:id :a :text "right"}
                              {:id :b :text "wrong"}]
                    :correct-id :a}}}
   "Remote-Tracking Branch"
   {:questions {:x {:title "Remote-Tracking Branch"
                    :options [{:id :a :text "right"}
                              {:id :b :text "wrong"}]
                    :correct-id :a}}}

   "git reset"
   {:prerequisites ["Staging Area (Index)" "HEAD"]}

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
   {:prerequisites ["git add" "git status" "git restore" "Repository (.git)"]}

   "Staging Area (Index)"
   {:prerequisites ["Snapshot" "Repository (.git)"]
    :questions {:0 {:description "What happens to your changes when you execute 'git reset --soft'?"
                    :options [
                              {:id :a :text "The files are permanently deleted."}
                              {:id :b :text "The files remain in the Staging Area."}]
                    :correct-id :b}}}

   "git revert"
   {:prerequisites ["Commit Object"]}

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
   {:prerequisites ["Remote Repository"]}

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
   {:prerequisites ["SHA-1 Hash"]}

   "Branch"
   {:prerequisites ["git revert"]} ;; TODO: "git revert" is here only for attractig the brain icon in the demo.
  ; :questions {:0 {:title "More questions coming soon.."}}}

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
                          :is-final? (= (count current-path) (count route))})))
            nil
            routes)))

(comment
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

(defn get-question-for-path [questions-map current-path]
  (let [matched-key (first (filter #(question-match? current-path %) (keys questions-map)))]
    (get questions-map matched-key)))
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
  (let [selected-or-fallback-node (let [[selected-node & osn] @(re-frame/sub :flow {:id :f-selected-nodes})
                                        _ (when (seq osn) (js/console.error "Mais de um Node selecionado:" (cons selected-node osn)))
                                        visible-nodes (when-not selected-node @(re-frame/sub :flow {:id :f-visible-nodes}))]
                                    (or selected-node
                                        (util/get-pred #(when % (str/starts-with? % "❓")) visible-nodes)
                                        (first visible-nodes)))
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
  (let [app-state* (update-in app-state [:trace-ui :answers-for-problem-questions] (fnil conj []) chosen-id)
        problem (problem-node app-state evt)
        brain (brain-node [problem (target-node app-state evt) (answered-questions app-state)])
        brain* (brain-node [problem (target-node app-state* evt) (answered-questions app-state*)])
        target (target-node app-state evt)
        target* (target-node app-state* evt)
        fx-seq (cond-> []
                 (not= target target*)
                 (concat [[:dispatch-later {:ms 100  :dispatch [::add-node-props [problem {:hidden? false :edges-to nil}]]}] ;; Remove edge
                          [:dispatch-later {:ms 100  :dispatch [::add-node-props [target  {:hidden? false :name target}]]}] ;; Remove target icon
                          [:dispatch-later {:ms 600  :dispatch [::add-node-props [problem {:hidden? false :edges-to {"solved by" #{target*}}}]]}] ;; Add edge to new target.
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
                                    (:options question-data))
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
(re-frame/reg-event-fx
 ::start-trace
 (fn [{app-state :db} [evt problem-id]]
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
      :fx fx-seq})))
;; ---------------------------------------------------------
(defn email-capture-prompt
  #_{:clj-kondo/ignore [:unused-binding]}
  [modal-state]
  (let [email-input (reagent/atom "")]
    (fn [modal-state]
      (when (or (= (:state @modal-state) :prompting)
                (= (:state @modal-state) :submitted))
        [:div.modal-overlay
         ;; Clicking the dark background closes the modal
         {:on-click #(reset! modal-state nil)}

         [:div.modal-content
          ;; Prevent clicks inside the white box from bubbling up and closing the modal
          {:on-click (fn [e] (.stopPropagation e))}

          (if (= (:state @modal-state) :submitted)

            ;; --- SUCCESS STATE ---
            [:div {:style {:text-align "center" :padding "16px 0"}}
             [:h3 {:style {:color "#15803d" :margin-top "0"}} "✓ Email saved!"]
             [:p {:style {:color "#475569"}} "We'll let you know when this topic is ready."]
             [:button.btn-continue {:style {:margin-top "16px" :width "100%"}
                                    :on-click #(reset! modal-state nil)}
              "Close"]]

            ;; --- PROMPT STATE ---
            [:div
             [:h3 {:style {:margin-top "0" :color "#0f172a"}} (:title @modal-state)]
             [:p {:style {:color "#475569" :font-size "0.95rem" :line-height "1.5" :margin-bottom "20px"}}
              (str "Drop your email below if you want a quick ping when we release a map for \"") [:strong (:subject @modal-state)] "\"."]

             [:input.search-input
              {:type "email"
               :auto-focus true
               :placeholder "your@email.com (optional)"
               :value @email-input
               :style {:margin-bottom "20px" :width "100%" :box-sizing "border-box"}
               :on-change #(reset! email-input (-> % .-target .-value))
               :on-key-down (fn [e]
                              (when (= (.-key e) "Enter")
                                (.preventDefault e)
                                (>evt [::send-to-firestore "emails" {:email @email-input :voted-subject (:subject @modal-state)}])
                                (reset! modal-state {:state :submitted})))}]

             [:div {:style {:display "flex" :justify-content "flex-end" :gap "12px"}}
              [:button {:style {:background "transparent" :border "none" :color "#64748b" :cursor "pointer" :font-weight "500"}
                        :on-click #(reset! modal-state nil)}
               "Skip"]
              [:button.btn-continue
               {:on-click (fn []
                            (>evt [::send-to-firestore "emails" {:email @email-input :voted-subject (:subject @modal-state)}])
                            (reset! modal-state :submitted))}
               "Notify Me"]]])]]))))

(defn search-ui []
  (let [search-text  (reagent/atom "")
        is-focused?  (reagent/atom false)
        vote-timer   (atom nil)
        email-modal-state   (reagent/atom nil)] ;; Tracks modal: nil -> :prompting -> :submitted
    (fn []
      (let [query          @search-text
            matches        (search-questions query)
            has-query?     (not (str/blank? query))
            no-matches?    (and has-query? (empty? matches))

            ;; Fetch active trace from re-frame to hide dropdown if tracing
            problem-node   (<sub [::problem-node])
            is-tracing?    (some? problem-node)
            show-dropdown? (and @is-focused? has-query? (not is-tracing?))
            trigger-vote! (fn [q title vote-type]
                            (reset! email-modal-state {:state :prompting :subject q :title title})
                            (>evt [::send-to-firestore "votes" {:subject q :type vote-type}]))
            start-trace!  (fn [label]
                            (if (contains? trace-scenarios label)
                              (>evt [::start-trace label])
                              (trigger-vote! label "Not mapped yet" "not in trace-scenarios"))
                            (reset! search-text ""))]
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
             :on-focus #(reset! is-focused? true)
             :on-blur #(reset! is-focused? false)

             ;; Keyboard interaction (Enter to select)
             :on-key-down (fn [e]
                            (.stopPropagation e)
                            (when (= (.-key e) "Enter")
                              (.preventDefault e)
                              (if no-matches?
                                (trigger-vote! query "Vote recorded!" "manual") ;; Enter key triggers vote & modal
                                (let [target-id (if has-query?
                                                  (:label (first matches))
                                                  (:label (first featured-questions)))]
                                  (when target-id (start-trace! target-id))))))
             :on-change (fn [e]
                          (let [v (-> e .-target .-value)]
                            (reset! search-text v)
                            (when @vote-timer (js/clearTimeout @vote-timer))
                            (when (not (str/blank? v))
                              (reset! vote-timer
                                      (js/setTimeout
                                       (fn []
                                         (when (empty? (search-questions @search-text))
                                           ;; Silent auto-vote
                                           (>evt [::send-to-firestore "votes" {:type "auto" :subject @search-text}])))
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
                (for [{:keys [label]} featured-questions] ;; featured list as fallback
                  ^{:key (str "feat-" label)}
                  [:div.dropdown-item {:on-mouse-down (fn [e] (.preventDefault e) (start-trace! label))}
                   [:div.item-icon [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:polyline {:points "20 6 9 17 4 12"}]]]
                   [:div.item-text label]])]

               ;; Scenario 2: With matches
               (for [{:keys [label]} matches]
                 ^{:key label}
                 [:div.dropdown-item
                  {:on-mouse-down (fn [e]
                                    (.preventDefault e)
                                    (start-trace! label))}
                  [:div.item-icon [:svg {:width "16" :height "16" :viewBox "0 0 24 24" :fill "none" :stroke "currentColor" :stroke-width "2"} [:circle {:cx "11" :cy "11" :r "8"}]]]
                  [:div.item-text label]]))])

          ;; Sits outside the normal flow, waiting for email-modal-state to not be nil.
          [email-capture-prompt email-modal-state]]

         (when (not show-dropdown?)
           [:<>
             ;; --- Featured Questions ---
             [:div.cards-container
              (for [{:keys [label highlight? icon]} featured-questions]
                ^{:key label}
                [:div.trace-card
                 {:class (when highlight? "highlight")
                  :on-click #(start-trace! label)}
                 (when icon [:span {:style {:font-size "1.1em"}} icon])
                 (clojure.string/replace label "❓ " "")])]

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
  (let [problem-node (get-in app-state [:trace-ui :problem-node] nil)
        answered-questions (get-in app-state [:trace-ui :answers-for-problem-questions] [])
        trace-scenarios-routing  (get-in trace-scenarios [problem-node :routing] [])
        target-from-problem (:matched-node (evaluate-routing trace-scenarios-routing answered-questions))
        target-prerequisites (get-in trace-scenarios [target-from-problem :prerequisites])
                ;; TODO: I'll need a recursion here.
        aim-fn (fn [target prerequisite]
                  ;; TODO: I actually want to get the real answer and have a logic to check if it's right.
                 (if (= :wrong (question-result {:app-state app-state :node prerequisite}))
                   ;; wront answer for prerequisite then prerequisite
                   prerequisite
                   ;; no prerequisite then target
                   ;; no answer for prerequisite then target
                   ;; right answer for prerequisite then target
                   target))
        target-from-knowledge (reduce aim-fn target-from-problem target-prerequisites)]
    target-from-knowledge))
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
        assumed-answer (:assumed-answer (<sub [::problem-evaluation]))
        ;; Fetch the specific question for the current path
        questions-map (get-in trace-scenarios [problem-node :questions] {})
        problem-question-data (get-question-for-path questions-map problem-path-takeen)

        ;; --- Knowledge Panel Setup ---
        current-brain  (<sub [::brain-node])
        questions-map  (get-in trace-scenarios [current-brain :questions] {})
        [knowledge-question-id knowledge-question-data] (first questions-map)]

    [:div.app-container {:class (when is-tracing? "state-trace")}
     [trace-styles]
     [:div "debug"
       [:pre (str "problem-node: "problem-node)]
       [:pre (str "current-target "(<sub [::target-node]))]
       [:pre (str "current-brain: "(<sub [::brain-node]))]
       [:pre (str "problem-path-takeen: "(<sub [::problem-path-taken]))]
       [:pre (str "Assumed id: "(<sub [::problem-evaluation]))]
       [:pre (str "question-data: "problem-question-data)]
       [:pre (str "knowledge-question-data: "knowledge-question-data)]]


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
    (cljs.core.async/<! (cljs.core.async/timeout 10))
    (re-frame/dispatch-sync [:looset-trace.app/start-trace "❓ Pull vs Fetch"]))

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
