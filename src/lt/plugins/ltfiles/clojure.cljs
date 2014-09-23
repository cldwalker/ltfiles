(ns lt.plugins.ltfiles.clojure
  (:require [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.clojure :as clojure]
            [lt.plugins.ltfiles.popup :as popup]
            [lt.plugins.ltfiles.util :as util]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as ed]
            [lt.objs.find :as find]
            [cljs.reader :as reader]
            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior]]))

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

(def eval-history (atom []))

(cmd/command {:command :ltfiles.eval-once
              :desc "ltfiles: Evals clojure(script) with given input"
              :exec (fn []
                      (popup/input (fn [input]
                                     (swap! eval-history conj input)
                                     (eval-code (pool/last-active) input {:result-type :eval-once}))
                                   :completions (sort (distinct @eval-history))))})

(defn handle-eval [result]
  (println "RESULT:" (:result result)))

(behavior ::clj-result.eval-once
          :desc "ltfiles: Handles result from clj eval"
          :triggers #{:editor.eval.clj.result.eval-once}
          :reaction #(handle-eval (-> %2 :results first)))

(behavior ::cljs-result.eval-once
          :desc "ltfiles: Handles result from cljs eval"
          :triggers #{:editor.eval.cljs.result.eval-once}
          :reaction #(handle-eval %2))

(cmd/command {:command :ltfiles.def-let
              ;; assumes line is in a let block
              :desc "ltfiles: Evals current line or selection as def(s)"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (if (editor/selection? ed)
                          (let [expressions (->> (editor/selection ed)
                                                 reader/read-string
                                                 (partition 2)
                                                 (map (fn [[k v]]
                                                        (str "(def " k " " v ")"))))]
                            (eval-code ed (string/join "\n" expressions))
                            (notifos/set-msg! (str "Def'ed " (count expressions) "vars")))
                          ;; def current line, regardless of where it is in (let)
                          (let [[_ _ expression] (->> (util/relative-line)
                                                      (re-find #"^\s*(\(let\s*)?\[?([^\]]+)"))]
                            (eval-code (pool/last-active) (str "(def " expression ")"))
                            (notifos/set-msg! (str "Def'ed expression: " expression))))))})


(cmd/command {:command :ltfiles.comment-let
              :desc "Comments out end of a let block"
              :exec (fn []
                      (let [ed (pool/last-active)
                            pos (count (re-find #"^.*\]" (util/relative-line)))]
                        (editor/replace ed
                                        {:line (.-line (editor/cursor ed))
                                         :ch (dec pos)}
                                        "\n")
                        (cmd/exec! :toggle-comment-selection)))})

(comment
  (let [x 1
        a 2])

  (re-find #"^\s*(\(let\s*)?\[?([^\]]+)" " (let [a 3")
  (re-find #"^\s*(\(let\s*)?\[?([^\]]+)" " b 3]  ")

  (let [f 6
        b (inc f)
        c (->> (Math/pow b 2)
               (+ 10))]
    c)
  )
