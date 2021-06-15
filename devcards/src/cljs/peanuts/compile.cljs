(ns peanuts.compile
  (:require
    [peanuts.macros :as pm :refer-macros [literally]]
    [cljs.js :as cljs-js]))

;; Copied from https://github.com/ctford/klangmeister/blob/a9cdae2c3d0b71e458576fb693f5cf4654ba73e9/src/klangmeister/compile/eval.cljs
;; Thanks :-)

(def dependencies
  "A bundle of dependencies."
  (pm/sources
    clojure.set
    clojure.walk
    peanuts.core
    peanuts.cards.ex-c228
    peanuts.cards.ex-e6c7
    peanuts.cards.ex-a226
    peanuts.cards.ex-f82c
    peanuts.cards.ex-b6a6
    peanuts.cards.ex-dd80
    peanuts.cards.ex-aa95))

(def namespace-declaration
  (literally
    (ns cljs.user
      (:require-macros [peanuts.core :refer [defnc fnc]]))))

(defn loader
  "A namespace loader that looks in the dependencies bundle for required namespaces."
  [{:keys [name]} callback]
  (let [str-name (.-str name)
        source (dependencies str-name)]
    (if source
      (js/console.log (str "Loading " str-name))
      (js/console.log (str "Unable to load " str-name)))
    (callback {:lang :clj :source (str source)})))

(def state
  "A compiler state, which is shared across compilations."
  (cljs-js/empty-state))

(defn evaluate
  [s cb]
  (cljs-js/eval-str
    state
    s
    nil
    {:eval cljs-js/js-eval
     :load loader}
    cb))
