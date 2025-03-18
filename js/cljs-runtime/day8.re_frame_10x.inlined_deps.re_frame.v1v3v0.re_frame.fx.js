goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v3v0.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14421 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14422 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14422);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14585 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14585)){
var new_db_14587 = temp__5804__auto___14585;
var fexpr__14438_14588 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14438_14588.cljs$core$IFn$_invoke$arity$1 ? fexpr__14438_14588.cljs$core$IFn$_invoke$arity$1(new_db_14587) : fexpr__14438_14588.call(null,new_db_14587));
} else {
}

var seq__14439 = cljs.core.seq(effects_without_db);
var chunk__14440 = null;
var count__14441 = (0);
var i__14442 = (0);
while(true){
if((i__14442 < count__14441)){
var vec__14453 = chunk__14440.cljs$core$IIndexed$_nth$arity$2(null,i__14442);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(1),null);
var temp__5802__auto___14592 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14592)){
var effect_fn_14593 = temp__5802__auto___14592;
(effect_fn_14593.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14593.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14593.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14594 = seq__14439;
var G__14595 = chunk__14440;
var G__14596 = count__14441;
var G__14597 = (i__14442 + (1));
seq__14439 = G__14594;
chunk__14440 = G__14595;
count__14441 = G__14596;
i__14442 = G__14597;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14439);
if(temp__5804__auto__){
var seq__14439__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14439__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14439__$1);
var G__14598 = cljs.core.chunk_rest(seq__14439__$1);
var G__14599 = c__5568__auto__;
var G__14600 = cljs.core.count(c__5568__auto__);
var G__14601 = (0);
seq__14439 = G__14598;
chunk__14440 = G__14599;
count__14441 = G__14600;
i__14442 = G__14601;
continue;
} else {
var vec__14456 = cljs.core.first(seq__14439__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14456,(1),null);
var temp__5802__auto___14602 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14602)){
var effect_fn_14603 = temp__5802__auto___14602;
(effect_fn_14603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14603.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14605 = cljs.core.next(seq__14439__$1);
var G__14606 = null;
var G__14607 = (0);
var G__14608 = (0);
seq__14439 = G__14605;
chunk__14440 = G__14606;
count__14441 = G__14607;
i__14442 = G__14608;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__13108__auto___14610 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now();
var duration__13109__auto___14611 = (end__13108__auto___14610 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__13109__auto___14611,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace.run_tracing_callbacks_BANG_(end__13108__auto___14610);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14421);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___14612 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___14612)){
var new_db_14613 = temp__5804__auto___14612;
var fexpr__14461_14614 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14461_14614.cljs$core$IFn$_invoke$arity$1 ? fexpr__14461_14614.cljs$core$IFn$_invoke$arity$1(new_db_14613) : fexpr__14461_14614.call(null,new_db_14613));
} else {
}

