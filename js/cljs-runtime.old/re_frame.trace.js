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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16016){
var map__16017 = p__16016;
var map__16017__$1 = cljs.core.__destructure_map(map__16017);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16017__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16017__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16017__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16017__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__16021_16059 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__16022_16060 = null;
var count__16023_16061 = (0);
var i__16024_16062 = (0);
while(true){
if((i__16024_16062 < count__16023_16061)){
var vec__16038_16064 = chunk__16022_16060.cljs$core$IIndexed$_nth$arity$2(null,i__16024_16062);
var k_16065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038_16064,(0),null);
var cb_16066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038_16064,(1),null);
try{var G__16042_16067 = cljs.core.deref(re_frame.trace.traces);
(cb_16066.cljs$core$IFn$_invoke$arity$1 ? cb_16066.cljs$core$IFn$_invoke$arity$1(G__16042_16067) : cb_16066.call(null,G__16042_16067));
}catch (e16041){var e_16068 = e16041;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16065,"while storing",cljs.core.deref(re_frame.trace.traces),e_16068], 0));
}

var G__16069 = seq__16021_16059;
var G__16070 = chunk__16022_16060;
var G__16071 = count__16023_16061;
var G__16072 = (i__16024_16062 + (1));
seq__16021_16059 = G__16069;
chunk__16022_16060 = G__16070;
count__16023_16061 = G__16071;
i__16024_16062 = G__16072;
continue;
} else {
var temp__5804__auto___16073 = cljs.core.seq(seq__16021_16059);
if(temp__5804__auto___16073){
var seq__16021_16074__$1 = temp__5804__auto___16073;
if(cljs.core.chunked_seq_QMARK_(seq__16021_16074__$1)){
var c__5568__auto___16075 = cljs.core.chunk_first(seq__16021_16074__$1);
var G__16076 = cljs.core.chunk_rest(seq__16021_16074__$1);
var G__16077 = c__5568__auto___16075;
var G__16078 = cljs.core.count(c__5568__auto___16075);
var G__16079 = (0);
seq__16021_16059 = G__16076;
chunk__16022_16060 = G__16077;
count__16023_16061 = G__16078;
i__16024_16062 = G__16079;
continue;
} else {
var vec__16045_16080 = cljs.core.first(seq__16021_16074__$1);
var k_16081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045_16080,(0),null);
var cb_16082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045_16080,(1),null);
try{var G__16049_16083 = cljs.core.deref(re_frame.trace.traces);
(cb_16082.cljs$core$IFn$_invoke$arity$1 ? cb_16082.cljs$core$IFn$_invoke$arity$1(G__16049_16083) : cb_16082.call(null,G__16049_16083));
}catch (e16048){var e_16084 = e16048;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16081,"while storing",cljs.core.deref(re_frame.trace.traces),e_16084], 0));
}

var G__16085 = cljs.core.next(seq__16021_16074__$1);
var G__16086 = null;
var G__16087 = (0);
var G__16088 = (0);
seq__16021_16059 = G__16085;
chunk__16022_16060 = G__16086;
count__16023_16061 = G__16087;
i__16024_16062 = G__16088;
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
