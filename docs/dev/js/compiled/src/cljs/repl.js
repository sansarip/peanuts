// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15511){
var map__15512 = p__15511;
var map__15512__$1 = cljs.core.__destructure_map.call(null,map__15512);
var m = map__15512__$1;
var n = cljs.core.get.call(null,map__15512__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15513_15541 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15514_15542 = null;
var count__15515_15543 = (0);
var i__15516_15544 = (0);
while(true){
if((i__15516_15544 < count__15515_15543)){
var f_15545 = cljs.core._nth.call(null,chunk__15514_15542,i__15516_15544);
cljs.core.println.call(null,"  ",f_15545);


var G__15546 = seq__15513_15541;
var G__15547 = chunk__15514_15542;
var G__15548 = count__15515_15543;
var G__15549 = (i__15516_15544 + (1));
seq__15513_15541 = G__15546;
chunk__15514_15542 = G__15547;
count__15515_15543 = G__15548;
i__15516_15544 = G__15549;
continue;
} else {
var temp__5720__auto___15550 = cljs.core.seq.call(null,seq__15513_15541);
if(temp__5720__auto___15550){
var seq__15513_15551__$1 = temp__5720__auto___15550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15513_15551__$1)){
var c__4649__auto___15552 = cljs.core.chunk_first.call(null,seq__15513_15551__$1);
var G__15553 = cljs.core.chunk_rest.call(null,seq__15513_15551__$1);
var G__15554 = c__4649__auto___15552;
var G__15555 = cljs.core.count.call(null,c__4649__auto___15552);
var G__15556 = (0);
seq__15513_15541 = G__15553;
chunk__15514_15542 = G__15554;
count__15515_15543 = G__15555;
i__15516_15544 = G__15556;
continue;
} else {
var f_15557 = cljs.core.first.call(null,seq__15513_15551__$1);
cljs.core.println.call(null,"  ",f_15557);


var G__15558 = cljs.core.next.call(null,seq__15513_15551__$1);
var G__15559 = null;
var G__15560 = (0);
var G__15561 = (0);
seq__15513_15541 = G__15558;
chunk__15514_15542 = G__15559;
count__15515_15543 = G__15560;
i__15516_15544 = G__15561;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15562 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15562);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15562)))?cljs.core.second.call(null,arglists_15562):arglists_15562));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15517_15563 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15518_15564 = null;
var count__15519_15565 = (0);
var i__15520_15566 = (0);
while(true){
if((i__15520_15566 < count__15519_15565)){
var vec__15529_15567 = cljs.core._nth.call(null,chunk__15518_15564,i__15520_15566);
var name_15568 = cljs.core.nth.call(null,vec__15529_15567,(0),null);
var map__15532_15569 = cljs.core.nth.call(null,vec__15529_15567,(1),null);
var map__15532_15570__$1 = cljs.core.__destructure_map.call(null,map__15532_15569);
var doc_15571 = cljs.core.get.call(null,map__15532_15570__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15572 = cljs.core.get.call(null,map__15532_15570__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15568);

cljs.core.println.call(null," ",arglists_15572);

if(cljs.core.truth_(doc_15571)){
cljs.core.println.call(null," ",doc_15571);
} else {
}


var G__15573 = seq__15517_15563;
var G__15574 = chunk__15518_15564;
var G__15575 = count__15519_15565;
var G__15576 = (i__15520_15566 + (1));
seq__15517_15563 = G__15573;
chunk__15518_15564 = G__15574;
count__15519_15565 = G__15575;
i__15520_15566 = G__15576;
continue;
} else {
var temp__5720__auto___15577 = cljs.core.seq.call(null,seq__15517_15563);
if(temp__5720__auto___15577){
var seq__15517_15578__$1 = temp__5720__auto___15577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15517_15578__$1)){
var c__4649__auto___15579 = cljs.core.chunk_first.call(null,seq__15517_15578__$1);
var G__15580 = cljs.core.chunk_rest.call(null,seq__15517_15578__$1);
var G__15581 = c__4649__auto___15579;
var G__15582 = cljs.core.count.call(null,c__4649__auto___15579);
var G__15583 = (0);
seq__15517_15563 = G__15580;
chunk__15518_15564 = G__15581;
count__15519_15565 = G__15582;
i__15520_15566 = G__15583;
continue;
} else {
var vec__15533_15584 = cljs.core.first.call(null,seq__15517_15578__$1);
var name_15585 = cljs.core.nth.call(null,vec__15533_15584,(0),null);
var map__15536_15586 = cljs.core.nth.call(null,vec__15533_15584,(1),null);
var map__15536_15587__$1 = cljs.core.__destructure_map.call(null,map__15536_15586);
var doc_15588 = cljs.core.get.call(null,map__15536_15587__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15589 = cljs.core.get.call(null,map__15536_15587__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15585);

cljs.core.println.call(null," ",arglists_15589);

if(cljs.core.truth_(doc_15588)){
cljs.core.println.call(null," ",doc_15588);
} else {
}


var G__15590 = cljs.core.next.call(null,seq__15517_15578__$1);
var G__15591 = null;
var G__15592 = (0);
var G__15593 = (0);
seq__15517_15563 = G__15590;
chunk__15518_15564 = G__15591;
count__15519_15565 = G__15592;
i__15520_15566 = G__15593;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__15537 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15538 = null;
var count__15539 = (0);
var i__15540 = (0);
while(true){
if((i__15540 < count__15539)){
var role = cljs.core._nth.call(null,chunk__15538,i__15540);
var temp__5720__auto___15594__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15594__$1)){
var spec_15595 = temp__5720__auto___15594__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15595));
} else {
}


var G__15596 = seq__15537;
var G__15597 = chunk__15538;
var G__15598 = count__15539;
var G__15599 = (i__15540 + (1));
seq__15537 = G__15596;
chunk__15538 = G__15597;
count__15539 = G__15598;
i__15540 = G__15599;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__15537);
if(temp__5720__auto____$1){
var seq__15537__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15537__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__15537__$1);
var G__15600 = cljs.core.chunk_rest.call(null,seq__15537__$1);
var G__15601 = c__4649__auto__;
var G__15602 = cljs.core.count.call(null,c__4649__auto__);
var G__15603 = (0);
seq__15537 = G__15600;
chunk__15538 = G__15601;
count__15539 = G__15602;
i__15540 = G__15603;
continue;
} else {
var role = cljs.core.first.call(null,seq__15537__$1);
var temp__5720__auto___15604__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___15604__$2)){
var spec_15605 = temp__5720__auto___15604__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15605));
} else {
}