var seq__14462 = cljs.core.seq(effects_without_db);
var chunk__14463 = null;
var count__14464 = (0);
var i__14465 = (0);
while(true){
if((i__14465 < count__14464)){
var vec__14481 = chunk__14463.cljs$core$IIndexed$_nth$arity$2(null,i__14465);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14481,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14481,(1),null);
var temp__5802__auto___14617 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14617)){
var effect_fn_14618 = temp__5802__auto___14617;
(effect_fn_14618.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14618.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14618.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14619 = seq__14462;
var G__14620 = chunk__14463;
var G__14621 = count__14464;
var G__14622 = (i__14465 + (1));
seq__14462 = G__14619;
chunk__14463 = G__14620;
count__14464 = G__14621;
i__14465 = G__14622;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14462);
if(temp__5804__auto__){
var seq__14462__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14462__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14462__$1);
var G__14623 = cljs.core.chunk_rest(seq__14462__$1);
var G__14624 = c__5568__auto__;
var G__14625 = cljs.core.count(c__5568__auto__);
var G__14626 = (0);
seq__14462 = G__14623;
chunk__14463 = G__14624;
count__14464 = G__14625;
i__14465 = G__14626;
continue;
} else {
var vec__14491 = cljs.core.first(seq__14462__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14491,(1),null);
var temp__5802__auto___14627 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14627)){
var effect_fn_14628 = temp__5802__auto___14627;
(effect_fn_14628.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14628.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14628.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__14630 = cljs.core.next(seq__14462__$1);
var G__14631 = null;
var G__14632 = (0);
var G__14633 = (0);
seq__14462 = G__14630;
chunk__14463 = G__14631;
count__14464 = G__14632;
i__14465 = G__14633;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v3v0$re_frame$fx$dispatch_later(p__14497){
var map__14499 = p__14497;
var map__14499__$1 = cljs.core.__destructure_map(map__14499);
var effect = map__14499__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14499__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14499__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(value);
} else {
var seq__14501 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14502 = null;
var count__14503 = (0);
var i__14504 = (0);
while(true){
if((i__14504 < count__14503)){
var effect = chunk__14502.cljs$core$IIndexed$_nth$arity$2(null,i__14504);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__14634 = seq__14501;
var G__14635 = chunk__14502;
var G__14636 = count__14503;
var G__14637 = (i__14504 + (1));
seq__14501 = G__14634;
chunk__14502 = G__14635;
count__14503 = G__14636;
i__14504 = G__14637;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14501);
if(temp__5804__auto__){
var seq__14501__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14501__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14501__$1);
var G__14639 = cljs.core.chunk_rest(seq__14501__$1);
var G__14640 = c__5568__auto__;
var G__14641 = cljs.core.count(c__5568__auto__);
var G__14642 = (0);
seq__14501 = G__14639;
chunk__14502 = G__14640;
count__14503 = G__14641;
i__14504 = G__14642;
continue;
} else {
var effect = cljs.core.first(seq__14501__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.dispatch_later(effect);


var G__14643 = cljs.core.next(seq__14501__$1);
var G__14644 = null;
var G__14645 = (0);
var G__14646 = (0);
seq__14501 = G__14643;
chunk__14502 = G__14644;
count__14503 = G__14645;
i__14504 = G__14646;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__14516 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14517 = null;
var count__14518 = (0);
var i__14519 = (0);
while(true){
if((i__14519 < count__14518)){
var vec__14537 = chunk__14517.cljs$core$IIndexed$_nth$arity$2(null,i__14519);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14537,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14537,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14647 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14647)){
var effect_fn_14648 = temp__5802__auto___14647;
(effect_fn_14648.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14648.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14648.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14650 = seq__14516;
var G__14651 = chunk__14517;
var G__14652 = count__14518;
var G__14653 = (i__14519 + (1));
seq__14516 = G__14650;
chunk__14517 = G__14651;
count__14518 = G__14652;
i__14519 = G__14653;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14516);
if(temp__5804__auto__){
var seq__14516__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14516__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14516__$1);
var G__14654 = cljs.core.chunk_rest(seq__14516__$1);
var G__14655 = c__5568__auto__;
var G__14656 = cljs.core.count(c__5568__auto__);
var G__14657 = (0);
seq__14516 = G__14654;
chunk__14517 = G__14655;
count__14518 = G__14656;
i__14519 = G__14657;
continue;
} else {
var vec__14545 = cljs.core.first(seq__14516__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14545,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___14658 = day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___14658)){
var effect_fn_14659 = temp__5802__auto___14658;
(effect_fn_14659.cljs$core$IFn$_invoke$arity$1 ? effect_fn_14659.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_14659.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__14660 = cljs.core.next(seq__14516__$1);
var G__14661 = null;
var G__14662 = (0);
var G__14663 = (0);
seq__14516 = G__14660;
chunk__14517 = G__14661;
count__14518 = G__14662;
i__14519 = G__14663;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__14553 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14554 = null;
var count__14555 = (0);
var i__14556 = (0);
while(true){
if((i__14556 < count__14555)){
var event = chunk__14554.cljs$core$IIndexed$_nth$arity$2(null,i__14556);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__14667 = seq__14553;
var G__14668 = chunk__14554;
var G__14669 = count__14555;
var G__14670 = (i__14556 + (1));
seq__14553 = G__14667;
chunk__14554 = G__14668;
count__14555 = G__14669;
i__14556 = G__14670;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14553);
if(temp__5804__auto__){
var seq__14553__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14553__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14553__$1);
var G__14672 = cljs.core.chunk_rest(seq__14553__$1);
var G__14673 = c__5568__auto__;
var G__14674 = cljs.core.count(c__5568__auto__);
var G__14675 = (0);
seq__14553 = G__14672;
chunk__14554 = G__14673;
count__14555 = G__14674;
i__14556 = G__14675;
continue;
} else {
var event = cljs.core.first(seq__14553__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.router.dispatch(event);


var G__14676 = cljs.core.next(seq__14553__$1);
var G__14677 = null;
var G__14678 = (0);
var G__14679 = (0);
seq__14553 = G__14676;
chunk__14554 = G__14677;
count__14555 = G__14678;
i__14556 = G__14679;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14568 = cljs.core.seq(value);
var chunk__14569 = null;
var count__14570 = (0);
var i__14571 = (0);
while(true){
if((i__14571 < count__14570)){
var event = chunk__14569.cljs$core$IIndexed$_nth$arity$2(null,i__14571);
clear_event(event);


var G__14680 = seq__14568;
var G__14681 = chunk__14569;
var G__14682 = count__14570;
var G__14683 = (i__14571 + (1));
seq__14568 = G__14680;
chunk__14569 = G__14681;
count__14570 = G__14682;
i__14571 = G__14683;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14568);
if(temp__5804__auto__){
var seq__14568__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14568__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14568__$1);
var G__14685 = cljs.core.chunk_rest(seq__14568__$1);
var G__14686 = c__5568__auto__;
var G__14687 = cljs.core.count(c__5568__auto__);
var G__14688 = (0);
seq__14568 = G__14685;
chunk__14569 = G__14686;
count__14570 = G__14687;
i__14571 = G__14688;
continue;
} else {
var event = cljs.core.first(seq__14568__$1);
clear_event(event);


var G__14689 = cljs.core.next(seq__14568__$1);
var G__14690 = null;
var G__14691 = (0);
var G__14692 = (0);
seq__14568 = G__14689;
chunk__14569 = G__14690;
count__14570 = G__14691;
i__14571 = G__14692;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v3v0.re_frame.fx.js.map
