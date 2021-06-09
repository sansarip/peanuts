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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__17189){
var map__17190 = p__17189;
var map__17190__$1 = cljs.core.__destructure_map.call(null,map__17190);
var operation = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__17190__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__17191_17211 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__17192_17212 = null;
var count__17193_17213 = (0);
var i__17194_17214 = (0);
while(true){
if((i__17194_17214 < count__17193_17213)){
var vec__17203_17215 = cljs.core._nth.call(null,chunk__17192_17212,i__17194_17214);
var k_17216 = cljs.core.nth.call(null,vec__17203_17215,(0),null);
var cb_17217 = cljs.core.nth.call(null,vec__17203_17215,(1),null);
try{cb_17217.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e17206){var e_17218 = e17206;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_17216,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_17218);
}

var G__17219 = seq__17191_17211;
var G__17220 = chunk__17192_17212;
var G__17221 = count__17193_17213;
var G__17222 = (i__17194_17214 + (1));
seq__17191_17211 = G__17219;
chunk__17192_17212 = G__17220;
count__17193_17213 = G__17221;
i__17194_17214 = G__17222;
continue;
} else {
var temp__5720__auto___17223 = cljs.core.seq.call(null,seq__17191_17211);
if(temp__5720__auto___17223){
var seq__17191_17224__$1 = temp__5720__auto___17223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17191_17224__$1)){
var c__4649__auto___17225 = cljs.core.chunk_first.call(null,seq__17191_17224__$1);
var G__17226 = cljs.core.chunk_rest.call(null,seq__17191_17224__$1);
var G__17227 = c__4649__auto___17225;
var G__17228 = cljs.core.count.call(null,c__4649__auto___17225);
var G__17229 = (0);
seq__17191_17211 = G__17226;
chunk__17192_17212 = G__17227;
count__17193_17213 = G__17228;
i__17194_17214 = G__17229;
continue;
} else {
var vec__17207_17230 = cljs.core.first.call(null,seq__17191_17224__$1);
var k_17231 = cljs.core.nth.call(null,vec__17207_17230,(0),null);
var cb_17232 = cljs.core.nth.call(null,vec__17207_17230,(1),null);
try{cb_17232.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e17210){var e_17233 = e17210;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_17231,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_17233);
}

var G__17234 = cljs.core.next.call(null,seq__17191_17224__$1);
var G__17235 = null;
var G__17236 = (0);
var G__17237 = (0);
seq__17191_17211 = G__17234;
chunk__17192_17212 = G__17235;
count__17193_17213 = G__17236;
i__17194_17214 = G__17237;
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
