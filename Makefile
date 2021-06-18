sym-link-peanuts:
	ln -s $$(pwd)/src/cljc/peanuts/core.cljc devcards/src/cljc/peanuts/core.cljc

build-docs:
	lein clean
	lein fig:prod
	cp -rf resources/public/* docs/
	git add docs/