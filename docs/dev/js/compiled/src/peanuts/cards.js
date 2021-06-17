// Compiled by ClojureScript 1.10.866 {:optimizations :none}
goog.provide('peanuts.cards');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('re_frame.core');
goog.require('re_frame.db');
goog.require('reagent.core');
goog.require('peanuts.macros');
goog.require('peanuts.core');
goog.require('peanuts.editor');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.reset_BANG_.call(null,re_frame.db.app_db,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"World"], null));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("peanuts.cards","name","peanuts.cards/name",1013887042),(function (p__37830){
var map__37831 = p__37830;
var map__37831__$1 = cljs.core.__destructure_map.call(null,map__37831);
var n = cljs.core.get.call(null,map__37831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return n;
}));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"peanuts.cards","peanuts.cards",1695241667),new cljs.core.Keyword(null,"editor","editor",-989377770)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof peanuts !== 'undefined') && (typeof peanuts.cards !== 'undefined') && (typeof peanuts.cards.t_peanuts$cards37832 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
peanuts.cards.t_peanuts$cards37832 = (function (meta37833){
this.meta37833 = meta37833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(peanuts.cards.t_peanuts$cards37832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37834,meta37833__$1){
var self__ = this;
var _37834__$1 = this;
return (new peanuts.cards.t_peanuts$cards37832(meta37833__$1));
}));

(peanuts.cards.t_peanuts$cards37832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37834){
var self__ = this;
var _37834__$1 = this;
return self__.meta37833;
}));

(peanuts.cards.t_peanuts$cards37832.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(peanuts.cards.t_peanuts$cards37832.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__14506__auto__,devcard_opts__14507__auto__){
var self__ = this;
var this__14506__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__14507__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__14525__auto__ = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),peanuts.editor.ide,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-input","default-input",-410036564),"(require '[peanuts.editor :refer [hiccup?]])\n(hiccup? [:a])\n"], null)], null);
});
if(cljs.core.fn_QMARK_.call(null,v__14525__auto__)){
return (function (data_atom__14526__auto__,owner__14527__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__14525__auto__,data_atom__14526__auto__,owner__14527__auto__], null));
});
} else {
return reagent.core.as_element.call(null,v__14525__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__14507__auto__))));
}));

(peanuts.cards.t_peanuts$cards37832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta37833","meta37833",-931458225,null)], null);
}));

(peanuts.cards.t_peanuts$cards37832.cljs$lang$type = true);

(peanuts.cards.t_peanuts$cards37832.cljs$lang$ctorStr = "peanuts.cards/t_peanuts$cards37832");

(peanuts.cards.t_peanuts$cards37832.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write.call(null,writer__4462__auto__,"peanuts.cards/t_peanuts$cards37832");
}));

/**
 * Positional factory function for peanuts.cards/t_peanuts$cards37832.
 */
peanuts.cards.__GT_t_peanuts$cards37832 = (function peanuts$cards$__GT_t_peanuts$cards37832(meta37833){
return (new peanuts.cards.t_peanuts$cards37832(meta37833));
});

}

return (new peanuts.cards.t_peanuts$cards37832(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
peanuts.cards.init = (function peanuts$cards$init(){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null);
});
goog.exportSymbol('peanuts.cards.init', peanuts.cards.init);
peanuts.cards.on_reload = (function peanuts$cards$on_reload(){
return peanuts.cards.init.call(null);
});

//# sourceMappingURL=cards.js.map
