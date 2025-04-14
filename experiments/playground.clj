(ns playground
  (:require
    [babashka.curl :as curl]
    [clojure.edn :as edn]
    ;; [clojure.pprint :refer [pprint]]
    [clojure.string :as str]))

(require '[babashka.deps :as deps])
(deps/add-deps '{:aliases {:hickory {:extra-deps {org.clj-commons/hickory {:mvn/version "0.7.7"}}}}}
               {:aliases [:hickory]})
(require '[hickory.core :as hickory])
(require '[hickory.select :as s])

(def errors (atom []))

(defn fetch-page [url]
  (try
    (-> (curl/get url {:headers {"User-Agent" "Babashka Wikipedia Scraper/1.0"}})
        :body)
    (catch Exception e
      (println "Error fetching page:" (.getMessage e))
      (swap! errors conj url)
      (throw (ex-info "Could not fetch page" {:kind :could-not-fetch-page} e)))))

(defn parse-html [html]
  (-> html
      hickory/parse
      hickory/as-hickory))

(defn extract-text-content [node]
  (cond
    (string? node) node
    (:content node) (str/join "" (map extract-text-content (:content node)))
    (:data-ct-title (:attrs node)) (:data-ct-title (:attrs node))))

(defn extract-links [parsed-html]
  ;; Direct selection of links in the main content
  (let [filtered-links (->> (s/select (s/descendant
                                        ;; (s/class "mw-parser-output")
                                        ;; (s/id "mw-subcategories") ;; This is for getting subcategories that are in a category page. It needs to be changed depending on the type of link is needed. TODO: Abstract it in a parameter?
                                        (s/tag :a))
                                      parsed-html))]

    ;; Extract the link text and href
    (map (fn [link]
           {:text (str/trim (extract-text-content link))
            :href (get-in link [:attrs :href])
            :full-url (if (and (get-in link [:attrs :href]) (str/starts-with? (get-in link [:attrs :href]) "/"))
                        (str "https://en.wikipedia.org" (get-in link [:attrs :href]))
                        (get-in link [:attrs :href]))})
         filtered-links)))

(defn flatten-hierarchy
  [key-to-extract coll]
  (reduce
    (fn [acc k]
      (conj (into acc (flatten-hierarchy key-to-extract (key-to-extract k)))
            (dissoc k key-to-extract)))
    []
    coll))

(defn flatten-hierarchy-2
  "The difference here is that the key-to-extract is not removed, is just emptied."
  [key-to-extract coll]
  (reduce
    (fn [acc k]
      (conj (into acc (flatten-hierarchy-2 key-to-extract (key-to-extract k)))
            (if (key-to-extract k)
              (assoc k key-to-extract [])
              k)))
    []
    coll))

;; I used it to extract first level URLs
(defn process-wikipedia-page [url]
  (when-let [html (fetch-page url)]
    (let [parsed-html (parse-html html)
          links (extract-links parsed-html)]
      links)))

;; (defn -main [& args]
;;   (if (empty? args)
;;     (println "Usage: bb wikipedia-scraper.clj <wikipedia-url>")
;;     (let [url (first args)
;;           links (process-wikipedia-page url)]
;;       (if links
;;         (println (json/generate-string links {:pretty true}))
;;         (println "No links found or error occurred.")))))
;;
;; ;; Execute main function when run as a script
;; (when (= *file* (System/getProperty "babashka.file"))
;;   (apply -main *command-line-args*))


(defn link->category-url [link]
  (let [parts (str/split (:full-url link) #"/")
        prefix (butlast parts)
        last-part (last parts)
        new-last (if (re-find #"Category:" last-part)
                   last-part
                   (str "Category:" last-part))]
    (str/join "/" (concat prefix [new-last]))))

(defn get-categories [link]
  (->> link
    (link->category-url)
    (process-wikipedia-page)
    (filter #(when (:href %) (re-find #"\/wiki\/Category:" (:href %))))))
    ;; (pprint)))
    ;; (count)))

(def assoc-categories #(assoc % :categories-links (get-categories %)))

(def assoc-categories-lv-2 #(update % :categories-links (partial map assoc-categories)))

;; ;; I used this one to extract the second level, lv 1 of categories.
;; (spit "tmp2" (with-out-str (pprint (map assoc-categories links))))

;; ;; Debug: checking the number of categories-links
;; (pprint (map #(into {:text (:text %) :nr (count (:categories-links %))}) (edn/read-string (slurp "tmp2"))))

;; ;; I used this one to add categories-links to links that are in categories links (i.e. lv 2).
;; (->> links #_(edn/read-string (slurp "tmp2"))
;;   (map assoc-categories-lv-2)
;;   (pprint)
;;   (with-out-str)
;;   (spit "take2"))

;; ;; Debug: checking links in a flatten structure.
;; (->> (edn/read-string (slurp "take2"))
;;   (flatten-hierarchy :categories-links)
;;   (map :full-url)
;;   (set)
;;   ;; (filter #(zero? (count (:categories-links %))))
;;   ;; (map #(into {:text (:text %) :nr (count (:categories-links %))})))
;;   (count))
;;   ;; (pprint))

(defn format-id-for-looset-no-label [link]
  (let [name (last (str/split (:href link) #"/"))
        id (str/replace name #"Category:" "")]
    id))

(defn format-id-for-looset [link]
  (let [name (last (str/split (:href link) #"/"))
        label? (:categories-links link)
        id (str/replace name #"Category:" "")]
    (if label?
      (str "=>\""id"\"")
      (str "\""id"\""))))

(defn format-link-for-looset [link]
  (when (:categories-links link)
    (let [label-name [(format-id-for-looset link)":"]
          children (map #(str "\n  "(format-id-for-looset %)) (:categories-links link))]
      (str/join (concat label-name children ["\n\n"])))))

(defn format-id-name-for-looset [link]
  (str (format-id-for-looset link)" {:name \""(:text link)"\"}"))

(process-wikipedia-page "https://en.wikipedia.org/wiki/Category_theory")

(defn include-category [acc st]
  (if (re-find #"\/wiki\/Category:" st)
    (into acc [(str/replace st #"Category:" "") st])
    (into acc [(link->category-url {:full-url st}) st])))

#_{:clj-kondo/ignore [:unresolved-namespace]}
(defn assoc-mentions [link comparison-list]
  (try
    (let [to-compare (->> comparison-list (flatten-hierarchy :categories-links) (map :href))
          to-compare-with-category (set (reduce include-category [] to-compare)) ;; Because maybe the page mentions the url, but in the category page.
          page-url (if (:page-url link) (:page-url link) (str/replace (:full-url link) #"Category:" ""))
          mentioned-urls (some->> page-url (process-wikipedia-page) (map :href) (set))
          found-mentions-urls (clojure.set/intersection to-compare-with-category mentioned-urls)
          found-mentions (map #(str/replace (str/replace % #"Category:" "") #"\/wiki\/" "") found-mentions-urls)
          deduped-mentions (vec (set (remove #{(str/replace (:href link) #"\/wiki\/" "")} found-mentions)))]
      (if found-mentions
        (assoc link :mentions deduped-mentions)
        link))
    (catch Exception _e
      link))) ;; Don't change link if there was an error (probably in fetching the page).
        
;; ;; Reading and writing files
;; (spit "take2.5-with-leaf-mentions" (with-out-str (pprint re)))
;; (edn/read-string (slurp "take2"))
;; (count (filter #(nil? (:mentions %)) (flatten-hierarchy :categories-links re)))
;; (count (filter #(nil? (:mentions %)) (flatten-hierarchy :categories-links re2)))
;; (count (filter #(nil? (:mentions %)) (flatten-hierarchy :categories-links (edn/read-string (slurp "take2.5")))))

(defn include-mentions
  ([links-or-link] (include-mentions links-or-link links-or-link))
  ([links-or-link all-links]
   (if (sequential? links-or-link)
     (map #(include-mentions % all-links) links-or-link)
     (-> links-or-link
       (cond-> (:categories-links links-or-link) (update :categories-links #(include-mentions % all-links))) ;; If it has categories-links, process them as well.
       (cond-> (and
                 (not= :none (:page-url links-or-link)) ;; There are some categories that simply don't have a related page, they won't add mentions.
                 (nil? (:mentions links-or-link)))
         (assoc-mentions all-links)))))) ;; Assoc mentions if it doesn't have this info yet.

(defn include-mentions-2
  "To simplify the graph, I'm creating this version that include mentions only in leafs."
  ([links-or-link] (include-mentions-2 links-or-link links-or-link))
  ([links-or-link all-links]
   (cond
     (sequential? links-or-link)
     (map #(include-mentions-2 % all-links) links-or-link)

     (:categories-links links-or-link)
     (update links-or-link :categories-links #(include-mentions-2 % all-links)) ;; If it has categories-links, process them without including mentions.

     (= :none (:page-url links-or-link)) ;; There are some categories that simply don't have a related page, they won't add mentions.
     links-or-link

     (:mentions links-or-link) ;; Do not reprocess if mentions were already included.
     links-or-link

     :else
     (assoc-mentions links-or-link (remove :categories-links (flatten-hierarchy-2 :categories-links all-links))))))

;; (count (remove :categories-links (flatten-hierarchy-2 :categories-links (edn/read-string (slurp "take2")))))
;; (reduce + (sort (map count (map :mentions (remove :categories-links (flatten-hierarchy-2 :categories-links (edn/read-string (slurp "take4"))))))))
;; (reduce + (map #(if (> % 10) 10 %) (sort (map count (map :mentions (remove :categories-links (flatten-hierarchy-2 :categories-links (edn/read-string (slurp "take4")))))))))
;; (count (filter :mentions (flatten-hierarchy-2 :categories-links (edn/read-string (slurp "take4")))))
;; (sort (map count (map :categories-links (mapcat :categories-links (edn/read-string (slurp "take2.5"))))))
;; (map :text (reverse (sort-by #(count (:categories-links %)) (mapcat :categories-links (edn/read-string (slurp "take2.3"))))))
;; (filter #(> (count (:categories-links %)) 10) (mapcat :categories-links (mapcat :categories-links (edn/read-string (slurp "take2.3")))))

(defn link->looset-edges [link idmap-of-links]
  (map #(str (format-id-for-looset link)" -> "(format-id-for-looset (get idmap-of-links %))) (:mentions link)))

(defn looset-edges [links]
  (let [flattened-links (flatten-hierarchy-2 :categories-links links)
        idmap-of-links (reduce #(assoc %1 (format-id-for-looset-no-label %2) %2) {} flattened-links)
        edges (mapcat #(link->looset-edges % idmap-of-links) flattened-links)]
    (interleave (cycle "\n") edges)))

(defn looset-edges-2
  "This version limits the edges to 10 to attempt to reduce the memory issue loading the graph"
  [links]
  (let [flattened-links (flatten-hierarchy-2 :categories-links links)
        less-mentions #(take 10 %)
        with-less-mentions (map #(if-not (:mentions %) % (update % :mentions less-mentions)) flattened-links)
        idmap-of-links (reduce #(assoc %1 (format-id-for-looset-no-label %2) %2) {} with-less-mentions)
        edges (mapcat #(link->looset-edges % idmap-of-links) with-less-mentions)]
    (interleave (cycle "\n") edges)))

(defn remove-nth-level
  "I'm decreasing one level of the :category-links.. I could generate again
  with minus one level, but I found it safer or easier to just remove from what
  I have."
  [coll key level]
  (cond
    (sequential? coll)
    (map #(remove-nth-level % key level) coll)

    (nil? (key coll))
    coll
    
    (zero? level)
    (dissoc coll key)

    :else
    (update coll key remove-nth-level key (dec level))))

(defn limit-key-elements
  [coll key limit]
  (cond
    (sequential? coll)
    (map #(limit-key-elements % key limit) (take limit coll))

    (nil? (key coll))
    coll

    :else
    (update coll key limit-key-elements key limit)))

(comment ;; This is taking the file with the links structure and creating the
         ;; looset file.
  (let [links (edn/read-string (slurp "take2.5-with-leaf-mentions"))
        lv1 (map format-link-for-looset links)
        lv2 (->> links
              (mapcat :categories-links)
              (map format-link-for-looset))
        lv3 (->> links
              (mapcat :categories-links)
              (mapcat :categories-links)
              (map format-link-for-looset))
        name-defs (->> links
                    (flatten-hierarchy-2 :categories-links)
                    (map format-id-name-for-looset)
                    (interleave (cycle "\n")))
        edges (looset-edges links)]
    (->> (concat lv1 lv2 lv3  edges ["\n\n"] name-defs)
      (str/join)
      (spit "take2.5-looset"))))

{:text "Foundations",
 :href "/wiki/Foundations_of_mathematics",
 :full-url "https://en.wikipedia.org/wiki/Foundations_of_mathematics",
 :categories-links
 '({:text "Theorems in the foundations of mathematics",
    :href "/wiki/Category:Theorems_in_the_foundations_of_mathematics",
    :full-url
    "https://en.wikipedia.org/wiki/Category:Theorems_in_the_foundations_of_mathematics"}
   {:text "Foundations of mathematics journals",
    :href "/wiki/Category:Foundations_of_mathematics_journals",
    :full-url
    "https://en.wikipedia.org/wiki/Category:Foundations_of_mathematics_journals"
    :mentions ["Foundations_of_mathematics"]})}

[
   {:text     "Foundations"
    :href     "/wiki/Foundations_of_mathematics"
    :full-url "https://en.wikipedia.org/wiki/Foundations_of_mathematics"
    :categories-links
    [{:text     "Category theory"
      :href     "/wiki/Category_theory"
      :full-url "https://en.wikipedia.org/wiki/Category_theory"}
     {:text     "Information theory"
      :href     "/wiki/Information_theory"
      :full-url "https://en.wikipedia.org/wiki/Information_theory"}
     {:text     "Mathematical logic"
      :href     "/wiki/Mathematical_logic"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_logic"}
     {:text     "Philosophy of mathematics"
      :href     "/wiki/Philosophy_of_mathematics"
      :full-url "https://en.wikipedia.org/wiki/Philosophy_of_mathematics"}
     {:text     "Set theory"
      :href     "/wiki/Set_theory"
      :full-url "https://en.wikipedia.org/wiki/Set_theory"}
     {:text     "Type theory"
      :href     "/wiki/Type_theory"
      :full-url "https://en.wikipedia.org/wiki/Type_theory"}]}

   {:text "Algebra" :href "/wiki/Algebra" :full-url "https://en.wikipedia.org/wiki/Algebra"
    :categories-links
    [{:text     "Abstract"
      :href     "/wiki/Abstract_algebra"
      :full-url "https://en.wikipedia.org/wiki/Abstract_algebra"}
     {:text     "Commutative"
      :href     "/wiki/Commutative_algebra"
      :full-url "https://en.wikipedia.org/wiki/Commutative_algebra"}
     {:text     "Elementary"
      :href     "/wiki/Elementary_algebra"
      :full-url "https://en.wikipedia.org/wiki/Elementary_algebra"}
     {:text     "Group theory"
      :href     "/wiki/Group_theory"
      :full-url "https://en.wikipedia.org/wiki/Group_theory"}
     {:text     "Linear"
      :href     "/wiki/Linear_algebra"
      :full-url "https://en.wikipedia.org/wiki/Linear_algebra"}
     {:text     "Multilinear"
      :href     "/wiki/Multilinear_algebra"
      :full-url "https://en.wikipedia.org/wiki/Multilinear_algebra"}
     {:text     "Universal"
      :href     "/wiki/Universal_algebra"
      :full-url "https://en.wikipedia.org/wiki/Universal_algebra"}
     {:text     "Homological"
      :href     "/wiki/Homological_algebra"
      :full-url "https://en.wikipedia.org/wiki/Homological_algebra"}]}

   {:text     "Analysis"
    :href     "/wiki/Mathematical_analysis"
    :full-url "https://en.wikipedia.org/wiki/Mathematical_analysis"
    :categories-links []
     {:text "Calculus" :href "/wiki/Calculus" :full-url "https://en.wikipedia.org/wiki/Calculus"}
     {:text     "Real analysis"
      :href     "/wiki/Real_analysis"
      :full-url "https://en.wikipedia.org/wiki/Real_analysis"}
     {:text     "Complex analysis"
      :href     "/wiki/Complex_analysis"
      :full-url "https://en.wikipedia.org/wiki/Complex_analysis"}
     {:text     "Hypercomplex analysis"
      :href     "/wiki/Hypercomplex_analysis"
      :full-url "https://en.wikipedia.org/wiki/Hypercomplex_analysis"}
     {:text     "Differential equations"
      :href     "/wiki/Differential_equation"
      :full-url "https://en.wikipedia.org/wiki/Differential_equation"}
     {:text     "Functional analysis"
      :href     "/wiki/Functional_analysis"
      :full-url "https://en.wikipedia.org/wiki/Functional_analysis"}
     {:text     "Harmonic analysis"
      :href     "/wiki/Harmonic_analysis"
      :full-url "https://en.wikipedia.org/wiki/Harmonic_analysis"}
     {:text     "Measure theory"
      :href     "/wiki/Measure_(mathematics)"
      :full-url "https://en.wikipedia.org/wiki/Measure_(mathematics)"}}

   {:text     "Discrete"
    :href     "/wiki/Discrete_mathematics"
    :full-url "https://en.wikipedia.org/wiki/Discrete_mathematics"
    :categories-links
    [{:text     "Combinatorics"
      :href     "/wiki/Combinatorics"
      :full-url "https://en.wikipedia.org/wiki/Combinatorics"}
     {:text     "Graph theory"
      :href     "/wiki/Graph_theory"
      :full-url "https://en.wikipedia.org/wiki/Graph_theory"}
     {:text     "Order theory"
      :href     "/wiki/Order_theory"
      :full-url "https://en.wikipedia.org/wiki/Order_theory"}]}

   {:text "Geometry" :href "/wiki/Geometry" :full-url "https://en.wikipedia.org/wiki/Geometry"
    :categories-links
    [{:text     "Algebraic"
      :href     "/wiki/Algebraic_geometry"
      :full-url "https://en.wikipedia.org/wiki/Algebraic_geometry"}
     {:text     "Analytic"
      :href     "/wiki/Analytic_geometry"
      :full-url "https://en.wikipedia.org/wiki/Analytic_geometry"}
     {:text     "Arithmetic"
      :href     "/wiki/Arithmetic_geometry"
      :full-url "https://en.wikipedia.org/wiki/Arithmetic_geometry"}
     {:text     "Differential"
      :href     "/wiki/Differential_geometry"
      :full-url "https://en.wikipedia.org/wiki/Differential_geometry"}
     {:text     "Discrete"
      :href     "/wiki/Discrete_geometry"
      :full-url "https://en.wikipedia.org/wiki/Discrete_geometry"}
     {:text     "Euclidean"
      :href     "/wiki/Euclidean_geometry"
      :full-url "https://en.wikipedia.org/wiki/Euclidean_geometry"}
     {:text     "Finite"
      :href     "/wiki/Finite_geometry"
      :full-url "https://en.wikipedia.org/wiki/Finite_geometry"}]}

   {:text     "Number theory"
    :href     "/wiki/Number_theory"
    :full-url "https://en.wikipedia.org/wiki/Number_theory"
    :categories-links
    [{:text     "Arithmetic"
      :href     "/wiki/Arithmetic"
      :full-url "https://en.wikipedia.org/wiki/Arithmetic"}
     {:text     "Algebraic number theory"
      :href     "/wiki/Algebraic_number_theory"
      :full-url "https://en.wikipedia.org/wiki/Algebraic_number_theory"}
     {:text     "Analytic number theory"
      :href     "/wiki/Analytic_number_theory"
      :full-url "https://en.wikipedia.org/wiki/Analytic_number_theory"}
     {:text     "Diophantine geometry"
      :href     "/wiki/Diophantine_geometry"
      :full-url "https://en.wikipedia.org/wiki/Diophantine_geometry"}]}

   {:text "Topology" :href "/wiki/Topology" :full-url "https://en.wikipedia.org/wiki/Topology"
    :categories-links
    [{:text     "General"
      :href     "/wiki/General_topology"
      :full-url "https://en.wikipedia.org/wiki/General_topology"}
     {:text     "Algebraic"
      :href     "/wiki/Algebraic_topology"
      :full-url "https://en.wikipedia.org/wiki/Algebraic_topology"}
     {:text     "Differential"
      :href     "/wiki/Differential_topology"
      :full-url "https://en.wikipedia.org/wiki/Differential_topology"}
     {:text     "Geometric"
      :href     "/wiki/Geometric_topology"
      :full-url "https://en.wikipedia.org/wiki/Geometric_topology"}
     {:text     "Homotopy theory"
      :href     "/wiki/Homotopy_theory"
      :full-url "https://en.wikipedia.org/wiki/Homotopy_theory"}]}

   {:text     "Applied"
    :href     "/wiki/Applied_mathematics"
    :full-url "https://en.wikipedia.org/wiki/Applied_mathematics"
    :categories-links
    [{:text     "Engineering mathematics"
      :href     "/wiki/Engineering_mathematics"
      :full-url "https://en.wikipedia.org/wiki/Engineering_mathematics"}
     {:text     "Mathematical biology"
      :href     "/wiki/Mathematical_and_theoretical_biology"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_and_theoretical_biology"}
     {:text     "Mathematical chemistry"
      :href     "/wiki/Mathematical_chemistry"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_chemistry"}
     {:text     "Mathematical economics"
      :href     "/wiki/Mathematical_economics"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_economics"}
     {:text     "Mathematical finance"
      :href     "/wiki/Mathematical_finance"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_finance"}
     {:text     "Mathematical physics"
      :href     "/wiki/Mathematical_physics"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_physics"}
     {:text     "Mathematical psychology"
      :href     "/wiki/Mathematical_psychology"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_psychology"}
     {:text     "Mathematical sociology"
      :href     "/wiki/Mathematical_sociology"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_sociology"}
     {:text     "Mathematical statistics"
      :href     "/wiki/Mathematical_statistics"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_statistics"}
     {:text     "Probability"
      :href     "/wiki/Probability_theory"
      :full-url "https://en.wikipedia.org/wiki/Probability_theory"}
     {:text     "Statistics"
      :href     "/wiki/Statistics"
      :full-url "https://en.wikipedia.org/wiki/Statistics"}
     {:text     "Systems science"
      :href     "/wiki/Systems_science"
      :full-url "https://en.wikipedia.org/wiki/Systems_science"}
     {:text     "Control theory"
      :href     "/wiki/Control_theory"
      :full-url "https://en.wikipedia.org/wiki/Control_theory"}
     {:text     "Game theory"
      :href     "/wiki/Game_theory"
      :full-url "https://en.wikipedia.org/wiki/Game_theory"}
     {:text     "Operations research"
      :href     "/wiki/Operations_research"
      :full-url "https://en.wikipedia.org/wiki/Operations_research"}]}

   {:text     "Computational"
    :href     "/wiki/Computational_mathematics"
    :full-url "https://en.wikipedia.org/wiki/Computational_mathematics"
    :categories-links
    [{:text     "Computer science"
      :href     "/wiki/Computer_science"
      :full-url "https://en.wikipedia.org/wiki/Computer_science"}
     {:text     "Theory of computation"
      :href     "/wiki/Theory_of_computation"
      :full-url "https://en.wikipedia.org/wiki/Theory_of_computation"}
     {:text     "Computational complexity theory"
      :href     "/wiki/Computational_complexity_theory"
      :full-url "https://en.wikipedia.org/wiki/Computational_complexity_theory"}
     {:text     "Numerical analysis"
      :href     "/wiki/Numerical_analysis"
      :full-url "https://en.wikipedia.org/wiki/Numerical_analysis"}
     {:text     "Optimization"
      :href     "/wiki/Mathematical_optimization"
      :full-url "https://en.wikipedia.org/wiki/Mathematical_optimization"}
     {:text     "Computer algebra"
      :href     "/wiki/Computer_algebra"
      :full-url "https://en.wikipedia.org/wiki/Computer_algebra"}]}]


;; (map :text links)

