goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14828 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14830 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14830);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___15008 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___15008)){
var new_db_15011 = temp__5804__auto___15008;
var fexpr__14836_15012 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14836_15012.cljs$core$IFn$_invoke$arity$1 ? fexpr__14836_15012.cljs$core$IFn$_invoke$arity$1(new_db_15011) : fexpr__14836_15012.call(null,new_db_15011));
} else {
}

var seq__14841 = cljs.core.seq(effects_without_db);
var chunk__14842 = null;
var count__14843 = (0);
var i__14844 = (0);
while(true){
if((i__14844 < count__14843)){
var vec__14868 = chunk__14842.cljs$core$IIndexed$_nth$arity$2(null,i__14844);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14868,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14868,(1),null);
var temp__5802__auto___15013 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15013)){
var effect_fn_15015 = temp__5802__auto___15013;
(effect_fn_15015.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15015.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15015.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__15018 = seq__14841;
var G__15019 = chunk__14842;
var G__15020 = count__14843;
var G__15021 = (i__14844 + (1));
seq__14841 = G__15018;
chunk__14842 = G__15019;
count__14843 = G__15020;
i__14844 = G__15021;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14841);
if(temp__5804__auto__){
var seq__14841__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14841__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14841__$1);
var G__15022 = cljs.core.chunk_rest(seq__14841__$1);
var G__15023 = c__5568__auto__;
var G__15024 = cljs.core.count(c__5568__auto__);
var G__15025 = (0);
seq__14841 = G__15022;
chunk__14842 = G__15023;
count__14843 = G__15024;
i__14844 = G__15025;
continue;
} else {
var vec__14880 = cljs.core.first(seq__14841__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14880,(1),null);
var temp__5802__auto___15030 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15030)){
var effect_fn_15031 = temp__5802__auto___15030;
(effect_fn_15031.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15031.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15031.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__15032 = cljs.core.next(seq__14841__$1);
var G__15033 = null;
var G__15034 = (0);
var G__15035 = (0);
seq__14841 = G__15032;
chunk__14842 = G__15033;
count__14843 = G__15034;
i__14844 = G__15035;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12570__auto___15036 = re_frame.interop.now();
var duration__12571__auto___15037 = (end__12570__auto___15036 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12571__auto___15037,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12570__auto___15036);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14828);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___15038 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___15038)){
var new_db_15039 = temp__5804__auto___15038;
var fexpr__14892_15040 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__14892_15040.cljs$core$IFn$_invoke$arity$1 ? fexpr__14892_15040.cljs$core$IFn$_invoke$arity$1(new_db_15039) : fexpr__14892_15040.call(null,new_db_15039));
} else {
}

