goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
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
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12605){
var map__12606 = p__12605;
var map__12606__$1 = cljs.core.__destructure_map(map__12606);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12606__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12606__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12606__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12606__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12611_12640 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12612_12641 = null;
var count__12613_12642 = (0);
var i__12614_12643 = (0);
while(true){
if((i__12614_12643 < count__12613_12642)){
var vec__12626_12644 = chunk__12612_12641.cljs$core$IIndexed$_nth$arity$2(null,i__12614_12643);
var k_12645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626_12644,(0),null);
var cb_12646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12626_12644,(1),null);
try{var G__12631_12647 = cljs.core.deref(re_frame.trace.traces);
(cb_12646.cljs$core$IFn$_invoke$arity$1 ? cb_12646.cljs$core$IFn$_invoke$arity$1(G__12631_12647) : cb_12646.call(null,G__12631_12647));
}catch (e12629){var e_12648 = e12629;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12645,"while storing",cljs.core.deref(re_frame.trace.traces),e_12648], 0));
}

var G__12649 = seq__12611_12640;
var G__12650 = chunk__12612_12641;
var G__12651 = count__12613_12642;
var G__12652 = (i__12614_12643 + (1));
seq__12611_12640 = G__12649;
chunk__12612_12641 = G__12650;
count__12613_12642 = G__12651;
i__12614_12643 = G__12652;
continue;
} else {
var temp__5804__auto___12653 = cljs.core.seq(seq__12611_12640);
if(temp__5804__auto___12653){
var seq__12611_12654__$1 = temp__5804__auto___12653;
if(cljs.core.chunked_seq_QMARK_(seq__12611_12654__$1)){
var c__5568__auto___12655 = cljs.core.chunk_first(seq__12611_12654__$1);
var G__12656 = cljs.core.chunk_rest(seq__12611_12654__$1);
var G__12657 = c__5568__auto___12655;
var G__12658 = cljs.core.count(c__5568__auto___12655);
var G__12659 = (0);
seq__12611_12640 = G__12656;
chunk__12612_12641 = G__12657;
count__12613_12642 = G__12658;
i__12614_12643 = G__12659;
continue;
} else {
var vec__12632_12660 = cljs.core.first(seq__12611_12654__$1);
var k_12661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632_12660,(0),null);
var cb_12662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12632_12660,(1),null);
try{var G__12636_12663 = cljs.core.deref(re_frame.trace.traces);
(cb_12662.cljs$core$IFn$_invoke$arity$1 ? cb_12662.cljs$core$IFn$_invoke$arity$1(G__12636_12663) : cb_12662.call(null,G__12636_12663));
}catch (e12635){var e_12664 = e12635;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12661,"while storing",cljs.core.deref(re_frame.trace.traces),e_12664], 0));
}

var G__12665 = cljs.core.next(seq__12611_12654__$1);
var G__12666 = null;
var G__12667 = (0);
var G__12668 = (0);
seq__12611_12640 = G__12665;
chunk__12612_12641 = G__12666;
count__12613_12642 = G__12667;
i__12614_12643 = G__12668;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
