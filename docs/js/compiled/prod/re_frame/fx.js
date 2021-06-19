// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__30387 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30388 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30388);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___30421 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___30421)){
var new_db_30422 = temp__5720__auto___30421;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_30422);
} else {
}

var seq__30389 = cljs.core.seq.call(null,effects_without_db);
var chunk__30390 = null;
var count__30391 = (0);
var i__30392 = (0);
while(true){
if((i__30392 < count__30391)){
var vec__30399 = cljs.core._nth.call(null,chunk__30390,i__30392);
var effect_key = cljs.core.nth.call(null,vec__30399,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30399,(1),null);
var temp__5718__auto___30423 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30423)){
var effect_fn_30424 = temp__5718__auto___30423;
effect_fn_30424.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30425 = seq__30389;
var G__30426 = chunk__30390;
var G__30427 = count__30391;
var G__30428 = (i__30392 + (1));
seq__30389 = G__30425;
chunk__30390 = G__30426;
count__30391 = G__30427;
i__30392 = G__30428;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30389);
if(temp__5720__auto__){
var seq__30389__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30389__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30389__$1);
var G__30429 = cljs.core.chunk_rest.call(null,seq__30389__$1);
var G__30430 = c__4649__auto__;
var G__30431 = cljs.core.count.call(null,c__4649__auto__);
var G__30432 = (0);
seq__30389 = G__30429;
chunk__30390 = G__30430;
count__30391 = G__30431;
i__30392 = G__30432;
continue;
} else {
var vec__30402 = cljs.core.first.call(null,seq__30389__$1);
var effect_key = cljs.core.nth.call(null,vec__30402,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30402,(1),null);
var temp__5718__auto___30433 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30433)){
var effect_fn_30434 = temp__5718__auto___30433;
effect_fn_30434.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30435 = cljs.core.next.call(null,seq__30389__$1);
var G__30436 = null;
var G__30437 = (0);
var G__30438 = (0);
seq__30389 = G__30435;
chunk__30390 = G__30436;
count__30391 = G__30437;
i__30392 = G__30438;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__17497__auto___30439 = re_frame.interop.now.call(null);
var duration__17498__auto___30440 = (end__17497__auto___30439 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__17498__auto___30440,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__17497__auto___30439);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30387);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5720__auto___30441 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5720__auto___30441)){
var new_db_30442 = temp__5720__auto___30441;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_30442);
} else {
}

