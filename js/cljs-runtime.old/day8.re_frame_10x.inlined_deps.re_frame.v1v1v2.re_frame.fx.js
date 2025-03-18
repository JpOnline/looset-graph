goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16741 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16742 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16742);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16864 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16864)){
var new_db_16865 = temp__5804__auto___16864;
var fexpr__16744_16866 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16744_16866.cljs$core$IFn$_invoke$arity$1 ? fexpr__16744_16866.cljs$core$IFn$_invoke$arity$1(new_db_16865) : fexpr__16744_16866.call(null,new_db_16865));
} else {
}

var seq__16745 = cljs.core.seq(effects_without_db);
var chunk__16746 = null;
var count__16747 = (0);
var i__16748 = (0);
while(true){
if((i__16748 < count__16747)){
var vec__16760 = chunk__16746.cljs$core$IIndexed$_nth$arity$2(null,i__16748);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16760,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16760,(1),null);
var temp__5802__auto___16867 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16867)){
var effect_fn_16868 = temp__5802__auto___16867;
(effect_fn_16868.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16868.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16868.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16869 = seq__16745;
var G__16870 = chunk__16746;
var G__16871 = count__16747;
var G__16872 = (i__16748 + (1));
seq__16745 = G__16869;
chunk__16746 = G__16870;
count__16747 = G__16871;
i__16748 = G__16872;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16745);
if(temp__5804__auto__){
var seq__16745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16745__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16745__$1);
var G__16873 = cljs.core.chunk_rest(seq__16745__$1);
var G__16874 = c__5568__auto__;
var G__16875 = cljs.core.count(c__5568__auto__);
var G__16876 = (0);
seq__16745 = G__16873;
chunk__16746 = G__16874;
count__16747 = G__16875;
i__16748 = G__16876;
continue;
} else {
var vec__16765 = cljs.core.first(seq__16745__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16765,(1),null);
var temp__5802__auto___16881 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16881)){
var effect_fn_16882 = temp__5802__auto___16881;
(effect_fn_16882.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16882.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16882.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16883 = cljs.core.next(seq__16745__$1);
var G__16884 = null;
var G__16885 = (0);
var G__16886 = (0);
seq__16745 = G__16883;
chunk__16746 = G__16884;
count__16747 = G__16885;
i__16748 = G__16886;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__15499__auto___16887 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__15500__auto___16888 = (end__15499__auto___16887 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15500__auto___16888,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__15499__auto___16887);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16741);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___16889 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___16889)){
var new_db_16890 = temp__5804__auto___16889;
var fexpr__16774_16891 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__16774_16891.cljs$core$IFn$_invoke$arity$1 ? fexpr__16774_16891.cljs$core$IFn$_invoke$arity$1(new_db_16890) : fexpr__16774_16891.call(null,new_db_16890));
} else {
}

