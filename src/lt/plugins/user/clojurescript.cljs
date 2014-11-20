(ns lt.plugins.user.clojurescript
  (:require [lt.plugins.user.selector :as selector]
            [lt.plugins.user.spy :as spy]
            [lt.plugins.user.util :as util]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [cljs.reader :as reader]
            [lt.objs.command :as cmd]))

(defn current-ns []
  (-> (util/current-file)
      files/open-sync
      :content
      reader/read-string
      second
      spy/->ns))

(def cmd-selector
  (selector/selector {:items (fn []
                               ;; Guard against :lt.objs.sidebar.command/update-lis causing
                               ;; error on startup
                               (when (pool/last-active)
                                 (->> (current-ns)
                                    (spy/ns-fns)
                                    (map #(hash-map :name %))
                                    (sort-by :name))))
                      :key :name
                      :placeholder "function"}))

(cmd/command {:command :user.clojurescript-spy
              :desc "User: Spy on a clojurescript fn in current ns"
              :options cmd-selector
              :exec (fn [selection]
                      (spy/spy (current-ns) (:name selection)))})

(cmd/command {:command :user.clojurescript-unspy
              :desc "User: Unspy on a clojurescript fn in current ns"
              :options cmd-selector
              :exec (fn [selection]
                      (spy/unspy (current-ns) (:name selection)))})
