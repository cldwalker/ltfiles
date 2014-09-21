(ns lt.plugins.ltfiles.clojure
  (:require [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.clojure :as clojure]
            [lt.objs.editor :as ed]
            [lt.objs.find :as find]))

(defn current-word []
  (:string (clojure/find-symbol-at-cursor (pool/last-active))))

(defn find-next-clojure-word []
  (let [word (current-word)]
    (find/set-val find/bar word) ;; necessary for find.next to work
    (object/raise find/bar :search! word)))

(cmd/command {:command :ltfiles.find-next-clojure-word
              :desc "ltfiles: Finds next clojure word"
              :exec find-next-clojure-word})

(defn eval-code
  "Evals code and returns result dispatching to handle fn, based
  on [:meta :type] passed to :eval!."
  ([editor code]
   (eval-code editor code {}))
  ([editor code meta-val]
   (let [info (assoc (:info @editor)
                :code code
                :meta meta-val)]
     (object/raise clojure/clj-lang :eval! {:origin editor :info info}))))

;; TODO: make this an inline-result
(cmd/command {:command :ltfiles.print-fn-source
              :desc "ltfiles: Print current fn's source"
              :exec (fn []
                      (eval-code (pool/last-active)
                                 (str "(clojure.repl/source " (current-word) ")")))})
