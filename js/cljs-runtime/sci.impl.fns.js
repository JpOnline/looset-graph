goog.provide('sci.impl.fns');
sci.impl.fns.fun = (function sci$impl$fns$fun(var_args){
var G__27293 = arguments.length;
switch (G__27293) {
case 5:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 11:
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_){
return sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"copy-enclosed->invocation","copy-enclosed->invocation",-1322388729).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(fn_body),new cljs.core.Keyword(null,"invoc-size","invoc-size",2053298058).cljs$core$IFn$_invoke$arity$1(fn_body),sci.impl.utils.current_ns_name(),new cljs.core.Keyword(null,"vararg-idx","vararg-idx",-590991228).cljs$core$IFn$_invoke$arity$1(fn_body));
}));

(sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$11 = (function (ctx,enclosed_array,fn_body,fn_name,macro_QMARK_,fixed_arity,enclosed__GT_invocation,body,invoc_size,nsm,vararg_idx){
var f = (cljs.core.truth_(vararg_idx)?(function (){var G__27307 = fixed_arity;
switch (G__27307) {
case (0):
return (function() { 
var sci$impl$fns$arity_0__delegate = function (G__27312){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[vararg_idx] = G__27312);

while(true){
var ret__26202__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26202__auto__)){
continue;
} else {
return ret__26202__auto__;
}
break;
}
};
var sci$impl$fns$arity_0 = function (var_args){
var G__27312 = null;
if (arguments.length > 0) {
var G__28241__i = 0, G__28241__a = new Array(arguments.length -  0);
while (G__28241__i < G__28241__a.length) {G__28241__a[G__28241__i] = arguments[G__28241__i + 0]; ++G__28241__i;}
  G__27312 = new cljs.core.IndexedSeq(G__28241__a,0,null);
} 
return sci$impl$fns$arity_0__delegate.call(this,G__27312);};
sci$impl$fns$arity_0.cljs$lang$maxFixedArity = 0;
sci$impl$fns$arity_0.cljs$lang$applyTo = (function (arglist__28243){
var G__27312 = cljs.core.seq(arglist__28243);
return sci$impl$fns$arity_0__delegate(G__27312);
});
sci$impl$fns$arity_0.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_0__delegate;
return sci$impl$fns$arity_0;
})()
;

break;
case (1):
return (function() { 
var sci$impl$fns$arity_1__delegate = function (G__27327,G__27328){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27327);

(invoc_array[vararg_idx] = G__27328);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_1 = function (G__27327,var_args){
var G__27328 = null;
if (arguments.length > 1) {
var G__28245__i = 0, G__28245__a = new Array(arguments.length -  1);
while (G__28245__i < G__28245__a.length) {G__28245__a[G__28245__i] = arguments[G__28245__i + 1]; ++G__28245__i;}
  G__27328 = new cljs.core.IndexedSeq(G__28245__a,0,null);
} 
return sci$impl$fns$arity_1__delegate.call(this,G__27327,G__27328);};
sci$impl$fns$arity_1.cljs$lang$maxFixedArity = 1;
sci$impl$fns$arity_1.cljs$lang$applyTo = (function (arglist__28246){
var G__27327 = cljs.core.first(arglist__28246);
var G__27328 = cljs.core.rest(arglist__28246);
return sci$impl$fns$arity_1__delegate(G__27327,G__27328);
});
sci$impl$fns$arity_1.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_1__delegate;
return sci$impl$fns$arity_1;
})()
;

break;
case (2):
return (function() { 
var sci$impl$fns$arity_2__delegate = function (G__27344,G__27345,G__27346){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27344);

(invoc_array[(1)] = G__27345);

(invoc_array[vararg_idx] = G__27346);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_2 = function (G__27344,G__27345,var_args){
var G__27346 = null;
if (arguments.length > 2) {
var G__28247__i = 0, G__28247__a = new Array(arguments.length -  2);
while (G__28247__i < G__28247__a.length) {G__28247__a[G__28247__i] = arguments[G__28247__i + 2]; ++G__28247__i;}
  G__27346 = new cljs.core.IndexedSeq(G__28247__a,0,null);
} 
return sci$impl$fns$arity_2__delegate.call(this,G__27344,G__27345,G__27346);};
sci$impl$fns$arity_2.cljs$lang$maxFixedArity = 2;
sci$impl$fns$arity_2.cljs$lang$applyTo = (function (arglist__28248){
var G__27344 = cljs.core.first(arglist__28248);
arglist__28248 = cljs.core.next(arglist__28248);
var G__27345 = cljs.core.first(arglist__28248);
var G__27346 = cljs.core.rest(arglist__28248);
return sci$impl$fns$arity_2__delegate(G__27344,G__27345,G__27346);
});
sci$impl$fns$arity_2.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_2__delegate;
return sci$impl$fns$arity_2;
})()
;

break;
case (3):
return (function() { 
var sci$impl$fns$arity_3__delegate = function (G__27366,G__27367,G__27368,G__27369){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27366);

(invoc_array[(1)] = G__27367);

(invoc_array[(2)] = G__27368);

(invoc_array[vararg_idx] = G__27369);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_3 = function (G__27366,G__27367,G__27368,var_args){
var G__27369 = null;
if (arguments.length > 3) {
var G__28249__i = 0, G__28249__a = new Array(arguments.length -  3);
while (G__28249__i < G__28249__a.length) {G__28249__a[G__28249__i] = arguments[G__28249__i + 3]; ++G__28249__i;}
  G__27369 = new cljs.core.IndexedSeq(G__28249__a,0,null);
} 
return sci$impl$fns$arity_3__delegate.call(this,G__27366,G__27367,G__27368,G__27369);};
sci$impl$fns$arity_3.cljs$lang$maxFixedArity = 3;
sci$impl$fns$arity_3.cljs$lang$applyTo = (function (arglist__28250){
var G__27366 = cljs.core.first(arglist__28250);
arglist__28250 = cljs.core.next(arglist__28250);
var G__27367 = cljs.core.first(arglist__28250);
arglist__28250 = cljs.core.next(arglist__28250);
var G__27368 = cljs.core.first(arglist__28250);
var G__27369 = cljs.core.rest(arglist__28250);
return sci$impl$fns$arity_3__delegate(G__27366,G__27367,G__27368,G__27369);
});
sci$impl$fns$arity_3.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_3__delegate;
return sci$impl$fns$arity_3;
})()
;

break;
case (4):
return (function() { 
var sci$impl$fns$arity_4__delegate = function (G__27390,G__27391,G__27392,G__27393,G__27394){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27390);

(invoc_array[(1)] = G__27391);

(invoc_array[(2)] = G__27392);

(invoc_array[(3)] = G__27393);

(invoc_array[vararg_idx] = G__27394);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_4 = function (G__27390,G__27391,G__27392,G__27393,var_args){
var G__27394 = null;
if (arguments.length > 4) {
var G__28252__i = 0, G__28252__a = new Array(arguments.length -  4);
while (G__28252__i < G__28252__a.length) {G__28252__a[G__28252__i] = arguments[G__28252__i + 4]; ++G__28252__i;}
  G__27394 = new cljs.core.IndexedSeq(G__28252__a,0,null);
} 
return sci$impl$fns$arity_4__delegate.call(this,G__27390,G__27391,G__27392,G__27393,G__27394);};
sci$impl$fns$arity_4.cljs$lang$maxFixedArity = 4;
sci$impl$fns$arity_4.cljs$lang$applyTo = (function (arglist__28253){
var G__27390 = cljs.core.first(arglist__28253);
arglist__28253 = cljs.core.next(arglist__28253);
var G__27391 = cljs.core.first(arglist__28253);
arglist__28253 = cljs.core.next(arglist__28253);
var G__27392 = cljs.core.first(arglist__28253);
arglist__28253 = cljs.core.next(arglist__28253);
var G__27393 = cljs.core.first(arglist__28253);
var G__27394 = cljs.core.rest(arglist__28253);
return sci$impl$fns$arity_4__delegate(G__27390,G__27391,G__27392,G__27393,G__27394);
});
sci$impl$fns$arity_4.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_4__delegate;
return sci$impl$fns$arity_4;
})()
;

break;
case (5):
return (function() { 
var sci$impl$fns$arity_5__delegate = function (G__27402,G__27403,G__27404,G__27405,G__27406,G__27407){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27402);

(invoc_array[(1)] = G__27403);

(invoc_array[(2)] = G__27404);

(invoc_array[(3)] = G__27405);

(invoc_array[(4)] = G__27406);

(invoc_array[vararg_idx] = G__27407);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_5 = function (G__27402,G__27403,G__27404,G__27405,G__27406,var_args){
var G__27407 = null;
if (arguments.length > 5) {
var G__28259__i = 0, G__28259__a = new Array(arguments.length -  5);
while (G__28259__i < G__28259__a.length) {G__28259__a[G__28259__i] = arguments[G__28259__i + 5]; ++G__28259__i;}
  G__27407 = new cljs.core.IndexedSeq(G__28259__a,0,null);
} 
return sci$impl$fns$arity_5__delegate.call(this,G__27402,G__27403,G__27404,G__27405,G__27406,G__27407);};
sci$impl$fns$arity_5.cljs$lang$maxFixedArity = 5;
sci$impl$fns$arity_5.cljs$lang$applyTo = (function (arglist__28260){
var G__27402 = cljs.core.first(arglist__28260);
arglist__28260 = cljs.core.next(arglist__28260);
var G__27403 = cljs.core.first(arglist__28260);
arglist__28260 = cljs.core.next(arglist__28260);
var G__27404 = cljs.core.first(arglist__28260);
arglist__28260 = cljs.core.next(arglist__28260);
var G__27405 = cljs.core.first(arglist__28260);
arglist__28260 = cljs.core.next(arglist__28260);
var G__27406 = cljs.core.first(arglist__28260);
var G__27407 = cljs.core.rest(arglist__28260);
return sci$impl$fns$arity_5__delegate(G__27402,G__27403,G__27404,G__27405,G__27406,G__27407);
});
sci$impl$fns$arity_5.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_5__delegate;
return sci$impl$fns$arity_5;
})()
;

break;
case (6):
return (function() { 
var sci$impl$fns$arity_6__delegate = function (G__27439,G__27440,G__27441,G__27442,G__27443,G__27444,G__27445){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27439);

(invoc_array[(1)] = G__27440);

(invoc_array[(2)] = G__27441);

(invoc_array[(3)] = G__27442);

(invoc_array[(4)] = G__27443);

(invoc_array[(5)] = G__27444);

(invoc_array[vararg_idx] = G__27445);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_6 = function (G__27439,G__27440,G__27441,G__27442,G__27443,G__27444,var_args){
var G__27445 = null;
if (arguments.length > 6) {
var G__28261__i = 0, G__28261__a = new Array(arguments.length -  6);
while (G__28261__i < G__28261__a.length) {G__28261__a[G__28261__i] = arguments[G__28261__i + 6]; ++G__28261__i;}
  G__27445 = new cljs.core.IndexedSeq(G__28261__a,0,null);
} 
return sci$impl$fns$arity_6__delegate.call(this,G__27439,G__27440,G__27441,G__27442,G__27443,G__27444,G__27445);};
sci$impl$fns$arity_6.cljs$lang$maxFixedArity = 6;
sci$impl$fns$arity_6.cljs$lang$applyTo = (function (arglist__28262){
var G__27439 = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var G__27440 = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var G__27441 = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var G__27442 = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var G__27443 = cljs.core.first(arglist__28262);
arglist__28262 = cljs.core.next(arglist__28262);
var G__27444 = cljs.core.first(arglist__28262);
var G__27445 = cljs.core.rest(arglist__28262);
return sci$impl$fns$arity_6__delegate(G__27439,G__27440,G__27441,G__27442,G__27443,G__27444,G__27445);
});
sci$impl$fns$arity_6.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_6__delegate;
return sci$impl$fns$arity_6;
})()
;

break;
case (7):
return (function() { 
var sci$impl$fns$arity_7__delegate = function (G__27495,G__27496,G__27497,G__27498,G__27499,G__27500,G__27501,G__27502){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27495);

(invoc_array[(1)] = G__27496);

(invoc_array[(2)] = G__27497);

(invoc_array[(3)] = G__27498);

(invoc_array[(4)] = G__27499);

(invoc_array[(5)] = G__27500);

(invoc_array[(6)] = G__27501);

(invoc_array[vararg_idx] = G__27502);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_7 = function (G__27495,G__27496,G__27497,G__27498,G__27499,G__27500,G__27501,var_args){
var G__27502 = null;
if (arguments.length > 7) {
var G__28272__i = 0, G__28272__a = new Array(arguments.length -  7);
while (G__28272__i < G__28272__a.length) {G__28272__a[G__28272__i] = arguments[G__28272__i + 7]; ++G__28272__i;}
  G__27502 = new cljs.core.IndexedSeq(G__28272__a,0,null);
} 
return sci$impl$fns$arity_7__delegate.call(this,G__27495,G__27496,G__27497,G__27498,G__27499,G__27500,G__27501,G__27502);};
sci$impl$fns$arity_7.cljs$lang$maxFixedArity = 7;
sci$impl$fns$arity_7.cljs$lang$applyTo = (function (arglist__28273){
var G__27495 = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var G__27496 = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var G__27497 = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var G__27498 = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var G__27499 = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var G__27500 = cljs.core.first(arglist__28273);
arglist__28273 = cljs.core.next(arglist__28273);
var G__27501 = cljs.core.first(arglist__28273);
var G__27502 = cljs.core.rest(arglist__28273);
return sci$impl$fns$arity_7__delegate(G__27495,G__27496,G__27497,G__27498,G__27499,G__27500,G__27501,G__27502);
});
sci$impl$fns$arity_7.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_7__delegate;
return sci$impl$fns$arity_7;
})()
;

break;
case (8):
return (function() { 
var sci$impl$fns$arity_8__delegate = function (G__27505,G__27506,G__27507,G__27508,G__27509,G__27510,G__27511,G__27512,G__27513){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27505);

(invoc_array[(1)] = G__27506);

(invoc_array[(2)] = G__27507);

(invoc_array[(3)] = G__27508);

(invoc_array[(4)] = G__27509);

(invoc_array[(5)] = G__27510);

(invoc_array[(6)] = G__27511);

(invoc_array[(7)] = G__27512);

(invoc_array[vararg_idx] = G__27513);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_8 = function (G__27505,G__27506,G__27507,G__27508,G__27509,G__27510,G__27511,G__27512,var_args){
var G__27513 = null;
if (arguments.length > 8) {
var G__28277__i = 0, G__28277__a = new Array(arguments.length -  8);
while (G__28277__i < G__28277__a.length) {G__28277__a[G__28277__i] = arguments[G__28277__i + 8]; ++G__28277__i;}
  G__27513 = new cljs.core.IndexedSeq(G__28277__a,0,null);
} 
return sci$impl$fns$arity_8__delegate.call(this,G__27505,G__27506,G__27507,G__27508,G__27509,G__27510,G__27511,G__27512,G__27513);};
sci$impl$fns$arity_8.cljs$lang$maxFixedArity = 8;
sci$impl$fns$arity_8.cljs$lang$applyTo = (function (arglist__28278){
var G__27505 = cljs.core.first(arglist__28278);
arglist__28278 = cljs.core.next(arglist__28278);
var G__27506 = cljs.core.first(arglist__28278);
arglist__28278 = cljs.core.next(arglist__28278);
var G__27507 = cljs.core.first(arglist__28278);
arglist__28278 = cljs.core.next(arglist__28278);
var G__27508 = cljs.core.first(arglist__28278);
arglist__28278 = cljs.core.next(arglist__28278);
var G__27509 = cljs.core.first(arglist__28278);
arglist__28278 = cljs.core.next(arglist__28278);
var G__27510 = cljs.core.first(arglist__28278);
arglist__28278 = cljs.core.next(arglist__28278);
var G__27511 = cljs.core.first(arglist__28278);
arglist__28278 = cljs.core.next(arglist__28278);
var G__27512 = cljs.core.first(arglist__28278);
var G__27513 = cljs.core.rest(arglist__28278);
return sci$impl$fns$arity_8__delegate(G__27505,G__27506,G__27507,G__27508,G__27509,G__27510,G__27511,G__27512,G__27513);
});
sci$impl$fns$arity_8.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_8__delegate;
return sci$impl$fns$arity_8;
})()
;

break;
case (9):
return (function() { 
var sci$impl$fns$arity_9__delegate = function (G__27519,G__27520,G__27521,G__27522,G__27523,G__27524,G__27525,G__27526,G__27527,G__27528){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27519);

(invoc_array[(1)] = G__27520);

(invoc_array[(2)] = G__27521);

(invoc_array[(3)] = G__27522);

(invoc_array[(4)] = G__27523);

(invoc_array[(5)] = G__27524);

(invoc_array[(6)] = G__27525);

(invoc_array[(7)] = G__27526);

(invoc_array[(8)] = G__27527);

(invoc_array[vararg_idx] = G__27528);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_9 = function (G__27519,G__27520,G__27521,G__27522,G__27523,G__27524,G__27525,G__27526,G__27527,var_args){
var G__27528 = null;
if (arguments.length > 9) {
var G__28283__i = 0, G__28283__a = new Array(arguments.length -  9);
while (G__28283__i < G__28283__a.length) {G__28283__a[G__28283__i] = arguments[G__28283__i + 9]; ++G__28283__i;}
  G__27528 = new cljs.core.IndexedSeq(G__28283__a,0,null);
} 
return sci$impl$fns$arity_9__delegate.call(this,G__27519,G__27520,G__27521,G__27522,G__27523,G__27524,G__27525,G__27526,G__27527,G__27528);};
sci$impl$fns$arity_9.cljs$lang$maxFixedArity = 9;
sci$impl$fns$arity_9.cljs$lang$applyTo = (function (arglist__28284){
var G__27519 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27520 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27521 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27522 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27523 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27524 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27525 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27526 = cljs.core.first(arglist__28284);
arglist__28284 = cljs.core.next(arglist__28284);
var G__27527 = cljs.core.first(arglist__28284);
var G__27528 = cljs.core.rest(arglist__28284);
return sci$impl$fns$arity_9__delegate(G__27519,G__27520,G__27521,G__27522,G__27523,G__27524,G__27525,G__27526,G__27527,G__27528);
});
sci$impl$fns$arity_9.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_9__delegate;
return sci$impl$fns$arity_9;
})()
;

break;
case (10):
return (function() { 
var sci$impl$fns$arity_10__delegate = function (G__27539,G__27540,G__27541,G__27542,G__27543,G__27544,G__27545,G__27546,G__27547,G__27548,G__27549){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27539);

(invoc_array[(1)] = G__27540);

(invoc_array[(2)] = G__27541);

(invoc_array[(3)] = G__27542);

(invoc_array[(4)] = G__27543);

(invoc_array[(5)] = G__27544);

(invoc_array[(6)] = G__27545);

(invoc_array[(7)] = G__27546);

(invoc_array[(8)] = G__27547);

(invoc_array[(9)] = G__27548);

(invoc_array[vararg_idx] = G__27549);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_10 = function (G__27539,G__27540,G__27541,G__27542,G__27543,G__27544,G__27545,G__27546,G__27547,G__27548,var_args){
var G__27549 = null;
if (arguments.length > 10) {
var G__28288__i = 0, G__28288__a = new Array(arguments.length -  10);
while (G__28288__i < G__28288__a.length) {G__28288__a[G__28288__i] = arguments[G__28288__i + 10]; ++G__28288__i;}
  G__27549 = new cljs.core.IndexedSeq(G__28288__a,0,null);
} 
return sci$impl$fns$arity_10__delegate.call(this,G__27539,G__27540,G__27541,G__27542,G__27543,G__27544,G__27545,G__27546,G__27547,G__27548,G__27549);};
sci$impl$fns$arity_10.cljs$lang$maxFixedArity = 10;
sci$impl$fns$arity_10.cljs$lang$applyTo = (function (arglist__28289){
var G__27539 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27540 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27541 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27542 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27543 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27544 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27545 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27546 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27547 = cljs.core.first(arglist__28289);
arglist__28289 = cljs.core.next(arglist__28289);
var G__27548 = cljs.core.first(arglist__28289);
var G__27549 = cljs.core.rest(arglist__28289);
return sci$impl$fns$arity_10__delegate(G__27539,G__27540,G__27541,G__27542,G__27543,G__27544,G__27545,G__27546,G__27547,G__27548,G__27549);
});
sci$impl$fns$arity_10.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_10__delegate;
return sci$impl$fns$arity_10;
})()
;

break;
case (11):
return (function() { 
var sci$impl$fns$arity_11__delegate = function (G__27567,G__27568,G__27569,G__27570,G__27571,G__27572,G__27573,G__27574,G__27575,G__27576,G__27577,G__27578){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27567);

(invoc_array[(1)] = G__27568);

(invoc_array[(2)] = G__27569);

(invoc_array[(3)] = G__27570);

(invoc_array[(4)] = G__27571);

(invoc_array[(5)] = G__27572);

(invoc_array[(6)] = G__27573);

(invoc_array[(7)] = G__27574);

(invoc_array[(8)] = G__27575);

(invoc_array[(9)] = G__27576);

(invoc_array[(10)] = G__27577);

(invoc_array[vararg_idx] = G__27578);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_11 = function (G__27567,G__27568,G__27569,G__27570,G__27571,G__27572,G__27573,G__27574,G__27575,G__27576,G__27577,var_args){
var G__27578 = null;
if (arguments.length > 11) {
var G__28290__i = 0, G__28290__a = new Array(arguments.length -  11);
while (G__28290__i < G__28290__a.length) {G__28290__a[G__28290__i] = arguments[G__28290__i + 11]; ++G__28290__i;}
  G__27578 = new cljs.core.IndexedSeq(G__28290__a,0,null);
} 
return sci$impl$fns$arity_11__delegate.call(this,G__27567,G__27568,G__27569,G__27570,G__27571,G__27572,G__27573,G__27574,G__27575,G__27576,G__27577,G__27578);};
sci$impl$fns$arity_11.cljs$lang$maxFixedArity = 11;
sci$impl$fns$arity_11.cljs$lang$applyTo = (function (arglist__28291){
var G__27567 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27568 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27569 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27570 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27571 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27572 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27573 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27574 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27575 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27576 = cljs.core.first(arglist__28291);
arglist__28291 = cljs.core.next(arglist__28291);
var G__27577 = cljs.core.first(arglist__28291);
var G__27578 = cljs.core.rest(arglist__28291);
return sci$impl$fns$arity_11__delegate(G__27567,G__27568,G__27569,G__27570,G__27571,G__27572,G__27573,G__27574,G__27575,G__27576,G__27577,G__27578);
});
sci$impl$fns$arity_11.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_11__delegate;
return sci$impl$fns$arity_11;
})()
;

break;
case (12):
return (function() { 
var sci$impl$fns$arity_12__delegate = function (G__27588,G__27589,G__27590,G__27591,G__27592,G__27593,G__27594,G__27595,G__27596,G__27597,G__27598,G__27599,G__27600){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27588);

(invoc_array[(1)] = G__27589);

(invoc_array[(2)] = G__27590);

(invoc_array[(3)] = G__27591);

(invoc_array[(4)] = G__27592);

(invoc_array[(5)] = G__27593);

(invoc_array[(6)] = G__27594);

(invoc_array[(7)] = G__27595);

(invoc_array[(8)] = G__27596);

(invoc_array[(9)] = G__27597);

(invoc_array[(10)] = G__27598);

(invoc_array[(11)] = G__27599);

(invoc_array[vararg_idx] = G__27600);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_12 = function (G__27588,G__27589,G__27590,G__27591,G__27592,G__27593,G__27594,G__27595,G__27596,G__27597,G__27598,G__27599,var_args){
var G__27600 = null;
if (arguments.length > 12) {
var G__28427__i = 0, G__28427__a = new Array(arguments.length -  12);
while (G__28427__i < G__28427__a.length) {G__28427__a[G__28427__i] = arguments[G__28427__i + 12]; ++G__28427__i;}
  G__27600 = new cljs.core.IndexedSeq(G__28427__a,0,null);
} 
return sci$impl$fns$arity_12__delegate.call(this,G__27588,G__27589,G__27590,G__27591,G__27592,G__27593,G__27594,G__27595,G__27596,G__27597,G__27598,G__27599,G__27600);};
sci$impl$fns$arity_12.cljs$lang$maxFixedArity = 12;
sci$impl$fns$arity_12.cljs$lang$applyTo = (function (arglist__28428){
var G__27588 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27589 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27590 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27591 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27592 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27593 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27594 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27595 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27596 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27597 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27598 = cljs.core.first(arglist__28428);
arglist__28428 = cljs.core.next(arglist__28428);
var G__27599 = cljs.core.first(arglist__28428);
var G__27600 = cljs.core.rest(arglist__28428);
return sci$impl$fns$arity_12__delegate(G__27588,G__27589,G__27590,G__27591,G__27592,G__27593,G__27594,G__27595,G__27596,G__27597,G__27598,G__27599,G__27600);
});
sci$impl$fns$arity_12.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_12__delegate;
return sci$impl$fns$arity_12;
})()
;

break;
case (13):
return (function() { 
var sci$impl$fns$arity_13__delegate = function (G__27605,G__27606,G__27607,G__27608,G__27609,G__27610,G__27611,G__27612,G__27613,G__27614,G__27615,G__27616,G__27617,G__27618){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27605);

(invoc_array[(1)] = G__27606);

(invoc_array[(2)] = G__27607);

(invoc_array[(3)] = G__27608);

(invoc_array[(4)] = G__27609);

(invoc_array[(5)] = G__27610);

(invoc_array[(6)] = G__27611);

(invoc_array[(7)] = G__27612);

(invoc_array[(8)] = G__27613);

(invoc_array[(9)] = G__27614);

(invoc_array[(10)] = G__27615);

(invoc_array[(11)] = G__27616);

(invoc_array[(12)] = G__27617);

(invoc_array[vararg_idx] = G__27618);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_13 = function (G__27605,G__27606,G__27607,G__27608,G__27609,G__27610,G__27611,G__27612,G__27613,G__27614,G__27615,G__27616,G__27617,var_args){
var G__27618 = null;
if (arguments.length > 13) {
var G__28434__i = 0, G__28434__a = new Array(arguments.length -  13);
while (G__28434__i < G__28434__a.length) {G__28434__a[G__28434__i] = arguments[G__28434__i + 13]; ++G__28434__i;}
  G__27618 = new cljs.core.IndexedSeq(G__28434__a,0,null);
} 
return sci$impl$fns$arity_13__delegate.call(this,G__27605,G__27606,G__27607,G__27608,G__27609,G__27610,G__27611,G__27612,G__27613,G__27614,G__27615,G__27616,G__27617,G__27618);};
sci$impl$fns$arity_13.cljs$lang$maxFixedArity = 13;
sci$impl$fns$arity_13.cljs$lang$applyTo = (function (arglist__28435){
var G__27605 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27606 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27607 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27608 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27609 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27610 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27611 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27612 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27613 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27614 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27615 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27616 = cljs.core.first(arglist__28435);
arglist__28435 = cljs.core.next(arglist__28435);
var G__27617 = cljs.core.first(arglist__28435);
var G__27618 = cljs.core.rest(arglist__28435);
return sci$impl$fns$arity_13__delegate(G__27605,G__27606,G__27607,G__27608,G__27609,G__27610,G__27611,G__27612,G__27613,G__27614,G__27615,G__27616,G__27617,G__27618);
});
sci$impl$fns$arity_13.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_13__delegate;
return sci$impl$fns$arity_13;
})()
;

break;
case (14):
return (function() { 
var sci$impl$fns$arity_14__delegate = function (G__27625,G__27626,G__27627,G__27628,G__27629,G__27630,G__27631,G__27632,G__27633,G__27634,G__27635,G__27636,G__27637,G__27638,G__27639){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27625);

(invoc_array[(1)] = G__27626);

(invoc_array[(2)] = G__27627);

(invoc_array[(3)] = G__27628);

(invoc_array[(4)] = G__27629);

(invoc_array[(5)] = G__27630);

(invoc_array[(6)] = G__27631);

(invoc_array[(7)] = G__27632);

(invoc_array[(8)] = G__27633);

(invoc_array[(9)] = G__27634);

(invoc_array[(10)] = G__27635);

(invoc_array[(11)] = G__27636);

(invoc_array[(12)] = G__27637);

(invoc_array[(13)] = G__27638);

(invoc_array[vararg_idx] = G__27639);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_14 = function (G__27625,G__27626,G__27627,G__27628,G__27629,G__27630,G__27631,G__27632,G__27633,G__27634,G__27635,G__27636,G__27637,G__27638,var_args){
var G__27639 = null;
if (arguments.length > 14) {
var G__28436__i = 0, G__28436__a = new Array(arguments.length -  14);
while (G__28436__i < G__28436__a.length) {G__28436__a[G__28436__i] = arguments[G__28436__i + 14]; ++G__28436__i;}
  G__27639 = new cljs.core.IndexedSeq(G__28436__a,0,null);
} 
return sci$impl$fns$arity_14__delegate.call(this,G__27625,G__27626,G__27627,G__27628,G__27629,G__27630,G__27631,G__27632,G__27633,G__27634,G__27635,G__27636,G__27637,G__27638,G__27639);};
sci$impl$fns$arity_14.cljs$lang$maxFixedArity = 14;
sci$impl$fns$arity_14.cljs$lang$applyTo = (function (arglist__28437){
var G__27625 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27626 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27627 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27628 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27629 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27630 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27631 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27632 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27633 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27634 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27635 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27636 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27637 = cljs.core.first(arglist__28437);
arglist__28437 = cljs.core.next(arglist__28437);
var G__27638 = cljs.core.first(arglist__28437);
var G__27639 = cljs.core.rest(arglist__28437);
return sci$impl$fns$arity_14__delegate(G__27625,G__27626,G__27627,G__27628,G__27629,G__27630,G__27631,G__27632,G__27633,G__27634,G__27635,G__27636,G__27637,G__27638,G__27639);
});
sci$impl$fns$arity_14.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_14__delegate;
return sci$impl$fns$arity_14;
})()
;

break;
case (15):
return (function() { 
var sci$impl$fns$arity_15__delegate = function (G__27642,G__27643,G__27644,G__27645,G__27646,G__27647,G__27648,G__27649,G__27650,G__27651,G__27652,G__27653,G__27654,G__27655,G__27656,G__27657){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27642);

(invoc_array[(1)] = G__27643);

(invoc_array[(2)] = G__27644);

(invoc_array[(3)] = G__27645);

(invoc_array[(4)] = G__27646);

(invoc_array[(5)] = G__27647);

(invoc_array[(6)] = G__27648);

(invoc_array[(7)] = G__27649);

(invoc_array[(8)] = G__27650);

(invoc_array[(9)] = G__27651);

(invoc_array[(10)] = G__27652);

(invoc_array[(11)] = G__27653);

(invoc_array[(12)] = G__27654);

(invoc_array[(13)] = G__27655);

(invoc_array[(14)] = G__27656);

(invoc_array[vararg_idx] = G__27657);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_15 = function (G__27642,G__27643,G__27644,G__27645,G__27646,G__27647,G__27648,G__27649,G__27650,G__27651,G__27652,G__27653,G__27654,G__27655,G__27656,var_args){
var G__27657 = null;
if (arguments.length > 15) {
var G__28450__i = 0, G__28450__a = new Array(arguments.length -  15);
while (G__28450__i < G__28450__a.length) {G__28450__a[G__28450__i] = arguments[G__28450__i + 15]; ++G__28450__i;}
  G__27657 = new cljs.core.IndexedSeq(G__28450__a,0,null);
} 
return sci$impl$fns$arity_15__delegate.call(this,G__27642,G__27643,G__27644,G__27645,G__27646,G__27647,G__27648,G__27649,G__27650,G__27651,G__27652,G__27653,G__27654,G__27655,G__27656,G__27657);};
sci$impl$fns$arity_15.cljs$lang$maxFixedArity = 15;
sci$impl$fns$arity_15.cljs$lang$applyTo = (function (arglist__28451){
var G__27642 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27643 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27644 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27645 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27646 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27647 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27648 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27649 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27650 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27651 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27652 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27653 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27654 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27655 = cljs.core.first(arglist__28451);
arglist__28451 = cljs.core.next(arglist__28451);
var G__27656 = cljs.core.first(arglist__28451);
var G__27657 = cljs.core.rest(arglist__28451);
return sci$impl$fns$arity_15__delegate(G__27642,G__27643,G__27644,G__27645,G__27646,G__27647,G__27648,G__27649,G__27650,G__27651,G__27652,G__27653,G__27654,G__27655,G__27656,G__27657);
});
sci$impl$fns$arity_15.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_15__delegate;
return sci$impl$fns$arity_15;
})()
;

break;
case (16):
return (function() { 
var sci$impl$fns$arity_16__delegate = function (G__27662,G__27663,G__27664,G__27665,G__27666,G__27667,G__27668,G__27669,G__27670,G__27671,G__27672,G__27673,G__27674,G__27675,G__27676,G__27677,G__27678){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27662);

(invoc_array[(1)] = G__27663);

(invoc_array[(2)] = G__27664);

(invoc_array[(3)] = G__27665);

(invoc_array[(4)] = G__27666);

(invoc_array[(5)] = G__27667);

(invoc_array[(6)] = G__27668);

(invoc_array[(7)] = G__27669);

(invoc_array[(8)] = G__27670);

(invoc_array[(9)] = G__27671);

(invoc_array[(10)] = G__27672);

(invoc_array[(11)] = G__27673);

(invoc_array[(12)] = G__27674);

(invoc_array[(13)] = G__27675);

(invoc_array[(14)] = G__27676);

(invoc_array[(15)] = G__27677);

(invoc_array[vararg_idx] = G__27678);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_16 = function (G__27662,G__27663,G__27664,G__27665,G__27666,G__27667,G__27668,G__27669,G__27670,G__27671,G__27672,G__27673,G__27674,G__27675,G__27676,G__27677,var_args){
var G__27678 = null;
if (arguments.length > 16) {
var G__28452__i = 0, G__28452__a = new Array(arguments.length -  16);
while (G__28452__i < G__28452__a.length) {G__28452__a[G__28452__i] = arguments[G__28452__i + 16]; ++G__28452__i;}
  G__27678 = new cljs.core.IndexedSeq(G__28452__a,0,null);
} 
return sci$impl$fns$arity_16__delegate.call(this,G__27662,G__27663,G__27664,G__27665,G__27666,G__27667,G__27668,G__27669,G__27670,G__27671,G__27672,G__27673,G__27674,G__27675,G__27676,G__27677,G__27678);};
sci$impl$fns$arity_16.cljs$lang$maxFixedArity = 16;
sci$impl$fns$arity_16.cljs$lang$applyTo = (function (arglist__28453){
var G__27662 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27663 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27664 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27665 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27666 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27667 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27668 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27669 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27670 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27671 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27672 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27673 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27674 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27675 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27676 = cljs.core.first(arglist__28453);
arglist__28453 = cljs.core.next(arglist__28453);
var G__27677 = cljs.core.first(arglist__28453);
var G__27678 = cljs.core.rest(arglist__28453);
return sci$impl$fns$arity_16__delegate(G__27662,G__27663,G__27664,G__27665,G__27666,G__27667,G__27668,G__27669,G__27670,G__27671,G__27672,G__27673,G__27674,G__27675,G__27676,G__27677,G__27678);
});
sci$impl$fns$arity_16.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_16__delegate;
return sci$impl$fns$arity_16;
})()
;

break;
case (17):
return (function() { 
var sci$impl$fns$arity_17__delegate = function (G__27688,G__27689,G__27690,G__27691,G__27692,G__27693,G__27694,G__27695,G__27696,G__27697,G__27698,G__27699,G__27700,G__27701,G__27702,G__27703,G__27704,G__27705){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27688);

(invoc_array[(1)] = G__27689);

(invoc_array[(2)] = G__27690);

(invoc_array[(3)] = G__27691);

(invoc_array[(4)] = G__27692);

(invoc_array[(5)] = G__27693);

(invoc_array[(6)] = G__27694);

(invoc_array[(7)] = G__27695);

(invoc_array[(8)] = G__27696);

(invoc_array[(9)] = G__27697);

(invoc_array[(10)] = G__27698);

(invoc_array[(11)] = G__27699);

(invoc_array[(12)] = G__27700);

(invoc_array[(13)] = G__27701);

(invoc_array[(14)] = G__27702);

(invoc_array[(15)] = G__27703);

(invoc_array[(16)] = G__27704);

(invoc_array[vararg_idx] = G__27705);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_17 = function (G__27688,G__27689,G__27690,G__27691,G__27692,G__27693,G__27694,G__27695,G__27696,G__27697,G__27698,G__27699,G__27700,G__27701,G__27702,G__27703,G__27704,var_args){
var G__27705 = null;
if (arguments.length > 17) {
var G__28461__i = 0, G__28461__a = new Array(arguments.length -  17);
while (G__28461__i < G__28461__a.length) {G__28461__a[G__28461__i] = arguments[G__28461__i + 17]; ++G__28461__i;}
  G__27705 = new cljs.core.IndexedSeq(G__28461__a,0,null);
} 
return sci$impl$fns$arity_17__delegate.call(this,G__27688,G__27689,G__27690,G__27691,G__27692,G__27693,G__27694,G__27695,G__27696,G__27697,G__27698,G__27699,G__27700,G__27701,G__27702,G__27703,G__27704,G__27705);};
sci$impl$fns$arity_17.cljs$lang$maxFixedArity = 17;
sci$impl$fns$arity_17.cljs$lang$applyTo = (function (arglist__28468){
var G__27688 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27689 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27690 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27691 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27692 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27693 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27694 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27695 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27696 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27697 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27698 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27699 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27700 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27701 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27702 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27703 = cljs.core.first(arglist__28468);
arglist__28468 = cljs.core.next(arglist__28468);
var G__27704 = cljs.core.first(arglist__28468);
var G__27705 = cljs.core.rest(arglist__28468);
return sci$impl$fns$arity_17__delegate(G__27688,G__27689,G__27690,G__27691,G__27692,G__27693,G__27694,G__27695,G__27696,G__27697,G__27698,G__27699,G__27700,G__27701,G__27702,G__27703,G__27704,G__27705);
});
sci$impl$fns$arity_17.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_17__delegate;
return sci$impl$fns$arity_17;
})()
;

break;
case (18):
return (function() { 
var sci$impl$fns$arity_18__delegate = function (G__27706,G__27707,G__27708,G__27709,G__27710,G__27711,G__27712,G__27713,G__27714,G__27715,G__27716,G__27717,G__27718,G__27719,G__27720,G__27721,G__27722,G__27723,G__27724){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27706);

(invoc_array[(1)] = G__27707);

(invoc_array[(2)] = G__27708);

(invoc_array[(3)] = G__27709);

(invoc_array[(4)] = G__27710);

(invoc_array[(5)] = G__27711);

(invoc_array[(6)] = G__27712);

(invoc_array[(7)] = G__27713);

(invoc_array[(8)] = G__27714);

(invoc_array[(9)] = G__27715);

(invoc_array[(10)] = G__27716);

(invoc_array[(11)] = G__27717);

(invoc_array[(12)] = G__27718);

(invoc_array[(13)] = G__27719);

(invoc_array[(14)] = G__27720);

(invoc_array[(15)] = G__27721);

(invoc_array[(16)] = G__27722);

(invoc_array[(17)] = G__27723);

(invoc_array[vararg_idx] = G__27724);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_18 = function (G__27706,G__27707,G__27708,G__27709,G__27710,G__27711,G__27712,G__27713,G__27714,G__27715,G__27716,G__27717,G__27718,G__27719,G__27720,G__27721,G__27722,G__27723,var_args){
var G__27724 = null;
if (arguments.length > 18) {
var G__28473__i = 0, G__28473__a = new Array(arguments.length -  18);
while (G__28473__i < G__28473__a.length) {G__28473__a[G__28473__i] = arguments[G__28473__i + 18]; ++G__28473__i;}
  G__27724 = new cljs.core.IndexedSeq(G__28473__a,0,null);
} 
return sci$impl$fns$arity_18__delegate.call(this,G__27706,G__27707,G__27708,G__27709,G__27710,G__27711,G__27712,G__27713,G__27714,G__27715,G__27716,G__27717,G__27718,G__27719,G__27720,G__27721,G__27722,G__27723,G__27724);};
sci$impl$fns$arity_18.cljs$lang$maxFixedArity = 18;
sci$impl$fns$arity_18.cljs$lang$applyTo = (function (arglist__28474){
var G__27706 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27707 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27708 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27709 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27710 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27711 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27712 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27713 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27714 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27715 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27716 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27717 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27718 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27719 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27720 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27721 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27722 = cljs.core.first(arglist__28474);
arglist__28474 = cljs.core.next(arglist__28474);
var G__27723 = cljs.core.first(arglist__28474);
var G__27724 = cljs.core.rest(arglist__28474);
return sci$impl$fns$arity_18__delegate(G__27706,G__27707,G__27708,G__27709,G__27710,G__27711,G__27712,G__27713,G__27714,G__27715,G__27716,G__27717,G__27718,G__27719,G__27720,G__27721,G__27722,G__27723,G__27724);
});
sci$impl$fns$arity_18.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_18__delegate;
return sci$impl$fns$arity_18;
})()
;

break;
case (19):
return (function() { 
var sci$impl$fns$arity_19__delegate = function (G__27731,G__27732,G__27733,G__27734,G__27735,G__27736,G__27737,G__27738,G__27739,G__27740,G__27741,G__27742,G__27743,G__27744,G__27745,G__27746,G__27747,G__27748,G__27749,G__27750){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27731);

(invoc_array[(1)] = G__27732);

(invoc_array[(2)] = G__27733);

(invoc_array[(3)] = G__27734);

(invoc_array[(4)] = G__27735);

(invoc_array[(5)] = G__27736);

(invoc_array[(6)] = G__27737);

(invoc_array[(7)] = G__27738);

(invoc_array[(8)] = G__27739);

(invoc_array[(9)] = G__27740);

(invoc_array[(10)] = G__27741);

(invoc_array[(11)] = G__27742);

(invoc_array[(12)] = G__27743);

(invoc_array[(13)] = G__27744);

(invoc_array[(14)] = G__27745);

(invoc_array[(15)] = G__27746);

(invoc_array[(16)] = G__27747);

(invoc_array[(17)] = G__27748);

(invoc_array[(18)] = G__27749);

(invoc_array[vararg_idx] = G__27750);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_19 = function (G__27731,G__27732,G__27733,G__27734,G__27735,G__27736,G__27737,G__27738,G__27739,G__27740,G__27741,G__27742,G__27743,G__27744,G__27745,G__27746,G__27747,G__27748,G__27749,var_args){
var G__27750 = null;
if (arguments.length > 19) {
var G__28480__i = 0, G__28480__a = new Array(arguments.length -  19);
while (G__28480__i < G__28480__a.length) {G__28480__a[G__28480__i] = arguments[G__28480__i + 19]; ++G__28480__i;}
  G__27750 = new cljs.core.IndexedSeq(G__28480__a,0,null);
} 
return sci$impl$fns$arity_19__delegate.call(this,G__27731,G__27732,G__27733,G__27734,G__27735,G__27736,G__27737,G__27738,G__27739,G__27740,G__27741,G__27742,G__27743,G__27744,G__27745,G__27746,G__27747,G__27748,G__27749,G__27750);};
sci$impl$fns$arity_19.cljs$lang$maxFixedArity = 19;
sci$impl$fns$arity_19.cljs$lang$applyTo = (function (arglist__28481){
var G__27731 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27732 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27733 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27734 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27735 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27736 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27737 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27738 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27739 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27740 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27741 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27742 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27743 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27744 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27745 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27746 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27747 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27748 = cljs.core.first(arglist__28481);
arglist__28481 = cljs.core.next(arglist__28481);
var G__27749 = cljs.core.first(arglist__28481);
var G__27750 = cljs.core.rest(arglist__28481);
return sci$impl$fns$arity_19__delegate(G__27731,G__27732,G__27733,G__27734,G__27735,G__27736,G__27737,G__27738,G__27739,G__27740,G__27741,G__27742,G__27743,G__27744,G__27745,G__27746,G__27747,G__27748,G__27749,G__27750);
});
sci$impl$fns$arity_19.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_19__delegate;
return sci$impl$fns$arity_19;
})()
;

break;
case (20):
return (function() { 
var sci$impl$fns$arity_20__delegate = function (G__27771,G__27772,G__27773,G__27774,G__27775,G__27776,G__27777,G__27778,G__27779,G__27780,G__27781,G__27782,G__27783,G__27784,G__27785,G__27786,G__27787,G__27788,G__27789,G__27790,G__27791){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27771);

(invoc_array[(1)] = G__27772);

(invoc_array[(2)] = G__27773);

(invoc_array[(3)] = G__27774);

(invoc_array[(4)] = G__27775);

(invoc_array[(5)] = G__27776);

(invoc_array[(6)] = G__27777);

(invoc_array[(7)] = G__27778);

(invoc_array[(8)] = G__27779);

(invoc_array[(9)] = G__27780);

(invoc_array[(10)] = G__27781);

(invoc_array[(11)] = G__27782);

(invoc_array[(12)] = G__27783);

(invoc_array[(13)] = G__27784);

(invoc_array[(14)] = G__27785);

(invoc_array[(15)] = G__27786);

(invoc_array[(16)] = G__27787);

(invoc_array[(17)] = G__27788);

(invoc_array[(18)] = G__27789);

(invoc_array[(19)] = G__27790);

(invoc_array[vararg_idx] = G__27791);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
};
var sci$impl$fns$arity_20 = function (G__27771,G__27772,G__27773,G__27774,G__27775,G__27776,G__27777,G__27778,G__27779,G__27780,G__27781,G__27782,G__27783,G__27784,G__27785,G__27786,G__27787,G__27788,G__27789,G__27790,var_args){
var G__27791 = null;
if (arguments.length > 20) {
var G__28490__i = 0, G__28490__a = new Array(arguments.length -  20);
while (G__28490__i < G__28490__a.length) {G__28490__a[G__28490__i] = arguments[G__28490__i + 20]; ++G__28490__i;}
  G__27791 = new cljs.core.IndexedSeq(G__28490__a,0,null);
} 
return sci$impl$fns$arity_20__delegate.call(this,G__27771,G__27772,G__27773,G__27774,G__27775,G__27776,G__27777,G__27778,G__27779,G__27780,G__27781,G__27782,G__27783,G__27784,G__27785,G__27786,G__27787,G__27788,G__27789,G__27790,G__27791);};
sci$impl$fns$arity_20.cljs$lang$maxFixedArity = 20;
sci$impl$fns$arity_20.cljs$lang$applyTo = (function (arglist__28498){
var G__27771 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27772 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27773 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27774 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27775 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27776 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27777 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27778 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27779 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27780 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27781 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27782 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27783 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27784 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27785 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27786 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27787 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27788 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27789 = cljs.core.first(arglist__28498);
arglist__28498 = cljs.core.next(arglist__28498);
var G__27790 = cljs.core.first(arglist__28498);
var G__27791 = cljs.core.rest(arglist__28498);
return sci$impl$fns$arity_20__delegate(G__27771,G__27772,G__27773,G__27774,G__27775,G__27776,G__27777,G__27778,G__27779,G__27780,G__27781,G__27782,G__27783,G__27784,G__27785,G__27786,G__27787,G__27788,G__27789,G__27790,G__27791);
});
sci$impl$fns$arity_20.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$arity_20__delegate;
return sci$impl$fns$arity_20;
})()
;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27307)].join('')));

}
})():(function (){var G__27792 = fixed_arity;
switch (G__27792) {
case (0):
return (function sci$impl$fns$arity_0(){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

while(true){
var ret__26202__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26202__auto__)){
continue;
} else {
return ret__26202__auto__;
}
break;
}
});

break;
case (1):
return (function sci$impl$fns$arity_1(G__27800){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27800);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (2):
return (function sci$impl$fns$arity_2(G__27801,G__27802){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27801);

(invoc_array[(1)] = G__27802);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (3):
return (function sci$impl$fns$arity_3(G__27806,G__27807,G__27808){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27806);

(invoc_array[(1)] = G__27807);

(invoc_array[(2)] = G__27808);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (4):
return (function sci$impl$fns$arity_4(G__27822,G__27823,G__27824,G__27825){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27822);

(invoc_array[(1)] = G__27823);

(invoc_array[(2)] = G__27824);

(invoc_array[(3)] = G__27825);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (5):
return (function sci$impl$fns$arity_5(G__27830,G__27831,G__27832,G__27833,G__27834){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27830);

(invoc_array[(1)] = G__27831);

(invoc_array[(2)] = G__27832);

(invoc_array[(3)] = G__27833);

(invoc_array[(4)] = G__27834);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (6):
return (function sci$impl$fns$arity_6(G__27841,G__27842,G__27843,G__27844,G__27845,G__27846){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27841);

(invoc_array[(1)] = G__27842);

(invoc_array[(2)] = G__27843);

(invoc_array[(3)] = G__27844);

(invoc_array[(4)] = G__27845);

(invoc_array[(5)] = G__27846);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (7):
return (function sci$impl$fns$arity_7(G__27855,G__27856,G__27857,G__27858,G__27859,G__27860,G__27861){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27855);

(invoc_array[(1)] = G__27856);

(invoc_array[(2)] = G__27857);

(invoc_array[(3)] = G__27858);

(invoc_array[(4)] = G__27859);

(invoc_array[(5)] = G__27860);

(invoc_array[(6)] = G__27861);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (8):
return (function sci$impl$fns$arity_8(G__27866,G__27867,G__27868,G__27869,G__27870,G__27871,G__27872,G__27873){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27866);

(invoc_array[(1)] = G__27867);

(invoc_array[(2)] = G__27868);

(invoc_array[(3)] = G__27869);

(invoc_array[(4)] = G__27870);

(invoc_array[(5)] = G__27871);

(invoc_array[(6)] = G__27872);

(invoc_array[(7)] = G__27873);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (9):
return (function sci$impl$fns$arity_9(G__27888,G__27889,G__27890,G__27891,G__27892,G__27893,G__27894,G__27895,G__27896){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27888);

(invoc_array[(1)] = G__27889);

(invoc_array[(2)] = G__27890);

(invoc_array[(3)] = G__27891);

(invoc_array[(4)] = G__27892);

(invoc_array[(5)] = G__27893);

(invoc_array[(6)] = G__27894);

(invoc_array[(7)] = G__27895);

(invoc_array[(8)] = G__27896);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (10):
return (function sci$impl$fns$arity_10(G__27905,G__27906,G__27907,G__27908,G__27909,G__27910,G__27911,G__27912,G__27913,G__27914){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27905);

(invoc_array[(1)] = G__27906);

(invoc_array[(2)] = G__27907);

(invoc_array[(3)] = G__27908);

(invoc_array[(4)] = G__27909);

(invoc_array[(5)] = G__27910);

(invoc_array[(6)] = G__27911);

(invoc_array[(7)] = G__27912);

(invoc_array[(8)] = G__27913);

(invoc_array[(9)] = G__27914);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (11):
return (function sci$impl$fns$arity_11(G__27917,G__27918,G__27919,G__27920,G__27921,G__27922,G__27923,G__27924,G__27925,G__27926,G__27927){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27917);

(invoc_array[(1)] = G__27918);

(invoc_array[(2)] = G__27919);

(invoc_array[(3)] = G__27920);

(invoc_array[(4)] = G__27921);

(invoc_array[(5)] = G__27922);

(invoc_array[(6)] = G__27923);

(invoc_array[(7)] = G__27924);

(invoc_array[(8)] = G__27925);

(invoc_array[(9)] = G__27926);

(invoc_array[(10)] = G__27927);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (12):
return (function sci$impl$fns$arity_12(G__27937,G__27938,G__27939,G__27940,G__27941,G__27942,G__27943,G__27944,G__27945,G__27946,G__27947,G__27948){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27937);

(invoc_array[(1)] = G__27938);

(invoc_array[(2)] = G__27939);

(invoc_array[(3)] = G__27940);

(invoc_array[(4)] = G__27941);

(invoc_array[(5)] = G__27942);

(invoc_array[(6)] = G__27943);

(invoc_array[(7)] = G__27944);

(invoc_array[(8)] = G__27945);

(invoc_array[(9)] = G__27946);

(invoc_array[(10)] = G__27947);

(invoc_array[(11)] = G__27948);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (13):
return (function sci$impl$fns$arity_13(G__27951,G__27952,G__27953,G__27954,G__27955,G__27956,G__27957,G__27958,G__27959,G__27960,G__27961,G__27962,G__27963){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27951);

(invoc_array[(1)] = G__27952);

(invoc_array[(2)] = G__27953);

(invoc_array[(3)] = G__27954);

(invoc_array[(4)] = G__27955);

(invoc_array[(5)] = G__27956);

(invoc_array[(6)] = G__27957);

(invoc_array[(7)] = G__27958);

(invoc_array[(8)] = G__27959);

(invoc_array[(9)] = G__27960);

(invoc_array[(10)] = G__27961);

(invoc_array[(11)] = G__27962);

(invoc_array[(12)] = G__27963);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (14):
return (function sci$impl$fns$arity_14(G__27973,G__27974,G__27975,G__27976,G__27977,G__27978,G__27979,G__27980,G__27981,G__27982,G__27983,G__27984,G__27985,G__27986){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27973);

(invoc_array[(1)] = G__27974);

(invoc_array[(2)] = G__27975);

(invoc_array[(3)] = G__27976);

(invoc_array[(4)] = G__27977);

(invoc_array[(5)] = G__27978);

(invoc_array[(6)] = G__27979);

(invoc_array[(7)] = G__27980);

(invoc_array[(8)] = G__27981);

(invoc_array[(9)] = G__27982);

(invoc_array[(10)] = G__27983);

(invoc_array[(11)] = G__27984);

(invoc_array[(12)] = G__27985);

(invoc_array[(13)] = G__27986);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (15):
return (function sci$impl$fns$arity_15(G__27994,G__27995,G__27996,G__27997,G__27998,G__27999,G__28000,G__28001,G__28002,G__28003,G__28004,G__28005,G__28006,G__28007,G__28008){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__27994);

(invoc_array[(1)] = G__27995);

(invoc_array[(2)] = G__27996);

(invoc_array[(3)] = G__27997);

(invoc_array[(4)] = G__27998);

(invoc_array[(5)] = G__27999);

(invoc_array[(6)] = G__28000);

(invoc_array[(7)] = G__28001);

(invoc_array[(8)] = G__28002);

(invoc_array[(9)] = G__28003);

(invoc_array[(10)] = G__28004);

(invoc_array[(11)] = G__28005);

(invoc_array[(12)] = G__28006);

(invoc_array[(13)] = G__28007);

(invoc_array[(14)] = G__28008);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (16):
return (function sci$impl$fns$arity_16(G__28012,G__28013,G__28014,G__28015,G__28016,G__28017,G__28018,G__28019,G__28020,G__28021,G__28022,G__28023,G__28024,G__28025,G__28026,G__28027){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__28012);

(invoc_array[(1)] = G__28013);

(invoc_array[(2)] = G__28014);

(invoc_array[(3)] = G__28015);

(invoc_array[(4)] = G__28016);

(invoc_array[(5)] = G__28017);

(invoc_array[(6)] = G__28018);

(invoc_array[(7)] = G__28019);

(invoc_array[(8)] = G__28020);

(invoc_array[(9)] = G__28021);

(invoc_array[(10)] = G__28022);

(invoc_array[(11)] = G__28023);

(invoc_array[(12)] = G__28024);

(invoc_array[(13)] = G__28025);

(invoc_array[(14)] = G__28026);

(invoc_array[(15)] = G__28027);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (17):
return (function sci$impl$fns$arity_17(G__28040,G__28041,G__28042,G__28043,G__28044,G__28045,G__28046,G__28047,G__28048,G__28049,G__28050,G__28051,G__28052,G__28053,G__28054,G__28055,G__28056){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__28040);

(invoc_array[(1)] = G__28041);

(invoc_array[(2)] = G__28042);

(invoc_array[(3)] = G__28043);

(invoc_array[(4)] = G__28044);

(invoc_array[(5)] = G__28045);

(invoc_array[(6)] = G__28046);

(invoc_array[(7)] = G__28047);

(invoc_array[(8)] = G__28048);

(invoc_array[(9)] = G__28049);

(invoc_array[(10)] = G__28050);

(invoc_array[(11)] = G__28051);

(invoc_array[(12)] = G__28052);

(invoc_array[(13)] = G__28053);

(invoc_array[(14)] = G__28054);

(invoc_array[(15)] = G__28055);

(invoc_array[(16)] = G__28056);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (18):
return (function sci$impl$fns$arity_18(G__28062,G__28063,G__28064,G__28065,G__28066,G__28067,G__28068,G__28069,G__28070,G__28071,G__28072,G__28073,G__28074,G__28075,G__28076,G__28077,G__28078,G__28079){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__28062);

(invoc_array[(1)] = G__28063);

(invoc_array[(2)] = G__28064);

(invoc_array[(3)] = G__28065);

(invoc_array[(4)] = G__28066);

(invoc_array[(5)] = G__28067);

(invoc_array[(6)] = G__28068);

(invoc_array[(7)] = G__28069);

(invoc_array[(8)] = G__28070);

(invoc_array[(9)] = G__28071);

(invoc_array[(10)] = G__28072);

(invoc_array[(11)] = G__28073);

(invoc_array[(12)] = G__28074);

(invoc_array[(13)] = G__28075);

(invoc_array[(14)] = G__28076);

(invoc_array[(15)] = G__28077);

(invoc_array[(16)] = G__28078);

(invoc_array[(17)] = G__28079);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (19):
return (function sci$impl$fns$arity_19(G__28085,G__28086,G__28087,G__28088,G__28089,G__28090,G__28091,G__28092,G__28093,G__28094,G__28095,G__28096,G__28097,G__28098,G__28099,G__28100,G__28101,G__28102,G__28103){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__28085);

(invoc_array[(1)] = G__28086);

(invoc_array[(2)] = G__28087);

(invoc_array[(3)] = G__28088);

(invoc_array[(4)] = G__28089);

(invoc_array[(5)] = G__28090);

(invoc_array[(6)] = G__28091);

(invoc_array[(7)] = G__28092);

(invoc_array[(8)] = G__28093);

(invoc_array[(9)] = G__28094);

(invoc_array[(10)] = G__28095);

(invoc_array[(11)] = G__28096);

(invoc_array[(12)] = G__28097);

(invoc_array[(13)] = G__28098);

(invoc_array[(14)] = G__28099);

(invoc_array[(15)] = G__28100);

(invoc_array[(16)] = G__28101);

(invoc_array[(17)] = G__28102);

(invoc_array[(18)] = G__28103);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
case (20):
return (function sci$impl$fns$arity_20(G__28108,G__28109,G__28110,G__28111,G__28112,G__28113,G__28114,G__28115,G__28116,G__28117,G__28118,G__28119,G__28120,G__28121,G__28122,G__28123,G__28124,G__28125,G__28126,G__28127){
var invoc_array = (((invoc_size === (0)))?null:cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(invoc_size));
if(cljs.core.truth_(enclosed__GT_invocation)){
(enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2 ? enclosed__GT_invocation.cljs$core$IFn$_invoke$arity$2(enclosed_array,invoc_array) : enclosed__GT_invocation.call(null,enclosed_array,invoc_array));
} else {
}

(invoc_array[(0)] = G__28108);

(invoc_array[(1)] = G__28109);

(invoc_array[(2)] = G__28110);

(invoc_array[(3)] = G__28111);

(invoc_array[(4)] = G__28112);

(invoc_array[(5)] = G__28113);

(invoc_array[(6)] = G__28114);

(invoc_array[(7)] = G__28115);

(invoc_array[(8)] = G__28116);

(invoc_array[(9)] = G__28117);

(invoc_array[(10)] = G__28118);

(invoc_array[(11)] = G__28119);

(invoc_array[(12)] = G__28120);

(invoc_array[(13)] = G__28121);

(invoc_array[(14)] = G__28122);

(invoc_array[(15)] = G__28123);

(invoc_array[(16)] = G__28124);

(invoc_array[(17)] = G__28125);

(invoc_array[(18)] = G__28126);

(invoc_array[(19)] = G__28127);

while(true){
var ret__26205__auto__ = sci.impl.types.eval(body,ctx,invoc_array);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("sci.impl.analyzer","recur","sci.impl.analyzer/recur",2033369355),ret__26205__auto__)){
continue;
} else {
return ret__26205__auto__;
}
break;
}
});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27792)].join('')));

}
})());
return f;
}));

(sci.impl.fns.fun.cljs$lang$maxFixedArity = 11);

sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,enclosed_array,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun.cljs$core$IFn$_invoke$arity$5(ctx,enclosed_array,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = new cljs.core.Keyword(null,"var-arg-name","var-arg-name",-1100024887).cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869).cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,new cljs.core.Keyword(null,"variadic","variadic",882626057),f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.maybe_destructured = (function sci$impl$fns$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__28589 = cljs.core.next(params__$1);
var G__28590 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__28591 = lets;
params__$1 = G__28589;
new_params = G__28590;
lets = G__28591;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__28592 = cljs.core.next(params__$1);
var G__28593 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__28594 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__28592;
new_params = G__28593;
lets = G__28594;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
sci.impl.fns.fn_STAR__STAR_ = (function sci$impl$fns$fn_STAR__STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28595 = arguments.length;
var i__5770__auto___28596 = (0);
while(true){
if((i__5770__auto___28596 < len__5769__auto___28595)){
args__5775__auto__.push((arguments[i__5770__auto___28596]));

var G__28597 = (i__5770__auto___28596 + (1));
i__5770__auto___28596 = G__28597;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.fns.fn_STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing"),form)));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''),form);
} else {
}

var vec__28165 = sig;
var seq__28166 = cljs.core.seq(vec__28165);
var first__28167 = cljs.core.first(seq__28166);
var seq__28166__$1 = cljs.core.next(seq__28166);
var params = first__28167;
var body = seq__28166__$1;
var ___$1 = (((!(cljs.core.vector_QMARK_(params))))?sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')),form):null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__5045__auto__ = conds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return sci.impl.fns.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
var expr = cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(form));
return expr;
}));

(sci.impl.fns.fn_STAR__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.fns.fn_STAR__STAR_.cljs$lang$applyTo = (function (seq28148){
var G__28149 = cljs.core.first(seq28148);
var seq28148__$1 = cljs.core.next(seq28148);
var G__28150 = cljs.core.first(seq28148__$1);
var seq28148__$2 = cljs.core.next(seq28148__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28149,G__28150,seq28148__$2);
}));

sci.impl.fns.sigs = (function sci$impl$fns$sigs(fdecl){
var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__28598 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.identity(asig(cljs.core.first(fdecls))));
var G__28599 = cljs.core.next(fdecls);
ret = G__28598;
fdecls = G__28599;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,cljs.core.identity(asig(fdecl)),null,(1),null));
}
});
sci.impl.fns.defn_STAR_ = (function sci$impl$fns$defn_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28600 = arguments.length;
var i__5770__auto___28601 = (0);
while(true){
if((i__5770__auto___28601 < len__5769__auto___28600)){
args__5775__auto__.push((arguments[i__5770__auto___28601]));

var G__28602 = (i__5770__auto___28601 + (1));
i__5770__auto___28601 = G__28602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (form,_,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("First argument to defn must be a symbol",form);
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,sci.impl.fns.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var name_m = cljs.core.meta(name);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(name_m)?name_m:cljs.core.PersistentArrayMap.EMPTY),m__$3);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(name_m);
var expr = cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4);
var expr__$1 = (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,(cljs.core.truth_((function (){var or__5045__auto__ = macro_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return name;
}
})())?cljs.core.with_meta(expr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","fn","sci.impl/fn",1695180073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"macro","macro",-867863404),macro_QMARK_,new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),name], null)], null)):expr),null,(1),null)),(2),null)),(3),null));
return expr__$1;
}));

(sci.impl.fns.defn_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defn_STAR_.cljs$lang$applyTo = (function (seq28196){
var G__28197 = cljs.core.first(seq28196);
var seq28196__$1 = cljs.core.next(seq28196);
var G__28198 = cljs.core.first(seq28196__$1);
var seq28196__$2 = cljs.core.next(seq28196__$1);
var G__28199 = cljs.core.first(seq28196__$2);
var seq28196__$3 = cljs.core.next(seq28196__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28197,G__28198,G__28199,seq28196__$3);
}));

sci.impl.fns.defmacro_STAR_ = (function sci$impl$fns$defmacro_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28603 = arguments.length;
var i__5770__auto___28604 = (0);
while(true){
if((i__5770__auto___28604 < len__5769__auto___28603)){
args__5775__auto__.push((arguments[i__5770__auto___28604]));

var G__28605 = (i__5770__auto___28604 + (1));
i__5770__auto___28604 = G__28605;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.impl.fns.defmacro_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (__AMPERSAND_form,__AMPERSAND_env,name,args){
var name__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
var prefix = (function (){var p = (new cljs.core.List(null,name__$1,null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__28606 = cljs.core.cons(f,p);
var G__28607 = cljs.core.next(args__$1);
p = G__28606;
args__$1 = G__28607;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__28608 = cljs.core.cons(f,p);
var G__28609 = cljs.core.next(args__$1);
p = G__28608;
args__$1 = G__28609;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__28610 = cljs.core.next(fd);
fd = G__28610;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__28611 = cljs.core.next(fd);
fd = G__28611;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__28612 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__28613 = cljs.core.next(ds);
acc = G__28612;
ds = G__28613;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__28614 = cljs.core.next(p);
var G__28615 = cljs.core.cons(cljs.core.first(p),d);
p = G__28614;
d = G__28615;
continue;
} else {
return d;
}
break;
}
})();
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,name__$1,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
}));

(sci.impl.fns.defmacro_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.fns.defmacro_STAR_.cljs$lang$applyTo = (function (seq28209){
var G__28210 = cljs.core.first(seq28209);
var seq28209__$1 = cljs.core.next(seq28209);
var G__28211 = cljs.core.first(seq28209__$1);
var seq28209__$2 = cljs.core.next(seq28209__$1);
var G__28212 = cljs.core.first(seq28209__$2);
var seq28209__$3 = cljs.core.next(seq28209__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28210,G__28211,G__28212,seq28209__$3);
}));


//# sourceMappingURL=sci.impl.fns.js.map
