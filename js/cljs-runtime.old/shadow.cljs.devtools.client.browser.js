goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22482 = arguments.length;
var i__5770__auto___22483 = (0);
while(true){
if((i__5770__auto___22483 < len__5769__auto___22482)){
args__5775__auto__.push((arguments[i__5770__auto___22483]));

var G__22484 = (i__5770__auto___22483 + (1));
i__5770__auto___22483 = G__22484;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21791){
var G__21795 = cljs.core.first(seq21791);
var seq21791__$1 = cljs.core.next(seq21791);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21795,seq21791__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21801 = cljs.core.seq(sources);
var chunk__21802 = null;
var count__21803 = (0);
var i__21804 = (0);
while(true){
if((i__21804 < count__21803)){
var map__21829 = chunk__21802.cljs$core$IIndexed$_nth$arity$2(null,i__21804);
var map__21829__$1 = cljs.core.__destructure_map(map__21829);
var src = map__21829__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21834){var e_22486 = e21834;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22486);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22486.message)].join('')));
}

var G__22487 = seq__21801;
var G__22488 = chunk__21802;
var G__22489 = count__21803;
var G__22490 = (i__21804 + (1));
seq__21801 = G__22487;
chunk__21802 = G__22488;
count__21803 = G__22489;
i__21804 = G__22490;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21801);
if(temp__5804__auto__){
var seq__21801__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21801__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21801__$1);
var G__22491 = cljs.core.chunk_rest(seq__21801__$1);
var G__22492 = c__5568__auto__;
var G__22493 = cljs.core.count(c__5568__auto__);
var G__22494 = (0);
seq__21801 = G__22491;
chunk__21802 = G__22492;
count__21803 = G__22493;
i__21804 = G__22494;
continue;
} else {
var map__21837 = cljs.core.first(seq__21801__$1);
var map__21837__$1 = cljs.core.__destructure_map(map__21837);
var src = map__21837__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21837__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21838){var e_22495 = e21838;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22495);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22495.message)].join('')));
}

var G__22496 = cljs.core.next(seq__21801__$1);
var G__22497 = null;
var G__22498 = (0);
var G__22499 = (0);
seq__21801 = G__22496;
chunk__21802 = G__22497;
count__21803 = G__22498;
i__21804 = G__22499;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21854 = cljs.core.seq(js_requires);
var chunk__21855 = null;
var count__21856 = (0);
var i__21857 = (0);
while(true){
if((i__21857 < count__21856)){
var js_ns = chunk__21855.cljs$core$IIndexed$_nth$arity$2(null,i__21857);
var require_str_22500 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22500);


var G__22504 = seq__21854;
var G__22505 = chunk__21855;
var G__22506 = count__21856;
var G__22507 = (i__21857 + (1));
seq__21854 = G__22504;
chunk__21855 = G__22505;
count__21856 = G__22506;
i__21857 = G__22507;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21854);
if(temp__5804__auto__){
var seq__21854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21854__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21854__$1);
var G__22508 = cljs.core.chunk_rest(seq__21854__$1);
var G__22509 = c__5568__auto__;
var G__22510 = cljs.core.count(c__5568__auto__);
var G__22511 = (0);
seq__21854 = G__22508;
chunk__21855 = G__22509;
count__21856 = G__22510;
i__21857 = G__22511;
continue;
} else {
var js_ns = cljs.core.first(seq__21854__$1);
var require_str_22512 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22512);


