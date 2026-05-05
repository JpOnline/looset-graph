(ns looset-trace.app
  (:require
    ["firebase/app" :refer [initializeApp]]
    ["firebase/firestore" :refer [getFirestore collection addDoc]]
    ["react-markdown" :default ReactMarkdown]
    [clojure.edn :as edn]
    [clojure.set :as set]
    [clojure.string :as str]
    [looset-graph.app :as looset-graph]
    [looset-graph.util :as util :refer [<sub >evt]]
    [re-frame.alpha :as re-frame]
    [reagent.core :as reagent]))

(def show-tooltips? (< (rand) 0.5))

(defn is-staging? []
  (let [hostname (.-hostname js/window.location)
        pathname (.-pathname js/window.location)]
    (or (str/includes? hostname "stg")
        (str/includes? pathname "stg"))))

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
  (let [collection-name (cond
                          ^boolean js/goog.DEBUG (str "debug-" collection-name*)
                          (is-staging?) (str "stg-" collection-name*)
                          :else collection-name*)
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

    /* left-buttons */
    .button-2:active {
      background-color: #00000020;
    }
    .button-2 {
       background-color: #0000000d;
       backdrop-filter: blur(3px);
       border-radius: 8px;
       border-style: solid;
       border-width: 2px;
       border-color: #000000a1;
       box-sizing: border-box;
       cursor: pointer;
       padding: 4px;
       margin: 4px 0px;
       transition: color 100ms;
       user-select: none;
       -webkit-user-select: none;
       touch-action: manipulation;
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

;; TODO: It can be more "right" by asyncronously fetching and only mount/render
;; the main component when the trace-scenario atom (needs to change it to atom)
;; is loaded.
(defn fetch-trace-scenarios-synchronously []
  (let [cache-buster (if (is-staging?)
                       (str "?t=" (.now js/Date))
                       "")
        url          (str "trace-scenarios.edn" cache-buster)
        req          (js/XMLHttpRequest.)]
    (try
      (.open req "GET" url false) ;; the false parameter make it synchronous.
      (.send req nil)
      (if (= 200 (.-status req))
        (edn/read-string (.-responseText req))
        (do
          (js/console.error "Failed to load trace-scenarios. Status:" (.-status req))
          {})) ;; Return empty map fallback
      (catch js/Error e
        (js/console.error "Network error fetching scenarios:" e)
        {}))))

(def trace-scenarios (fetch-trace-scenarios-synchronously))

(def mapped-questions
  (concat
    featured-questions
    (->> trace-scenarios
      (keys)
      (filter string?)
      (filter #(str/starts-with? % "❓ "))
      (remove (set (map :id featured-questions)))
      (map #(into {:id % :label (subs % 2)})))))

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

(def right-panel-style
  "
    /* -----------------------------------------
;; --- RIGHT PANEL (Node Details & Resources)
       ----------------------------------------- */
    .node-details-panel {
      position: absolute; top: 0; right: 0; width: 380px; height: 100%;
      background: #ffffff; border-left: 1px solid #e5e7eb;
      box-shadow: -4px 0 15px rgba(0,0,0,0.03); z-index: 5;
      padding: 30px 24px; display: flex; flex-direction: column;
      transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
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
  ")

(defn left-buttons []
  (let [icons-size "22"]
    [:div
     {:style {:position "relative"
              :height "0px"
              :z-index "10"}}
     [:div
      {:style {:z-index "10"
               :display "flex"
               :flex-direction "column"
               :align-items "flex-start"
               :padding "10px"
               :inline-size "fit-content"}}
      [:button.button-2
       {:title "realign nodes"
        :onClick #(>evt [::looset-graph/clear-nodes-positions])}
       [:svg
        {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
        [:path {:fill-rule "evenodd" :d "M5 1v8H1V1zM1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm13 2v5H9V2zM9 1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 13v2H3v-2zm-2-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zm12-1v2H9v-2zm-6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"}]]]
      [:button.button-2.drag-button
       {:title "dispersion (click, hold and drag)"
        :onMouseDown #(let [canvas (first (js/document.getElementsByTagName "canvas"))]
                        (-> (.requestPointerLock canvas #_(clj->js {:unadjustedMovement true}))
                          (.then (fn []
                                   (js/console.log "Pointer lock acquired.")))
                          (.catch (fn [err]
                                    (js/console.error "Pointer lock failed:" err))))

                        (>evt [::looset-graph/dispersing-nodes true]))}
       [:svg
        {:width icons-size :height icons-size :fill "currentColor" :viewBox "0 0 16 16"}
        [:path {:fill-rule "evenodd" :d "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"}]]]]]))

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
    [util/shadow-container right-panel-style
      [:div.node-details-panel.content-updated-flash
       [:h2.node-title selected-or-fallback-node]
       [:span.node-desc [markdown-view markdown-content]]]]))

(defmethod looset-graph/right-panel-content :trace-right-panel [& _]
  right-panel-view)

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
(defn quiz-problem [initial-question-data initial-assumed-answer]
  (let [clicked-id (reagent.core/atom nil)
        current-question (atom initial-question-data)
        shuffled-options (atom (shuffle (:options initial-question-data)))]
    (fn [question-data assumed-answer]
      (when (not= question-data @current-question)
        (reset! current-question question-data)
        (reset! shuffled-options (shuffle (:options question-data))))
      (let [;; Sort options: Assumed goes first.
            sorted-options (sort-by (fn [opt] (if (= (:id opt) assumed-answer) -1 1))
                                    @shuffled-options)
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

(defn assert-resources-meta!
  [resources-meta]
  ;; Every key is a string.
  (when-let [resources-with-problem (seq (remove string? (keys resources-meta)))]
    (throw (ex-info "resources-meta has a problem. Some key is not a string." {:keys-with-problem resources-with-problem})))
  ;; No resource key is a string.
  (when-let [resources-with-problem (seq (remove keyword? (->> resources-meta (vals) (map keys) (flatten))))]
    (throw (ex-info "resources-meta has a problem. Some resource has a string." {:keys-with-problem resources-with-problem}))))

(defn all-resources-meta [app-state]
  (let [resources-meta (get-in app-state [:domain :resources-meta] {})]
    (when ^boolean js/goog.DEBUG (assert-resources-meta! resources-meta))
    resources-meta))
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

     (when is-tracing?
       [left-buttons])

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
  res

  ;; Code for generating :fallback-problem-questions. A variaty of question
  ;; descriptions and options that are generic and independent, it can be
  ;; replaced or augmented by any other set of questions.
  (for [question ["Where should we take this exploration from here?"]
        [h1-id option-h1] [[".git/hooks" "I want to automate scripts (like linters or tests) to run automatically right before I commit or push."]
                           ["Detached HEAD" "I want to know what happens when I explore past code and suddenly lose my branch context."]
                           ["Directed Acyclic Graph (DAG)" "I'm curious about the mathematical structure Git uses to connect history behind the scenes."]
                           ["git bisect" "I need to hunt down the exact, specific commit that introduced a bug into the project."]
                           ["git cherry-pick" "I want to grab one specific, isolated commit from another branch and apply it to mine."]
                           ["git rebase" "I want to clean up, squash, or reorder my local history before sharing it with the team."]
                           ["git reflog" "I need to know how to rescue a deleted commit—the 'undo button for the undo button'."]
                           ["git reset" "I want to completely undo my recent local work and forcefully move the timeline backward."]
                           ["Immutability" "I want to understand the core principle that makes Git history permanent and safe."]]
        [h2-id option-h2] [[".git/hooks" "I want to automate scripts (like linters or tests) to run automatically right before I commit or push."]
                           ["Detached HEAD" "I need to travel back in time to look at an old commit without accidentally messing up my current work."]
                           ["Directed Acyclic Graph (DAG)" "I'd like to understand the invisible mathematical structure that connects all commits together."]
                           ["git bisect" "I need a fast, automated way to hunt down exactly which past change introduced a bug."]
                           ["git cherry-pick" "I want to grab one specific change from another branch and copy it into mine without merging everything."]
                           ["git rebase" "I want to clean up, squash, or edit my commit history before opening a Pull Request."]
                           ["git reflog" "I made a terrible mistake and need to recover a commit that seems to be completely 'lost'."]
                           ["git reset" "I need to unstage files or completely wipe out my recent local work by moving my branch pointer."]
                           ["Immutability" "I want to explore the underlying principle that makes Git history secure and theoretically unchangeable."]]
        [e-id option-e] [["Branch" "I want to learn how to safely build new features in an isolated parallel timeline."]
                         ["Commit Object" "I want to dissect exactly what data is captured when a snapshot is saved."]
                         ["git clone" "I want to download a complete copy of an existing project from the internet."]
                         ["git log" "I want to learn how to search, read, and filter the history of past changes."]
                         ["git pull" "I want to download the latest updates from my team and merge them into my current work."]
                         ["git push" "I am ready to upload my local, finished commits for the rest of my team to see."]
                         ["git status" "I just need a quick summary of what state my working files are currently in."]
                         ["Remote Repository" "I want to understand how my local code connects to servers like GitHub or GitLab."]
                         ["Repository (.git)" "I want to know where and how Git physically stores all its data and history on my computer."]
                         ["Staging Area (Index)" "I want to understand the 'waiting room' where files sit before they become a permanent commit."]]
        :when (not= h1-id h2-id)]
    {:description question
     :options [{:id e-id :text option-e}
               {:id h1-id :text option-h1}
               {:id h2-id :text option-h2}]}))
