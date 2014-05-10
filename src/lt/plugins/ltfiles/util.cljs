(ns lt.plugins.ltfiles.util
  (:require [lt.objs.editor :as editor]
            [lt.objs.command :as cmd]
            [lt.objs.workspace :as workspace]
            [lt.objs.editor.pool :as pool]))

(defn current-word*
  "Returns current word given string and cursor position in string"
  [string cursor]
  (str
   (re-find #"\S+$" (subs string 0 cursor))
   (re-find #"^\S+" (subs string cursor))))

(defn current-word
  "Current word under cursor"
  []
  (when-let [ed (pool/last-active)]
    (let [cursor (editor/->cursor ed)]
      (current-word* (editor/line ed (:line cursor))
                    (:ch cursor)))))

(defn relative-line
  "Returns a line of the current file relative to the cursor. Returns current line by default"
  ([] (relative-line 0))
  ([offset]
   (let [ed (pool/last-active)
         line-num (+ offset
                     (:line (editor/->cursor ed)))]
     (editor/line ed line-num))))

;; Same as lt.objs.find/current-ed
;; Could use it but dependence on that ns seems weird and subject to change
(defn current-ed
  "CodeMirror object for current editor"
  []
  (editor/->cm-ed (pool/last-active)))

(defn parent? [parent-path path]
  (re-find (re-pattern (str "^" parent-path)) path))

(defn current-file []
  (-> @(pool/last-active) :info :path))

(defn file-folder [file]
  (some #(when (parent? % file) %)
          (:folders @workspace/current-ws)))

(defn current-folder []
  (let [file (current-file)]
    (some #(when (parent? % file) %)
          (:folders @workspace/current-ws))))

;; Until lt.objs.proc/exec works: passing {:command "" :obj ""} to it didn't work
(defn sh [cmd]
  (.exec (js/require "child_process")
         cmd
         (fn [err stdout stderr]
           (when (seq stdout) (println "STDOUT: " stdout))
           (when (seq stderr) (println "STDERR: " stderr)))))

(defn copy
  "Platform-independent copy"
  [text]
  (.set (.Clipboard.get (js/require "nw.gui")) text "text"))

(defn exec-commands
  "Execs a vec of commands - same format as a user.keymap vec"
  [commands]
  (doseq [c commands]
      (if (coll? c)
        (apply cmd/exec! c)
        (cmd/exec! c))))

(defn insert-at-next-line
  "Insert string at the beginning of the next line"
  [ed s]
  (editor/replace (editor/->cm-ed ed)
                  {:line (inc (:line (editor/->cursor ed))) :ch 0}
                  s)
  ed)


(comment
 (assert (= "this" (current-word* "this is a test" 3)))
 (assert (= "this" (current-word* "this is a test" 4)))
  )
