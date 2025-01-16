(ns looset-graph-test
  (:require
    [cljs.test :as t :refer [deftest #_testing is async]]
    [looset-graph.app :as app]
    [re-frame.alpha :as re-frame]
    [day8.re-frame.test :as re-frame.test]
    [looset-graph.graph-parser :as graph-parser]
    [re-frame.db]))

(set! js/gtag (constantly nil))

;; (require '[re-frame.db])
;; (keys @re-frame.db/app-db)
;; (keys (:f-visible-nodes (:ui @re-frame.db/app-db)))

(deftest folding
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          selected-nodes (re-frame/subscribe [::app/selected-nodes])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (re-frame/dispatch [:looset-graph.app/hide-all-or-selected])
      (is (= #{} @selected-nodes))
      (is (= #{} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node4"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node5"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node8"]])
      (re-frame/dispatch [:looset-graph.app/show-selected])
      (is (= #{"node3" "node4" "node5" "node7" "node8"} @selected-nodes))
      (is (= #{"node3" "node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node3" "node4" "node5" "node8"} @selected-nodes))
      (is (= #{"node5" "node4" "node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node3" "node4" "node5" "node7" "node8"} @selected-nodes))
      (is (= #{"node5" "node4" "node8"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/collapse-all-or-selected])
      (is (= #{"node4" "node5" "node7" "node8"} @selected-nodes))
      (is (= #{"node5" "node4" "node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node4"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node5"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node8"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node3" "node7"} @selected-nodes))
      (is (= #{"node4" "node5" "node8"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/collapse-all-or-selected])
      (is (= #{} @selected-nodes))
      (is (= #{"node3" "node7"} @sub-under-test)))))


(deftest hiding-multiple
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= 8 (count @sub-under-test)))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/hide-all-or-selected])
      (is (= 6 (count @sub-under-test)))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/show-selected])
      (is (= 7 (count @sub-under-test))))))

(deftest hide-all
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= 8 (count @sub-under-test)))
      (re-frame/dispatch [:looset-graph.app/hide-all-or-selected])
      (is (= 0 (count @sub-under-test))))))

(deftest node-selection
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/selected-nodes])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (is (= #{"node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label3"]])
      (is (= #{"node7" "label3"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (is (= #{"label3"} @sub-under-test)))))


;; I wanted to test the click-hierarchy-layout as well, but it relies in vis-network to define
;; the nodes positions and than I get the positions and set it through re-frame, so I can test
;; this behavior so easily.

(deftest click-default-layout
  (re-frame.test/run-test-sync
    (let [node7-position #(-> @re-frame.db/app-db :domain :nodes-map (get "node7") :position)
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= {"x" 47, "y" -200}
             (node7-position)))
      (re-frame/dispatch [::app/clear-nodes-positions])
      (is (nil? (node7-position))))))

(deftest toggle-node-visibility
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= "node7" (@sub-under-test "node7")))
      (re-frame/dispatch [::app/toggle-hidden "node7"])
      (is (nil? (@sub-under-test "node7"))))))


(deftest drag-node
  (re-frame.test/run-test-sync
    (let [node7-position #(-> @re-frame.db/app-db :domain :nodes-map (get "node7") :position)
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= {"x" 47, "y" -200}
             (node7-position)))
      (re-frame/dispatch [:looset-graph.app/drag-changed true])
      (re-frame/dispatch [:looset-graph.app/set-nodes-positions-hierarchy {:dragging? false, :nodes-positions* {"label1" {"x" -47, "y" 100}, "nodeB" {"x" -164, "y" -100}, "node6" {"x" -139, "y" 100}, "label5" {"x" 9, "y" 0}, "label2" {"x" 81, "y" -100}, "node7" {"x" -110, "y" -252}, "nodeA" {"x" -156, "y" 0}, "label4" {"x" -24, "y" -100}, "label6" {"x" 45, "y" -100}, "label7" {"x" 131, "y" 0}, "label3" {"x" 39, "y" 0}, "node3" {"x" 164, "y" 100}, "node9" {"x" 1, "y" -100}}, :view-position #js {:x -0.3879394531248308, :y -75.45377976728982}, :scale 1.136826626375981}])
      (re-frame/dispatch [:looset-graph.app/mouse-up false])
      (is (= {"x" -110, "y" -300}
             (node7-position))))))

;; Avoiding the Promise by not using the compressed graph-text is an ok approach in the meanwhile.
(deftest set-graph-text
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/nodes-map])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\nnode6:\n  node7\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= ["label1" "nodeB" "node6" "label5" "label2" "node8" "node7" "node10" "node5" "nodeA" "label4" "label6" "label7" "node4" "node1" "node2" "label3" "node3" "node9"]
             (keys @sub-under-test))))))

;; This also doesn't work with hot reload.
;; But it seems that when I'm hot reloading the app code, it does work correctly..
;; (deftest t4
;;   (async done
;;     (let [fold-ui (re-frame/subscribe [::app/vis-data])
;;           input-graph-text (app/gzip-decompress (js/atob (js/decodeURIComponent "H4sIAAAAAAAAA22RTQqDMBCF9zlFcF0h%2FzGCgt6kpS4E0UK7aBHvXoyZaJiskjf55r0Zbdrp%2FhgmXhNK5%2BU58HCKcGpC9sPAuyWkOVr0Xgp3E6uiThsr0O7QFnR1dp%2BeCl5lLJlLjI5Ve84LJZlbAXyP8IiodEgXW1m047Rsfc14pAPZe6lAci8jLC79a%2F1a3uNnXGa6Ft%2BClqK60eJXULZtvqtHiBMpYbAJF%2FZgONsp%2BDIY1Pr0gp%2BTsXNpYoURGcYuJQOqy8QZFKcQxRUPXsn0uTWZyZEWkdLmOIk4q9NFMREjAXF4LAdTCZ%2F2B25%2Bd8o%2BAwAA")))]
;;       (.then input-graph-text
;;         #(do
;;            (re-frame/dispatch-sync [::app/set-app-state %])
;;            (is (= {:nodes [] :edges []} @fold-ui)) ;; It shouldn't be empty.
;;            (done))))))

;; If I don't use re-frame, the hot reload works..
(deftest t3
  (async done
    (let [my-atom (atom 0)
          my-prom (js/Promise. (fn [res _rej]
                                 (js/setTimeout
                                   #(do
                                      (swap! my-atom inc)
                                      (res))
                                   300)))]
      (.then my-prom #(do
                        (is (= 1 @my-atom))
                        (done))))))

;; Don't work with hot reload..
(deftest t2
  (async done
    (let [fold-ui (re-frame/subscribe [::app/vis-data])
          input-graph-text (app/gzip-decompress (js/atob (js/decodeURIComponent "H4sIAAAAAAAAA22RTQqDMBCF9zlFcF0h%2FzGCgt6kpS4E0UK7aBHvXoyZaJiskjf55r0Zbdrp%2FhgmXhNK5%2BU58HCKcGpC9sPAuyWkOVr0Xgp3E6uiThsr0O7QFnR1dp%2BeCl5lLJlLjI5Ve84LJZlbAXyP8IiodEgXW1m047Rsfc14pAPZe6lAci8jLC79a%2F1a3uNnXGa6Ft%2BClqK60eJXULZtvqtHiBMpYbAJF%2FZgONsp%2BDIY1Pr0gp%2BTsXNpYoURGcYuJQOqy8QZFKcQxRUPXsn0uTWZyZEWkdLmOIk4q9NFMREjAXF4LAdTCZ%2F2B25%2Bd8o%2BAwAA")))]
      (-> input-graph-text
        (.then #(re-frame/dispatch-sync [::app/set-app-state %]))
        (.then
          (js/Promise.
            (fn [res _rej]
              (js/setTimeout
                #(do
                  (is (= {:nodes [] :edges []} @fold-ui)) ;; It shouldn't be empty.
                  (res)
                  (done))
                500))))))))

;; This one works with hot reload, but again, no re-frame.
(deftest t1
  (async done
    (let [y (app/gzip-decompress (js/atob "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"))]
      (.then y #(do
                  (is (re-find #"=>FilhosDe" %))
                  (done))))))

(deftest resizing-panel
  (re-frame.test/run-test-sync
    (let [left-panel-size (re-frame/subscribe [::app/left-panel-size])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\nnode6:\n  node7\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= "65vw" @left-panel-size))
      (re-frame/dispatch [:looset-graph.app/resizing-panels true])
      (re-frame/dispatch [:looset-graph.app/mouse-moved 931 707])
      (re-frame/dispatch [:looset-graph.app/mouse-up false])
      (is (= "931px" @left-panel-size)))))

(deftest open-node
  (re-frame.test/run-test-sync
    (let [fold-ui (re-frame/subscribe [::app/fold-ui])
          input-graph-text "=>label1:\n  node1\n  node2\n  node5\n\nnode6:\n  node7\n\n=>label5:\n  =>label6\n\n=>label2:\n  node5\n\nnode8:\n  node9\n\nnode7:\n  node8\n  =>label7\n\n=>label6:\n  =>label5\n\n=>label7:\n  node1\n\n=>label3:\n  node1\n  node2\n  =>label4\n\nnode3:\n  node4\n  node5\n\nnode9:\n  node10\n\n=>label1 -> node6\nnodeA -> nodeB\nnode4 -> node1\nnode1 -> node2\n\n=>label1 {:position {\"x\" -47, \"y\" 100}}\nnodeB {:position {\"x\" -164, \"y\" -100}}\nnode6 {:position {\"x\" -139, \"y\" 100}}\n=>label5 {:position {\"x\" 9, \"y\" 0}}\n=>label2 {:position {\"x\" 81, \"y\" -100}}\nnode7 {:position {\"x\" 47, \"y\" -200}}\nnodeA {:position {\"x\" -156, \"y\" 0}}\n=>label4 {:position {\"x\" -24, \"y\" -100}}\n=>label6 {:position {\"x\" 45, \"y\" -100}}\n=>label7 {:position {\"x\" 131, \"y\" 0}}\n=>label3 {:position {\"x\" 39, \"y\" 0}}\nnode3 {:position {\"x\" 164, \"y\" 100}}\nnode9 {:position {\"x\" 1, \"y\" -100}}\n"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= {} @fold-ui))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (is (= {"node7" {:opened? true}} @fold-ui)))))

(deftest nodes-with-multi-level-parents
  (is (= {"label1" {"node1" {"node7" {"node8" {}}}, "node2" {}},
          "label2" {"node1" {"node7" {"node8" {}}}},
          "node3" {"node4" {"node6" {}} "node5" {}}}
         (->> "=>label1:
                 node1
                 node2

               =>label2:
                 node1

               node1:
                 node7

               node7:
                 node8

               node3:
                 node4
                 node5

               node4:
                 node6
               "
           (graph-parser/graph-ast)
           ;; (#(do (tap> {:ast %}) %))
           (#(app/nodes-map* {:graph-ast %}))
           (#(do (tap> {:nodes-map %}) %))
           (app/nodes-hierarchy)))))
           ;; (#(do (tap> {:nodes-hierarchy-from-test %}) %))))))

(deftest nodes-with-no-parent-fixed
  (is (= {"label1" {"node5" {}, "node1" {}, "node2" {}},
          "label2" {"node5" {}, "soAndOnLabel2" {}},
          "nodeA" {},
          "nodeB" {},
          "so" {},
          "node3" {"node5" {}, "node4" {}, "soAndOnNode3" {}}}
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
           ;; (#(do (tap> {:nodes-map* %}) %))
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
