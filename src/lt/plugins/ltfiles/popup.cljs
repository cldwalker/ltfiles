(ns lt.plugins.ltfiles.popup
  "Generic input thanks to lt/objs/plugins.cljs"
  (:require [lt.objs.popup :as popup]
            [lt.util.dom :as dom]
            [lt.objs.context :as ctx])
  (:require-macros [lt.macros :refer [defui behavior]]))

(defui text-input [m]
  [:input {:type "text" :placeholder (:placeholder m)}]
  :focus (fn []
           (ctx/in! :popup.input))
  :blur (fn []
          (ctx/out! :popup.input)))

(defn input [action-fn & {:as opts}]
  (let [input (text-input opts)
        p (popup/popup! {:header  (or (:header opts) "Enter value")
                         :body input
                         :buttons [{:label "Cancel"}
                                   {:label "Submit"
                                    :action (fn []
                                              (action-fn (dom/val input)))}]})]
    (dom/focus input)
    (.setSelectionRange input 1000 1000)))

(defn info
  "Display an info popup given a list of items to display."
  [data & {:as opts}]
  (let [opts (merge {:buttons [{:label "Done"}]}
                    opts
                    {:body (list [:ul
                                  (map #(vector :li %) data)])})]
    (popup/popup! opts)))
