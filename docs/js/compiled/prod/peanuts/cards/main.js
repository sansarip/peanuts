// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('peanuts.cards.main');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('peanuts.repl');
goog.require('peanuts.compile');
goog.require('peanuts.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"World",new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(3),null], null), null)], null));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141),(function (db){
return new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141)], null),(function (selected_ids,p__30915){
var vec__30916 = p__30915;
var _ = cljs.core.nth.call(null,vec__30916,(0),null);
var id = cljs.core.nth.call(null,vec__30916,(1),null);
return cljs.core.contains_QMARK_.call(null,selected_ids,id);
}));
peanuts.cards.main.repl_STAR_ = (function peanuts$cards$main$repl_STAR_(source_ns_str){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),peanuts.repl.repl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),peanuts.compile.evaluate,new cljs.core.Keyword(null,"default-input","default-input",-410036564),peanuts.compile.dependencies.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_ns_str))], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"form-1-components","form-1-components",1154907167)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"form-1-components",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Here's how form-1 components are usually defined and used.\n  Components defined like this can be more difficult to reuse\n  in other projects, and can contribute to making test code more complex.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30919 = (function (meta30920){
this.meta30920 = meta30920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30921,meta30920__$1){
var self__ = this;
var _30921__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30919(meta30920__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30921){
var self__ = this;
var _30921__$1 = this;
return self__.meta30920;
}));

