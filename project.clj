(defproject peanuts "0.5.2"
  :description "Packing peanuts for decoupling Reagent Form-1 components from Re-frame subscriptions"
  :url "https://github.com/sansarip/peanuts"
  :signing {:gpg-key "pehrans@gmail.com"}
  :source-paths ["src/cljc" "src/cljs"]
  :test-paths ["test/cljc"]
  :clean-targets ^{:protect false} ["resources/public/dev/js/compiled" "resources/public/js/compiled" "target"]
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/test.check "1.0.0"]]
  :repl-options {:init-ns peanuts.core}
  :aliases {"fig:prod" ["run" "-m" "figwheel.main" "-bo" "prod"]
            "fig:dev"  ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}
  :profiles {:test     {:source-paths ["test/deps"]}
             :devcards {:source-paths ["devcards/cljs" "devcards/cljc"]
                        :dependencies [[com.bhauman/figwheel-main "0.2.13"]
                                       [org.clojure/clojurescript "1.10.866"]
                                       [re-frame "1.2.0"]
                                       [reagent "1.0.0"]
                                       [devcards "0.2.6"]
                                       [cljstache "2.0.6"]]}})