var G__22513 = cljs.core.next(seq__21854__$1);
var G__22514 = null;
var G__22515 = (0);
var G__22516 = (0);
seq__21854 = G__22513;
chunk__21855 = G__22514;
count__21856 = G__22515;
i__21857 = G__22516;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21868){
var map__21872 = p__21868;
var map__21872__$1 = cljs.core.__destructure_map(map__21872);
var msg = map__21872__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21873(s__21874){
return (new cljs.core.LazySeq(null,(function (){
var s__21874__$1 = s__21874;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21874__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21881 = cljs.core.first(xs__6360__auto__);
var map__21881__$1 = cljs.core.__destructure_map(map__21881);
var src = map__21881__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21881__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__21874__$1,map__21881,map__21881__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21872,map__21872__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21873_$_iter__21875(s__21876){
return (new cljs.core.LazySeq(null,((function (s__21874__$1,map__21881,map__21881__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21872,map__21872__$1,msg,info,reload_info){
return (function (){
var s__21876__$1 = s__21876;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21876__$1);
if(temp__5804__auto____$1){
var s__21876__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21876__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21876__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21878 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21877 = (0);
while(true){
if((i__21877 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__21877);
cljs.core.chunk_append(b__21878,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22517 = (i__21877 + (1));
i__21877 = G__22517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21878),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21873_$_iter__21875(cljs.core.chunk_rest(s__21876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21878),null);
}
} else {
var warning = cljs.core.first(s__21876__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21873_$_iter__21875(cljs.core.rest(s__21876__$2)));
}
} else {
return null;
}
break;
}
});})(s__21874__$1,map__21881,map__21881__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21872,map__21872__$1,msg,info,reload_info))
,null,null));
});})(s__21874__$1,map__21881,map__21881__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21872,map__21872__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21873(cljs.core.rest(s__21874__$1)));
} else {
var G__22518 = cljs.core.rest(s__21874__$1);
s__21874__$1 = G__22518;
continue;
}
} else {
var G__22519 = cljs.core.rest(s__21874__$1);
s__21874__$1 = G__22519;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21898_22520 = cljs.core.seq(warnings);
var chunk__21899_22521 = null;
var count__21900_22522 = (0);
var i__21901_22523 = (0);
while(true){
if((i__21901_22523 < count__21900_22522)){
var map__21916_22525 = chunk__21899_22521.cljs$core$IIndexed$_nth$arity$2(null,i__21901_22523);
var map__21916_22526__$1 = cljs.core.__destructure_map(map__21916_22525);
var w_22527 = map__21916_22526__$1;
var msg_22528__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916_22526__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916_22526__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916_22526__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916_22526__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22531)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22529),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22530),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22528__$1)].join(''));


var G__22533 = seq__21898_22520;
var G__22534 = chunk__21899_22521;
var G__22535 = count__21900_22522;
var G__22536 = (i__21901_22523 + (1));
seq__21898_22520 = G__22533;
chunk__21899_22521 = G__22534;
count__21900_22522 = G__22535;
i__21901_22523 = G__22536;
continue;
} else {
var temp__5804__auto___22537 = cljs.core.seq(seq__21898_22520);
if(temp__5804__auto___22537){
var seq__21898_22538__$1 = temp__5804__auto___22537;
if(cljs.core.chunked_seq_QMARK_(seq__21898_22538__$1)){
var c__5568__auto___22539 = cljs.core.chunk_first(seq__21898_22538__$1);
var G__22540 = cljs.core.chunk_rest(seq__21898_22538__$1);
var G__22541 = c__5568__auto___22539;
var G__22542 = cljs.core.count(c__5568__auto___22539);
var G__22543 = (0);
seq__21898_22520 = G__22540;
chunk__21899_22521 = G__22541;
count__21900_22522 = G__22542;
i__21901_22523 = G__22543;
continue;
} else {
var map__21920_22544 = cljs.core.first(seq__21898_22538__$1);
var map__21920_22545__$1 = cljs.core.__destructure_map(map__21920_22544);
var w_22546 = map__21920_22545__$1;
var msg_22547__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920_22545__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920_22545__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920_22545__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21920_22545__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22550)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22548),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22549),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22547__$1)].join(''));


