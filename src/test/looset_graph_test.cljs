(ns looset-graph-test
  (:require
    [cljs.test :as t :refer [deftest testing is]]
    [looset-graph.app :as app]
    [looset-graph.graph-parser :as graph-parser]))

(deftest descriptions-example
  (testing "testing description"
    (is (= 1 2)
        "'Should be' description")))

(deftest nodes-with-no-parent
  (is (= {"label1" {"node5" {}, "node1" {}, "node2" {}},
          "label2" {"node5" {}, "soAndOnLabel2" {}},
          "nodeA" {},
          "nodeB" {},
          "so" {},
          "soAndOnLabel2" {},
          "soAndOnNode3" {}
          "node3" {"node5" {}, "node4" {}}}
         (->> "=>label1:
                 node1
                 node2
                 node5

               =>label2:
                 node5
                 soAndOnLabel2

               node3:
                 node4
                 node5
                 soAndOnNode3

               so:

               soAndOnLabel2:

               soAndOnNode3:

               node1 -> node2
               node4->node1
               nodeA->nodeB"
           (graph-parser/graph-ast)
           ;; (#(do (tap> {:ast %}) %))
           (app/graph-ast->nodes-map)
           ;; (#(do (tap> {:nodes-map %}) %))
           (app/nodes-hierarchy)))))
           ;; (#(do (tap> {:nodes-hierarchy-from-test %}) %))
