(ns looset-shared.markdown-test
  (:require
    [cljs.test :as t :refer [deftest testing is]]
    [clojure.string :as str]
    [looset-shared.markdown :as markdown]))

(def resources-meta
  {"https://video.example.com"   {:title "Video Resource" :depth 30 :media-type #{:video} :diataxis-type {:tutorial 0.6} :summary "A video summary"}
   "https://book.example.com"    {:title "Book Resource" :depth 70 :media-type #{:book} :diataxis-type {} :summary "A book summary"}
   "https://untyped.example.com" {:title "Untyped Resource" :depth 50 :media-type nil :diataxis-type {} :summary "An untyped summary"}
   "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460"
                                 {:title "Introduction to Git Branching: The Kitchen Analogy" :depth 30 :media-type #{:video} :diataxis-type {:tutorial 0.6} :summary "Explains the concept of branching"}
   "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/n15/mode/2up"
                                 {:title "Ledi Sayadaw's biography" :depth 30 :media-type #{:book} :diataxis-type {:tutorial 0.6} :summary "Breve biografia de Ledi Sayadaw"}
   "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ"
                                 {:title "Git Branching: whole video" :depth 30 :media-type #{:video} :diataxis-type {:tutorial 0.6} :summary "About Git Branching"}})

(deftest parse-resource-urls-behavior
  (testing "GIVEN a code block with several non-blank lines
            WHEN the urls are parsed
            THEN each line becomes a url, in order"
    (is (= ["https://video.example.com" "https://book.example.com" "https://untyped.example.com"]
           (markdown/parse-resource-urls (str/join "\n" ["https://video.example.com" "https://book.example.com" "https://untyped.example.com"])))))

  (testing "GIVEN lines carrying a `url[:kw \"val\" ...]` data bracket, some with all
              keywords given and some with keywords omitted (defaulting to \"\")
            WHEN the urls are parsed
            THEN each becomes a {:url-to-use ... :url-to-resolve-resource-meta ...}
              map, splicing :url and :resource in place of the bracket
              AND a given :subtitle is carried through unchanged
              AND omitting a keyword is equivalent to giving it \"\""
    (is (= [{:url-to-use "https://video.example.com/?t=2460" :url-to-resolve-resource-meta "https://video.example.com"}
            {:url-to-use "https://book.example.com" :url-to-resolve-resource-meta "https://book.example.com" :subtitle "Ver página 97"}
            {:url-to-use "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=4000" :url-to-resolve-resource-meta "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460"}
            {:url-to-use "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=4500" :url-to-resolve-resource-meta "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ"}
            {:url-to-use "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/40/mode/2up" :url-to-resolve-resource-meta "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/n15/mode/2up"}

            {:url-to-use "https://video.example.com/?t=2460" :url-to-resolve-resource-meta "https://video.example.com"}
            {:url-to-use "https://book.example.com" :url-to-resolve-resource-meta "https://book.example.com" :subtitle "Ver página 97"}
            {:url-to-use "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=4500" :url-to-resolve-resource-meta "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ"}]
           (markdown/parse-resource-urls (str/join "\n" ["https://video.example.com[:url \"/?t=2460\" :resource \"\"]" ;; The keywords define which component will be used for what.
                                                         "https://book.example.com[:url \"\" :resource \"\" :subtitle \"Ver página 97\"]" ;; The subtitle is used to overwrite the text subtitle (not the type icon).
                                                         "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ[:url \"&t=4000\" :resource \"&t=2460\"]"
                                                         "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ[:url \"&t=4500\" :resource \"\"]"
                                                         "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/[:url \"40\" :resource \"n15\"]/mode/2up"

                                                         ;; These 3 are equivalent to the cases 1, 2 and 4. The difference is that when the keyword has a empty string, it can be ommited.
                                                         "https://video.example.com[:url \"/?t=2460\"]"
                                                         "https://book.example.com[:subtitle \"Ver página 97\"]"
                                                         "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ[:url \"&t=4500\"]"
                                                         ])))))


  (testing "GIVEN blank lines interspersed (leading, trailing, and in the middle)
            WHEN the urls are parsed
            THEN the blank lines are dropped"
    (is (= ["https://video.example.com" "https://book.example.com"]
           (markdown/parse-resource-urls (str "\n\n" "https://video.example.com" "\n\n" "https://book.example.com" "\n\n")))))

  (testing "GIVEN a single-line code block
            WHEN the urls are parsed
            THEN a one-element list is returned"
    (is (= ["https://video.example.com"]
           (markdown/parse-resource-urls "https://video.example.com")))))

(deftest resolve-resources-behavior
  (testing "GIVEN a url present in resources-meta
            WHEN resources are resolved
            THEN the resolved entry is that metadata plus :url"
    (is (= [{:title "Video Resource" :depth 30 :media-type #{:video} :diataxis-type {:tutorial 0.6} :summary "A video summary" :url "https://video.example.com"}]
           (markdown/resolve-resources resources-meta ["https://video.example.com"]))))

  (testing "GIVEN a url absent from resources-meta
            WHEN resources are resolved
            THEN it falls back to {:title url :depth 50 :url url}"
    (is (= [{:title "https://unknown.example.com" :depth 50 :url "https://unknown.example.com"}]
           (markdown/resolve-resources resources-meta ["https://unknown.example.com"]))))

  (testing "GIVEN a mix of known and unknown urls
            WHEN resources are resolved
            THEN each resolves independently, order preserved"
    (is (= [{:title "Video Resource" :depth 30 :media-type #{:video} :diataxis-type {:tutorial 0.6} :summary "A video summary" :url "https://video.example.com"}
            {:title "https://unknown.example.com" :depth 50 :url "https://unknown.example.com"}]
           (markdown/resolve-resources resources-meta ["https://video.example.com" "https://unknown.example.com"])))))

(deftest resource-type-icon-behavior
  (testing "GIVEN each known media-type
            WHEN the icon is looked up
            THEN the matching emoji is returned"
    (is (= "🎮 " (markdown/resource-type-icon #{:game})))
    (is (= "🎬 " (markdown/resource-type-icon #{:video})))
    (is (= "🪜 " (markdown/resource-type-icon #{:tutorial})))
    (is (= "💡 " (markdown/resource-type-icon #{:Q&A})))
    (is (= "📚 " (markdown/resource-type-icon #{:book})))
    (is (= "🔍 " (markdown/resource-type-icon #{:reference})))
    (is (= "⚙️ " (markdown/resource-type-icon #{:simulation})))
    (is (= "📄 " (markdown/resource-type-icon #{:text})))
    (is (= "🗞️ " (markdown/resource-type-icon #{:article}))))

  (testing "GIVEN a nil or unrecognized media-type
            WHEN the icon is looked up
            THEN an empty string is returned"
    (is (= "" (markdown/resource-type-icon nil)))
    (is (= "" (markdown/resource-type-icon #{:unknown-type})))))

(deftest resource-subtitle-behavior
  (testing "GIVEN a diataxis-type that ->content-type can classify
            WHEN the subtitle is built
            THEN it is the icon followed by that content-type label, ignoring summary"
    (is (= "🎬 Practice"
           (markdown/resource-subtitle (resources-meta "https://video.example.com")))))

  (testing "GIVEN a diataxis-type ->content-type can't classify
            WHEN the subtitle is built
            THEN it falls back to the icon followed by the summary"
    (is (= "📚 A book summary"
           (markdown/resource-subtitle (resources-meta "https://book.example.com")))))

  (testing "GIVEN a nil media-type
            WHEN the subtitle is built
            THEN the icon is empty and the subtitle is just the label or summary"
    (is (= "An untyped summary"
           (markdown/resource-subtitle (resources-meta "https://untyped.example.com"))))))

;; Composes parse-resource-urls + resolve-resources (+ resource-subtitle), the way
;; markdown-view actually chains them, instead of testing each in isolation.
(deftest curated-resources-pipeline-behavior
  (testing "GIVEN a code block listing several known (and messy, real-world) urls
            WHEN the block is parsed then resolved
            THEN every url resolves to its known resource metadata, in order"
    (let [raw-text (str/join "\n" ["https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460"
                                   "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/n15/mode/2up"])
          urls (markdown/parse-resource-urls raw-text)]
      (is (= ["https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460"
              "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/n15/mode/2up"]
             urls))
      (is (= [(assoc (resources-meta "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460")
                :url "https://youtu.be/mAFoROnOfHs?si=yA6uNW8PczMu58AQ&t=2460")
              (assoc (resources-meta "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/n15/mode/2up")
                :url "https://archive.org/details/34.-the-manual-of-dhamma-by-ven-ledi-sayadaw-dana-0_202008/page/n15/mode/2up")]
             (markdown/resolve-resources resources-meta urls)))))

  (testing "GIVEN a code block listing a url that isn't curated yet
            WHEN the block is parsed then resolved
            THEN the url is still parsed as expected
              AND it does not resolve to any resource, falling back to a bare stub
              AND its subtitle is blank, since there is no media-type or summary to show"
    (let [raw-text "https://not-yet-curated.example.com"
          urls (markdown/parse-resource-urls raw-text)
          resolved (markdown/resolve-resources resources-meta urls)]
      (is (= ["https://not-yet-curated.example.com"] urls))
      (is (= [{:title "https://not-yet-curated.example.com" :depth 50 :url "https://not-yet-curated.example.com"}]
             resolved))
      (is (= "" (markdown/resource-subtitle (first resolved))))))

  (testing "GIVEN a code block mixing a curated url with one that isn't curated yet
            WHEN the block is parsed then resolved
            THEN each url resolves independently: the known one gets its metadata,
              the unknown one falls back to a bare stub, order preserved"
    (let [raw-text (str/join "\n" ["https://video.example.com" "https://not-yet-curated.example.com"])
          urls (markdown/parse-resource-urls raw-text)]
      (is (= ["https://video.example.com" "https://not-yet-curated.example.com"] urls))
      (is (= [(assoc (resources-meta "https://video.example.com") :url "https://video.example.com")
              {:title "https://not-yet-curated.example.com" :depth 50 :url "https://not-yet-curated.example.com"}]
             (markdown/resolve-resources resources-meta urls))))))

;; The pipeline (parse -> resolve -> subtitle) for lines carrying url data.
(deftest curated-resources-with-extra-data
  (testing "GIVEN a data bracket giving :url, :resource and :subtitle
            WHEN the line is parsed then resolved then its subtitle built
            THEN the href comes from :url-to-use, resources-meta is looked up via
              :url-to-resolve-resource-meta, and the subtitle keeps the resolved
              resource's icon but shows the :subtitle text"
    (let [line "https://video.example.com[:url \"/?t=2460\" :resource \"\" :subtitle \"Recap\"]"
          [entry] (markdown/parse-resource-urls line)
          [resolved] (markdown/resolve-resources resources-meta [entry])]
      (is (= {:url-to-use "https://video.example.com/?t=2460"
              :url-to-resolve-resource-meta "https://video.example.com"
              :subtitle "Recap"}
             entry))
      (is (= "https://video.example.com/?t=2460" (:url resolved)) "href is :url-to-use")
      (is (= "Video Resource" (:title resolved)) "resolved via :url-to-resolve-resource-meta")
      (is (= "🎬 Recap" (markdown/resource-subtitle resolved)) "icon kept, text overridden")))

  (testing "GIVEN a data bracket whose :resource url isn't in resources-meta
            WHEN the line is parsed then resolved
            THEN it falls back to a bare stub keyed by :url-to-resolve-resource-meta
              AND the href still comes from :url-to-use"
    (let [line "https://not-yet-curated.example.com[:url \"?t=10\"]"
          [entry] (markdown/parse-resource-urls line)
          [resolved] (markdown/resolve-resources resources-meta [entry])]
      (is (= {:url-to-use "https://not-yet-curated.example.com?t=10"
              :url-to-resolve-resource-meta "https://not-yet-curated.example.com"}
             entry))
      (is (= {:title "https://not-yet-curated.example.com"
              :depth 50
              :url "https://not-yet-curated.example.com?t=10"}
             resolved))))

  (testing "GIVEN a data bracket with an unrecognized keyword, in dev (js/goog.DEBUG true)
            WHEN the line is parsed then resolved
            THEN the recognized keywords still apply
              AND the subtitle describes the problem, keeping the resolved icon"
    (let [restore js/goog.DEBUG]
      (try
        (set! js/goog.DEBUG true)
        (let [line "https://video.example.com[:url \"/?t=2460\" :typo \"oops\"]"
              [entry] (markdown/parse-resource-urls line)
              [resolved] (markdown/resolve-resources resources-meta [entry])]
          (is (= "https://video.example.com/?t=2460" (:url-to-use entry)))
          (is (= "https://video.example.com" (:url-to-resolve-resource-meta entry)))
          (is (str/includes? (:subtitle entry) ":typo") "names the unrecognized keyword")
          (is (str/starts-with? (markdown/resource-subtitle resolved) "🎬 ") "icon preserved")
          (is (str/includes? (markdown/resource-subtitle resolved) ":typo")))
        (finally (set! js/goog.DEBUG restore)))))

  (testing "GIVEN the same bracket with an unrecognized keyword, in production (js/goog.DEBUG false)
            WHEN the line is parsed
            THEN the unrecognized keyword is ignored and it resolves from the
              recognized ones, with no problem description in the subtitle"
    (let [restore js/goog.DEBUG]
      (try
        (set! js/goog.DEBUG false)
        (let [line "https://video.example.com[:url \"/?t=2460\" :typo \"oops\"]"
              [entry] (markdown/parse-resource-urls line)]
          (is (= {:url-to-use "https://video.example.com/?t=2460"
                  :url-to-resolve-resource-meta "https://video.example.com"}
                 entry)))
        (finally (set! js/goog.DEBUG restore)))))

  (testing "GIVEN a bracket whose content can't be read as keyword/string pairs
            WHEN the line is parsed
            THEN the whole line, brackets included, is treated as a plain url"
    (is (= ["https://video.example.com[just some random text]"]
           (markdown/parse-resource-urls "https://video.example.com[just some random text]"))))

  (testing "GIVEN a bracket containing invalid EDN (an unterminated string)
            WHEN the line is parsed
            THEN the whole line, brackets included, is treated as a plain url"
    (is (= ["https://video.example.com[:url \"unterminated]"]
           (markdown/parse-resource-urls "https://video.example.com[:url \"unterminated]")))))