var G__22551 = cljs.core.next(seq__21898_22538__$1);
var G__22552 = null;
var G__22553 = (0);
var G__22554 = (0);
seq__21898_22520 = G__22551;
chunk__21899_22521 = G__22552;
count__21900_22522 = G__22553;
i__21901_22523 = G__22554;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21867_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21867_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21952){
var map__21953 = p__21952;
var map__21953__$1 = cljs.core.__destructure_map(map__21953);
var msg = map__21953__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21953__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21953__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21955 = cljs.core.seq(updates);
var chunk__21957 = null;
var count__21958 = (0);
var i__21959 = (0);
while(true){
if((i__21959 < count__21958)){
var path = chunk__21957.cljs$core$IIndexed$_nth$arity$2(null,i__21959);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22195_22558 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22199_22559 = null;
var count__22200_22560 = (0);
var i__22201_22561 = (0);
while(true){
if((i__22201_22561 < count__22200_22560)){
var node_22562 = chunk__22199_22559.cljs$core$IIndexed$_nth$arity$2(null,i__22201_22561);
if(cljs.core.not(node_22562.shadow$old)){
var path_match_22563 = shadow.cljs.devtools.client.browser.match_paths(node_22562.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22563)){
var new_link_22564 = (function (){var G__22256 = node_22562.cloneNode(true);
G__22256.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22563),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22256;
})();
(node_22562.shadow$old = true);

(new_link_22564.onload = ((function (seq__22195_22558,chunk__22199_22559,count__22200_22560,i__22201_22561,seq__21955,chunk__21957,count__21958,i__21959,new_link_22564,path_match_22563,node_22562,path,map__21953,map__21953__$1,msg,updates,reload_info){
return (function (e){
var seq__22260_22565 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22262_22566 = null;
var count__22263_22567 = (0);
var i__22264_22568 = (0);
while(true){
if((i__22264_22568 < count__22263_22567)){
var map__22271_22569 = chunk__22262_22566.cljs$core$IIndexed$_nth$arity$2(null,i__22264_22568);
var map__22271_22570__$1 = cljs.core.__destructure_map(map__22271_22569);
var task_22571 = map__22271_22570__$1;
var fn_str_22572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22271_22570__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22271_22570__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22575 = goog.getObjectByName(fn_str_22572,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22573)].join(''));

(fn_obj_22575.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22575.cljs$core$IFn$_invoke$arity$2(path,new_link_22564) : fn_obj_22575.call(null,path,new_link_22564));


var G__22577 = seq__22260_22565;
var G__22578 = chunk__22262_22566;
var G__22579 = count__22263_22567;
var G__22580 = (i__22264_22568 + (1));
seq__22260_22565 = G__22577;
chunk__22262_22566 = G__22578;
count__22263_22567 = G__22579;
i__22264_22568 = G__22580;
continue;
} else {
var temp__5804__auto___22581 = cljs.core.seq(seq__22260_22565);
if(temp__5804__auto___22581){
var seq__22260_22582__$1 = temp__5804__auto___22581;
if(cljs.core.chunked_seq_QMARK_(seq__22260_22582__$1)){
var c__5568__auto___22583 = cljs.core.chunk_first(seq__22260_22582__$1);
var G__22584 = cljs.core.chunk_rest(seq__22260_22582__$1);
var G__22585 = c__5568__auto___22583;
var G__22586 = cljs.core.count(c__5568__auto___22583);
var G__22587 = (0);
seq__22260_22565 = G__22584;
chunk__22262_22566 = G__22585;
count__22263_22567 = G__22586;
i__22264_22568 = G__22587;
continue;
} else {
var map__22272_22588 = cljs.core.first(seq__22260_22582__$1);
var map__22272_22589__$1 = cljs.core.__destructure_map(map__22272_22588);
var task_22590 = map__22272_22589__$1;
var fn_str_22591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22272_22589__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22272_22589__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22593 = goog.getObjectByName(fn_str_22591,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22592)].join(''));

(fn_obj_22593.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22593.cljs$core$IFn$_invoke$arity$2(path,new_link_22564) : fn_obj_22593.call(null,path,new_link_22564));


var G__22594 = cljs.core.next(seq__22260_22582__$1);
var G__22595 = null;
var G__22596 = (0);
var G__22597 = (0);
seq__22260_22565 = G__22594;
chunk__22262_22566 = G__22595;
count__22263_22567 = G__22596;
i__22264_22568 = G__22597;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22562);
});})(seq__22195_22558,chunk__22199_22559,count__22200_22560,i__22201_22561,seq__21955,chunk__21957,count__21958,i__21959,new_link_22564,path_match_22563,node_22562,path,map__21953,map__21953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22563], 0));

goog.dom.insertSiblingAfter(new_link_22564,node_22562);


var G__22598 = seq__22195_22558;
var G__22599 = chunk__22199_22559;
var G__22600 = count__22200_22560;
var G__22601 = (i__22201_22561 + (1));
seq__22195_22558 = G__22598;
chunk__22199_22559 = G__22599;
count__22200_22560 = G__22600;
i__22201_22561 = G__22601;
continue;
} else {
var G__22602 = seq__22195_22558;
var G__22603 = chunk__22199_22559;
var G__22604 = count__22200_22560;
var G__22605 = (i__22201_22561 + (1));
seq__22195_22558 = G__22602;
chunk__22199_22559 = G__22603;
count__22200_22560 = G__22604;
i__22201_22561 = G__22605;
continue;
}
} else {
var G__22606 = seq__22195_22558;
var G__22607 = chunk__22199_22559;
var G__22608 = count__22200_22560;
var G__22609 = (i__22201_22561 + (1));
seq__22195_22558 = G__22606;
chunk__22199_22559 = G__22607;
count__22200_22560 = G__22608;
i__22201_22561 = G__22609;
continue;
}
} else {
var temp__5804__auto___22610 = cljs.core.seq(seq__22195_22558);
if(temp__5804__auto___22610){
var seq__22195_22611__$1 = temp__5804__auto___22610;
if(cljs.core.chunked_seq_QMARK_(seq__22195_22611__$1)){
var c__5568__auto___22612 = cljs.core.chunk_first(seq__22195_22611__$1);
var G__22613 = cljs.core.chunk_rest(seq__22195_22611__$1);
var G__22614 = c__5568__auto___22612;
var G__22615 = cljs.core.count(c__5568__auto___22612);
var G__22616 = (0);
seq__22195_22558 = G__22613;
chunk__22199_22559 = G__22614;
count__22200_22560 = G__22615;
i__22201_22561 = G__22616;
continue;
} else {
var node_22617 = cljs.core.first(seq__22195_22611__$1);
if(cljs.core.not(node_22617.shadow$old)){
var path_match_22618 = shadow.cljs.devtools.client.browser.match_paths(node_22617.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22618)){
var new_link_22619 = (function (){var G__22276 = node_22617.cloneNode(true);
G__22276.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22618),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22276;
})();
(node_22617.shadow$old = true);

(new_link_22619.onload = ((function (seq__22195_22558,chunk__22199_22559,count__22200_22560,i__22201_22561,seq__21955,chunk__21957,count__21958,i__21959,new_link_22619,path_match_22618,node_22617,seq__22195_22611__$1,temp__5804__auto___22610,path,map__21953,map__21953__$1,msg,updates,reload_info){
return (function (e){
var seq__22277_22620 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22279_22621 = null;
var count__22280_22622 = (0);
var i__22281_22623 = (0);
while(true){
if((i__22281_22623 < count__22280_22622)){
var map__22288_22624 = chunk__22279_22621.cljs$core$IIndexed$_nth$arity$2(null,i__22281_22623);
var map__22288_22625__$1 = cljs.core.__destructure_map(map__22288_22624);
var task_22626 = map__22288_22625__$1;
var fn_str_22627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22288_22625__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22288_22625__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22630 = goog.getObjectByName(fn_str_22627,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22628)].join(''));

(fn_obj_22630.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22630.cljs$core$IFn$_invoke$arity$2(path,new_link_22619) : fn_obj_22630.call(null,path,new_link_22619));


var G__22631 = seq__22277_22620;
var G__22632 = chunk__22279_22621;
var G__22633 = count__22280_22622;
var G__22634 = (i__22281_22623 + (1));
seq__22277_22620 = G__22631;
chunk__22279_22621 = G__22632;
count__22280_22622 = G__22633;
i__22281_22623 = G__22634;
continue;
} else {
var temp__5804__auto___22636__$1 = cljs.core.seq(seq__22277_22620);
if(temp__5804__auto___22636__$1){
var seq__22277_22637__$1 = temp__5804__auto___22636__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22277_22637__$1)){
var c__5568__auto___22638 = cljs.core.chunk_first(seq__22277_22637__$1);
var G__22639 = cljs.core.chunk_rest(seq__22277_22637__$1);
var G__22640 = c__5568__auto___22638;
var G__22641 = cljs.core.count(c__5568__auto___22638);
var G__22642 = (0);
seq__22277_22620 = G__22639;
chunk__22279_22621 = G__22640;
count__22280_22622 = G__22641;
i__22281_22623 = G__22642;
continue;
} else {
var map__22293_22643 = cljs.core.first(seq__22277_22637__$1);
var map__22293_22644__$1 = cljs.core.__destructure_map(map__22293_22643);
var task_22645 = map__22293_22644__$1;
var fn_str_22646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22293_22644__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22293_22644__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22648 = goog.getObjectByName(fn_str_22646,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22647)].join(''));

(fn_obj_22648.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22648.cljs$core$IFn$_invoke$arity$2(path,new_link_22619) : fn_obj_22648.call(null,path,new_link_22619));


var G__22649 = cljs.core.next(seq__22277_22637__$1);
var G__22650 = null;
var G__22651 = (0);
var G__22652 = (0);
seq__22277_22620 = G__22649;
chunk__22279_22621 = G__22650;
count__22280_22622 = G__22651;
i__22281_22623 = G__22652;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22617);
});})(seq__22195_22558,chunk__22199_22559,count__22200_22560,i__22201_22561,seq__21955,chunk__21957,count__21958,i__21959,new_link_22619,path_match_22618,node_22617,seq__22195_22611__$1,temp__5804__auto___22610,path,map__21953,map__21953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22618], 0));

goog.dom.insertSiblingAfter(new_link_22619,node_22617);


var G__22653 = cljs.core.next(seq__22195_22611__$1);
var G__22654 = null;
var G__22655 = (0);
var G__22656 = (0);
seq__22195_22558 = G__22653;
chunk__22199_22559 = G__22654;
count__22200_22560 = G__22655;
i__22201_22561 = G__22656;
continue;
} else {
var G__22657 = cljs.core.next(seq__22195_22611__$1);
var G__22658 = null;
var G__22659 = (0);
var G__22660 = (0);
seq__22195_22558 = G__22657;
chunk__22199_22559 = G__22658;
count__22200_22560 = G__22659;
i__22201_22561 = G__22660;
continue;
}
} else {
var G__22661 = cljs.core.next(seq__22195_22611__$1);
var G__22662 = null;
var G__22663 = (0);
var G__22664 = (0);
seq__22195_22558 = G__22661;
chunk__22199_22559 = G__22662;
count__22200_22560 = G__22663;
i__22201_22561 = G__22664;
continue;
}
}
} else {
}
}
break;
}