var G__15606 = cljs.core.next.call(null,seq__15537__$1);
var G__15607 = null;
var G__15608 = (0);
var G__15609 = (0);
seq__15537 = G__15606;
chunk__15538 = G__15607;
count__15539 = G__15608;
i__15540 = G__15609;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__15610 = cljs.core.conj.call(null,via,t);
var G__15611 = cljs.core.ex_cause.call(null,t);
via = G__15610;
t = G__15611;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__15614 = datafied_throwable;
var map__15614__$1 = cljs.core.__destructure_map.call(null,map__15614);
var via = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__15614__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15615 = cljs.core.last.call(null,via);
var map__15615__$1 = cljs.core.__destructure_map.call(null,map__15615);
var type = cljs.core.get.call(null,map__15615__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__15615__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__15615__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15616 = data;
var map__15616__$1 = cljs.core.__destructure_map.call(null,map__15616);
var problems = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__15616__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15617 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__15617__$1 = cljs.core.__destructure_map.call(null,map__15617);
var top_data = map__15617__$1;
var source = cljs.core.get.call(null,map__15617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__15618 = phase;
var G__15618__$1 = (((G__15618 instanceof cljs.core.Keyword))?G__15618.fqn:null);
switch (G__15618__$1) {
case "read-source":
var map__15619 = data;
var map__15619__$1 = cljs.core.__destructure_map.call(null,map__15619);
var line = cljs.core.get.call(null,map__15619__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15619__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15620 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__15620__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15620,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15620);
var G__15620__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15620__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15620__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15620__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15621 = top_data;
var G__15621__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15621,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15621);
var G__15621__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15621__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15621__$1);
var G__15621__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15621__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15621__$2);
var G__15621__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15621__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15621__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15621__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15621__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15622 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15622,(0),null);
var method = cljs.core.nth.call(null,vec__15622,(1),null);
var file = cljs.core.nth.call(null,vec__15622,(2),null);
var line = cljs.core.nth.call(null,vec__15622,(3),null);
var G__15625 = top_data;
var G__15625__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__15625,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15625);
var G__15625__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__15625__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15625__$1);
var G__15625__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.call(null,G__15625__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15625__$2);
var G__15625__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15625__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15625__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15625__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15625__$4;
}

break;
case "execution":
var vec__15626 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15626,(0),null);
var method = cljs.core.nth.call(null,vec__15626,(1),null);
var file = cljs.core.nth.call(null,vec__15626,(2),null);
var line = cljs.core.nth.call(null,vec__15626,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__15613_SHARP_){
var or__4223__auto__ = (p1__15613_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__15613_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__15629 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15629__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__15629,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15629);
var G__15629__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15629__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15629__$1);
var G__15629__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.call(null,G__15629__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15629__$2);
var G__15629__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__15629__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15629__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15629__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15629__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15618__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15633){
var map__15634 = p__15633;
var map__15634__$1 = cljs.core.__destructure_map.call(null,map__15634);
var triage_data = map__15634__$1;
var phase = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__15634__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__15635 = phase;
var G__15635__$1 = (((G__15635 instanceof cljs.core.Keyword))?G__15635.fqn:null);
switch (G__15635__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15636_15645 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15637_15646 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15638_15647 = true;
var _STAR_print_fn_STAR__temp_val__15639_15648 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15638_15647);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15639_15648);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__15631_SHARP_){
return cljs.core.dissoc.call(null,p1__15631_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15637_15646);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15636_15645);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15640_15649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15641_15650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15642_15651 = true;
var _STAR_print_fn_STAR__temp_val__15643_15652 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15642_15651);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15643_15652);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__15632_SHARP_){
return cljs.core.dissoc.call(null,p1__15632_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15641_15650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15640_15649);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15635__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
