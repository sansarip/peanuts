(defproject peanuts "0.5.5"
  :description "Packing peanuts for decoupling Reagent Form-1 components from Re-frame subscriptions"
  :url "https://github.com/sansarip/peanuts"
  :signing {:gpg-key "pehrans@gmail.com"}
  :test-paths ["test/cljc"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/test.check "1.0.0"]]
  :repl-options {:init-ns peanuts.core}
  :source-paths ["src/cljc"]
  :aliases {"fig:prod"       ["with-profile" "devcards" "run" "-m" "figwheel.main" "-bo" "prod"]
            "fig:dev"        ["with-profile" "devcards" "trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "deploy:clojars" ["with-profile" "peanuts" "deploy" "clojars"]}
  :profiles {:test     {:source-paths ["src/cljc" "src/cljs" "test/deps"]}
             :peanuts  {:source-paths ["src/cljc" "src/cljs"]}
             :devcards {:source-paths ["devcards/src/cljs" "devcards/src/cljc"]
                        :dependencies [[com.bhauman/figwheel-main "0.2.13"]
                                       [org.clojure/tools.namespace "1.1.0"]
                                       [org.clojure/clojurescript "1.10.866"]
                                       [re-frame "1.2.0"]
                                       [reagent "0.8.1"]
                                       [re-catch "0.1.4"]
                                       [devcards "0.2.6"]
                                       [cljstache "2.0.6"]
                                       [net.dhleong/spade "1.0.4"]]}})