var G__22665 = seq__21955;
var G__22666 = chunk__21957;
var G__22667 = count__21958;
var G__22668 = (i__21959 + (1));
seq__21955 = G__22665;
chunk__21957 = G__22666;
count__21958 = G__22667;
i__21959 = G__22668;
continue;
} else {
var G__22669 = seq__21955;
var G__22670 = chunk__21957;
var G__22671 = count__21958;
var G__22672 = (i__21959 + (1));
seq__21955 = G__22669;
chunk__21957 = G__22670;
count__21958 = G__22671;
i__21959 = G__22672;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21955);
if(temp__5804__auto__){
var seq__21955__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21955__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21955__$1);
var G__22673 = cljs.core.chunk_rest(seq__21955__$1);
var G__22674 = c__5568__auto__;
var G__22675 = cljs.core.count(c__5568__auto__);
var G__22676 = (0);
seq__21955 = G__22673;
chunk__21957 = G__22674;
count__21958 = G__22675;
i__21959 = G__22676;
continue;
} else {
var path = cljs.core.first(seq__21955__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22294_22677 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22298_22678 = null;
var count__22299_22679 = (0);
var i__22300_22680 = (0);
while(true){
if((i__22300_22680 < count__22299_22679)){
var node_22681 = chunk__22298_22678.cljs$core$IIndexed$_nth$arity$2(null,i__22300_22680);
if(cljs.core.not(node_22681.shadow$old)){
var path_match_22682 = shadow.cljs.devtools.client.browser.match_paths(node_22681.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22682)){
var new_link_22683 = (function (){var G__22344 = node_22681.cloneNode(true);
G__22344.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22682),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22344;
})();
(node_22681.shadow$old = true);

(new_link_22683.onload = ((function (seq__22294_22677,chunk__22298_22678,count__22299_22679,i__22300_22680,seq__21955,chunk__21957,count__21958,i__21959,new_link_22683,path_match_22682,node_22681,path,seq__21955__$1,temp__5804__auto__,map__21953,map__21953__$1,msg,updates,reload_info){
return (function (e){
var seq__22351_22684 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22354_22685 = null;
var count__22355_22686 = (0);
var i__22356_22687 = (0);
while(true){
if((i__22356_22687 < count__22355_22686)){
var map__22369_22688 = chunk__22354_22685.cljs$core$IIndexed$_nth$arity$2(null,i__22356_22687);
var map__22369_22689__$1 = cljs.core.__destructure_map(map__22369_22688);
var task_22690 = map__22369_22689__$1;
var fn_str_22691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22369_22689__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22369_22689__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22693 = goog.getObjectByName(fn_str_22691,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22692)].join(''));

(fn_obj_22693.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22693.cljs$core$IFn$_invoke$arity$2(path,new_link_22683) : fn_obj_22693.call(null,path,new_link_22683));


var G__22694 = seq__22351_22684;
var G__22695 = chunk__22354_22685;
var G__22696 = count__22355_22686;
var G__22697 = (i__22356_22687 + (1));
seq__22351_22684 = G__22694;
chunk__22354_22685 = G__22695;
count__22355_22686 = G__22696;
i__22356_22687 = G__22697;
continue;
} else {
var temp__5804__auto___22698__$1 = cljs.core.seq(seq__22351_22684);
if(temp__5804__auto___22698__$1){
var seq__22351_22699__$1 = temp__5804__auto___22698__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22351_22699__$1)){
var c__5568__auto___22700 = cljs.core.chunk_first(seq__22351_22699__$1);
var G__22701 = cljs.core.chunk_rest(seq__22351_22699__$1);
var G__22702 = c__5568__auto___22700;
var G__22703 = cljs.core.count(c__5568__auto___22700);
var G__22704 = (0);
seq__22351_22684 = G__22701;
chunk__22354_22685 = G__22702;
count__22355_22686 = G__22703;
i__22356_22687 = G__22704;
continue;
} else {
var map__22380_22705 = cljs.core.first(seq__22351_22699__$1);
var map__22380_22706__$1 = cljs.core.__destructure_map(map__22380_22705);
var task_22707 = map__22380_22706__$1;
var fn_str_22708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22380_22706__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22380_22706__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22710 = goog.getObjectByName(fn_str_22708,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22709)].join(''));

(fn_obj_22710.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22710.cljs$core$IFn$_invoke$arity$2(path,new_link_22683) : fn_obj_22710.call(null,path,new_link_22683));


var G__22713 = cljs.core.next(seq__22351_22699__$1);
var G__22714 = null;
var G__22715 = (0);
var G__22716 = (0);
seq__22351_22684 = G__22713;
chunk__22354_22685 = G__22714;
count__22355_22686 = G__22715;
i__22356_22687 = G__22716;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22681);
});})(seq__22294_22677,chunk__22298_22678,count__22299_22679,i__22300_22680,seq__21955,chunk__21957,count__21958,i__21959,new_link_22683,path_match_22682,node_22681,path,seq__21955__$1,temp__5804__auto__,map__21953,map__21953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22682], 0));

goog.dom.insertSiblingAfter(new_link_22683,node_22681);


var G__22717 = seq__22294_22677;
var G__22718 = chunk__22298_22678;
var G__22719 = count__22299_22679;
var G__22720 = (i__22300_22680 + (1));
seq__22294_22677 = G__22717;
chunk__22298_22678 = G__22718;
count__22299_22679 = G__22719;
i__22300_22680 = G__22720;
continue;
} else {
var G__22721 = seq__22294_22677;
var G__22722 = chunk__22298_22678;
var G__22723 = count__22299_22679;
var G__22724 = (i__22300_22680 + (1));
seq__22294_22677 = G__22721;
chunk__22298_22678 = G__22722;
count__22299_22679 = G__22723;
i__22300_22680 = G__22724;
continue;
}
} else {
var G__22725 = seq__22294_22677;
var G__22726 = chunk__22298_22678;
var G__22727 = count__22299_22679;
var G__22728 = (i__22300_22680 + (1));
seq__22294_22677 = G__22725;
chunk__22298_22678 = G__22726;
count__22299_22679 = G__22727;
i__22300_22680 = G__22728;
continue;
}
} else {
var temp__5804__auto___22729__$1 = cljs.core.seq(seq__22294_22677);
if(temp__5804__auto___22729__$1){
var seq__22294_22730__$1 = temp__5804__auto___22729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22294_22730__$1)){
var c__5568__auto___22731 = cljs.core.chunk_first(seq__22294_22730__$1);
var G__22732 = cljs.core.chunk_rest(seq__22294_22730__$1);
var G__22733 = c__5568__auto___22731;
var G__22734 = cljs.core.count(c__5568__auto___22731);
var G__22735 = (0);
seq__22294_22677 = G__22732;
chunk__22298_22678 = G__22733;
count__22299_22679 = G__22734;
i__22300_22680 = G__22735;
continue;
} else {
var node_22736 = cljs.core.first(seq__22294_22730__$1);
if(cljs.core.not(node_22736.shadow$old)){
var path_match_22737 = shadow.cljs.devtools.client.browser.match_paths(node_22736.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22737)){
var new_link_22738 = (function (){var G__22394 = node_22736.cloneNode(true);
G__22394.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22737),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22394;
})();
(node_22736.shadow$old = true);

(new_link_22738.onload = ((function (seq__22294_22677,chunk__22298_22678,count__22299_22679,i__22300_22680,seq__21955,chunk__21957,count__21958,i__21959,new_link_22738,path_match_22737,node_22736,seq__22294_22730__$1,temp__5804__auto___22729__$1,path,seq__21955__$1,temp__5804__auto__,map__21953,map__21953__$1,msg,updates,reload_info){
return (function (e){
var seq__22396_22739 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22398_22740 = null;
var count__22399_22741 = (0);
var i__22400_22742 = (0);
while(true){
if((i__22400_22742 < count__22399_22741)){
var map__22422_22743 = chunk__22398_22740.cljs$core$IIndexed$_nth$arity$2(null,i__22400_22742);
var map__22422_22744__$1 = cljs.core.__destructure_map(map__22422_22743);
var task_22745 = map__22422_22744__$1;
var fn_str_22746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22422_22744__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22422_22744__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22748 = goog.getObjectByName(fn_str_22746,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22747)].join(''));

(fn_obj_22748.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22748.cljs$core$IFn$_invoke$arity$2(path,new_link_22738) : fn_obj_22748.call(null,path,new_link_22738));


var G__22749 = seq__22396_22739;
var G__22750 = chunk__22398_22740;
var G__22751 = count__22399_22741;
var G__22752 = (i__22400_22742 + (1));
seq__22396_22739 = G__22749;
chunk__22398_22740 = G__22750;
count__22399_22741 = G__22751;
i__22400_22742 = G__22752;
continue;
} else {
var temp__5804__auto___22753__$2 = cljs.core.seq(seq__22396_22739);
if(temp__5804__auto___22753__$2){
var seq__22396_22754__$1 = temp__5804__auto___22753__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22396_22754__$1)){
var c__5568__auto___22755 = cljs.core.chunk_first(seq__22396_22754__$1);
var G__22756 = cljs.core.chunk_rest(seq__22396_22754__$1);
var G__22757 = c__5568__auto___22755;
var G__22758 = cljs.core.count(c__5568__auto___22755);
var G__22759 = (0);
seq__22396_22739 = G__22756;
chunk__22398_22740 = G__22757;
count__22399_22741 = G__22758;
i__22400_22742 = G__22759;
continue;
} else {
var map__22427_22760 = cljs.core.first(seq__22396_22754__$1);
var map__22427_22761__$1 = cljs.core.__destructure_map(map__22427_22760);
var task_22762 = map__22427_22761__$1;
var fn_str_22763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22427_22761__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22427_22761__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22765 = goog.getObjectByName(fn_str_22763,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22764)].join(''));

(fn_obj_22765.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22765.cljs$core$IFn$_invoke$arity$2(path,new_link_22738) : fn_obj_22765.call(null,path,new_link_22738));


var G__22766 = cljs.core.next(seq__22396_22754__$1);
var G__22767 = null;
var G__22768 = (0);
var G__22769 = (0);
seq__22396_22739 = G__22766;
chunk__22398_22740 = G__22767;
count__22399_22741 = G__22768;
i__22400_22742 = G__22769;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22736);
});})(seq__22294_22677,chunk__22298_22678,count__22299_22679,i__22300_22680,seq__21955,chunk__21957,count__21958,i__21959,new_link_22738,path_match_22737,node_22736,seq__22294_22730__$1,temp__5804__auto___22729__$1,path,seq__21955__$1,temp__5804__auto__,map__21953,map__21953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22737], 0));

