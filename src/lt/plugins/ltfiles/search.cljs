(ns lt.plugins.ltfiles.search
 (:require [lt.objs.search :as search]
           [lt.object :as object]
           [lt.util.dom :as dom]
           [lt.objs.command :as cmd]
           [lt.plugins.ltfiles.clojure :as clojure]
           [lt.plugins.ltfiles.util :as util]))

(defmethod search/location "<file>" [_]
  [(util/current-file)])

(defmethod search/location "<folder>" [_]
  [(util/current-folder)])

(defn set-search [this v]
  (dom/val (dom/$ :input.search (object/->content this)) v))

(defn set-location [this v]
  (dom/val (dom/$ :input.loc (object/->content this)) v))

(defn search-current-folder []
  (set-location search/searcher "<folder>")
  (cmd/exec! :searcher.show))

(cmd/command {:command :ltfiles.search-current-folder
              :desc "ltfiles: Searches current folder"
              :exec search-current-folder})

(defn search-current-file []
  (set-location search/searcher "<file>")
  (cmd/exec! :searcher.show))

(cmd/command {:command :ltfiles.search-current-file
              :desc "ltfiles: Searches current file"
              :exec search-current-file})

(defn search-current-file-with-current-word []
  (set-search search/searcher (clojure/current-word))
  (set-location search/searcher "<file>")
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :ltfiles.search-current-file-with-current-word
              :desc "ltfiles: Searches current file with current word"
              :exec search-current-file-with-current-word})


(defn search-current-folder-with-current-word []
  (set-search search/searcher (clojure/current-word))
  (set-location search/searcher "<folder>")
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :ltfiles.search-current-folder-with-current-word
              :desc "ltfiles: Searches current folder with current word"
              :exec search-current-folder-with-current-word})