var seq__14897 = cljs.core.seq(effects_without_db);
var chunk__14898 = null;
var count__14899 = (0);
var i__14900 = (0);
while(true){
if((i__14900 < count__14899)){
var vec__14907 = chunk__14898.cljs$core$IIndexed$_nth$arity$2(null,i__14900);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14907,(1),null);
var temp__5802__auto___15044 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15044)){
var effect_fn_15046 = temp__5802__auto___15044;
(effect_fn_15046.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15046.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15046.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__15049 = seq__14897;
var G__15050 = chunk__14898;
var G__15051 = count__14899;
var G__15052 = (i__14900 + (1));
seq__14897 = G__15049;
chunk__14898 = G__15050;
count__14899 = G__15051;
i__14900 = G__15052;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14897);
if(temp__5804__auto__){
var seq__14897__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14897__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14897__$1);
var G__15054 = cljs.core.chunk_rest(seq__14897__$1);
var G__15055 = c__5568__auto__;
var G__15056 = cljs.core.count(c__5568__auto__);
var G__15057 = (0);
seq__14897 = G__15054;
chunk__14898 = G__15055;
count__14899 = G__15056;
i__14900 = G__15057;
continue;
} else {
var vec__14916 = cljs.core.first(seq__14897__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916,(1),null);
var temp__5802__auto___15059 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15059)){
var effect_fn_15060 = temp__5802__auto___15059;
(effect_fn_15060.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15060.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15060.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__15061 = cljs.core.next(seq__14897__$1);
var G__15062 = null;
var G__15063 = (0);
var G__15064 = (0);
seq__14897 = G__15061;
chunk__14898 = G__15062;
count__14899 = G__15063;
i__14900 = G__15064;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__14924){
var map__14926 = p__14924;
var map__14926__$1 = cljs.core.__destructure_map(map__14926);
var effect = map__14926__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14926__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14926__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__14928 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14929 = null;
var count__14930 = (0);
var i__14931 = (0);
while(true){
if((i__14931 < count__14930)){
var effect = chunk__14929.cljs$core$IIndexed$_nth$arity$2(null,i__14931);
re_frame.fx.dispatch_later(effect);


var G__15065 = seq__14928;
var G__15066 = chunk__14929;
var G__15067 = count__14930;
var G__15068 = (i__14931 + (1));
seq__14928 = G__15065;
chunk__14929 = G__15066;
count__14930 = G__15067;
i__14931 = G__15068;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14928);
if(temp__5804__auto__){
var seq__14928__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14928__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14928__$1);
var G__15069 = cljs.core.chunk_rest(seq__14928__$1);
var G__15070 = c__5568__auto__;
var G__15071 = cljs.core.count(c__5568__auto__);
var G__15072 = (0);
seq__14928 = G__15069;
chunk__14929 = G__15070;
count__14930 = G__15071;
i__14931 = G__15072;
continue;
} else {
var effect = cljs.core.first(seq__14928__$1);
re_frame.fx.dispatch_later(effect);


var G__15073 = cljs.core.next(seq__14928__$1);
var G__15074 = null;
var G__15075 = (0);
var G__15076 = (0);
seq__14928 = G__15073;
chunk__14929 = G__15074;
count__14930 = G__15075;
i__14931 = G__15076;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__14943 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__14944 = null;
var count__14945 = (0);
var i__14946 = (0);
while(true){
if((i__14946 < count__14945)){
var vec__14964 = chunk__14944.cljs$core$IIndexed$_nth$arity$2(null,i__14946);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14964,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14964,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___15079 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15079)){
var effect_fn_15080 = temp__5802__auto___15079;
(effect_fn_15080.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15080.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15080.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15081 = seq__14943;
var G__15082 = chunk__14944;
var G__15083 = count__14945;
var G__15084 = (i__14946 + (1));
seq__14943 = G__15081;
chunk__14944 = G__15082;
count__14945 = G__15083;
i__14946 = G__15084;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14943);
if(temp__5804__auto__){
var seq__14943__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14943__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14943__$1);
var G__15087 = cljs.core.chunk_rest(seq__14943__$1);
var G__15088 = c__5568__auto__;
var G__15089 = cljs.core.count(c__5568__auto__);
var G__15090 = (0);
seq__14943 = G__15087;
chunk__14944 = G__15088;
count__14945 = G__15089;
i__14946 = G__15090;
continue;
} else {
var vec__14970 = cljs.core.first(seq__14943__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14970,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14970,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___15093 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___15093)){
var effect_fn_15094 = temp__5802__auto___15093;
(effect_fn_15094.cljs$core$IFn$_invoke$arity$1 ? effect_fn_15094.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_15094.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__15096 = cljs.core.next(seq__14943__$1);
var G__15097 = null;
var G__15098 = (0);
var G__15099 = (0);
seq__14943 = G__15096;
chunk__14944 = G__15097;
count__14945 = G__15098;
i__14946 = G__15099;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__14978 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__14979 = null;
var count__14980 = (0);
var i__14981 = (0);
while(true){
if((i__14981 < count__14980)){
var event = chunk__14979.cljs$core$IIndexed$_nth$arity$2(null,i__14981);
re_frame.router.dispatch(event);


var G__15101 = seq__14978;
var G__15102 = chunk__14979;
var G__15103 = count__14980;
var G__15104 = (i__14981 + (1));
seq__14978 = G__15101;
chunk__14979 = G__15102;
count__14980 = G__15103;
i__14981 = G__15104;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14978);
if(temp__5804__auto__){
var seq__14978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14978__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14978__$1);
var G__15105 = cljs.core.chunk_rest(seq__14978__$1);
var G__15106 = c__5568__auto__;
var G__15107 = cljs.core.count(c__5568__auto__);
var G__15108 = (0);
seq__14978 = G__15105;
chunk__14979 = G__15106;
count__14980 = G__15107;
i__14981 = G__15108;
continue;
} else {
var event = cljs.core.first(seq__14978__$1);
re_frame.router.dispatch(event);


var G__15109 = cljs.core.next(seq__14978__$1);
var G__15110 = null;
var G__15111 = (0);
var G__15112 = (0);
seq__14978 = G__15109;
chunk__14979 = G__15110;
count__14980 = G__15111;
i__14981 = G__15112;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__14982 = cljs.core.seq(value);
var chunk__14983 = null;
var count__14984 = (0);
var i__14985 = (0);
while(true){
if((i__14985 < count__14984)){
var event = chunk__14983.cljs$core$IIndexed$_nth$arity$2(null,i__14985);
clear_event(event);


var G__15115 = seq__14982;
var G__15116 = chunk__14983;
var G__15117 = count__14984;
var G__15118 = (i__14985 + (1));
seq__14982 = G__15115;
chunk__14983 = G__15116;
count__14984 = G__15117;
i__14985 = G__15118;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14982);
if(temp__5804__auto__){
var seq__14982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14982__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14982__$1);
var G__15121 = cljs.core.chunk_rest(seq__14982__$1);
var G__15122 = c__5568__auto__;
var G__15123 = cljs.core.count(c__5568__auto__);
var G__15124 = (0);
seq__14982 = G__15121;
chunk__14983 = G__15122;
count__14984 = G__15123;
i__14985 = G__15124;
continue;
} else {
var event = cljs.core.first(seq__14982__$1);
clear_event(event);


var G__15126 = cljs.core.next(seq__14982__$1);
var G__15127 = null;
var G__15128 = (0);
var G__15129 = (0);
seq__14982 = G__15126;
chunk__14983 = G__15127;
count__14984 = G__15128;
i__14985 = G__15129;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__14995 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14996 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14996);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12570__auto___15133 = re_frame.interop.now();
var duration__12571__auto___15134 = (end__12570__auto___15133 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12571__auto___15134,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12570__auto___15133);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14995);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
