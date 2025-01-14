(ns looset-graph-test
  (:require
    [cljs.test :as t :refer [deftest testing is async]]
    [looset-graph.app :as app]
    [re-frame.alpha :as re-frame]
    [day8.re-frame.test :as re-frame.test]
    [looset-graph.graph-parser :as graph-parser]
    [shadow.cljs.modern :refer (js-await)]))

(set! js/gtag (constantly nil))

(deftest x4
  (re-frame.test/run-test-sync
    (let [graph-text (re-frame/subscribe [::app/graph-text])
          fold-ui (re-frame/subscribe [::app/fold-ui])
          input-graph-text (app/gzip-decompress (js/atob "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"))]
      ;; (re-frame/dispatch [::app/set-app-state (get-in app/initial-state [:domain :graph-text])])
      (.then input-graph-text #(re-frame/dispatch [::app/set-app-state %]))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["FilhosDeNenaESebastiao"]])
      (is (= 4 @graph-text))
      (is (= 5 @fold-ui)))))

(deftest x3
  (re-frame.test/run-test-sync
    (let [left-panel-size (re-frame/subscribe [::app/left-panel-size])
          nodes-ui (re-frame/subscribe [::app/graph-text])
          graph-text (app/gzip-decompress (js/atob "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"))]
      (is (= 1 @left-panel-size))
      (.then (app/gzip-decompress (js/atob "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"))
             #(do
                (re-frame/dispatch [::app/set-app-state (get-in app/initial-state [:domain :graph-text])])
                ;; (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["FilhosDeNenaESebastiao"]])
                (is (= 2 @left-panel-size))
                (is (= 3 @nodes-ui))
                (is (= 1 %)))))))
      ;; (is (= 1 graph-text))))))

(deftest x
  (async done
    (js-await [graph-text (app/gzip-decompress (js/atob "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"))]
      (let [z (app/set-graph-text app/initial-state [:t graph-text])]
            ;; z (re-frame/dispatch-sync [:app/set-app-state graph-text])]
        (is (= 1 (keys (:ui z))))
        (done)))))

(deftest x2
  (async done
    (js-await [y (app/gzip-decompress (js/atob "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"))]
       (js/console.log y)
       (is (= 1 y))
       (done))))

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
