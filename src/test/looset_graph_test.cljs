(ns looset-graph-test
  (:require
    [cljs.test :as t :refer [deftest testing is async]]
    [looset-graph.app :as app]
    [re-frame.alpha :as re-frame]
    [day8.re-frame.test :as re-frame.test]
    [looset-graph.graph-parser :as graph-parser]
    [re-frame.db]))

(set! js/gtag (constantly nil))

(deftest sort-by-prop-order-when-not-in-fold-area
  (testing "GIVEN z1 and z9 are not defined in the fold area
              AND z1 is mentioned before z9 in props area
            WHEN the fold-list is rendered
            THEN the order is that z1 show up before z9"
    (re-frame.test/run-test-sync
      (let [fold-ids-at-level (fn [level] (->> (get-in @re-frame.db/app-db [:flow-paths :f-fold-list]) (filter #(= level (:level %))) (mapv :node-id))) ;; Node ids of the fold list at the given nesting level, read from app-state.
            ;; outerLabel > midLix > 9 inner lixes (level 2), positions written in mentioned order.
            input-graph-text "=>outerLabel:
                               midLix
                             midLix:
                               z5
                               z3
                               z7
                               z2
                               z8
                               z4
                               z6

                             z9 -> z1

                             =>outerLabel {:opened? true}
                             midLix {:opened? true}
                             z5 {:position {\"x\" 0, \"y\" 0}}
                             z1 {:position {\"x\" 0, \"y\" 0}}
                             z9 {:position {\"x\" 0, \"y\" 0}}
                             z3 {:position {\"x\" 0, \"y\" 0}}
                             z7 {:position {\"x\" 0, \"y\" 0}}
                             z2 {:position {\"x\" 0, \"y\" 0}}
                             z8 {:position {\"x\" 0, \"y\" 0}}
                             z4 {:position {\"x\" 0, \"y\" 0}}
                             z6 {:position {\"x\" 0, \"y\" 0}}"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (is (= ["outerLabel" "z1" "z9"]
               (fold-ids-at-level 0))))))
  (testing "GIVEN z1 and z9 are not defined in the fold area
              AND z9 is mentioned before z1 in props area
            WHEN the fold-list is rendered
            THEN the order is that z9 show up before z1"
    (re-frame.test/run-test-sync
      (let [fold-ids-at-level (fn [level] (->> (get-in @re-frame.db/app-db [:flow-paths :f-fold-list]) (filter #(= level (:level %))) (mapv :node-id))) ;; Node ids of the fold list at the given nesting level, read from app-state.
            ;; outerLabel > midLix > 9 inner lixes (level 2), positions written in mentioned order.
            input-graph-text "=>outerLabel:
                               midLix
                             midLix:
                               z5
                               z3
                               z7
                               z2
                               z8
                               z4
                               z6

                             z9 -> z1

                             =>outerLabel {:opened? true}
                             midLix {:opened? true}
                             z5 {:position {\"x\" 0, \"y\" 0}}
                             z9 {:position {\"x\" 0, \"y\" 0}}
                             z1 {:position {\"x\" 0, \"y\" 0}}
                             z3 {:position {\"x\" 0, \"y\" 0}}
                             z7 {:position {\"x\" 0, \"y\" 0}}
                             z2 {:position {\"x\" 0, \"y\" 0}}
                             z8 {:position {\"x\" 0, \"y\" 0}}
                             z4 {:position {\"x\" 0, \"y\" 0}}
                             z6 {:position {\"x\" 0, \"y\" 0}}"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (is (= ["outerLabel" "z9" "z1"]
               (fold-ids-at-level 0)))))))

(deftest deep-inner-lixes-sorted-by-mentioned-order
  (testing "GIVEN z9 is mentioned before z1 in fold area
            WHEN the fold-list is rendered
            THEN the order is that z9 show up before z1"
    (re-frame.test/run-test-sync
      (let [fold-ids-at-level (fn [level] (->> (get-in @re-frame.db/app-db [:flow-paths :f-fold-list]) (filter #(= level (:level %))) (mapv :node-id))) ;; Node ids of the fold list at the given nesting level, read from app-state.
            ;; outerLabel > midLix > 9 inner lixes (level 2), positions written in mentioned order.
            input-graph-text "=>outerLabel:
                               midLix
                             midLix:
                               z9
                               z1
                               z5
                               z3
                               z7
                               z2
                               z8
                               z4
                               z6

                             =>outerLabel {:opened? true}
                             midLix {:opened? true}
                             z5 {:position {\"x\" 0, \"y\" 0}}
                             z9 {:position {\"x\" 0, \"y\" 0}}
                             z1 {:position {\"x\" 0, \"y\" 0}}
                             z3 {:position {\"x\" 0, \"y\" 0}}
                             z7 {:position {\"x\" 0, \"y\" 0}}
                             z2 {:position {\"x\" 0, \"y\" 0}}
                             z8 {:position {\"x\" 0, \"y\" 0}}
                             z4 {:position {\"x\" 0, \"y\" 0}}
                             z6 {:position {\"x\" 0, \"y\" 0}}"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (is (= ["z9" "z1" "z5" "z3" "z7" "z2" "z8" "z4" "z6"]
               (fold-ids-at-level 2))))))
  (testing "GIVEN z1 is mentioned before z9 in fold area
            WHEN the fold-list is rendered
            THEN the order is that z1 show up before z9"
    (re-frame.test/run-test-sync
      (let [fold-ids-at-level (fn [level] (->> (get-in @re-frame.db/app-db [:flow-paths :f-fold-list]) (filter #(= level (:level %))) (mapv :node-id))) ;; Node ids of the fold list at the given nesting level, read from app-state.
            ;; outerLabel > midLix > 9 inner lixes (level 2), positions written in mentioned order.
            input-graph-text "=>outerLabel:
                               midLix
                             midLix:
                               z1
                               z9
                               z5
                               z3
                               z7
                               z2
                               z8
                               z4
                               z6

                             =>outerLabel {:opened? true}
                             midLix {:opened? true}
                             z5 {:position {\"x\" 0, \"y\" 0}}
                             z9 {:position {\"x\" 0, \"y\" 0}}
                             z1 {:position {\"x\" 0, \"y\" 0}}
                             z3 {:position {\"x\" 0, \"y\" 0}}
                             z7 {:position {\"x\" 0, \"y\" 0}}
                             z2 {:position {\"x\" 0, \"y\" 0}}
                             z8 {:position {\"x\" 0, \"y\" 0}}
                             z4 {:position {\"x\" 0, \"y\" 0}}
                             z6 {:position {\"x\" 0, \"y\" 0}}"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (is (= ["z1" "z9" "z5" "z3" "z7" "z2" "z8" "z4" "z6"]
               (fold-ids-at-level 2)))))))

(deftest deeper-inner-lixes-sorted-by-mentioned-order
  (re-frame.test/run-test-sync
    (let [fold-ids-at-level (fn [level] (->> (get-in @re-frame.db/app-db [:flow-paths :f-fold-list]) (filter #(= level (:level %))) (mapv :node-id))) ;; Node ids of the fold list at the given nesting level, read from app-state.
          ;; topLabel > branchLix > leafLix > 9 inner lixes (level 3), positions written in mentioned order.
          input-graph-text "=>topLabel:
                             branchLix
                           branchLix:
                             leafLix
                           leafLix:
                             w5
                             w2
                             w8
                             w1
                             w6
                             w3
                             w9
                             w4
                             w7
                           =>topLabel {:opened? true}
                           branchLix {:opened? true}
                           leafLix {:opened? true}
                           w5 {:position {\"x\" 0, \"y\" 0}}
                           w2 {:position {\"x\" 0, \"y\" 0}}
                           w8 {:position {\"x\" 0, \"y\" 0}}
                           w1 {:position {\"x\" 0, \"y\" 0}}
                           w6 {:position {\"x\" 0, \"y\" 0}}
                           w3 {:position {\"x\" 0, \"y\" 0}}
                           w9 {:position {\"x\" 0, \"y\" 0}}
                           w4 {:position {\"x\" 0, \"y\" 0}}
                           w7 {:position {\"x\" 0, \"y\" 0}}"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= ["w5" "w2" "w8" "w1" "w6" "w3" "w9" "w4" "w7"]
             (fold-ids-at-level 3))))))

;; NOTE: Testing fold-list ordering requires >8 top-level nodes so the
;; hierarchy is a PersistentHashMap; a smaller PersistentArrayMap keeps
;; insertion order and hides bugs.
(deftest labels-stay-on-top-of-lixes
  (re-frame.test/run-test-sync
    (let [top-fold-order #(->> (get-in @re-frame.db/app-db [:flow-paths :f-fold-list]) (mapv :node-id))
          ;; 5 lixes then 5 labels; lix props are mentioned first, giving the
          ;; lixes the lowest :mentioned-order-prop values.
          input-graph-text "lixA:
                             c1
                           lixB:
                             c2
                           lixC:
                             c3
                           lixD:
                             c4
                           lixE:
                             c5
                           =>labelA:
                             c6
                           =>labelB:
                             c7
                           =>labelC:
                             c8
                           =>labelD:
                             c9
                           =>labelE:
                             c10
                           lixA {:position {\"x\" 0, \"y\" 0}}
                           lixB {:position {\"x\" 0, \"y\" 0}}
                           lixC {:position {\"x\" 0, \"y\" 0}}
                           lixD {:position {\"x\" 0, \"y\" 0}}
                           lixE {:position {\"x\" 0, \"y\" 0}}
                           =>labelA {:position {\"x\" 0, \"y\" 0}}
                           =>labelB {:position {\"x\" 0, \"y\" 0}}
                           =>labelC {:position {\"x\" 0, \"y\" 0}}
                           =>labelD {:position {\"x\" 0, \"y\" 0}}
                           =>labelE {:position {\"x\" 0, \"y\" 0}}"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= ["labelA" "labelB" "labelC" "labelD" "labelE"
              "lixA" "lixB" "lixC" "lixD" "lixE"]
             (top-fold-order))))))

(deftest labels-follow-mentioned-order-not-name
  (re-frame.test/run-test-sync
    (let [top-fold-order #(->> (get-in @re-frame.db/app-db [:flow-paths :f-fold-list]) (mapv :node-id))
          ;; 6 labels mentioned in reverse-alphabetical order, then 3 lixes.
          ;; Correct (pre-commit) order: the labels on top in their mentioned
          ;; (reverse-alphabetical) order, then the lixes.
          input-graph-text "=>zLbl:
                             a1
                           =>yLbl:
                             a2
                           =>xLbl:
                             a3
                           =>wLbl:
                             a4
                           =>vLbl:
                             a5
                           =>uLbl:
                             a6
                           p1:
                             b1
                           p2:
                             b2
                           p3:
                             b3
                           p1 {:position {\"x\" 0, \"y\" 0}}
                           p2 {:position {\"x\" 0, \"y\" 0}}
                           p3 {:position {\"x\" 0, \"y\" 0}}
                           =>zLbl {:position {\"x\" 0, \"y\" 0}}
                           =>yLbl {:position {\"x\" 0, \"y\" 0}}
                           =>xLbl {:position {\"x\" 0, \"y\" 0}}
                           =>wLbl {:position {\"x\" 0, \"y\" 0}}
                           =>vLbl {:position {\"x\" 0, \"y\" 0}}
                           =>uLbl {:position {\"x\" 0, \"y\" 0}}"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= ["zLbl" "yLbl" "xLbl" "wLbl" "vLbl" "uLbl" "p1" "p2" "p3"]
             (top-fold-order))))))

;; (require '[re-frame.db])
;; (keys @re-frame.db/app-db)
;; (keys (:f-visible-nodes (:ui @re-frame.db/app-db)))

;; (defn- submap?
;;   "Check if all keys and values of map1 are contained in map2."
;;   [map1 map2]
;;   (= map1 (select-keys map2 (keys map1))))

(deftest toggle-label-from-list
  (re-frame.test/run-test-sync
    (let [nodes-map (re-frame/subscribe [::app/nodes-map])
          input-graph-text "=>label1:
                              node1"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (false? (get-in @nodes-map ["label1" :opened?])))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label1"]])
      (is (true? (get-in @nodes-map ["label1" :opened?]))))))

(deftest node-labels-association
  (re-frame.test/run-test-sync
    (let [nodes-map (re-frame/subscribe [::app/nodes-map])
          input-graph-text "=>label1:
                              node1
                            =>label2:
                              node1
                            node1:
                              node2"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{"label1" "label2"} (get-in @nodes-map ["node1" :label]))))))

(deftest order-of-fold-definition-2
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "=>label1:
                              node2
                            node1:
                              node2
                            node2:
                              node3
                            =>label1 -> node1
                            node1 {:opened? true}
                            =>label1 {:hidden? true}"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{"node2"} @sub-under-test)))))

(deftest order-of-fold-definition
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "node1:
                              node2
                            node2:
                              node3
                            =>label1:
                              node2
                            =>label1 -> node1
                            node1 {:opened? true}
                            =>label1 {:hidden? true}"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{"node2"} @sub-under-test)))))

(deftest load-hidden-and-opened
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "node6:
                              node7
                            =>label1 -> node6
                            node6 {:opened? true}
                            =>label1 {:hidden? true}"]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{"node7"} @sub-under-test)))))

(deftest click-network
  (re-frame.test/run-test-sync
    (let [selected-nodes (re-frame/subscribe [::app/selected-nodes])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/network-clicked #{"node7"}])
      (is (= #{"node7"} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/network-clicked #{"node8"}])
      (is (= #{"node8"} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/network-clicked #{"node8"}])
      (is (= #{"node8"} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/network-clicked #{}])
      (is (= #{} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      (re-frame/dispatch [:looset-graph.app/network-clicked #{"node7"}])
      (is (= #{"node7"} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/network-clicked #{"node8"}])
      (is (= #{"node7" "node8"} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/network-clicked #{"node8"}])
      (is (= #{"node7"} @selected-nodes))
      (re-frame/dispatch [:looset-graph.app/network-clicked #{}])
      (is (= #{"node7"} @selected-nodes)))))

(deftest folding2
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          selected-nodes (re-frame/subscribe [::app/selected-nodes])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (re-frame/dispatch [:looset-graph.app/hide-all-or-selected])
      (is (= #{} @selected-nodes))
      (is (= #{} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      ;; Selecting node 3 and 7 and all inner nodes.
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      ;; Deselecting specific nodes
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node9"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label7"]])
      (re-frame/dispatch [:looset-graph.app/show-selected])
      (is (= #{"node3" "node4" "node5" "node7" "node8"} @selected-nodes))
      (is (= #{"node3" "node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node8"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node9"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node3" "node4" "node5" "node8"} @selected-nodes))
      (is (= #{"node5" "node4" "node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node9"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label7"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode false])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7" "node8"]])
      (is (= #{"node3" "node4" "node5" "node7" "node8"} @selected-nodes))
      (is (= #{"node5" "node4" "node8"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node4"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node5"]])
      (re-frame/dispatch [:looset-graph.app/collapse-all-or-selected])
      (is (= #{"node4" "node5" "node7" "node8"} @selected-nodes))
      (is (= #{"node5" "node4" "node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node4"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node5"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node8"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node8"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node3" "node7"} @selected-nodes))
      (is (= #{"node4" "node5" "node8"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/collapse-all-or-selected])
      (is (= #{} @selected-nodes))
      (is (= #{"node3" "node7"} @sub-under-test)))))

(deftest folding
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          selected-nodes (re-frame/subscribe [::app/selected-nodes])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
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
      (is (= #{"node3" "node7" "label7" "node1"} @selected-nodes))
      (is (= #{"node3" "node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node3" "node7" "label7" "node1" "node8" "node9" "node10"} @selected-nodes))
      (is (= #{"node1"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node3"} @selected-nodes))
      (is (= #{"node1"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/collapse-all-or-selected])
      (is (= #{"node4" "node5" "node3"} @selected-nodes))
      (is (= #{"node3" "node1"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node4"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node5"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node8"]])
      (re-frame/dispatch [:looset-graph.app/expand-selected])
      (is (= #{"node4" "node5" "node8" "node9" "node10"} @selected-nodes))
      (is (= #{"node3" "node1"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/collapse-all-or-selected])
      (is (= #{"node3" "node4" "node5" "node7" "label7" "node1" "node8" "node9" "node10"} @selected-nodes))
      (is (= #{"node3" "node7"} @sub-under-test)))))

(deftest hiding-multiple
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
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
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= 8 (count @sub-under-test)))
      (re-frame/dispatch [:looset-graph.app/hide-all-or-selected])
      (is (= 0 (count @sub-under-test))))))

(deftest node-selection2
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/selected-nodes])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (is (= #{"node7" "node8" "node9" "node10" "label7" "node1"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label3"]])
      (is (= #{"node7" "node8" "node9" "node10" "label7" "node1" "label3" "node2" "label4"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (is (= #{"label3" "node2" "label4"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label3"]])
      (is (= #{"label3" "node1" "node2" "label4"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label3"]])
      (is (= #{} @sub-under-test)))))

(deftest node-selection
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/selected-nodes])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= #{} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/mouse-select-mode true])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node8"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label7"]])
      (is (= #{"node7"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label3"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node1"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node2"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label4"]])
      (is (= #{"node7" "label3"} @sub-under-test))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["node7"]])
      (is (= #{"label3"} @sub-under-test)))))


;; I wanted to test the click-hierarchy-layout as well, but it relies in vis-network to define
;; the nodes positions and than I get the positions and set it through re-frame, so I can test
;; this behavior so easily.

(deftest click-default-layout
  (re-frame.test/run-test-sync
    (let [node7-position #(-> @re-frame.db/app-db :domain :nodes-map (get "node7") :position)
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= {"x" 47, "y" -200}
             (node7-position)))
      (re-frame/dispatch [::app/clear-nodes-positions])
      (is (nil? (node7-position))))))

(deftest toggle-node-visibility
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/visible-nodes])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= "node7" (@sub-under-test "node7")))
      (re-frame/dispatch [::app/toggle-hidden "node7"])
      (is (nil? (@sub-under-test "node7"))))))

(deftest nodes-laid-out-without-overlapping-on-drag-end
  (testing "GIVEN the visible nodes already have positions
              AND a drag is still in progress
            WHEN the nodes positions are recalculated
            THEN the positions are left untouched"
    (re-frame.test/run-test-sync
      (let [box-w 100
            box-h 50
            visible-positions (fn [] (let [db @re-frame.db/app-db] (into {} (for [id (get-in db [:ui :f-visible-nodes])] [id (get-in db [:domain :nodes-map id :position])])))) ;; {node-id position} for every visible node, read from app-state.
            input-graph-text "=>label1:
                               node1
                               node2

                             node3:
                               node4

                             node7:
                               node8

                             node9:
                               node10

                             =>label2:
                               node5

                             =>label1 {:position {\"x\" -47, \"y\" 100}}
                             node3 {:position {\"x\" 164, \"y\" 100}}
                             node7 {:position {\"x\" 47, \"y\" -200}}
                             node9 {:position {\"x\" 1, \"y\" -100}}
                             =>label2 {:position {\"x\" 81, \"y\" -100}}"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (reset! app/network #js {:getBoundingBox (fn [_id] #js {:left 0 :right box-w :top 0 :bottom box-h})}) ;; The layout reads each node box from the vis-network instance, which only exists in the browser.
        (try
          (re-frame/dispatch [:looset-graph.app/drag-changed true])
          (let [positions-before-the-drag-ends (visible-positions)]
            (re-frame/dispatch [::app/set-nodes-positions {:dragging? true}])
            (is (= positions-before-the-drag-ends
                   (visible-positions))))
          (finally
            (reset! app/network nil)))))) ;; `network` is a defonce shared by the whole suite, so it is always put back.
  (testing "GIVEN every visible node reports the same box, so they all sit on top of each other
            WHEN the drag ends and the nodes positions are recalculated
            THEN every visible node gets a position
              AND no two visible nodes overlap"
    (re-frame.test/run-test-sync
      (let [box-w 100
            box-h 50
            visible-positions (fn [] (let [db @re-frame.db/app-db] (into {} (for [id (get-in db [:ui :f-visible-nodes])] [id (get-in db [:domain :nodes-map id :position])])))) ;; {node-id position} for every visible node, read from app-state.
            overlapping-pairs (fn [positions] (vec (for [[a pa] positions [b pb] positions :when (and (neg? (compare a b)) pa pb (< (js/Math.abs (- (get pa "x") (get pb "x"))) box-w) (< (js/Math.abs (- (get pa "y") (get pb "y"))) box-h))] [a b]))) ;; Every unordered pair of nodes whose boxes intersect.
            input-graph-text "=>label1:
                               node1
                               node2

                             node3:
                               node4

                             node7:
                               node8

                             node9:
                               node10

                             =>label2:
                               node5

                             =>label1 {:position {\"x\" -47, \"y\" 100}}
                             node3 {:position {\"x\" 164, \"y\" 100}}
                             node7 {:position {\"x\" 47, \"y\" -200}}
                             node9 {:position {\"x\" 1, \"y\" -100}}
                             =>label2 {:position {\"x\" 81, \"y\" -100}}"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (reset! app/network #js {:getBoundingBox (fn [_id] #js {:left 0 :right box-w :top 0 :bottom box-h})}) ;; The layout reads each node box from the vis-network instance, which only exists in the browser.
        (try
          (re-frame/dispatch [::app/set-nodes-positions {:dragging? false}])
          (let [positions (visible-positions)]
            (is (every? some? (vals positions)))
            (is (= [] (overlapping-pairs positions))))
          (finally
            (reset! app/network nil))))))) ;; `network` is a defonce shared by the whole suite, so it is always put back.
;; Avoiding the Promise by not using the compressed graph-text is an ok approach in the meanwhile.
(deftest set-graph-text
  (re-frame.test/run-test-sync
    (let [sub-under-test (re-frame/subscribe [::app/nodes-map])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           node6:
                             node7

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
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
;; Also, when I'm hot reloading the app code, it sometimes work correctly
;; (deftest t2
;;   (async done
;;     (let [fold-ui (re-frame/subscribe [::app/vis-data])
;;           input-graph-text (app/gzip-decompress (js/atob (js/decodeURIComponent "H4sIAAAAAAAAA22RTQqDMBCF9zlFcF0h%2FzGCgt6kpS4E0UK7aBHvXoyZaJiskjf55r0Zbdrp%2FhgmXhNK5%2BU58HCKcGpC9sPAuyWkOVr0Xgp3E6uiThsr0O7QFnR1dp%2BeCl5lLJlLjI5Ve84LJZlbAXyP8IiodEgXW1m047Rsfc14pAPZe6lAci8jLC79a%2F1a3uNnXGa6Ft%2BClqK60eJXULZtvqtHiBMpYbAJF%2FZgONsp%2BDIY1Pr0gp%2BTsXNpYoURGcYuJQOqy8QZFKcQxRUPXsn0uTWZyZEWkdLmOIk4q9NFMREjAXF4LAdTCZ%2F2B25%2Bd8o%2BAwAA")))]
;;       (-> input-graph-text
;;         (.then #(re-frame/dispatch-sync [::app/set-app-state %]))
;;         (.then
;;           (js/Promise.
;;             (fn [res _rej]
;;               (js/setTimeout
;;                 #(do
;;                   (is (= {:nodes [] :edges []} @fold-ui)) ;; It shouldn't be empty.
;;                   (res)
;;                   (done))
;;                 500))))))))

;; This one works with hot reload, but again, no re-frame.
(deftest t1
  (async done
    (let [y (app/gzip-decompress (js/atob "H4sIAAAAAAAAA41ZzW4bNxC+6ykInRSgASzZSVoBLeDGm9SG7RR14QK5MVo2IUqT6a5WaB34YdqeWiC3nnrVixXzw78Vd9cXyzucJYcz33zDWX79zSttPrj2TF1pq5qdtrKqzEdda7eeCXFeq5008M/OzYS4VF0rZ0Kc2q2z2uGryZszId529/BzqWsNv1Wtd9LU8O55o6yCN2T+xrXCn1v9XjYaFG+lqdVGz2ZfB9twuuo7ZciqK9lslFGnH2WjNrqWN667lzdONqqdCfFSNsa1p0b9Jm3dqFrlwxdOOv75XnbG5ePJorCV6ifZbnVV1VbCwtUOpnRogpaNzGzs7rWsfnRW2w9o5Uuj9NbZVOelMi14+EbtVKMtqt10yuSbBSdnKrfSbFWT6oDTqhv1DqyTqFPV2rT5auc7Z5WprmTXyOg2ByqvlT3Gxf0UGFSIw6tG2o0yFJsrDgn8wjPbfwgMmFpLHMEo+Yk0T4RuRL2ugefXEGO70bSubnH2S9k1KcpeGtnV2ipNwLrTjbcJICS3bPUQFK+1QSwi8NBDKD7TzUaRnYoB+J62sFVdGyHMEx+X0ezDg+ZaOYJvxIWH9Y5e8W+vwE/GNdripJVxGnd+pu40uuJN6xfkNHklt/ouz5eq1vf4D2NvJsQPrpWGMxZkspxW6KGKlQEOb2qpmxyLwAe4ACLIWf1rB957rd0O4k1YWq1xoxvYx6nZqTZk26UmIy9cq84U/P0ZjPlB6rvO1hhP76vvVaN0I88oH8EL7k5vtdHyUltZqwvVYnyYnsDlrXynAITfKqPJyzkcwnpXTrd5dmO4Kgo651itESmJEsWhOqXsP5NWK+P3fIJvaYPRIMd5cLobt3FN42LqCnGjzQ4tZP651ga3HyklMNabX7p3LlkvJrcQr1RjJTnuxllNvvy1Qy/4/J6kwNMwHS1B724xGeRWGr3RlBi6VoGhwGRMnEvlbPJfjVNG96UoYZYkbBga9chBlNLE5ztpNXrgnnNc6Ubh1jqDqWobnvE6ZCAhKvDQAJ9PFotDkg6JWnlWqyITrfMYsP+St306V5x56xihRGuAtSpE5TqBRxqPxN0+BsmUyNUVsts64i0Fs0+nijN1PcrwnsdTqvYMHcjYc2wgUybDEuklRHfAb719yApIeZ1ANeUkMKKiqrGOqEk0eNaKyHId4J0Vd9hBxXFYB8xRbi8xt5WVvG/mkT5INrpCa9cpwhMleq3yE61H2a7HkJHSAsulpEl8Fvm1yHsp3WGeVLEop+x1wFqeWjwDcOYfJOxANibrBvRUVNzWeTpjgs/CKUQ8/SZw3amV8OhJEIEKAgY22gzPHiGMXFRBwiJj4Jn2GZ97+40DtO/4TPtPnsEP8ZH9EQXkl1Sf/BMlmZ/Od47NQd72dBO3PTusqd5+NzImB8Z8cpdHKeHLY5EEyuNEDOUxJovyIBHIoEFq0NrLkSEkn/JYJKTyeCCp8jATV3nQkxk6Mga2XHqC0mitDlp4asieCsUuZndEfS7rIT8fJPTnMsqAngyyIBdxJuRCyob+u+SjXJplBfYKyAR8NMKmIU2UgEZCCbNJJkViyU9UYf8XndFyRgUEGYQKCGI4fYY2hDEDZ7h4CECg+EMAwRsnxwqS9ieERi4MAzWfs6CWowrhGDCiFM4HUzobNRuoQxg2CsOYxs6NDVP/NqIw1LONvIJN2dia2KKNKITebWxfxRZu5AVsykbGfZM2psJtGRIhsgi2EmhKhEZ8DEAIohD2XLJRM+h4CfV4DMezYVJC4YyVVlBqhrxRdJov9WCxBI2NysFRX4aGxqkQDY3GUjSkQcVoaJTL0dAwFaQR09SI5Zejg1iWhkZjYRrSCKVpSIGL09CwL09vfUYwvfpnRon/7hEZjRvuhBtSyc6lj5T7iWAo1xMVzO10DszlRBByN123mKuJAuZm8uxzMRVx7uGCUwU7KI0W7KCFBTt7KhRs/x0oHloBQWgJ99D+2XfNxW3nKYs4Q0O5tw3QyupWJuXjZvgulZQ9DzuqqtjI0lE+K75RhJWXoJie3xl97OWtnPmuCCUDXVGqk/VH6YDvlFIZ90ypKHRP2cLUR6Ui6qhSSbG3uubA+HaFes24PfpoloYySnwwR+DWO6zwp700qvzZLpYMMmzMnVEjc2YUe1dGCTsyCoIbk+XIiVFALozPRQfy95EEVpyO2aEp/TDQv6AQn9ZW3ikxJ435F2L90bV6q50Vn+a/zcXT58fPvxDz3+fi6OGBO0j/ztX+j0a7+UP5lmF66mfPjmjq1RFMPnhtMDnT0DzZfcK0PcvViuZ5etKbqH/pMDnXi0GTspuJR9h0lM8ELBjeunD7v3L/55caj9lyPj200/4luvsQi/OdezJ/KDVsXpOH5g+zPPLf7f82CBBEc1TffybcxHbDD4Fk/w+KFq9dDev2OhCvGcQC5ZkX0lubaR982Y8V3OyITwdqy5gHA9//J9c6zpfi/ilsye4/t1qCv7Bv8vLKqO4eatQC5U/yjIvXC5PLrwo7XR3udHnEavAfYi4yXYK9dv/3/IEJ2B3MsvKT0BxjFb8Q08WPmw8u32h62/AIYB8PZWC8kJic5Xk/XOWeMMZvu//XIrKHupVAnX58zmE4OXDgcmgDox/XJ/d0kk+LDUxMzD/uZe3EAqS59/vf5Kcj8FW+UKzE0Qn4/fFi/5/RsuD8F/T6Mb5ePJH7icJgZvLoBcG0/SfLrzgLnqEFb9P4IfrFAmS5n5IrhEeAdFkE2HEJUSOXEJMLLZm6ntIy/dpfmY/7z3VvlXiH8IhCnu2CTuwJ2dcYmNIJprRRPK6HCoLNIhCf7fNecoUxaWGP4ssdQKh7iI9FrcSVbqTdqnzh/GZk2jmDR4H8/uQRaMkn4v4gcmcNArEgOdgcDuBe51bZ/Z8g8ayzLJD/Cw+WYyYI28/YxfVBNLK7nOmtrJZHWW6Ve7v8nCNQAbZFXWjc+T0s2orFrX6PJ9InoSyV+4JkN6CDxUaZXph7F0+P2FOvavaPnR7iYsEjvfLWv116xNF8CFn9G6PpA3Q+0/95trO40iQAAA=="))]
      (.then y #(do
                  (is (re-find #"=>FilhosDe" %))
                  (done))))))

(deftest resizing-panel
  (re-frame.test/run-test-sync
    (let [left-panel-size (re-frame/subscribe [::app/left-panel-size])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           node6:
                             node7

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (= "20vw" @left-panel-size))
      (re-frame/dispatch [:looset-graph.app/resizing-panels :left])
      (re-frame/dispatch [:looset-graph.app/mouse-moved 931 707])
      (re-frame/dispatch [:looset-graph.app/mouse-up false])
      (is (= "931px" @left-panel-size)))))

(deftest open-node
  (re-frame.test/run-test-sync
    (let [fold-ui (re-frame/subscribe [::app/fold-ui])
          input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           node6:
                             node7

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}
                           "]
      (re-frame/dispatch [::app/set-app-state input-graph-text])
      (is (false? (get-in @fold-ui ["label1" :opened?])))
      (re-frame/dispatch [:looset-graph.app/nodes-list-item-clicked ["label1"]])
      (is (true? (get-in @fold-ui ["label1" :opened?]))))))

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
               node4 -> node1
               nodeA -> nodeB"
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

(deftest node-with-multiple-lix-parents-is-detected
  (testing "GIVEN node4 is an inner of both node3 and node7 (two Lix folders)
            WHEN the nodes-map is built
            THEN node4 is reported with both Lix parents"
    (is (= {"node4" #{"node3" "node7"}}
           (-> "node3:
                  node4
                node7:
                  node4"
             (graph-parser/graph-ast)
             (#(app/nodes-map* {:graph-ast %}))
             (app/nodes-with-multiple-parents)))))
  (testing "GIVEN node4 is an inner of one Lix (node3) and two Labels (labelA, labelB)
            WHEN the nodes-map is built
            THEN nothing is reported, because only Lix parents count"
    (is (= {}
           (-> "node3:
                  node4
                =>labelA:
                  node4
                =>labelB:
                  node4"
             (graph-parser/graph-ast)
             (#(app/nodes-map* {:graph-ast %}))
             (app/nodes-with-multiple-parents))))))



(deftest errors-node-lists-nodes-with-multiple-parents
  (testing "GIVEN node4 is an inner of two Lix folders (node3, node7)
            WHEN the graph is loaded
            THEN ::graph-errors reports node4 as a :multiple-parents problem"
    (re-frame.test/run-test-sync
      (let [graph-errors (re-frame/subscribe [::app/graph-errors])]
        (re-frame/dispatch [::app/set-app-state "node3:\n  node4\nnode7:\n  node4"])
        (is (= [{:kind :multiple-parents :node-id "node4" :parents #{"node3" "node7"}}]
               @graph-errors)))))
  (testing "GIVEN no node has multiple Lix parents
            WHEN the graph is loaded
            THEN ::graph-errors is empty"
    (re-frame.test/run-test-sync
      (let [graph-errors (re-frame/subscribe [::app/graph-errors])]
        (re-frame/dispatch [::app/set-app-state "node3:\n  node4\n=>labelA:\n  node4"])
        (is (= [] @graph-errors))))))

(deftest graph-text-views
  (let [input-graph-text "=>label1:
                             node1
                             node2
                             node5

                           node6:
                             node7

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}"
        view-2-result  "=>label1:
                             node1
                             node2
                             node5

                           node6:
                             node7

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}, :name \"Nó B\"}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" -156, \"y\" 0}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}"
        view-3-result  "=>label1:
                             node1
                             node2
                             node5

                           node6:
                             node7

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:position {\"x\" -164, \"y\" -100}, :name \"Nó B\"}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" 111, \"y\" 222}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}"
        view-4-result  "=>label1:
                             node1
                             node2
                             node5

                           node6:
                             node7

                           =>label5:
                             =>label6

                           =>label2:
                             node5

                           node8:
                             node9

                           node7:
                             node8
                             =>label7

                           =>label6:
                             =>label5

                           =>label7:
                             node1

                           =>label3:
                             node1
                             node2
                             =>label4

                           node3:
                             node4
                             node5

                           node9:
                             node10

                           =>label1 -> node6
                           nodeA -> nodeB
                           node4 -> node1
                           node1 -> node2

                           =>label1 {:position {\"x\" -47, \"y\" 100}}
                           nodeB {:name \"Nó B\"}
                           node6 {:position {\"x\" -139, \"y\" 100}}
                           =>label5 {:position {\"x\" 9, \"y\" 0}}
                           =>label2 {:position {\"x\" 81, \"y\" -100}}
                           node7 {:position {\"x\" 47, \"y\" -200}}
                           nodeA {:position {\"x\" 111, \"y\" 222}}
                           =>label4 {:position {\"x\" -24, \"y\" -100}}
                           =>label6 {:position {\"x\" 45, \"y\" -100}}
                           =>label7 {:position {\"x\" 131, \"y\" 0}}
                           =>label3 {:position {\"x\" 39, \"y\" 0}}
                           node3 {:position {\"x\" 164, \"y\" 100}}
                           node9 {:position {\"x\" 1, \"y\" -100}}"]
    (testing "GIVEN node-props exist for nodeB
              WHEN view-2 is defined with nodeB having another :name
              THEN only the node-prop :name is changed for view-2"
      (re-frame.test/run-test-sync
        (let [graph-text-views "view-2
                                nodeB {:name \"Nó B\"}"]
          (is (= view-2-result (second (app/graph-text--merge->views input-graph-text graph-text-views))))
          (is (= input-graph-text (first (app/graph-text--merge->views input-graph-text graph-text-views)))))))
    (testing "GIVEN node-props exist for nodeA
                AND view-2 is already defined
              WHEN view-3 is defined with nodeA having different positions
              THEN nodeA's position get overwritten"
      (re-frame.test/run-test-sync
        (let [graph-text-views "view-2
                                nodeB {:name \"Nó B\"}

                                view-3
                                nodeA {:position {\"x\" 111, \"y\" 222}}"]
          (is (= view-3-result (nth (app/graph-text--merge->views input-graph-text graph-text-views) 2)))
          (is (= view-2-result (second (app/graph-text--merge->views input-graph-text graph-text-views))))
          (is (= input-graph-text (first (app/graph-text--merge->views input-graph-text graph-text-views)))))))
    (testing "GIVEN node-props exist for nodeB
                AND view-2 and view-3 are already defined
              WHEN view-4 is defined with nodeB having nil as position property
              THEN nodeB's position get dissoced"
      (re-frame.test/run-test-sync
        (let [graph-text-views "view-2
                                nodeB {:name \"Nó B\"}

                                view-3
                                nodeA {:position {\"x\" 111, \"y\" 222}}

                                view-4
                                nodeB {:position nil}"]
          (is (= view-4-result (nth (app/graph-text--merge->views input-graph-text graph-text-views) 3))))))))

(deftest graph-text-views-navigation
  (testing "GIVEN view-2 and view-3 are defined
            WHEN the views are advanced and then returned
            THEN each view shows its own node-props"
    (re-frame.test/run-test-sync
      (let [nodes-map (re-frame/subscribe [::app/nodes-map])
            name-of (fn [node-id] (get-in @nodes-map [node-id :name]))]
        (re-frame/dispatch [::app/set-graph-text-views "view-2\nnodeB {:name \"B2\"}\n\nview-3\nnodeB {:name \"B3\"}"])
        (re-frame/dispatch [::app/set-app-state "nodeA -> nodeB\n\nnodeB {:name \"B1\"}"])
        (is (= "B1" (name-of "nodeB")))
        (re-frame/dispatch [::app/change-view inc])
        (is (= "B2" (name-of "nodeB")))
        (re-frame/dispatch [::app/change-view inc])
        (is (= "B3" (name-of "nodeB")))
        (re-frame/dispatch [::app/change-view #(max 1 (dec %))])
        (is (= "B2" (name-of "nodeB")))
        (re-frame/dispatch [::app/change-view #(max 1 (dec %))])
        (is (= "B1" (name-of "nodeB")))))))

(deftest view-diff
  (testing "GIVEN the current node-props differ from the previous view
            WHEN the diff is generated
            THEN it is a view section with only what changed"
    (let [prev-text "nodeA -> nodeB\n\nnodeA {:position {\"x\" 1, \"y\" 2}}\nnodeB {:name \"B\", :hidden? true}"
          curr-props "\"nodeA\" {:position {\"x\" 9, \"y\" 2}}\n\"nodeB\" {:name \"B\"}\n\"nodeC\" {:hidden? true}"]
      (is (= "view-4\n\"nodeA\" {:position {\"x\" 9, \"y\" 2}}\n\"nodeB\" {:hidden? nil}\n\"nodeC\" {:hidden? true}"
             (app/view-diff-text "view-4" prev-text curr-props)))))
  (testing "GIVEN the node-props are the same as the previous view
            WHEN the diff is generated
            THEN it is blank"
    (let [text "nodeA -> nodeB\n\nnodeA {:position {\"x\" 1, \"y\" 2}}"]
      (is (= "" (app/view-diff-text "view-2" text "\"nodeA\" {:position {\"x\" 1, \"y\" 2}}")))))
  (testing "GIVEN view-2 is the last view
            WHEN the view is advanced past it
            THEN the draft view-3 is shown with the graph of view-2"
    (re-frame.test/run-test-sync
      (let [nodes-map (re-frame/subscribe [::app/nodes-map])
            current-view (re-frame/subscribe [::app/current-view])]
        (re-frame/dispatch [::app/set-graph-text-views "view-2\nnodeB {:name \"B2\"}"])
        (re-frame/dispatch [::app/set-app-state "nodeA -> nodeB\n\nnodeB {:name \"B1\"}"])
        (re-frame/dispatch [::app/change-view inc])
        (re-frame/dispatch [::app/change-view inc])
        (is (= 3 @current-view))
        (is (= "B2" (get-in @nodes-map ["nodeB" :name])))
        ;; And it does not go past the draft view
        (re-frame/dispatch [::app/change-view inc])
        (is (= 3 @current-view))
        ;; Nothing changed in the draft view yet, so there is nothing to write
        (is (= "" (get-in @re-frame.db/app-db [:flow-paths :diff-from-last-view])))))))

(deftest graph-text-views-quoted-ids
  (testing "GIVEN node-props exist for a quoted Label id
            WHEN a view overrides it
            THEN the props of that Label are changed"
    (let [input-graph-text "=>\"Nirodha-Sacca\":
  \"Nibbāna\"

=>\"Nirodha-Sacca\" {:name \"x\", :position {\"x\" -52, \"y\" 340}}"
          graph-text-views "view-2
=>\"Nirodha-Sacca\" {:name \"Paz e amor\"}"]
      (is (= "=>\"Nirodha-Sacca\":
  \"Nibbāna\"

=>\"Nirodha-Sacca\" {:name \"Paz e amor\", :position {\"x\" -52, \"y\" 340}}"
             (second (app/graph-text--merge->views input-graph-text graph-text-views))))))
  (testing "GIVEN a node with no props line
            WHEN a view declares props for it
            THEN a props line is appended for that node"
    (let [input-graph-text "nodeA -> nodeB\n\nnodeA {:position {\"x\" 1, \"y\" 2}}"
          graph-text-views "view-2\nnodeB {:hidden? true}"]
      (is (= "nodeA -> nodeB\n\nnodeA {:position {\"x\" 1, \"y\" 2}}\n\"nodeB\" {:hidden? true}"
             (second (app/graph-text--merge->views input-graph-text graph-text-views)))))))

(deftest inherited-edges-have-a-different-color
  (testing "GIVEN node1 is inside the collapsed label1
              AND node1 -> node2 is defined
            WHEN the edges are calculated
            THEN the label1 -> node2 edge, derived from the collapse, is colored
              AND the directly defined node2 -> node3 edge keeps the default color"
    (re-frame.test/run-test-sync
      (let [input-graph-text "=>label1:\n  node1\n\nnode1 -> node2\nnode2 -> node3"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (let [edges (->> (get-in @re-frame.db/app-db [:flow-paths :f-edges])
                      (map (juxt (juxt :from :to) identity))
                      (into {}))
              inherited (get edges ["label1" "node2"])
              direct (get edges ["node2" "node3"])]
          (is (some? (get-in inherited [:color :color])))
          (is (= app/inherited-edge-color (get-in inherited [:color :color])))
          (is (= ::default (get-in direct [:color :color] ::default)))))))
  (testing "GIVEN an edge with an edge-string is inherited
            WHEN the edges are calculated
            THEN the edge-string is colored as the edge"
    (re-frame.test/run-test-sync
      (let [input-graph-text "=>label1:\n  node1\n\nnode1 -\"rel\"-> node2\nnode2 -\"rel2\"-> node3"]
        (re-frame/dispatch [::app/set-app-state input-graph-text])
        (let [edges (->> (get-in @re-frame.db/app-db [:flow-paths :f-edges])
                      (map (juxt (juxt :from :to) identity))
                      (into {}))
              inherited (get edges ["label1" "node2"])
              direct (get edges ["node2" "node3"])]
          (is (= "rel" (:label inherited)))
          (is (some? (get-in inherited [:font :color])))
          (is (= app/inherited-edge-color (get-in inherited [:font :color])))
          (is (= "rel2" (:label direct)))
          (is (= ::default (get-in direct [:font :color] ::default))))))))