var seq__16775 = cljs.core.seq(effects_without_db);
var chunk__16776 = null;
var count__16777 = (0);
var i__16778 = (0);
while(true){
if((i__16778 < count__16777)){
var vec__16799 = chunk__16776.cljs$core$IIndexed$_nth$arity$2(null,i__16778);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16799,(1),null);
var temp__5802__auto___16892 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16892)){
var effect_fn_16893 = temp__5802__auto___16892;
(effect_fn_16893.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16893.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16893.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16895 = seq__16775;
var G__16896 = chunk__16776;
var G__16897 = count__16777;
var G__16898 = (i__16778 + (1));
seq__16775 = G__16895;
chunk__16776 = G__16896;
count__16777 = G__16897;
i__16778 = G__16898;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16775);
if(temp__5804__auto__){
var seq__16775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16775__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16775__$1);
var G__16902 = cljs.core.chunk_rest(seq__16775__$1);
var G__16903 = c__5568__auto__;
var G__16904 = cljs.core.count(c__5568__auto__);
var G__16905 = (0);
seq__16775 = G__16902;
chunk__16776 = G__16903;
count__16777 = G__16904;
i__16778 = G__16905;
continue;
} else {
var vec__16807 = cljs.core.first(seq__16775__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807,(1),null);
var temp__5802__auto___16909 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16909)){
var effect_fn_16910 = temp__5802__auto___16909;
(effect_fn_16910.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16910.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16910.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__16911 = cljs.core.next(seq__16775__$1);
var G__16912 = null;
var G__16913 = (0);
var G__16914 = (0);
seq__16775 = G__16911;
chunk__16776 = G__16912;
count__16777 = G__16913;
i__16778 = G__16914;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__16818){
var map__16819 = p__16818;
var map__16819__$1 = cljs.core.__destructure_map(map__16819);
var effect = map__16819__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16819__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16819__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__16821 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16822 = null;
var count__16823 = (0);
var i__16824 = (0);
while(true){
if((i__16824 < count__16823)){
var effect = chunk__16822.cljs$core$IIndexed$_nth$arity$2(null,i__16824);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16923 = seq__16821;
var G__16924 = chunk__16822;
var G__16925 = count__16823;
var G__16926 = (i__16824 + (1));
seq__16821 = G__16923;
chunk__16822 = G__16924;
count__16823 = G__16925;
i__16824 = G__16926;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16821);
if(temp__5804__auto__){
var seq__16821__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16821__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16821__$1);
var G__16928 = cljs.core.chunk_rest(seq__16821__$1);
var G__16929 = c__5568__auto__;
var G__16930 = cljs.core.count(c__5568__auto__);
var G__16931 = (0);
seq__16821 = G__16928;
chunk__16822 = G__16929;
count__16823 = G__16930;
i__16824 = G__16931;
continue;
} else {
var effect = cljs.core.first(seq__16821__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__16932 = cljs.core.next(seq__16821__$1);
var G__16933 = null;
var G__16934 = (0);
var G__16935 = (0);
seq__16821 = G__16932;
chunk__16822 = G__16933;
count__16823 = G__16934;
i__16824 = G__16935;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__16826 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__16827 = null;
var count__16828 = (0);
var i__16829 = (0);
while(true){
if((i__16829 < count__16828)){
var vec__16842 = chunk__16827.cljs$core$IIndexed$_nth$arity$2(null,i__16829);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16842,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16842,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16941 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16941)){
var effect_fn_16942 = temp__5802__auto___16941;
(effect_fn_16942.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16942.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16942.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16944 = seq__16826;
var G__16945 = chunk__16827;
var G__16946 = count__16828;
var G__16947 = (i__16829 + (1));
seq__16826 = G__16944;
chunk__16827 = G__16945;
count__16828 = G__16946;
i__16829 = G__16947;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16826);
if(temp__5804__auto__){
var seq__16826__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16826__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16826__$1);
var G__16948 = cljs.core.chunk_rest(seq__16826__$1);
var G__16949 = c__5568__auto__;
var G__16950 = cljs.core.count(c__5568__auto__);
var G__16951 = (0);
seq__16826 = G__16948;
chunk__16827 = G__16949;
count__16828 = G__16950;
i__16829 = G__16951;
continue;
} else {
var vec__16847 = cljs.core.first(seq__16826__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16847,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___16954 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___16954)){
var effect_fn_16955 = temp__5802__auto___16954;
(effect_fn_16955.cljs$core$IFn$_invoke$arity$1 ? effect_fn_16955.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_16955.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__16956 = cljs.core.next(seq__16826__$1);
var G__16957 = null;
var G__16958 = (0);
var G__16959 = (0);
seq__16826 = G__16956;
chunk__16827 = G__16957;
count__16828 = G__16958;
i__16829 = G__16959;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__16851 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__16852 = null;
var count__16853 = (0);
var i__16854 = (0);
while(true){
if((i__16854 < count__16853)){
var event = chunk__16852.cljs$core$IIndexed$_nth$arity$2(null,i__16854);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16964 = seq__16851;
var G__16965 = chunk__16852;
var G__16966 = count__16853;
var G__16967 = (i__16854 + (1));
seq__16851 = G__16964;
chunk__16852 = G__16965;
count__16853 = G__16966;
i__16854 = G__16967;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16851);
if(temp__5804__auto__){
var seq__16851__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16851__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16851__$1);
var G__16968 = cljs.core.chunk_rest(seq__16851__$1);
var G__16969 = c__5568__auto__;
var G__16970 = cljs.core.count(c__5568__auto__);
var G__16971 = (0);
seq__16851 = G__16968;
chunk__16852 = G__16969;
count__16853 = G__16970;
i__16854 = G__16971;
continue;
} else {
var event = cljs.core.first(seq__16851__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__16972 = cljs.core.next(seq__16851__$1);
var G__16973 = null;
var G__16974 = (0);
var G__16975 = (0);
seq__16851 = G__16972;
chunk__16852 = G__16973;
count__16853 = G__16974;
i__16854 = G__16975;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__16855 = cljs.core.seq(value);
var chunk__16856 = null;
var count__16857 = (0);
var i__16858 = (0);
while(true){
if((i__16858 < count__16857)){
var event = chunk__16856.cljs$core$IIndexed$_nth$arity$2(null,i__16858);
clear_event(event);


var G__16980 = seq__16855;
var G__16981 = chunk__16856;
var G__16982 = count__16857;
var G__16983 = (i__16858 + (1));
seq__16855 = G__16980;
chunk__16856 = G__16981;
count__16857 = G__16982;
i__16858 = G__16983;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16855);
if(temp__5804__auto__){
var seq__16855__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16855__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16855__$1);
var G__16984 = cljs.core.chunk_rest(seq__16855__$1);
var G__16985 = c__5568__auto__;
var G__16986 = cljs.core.count(c__5568__auto__);
var G__16987 = (0);
seq__16855 = G__16984;
chunk__16856 = G__16985;
count__16857 = G__16986;
i__16858 = G__16987;
continue;
} else {
var event = cljs.core.first(seq__16855__$1);
clear_event(event);


var G__16988 = cljs.core.next(seq__16855__$1);
var G__16989 = null;
var G__16990 = (0);
var G__16991 = (0);
seq__16855 = G__16988;
chunk__16856 = G__16989;
count__16857 = G__16990;
i__16858 = G__16991;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
