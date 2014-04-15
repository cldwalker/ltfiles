(ns lt.plugins.ltfiles.outliner
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as editor]))

(defn fold-code
  "Like editor/fold-code but handles all args to .foldCode and doesn't assume current cursor"
  [ed pos opts force]
  (.foldCode (editor/->cm-ed ed) pos opts force))

;; from https://groups.google.com/forum/#!searchin/codemirror/foldall/codemirror/u3IYL-5g0t4/4YGdXEBFgZoJ
;; consider just writing this in JS
(defn fold-all
  ([condition]
   (let [ed (pool/last-active)]
     (fold-all condition (range (editor/first-line ed) (inc (editor/last-line ed))))))
  ([condition lines]
   (let [ed (pool/last-active)]
     (editor/operation ed
                       (fn []
                         (doseq [line lines]
                           (when (condition (line-level ed line))
                             (fold-code ed
                                        #js {:line line :ch 0}
                                        #js {:rangeFinder js/CodeMirror.fold.indent}
                                        "fold"))))))))


(defn unfold-all
  ([condition]
   (let [ed (pool/last-active)]
     (unfold-all condition (range (editor/first-line ed) (inc (editor/last-line ed))))))
  ([condition lines]
   (let [ed (pool/last-active)]
     (editor/operation ed
                       (fn []
                         (doseq [line lines]
                           (when (condition (line-level ed line))
                             (fold-code ed
                                        #js {:line line :ch 0}
                                        #js {:rangeFinder js/CodeMirror.fold.indent}
                                        "unfold"))))))))

(cmd/command {:command :ltfiles.fold-all
              :desc "ltfiles: fold the whole file"
              :exec (partial fold-all (constantly true))})


(cmd/command {:command :ltfiles.unfold-all
              :desc "ltfiles: unfold the whole file"
              :exec (partial unfold-all (constantly true))})

