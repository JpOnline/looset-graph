(ns playground2
  (:require
    [nextjournal.markdown :as md]
    [clojure.string :as string]))

(defn get-text
  [m]
  (when (> (count (:content m)) 1)
    (println "Markdown data has more than 1 element.")
    (println m))
  (let [content (first (:content m))]
    (cond
      (:text content) (:text content)
      (:content content) (get-text content)
      :else (throw (ex-info "Could not extract text from markdown element." {:element m})))))

(defn markdown-table-to-maps
  "Parses a markdown string containing a table and returns a vector of maps."
  [markdown-str]
  (let [doc (md/parse markdown-str)
        ;; Locate the table in the document AST
        table (->> doc
                   :content
                   (filter #(= :table (:type %)))
                   first)
        ;; Extract header row cells (text only)
        headers (->> table
                  :content
                  (filter #(= :table-head (:type %)))
                  (first)
                  :content
                  (first)
                  :content
                  (map get-text))
        ;; Extract data rows
        rows (->> table
                  :content
                  (remove #(= :table-head (:type %)))
                  (first)
                  :content
                  (map :content)
                  (map #(try (map get-text %) (catch Exception e (println (str "get-text in markdown-table-to-maps failed, it was processing "%))))))]
    ;; Combine headers with each row to create a vector of maps
    (vec (for [row rows]
           (zipmap headers row)))))

(defn relationship-properties-map--with-no-edge-label->graph-text
  [ma]
  (let [remove-quotes #(string/replace % #"\"" "'")
        get-source #(remove-quotes (get % "Source Entity" "No source entity"))
        get-target #(remove-quotes (get % "Target Entity" "No target entity"))
        lines (map #(str \"(get-source %)\"" -> "\"(get-target %)\") ma)]
    (string/join "\n" lines)))

(defn relationship-properties-map->graph-text
  [ma]
  (let [remove-quotes #(try (string/replace % #"\"" "'") (catch Exception e (println (str "Could not process string: "%))))
        get-source #(remove-quotes (get % "Source Entity" "No source entity"))
        get-relationship #(remove-quotes (get % "Relationship Type" nil))
        get-target #(remove-quotes (get % "Target Entity" "No target entity"))
        lines (map #(str \"(get-source %)\"" -\""(get-relationship %)"\"-> "\"(get-target %)\") ma)]
    (string/join "\n" lines)))

;; Example usage with your table
(def table-markdown "| Source Entity | Relationship Type | Target Entity | Confidence Level | Supporting Context |\n| :---- | :---- | :---- | :---- | :---- |\n| Mathematics | subcategory_of | Formal sciences | High | The page is categorized under \"Formal sciences\". |\n| Number Theory | subcategory_of | Mathematics | High | \"Number theory began with the manipulation of numbers...\"; Listed under \"Areas of mathematics\". |")

#_
(->> #_table-markdown
  (slurp "playground2-input.txt")
  (markdown-table-to-maps)
  (relationship-properties-map->graph-text)
  (spit "playground2-output.txt"))

(def common-english-words #{"the" "of" "and" "a" "to" "ref" "in" "is" "title" "cite" "date" "first" "book" "publisher" "url" "https" "for" "last" "x" "isbn" "archive" "editor" "by" "as" "0" "978" "f" "year" "that" "s" "books" "link" "1" "web" "author" "an" "it" "org" "pages" "2" "be" "name" "h" "with" "last1" "first1" "journal" "this" "was" "time" "3" "last2" "rp" "first2" "page" "com" "which" "oclc" "his" "can" "history" "at" "location" "access" "id" "used" "century" "from" "university" "google" "press" "on" "b" "are" "were" "www" "doi" "its" "10" "9" "4" "http" "or" "work" "example" "dx" "last3" "if" "status" "first3" "edition" "between" "m" "he" "not" "also" "j" "5" "live" "two" "y" "princeton" "called" "2022" "june" "then" "chapter" "barrow" "use" "development" "they" "their" "edu" "pg" "small" "6" "input" "one" "such" "developed" "more" "fundamental" "sup" "over" "notation" "many" "d" "issue" "ideas" "given" "green" "but" "all" "pdf" "second" "new" "2023" "bell" "march" "other" "traveled" "ancient" "into" "we" "c" "en" "under" "8" "find" "cambridge" "study" "issn" "g" "l" "these" "link1" "frac" "behavior" "leader" "2008" "s2cid" "who" "however" "imre" "wiley" "than" "zero" "apostol" "7" "2017" "any" "times" "gives" "approach" "have" "agnesi" "companion" "when" "gowers" "how" "would" "details" "early" "several" "only" "modern" "openstax" "concept" "align" "up" "news" "europe" "20" "short" "boyer" "link2" "main" "nbsp" "another" "carl" "introduction" "so" "tom" "each" "dy" "later" "link3" "way" "been" "february" "sent" "object" "w" "standard" "image" "sep" "p" "jstor" "like" "website" "because" "most" "york" "same" "both" "text" "2010" "known" "t" "out" "non" "indefinite" "2007" "uses" "finding" "middle" "stanford" "no" "display" "september" "some" "written" "jpg" "may" "world" "technology" "laws" "law" "see" "691" "made" "word" "26" "471" "2012" "authors" "takes" "found" "where" "china" "just" "521" "thumb" "doubling" "2011" "july" "15" "lim_" "oxford" "business" "geometry" "had" "htm" "gave" "region" "2021" "above" "years" "boston" "3rd" "conceptual" "webarchive" "r" "mathematica" "file" "give" "1998" "thought" "html" "2006" "during" "michael" "before" "still" "english" "common" "2020"})

(defn top-n-words
  "Returns the top n words in the string by occurrence count."
  [ss nn]
  (->> (string/split ss #"\W+")
       (map string/lower-case)
       (remove common-english-words)
       (remove empty?)
       frequencies
       (sort-by val >)))
       ; (take nn)
       ; (mapv (fn [[k v]] [k v]))))

(defn find-plural-pairs
  "Find potential plural pairs in the frequency map"
  [freq-map]
  (let [words (keys freq-map)
        pairs (atom [])]
    (doseq [w1 words
            w2 words
            :let [len-diff (Math/abs (- (count w1) (count w2)))]
            :when (and (not= w1 w2) (<= len-diff 3))]
      ;; Truncate longer word to match shorter word's length and compare
      (let [shorter (if (< (count w1) (count w2)) w1 w2)
            longer (if (< (count w1) (count w2)) w2 w1)
            truncated-longer (subs longer 0 (count shorter))]
        (when (= shorter truncated-longer)
          (swap! pairs conj [shorter longer]))))
    @pairs))

(defn top-n-words2
  "Returns the top n words in the string by occurrence count.
   Also creates combined entries for suspected plural pairs."
  [ss nn]
  (let [words (->> (string/split ss #"\W+")
                   (map string/lower-case)
                   (remove empty?))
        freq-map (frequencies words)
        plural-pairs (find-plural-pairs freq-map)

        ;; Create combined entries for plural pairs
        combined-entries (->> plural-pairs
                              (map (fn [[singular plural]]
                                     (let [combined-key (str singular "/" plural)
                                           total-count (+ (get freq-map singular 0)
                                                         (get freq-map plural 0))]
                                       [combined-key total-count])))
                              (into {}))

        ;; Merge original frequencies with combined entries
        extended-freq-map (merge freq-map combined-entries)]

    (->> extended-freq-map
         (sort-by val >)
         (take nn)
         (mapv (fn [[k v]] [k v])))))

(defn top-n-bracket-words
  "Returns the top n words surrounded by '[[' and ']]' by occurrence count."
  [ss nn]
  (->> (re-seq #"\[\[(.*?)\]\]" ss)
       (map second)
       ;; Split on "|" and take only the first part
       (map #(first (string/split % #"\|")))
       ;; Remove any empty strings that might result from splitting
       (remove empty?)
       frequencies
       (sort-by val >)))
       ; (take nn)
       ; (mapv (fn [[k v]] [k v]))))
