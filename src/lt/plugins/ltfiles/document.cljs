(ns lt.plugins.ltfiles.document
  "Some doc helpers - mostly around swapDoc and linkDoc"
  (:require [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))

(defn update-editor-to-linked-doc!
  "Updates given editor to use a linked doc"
  [ed path doc]
  (let [info (merge {:mime "plaintext" :tags [:editor.plaintext]}
                    (lt.objs.opener/path->info path))
        ;; TODO: remove hardcoded brittle defaults
        ;; These defaults may not work for others and for specific file types
        default-tags #{:editor.inline-result :tabset.tab :editor.keys.vim.normal
                       :editor.file-backed :object :editor.keys.vim :editor.keys.emacs :editor}
        default-editor-keys #{:info :lt.object/id :lt.object/type :lt.objs.tabs/tabset :doc :tags
                              :editor.generation :content :triggers :ed :children
                              :listeners :behaviors :lt.objs.editor.pool/comment-options}
        outdated-editor-keys (clojure.set/difference (set (keys @ed)) default-editor-keys)]
    (lt.objs.document/register-doc doc path)
    (lt.objs.editor/set-doc! ed doc)
    ;; these should update listeners
    (lt.object/remove-tags ed (clojure.set/difference (:tags @ed) default-tags))
    (lt.object/add-tags ed (into default-tags (:tags info [])))
    (lt.object/merge! ed {:info info})
    (swap! ed #(apply dissoc % outdated-editor-keys))
    (when-let [ts (:lt.objs.tabs/tabset @ed)]
      (lt.object/raise ts :tab.updated))))

(defn update-editor-path!
  "Updates given editor to edit a new path. Appropriately swaps CM doc object,
  refreshes editor keys and updates editor's tab, :tags, :info and :listeners."
  [ed path]
  (update-editor-to-linked-doc!
   ed
   path
   (lt.objs.document/create {:line-ending lt.objs.files/line-ending
                             :mime (:mime info)
                             :mtime (lt.objs.files/stats path)
                             :content (:content (lt.objs.files/open-sync path))})))

(def old-open-path (aget lt.objs.opener "open_path"))

(def open-in-current-editor false)

(defn new-open-path [obj path]
  (if open-in-current-editor
    (update-editor-path!
     (lt.objs.editor.pool/last-active) path)
    (old-open-path obj path)))

;; Override open-path to be to control how to open a path
;; Consider PR upstream to make this less gross
(aset lt.objs.opener "open_path" new-open-path)

(behavior ::open-with-jump-stack-on-select
          :desc "Alternative to lt.objs.sidebar.navigate/open-on-select that uses jump-stack"
          :triggers #{:select}
          :reaction (fn [this cur]
                      (lt.object/raise lt.objs.jump-stack/jump-stack
                                       :jump-stack.push!
                                       (lt.objs.editor.pool/last-active)
                                       (:full cur)
                                       {:line 0 :ch 0})))

(cmd/command {:command :ltfiles.toggle-open-in-current-editor
              :desc "Toggles whether opening a new file should open in new or existing tab."
              :exec (fn []
                      (def open-in-current-editor (not open-in-current-editor))
                      (notifos/set-msg! (str "open-in-current-editor is "
                                             open-in-current-editor)))})

(comment
  (def path (get-in @ed [:info :path]))
  (def ed (first (pool/containing-path "sacha.cljs")))

  (lt.objs.document/create-sub (:doc @ed))
  (def ldoc (-> @ed :doc deref :sub-docs last))

  (def ed2 (first (pool/containing-path "codemirror.cljs")))
  (update-editor-to-linked-doc! ed2 path ldoc)

  )
