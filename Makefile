sym-link-peanuts:
	cd devcards/src/cljc/peanuts && \
	ln -sf ../../../src/cljc/peanuts/core.cljc core.cljc  || true

build-docs:
	lein clean
	lein fig:prod
	cp -rf resources/public/* docs/
	git add docs/