var seq__30405 = cljs.core.seq.call(null,effects_without_db);
var chunk__30406 = null;
var count__30407 = (0);
var i__30408 = (0);
while(true){
if((i__30408 < count__30407)){
var vec__30415 = cljs.core._nth.call(null,chunk__30406,i__30408);
var effect_key = cljs.core.nth.call(null,vec__30415,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30415,(1),null);
var temp__5718__auto___30443 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30443)){
var effect_fn_30444 = temp__5718__auto___30443;
effect_fn_30444.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30445 = seq__30405;
var G__30446 = chunk__30406;
var G__30447 = count__30407;
var G__30448 = (i__30408 + (1));
seq__30405 = G__30445;
chunk__30406 = G__30446;
count__30407 = G__30447;
i__30408 = G__30448;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30405);
if(temp__5720__auto__){
var seq__30405__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30405__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30405__$1);
var G__30449 = cljs.core.chunk_rest.call(null,seq__30405__$1);
var G__30450 = c__4649__auto__;
var G__30451 = cljs.core.count.call(null,c__4649__auto__);
var G__30452 = (0);
seq__30405 = G__30449;
chunk__30406 = G__30450;
count__30407 = G__30451;
i__30408 = G__30452;
continue;
} else {
var vec__30418 = cljs.core.first.call(null,seq__30405__$1);
var effect_key = cljs.core.nth.call(null,vec__30418,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30418,(1),null);
var temp__5718__auto___30453 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30453)){
var effect_fn_30454 = temp__5718__auto___30453;
effect_fn_30454.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30455 = cljs.core.next.call(null,seq__30405__$1);
var G__30456 = null;
var G__30457 = (0);
var G__30458 = (0);
seq__30405 = G__30455;
chunk__30406 = G__30456;
count__30407 = G__30457;
i__30408 = G__30458;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__30459){
var map__30460 = p__30459;
var map__30460__$1 = cljs.core.__destructure_map.call(null,map__30460);
var effect = map__30460__$1;
var ms = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30460__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__30461 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30462 = null;
var count__30463 = (0);
var i__30464 = (0);
while(true){
if((i__30464 < count__30463)){
var effect = cljs.core._nth.call(null,chunk__30462,i__30464);
re_frame.fx.dispatch_later.call(null,effect);


var G__30465 = seq__30461;
var G__30466 = chunk__30462;
var G__30467 = count__30463;
var G__30468 = (i__30464 + (1));
seq__30461 = G__30465;
chunk__30462 = G__30466;
count__30463 = G__30467;
i__30464 = G__30468;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30461);
if(temp__5720__auto__){
var seq__30461__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30461__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30461__$1);
var G__30469 = cljs.core.chunk_rest.call(null,seq__30461__$1);
var G__30470 = c__4649__auto__;
var G__30471 = cljs.core.count.call(null,c__4649__auto__);
var G__30472 = (0);
seq__30461 = G__30469;
chunk__30462 = G__30470;
count__30463 = G__30471;
i__30464 = G__30472;
continue;
} else {
var effect = cljs.core.first.call(null,seq__30461__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__30473 = cljs.core.next.call(null,seq__30461__$1);
var G__30474 = null;
var G__30475 = (0);
var G__30476 = (0);
seq__30461 = G__30473;
chunk__30462 = G__30474;
count__30463 = G__30475;
i__30464 = G__30476;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__30477 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__30478 = null;
var count__30479 = (0);
var i__30480 = (0);
while(true){
if((i__30480 < count__30479)){
var vec__30487 = cljs.core._nth.call(null,chunk__30478,i__30480);
var effect_key = cljs.core.nth.call(null,vec__30487,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30487,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___30493 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30493)){
var effect_fn_30494 = temp__5718__auto___30493;
effect_fn_30494.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__30495 = seq__30477;
var G__30496 = chunk__30478;
var G__30497 = count__30479;
var G__30498 = (i__30480 + (1));
seq__30477 = G__30495;
chunk__30478 = G__30496;
count__30479 = G__30497;
i__30480 = G__30498;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30477);
if(temp__5720__auto__){
var seq__30477__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30477__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30477__$1);
var G__30499 = cljs.core.chunk_rest.call(null,seq__30477__$1);
var G__30500 = c__4649__auto__;
var G__30501 = cljs.core.count.call(null,c__4649__auto__);
var G__30502 = (0);
seq__30477 = G__30499;
chunk__30478 = G__30500;
count__30479 = G__30501;
i__30480 = G__30502;
continue;
} else {
var vec__30490 = cljs.core.first.call(null,seq__30477__$1);
var effect_key = cljs.core.nth.call(null,vec__30490,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30490,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5718__auto___30503 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30503)){
var effect_fn_30504 = temp__5718__auto___30503;
effect_fn_30504.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__30505 = cljs.core.next.call(null,seq__30477__$1);
var G__30506 = null;
var G__30507 = (0);
var G__30508 = (0);
seq__30477 = G__30505;
chunk__30478 = G__30506;
count__30479 = G__30507;
i__30480 = G__30508;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__30509 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30510 = null;
var count__30511 = (0);
var i__30512 = (0);
while(true){
if((i__30512 < count__30511)){
var event = cljs.core._nth.call(null,chunk__30510,i__30512);
re_frame.router.dispatch.call(null,event);


var G__30513 = seq__30509;
var G__30514 = chunk__30510;
var G__30515 = count__30511;
var G__30516 = (i__30512 + (1));
seq__30509 = G__30513;
chunk__30510 = G__30514;
count__30511 = G__30515;
i__30512 = G__30516;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30509);
if(temp__5720__auto__){
var seq__30509__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30509__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30509__$1);
var G__30517 = cljs.core.chunk_rest.call(null,seq__30509__$1);
var G__30518 = c__4649__auto__;
var G__30519 = cljs.core.count.call(null,c__4649__auto__);
var G__30520 = (0);
seq__30509 = G__30517;
chunk__30510 = G__30518;
count__30511 = G__30519;
i__30512 = G__30520;
continue;
} else {
var event = cljs.core.first.call(null,seq__30509__$1);
re_frame.router.dispatch.call(null,event);


var G__30521 = cljs.core.next.call(null,seq__30509__$1);
var G__30522 = null;
var G__30523 = (0);
var G__30524 = (0);
seq__30509 = G__30521;
chunk__30510 = G__30522;
count__30511 = G__30523;
i__30512 = G__30524;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__30525 = cljs.core.seq.call(null,value);
var chunk__30526 = null;
var count__30527 = (0);
var i__30528 = (0);
while(true){
if((i__30528 < count__30527)){
var event = cljs.core._nth.call(null,chunk__30526,i__30528);
clear_event.call(null,event);


var G__30529 = seq__30525;
var G__30530 = chunk__30526;
var G__30531 = count__30527;
var G__30532 = (i__30528 + (1));
seq__30525 = G__30529;
chunk__30526 = G__30530;
count__30527 = G__30531;
i__30528 = G__30532;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30525);
if(temp__5720__auto__){
var seq__30525__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30525__$1)){
var c__4649__auto__ = cljs.core.chunk_first.call(null,seq__30525__$1);
var G__30533 = cljs.core.chunk_rest.call(null,seq__30525__$1);
var G__30534 = c__4649__auto__;
var G__30535 = cljs.core.count.call(null,c__4649__auto__);
var G__30536 = (0);
seq__30525 = G__30533;
chunk__30526 = G__30534;
count__30527 = G__30535;
i__30528 = G__30536;
continue;
} else {
var event = cljs.core.first.call(null,seq__30525__$1);
clear_event.call(null,event);


var G__30537 = cljs.core.next.call(null,seq__30525__$1);
var G__30538 = null;
var G__30539 = (0);
var G__30540 = (0);
seq__30525 = G__30537;
chunk__30526 = G__30538;
count__30527 = G__30539;
i__30528 = G__30540;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));
