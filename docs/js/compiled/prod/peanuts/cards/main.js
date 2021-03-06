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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141)], null),(function (selected_ids,p__30911){
var vec__30912 = p__30911;
var _ = cljs.core.nth.call(null,vec__30912,(0),null);
var id = cljs.core.nth.call(null,vec__30912,(1),null);
return cljs.core.contains_QMARK_.call(null,selected_ids,id);
}));
peanuts.cards.main.repl_STAR_ = (function peanuts$cards$main$repl_STAR_(source_ns_str){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),peanuts.repl.repl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),peanuts.compile.evaluate,new cljs.core.Keyword(null,"default-input","default-input",-410036564),peanuts.compile.dependencies.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_ns_str))], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"form-1-components","form-1-components",1154907167)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"form-1-components",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Here's how form-1 components are usually defined and used.\n  Components defined like this can be more difficult to reuse\n  in other projects, and can contribute to making test code more complex.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30915 = (function (meta30916){
this.meta30916 = meta30916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30917,meta30916__$1){
var self__ = this;
var _30917__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30915(meta30916__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30917){
var self__ = this;
var _30917__$1 = this;
return self__.meta30916;
}));

(peanuts.cards.main.t_peanuts$cards$main30915.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30915.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-c228","peanuts.cards.ex-c228",-1212158463,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30916","meta30916",-1889973333,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30915.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30915.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30915");

(peanuts.cards.main.t_peanuts$cards$main30915.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30915");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30915.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30915 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30915(meta30916){
return (new peanuts.cards.main.t_peanuts$cards$main30915(meta30916));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30915(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"form-1-components","form-1-components",1154907167)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"form-1-components",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A solution is to separate the logic and state,\n  but that comes at the cost of wrapping every component with another\n  stateful component.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30918 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30918 = (function (meta30919){
this.meta30919 = meta30919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30920,meta30919__$1){
var self__ = this;
var _30920__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30918(meta30919__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30920){
var self__ = this;
var _30920__$1 = this;
return self__.meta30919;
}));

(peanuts.cards.main.t_peanuts$cards$main30918.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30918.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-e6c7","peanuts.cards.ex-e6c7",902612911,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30919","meta30919",-1104826439,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30918.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30918.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30918");

(peanuts.cards.main.t_peanuts$cards$main30918.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30918");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30918.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30918 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30918(meta30919){
return (new peanuts.cards.main.t_peanuts$cards$main30918(meta30919));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30918(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"defnc","defnc",-189964125)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"defnc",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Enter peanuts. Note how the `greeting` component looks like a pure\n  function without any of the additional ceremony.\n  Also, note how one can easily swap between a re-frame subscription and\n  a passed-in value!",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30921 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30921 = (function (meta30922){
this.meta30922 = meta30922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30923,meta30922__$1){
var self__ = this;
var _30923__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30921(meta30922__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30923){
var self__ = this;
var _30923__$1 = this;
return self__.meta30922;
}));

(peanuts.cards.main.t_peanuts$cards$main30921.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30921.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-a226","peanuts.cards.ex-a226",-1535747051,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30921.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30922","meta30922",-1042850464,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30921.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30921.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30921");

(peanuts.cards.main.t_peanuts$cards$main30921.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30921");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30921.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30921 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30921(meta30922){
return (new peanuts.cards.main.t_peanuts$cards$main30921(meta30922));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30921(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"redlist","redlist",-268599431)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"redlist",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You may be wondering, _what if I just want to use the keyword as is?_ \uD83E\uDD14\n  This can be done when you're defining your function with the `:redlist` option.\n  This is useful if your arg coincides with a subscription-id/vector\n  which you'd like to pass down to a nested peanuts component\n  or if you want to reduce the amount of code the macro emits.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30924 = (function (meta30925){
this.meta30925 = meta30925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30926,meta30925__$1){
var self__ = this;
var _30926__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30924(meta30925__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30926){
var self__ = this;
var _30926__$1 = this;
return self__.meta30925;
}));

(peanuts.cards.main.t_peanuts$cards$main30924.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30924.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-b6a6","peanuts.cards.ex-b6a6",1861803080,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30925","meta30925",215612266,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30924.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30924.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30924");

(peanuts.cards.main.t_peanuts$cards$main30924.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30924");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30924.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30924 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30924(meta30925){
return (new peanuts.cards.main.t_peanuts$cards$main30924(meta30925));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30924(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"redlist","redlist",-268599431)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"redlist",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You can also redlist args with metadata.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30927 = (function (meta30928){
this.meta30928 = meta30928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30929,meta30928__$1){
var self__ = this;
var _30929__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30927(meta30928__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30929){
var self__ = this;
var _30929__$1 = this;
return self__.meta30928;
}));

(peanuts.cards.main.t_peanuts$cards$main30927.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30927.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-f82c","peanuts.cards.ex-f82c",-898265153,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30928","meta30928",-949723709,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30927.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30927.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30927");

(peanuts.cards.main.t_peanuts$cards$main30927.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30927");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30927.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30927 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30927(meta30928){
return (new peanuts.cards.main.t_peanuts$cards$main30927(meta30928));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30927(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"redlist","redlist",-268599431)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"redlist",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"You can redlist an arg once with metadata.\n  This can be handy when you want to pass down a subscription-id/vector to a nested\n  peanuts component. This is a similar behavior to using the `:redlist` option\n  in the peanuts component definition.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30930 = (function (meta30931){
this.meta30931 = meta30931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30932,meta30931__$1){
var self__ = this;
var _30932__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30930(meta30931__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30932){
var self__ = this;
var _30932__$1 = this;
return self__.meta30931;
}));

(peanuts.cards.main.t_peanuts$cards$main30930.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30930.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-c4d3","peanuts.cards.ex-c4d3",-1314621332,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30931","meta30931",-1486396775,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30930.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30930.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30930");

(peanuts.cards.main.t_peanuts$cards$main30930.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30930");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30930.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30930 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30930(meta30931){
return (new peanuts.cards.main.t_peanuts$cards$main30930(meta30931));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30930(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"greenlist","greenlist",473690767)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"greenlist",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"An alternative to redlisting is greenlisting, for when you only want certain args\n  to be candidates for subscriptions. This can be done when you're defining\n  your function with the `:greenlist` option.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30933 = (function (meta30934){
this.meta30934 = meta30934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30935,meta30934__$1){
var self__ = this;
var _30935__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30933(meta30934__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30935){
var self__ = this;
var _30935__$1 = this;
return self__.meta30934;
}));

(peanuts.cards.main.t_peanuts$cards$main30933.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30933.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-aa95","peanuts.cards.ex-aa95",-1946002855,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30934","meta30934",64471930,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30933.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30933.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30933");

(peanuts.cards.main.t_peanuts$cards$main30933.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30933");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30933.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30933 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30933(meta30934){
return (new peanuts.cards.main.t_peanuts$cards$main30933(meta30934));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30933(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards.main","peanuts.cards.main",-238506414),new cljs.core.Keyword(null,"subscription-vectors","subscription-vectors",-2055866257)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"subscription-vectors",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Subscription vectors work normally.\n  Here's a slightly more advanced example that makes use of subscription args.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.main !== 'undefined') && (typeof peanuts.cards.main.t_peanuts$cards$main30936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.main.t_peanuts$cards$main30936 = (function (meta30937){
this.meta30937 = meta30937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.main.t_peanuts$cards$main30936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30938,meta30937__$1){
var self__ = this;
var _30938__$1 = this;
return (new peanuts.cards.main.t_peanuts$cards$main30936(meta30937__$1));
}));

(peanuts.cards.main.t_peanuts$cards$main30936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30938){
var self__ = this;
var _30938__$1 = this;
return self__.meta30937;
}));

(peanuts.cards.main.t_peanuts$cards$main30936.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.main.t_peanuts$cards$main30936.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__26711__auto__,devcard_opts__26712__auto__){
var self__ = this;
var this__26711__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__26712__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__26730__auto__ = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.cards.main.repl_STAR_,new cljs.core.Symbol(null,"peanuts.cards.ex-dd80","peanuts.cards.ex-dd80",-573384778,null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__26730__auto__)){
return (function (data_atom__26731__auto__,owner__26732__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__26730__auto__,data_atom__26731__auto__,owner__26732__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__26730__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__26712__auto__))));
}));

(peanuts.cards.main.t_peanuts$cards$main30936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30937","meta30937",-706247300,null)], null);
}));

(peanuts.cards.main.t_peanuts$cards$main30936.cljs$lang$type = true);

(peanuts.cards.main.t_peanuts$cards$main30936.cljs$lang$ctorStr = "peanuts.cards.main/t_peanuts$cards$main30936");

(peanuts.cards.main.t_peanuts$cards$main30936.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards.main/t_peanuts$cards$main30936");
}));

/**
 * Positional factory function for peanuts.cards.main/t_peanuts$cards$main30936.
 */
peanuts.cards.main.__GT_t_peanuts$cards$main30936 = (function peanuts$cards$main$__GT_t_peanuts$cards$main30936(meta30937){
return (new peanuts.cards.main.t_peanuts$cards$main30936(meta30937));
});

}

return (new peanuts.cards.main.t_peanuts$cards$main30936(null));
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
