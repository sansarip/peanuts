// Compiled by ClojureScript 1.10.866 {:optimizations :simple}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5718__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5718__auto__)){
var doc = temp__5718__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18606_18610 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18607_18611 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18608_18612 = true;
var _STAR_print_fn_STAR__temp_val__18609_18613 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18608_18612);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18609_18613);

try{cljs.pprint.pprint.call(null,obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18607_18611);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18606_18610);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
}catch (e18604){if((e18604 instanceof Error)){
var e1 = e18604;
try{return obj.toString();
}catch (e18605){if((e18605 instanceof Error)){
var e2 = e18605;
return "<<Un-printable Type>>";
} else {
throw e18605;

}
}} else {
throw e18604;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__18614 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__18615 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__18615);

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__18614);
}});
