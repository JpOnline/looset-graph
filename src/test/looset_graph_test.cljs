(ns looset-graph-test
  (:require
    [cljs.test :as t :refer [deftest testing is]]
    [looset-graph.app :as app]
    [looset-graph.graph-parser :as graph-parser]))

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
           (#(app/nodes-map* {:graph-ast %}))
           (#(do (tap> {:nodes-map %}) %))
           (app/nodes-hierarchy)))))
           ;; (#(do (tap> {:nodes-hierarchy-from-test %}) %))))))

(deftest node-and-label
  (is (= {"label1" {"node1" {}, "node2" {}},
          "node3" {"node4" {}, "node5" {}}}
         (->>"=>label1:
                node1
                node2;

              node3:
                node4
                node5;

              node1 -> node2;"
           (graph-parser/graph-ast)
           ;; (#(do (tap> {:ast %}) %))
           (#(app/nodes-map* {:graph-ast %}))
           ;; (#(do (tap> {:nodes-map %}) %))
           (app/nodes-hierarchy)))))
           ;; (#(do (tap> {:nodes-hierarchy-from-test %}) %))))))
