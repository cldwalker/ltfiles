(ns lt.plugins.user.search
 (:require [lt.objs.search :as search]
           [lt.object :as object]
           [lt.util.dom :as dom]
           [lt.objs.command :as cmd]
           [clojure.string :as s]
           [lt.objs.files :as files]
           [lt.plugins.user.clojure :as clojure]
           [goog.string :as gs]
           [lt.plugins.user.util :as util]))

(defmethod search/location "<directory>" [_]
  [(util/current-directory)])

(defmethod search/location "<file>" [_]
  [(util/current-file)])

(defmethod search/location "<folder>" [_]
  [(util/current-folder)])

(defmethod search/location "<plugins>" [_]
  [(files/lt-user-dir "plugins")])

(defn set-search [this v]
  (dom/val (dom/$ :input.search (object/->content this)) v))

(defn set-location [this v]
  (dom/val (dom/$ :input.loc (object/->content this)) v))

(defn set-replace [this v]
  (dom/val (dom/$ :input.replace (object/->content this)) v))

(defn open-search-for [path]
  (set-location search/searcher path)
  (cmd/exec! :user.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show))

;; These commands could be composed in user.behaviors but that seems too messy
;; Would like to add selection detection to these but am limited by vim keys not
;; picking up selection

(cmd/command {:command :user.search-current-directory
              :desc "User: Searches current directory"
              :exec (partial open-search-for "<directory>")})

(cmd/command {:command :user.search-current-folder
              :desc "User: Searches current folder"
              :exec (partial open-search-for "<folder>")})

(cmd/command {:command :user.search-current-file
              :desc "User: Searches current file"
              :exec (partial open-search-for "<file>")})

(defn search-current-file-with-current-word []
  (set-search search/searcher (clojure/current-word))
  (set-location search/searcher "<file>")
  (cmd/exec! :user.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :user.search-current-file-with-current-word
              :desc "User: Searches current file with current word"
              :exec search-current-file-with-current-word})


(defn search-current-folder-with-current-word []
  (set-search search/searcher (clojure/current-word))
  (set-location search/searcher "<folder>")
  (cmd/exec! :user.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :user.search-current-folder-with-current-word
              :desc "User: Searches current folder with current word"
              :exec search-current-folder-with-current-word})

(defn search-current-folder-for-fn-usage []
  (set-search search/searcher
              (s/replace-first "/\\((\\S+\\/)?%s\\s+/" "%s" (gs/regExpEscape (clojure/current-word))))
  (set-location search/searcher "<folder>")
  (cmd/exec! :user.ensure-and-focus-second-tabset)
  (cmd/exec! :searcher.show)
  (cmd/exec! :searcher.search))

(cmd/command {:command :user.search-current-folder-for-fn-usage
              :desc "User: Searches current folder for fn usage"
              :exec search-current-folder-for-fn-usage})