goog.dom.insertSiblingAfter(new_link_22738,node_22736);


var G__22770 = cljs.core.next(seq__22294_22730__$1);
var G__22771 = null;
var G__22772 = (0);
var G__22773 = (0);
seq__22294_22677 = G__22770;
chunk__22298_22678 = G__22771;
count__22299_22679 = G__22772;
i__22300_22680 = G__22773;
continue;
} else {
var G__22778 = cljs.core.next(seq__22294_22730__$1);
var G__22779 = null;
var G__22780 = (0);
var G__22781 = (0);
seq__22294_22677 = G__22778;
chunk__22298_22678 = G__22779;
count__22299_22679 = G__22780;
i__22300_22680 = G__22781;
continue;
}
} else {
var G__22782 = cljs.core.next(seq__22294_22730__$1);
var G__22783 = null;
var G__22784 = (0);
var G__22785 = (0);
seq__22294_22677 = G__22782;
chunk__22298_22678 = G__22783;
count__22299_22679 = G__22784;
i__22300_22680 = G__22785;
continue;
}
}
} else {
}
}
break;
}


var G__22786 = cljs.core.next(seq__21955__$1);
var G__22787 = null;
var G__22788 = (0);
var G__22789 = (0);
seq__21955 = G__22786;
chunk__21957 = G__22787;
count__21958 = G__22788;
i__21959 = G__22789;
continue;
} else {
var G__22790 = cljs.core.next(seq__21955__$1);
var G__22791 = null;
var G__22792 = (0);
var G__22793 = (0);
seq__21955 = G__22790;
chunk__21957 = G__22791;
count__21958 = G__22792;
i__21959 = G__22793;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22454){
var map__22455 = p__22454;
var map__22455__$1 = cljs.core.__destructure_map(map__22455);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22455__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22456,done,error){
var map__22457 = p__22456;
var map__22457__$1 = cljs.core.__destructure_map(map__22457);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22457__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22459,done,error){
var map__22460 = p__22459;
var map__22460__$1 = cljs.core.__destructure_map(map__22460);
var msg = map__22460__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22460__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22460__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22460__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22462){
var map__22463 = p__22462;
var map__22463__$1 = cljs.core.__destructure_map(map__22463);
var src = map__22463__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22463__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22464 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22464) : done.call(null,G__22464));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22467){
var map__22468 = p__22467;
var map__22468__$1 = cljs.core.__destructure_map(map__22468);
var msg__$1 = map__22468__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22468__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22469){var ex = e22469;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22470){
var map__22471 = p__22470;
var map__22471__$1 = cljs.core.__destructure_map(map__22471);
var env = map__22471__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22471__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22474){
var map__22475 = p__22474;
var map__22475__$1 = cljs.core.__destructure_map(map__22475);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22475__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22478){
var map__22479 = p__22478;
var map__22479__$1 = cljs.core.__destructure_map(map__22479);
var svc = map__22479__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