(doseq [num (range 1 10)]
  (cmd/command {:command (keyword (str "ltfiles.fold-level-" num))
                :desc (str "ltfiles: fold level " num " nodes")
                :exec (fn []
                        (let [tabsize (editor/option (pool/last-active) "tabSize")
                              level (* (dec num) tabsize)]
                          (unfold-all #(< % level))
                          (fold-all #(= % level))))}))

(defn find-first-folded-line [ed lines]
  (->> lines
       (map #(hash-map :line %
                       :marks (.findMarksAt (editor/->cm-ed ed) #js {:line % :ch 0})))
       (drop-while #(-> % :marks js->clj empty?))
       ;; this check is not as thorough as isFolded() in fold.js
       (some (fn [m]
               (when (some #(.-__isFold %) (js->clj (:marks m)))
                 (:line m))))))

(defn safe-next-non-child-line
  "Ensure a line is returned i.e. return line past end-line if on last tree"
  [ed current-line]
  (or (next-non-child-line ed current-line)
      (inc (editor/last-line ed))))

(defn unfold-one-level-for-current-tree []
  (let [ed (pool/last-active)
        current-line (.-line (editor/cursor ed))
        next-tree-line (safe-next-non-child-line ed current-line)
        first-folded-line (find-first-folded-line ed (range current-line next-tree-line))
        ;; line with fold seems to be one line below, hence dec
        next-level (when first-folded-line (line-level ed (dec first-folded-line)))]
    (when first-folded-line
      (unfold-all #(<= % next-level)
                  (range current-line next-tree-line)))))

(cmd/command {:command :ltfiles.unfold-one-level-for-current-tree
              :desc "ltfiles: unfolds current tree one level"
              :exec unfold-one-level-for-current-tree})

(defn fold-one-level-for-current-tree []
  (let [ed (pool/last-active)
        current-line (.-line (editor/cursor ed))
        next-tree-line (safe-next-non-child-line ed current-line)
        first-folded-line (find-first-folded-line ed (range current-line next-tree-line))
        folded-level (if first-folded-line
                       ;; line with fold seems to be one line below, hence dec
                       (line-level ed (dec first-folded-line))
                       ;; Since there are no folds, find deepest indent
                       (apply max (map
                                   #(line-level ed %)
                                   (range current-line next-tree-line))))
                    ;; fold back one level
        next-level (- folded-level (editor/option ed "tabSize"))]
    (fold-all #(>= % next-level)
              (range current-line next-tree-line))))

(cmd/command {:command :ltfiles.fold-one-level-for-current-tree
              :desc "ltfiles: folds current tree one level"
              :exec fold-one-level-for-current-tree})

(cmd/command {:command :ltfiles.indent-fold
              :desc "ltfiles: fold by indent"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (fold-code ed
                                   (editor/cursor ed)
                                   #js {:rangeFinder js/CodeMirror.fold.indent}
                                   nil)))})

;; TODO: rename to line-indent and vars that use it
;; same as getIndent() embedded in fold.indent
(defn line-level [ed line]
  (js/CodeMirror.countColumn
   (editor/line ed line) nil (editor/option ed "tabSize")))

;; doesn't assume direction
(defn find-first-sibling [lines level]
  (let [ed (pool/last-active)]
    (some #(when (= level (line-level ed %)) %)
          lines)))

;; assumes downward direction
(defn find-first-non-child [lines level]
  (let [ed (pool/last-active)]
    (some #(when (>= level (line-level ed %)) %)
          lines)))

;; assumes upward direction
(defn find-parent [lines level]
  (let [ed (pool/last-active)]
    (some #(when (> level (line-level ed %)) %)
          lines)))

(defn jump-to-parent []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)]
    (if-let [parent-line (find-parent
                          (range (dec line) -1 -1) level)]
      ;; assume parent is one level less though this isn't true for disjointed outlines
      (editor/move-cursor ed {:line parent-line
                              :ch (- level (editor/option ed "tabSize"))})
      (notifos/set-msg! "No parent found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-to-parent
              :desc "ltfiles: jump to parent"
              :exec jump-to-parent})

(defn jump-forward-on-same-level []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)]
    (if-let [next-line (find-first-sibling
                        (range (inc line) (inc (editor/last-line ed))) level)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line next-line :ch level})
      (notifos/set-msg! "No next line found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-forward-on-same-level
              :desc "ltfiles: jump to next line on same level"
              :exec jump-forward-on-same-level})

(defn jump-backward-on-same-level []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)]
    (if-let [prev-line (find-first-sibling
                        (range (dec line) -1 -1) level)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line prev-line :ch level})
      (notifos/set-msg! "No previous line found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-backward-on-same-level
              :desc "ltfiles: jump to previous line on same level"
              :exec jump-backward-on-same-level})

(defn select-current-tree []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)
        non-child-line (find-first-non-child
                        (range (inc line) (inc (editor/last-line ed)))
                        level)]
    (editor/set-selection
     ed
     {:line line :ch 0}
     {:line (dec non-child-line) :ch 1000})))

;; handy for deleting, yanking, indent, outdenting
(cmd/command {:command :ltfiles.select-current-tree
              :desc "ltfiles: select current tree"
              :exec select-current-tree})

(defn fold-fn-for-current-tree [fold-fn]
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)
        non-child-line (find-first-non-child
                        (range (inc line) (inc (editor/last-line ed)))
                        level)]
    (fold-fn (constantly true)
             (range line non-child-line))))

(cmd/command {:command :ltfiles.fold-all-for-current-tree
              :desc "ltfiles: fold all for current tree"
              :exec (partial fold-fn-for-current-tree fold-all)})

(cmd/command {:command :ltfiles.unfold-all-for-current-tree
              :desc "ltfiles: unfold all for current tree"
              :exec (partial fold-fn-for-current-tree unfold-all)})

