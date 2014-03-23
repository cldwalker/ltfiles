(ns lt.plugins.ltfiles.popup
  "Generic input, thanks to https://github.com/kuznicki-me/gitlight/blob/master/src/lt/plugins/gitlight/commit.cljs"
  (:require [lt.objs.popup :as popup]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui input-html [this]
  [:input.option {:type "text" :placeholder (bound this :placeholder)}]
  ;; this is a hack to get at the input value on submit
  :keyup (fn [e]
           (this-as me
                    (swap! this assoc :input-value (dom/val me)))))

(object/object* ::basic-input
                :tags #{:basic-input}
                :init (fn [this opts]
                        (input-html this)))

(defn ->input [attrs]
  (doto (object/create ::basic-input)
      (object/merge! attrs)))

(def basic-input (->input {:placeholder ""}))

;; TODO: focus should be on input, not cancel
;; autofocus nor tabindex work
(defn input [input-obj action-fn & {:as opts}]
  (when (:placeholder opts)
    (object/merge! input-obj (select-keys opts [:placeholder])))
  (popup/popup! {:header  (or (:header opts) "Enter value")
                 :body (input-html input-obj)
                 :buttons [{:label "Submit"
                            :action (fn []
                                      ;; why can't we just read from the input elem here?
                                      (action-fn (-> input-obj deref :input-value))) }
                           {:label "Cancel"}]}))

(defn info
  "Display an info popup given a list of items to display."
  [data & {:as opts}]
  (let [opts (merge {:buttons [{:label "Done"}]}
                    opts
                    {:body (list [:ul
                                  (map #(vector :li %) data)])})]
    (popup/popup! opts)))

(comment
  (do
    (popup basic-input #(prn "SUBMIT" %)
           :placeholder "URL"
           :header "Enter url")
    (.focus (-> @basic-input :content)))
  )
