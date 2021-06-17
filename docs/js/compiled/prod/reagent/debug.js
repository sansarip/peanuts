// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12424__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12424 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12425__i = 0, G__12425__a = new Array(arguments.length -  0);
while (G__12425__i < G__12425__a.length) {G__12425__a[G__12425__i] = arguments[G__12425__i + 0]; ++G__12425__i;}
  args = new cljs.core.IndexedSeq(G__12425__a,0,null);
} 
return G__12424__delegate.call(this,args);};
G__12424.cljs$lang$maxFixedArity = 0;
G__12424.cljs$lang$applyTo = (function (arglist__12426){
var args = cljs.core.seq(arglist__12426);
return G__12424__delegate(args);
});
G__12424.cljs$core$IFn$_invoke$arity$variadic = G__12424__delegate;
return G__12424;
})()
);

(o.error = (function() { 
var G__12427__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__12427 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12428__i = 0, G__12428__a = new Array(arguments.length -  0);
while (G__12428__i < G__12428__a.length) {G__12428__a[G__12428__i] = arguments[G__12428__i + 0]; ++G__12428__i;}
  args = new cljs.core.IndexedSeq(G__12428__a,0,null);
} 
return G__12427__delegate.call(this,args);};
G__12427.cljs$lang$maxFixedArity = 0;
G__12427.cljs$lang$applyTo = (function (arglist__12429){
var args = cljs.core.seq(arglist__12429);
return G__12427__delegate(args);
});
G__12427.cljs$core$IFn$_invoke$arity$variadic = G__12427__delegate;
return G__12427;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
