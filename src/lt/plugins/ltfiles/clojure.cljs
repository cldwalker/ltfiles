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

;; Copied from lt.plugins.clojure ::on-eval.custom
;; TODO: PR upstream
(defn eval-code [editor code]
  (let [;; Unused: pos (ed/->cursor editor)
        info (:info @editor)
        info  (assoc info
                :code code
                :ns (or (:ns opts) (:ns info))
                :meta {:start (-> (ed/->cursor editor "start") :line)
                       :end (-> (ed/->cursor editor "end") :line)
                       :verbatim (:verbatim opts)
                       :result-type (or (:result-type opts) :inline)})
        info (assoc info :print-length (object/raise-reduce editor :clojure.print-length+ nil))]
    (object/raise clojure/clj-lang :eval! {:origin editor
                                           :info info})))

;; TODO: make this an inline-result
(cmd/command {:command :ltfiles.print-fn-source
              :desc "ltfiles: Print current fn's source"
              :exec (fn []
                      (eval-code (pool/last-active)
                                 (str "(clojure.repl/source " (current-word) ")")))})
