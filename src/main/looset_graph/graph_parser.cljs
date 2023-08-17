(ns looset-graph.graph-parser
  (:require
    ["antlr4" :as antlr4]
    ["loosetGraphLexer" :as lexer]
    ["loosetGraphParser" :as parser]))

(defn- parser-rule-meta
  [^ParserRuleContext this]
  (let [start ^js (.-start this)
        stop  ^js (.-stop this)]
    (if (nil? stop)
      ;; no end found - happens on errors
      {:start {:row    (.-line start)
               :column (.-column start)}}
      {:start {:row    (.-line start)
               :column (.-column start)}
       :end   {:row    (.-line stop)
               :column (+ (.-column stop)
                          (count (.-text stop)))}})))

(defn- ast
  [tree rule-names token-types hide-tags hide-literals]
  (cond
    (some? (.-children tree))
    (let [meta     (parser-rule-meta tree)
          rule     (get rule-names (.-ruleIndex tree))
          children (sequence (comp (map #(ast % rule-names token-types hide-tags hide-literals))
                                   (remove nil?))
                             (.-children tree))]
      (if (contains? hide-tags rule)
        nil
        ;; attach meta data ... ala instaparse
        (with-meta (cons rule children) meta)))

    ^boolean (.-isErrorNode tree)
    (let [token ^js (.-symbol tree)]
      (with-meta (list :failure (:content (str tree)))
                 {:start {:row    (.getLine token)
                          :column (.getCharPositionInLine token)}}))

    :else
    (let [content (str tree)
          token-type (get token-types (.-type (.-symbol tree)))]
      (when-not (contains? hide-literals content)
        [token-type content]))))

(defn graph-ast [graph-text]
  (let [chrs (new (.-InputStream antlr4) graph-text)
        lxr (new (.-default ^js lexer) chrs)
        tokens (new (.-CommonTokenStream antlr4) lxr)
        prsr (new (.-default ^js parser) tokens)
        _ (set! (.-buildParseTrees prsr) true)
        tree ^js/LoosetGraphContext (.loosetGraph prsr)
        to-hide #{"->" ":" "=>"}]
    (clj->js (ast tree (mapv keyword ^js(.-ruleNames prsr)) (mapv keyword (.-symbolicNames prsr)) #{} to-hide))))
