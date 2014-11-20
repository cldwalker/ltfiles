(ns lt.plugins.user.inline-result
  (:require [lt.objs.editor.pool :as pool]
            [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.platform :as platform]
            [lt.objs.command :as cmd]
            [lt.plugins.birch.reader :as reader]
            [lt.plugins.birch.eval :as eval]))


;; Caution: This will not find an inline result if it moves a different line after the eval
(defn current-inline-widget
  "Finds the inline widget for the current line. If lines are selected, uses the last line
  of a selection (useful for eval)."
  []
  (let [ed (pool/last-active)
        current-line (if (editor/selection? ed)
                         (-> ed editor/selection-bounds :to :line)
                         (:line (editor/->cursor ed)))]
    (->> (:widgets @ed)
       (some (fn [[[l t] widget]]
               (when (and (= t :inline)
                          (= current-line (editor/lh->line ed l)))
                 widget))))))

(defn toggle-current-inline-result []
  (when-let [inline (current-inline-widget)]
    (if (:open @inline)
      (object/raise inline :double-click)
      (object/raise inline :click))))

(defn copy-current-inline-result []
  (when-let [inline (current-inline-widget)]
    (platform/copy (:result @inline))))

;; These also works for a selection. Note: you cannot bind these commands to vim/map-keys
;; because something about invoking it disables s selection

(cmd/command {:command :user.toggle-current-inline-result
              :desc "User: toggles current inline result"
              :exec toggle-current-inline-result})

(cmd/command {:command :user.copy-current-inline-result
              :desc "User: copies current inline result"
              :exec copy-current-inline-result})

(cmd/command {:command :user.view-current-inline-result
              :desc "User: open current inline result in eval viewer"
              :exec (fn []
                      (when-let [data (reader/read-string! (eval/ir->result (current-inline-widget)))]
                        (object/raise eval/viewer :set! data)))})
