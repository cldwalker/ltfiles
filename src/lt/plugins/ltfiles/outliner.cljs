(ns lt.plugins.ltfiles.outliner
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as editor]))

;; Terminology
;; indent - whitespace at beginning of each line
;; level - outline level. Non-indented levels are level 1. Subsequent levels are
;; one more tabSize indent than the previous line.

;; CodeMirror helpers - must take an editor object
;; ==================

(defn fold-code
  "Like editor/fold-code but handles all args to .foldCode and doesn't assume current cursor"
  [ed pos opts force]
  (.foldCode (editor/->cm-ed ed) pos opts force))

;; from https://groups.google.com/forum/#!searchin/codemirror/foldall/codemirror/u3IYL-5g0t4/4YGdXEBFgZoJ
(defn fold-all
  ([ed condition]
   (fold-all ed condition (range (editor/first-line ed) (inc (editor/last-line ed)))))
  ([ed condition lines]
   (editor/operation ed
                     (fn []
                       (doseq [line lines]
                         (when (condition (line-indent ed line))
                           (fold-code ed
                                      #js {:line line :ch 0}
                                      #js {:rangeFinder js/CodeMirror.fold.indent}
                                      "fold")))))))

(defn unfold-all
  ([ed condition]
   (unfold-all ed condition (range (editor/first-line ed) (inc (editor/last-line ed)))))
  ([ed condition lines]
   (editor/operation ed
                     (fn []
                       (doseq [line lines]
                         (when (condition (line-indent ed line))
                           (fold-code ed
                                      #js {:line line :ch 0}
                                      #js {:rangeFinder js/CodeMirror.fold.indent}
                                      "unfold")))))))


;; TODO: rename to line-indent and vars that use it
;; same as getIndent() embedded in fold.indent
(defn line-indent [ed line]
  (js/CodeMirror.countColumn
   (editor/line ed line) nil (editor/option ed "tabSize")))

