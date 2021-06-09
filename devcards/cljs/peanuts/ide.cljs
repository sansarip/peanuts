(ns peanuts.ide
  (:require
    [peanuts.macros :refer [assoc-component-state]]
    [cljs.pprint :refer [pprint]]
    [cljs.js :refer [empty-state eval eval-str js-eval]]
    [cljs.tools.reader :refer [read-string]]
    [re-catch.core :as rc]
    [reagent.core :as r :refer [dom-node create-class with-let]]
    [peanuts.styles :as styles]
    [peanuts.compile :as compile]
    [hljs-kit :refer [Hljs CljHljs] :rename {Hljs hljs CljHljs clj-hljs}]
    [cljs.spec.alpha :as s]))

(s/def ::hiccup? (s/and vector? #(-> % first keyword?)))

(defn hiccup? [v]
  (s/valid? ::hiccup? v))

(defonce _register (doto hljs
                     (.registerLanguage "clojure" clj-hljs)
                     (.registerLanguage "clj" clj-hljs)))

(defn editor-did-mount [input]
  (fn [this]
    (let [cm (.fromTextArea js/CodeMirror
                            (dom-node this)
                            #js {:mode              "clojure"
                                 :lineNumbers       true
                                 :autoCloseBrackets true
                                 :matchBrackets     true})
          on-change (.. this -props -onChange)]
      (.on cm "change" #(let [val (.getValue %)]
                          (try
                            (do (reset! input val)
                                (if on-change (on-change val)))
                            (catch js/Error _e)))))))

(defn editor [input default-value]
  (create-class
    {:render              (fn [this]
                            (let [on-change (.. this -props -onChange)]
                              [:textarea
                               {:default-value default-value
                                :on-change     on-change
                                :auto-complete "off"}]))
     :component-did-mount (editor-did-mount input)}))

(defn render-code [_this]
  (-> js/document
      (.querySelectorAll "pre code")
      (.forEach #(.highlightBlock hljs %))))

(defn result-view [output]
  (create-class
    {:render              (fn [_this]
                            [rc/catch
                             [:div {:class (styles/result-view-class)}
                              #_[:> icon {:icon-name     "chevron-right"
                                          :strength      "strong"
                                          :extra-classes "prompt"}]
                              [:div ">"]
                              (condp apply [output]
                                ;; render as hiccup if...
                                ;; hiccup vector?
                                hiccup? [:div.hiccup [(fn [] output)]] ; this fn wrapping is necessary to prevent errors
                                ;; function?
                                fn? [:div.hiccup [output]]
                                ;; everything else is treated as Clojure code
                                [:pre>code.clj
                                 [:span.other
                                  (with-out-str (pprint output))]])]])
     :component-did-mount render-code}))

(def ide
  (create-class
    {:get-initial-state
     (fn [_this]
       #js {:input-atom (atom nil)
            :key        (str (random-uuid))})
     :component-did-mount
     (fn [this]
       ((.. this -props -evalFn)
        (.. this -props -defaultInput)
        (fn [o]
          (assoc-component-state this -output o)
          (assoc-component-state this -key (str (random-uuid))))))
     :render
     (fn [this]
       (let [state (js->clj (.-state this) :keywordize-keys true)
             eval-fn (.. this -props -evalFn)
             default-input (.. this -props -defaultInput)]
         [:div
          (r/with-let [editor* [:> (editor (:input-atom state) default-input)
                                {:on-change #(eval-fn
                                               %
                                               (fn [o]
                                                 (assoc-component-state this -output o)
                                                 (assoc-component-state this -key (str (random-uuid)))))}]]
            editor*)
          [:div
           ^{:key (:key state)}
           [result-view (:value (:output state))]]]))}))