(peanuts.cards.main.t_peanuts$cards$main30919.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30919.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26712__auto__,devcard_opts__26713__auto__){
var self__ = this;
var this__26712__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26713__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26731__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-c228","peanuts.cards.ex-c228",-1212158463,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26731__auto__)){
return (function (data_atom__26732__auto__,owner__26733__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26731__auto__,data_atom__26732__auto__,owner__26733__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26731__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26713__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30920","meta30920",-2125169832,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30919.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30919.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30919");

(peanuts.cards.main.t_peanuts$cards$main30919.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30919");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30919.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30919 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30919(meta30920){
return (new peanuts.cards.main.t_peanuts$cards$main30919(meta30920));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30919(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"form-1-components","form-1-components",1154907167)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"form-1-components",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A solution is to separate the logic and state,\n  but that comes at the cost of wrapping every component with another\n  stateful component.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30922 = (function (meta30923){
this.meta30923 = meta30923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30924,meta30923__$1){
var self__ = this;
var _30924__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30922(meta30923__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30924){
var self__ = this;
var _30924__$1 = this;
return self__.meta30923;
}));

(peanuts.cards.main.t_peanuts$cards$main30922.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30922.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26712__auto__,devcard_opts__26713__auto__){
var self__ = this;
var this__26712__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26713__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26731__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-e6c7","peanuts.cards.ex-e6c7",902612911,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26731__auto__)){
return (function (data_atom__26732__auto__,owner__26733__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26731__auto__,data_atom__26732__auto__,owner__26733__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26731__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26713__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30923","meta30923",1996852309,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30922.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30922.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30922");

(peanuts.cards.main.t_peanuts$cards$main30922.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30922");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30922.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30922 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30922(meta30923){
return (new peanuts.cards.main.t_peanuts$cards$main30922(meta30923));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30922(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"defnc","defnc",-189964125)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"defnc",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Enter peanuts. Note how the `greeting` component looks like a pure\n  function without any of the additional ceremony.\n  Also, note how one can easily swap between a re-frame subscription and\n  a passed-in value!",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30925 = (function (meta30926){
this.meta30926 = meta30926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30927,meta30926__$1){
var self__ = this;
var _30927__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30925(meta30926__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30927){
var self__ = this;
var _30927__$1 = this;
return self__.meta30926;
}));

(peanuts.cards.main.t_peanuts$cards$main30925.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30925.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26712__auto__,devcard_opts__26713__auto__){
var self__ = this;
var this__26712__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26713__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26731__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-a226","peanuts.cards.ex-a226",-1535747051,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26731__auto__)){
return (function (data_atom__26732__auto__,owner__26733__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26731__auto__,data_atom__26732__auto__,owner__26733__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26731__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26713__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30926","meta30926",1893693204,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30925.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30925.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30925");

(peanuts.cards.main.t_peanuts$cards$main30925.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30925");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30925.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30925 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30925(meta30926){
return (new peanuts.cards.main.t_peanuts$cards$main30925(meta30926));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30925(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"redlist","redlist",-268599431)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"redlist",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You may be wondering, _what if I just want to use the keyword as is?_ \uD83E\uDD14\n  This can be done when you're defining your function with the `:redlist` option.\n  This is useful if your arg coincides with a subscription-id/vector\n  which you'd like to pass down to a nested component or if you want to reduce the amount of code the macro emits.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30928 = (function (meta30929){
this.meta30929 = meta30929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30930,meta30929__$1){
var self__ = this;
var _30930__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30928(meta30929__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30930){
var self__ = this;
var _30930__$1 = this;
return self__.meta30929;
}));

(peanuts.cards.main.t_peanuts$cards$main30928.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30928.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26712__auto__,devcard_opts__26713__auto__){
var self__ = this;
var this__26712__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26713__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26731__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-b6a6","peanuts.cards.ex-b6a6",1861803080,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26731__auto__)){
return (function (data_atom__26732__auto__,owner__26733__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26731__auto__,data_atom__26732__auto__,owner__26733__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26731__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26713__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30929","meta30929",1146904490,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30928.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30928.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30928");

(peanuts.cards.main.t_peanuts$cards$main30928.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30928");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30928.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30928 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30928(meta30929){
return (new peanuts.cards.main.t_peanuts$cards$main30928(meta30929));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30928(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"redlist","redlist",-268599431)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"redlist",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You can also redlist args with metadata.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30931 = (function (meta30932){
this.meta30932 = meta30932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30933,meta30932__$1){
var self__ = this;
var _30933__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30931(meta30932__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30933){
var self__ = this;
var _30933__$1 = this;
return self__.meta30932;
}));

(peanuts.cards.main.t_peanuts$cards$main30931.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30931.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26712__auto__,devcard_opts__26713__auto__){
var self__ = this;
var this__26712__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26713__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26731__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-f82c","peanuts.cards.ex-f82c",-898265153,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26731__auto__)){
return (function (data_atom__26732__auto__,owner__26733__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26731__auto__,data_atom__26732__auto__,owner__26733__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26731__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26713__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30932","meta30932",490405927,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30931.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30931.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30931");

(peanuts.cards.main.t_peanuts$cards$main30931.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30931");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30931.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30931 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30931(meta30932){
return (new peanuts.cards.main.t_peanuts$cards$main30931(meta30932));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30931(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"greenlist","greenlist",473690767)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"greenlist",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"An alternative to redlisting is greenlisting, for when you only want certain args\n  to be candidates for subscriptions. This can be done when you're defining\n  your function with the `:greenlist` option.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30934 = (function (meta30935){
this.meta30935 = meta30935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30936,meta30935__$1){
var self__ = this;
var _30936__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30934(meta30935__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30936){
var self__ = this;
var _30936__$1 = this;
return self__.meta30935;
}));

(peanuts.cards.main.t_peanuts$cards$main30934.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30934.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26712__auto__,devcard_opts__26713__auto__){
var self__ = this;
var this__26712__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26713__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26731__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-aa95","peanuts.cards.ex-aa95",-1946002855,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26731__auto__)){
return (function (data_atom__26732__auto__,owner__26733__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26731__auto__,data_atom__26732__auto__,owner__26733__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26731__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26713__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30935","meta30935",1773945550,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30934.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30934.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30934");

(peanuts.cards.main.t_peanuts$cards$main30934.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30934");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30934.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30934 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30934(meta30935){
return (new peanuts.cards.main.t_peanuts$cards$main30934(meta30935));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30934(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"sub-args",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Subscription vectors work normally.\n  Here's a slightly more advanced example that makes use of subscription args.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30937 = (function (meta30938){
this.meta30938 = meta30938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30939,meta30938__$1){
var self__ = this;
var _30939__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30937(meta30938__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30939){
var self__ = this;
var _30939__$1 = this;
return self__.meta30938;
}));

(peanuts.cards.main.t_peanuts$cards$main30937.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30937.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26712__auto__,devcard_opts__26713__auto__){
var self__ = this;
var this__26712__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26713__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26731__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-dd80","peanuts.cards.ex-dd80",-573384778,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26731__auto__)){
return (function (data_atom__26732__auto__,owner__26733__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26731__auto__,data_atom__26732__auto__,owner__26733__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26731__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26713__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30938","meta30938",-1804467141,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30937.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30937.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30937");

(peanuts.cards.main.t_peanuts$cards$main30937.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30937");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30937.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30937 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30937(meta30938){
return (new peanuts.cards.main.t_peanuts$cards$main30937(meta30938));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30937(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
peanuts.cards.main.init = (function peanuts$cards$main$init(){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null);
});
goog.exportSymbol('peanuts.cards.main.init', peanuts.cards.main.init);
peanuts.cards.main.on_reload = (function peanuts$cards$main$on_reload(){
return peanuts.cards.main.init.call(null);
});