(defn find-first-folded-line [ed lines]
  (->> lines
       (map #(hash-map :line %
                       :marks (.findMarksAt (editor/->cm-ed ed) #js {:line % :ch 0})))
       (drop-while #(-> % :marks js->clj empty?))
       ;; this check is not as thorough as isFolded() in fold.js
       (some (fn [m]
               (when (some #(.-__isFold %) (js->clj (:marks m)))
                 (:line m))))))

;; doesn't assume direction
(defn find-first-sibling [ed lines indent]
  (some #(when (= indent (line-indent ed %)) %)
        lines))

;; assumes upward direction
(defn find-parent [ed lines indent]
  (some #(when (> indent (line-indent ed %)) %)
        lines))

;; assumes downward direction
;; useful for finding current tree
(defn find-first-non-child [ed lines indent]
  (some #(when (>= indent (line-indent ed %)) %)
        lines))

(defn next-non-child-line [ed line]
  (find-first-non-child
   ed
   (range (inc line) (inc (editor/last-line ed)))
   (line-indent ed line)))

(defn safe-next-non-child-line
  "Ensure a line is returned i.e. return line past end-line if on last tree"
  [ed current-line]
  (or (next-non-child-line ed current-line)
      (inc (editor/last-line ed))))

;; Commands
;; ========

(cmd/command {:command :ltfiles.fold-all
              :desc "ltfiles: fold the whole file"
              :exec (fn []
                      (fold-all (pool/last-active) (constantly true)))})


(cmd/command {:command :ltfiles.unfold-all
              :desc "ltfiles: unfold the whole file"
              :exec (fn []
                      (unfold-all (pool/last-active) (constantly true)))})

(doseq [num (range 1 10)]
  (cmd/command {:command (keyword (str "ltfiles.fold-level-" num))
                :desc (str "ltfiles: fold level " num " nodes")
                :exec (fn []
                        (let [tabsize (editor/option (pool/last-active) "tabSize")
                              indent (* (dec num) tabsize)
                              ed (pool/last-active)]
                          (unfold-all ed #(< % indent))
                          (fold-all ed #(= % indent))))}))

(defn unfold-one-level-for-current-tree []
  (let [ed (pool/last-active)
        current-line (.-line (editor/cursor ed))
        next-tree-line (safe-next-non-child-line ed current-line)
        first-folded-line (find-first-folded-line ed (range current-line next-tree-line))
        ;; line with fold seems to be one line below, hence dec
        next-indent (when first-folded-line (line-indent ed (dec first-folded-line)))]
    (when first-folded-line
      (unfold-all ed
                  #(<= % next-indent)
                  (range current-line next-tree-line)))))

(cmd/command {:command :ltfiles.unfold-one-level-for-current-tree
              :desc "ltfiles: unfolds current tree one level"
              :exec unfold-one-level-for-current-tree})

(defn fold-one-level-for-current-tree []
  (let [ed (pool/last-active)
        current-line (.-line (editor/cursor ed))
        next-tree-line (safe-next-non-child-line ed current-line)
        first-folded-line (find-first-folded-line ed (range current-line next-tree-line))
        folded-indent (if first-folded-line
                       ;; line with fold seems to be one line below, hence dec
                       (line-indent ed (dec first-folded-line))
                       ;; Since there are no folds, find deepest indent
                       (apply max (map
                                   #(line-indent ed %)
                                   (range current-line next-tree-line))))
                    ;; fold back one indent
        next-indent (- folded-indent (editor/option ed "tabSize"))]
    (fold-all
     ed
     #(>= % next-indent)
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

(defn jump-to-parent []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (line-indent ed line)]
    (if-let [parent-line (find-parent
                          ed (range (dec line) -1 -1) indent)]
      ;; assume parent is one level less though this isn't true for disjointed outlines
      (editor/move-cursor ed {:line parent-line
                              :ch (- indent (editor/option ed "tabSize"))})
      (notifos/set-msg! "No parent found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-to-parent
              :desc "ltfiles: jump to parent"
              :exec jump-to-parent})

(defn jump-forward-on-same-level []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (line-indent ed line)]
    (if-let [next-line (find-first-sibling
                        ed (range (inc line) (inc (editor/last-line ed))) indent)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line next-line :ch indent})
      (notifos/set-msg! "No next line found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-forward-on-same-level
              :desc "ltfiles: jump to next line on same level"
              :exec jump-forward-on-same-level})

(defn jump-backward-on-same-level []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (line-indent ed line)]
    (if-let [prev-line (find-first-sibling
                        ed (range (dec line) -1 -1) indent)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line prev-line :ch indent})
      (notifos/set-msg! "No previous line found" {:class "error"}))))

(cmd/command {:command :ltfiles.jump-backward-on-same-level
              :desc "ltfiles: jump to previous line on same level"
              :exec jump-backward-on-same-level})

(defn select-current-tree []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (line-indent ed line)
        last-line (dec (safe-next-non-child-line ed line))]
    (editor/set-selection
     ed
     {:line line :ch 0}
     {:line last-line
      :ch (editor/line-length ed last-line)})))

;; handy for deleting, yanking, indent, outdenting
(cmd/command {:command :ltfiles.select-current-tree
              :desc "ltfiles: select current tree"
              :exec select-current-tree})

(defn fold-fn-for-current-tree [fold-fn]
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (line-indent ed line)]
    (fold-fn
     ed
     (constantly true)
     (range line (safe-next-non-child-line ed line)))))

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

;; Limitation going :up - when moving a child node between trees, child node
;; will move up an extra line. This is fixable by fixing next-non-child-line and
;; next-node-in-new-tree?. Don't do this until it's worth the effort
;; Note: better abstractions are needed here. Current code is hard to reason about and
;; too entangled
(defn move-current-tree [direction]
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (line-indent ed line)
        lines-to-search (if (= direction :down)
                          (range (inc line) (inc (editor/last-line ed)))
                          (range (dec line) -1 -1))
        sibling-line (find-first-sibling ed lines-to-search indent)]
    (if-not sibling-line
      (notifos/set-msg! (if (= direction :down)
                          "Next line not found" "Previous line not found")
                        {:class "error"})
      (editor/operation ed
                        (fn []
                          (let [current-line-ends (next-non-child-line ed line)
                                next-node-in-new-tree? (neg? (- (line-indent ed current-line-ends)
                                                                indent))
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
                                                    :ch indent})))))))

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
         (map #(hash-map :line % :indent (line-indent ed %)))
         (partition 2 1)
         (map (fn [[line1 line2]]
                {:lines [(:line line1) (:line line2)]
                 :difference (- (:indent line2) (:indent line1))}))
         (remove #(or (neg? (:difference %))
                      (#{0 tabsize} (:difference %)))))))


;; useful for detecting if converting a messy outline went well i.e. mix of tabs + spaces
(cmd/command {:command :ltfiles.find-malformed-lines
              :desc "ltfiles: find lines with malformed levels caused by incorrect indents"
              :exec (comp prn find-disjointed-lines)})

(comment
  (next-non-child-line (pool/last-active) 232)
  (editor/range (pool/last-active) {:line 217 :ch 0} {:line 219 :ch 0})
  (editor/insert-at-cursor (pool/last-active) "WOW")
  (line-indent (pool/last-active) 1))
