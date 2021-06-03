(defproject peanuts "0.5.0"
  :description "Packing peanuts for decoupling Reagent Form-1 components from Re-frame subscriptions"
  :url "https://github.com/sansarip/peanuts"
  :signing {:gpg-key "pehrans@gmail.com"}
  :source-paths ["src/cljc" "src/cljs"]
  :test-paths ["test/cljc"]
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/test.check "1.0.0"]]
  :repl-options {:init-ns peanuts.core}
  :aliases {"fig:prod"   ["run" "-m" "figwheel.main" "-bo" "prod"]
            "fig:dev"    ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]}
  :profiles {:dev      {:dependencies [[day8.re-frame/re-frame-10x "1.1.1"]]}
             :devcards {:source-paths ["devcards/cljs"]
                        :dependencies [[com.bhauman/figwheel-main "0.2.13"]
                                       [org.clojure/clojurescript "1.10.866"]
                                       [reagent "1.0.0"]
                                       [re-frame "1.2.0"]
                                       [devcards "0.2.7"]]}})
