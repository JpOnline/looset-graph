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
                                 {:title "Ledi Sayadaw's biography" :depth 30 :media-type #{:book} :diataxis-type {:tutorial 0.6} :summary "Breve biografia de Ledi Sayadaw"}})

(deftest parse-resource-urls-behavior
  (testing "GIVEN a code block with several non-blank lines
            WHEN the urls are parsed
            THEN each line becomes a url, in order"
    (is (= ["https://video.example.com" "https://book.example.com" "https://untyped.example.com"]
           (markdown/parse-resource-urls (str/join "\n" ["https://video.example.com" "https://book.example.com" "https://untyped.example.com"])))))

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
;; markdown-view actually chains them, instead of testing each in isolation. This is
;; the case that matters most for the upcoming url-definition change: a url can be
;; parsed as expected while still not resolving to any known resource.
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
