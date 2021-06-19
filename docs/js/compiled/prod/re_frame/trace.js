// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__17519){
var map__17520 = p__17519;
var map__17520__$1 = cljs.core.__destructure_map.call(null,map__17520);
var operation = cljs.core.get.call(null,map__17520__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__17520__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__17520__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__17520__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__17521_17541 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__17522_17542 = null;
var count__17523_17543 = (0);
var i__17524_17544 = (0);
while(true){
if((i__17524_17544 < count__17523_17543)){
var vec__17533_17545 = cljs.core._nth.call(null,chunk__17522_17542,i__17524_17544);
var k_17546 = cljs.core.nth.call(null,vec__17533_17545,(0),null);
var cb_17547 = cljs.core.nth.call(null,vec__17533_17545,(1),null);
try{cb_17547.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e17536){var e_17548 = e17536;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_17546,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_17548);
}

var G__17549 = seq__17521_17541;
var G__17550 = chunk__17522_17542;
var G__17551 = count__17523_17543;
var G__17552 = (i__17524_17544 + (1));
seq__17521_17541 = G__17549;
chunk__17522_17542 = G__17550;
count__17523_17543 = G__17551;
i__17524_17544 = G__17552;
continue;
} else {
var temp__5720__auto___17553 = cljs.core.seq.call(null,seq__17521_17541);
if(temp__5720__auto___17553){
var seq__17521_17554__$1 = temp__5720__auto___17553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17521_17554__$1)){
var c__4649__auto___17555 = cljs.core.chunk_first.call(null,seq__17521_17554__$1);
var G__17556 = cljs.core.chunk_rest.call(null,seq__17521_17554__$1);
var G__17557 = c__4649__auto___17555;
var G__17558 = cljs.core.count.call(null,c__4649__auto___17555);
var G__17559 = (0);
seq__17521_17541 = G__17556;
chunk__17522_17542 = G__17557;
count__17523_17543 = G__17558;
i__17524_17544 = G__17559;
continue;
} else {
var vec__17537_17560 = cljs.core.first.call(null,seq__17521_17554__$1);
var k_17561 = cljs.core.nth.call(null,vec__17537_17560,(0),null);
var cb_17562 = cljs.core.nth.call(null,vec__17537_17560,(1),null);
try{cb_17562.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e17540){var e_17563 = e17540;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_17561,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_17563);
}

var G__17564 = cljs.core.next.call(null,seq__17521_17554__$1);
var G__17565 = null;
var G__17566 = (0);
var G__17567 = (0);
seq__17521_17541 = G__17564;
chunk__17522_17542 = G__17565;
count__17523_17543 = G__17566;
i__17524_17544 = G__17567;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
