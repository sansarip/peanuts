// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('peanuts.repl');
goog.require('cljs.core');
goog.require('peanuts.macros');
goog.require('cljs.pprint');
goog.require('cljs.js');
goog.require('cljs.tools.reader');
goog.require('re_catch.core');
goog.require('reagent.core');
goog.require('peanuts.styles');
goog.require('peanuts.compile');
goog.require('cljs.spec.alpha');
peanuts.repl.global$module$hljs_kit = goog.global["HljsKit"];
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("peanuts.repl","hiccup?","peanuts.repl/hiccup?",718222170),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30318#","p1__30318#",-567458637,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"p1__30318#","p1__30318#",-567458637,null),new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"p1__30318#","p1__30318#",-567458637,null),new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))))),cljs.spec.alpha.and_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),new cljs.core.Symbol("cljs.core","fn?","cljs.core/fn?",71876239,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,(function (p1__30318_SHARP_){
return ((cljs.core.fn_QMARK_.call(null,cljs.core.first.call(null,p1__30318_SHARP_))) || ((cljs.core.first.call(null,p1__30318_SHARP_) instanceof cljs.core.Keyword)));
})], null),null));
peanuts.repl.hiccup_QMARK_ = (function peanuts$repl$hiccup_QMARK_(v){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("peanuts.repl","hiccup?","peanuts.repl/hiccup?",718222170),v);
});
if((typeof peanuts !== 'undefined') && (typeof peanuts.repl !== 'undefined') && (typeof peanuts.repl._register !== 'undefined')){
} else {
peanuts.repl._register = (function (){var G__30319 = peanuts.repl.global$module$hljs_kit.Hljs;
G__30319.registerLanguage("clojure",peanuts.repl.global$module$hljs_kit.CljHljs);

G__30319.registerLanguage("clj",peanuts.repl.global$module$hljs_kit.CljHljs);

return G__30319;
})();
}
peanuts.repl.editor_did_mount = (function peanuts$repl$editor_did_mount(input){
return (function (this$){
var cm = CodeMirror.fromTextArea(reagent.core.dom_node.call(null,this$),({"mode": "clojure", "lineNumbers": true, "autoCloseBrackets": true, "matchBrackets": true}));
var on_change = this$.props.onChange;
return cm.on("change",(function (p1__30320_SHARP_){
var val = p1__30320_SHARP_.getValue();
try{cljs.core.reset_BANG_.call(null,input,val);

if(cljs.core.truth_(on_change)){
return on_change.call(null,val);
} else {
return null;
}
}catch (e30321){if((e30321 instanceof Error)){
var _e = e30321;
return null;
} else {
throw e30321;

}
}}));
});
});
peanuts.repl.editor = (function peanuts$repl$editor(input,default_value){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
var on_change = this$.props.onChange;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default-value","default-value",232220170),default_value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),peanuts.repl.editor_did_mount.call(null,input)], null));
});
peanuts.repl.render_code = (function peanuts$repl$render_code(_this){
return document.querySelectorAll("pre code").forEach((function (p1__30322_SHARP_){
return peanuts.repl.global$module$hljs_kit.Hljs.highlightBlock(p1__30322_SHARP_);
}));
});
peanuts.repl.result_view = (function peanuts$repl$result_view(output){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (_this){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_catch.core.catch$,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),peanuts.styles.result_view_class.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-chevron-right","i.fas.fa-chevron-right",229921667)], null),(function (){var pred__30323 = cljs.core.apply;
var expr__30324 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output], null);
if(cljs.core.truth_(pred__30323.call(null,peanuts.repl.hiccup_QMARK_,expr__30324))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.hiccup","div.hiccup",-1367197086),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return output;
})], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre>code.clj","pre>code.clj",881490267),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.other","span.other",1106531976),(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30326_30330 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30327_30331 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30328_30332 = true;
var _STAR_print_fn_STAR__temp_val__30329_30333 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30328_30332);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30329_30333);

try{cljs.pprint.pprint.call(null,output);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30327_30331);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30326_30330);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})()], null)], null);
}
})()], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),peanuts.repl.render_code], null));
});
peanuts.repl.repl = reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-initial-state","get-initial-state",-4494070),(function (_this){
return ({"input-atom": cljs.core.atom.call(null,null), "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null))});
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return this$.props.evalFn.call(null,this$.props.defaultInput,(function (o){
(this$.state.output = o);

this$.setState(this$.state);

(this$.state.key = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null)));

return this$.setState(this$.state);
}));
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
var state = cljs.core.js__GT_clj.call(null,this$.state,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var eval_fn = this$.props.evalFn;
var default_input = this$.props.defaultInput;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var with_let30335 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let30335","with-let30335",-1173925978));
var temp__5724__auto___30337 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5724__auto___30337 == null)){
} else {
var c__12529__auto___30338 = temp__5724__auto___30337;
if((with_let30335.generation === c__12529__auto___30338.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let30335.generation = c__12529__auto___30338.ratomGeneration);
}


var init30336 = (with_let30335.length === (0));
var editor_STAR_ = ((init30336)?(with_let30335[(0)] = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),peanuts.repl.editor.call(null,new cljs.core.Keyword(null,"input-atom","input-atom",50965987).cljs$core$IFn$_invoke$arity$1(state),default_input),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30334_SHARP_){
return eval_fn.call(null,p1__30334_SHARP_,(function (o){
(this$.state.output = o);

this$.setState(this$.state);

(this$.state.key = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null)));

return this$.setState(this$.state);
}));
})], null)], null)):(with_let30335[(0)]));
var res__12530__auto__ = editor_STAR_;

return res__12530__auto__;
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [peanuts.repl.result_view,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(state))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(state)], null))], null)], null);
})], null));