(cmd/command {:command :ltfiles.outdent
              :desc "ltfiles: Outdent by one level"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (editor/indent-line ed (.-line (editor/cursor ed)) "subtract")))})

(defn delete-lines
  "Deletes multiple lines starting on from and including to."
  [from to]
  (.replaceRange (editor/->cm-ed (pool/last-active))
                 "" #js {:line from :ch 0} #js {:line (inc to) :ch 0}))

;; TODO: reuse and handle nil for other non-child-lines
(defn next-non-child-line [ed line]
  (find-first-non-child
   (range (inc line) (inc (editor/last-line ed)))
   (line-level ed line)))

;; Limitation going :up - when moving a child node between trees, child node
;; will move up an extra line. This is fixable by fixing next-non-child-line and
;; next-node-in-new-tree?. Don't do this until it's worth the effort
;; Note: better abstractions are needed here. Current code is hard to reason about and
;; too entangled
(defn move-current-tree [direction]
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        level (line-level ed line)
        lines-to-search (if (= direction :down)
                          (range (inc line) (inc (editor/last-line ed)))
                          (range (dec line) -1 -1))
        sibling-line (find-first-sibling lines-to-search level)]
    (if-not sibling-line
      (notifos/set-msg! (if (= direction :down)
                          "Next line not found" "Previous line not found")
                        {:class "error"})
      (editor/operation ed
                        (fn []
                          (let [current-line-ends (next-non-child-line ed line)
                                next-node-in-new-tree? (neg? (- (line-level ed current-line-ends)
                                                                level))
                                copied-lines (editor/range ed {:line line :ch 0} {:line current-line-ends :ch 0})
                                sibling-line-ends (next-non-child-line ed sibling-line)
                                ;; account for nil end line for sibling i.e. EOF
                                copied-lines (if sibling-line-ends copied-lines (str "\n" copied-lines))
                                sibling-line-ends (or sibling-line-ends
                                                      (inc (editor/last-line ed)))
                                cursor-line (if (= direction :down)
                                              (if next-node-in-new-tree? sibling-line sibling-line-ends)
                                              sibling-line)]
                            ;; must be at beginning of line to paste copied whitespace correctly
                            (editor/move-cursor ed {:line cursor-line :ch 0})
                            (delete-lines line (dec current-line-ends))
                            (editor/insert-at-cursor ed copied-lines)
                            (editor/move-cursor ed {:line (-> ed editor/cursor .-line
                                                              (- (- current-line-ends line)))
                                                    :ch level})))))))

(cmd/command {:command :ltfiles.move-current-tree-down
              :desc "ltfiles: Move current tree down"
              :exec (partial move-current-tree :down)})


(cmd/command {:command :ltfiles.move-current-tree-up
              :desc "ltfiles: Move current tree up"
              :exec (partial move-current-tree :up)})

(defn find-disjointed-lines []
  (let [ed (pool/last-active)
        tabsize (editor/option ed "tabSize")]
    (->> (range (editor/first-line ed) (inc (editor/last-line ed)))
         (map #(hash-map :line % :level (line-level ed %)))
         (partition 2 1)
         (map (fn [[line1 line2]]
                {:lines [(:line line1) (:line line2)]
                 :difference (- (:level line2) (:level line1))}))
         (remove #(or (neg? (:difference %))
                      (#{0 tabsize} (:difference %)))))))


;; useful for detecting if converting a messy outline went well i.e. mix of tabs + spaces
(cmd/command {:command :ltfiles.find-disjointed-lines
              :desc "ltfiles: find lines with incorrect levels between other lines"
              :exec (comp prn find-disjointed-lines)})

(comment
  (next-non-child-line (pool/last-active) 232)
  (editor/range (pool/last-active) {:line 217 :ch 0} {:line 219 :ch 0})
  (editor/insert-at-cursor (pool/last-active) "WOW")
  (line-level (pool/last-active) 1))
