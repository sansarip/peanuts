// Compiled by ClojureScript 1.10.866 {:optimizations :none}
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
var G__9096__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9097__i = 0, G__9097__a = new Array(arguments.length -  0);
while (G__9097__i < G__9097__a.length) {G__9097__a[G__9097__i] = arguments[G__9097__i + 0]; ++G__9097__i;}
  args = new cljs.core.IndexedSeq(G__9097__a,0,null);
} 
return G__9096__delegate.call(this,args);};
G__9096.cljs$lang$maxFixedArity = 0;
G__9096.cljs$lang$applyTo = (function (arglist__9098){
var args = cljs.core.seq(arglist__9098);
return G__9096__delegate(args);
});
G__9096.cljs$core$IFn$_invoke$arity$variadic = G__9096__delegate;
return G__9096;
})()
);

(o.error = (function() { 
var G__9099__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9100__i = 0, G__9100__a = new Array(arguments.length -  0);
while (G__9100__i < G__9100__a.length) {G__9100__a[G__9100__i] = arguments[G__9100__i + 0]; ++G__9100__i;}
  args = new cljs.core.IndexedSeq(G__9100__a,0,null);
} 
return G__9099__delegate.call(this,args);};
G__9099.cljs$lang$maxFixedArity = 0;
G__9099.cljs$lang$applyTo = (function (arglist__9101){
var args = cljs.core.seq(arglist__9101);
return G__9099__delegate(args);
});
G__9099.cljs$core$IFn$_invoke$arity$variadic = G__9099__delegate;
return G__9099;
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

//# sourceMappingURL=debug.js.map
