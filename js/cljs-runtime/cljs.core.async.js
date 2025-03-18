goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14016 = (function (f,blockable,meta14017){
this.f = f;
this.blockable = blockable;
this.meta14017 = meta14017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14018,meta14017__$1){
var self__ = this;
var _14018__$1 = this;
return (new cljs.core.async.t_cljs$core$async14016(self__.f,self__.blockable,meta14017__$1));
}));

(cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14018){
var self__ = this;
var _14018__$1 = this;
return self__.meta14017;
}));

(cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14017","meta14017",606519678,null)], null);
}));

(cljs.core.async.t_cljs$core$async14016.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14016");

(cljs.core.async.t_cljs$core$async14016.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14016");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14016.
 */
cljs.core.async.__GT_t_cljs$core$async14016 = (function cljs$core$async$__GT_t_cljs$core$async14016(f,blockable,meta14017){
return (new cljs.core.async.t_cljs$core$async14016(f,blockable,meta14017));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14011 = arguments.length;
switch (G__14011) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14016(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14030 = arguments.length;
switch (G__14030) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14035 = arguments.length;
switch (G__14035) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14044 = arguments.length;
switch (G__14044) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17861 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17861) : fn1.call(null,val_17861));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17861) : fn1.call(null,val_17861));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14049 = arguments.length;
switch (G__14049) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17883 = n;
var x_17885 = (0);
while(true){
if((x_17885 < n__5636__auto___17883)){
(a[x_17885] = x_17885);

var G__17886 = (x_17885 + (1));
x_17885 = G__17886;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14063 = (function (flag,meta14064){
this.flag = flag;
this.meta14064 = meta14064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14065,meta14064__$1){
var self__ = this;
var _14065__$1 = this;
return (new cljs.core.async.t_cljs$core$async14063(self__.flag,meta14064__$1));
}));

(cljs.core.async.t_cljs$core$async14063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14065){
var self__ = this;
var _14065__$1 = this;
return self__.meta14064;
}));

(cljs.core.async.t_cljs$core$async14063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14064","meta14064",-1747069040,null)], null);
}));

(cljs.core.async.t_cljs$core$async14063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14063");

(cljs.core.async.t_cljs$core$async14063.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14063.
 */
cljs.core.async.__GT_t_cljs$core$async14063 = (function cljs$core$async$__GT_t_cljs$core$async14063(flag,meta14064){
return (new cljs.core.async.t_cljs$core$async14063(flag,meta14064));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14063(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14086 = (function (flag,cb,meta14087){
this.flag = flag;
this.cb = cb;
this.meta14087 = meta14087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14088,meta14087__$1){
var self__ = this;
var _14088__$1 = this;
return (new cljs.core.async.t_cljs$core$async14086(self__.flag,self__.cb,meta14087__$1));
}));

(cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14088){
var self__ = this;
var _14088__$1 = this;
return self__.meta14087;
}));

(cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14087","meta14087",35681712,null)], null);
}));

(cljs.core.async.t_cljs$core$async14086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14086");

(cljs.core.async.t_cljs$core$async14086.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14086.
 */
cljs.core.async.__GT_t_cljs$core$async14086 = (function cljs$core$async$__GT_t_cljs$core$async14086(flag,cb,meta14087){
return (new cljs.core.async.t_cljs$core$async14086(flag,cb,meta14087));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14086(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14103_SHARP_){
var G__14105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14103_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14105) : fret.call(null,G__14105));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14104_SHARP_){
var G__14107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14104_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14107) : fret.call(null,G__14107));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17911 = (i + (1));
i = G__17911;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17914 = arguments.length;
var i__5770__auto___17916 = (0);
while(true){
if((i__5770__auto___17916 < len__5769__auto___17914)){
args__5775__auto__.push((arguments[i__5770__auto___17916]));

var G__17917 = (i__5770__auto___17916 + (1));
i__5770__auto___17916 = G__17917;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14126){
var map__14127 = p__14126;
var map__14127__$1 = cljs.core.__destructure_map(map__14127);
var opts = map__14127__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14118){
var G__14120 = cljs.core.first(seq14118);
var seq14118__$1 = cljs.core.next(seq14118);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14120,seq14118__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14148 = arguments.length;
switch (G__14148) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13912__auto___17931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14180){
var state_val_14181 = (state_14180[(1)]);
if((state_val_14181 === (7))){
var inst_14176 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
var statearr_14184_17932 = state_14180__$1;
(statearr_14184_17932[(2)] = inst_14176);

(statearr_14184_17932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (1))){
var state_14180__$1 = state_14180;
var statearr_14185_17934 = state_14180__$1;
(statearr_14185_17934[(2)] = null);

(statearr_14185_17934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (4))){
var inst_14158 = (state_14180[(7)]);
var inst_14158__$1 = (state_14180[(2)]);
var inst_14160 = (inst_14158__$1 == null);
var state_14180__$1 = (function (){var statearr_14186 = state_14180;
(statearr_14186[(7)] = inst_14158__$1);

return statearr_14186;
})();
if(cljs.core.truth_(inst_14160)){
var statearr_14187_17937 = state_14180__$1;
(statearr_14187_17937[(1)] = (5));

} else {
var statearr_14188_17938 = state_14180__$1;
(statearr_14188_17938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (13))){
var state_14180__$1 = state_14180;
var statearr_14190_17943 = state_14180__$1;
(statearr_14190_17943[(2)] = null);

(statearr_14190_17943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (6))){
var inst_14158 = (state_14180[(7)]);
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14180__$1,(11),to,inst_14158);
} else {
if((state_val_14181 === (3))){
var inst_14178 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14180__$1,inst_14178);
} else {
if((state_val_14181 === (12))){
var state_14180__$1 = state_14180;
var statearr_14195_17951 = state_14180__$1;
(statearr_14195_17951[(2)] = null);

(statearr_14195_17951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (2))){
var state_14180__$1 = state_14180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14180__$1,(4),from);
} else {
if((state_val_14181 === (11))){
var inst_14169 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
if(cljs.core.truth_(inst_14169)){
var statearr_14196_17964 = state_14180__$1;
(statearr_14196_17964[(1)] = (12));

} else {
var statearr_14197_17965 = state_14180__$1;
(statearr_14197_17965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (9))){
var state_14180__$1 = state_14180;
var statearr_14198_17969 = state_14180__$1;
(statearr_14198_17969[(2)] = null);

(statearr_14198_17969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (5))){
var state_14180__$1 = state_14180;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14199_17971 = state_14180__$1;
(statearr_14199_17971[(1)] = (8));

} else {
var statearr_14200_17972 = state_14180__$1;
(statearr_14200_17972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (14))){
var inst_14174 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
var statearr_14201_17973 = state_14180__$1;
(statearr_14201_17973[(2)] = inst_14174);

(statearr_14201_17973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (10))){
var inst_14166 = (state_14180[(2)]);
var state_14180__$1 = state_14180;
var statearr_14203_17978 = state_14180__$1;
(statearr_14203_17978[(2)] = inst_14166);

(statearr_14203_17978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14181 === (8))){
var inst_14163 = cljs.core.async.close_BANG_(to);
var state_14180__$1 = state_14180;
var statearr_14204_17980 = state_14180__$1;
(statearr_14204_17980[(2)] = inst_14163);

(statearr_14204_17980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_14206 = [null,null,null,null,null,null,null,null];
(statearr_14206[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_14206[(1)] = (1));

return statearr_14206;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_14180){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14180);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14207){var ex__12980__auto__ = e14207;
var statearr_14208_17990 = state_14180;
(statearr_14208_17990[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14180[(4)]))){
var statearr_14209_17991 = state_14180;
(statearr_14209_17991[(1)] = cljs.core.first((state_14180[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17992 = state_14180;
state_14180 = G__17992;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_14180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_14180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14210 = f__13913__auto__();
(statearr_14210[(6)] = c__13912__auto___17931);

return statearr_14210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14221){
var vec__14222 = p__14221;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14222,(1),null);
var job = vec__14222;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13912__auto___18024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14233){
var state_val_14234 = (state_14233[(1)]);
if((state_val_14234 === (1))){
var state_14233__$1 = state_14233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14233__$1,(2),res,v);
} else {
if((state_val_14234 === (2))){
var inst_14229 = (state_14233[(2)]);
var inst_14230 = cljs.core.async.close_BANG_(res);
var state_14233__$1 = (function (){var statearr_14239 = state_14233;
(statearr_14239[(7)] = inst_14229);

return statearr_14239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14233__$1,inst_14230);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0 = (function (){
var statearr_14240 = [null,null,null,null,null,null,null,null];
(statearr_14240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__);

(statearr_14240[(1)] = (1));

return statearr_14240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1 = (function (state_14233){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14233);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14241){var ex__12980__auto__ = e14241;
var statearr_14242_18050 = state_14233;
(statearr_14242_18050[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14233[(4)]))){
var statearr_14243_18051 = state_14233;
(statearr_14243_18051[(1)] = cljs.core.first((state_14233[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18052 = state_14233;
state_14233 = G__18052;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = function(state_14233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1.call(this,state_14233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14244 = f__13913__auto__();
(statearr_14244[(6)] = c__13912__auto___18024);

return statearr_14244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14245){
var vec__14247 = p__14245;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(1),null);
var job = vec__14247;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___18067 = n;
var __18068 = (0);
while(true){
if((__18068 < n__5636__auto___18067)){
var G__14252_18069 = type;
var G__14252_18070__$1 = (((G__14252_18069 instanceof cljs.core.Keyword))?G__14252_18069.fqn:null);
switch (G__14252_18070__$1) {
case "compute":
var c__13912__auto___18075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18068,c__13912__auto___18075,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async){
return (function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = ((function (__18068,c__13912__auto___18075,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async){
return (function (state_14267){
var state_val_14268 = (state_14267[(1)]);
if((state_val_14268 === (1))){
var state_14267__$1 = state_14267;
var statearr_14269_18076 = state_14267__$1;
(statearr_14269_18076[(2)] = null);

(statearr_14269_18076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14268 === (2))){
var state_14267__$1 = state_14267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14267__$1,(4),jobs);
} else {
if((state_val_14268 === (3))){
var inst_14265 = (state_14267[(2)]);
var state_14267__$1 = state_14267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14267__$1,inst_14265);
} else {
if((state_val_14268 === (4))){
var inst_14257 = (state_14267[(2)]);
var inst_14258 = process__$1(inst_14257);
var state_14267__$1 = state_14267;
if(cljs.core.truth_(inst_14258)){
var statearr_14271_18081 = state_14267__$1;
(statearr_14271_18081[(1)] = (5));

} else {
var statearr_14273_18086 = state_14267__$1;
(statearr_14273_18086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14268 === (5))){
var state_14267__$1 = state_14267;
var statearr_14274_18089 = state_14267__$1;
(statearr_14274_18089[(2)] = null);

(statearr_14274_18089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14268 === (6))){
var state_14267__$1 = state_14267;
var statearr_14276_18093 = state_14267__$1;
(statearr_14276_18093[(2)] = null);

(statearr_14276_18093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14268 === (7))){
var inst_14263 = (state_14267[(2)]);
var state_14267__$1 = state_14267;
var statearr_14282_18095 = state_14267__$1;
(statearr_14282_18095[(2)] = inst_14263);

(statearr_14282_18095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18068,c__13912__auto___18075,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async))
;
return ((function (__18068,switch__12976__auto__,c__13912__auto___18075,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0 = (function (){
var statearr_14284 = [null,null,null,null,null,null,null];
(statearr_14284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__);

(statearr_14284[(1)] = (1));

return statearr_14284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1 = (function (state_14267){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14267);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14285){var ex__12980__auto__ = e14285;
var statearr_14286_18108 = state_14267;
(statearr_14286_18108[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14267[(4)]))){
var statearr_14287_18109 = state_14267;
(statearr_14287_18109[(1)] = cljs.core.first((state_14267[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18113 = state_14267;
state_14267 = G__18113;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = function(state_14267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1.call(this,state_14267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__;
})()
;})(__18068,switch__12976__auto__,c__13912__auto___18075,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async))
})();
var state__13914__auto__ = (function (){var statearr_14289 = f__13913__auto__();
(statearr_14289[(6)] = c__13912__auto___18075);

return statearr_14289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
});})(__18068,c__13912__auto___18075,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async))
);


break;
case "async":
var c__13912__auto___18114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18068,c__13912__auto___18114,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async){
return (function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = ((function (__18068,c__13912__auto___18114,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async){
return (function (state_14302){
var state_val_14303 = (state_14302[(1)]);
if((state_val_14303 === (1))){
var state_14302__$1 = state_14302;
var statearr_14304_18120 = state_14302__$1;
(statearr_14304_18120[(2)] = null);

(statearr_14304_18120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (2))){
var state_14302__$1 = state_14302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14302__$1,(4),jobs);
} else {
if((state_val_14303 === (3))){
var inst_14300 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14302__$1,inst_14300);
} else {
if((state_val_14303 === (4))){
var inst_14292 = (state_14302[(2)]);
var inst_14293 = async(inst_14292);
var state_14302__$1 = state_14302;
if(cljs.core.truth_(inst_14293)){
var statearr_14306_18127 = state_14302__$1;
(statearr_14306_18127[(1)] = (5));

} else {
var statearr_14307_18129 = state_14302__$1;
(statearr_14307_18129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (5))){
var state_14302__$1 = state_14302;
var statearr_14309_18130 = state_14302__$1;
(statearr_14309_18130[(2)] = null);

(statearr_14309_18130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (6))){
var state_14302__$1 = state_14302;
var statearr_14310_18131 = state_14302__$1;
(statearr_14310_18131[(2)] = null);

(statearr_14310_18131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14303 === (7))){
var inst_14298 = (state_14302[(2)]);
var state_14302__$1 = state_14302;
var statearr_14311_18137 = state_14302__$1;
(statearr_14311_18137[(2)] = inst_14298);

(statearr_14311_18137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18068,c__13912__auto___18114,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async))
;
return ((function (__18068,switch__12976__auto__,c__13912__auto___18114,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0 = (function (){
var statearr_14316 = [null,null,null,null,null,null,null];
(statearr_14316[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__);

(statearr_14316[(1)] = (1));

return statearr_14316;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1 = (function (state_14302){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14302);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14318){var ex__12980__auto__ = e14318;
var statearr_14319_18145 = state_14302;
(statearr_14319_18145[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14302[(4)]))){
var statearr_14320_18146 = state_14302;
(statearr_14320_18146[(1)] = cljs.core.first((state_14302[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18149 = state_14302;
state_14302 = G__18149;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = function(state_14302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1.call(this,state_14302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__;
})()
;})(__18068,switch__12976__auto__,c__13912__auto___18114,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async))
})();
var state__13914__auto__ = (function (){var statearr_14321 = f__13913__auto__();
(statearr_14321[(6)] = c__13912__auto___18114);

return statearr_14321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
});})(__18068,c__13912__auto___18114,G__14252_18069,G__14252_18070__$1,n__5636__auto___18067,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14252_18070__$1)].join('')));

}

var G__18155 = (__18068 + (1));
__18068 = G__18155;
continue;
} else {
}
break;
}

var c__13912__auto___18157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14349){
var state_val_14350 = (state_14349[(1)]);
if((state_val_14350 === (7))){
var inst_14345 = (state_14349[(2)]);
var state_14349__$1 = state_14349;
var statearr_14356_18158 = state_14349__$1;
(statearr_14356_18158[(2)] = inst_14345);

(statearr_14356_18158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (1))){
var state_14349__$1 = state_14349;
var statearr_14357_18159 = state_14349__$1;
(statearr_14357_18159[(2)] = null);

(statearr_14357_18159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (4))){
var inst_14326 = (state_14349[(7)]);
var inst_14326__$1 = (state_14349[(2)]);
var inst_14327 = (inst_14326__$1 == null);
var state_14349__$1 = (function (){var statearr_14359 = state_14349;
(statearr_14359[(7)] = inst_14326__$1);

return statearr_14359;
})();
if(cljs.core.truth_(inst_14327)){
var statearr_14360_18160 = state_14349__$1;
(statearr_14360_18160[(1)] = (5));

} else {
var statearr_14361_18161 = state_14349__$1;
(statearr_14361_18161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (6))){
var inst_14326 = (state_14349[(7)]);
var inst_14331 = (state_14349[(8)]);
var inst_14331__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14336 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14337 = [inst_14326,inst_14331__$1];
var inst_14338 = (new cljs.core.PersistentVector(null,2,(5),inst_14336,inst_14337,null));
var state_14349__$1 = (function (){var statearr_14362 = state_14349;
(statearr_14362[(8)] = inst_14331__$1);

return statearr_14362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14349__$1,(8),jobs,inst_14338);
} else {
if((state_val_14350 === (3))){
var inst_14347 = (state_14349[(2)]);
var state_14349__$1 = state_14349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14349__$1,inst_14347);
} else {
if((state_val_14350 === (2))){
var state_14349__$1 = state_14349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14349__$1,(4),from);
} else {
if((state_val_14350 === (9))){
var inst_14342 = (state_14349[(2)]);
var state_14349__$1 = (function (){var statearr_14363 = state_14349;
(statearr_14363[(9)] = inst_14342);

return statearr_14363;
})();
var statearr_14364_18163 = state_14349__$1;
(statearr_14364_18163[(2)] = null);

(statearr_14364_18163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (5))){
var inst_14329 = cljs.core.async.close_BANG_(jobs);
var state_14349__$1 = state_14349;
var statearr_14366_18164 = state_14349__$1;
(statearr_14366_18164[(2)] = inst_14329);

(statearr_14366_18164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14350 === (8))){
var inst_14331 = (state_14349[(8)]);
var inst_14340 = (state_14349[(2)]);
var state_14349__$1 = (function (){var statearr_14367 = state_14349;
(statearr_14367[(10)] = inst_14340);

return statearr_14367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14349__$1,(9),results,inst_14331);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0 = (function (){
var statearr_14369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__);

(statearr_14369[(1)] = (1));

return statearr_14369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1 = (function (state_14349){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14349);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14370){var ex__12980__auto__ = e14370;
var statearr_14371_18176 = state_14349;
(statearr_14371_18176[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14349[(4)]))){
var statearr_14373_18177 = state_14349;
(statearr_14373_18177[(1)] = cljs.core.first((state_14349[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18180 = state_14349;
state_14349 = G__18180;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = function(state_14349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1.call(this,state_14349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14380 = f__13913__auto__();
(statearr_14380[(6)] = c__13912__auto___18157);

return statearr_14380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


var c__13912__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14422){
var state_val_14423 = (state_14422[(1)]);
if((state_val_14423 === (7))){
var inst_14416 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
var statearr_14426_18186 = state_14422__$1;
(statearr_14426_18186[(2)] = inst_14416);

(statearr_14426_18186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (20))){
var state_14422__$1 = state_14422;
var statearr_14428_18191 = state_14422__$1;
(statearr_14428_18191[(2)] = null);

(statearr_14428_18191[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (1))){
var state_14422__$1 = state_14422;
var statearr_14431_18192 = state_14422__$1;
(statearr_14431_18192[(2)] = null);

(statearr_14431_18192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (4))){
var inst_14384 = (state_14422[(7)]);
var inst_14384__$1 = (state_14422[(2)]);
var inst_14385 = (inst_14384__$1 == null);
var state_14422__$1 = (function (){var statearr_14435 = state_14422;
(statearr_14435[(7)] = inst_14384__$1);

return statearr_14435;
})();
if(cljs.core.truth_(inst_14385)){
var statearr_14438_18197 = state_14422__$1;
(statearr_14438_18197[(1)] = (5));

} else {
var statearr_14439_18199 = state_14422__$1;
(statearr_14439_18199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (15))){
var inst_14398 = (state_14422[(8)]);
var state_14422__$1 = state_14422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14422__$1,(18),to,inst_14398);
} else {
if((state_val_14423 === (21))){
var inst_14411 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
var statearr_14441_18200 = state_14422__$1;
(statearr_14441_18200[(2)] = inst_14411);

(statearr_14441_18200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (13))){
var inst_14413 = (state_14422[(2)]);
var state_14422__$1 = (function (){var statearr_14445 = state_14422;
(statearr_14445[(9)] = inst_14413);

return statearr_14445;
})();
var statearr_14450_18206 = state_14422__$1;
(statearr_14450_18206[(2)] = null);

(statearr_14450_18206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (6))){
var inst_14384 = (state_14422[(7)]);
var state_14422__$1 = state_14422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14422__$1,(11),inst_14384);
} else {
if((state_val_14423 === (17))){
var inst_14406 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
if(cljs.core.truth_(inst_14406)){
var statearr_14455_18227 = state_14422__$1;
(statearr_14455_18227[(1)] = (19));

} else {
var statearr_14456_18233 = state_14422__$1;
(statearr_14456_18233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (3))){
var inst_14420 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14422__$1,inst_14420);
} else {
if((state_val_14423 === (12))){
var inst_14395 = (state_14422[(10)]);
var state_14422__$1 = state_14422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14422__$1,(14),inst_14395);
} else {
if((state_val_14423 === (2))){
var state_14422__$1 = state_14422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14422__$1,(4),results);
} else {
if((state_val_14423 === (19))){
var state_14422__$1 = state_14422;
var statearr_14460_18252 = state_14422__$1;
(statearr_14460_18252[(2)] = null);

(statearr_14460_18252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (11))){
var inst_14395 = (state_14422[(2)]);
var state_14422__$1 = (function (){var statearr_14463 = state_14422;
(statearr_14463[(10)] = inst_14395);

return statearr_14463;
})();
var statearr_14465_18261 = state_14422__$1;
(statearr_14465_18261[(2)] = null);

(statearr_14465_18261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (9))){
var state_14422__$1 = state_14422;
var statearr_14469_18265 = state_14422__$1;
(statearr_14469_18265[(2)] = null);

(statearr_14469_18265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (5))){
var state_14422__$1 = state_14422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14470_18272 = state_14422__$1;
(statearr_14470_18272[(1)] = (8));

} else {
var statearr_14472_18273 = state_14422__$1;
(statearr_14472_18273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (14))){
var inst_14398 = (state_14422[(8)]);
var inst_14400 = (state_14422[(11)]);
var inst_14398__$1 = (state_14422[(2)]);
var inst_14399 = (inst_14398__$1 == null);
var inst_14400__$1 = cljs.core.not(inst_14399);
var state_14422__$1 = (function (){var statearr_14476 = state_14422;
(statearr_14476[(8)] = inst_14398__$1);

(statearr_14476[(11)] = inst_14400__$1);

return statearr_14476;
})();
if(inst_14400__$1){
var statearr_14478_18281 = state_14422__$1;
(statearr_14478_18281[(1)] = (15));

} else {
var statearr_14479_18283 = state_14422__$1;
(statearr_14479_18283[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (16))){
var inst_14400 = (state_14422[(11)]);
var state_14422__$1 = state_14422;
var statearr_14482_18285 = state_14422__$1;
(statearr_14482_18285[(2)] = inst_14400);

(statearr_14482_18285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (10))){
var inst_14391 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
var statearr_14485_18291 = state_14422__$1;
(statearr_14485_18291[(2)] = inst_14391);

(statearr_14485_18291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (18))){
var inst_14403 = (state_14422[(2)]);
var state_14422__$1 = state_14422;
var statearr_14490_18305 = state_14422__$1;
(statearr_14490_18305[(2)] = inst_14403);

(statearr_14490_18305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14423 === (8))){
var inst_14388 = cljs.core.async.close_BANG_(to);
var state_14422__$1 = state_14422;
var statearr_14493_18312 = state_14422__$1;
(statearr_14493_18312[(2)] = inst_14388);

(statearr_14493_18312[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0 = (function (){
var statearr_14495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__);

(statearr_14495[(1)] = (1));

return statearr_14495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1 = (function (state_14422){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14422);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14496){var ex__12980__auto__ = e14496;
var statearr_14498_18318 = state_14422;
(statearr_14498_18318[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14422[(4)]))){
var statearr_14501_18319 = state_14422;
(statearr_14501_18319[(1)] = cljs.core.first((state_14422[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18320 = state_14422;
state_14422 = G__18320;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__ = function(state_14422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1.call(this,state_14422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12977__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14503 = f__13913__auto__();
(statearr_14503[(6)] = c__13912__auto__);

return statearr_14503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));

return c__13912__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14511 = arguments.length;
switch (G__14511) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14524 = arguments.length;
switch (G__14524) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14538 = arguments.length;
switch (G__14538) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13912__auto___18349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14574){
var state_val_14575 = (state_14574[(1)]);
if((state_val_14575 === (7))){
var inst_14570 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14581_18350 = state_14574__$1;
(statearr_14581_18350[(2)] = inst_14570);

(statearr_14581_18350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (1))){
var state_14574__$1 = state_14574;
var statearr_14587_18351 = state_14574__$1;
(statearr_14587_18351[(2)] = null);

(statearr_14587_18351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (4))){
var inst_14549 = (state_14574[(7)]);
var inst_14549__$1 = (state_14574[(2)]);
var inst_14550 = (inst_14549__$1 == null);
var state_14574__$1 = (function (){var statearr_14593 = state_14574;
(statearr_14593[(7)] = inst_14549__$1);

return statearr_14593;
})();
if(cljs.core.truth_(inst_14550)){
var statearr_14595_18353 = state_14574__$1;
(statearr_14595_18353[(1)] = (5));

} else {
var statearr_14596_18354 = state_14574__$1;
(statearr_14596_18354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (13))){
var state_14574__$1 = state_14574;
var statearr_14598_18361 = state_14574__$1;
(statearr_14598_18361[(2)] = null);

(statearr_14598_18361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (6))){
var inst_14549 = (state_14574[(7)]);
var inst_14556 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14549) : p.call(null,inst_14549));
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14556)){
var statearr_14599_18364 = state_14574__$1;
(statearr_14599_18364[(1)] = (9));

} else {
var statearr_14600_18365 = state_14574__$1;
(statearr_14600_18365[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (3))){
var inst_14572 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14574__$1,inst_14572);
} else {
if((state_val_14575 === (12))){
var state_14574__$1 = state_14574;
var statearr_14602_18366 = state_14574__$1;
(statearr_14602_18366[(2)] = null);

(statearr_14602_18366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (2))){
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14574__$1,(4),ch);
} else {
if((state_val_14575 === (11))){
var inst_14549 = (state_14574[(7)]);
var inst_14560 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14574__$1,(8),inst_14560,inst_14549);
} else {
if((state_val_14575 === (9))){
var state_14574__$1 = state_14574;
var statearr_14606_18368 = state_14574__$1;
(statearr_14606_18368[(2)] = tc);

(statearr_14606_18368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (5))){
var inst_14552 = cljs.core.async.close_BANG_(tc);
var inst_14553 = cljs.core.async.close_BANG_(fc);
var state_14574__$1 = (function (){var statearr_14611 = state_14574;
(statearr_14611[(8)] = inst_14552);

return statearr_14611;
})();
var statearr_14613_18369 = state_14574__$1;
(statearr_14613_18369[(2)] = inst_14553);

(statearr_14613_18369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (14))){
var inst_14568 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
var statearr_14614_18370 = state_14574__$1;
(statearr_14614_18370[(2)] = inst_14568);

(statearr_14614_18370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (10))){
var state_14574__$1 = state_14574;
var statearr_14617_18371 = state_14574__$1;
(statearr_14617_18371[(2)] = fc);

(statearr_14617_18371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14575 === (8))){
var inst_14562 = (state_14574[(2)]);
var state_14574__$1 = state_14574;
if(cljs.core.truth_(inst_14562)){
var statearr_14619_18372 = state_14574__$1;
(statearr_14619_18372[(1)] = (12));

} else {
var statearr_14620_18373 = state_14574__$1;
(statearr_14620_18373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_14625 = [null,null,null,null,null,null,null,null,null];
(statearr_14625[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_14625[(1)] = (1));

return statearr_14625;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_14574){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14574);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14626){var ex__12980__auto__ = e14626;
var statearr_14627_18374 = state_14574;
(statearr_14627_18374[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14574[(4)]))){
var statearr_14628_18375 = state_14574;
(statearr_14628_18375[(1)] = cljs.core.first((state_14574[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18376 = state_14574;
state_14574 = G__18376;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_14574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_14574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14629 = f__13913__auto__();
(statearr_14629[(6)] = c__13912__auto___18349);

return statearr_14629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13912__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14667){
var state_val_14668 = (state_14667[(1)]);
if((state_val_14668 === (7))){
var inst_14663 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
var statearr_14676_18377 = state_14667__$1;
(statearr_14676_18377[(2)] = inst_14663);

(statearr_14676_18377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (1))){
var inst_14642 = init;
var inst_14643 = inst_14642;
var state_14667__$1 = (function (){var statearr_14677 = state_14667;
(statearr_14677[(7)] = inst_14643);

return statearr_14677;
})();
var statearr_14679_18379 = state_14667__$1;
(statearr_14679_18379[(2)] = null);

(statearr_14679_18379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (4))){
var inst_14646 = (state_14667[(8)]);
var inst_14646__$1 = (state_14667[(2)]);
var inst_14647 = (inst_14646__$1 == null);
var state_14667__$1 = (function (){var statearr_14684 = state_14667;
(statearr_14684[(8)] = inst_14646__$1);

return statearr_14684;
})();
if(cljs.core.truth_(inst_14647)){
var statearr_14687_18380 = state_14667__$1;
(statearr_14687_18380[(1)] = (5));

} else {
var statearr_14688_18382 = state_14667__$1;
(statearr_14688_18382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (6))){
var inst_14643 = (state_14667[(7)]);
var inst_14646 = (state_14667[(8)]);
var inst_14651 = (state_14667[(9)]);
var inst_14651__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14643,inst_14646) : f.call(null,inst_14643,inst_14646));
var inst_14653 = cljs.core.reduced_QMARK_(inst_14651__$1);
var state_14667__$1 = (function (){var statearr_14692 = state_14667;
(statearr_14692[(9)] = inst_14651__$1);

return statearr_14692;
})();
if(inst_14653){
var statearr_14693_18383 = state_14667__$1;
(statearr_14693_18383[(1)] = (8));

} else {
var statearr_14694_18384 = state_14667__$1;
(statearr_14694_18384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (3))){
var inst_14665 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14667__$1,inst_14665);
} else {
if((state_val_14668 === (2))){
var state_14667__$1 = state_14667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14667__$1,(4),ch);
} else {
if((state_val_14668 === (9))){
var inst_14651 = (state_14667[(9)]);
var inst_14643 = inst_14651;
var state_14667__$1 = (function (){var statearr_14697 = state_14667;
(statearr_14697[(7)] = inst_14643);

return statearr_14697;
})();
var statearr_14701_18390 = state_14667__$1;
(statearr_14701_18390[(2)] = null);

(statearr_14701_18390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (5))){
var inst_14643 = (state_14667[(7)]);
var state_14667__$1 = state_14667;
var statearr_14702_18391 = state_14667__$1;
(statearr_14702_18391[(2)] = inst_14643);

(statearr_14702_18391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (10))){
var inst_14661 = (state_14667[(2)]);
var state_14667__$1 = state_14667;
var statearr_14704_18392 = state_14667__$1;
(statearr_14704_18392[(2)] = inst_14661);

(statearr_14704_18392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14668 === (8))){
var inst_14651 = (state_14667[(9)]);
var inst_14656 = cljs.core.deref(inst_14651);
var state_14667__$1 = state_14667;
var statearr_14707_18393 = state_14667__$1;
(statearr_14707_18393[(2)] = inst_14656);

(statearr_14707_18393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__12977__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12977__auto____0 = (function (){
var statearr_14711 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14711[(0)] = cljs$core$async$reduce_$_state_machine__12977__auto__);

(statearr_14711[(1)] = (1));

return statearr_14711;
});
var cljs$core$async$reduce_$_state_machine__12977__auto____1 = (function (state_14667){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14667);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14713){var ex__12980__auto__ = e14713;
var statearr_14714_18399 = state_14667;
(statearr_14714_18399[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14667[(4)]))){
var statearr_14718_18400 = state_14667;
(statearr_14718_18400[(1)] = cljs.core.first((state_14667[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18401 = state_14667;
state_14667 = G__18401;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12977__auto__ = function(state_14667){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12977__auto____1.call(this,state_14667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12977__auto____0;
cljs$core$async$reduce_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12977__auto____1;
return cljs$core$async$reduce_$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14722 = f__13913__auto__();
(statearr_14722[(6)] = c__13912__auto__);

return statearr_14722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));

return c__13912__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13912__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14737){
var state_val_14738 = (state_14737[(1)]);
if((state_val_14738 === (1))){
var inst_14731 = cljs.core.async.reduce(f__$1,init,ch);
var state_14737__$1 = state_14737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14737__$1,(2),inst_14731);
} else {
if((state_val_14738 === (2))){
var inst_14733 = (state_14737[(2)]);
var inst_14734 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14733) : f__$1.call(null,inst_14733));
var state_14737__$1 = state_14737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14737__$1,inst_14734);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__12977__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12977__auto____0 = (function (){
var statearr_14750 = [null,null,null,null,null,null,null];
(statearr_14750[(0)] = cljs$core$async$transduce_$_state_machine__12977__auto__);

(statearr_14750[(1)] = (1));

return statearr_14750;
});
var cljs$core$async$transduce_$_state_machine__12977__auto____1 = (function (state_14737){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14737);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14754){var ex__12980__auto__ = e14754;
var statearr_14755_18408 = state_14737;
(statearr_14755_18408[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14737[(4)]))){
var statearr_14757_18409 = state_14737;
(statearr_14757_18409[(1)] = cljs.core.first((state_14737[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18411 = state_14737;
state_14737 = G__18411;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12977__auto__ = function(state_14737){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12977__auto____1.call(this,state_14737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12977__auto____0;
cljs$core$async$transduce_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12977__auto____1;
return cljs$core$async$transduce_$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14766 = f__13913__auto__();
(statearr_14766[(6)] = c__13912__auto__);

return statearr_14766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));

return c__13912__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14777 = arguments.length;
switch (G__14777) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13912__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_14818){
var state_val_14819 = (state_14818[(1)]);
if((state_val_14819 === (7))){
var inst_14797 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
var statearr_14826_18415 = state_14818__$1;
(statearr_14826_18415[(2)] = inst_14797);

(statearr_14826_18415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (1))){
var inst_14790 = cljs.core.seq(coll);
var inst_14791 = inst_14790;
var state_14818__$1 = (function (){var statearr_14829 = state_14818;
(statearr_14829[(7)] = inst_14791);

return statearr_14829;
})();
var statearr_14833_18416 = state_14818__$1;
(statearr_14833_18416[(2)] = null);

(statearr_14833_18416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (4))){
var inst_14791 = (state_14818[(7)]);
var inst_14795 = cljs.core.first(inst_14791);
var state_14818__$1 = state_14818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14818__$1,(7),ch,inst_14795);
} else {
if((state_val_14819 === (13))){
var inst_14811 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
var statearr_14839_18417 = state_14818__$1;
(statearr_14839_18417[(2)] = inst_14811);

(statearr_14839_18417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (6))){
var inst_14800 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
if(cljs.core.truth_(inst_14800)){
var statearr_14844_18418 = state_14818__$1;
(statearr_14844_18418[(1)] = (8));

} else {
var statearr_14845_18419 = state_14818__$1;
(statearr_14845_18419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (3))){
var inst_14816 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14818__$1,inst_14816);
} else {
if((state_val_14819 === (12))){
var state_14818__$1 = state_14818;
var statearr_14854_18421 = state_14818__$1;
(statearr_14854_18421[(2)] = null);

(statearr_14854_18421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (2))){
var inst_14791 = (state_14818[(7)]);
var state_14818__$1 = state_14818;
if(cljs.core.truth_(inst_14791)){
var statearr_14858_18423 = state_14818__$1;
(statearr_14858_18423[(1)] = (4));

} else {
var statearr_14861_18424 = state_14818__$1;
(statearr_14861_18424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (11))){
var inst_14808 = cljs.core.async.close_BANG_(ch);
var state_14818__$1 = state_14818;
var statearr_14866_18426 = state_14818__$1;
(statearr_14866_18426[(2)] = inst_14808);

(statearr_14866_18426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (9))){
var state_14818__$1 = state_14818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14868_18427 = state_14818__$1;
(statearr_14868_18427[(1)] = (11));

} else {
var statearr_14869_18428 = state_14818__$1;
(statearr_14869_18428[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (5))){
var inst_14791 = (state_14818[(7)]);
var state_14818__$1 = state_14818;
var statearr_14876_18429 = state_14818__$1;
(statearr_14876_18429[(2)] = inst_14791);

(statearr_14876_18429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (10))){
var inst_14813 = (state_14818[(2)]);
var state_14818__$1 = state_14818;
var statearr_14879_18430 = state_14818__$1;
(statearr_14879_18430[(2)] = inst_14813);

(statearr_14879_18430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14819 === (8))){
var inst_14791 = (state_14818[(7)]);
var inst_14802 = cljs.core.next(inst_14791);
var inst_14791__$1 = inst_14802;
var state_14818__$1 = (function (){var statearr_14881 = state_14818;
(statearr_14881[(7)] = inst_14791__$1);

return statearr_14881;
})();
var statearr_14885_18431 = state_14818__$1;
(statearr_14885_18431[(2)] = null);

(statearr_14885_18431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_14888 = [null,null,null,null,null,null,null,null];
(statearr_14888[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_14888[(1)] = (1));

return statearr_14888;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_14818){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_14818);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e14894){var ex__12980__auto__ = e14894;
var statearr_14895_18432 = state_14818;
(statearr_14895_18432[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_14818[(4)]))){
var statearr_14898_18433 = state_14818;
(statearr_14898_18433[(1)] = cljs.core.first((state_14818[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18434 = state_14818;
state_14818 = G__18434;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_14818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_14818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_14904 = f__13913__auto__();
(statearr_14904[(6)] = c__13912__auto__);

return statearr_14904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));

return c__13912__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14920 = arguments.length;
switch (G__14920) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18441 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18441(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18442 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18442(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18453 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18453(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18454 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18454(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15007 = (function (ch,cs,meta15008){
this.ch = ch;
this.cs = cs;
this.meta15008 = meta15008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15010,meta15008__$1){
var self__ = this;
var _15010__$1 = this;
return (new cljs.core.async.t_cljs$core$async15007(self__.ch,self__.cs,meta15008__$1));
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15010){
var self__ = this;
var _15010__$1 = this;
return self__.meta15008;
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15008","meta15008",-1566981531,null)], null);
}));

(cljs.core.async.t_cljs$core$async15007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15007");

(cljs.core.async.t_cljs$core$async15007.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15007.
 */
cljs.core.async.__GT_t_cljs$core$async15007 = (function cljs$core$async$__GT_t_cljs$core$async15007(ch,cs,meta15008){
return (new cljs.core.async.t_cljs$core$async15007(ch,cs,meta15008));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15007(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13912__auto___18479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_15210){
var state_val_15211 = (state_15210[(1)]);
if((state_val_15211 === (7))){
var inst_15204 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15222_18489 = state_15210__$1;
(statearr_15222_18489[(2)] = inst_15204);

(statearr_15222_18489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (20))){
var inst_15096 = (state_15210[(7)]);
var inst_15117 = cljs.core.first(inst_15096);
var inst_15118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15117,(0),null);
var inst_15119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15117,(1),null);
var state_15210__$1 = (function (){var statearr_15224 = state_15210;
(statearr_15224[(8)] = inst_15118);

return statearr_15224;
})();
if(cljs.core.truth_(inst_15119)){
var statearr_15225_18507 = state_15210__$1;
(statearr_15225_18507[(1)] = (22));

} else {
var statearr_15230_18508 = state_15210__$1;
(statearr_15230_18508[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (27))){
var inst_15154 = (state_15210[(9)]);
var inst_15147 = (state_15210[(10)]);
var inst_15149 = (state_15210[(11)]);
var inst_15055 = (state_15210[(12)]);
var inst_15154__$1 = cljs.core._nth(inst_15147,inst_15149);
var inst_15155 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15154__$1,inst_15055,done);
var state_15210__$1 = (function (){var statearr_15234 = state_15210;
(statearr_15234[(9)] = inst_15154__$1);

return statearr_15234;
})();
if(cljs.core.truth_(inst_15155)){
var statearr_15235_18515 = state_15210__$1;
(statearr_15235_18515[(1)] = (30));

} else {
var statearr_15236_18516 = state_15210__$1;
(statearr_15236_18516[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (1))){
var state_15210__$1 = state_15210;
var statearr_15244_18517 = state_15210__$1;
(statearr_15244_18517[(2)] = null);

(statearr_15244_18517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (24))){
var inst_15096 = (state_15210[(7)]);
var inst_15124 = (state_15210[(2)]);
var inst_15125 = cljs.core.next(inst_15096);
var inst_15067 = inst_15125;
var inst_15068 = null;
var inst_15069 = (0);
var inst_15070 = (0);
var state_15210__$1 = (function (){var statearr_15251 = state_15210;
(statearr_15251[(13)] = inst_15068);

(statearr_15251[(14)] = inst_15069);

(statearr_15251[(15)] = inst_15067);

(statearr_15251[(16)] = inst_15124);

(statearr_15251[(17)] = inst_15070);

return statearr_15251;
})();
var statearr_15252_18523 = state_15210__$1;
(statearr_15252_18523[(2)] = null);

(statearr_15252_18523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (39))){
var state_15210__$1 = state_15210;
var statearr_15259_18524 = state_15210__$1;
(statearr_15259_18524[(2)] = null);

(statearr_15259_18524[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (4))){
var inst_15055 = (state_15210[(12)]);
var inst_15055__$1 = (state_15210[(2)]);
var inst_15057 = (inst_15055__$1 == null);
var state_15210__$1 = (function (){var statearr_15265 = state_15210;
(statearr_15265[(12)] = inst_15055__$1);

return statearr_15265;
})();
if(cljs.core.truth_(inst_15057)){
var statearr_15266_18525 = state_15210__$1;
(statearr_15266_18525[(1)] = (5));

} else {
var statearr_15267_18526 = state_15210__$1;
(statearr_15267_18526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (15))){
var inst_15068 = (state_15210[(13)]);
var inst_15069 = (state_15210[(14)]);
var inst_15067 = (state_15210[(15)]);
var inst_15070 = (state_15210[(17)]);
var inst_15088 = (state_15210[(2)]);
var inst_15092 = (inst_15070 + (1));
var tmp15253 = inst_15068;
var tmp15254 = inst_15069;
var tmp15255 = inst_15067;
var inst_15067__$1 = tmp15255;
var inst_15068__$1 = tmp15253;
var inst_15069__$1 = tmp15254;
var inst_15070__$1 = inst_15092;
var state_15210__$1 = (function (){var statearr_15274 = state_15210;
(statearr_15274[(13)] = inst_15068__$1);

(statearr_15274[(14)] = inst_15069__$1);

(statearr_15274[(15)] = inst_15067__$1);

(statearr_15274[(18)] = inst_15088);

(statearr_15274[(17)] = inst_15070__$1);

return statearr_15274;
})();
var statearr_15275_18536 = state_15210__$1;
(statearr_15275_18536[(2)] = null);

(statearr_15275_18536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (21))){
var inst_15128 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15285_18539 = state_15210__$1;
(statearr_15285_18539[(2)] = inst_15128);

(statearr_15285_18539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (31))){
var inst_15154 = (state_15210[(9)]);
var inst_15158 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15154);
var state_15210__$1 = state_15210;
var statearr_15288_18541 = state_15210__$1;
(statearr_15288_18541[(2)] = inst_15158);

(statearr_15288_18541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (32))){
var inst_15146 = (state_15210[(19)]);
var inst_15147 = (state_15210[(10)]);
var inst_15149 = (state_15210[(11)]);
var inst_15148 = (state_15210[(20)]);
var inst_15160 = (state_15210[(2)]);
var inst_15161 = (inst_15149 + (1));
var tmp15278 = inst_15146;
var tmp15279 = inst_15147;
var tmp15280 = inst_15148;
var inst_15146__$1 = tmp15278;
var inst_15147__$1 = tmp15279;
var inst_15148__$1 = tmp15280;
var inst_15149__$1 = inst_15161;
var state_15210__$1 = (function (){var statearr_15289 = state_15210;
(statearr_15289[(19)] = inst_15146__$1);

(statearr_15289[(10)] = inst_15147__$1);

(statearr_15289[(11)] = inst_15149__$1);

(statearr_15289[(21)] = inst_15160);

(statearr_15289[(20)] = inst_15148__$1);

return statearr_15289;
})();
var statearr_15292_18546 = state_15210__$1;
(statearr_15292_18546[(2)] = null);

(statearr_15292_18546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (40))){
var inst_15175 = (state_15210[(22)]);
var inst_15180 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15175);
var state_15210__$1 = state_15210;
var statearr_15293_18548 = state_15210__$1;
(statearr_15293_18548[(2)] = inst_15180);

(statearr_15293_18548[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (33))){
var inst_15165 = (state_15210[(23)]);
var inst_15167 = cljs.core.chunked_seq_QMARK_(inst_15165);
var state_15210__$1 = state_15210;
if(inst_15167){
var statearr_15295_18549 = state_15210__$1;
(statearr_15295_18549[(1)] = (36));

} else {
var statearr_15296_18550 = state_15210__$1;
(statearr_15296_18550[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (13))){
var inst_15082 = (state_15210[(24)]);
var inst_15085 = cljs.core.async.close_BANG_(inst_15082);
var state_15210__$1 = state_15210;
var statearr_15300_18551 = state_15210__$1;
(statearr_15300_18551[(2)] = inst_15085);

(statearr_15300_18551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (22))){
var inst_15118 = (state_15210[(8)]);
var inst_15121 = cljs.core.async.close_BANG_(inst_15118);
var state_15210__$1 = state_15210;
var statearr_15309_18556 = state_15210__$1;
(statearr_15309_18556[(2)] = inst_15121);

(statearr_15309_18556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (36))){
var inst_15165 = (state_15210[(23)]);
var inst_15169 = cljs.core.chunk_first(inst_15165);
var inst_15170 = cljs.core.chunk_rest(inst_15165);
var inst_15171 = cljs.core.count(inst_15169);
var inst_15146 = inst_15170;
var inst_15147 = inst_15169;
var inst_15148 = inst_15171;
var inst_15149 = (0);
var state_15210__$1 = (function (){var statearr_15311 = state_15210;
(statearr_15311[(19)] = inst_15146);

(statearr_15311[(10)] = inst_15147);

(statearr_15311[(11)] = inst_15149);

(statearr_15311[(20)] = inst_15148);

return statearr_15311;
})();
var statearr_15312_18558 = state_15210__$1;
(statearr_15312_18558[(2)] = null);

(statearr_15312_18558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (41))){
var inst_15165 = (state_15210[(23)]);
var inst_15182 = (state_15210[(2)]);
var inst_15184 = cljs.core.next(inst_15165);
var inst_15146 = inst_15184;
var inst_15147 = null;
var inst_15148 = (0);
var inst_15149 = (0);
var state_15210__$1 = (function (){var statearr_15317 = state_15210;
(statearr_15317[(19)] = inst_15146);

(statearr_15317[(10)] = inst_15147);

(statearr_15317[(11)] = inst_15149);

(statearr_15317[(20)] = inst_15148);

(statearr_15317[(25)] = inst_15182);

return statearr_15317;
})();
var statearr_15322_18565 = state_15210__$1;
(statearr_15322_18565[(2)] = null);

(statearr_15322_18565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (43))){
var state_15210__$1 = state_15210;
var statearr_15323_18566 = state_15210__$1;
(statearr_15323_18566[(2)] = null);

(statearr_15323_18566[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (29))){
var inst_15192 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15329_18568 = state_15210__$1;
(statearr_15329_18568[(2)] = inst_15192);

(statearr_15329_18568[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (44))){
var inst_15201 = (state_15210[(2)]);
var state_15210__$1 = (function (){var statearr_15330 = state_15210;
(statearr_15330[(26)] = inst_15201);

return statearr_15330;
})();
var statearr_15334_18569 = state_15210__$1;
(statearr_15334_18569[(2)] = null);

(statearr_15334_18569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (6))){
var inst_15138 = (state_15210[(27)]);
var inst_15137 = cljs.core.deref(cs);
var inst_15138__$1 = cljs.core.keys(inst_15137);
var inst_15139 = cljs.core.count(inst_15138__$1);
var inst_15140 = cljs.core.reset_BANG_(dctr,inst_15139);
var inst_15145 = cljs.core.seq(inst_15138__$1);
var inst_15146 = inst_15145;
var inst_15147 = null;
var inst_15148 = (0);
var inst_15149 = (0);
var state_15210__$1 = (function (){var statearr_15340 = state_15210;
(statearr_15340[(19)] = inst_15146);

(statearr_15340[(28)] = inst_15140);

(statearr_15340[(10)] = inst_15147);

(statearr_15340[(11)] = inst_15149);

(statearr_15340[(20)] = inst_15148);

(statearr_15340[(27)] = inst_15138__$1);

return statearr_15340;
})();
var statearr_15341_18571 = state_15210__$1;
(statearr_15341_18571[(2)] = null);

(statearr_15341_18571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (28))){
var inst_15146 = (state_15210[(19)]);
var inst_15165 = (state_15210[(23)]);
var inst_15165__$1 = cljs.core.seq(inst_15146);
var state_15210__$1 = (function (){var statearr_15346 = state_15210;
(statearr_15346[(23)] = inst_15165__$1);

return statearr_15346;
})();
if(inst_15165__$1){
var statearr_15348_18576 = state_15210__$1;
(statearr_15348_18576[(1)] = (33));

} else {
var statearr_15349_18577 = state_15210__$1;
(statearr_15349_18577[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (25))){
var inst_15149 = (state_15210[(11)]);
var inst_15148 = (state_15210[(20)]);
var inst_15151 = (inst_15149 < inst_15148);
var inst_15152 = inst_15151;
var state_15210__$1 = state_15210;
if(cljs.core.truth_(inst_15152)){
var statearr_15350_18579 = state_15210__$1;
(statearr_15350_18579[(1)] = (27));

} else {
var statearr_15352_18580 = state_15210__$1;
(statearr_15352_18580[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (34))){
var state_15210__$1 = state_15210;
var statearr_15353_18583 = state_15210__$1;
(statearr_15353_18583[(2)] = null);

(statearr_15353_18583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (17))){
var state_15210__$1 = state_15210;
var statearr_15354_18584 = state_15210__$1;
(statearr_15354_18584[(2)] = null);

(statearr_15354_18584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (3))){
var inst_15206 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15210__$1,inst_15206);
} else {
if((state_val_15211 === (12))){
var inst_15133 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15362_18585 = state_15210__$1;
(statearr_15362_18585[(2)] = inst_15133);

(statearr_15362_18585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (2))){
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15210__$1,(4),ch);
} else {
if((state_val_15211 === (23))){
var state_15210__$1 = state_15210;
var statearr_15364_18586 = state_15210__$1;
(statearr_15364_18586[(2)] = null);

(statearr_15364_18586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (35))){
var inst_15190 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15365_18588 = state_15210__$1;
(statearr_15365_18588[(2)] = inst_15190);

(statearr_15365_18588[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (19))){
var inst_15096 = (state_15210[(7)]);
var inst_15106 = cljs.core.chunk_first(inst_15096);
var inst_15107 = cljs.core.chunk_rest(inst_15096);
var inst_15108 = cljs.core.count(inst_15106);
var inst_15067 = inst_15107;
var inst_15068 = inst_15106;
var inst_15069 = inst_15108;
var inst_15070 = (0);
var state_15210__$1 = (function (){var statearr_15373 = state_15210;
(statearr_15373[(13)] = inst_15068);

(statearr_15373[(14)] = inst_15069);

(statearr_15373[(15)] = inst_15067);

(statearr_15373[(17)] = inst_15070);

return statearr_15373;
})();
var statearr_15374_18593 = state_15210__$1;
(statearr_15374_18593[(2)] = null);

(statearr_15374_18593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (11))){
var inst_15096 = (state_15210[(7)]);
var inst_15067 = (state_15210[(15)]);
var inst_15096__$1 = cljs.core.seq(inst_15067);
var state_15210__$1 = (function (){var statearr_15382 = state_15210;
(statearr_15382[(7)] = inst_15096__$1);

return statearr_15382;
})();
if(inst_15096__$1){
var statearr_15383_18594 = state_15210__$1;
(statearr_15383_18594[(1)] = (16));

} else {
var statearr_15408_18595 = state_15210__$1;
(statearr_15408_18595[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (9))){
var inst_15135 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15409_18596 = state_15210__$1;
(statearr_15409_18596[(2)] = inst_15135);

(statearr_15409_18596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (5))){
var inst_15064 = cljs.core.deref(cs);
var inst_15065 = cljs.core.seq(inst_15064);
var inst_15067 = inst_15065;
var inst_15068 = null;
var inst_15069 = (0);
var inst_15070 = (0);
var state_15210__$1 = (function (){var statearr_15413 = state_15210;
(statearr_15413[(13)] = inst_15068);

(statearr_15413[(14)] = inst_15069);

(statearr_15413[(15)] = inst_15067);

(statearr_15413[(17)] = inst_15070);

return statearr_15413;
})();
var statearr_15415_18611 = state_15210__$1;
(statearr_15415_18611[(2)] = null);

(statearr_15415_18611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (14))){
var state_15210__$1 = state_15210;
var statearr_15416_18619 = state_15210__$1;
(statearr_15416_18619[(2)] = null);

(statearr_15416_18619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (45))){
var inst_15198 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15417_18620 = state_15210__$1;
(statearr_15417_18620[(2)] = inst_15198);

(statearr_15417_18620[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (26))){
var inst_15138 = (state_15210[(27)]);
var inst_15194 = (state_15210[(2)]);
var inst_15195 = cljs.core.seq(inst_15138);
var state_15210__$1 = (function (){var statearr_15423 = state_15210;
(statearr_15423[(29)] = inst_15194);

return statearr_15423;
})();
if(inst_15195){
var statearr_15424_18629 = state_15210__$1;
(statearr_15424_18629[(1)] = (42));

} else {
var statearr_15425_18631 = state_15210__$1;
(statearr_15425_18631[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (16))){
var inst_15096 = (state_15210[(7)]);
var inst_15102 = cljs.core.chunked_seq_QMARK_(inst_15096);
var state_15210__$1 = state_15210;
if(inst_15102){
var statearr_15428_18632 = state_15210__$1;
(statearr_15428_18632[(1)] = (19));

} else {
var statearr_15429_18633 = state_15210__$1;
(statearr_15429_18633[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (38))){
var inst_15187 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15431_18638 = state_15210__$1;
(statearr_15431_18638[(2)] = inst_15187);

(statearr_15431_18638[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (30))){
var state_15210__$1 = state_15210;
var statearr_15439_18646 = state_15210__$1;
(statearr_15439_18646[(2)] = null);

(statearr_15439_18646[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (10))){
var inst_15068 = (state_15210[(13)]);
var inst_15070 = (state_15210[(17)]);
var inst_15081 = cljs.core._nth(inst_15068,inst_15070);
var inst_15082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15081,(0),null);
var inst_15083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15081,(1),null);
var state_15210__$1 = (function (){var statearr_15448 = state_15210;
(statearr_15448[(24)] = inst_15082);

return statearr_15448;
})();
if(cljs.core.truth_(inst_15083)){
var statearr_15449_18654 = state_15210__$1;
(statearr_15449_18654[(1)] = (13));

} else {
var statearr_15450_18659 = state_15210__$1;
(statearr_15450_18659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (18))){
var inst_15131 = (state_15210[(2)]);
var state_15210__$1 = state_15210;
var statearr_15453_18678 = state_15210__$1;
(statearr_15453_18678[(2)] = inst_15131);

(statearr_15453_18678[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (42))){
var state_15210__$1 = state_15210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15210__$1,(45),dchan);
} else {
if((state_val_15211 === (37))){
var inst_15165 = (state_15210[(23)]);
var inst_15175 = (state_15210[(22)]);
var inst_15055 = (state_15210[(12)]);
var inst_15175__$1 = cljs.core.first(inst_15165);
var inst_15176 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15175__$1,inst_15055,done);
var state_15210__$1 = (function (){var statearr_15460 = state_15210;
(statearr_15460[(22)] = inst_15175__$1);

return statearr_15460;
})();
if(cljs.core.truth_(inst_15176)){
var statearr_15461_18681 = state_15210__$1;
(statearr_15461_18681[(1)] = (39));

} else {
var statearr_15462_18687 = state_15210__$1;
(statearr_15462_18687[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15211 === (8))){
var inst_15069 = (state_15210[(14)]);
var inst_15070 = (state_15210[(17)]);
var inst_15072 = (inst_15070 < inst_15069);
var inst_15073 = inst_15072;
var state_15210__$1 = state_15210;
if(cljs.core.truth_(inst_15073)){
var statearr_15466_18698 = state_15210__$1;
(statearr_15466_18698[(1)] = (10));

} else {
var statearr_15469_18699 = state_15210__$1;
(statearr_15469_18699[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__12977__auto__ = null;
var cljs$core$async$mult_$_state_machine__12977__auto____0 = (function (){
var statearr_15476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15476[(0)] = cljs$core$async$mult_$_state_machine__12977__auto__);

(statearr_15476[(1)] = (1));

return statearr_15476;
});
var cljs$core$async$mult_$_state_machine__12977__auto____1 = (function (state_15210){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_15210);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e15478){var ex__12980__auto__ = e15478;
var statearr_15479_18720 = state_15210;
(statearr_15479_18720[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_15210[(4)]))){
var statearr_15480_18727 = state_15210;
(statearr_15480_18727[(1)] = cljs.core.first((state_15210[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18728 = state_15210;
state_15210 = G__18728;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12977__auto__ = function(state_15210){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12977__auto____1.call(this,state_15210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12977__auto____0;
cljs$core$async$mult_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12977__auto____1;
return cljs$core$async$mult_$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_15483 = f__13913__auto__();
(statearr_15483[(6)] = c__13912__auto___18479);

return statearr_15483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15492 = arguments.length;
switch (G__15492) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18750 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18750(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18758 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18758(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18763 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18763(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18770 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18770(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18775 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18775(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18781 = arguments.length;
var i__5770__auto___18785 = (0);
while(true){
if((i__5770__auto___18785 < len__5769__auto___18781)){
args__5775__auto__.push((arguments[i__5770__auto___18785]));

var G__18787 = (i__5770__auto___18785 + (1));
i__5770__auto___18785 = G__18787;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15535){
var map__15536 = p__15535;
var map__15536__$1 = cljs.core.__destructure_map(map__15536);
var opts = map__15536__$1;
var statearr_15537_18789 = state;
(statearr_15537_18789[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15539_18791 = state;
(statearr_15539_18791[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15540_18792 = state;
(statearr_15540_18792[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15530){
var G__15531 = cljs.core.first(seq15530);
var seq15530__$1 = cljs.core.next(seq15530);
var G__15532 = cljs.core.first(seq15530__$1);
var seq15530__$2 = cljs.core.next(seq15530__$1);
var G__15533 = cljs.core.first(seq15530__$2);
var seq15530__$3 = cljs.core.next(seq15530__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15531,G__15532,G__15533,seq15530__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15571 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15572){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15572 = meta15572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15573,meta15572__$1){
var self__ = this;
var _15573__$1 = this;
return (new cljs.core.async.t_cljs$core$async15571(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15572__$1));
}));

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15573){
var self__ = this;
var _15573__$1 = this;
return self__.meta15572;
}));

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15571.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15572","meta15572",1241995442,null)], null);
}));

(cljs.core.async.t_cljs$core$async15571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15571");

(cljs.core.async.t_cljs$core$async15571.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15571.
 */
cljs.core.async.__GT_t_cljs$core$async15571 = (function cljs$core$async$__GT_t_cljs$core$async15571(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15572){
return (new cljs.core.async.t_cljs$core$async15571(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15572));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15571(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13912__auto___18822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_15718){
var state_val_15720 = (state_15718[(1)]);
if((state_val_15720 === (7))){
var inst_15665 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
if(cljs.core.truth_(inst_15665)){
var statearr_15729_18823 = state_15718__$1;
(statearr_15729_18823[(1)] = (8));

} else {
var statearr_15736_18824 = state_15718__$1;
(statearr_15736_18824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (20))){
var inst_15652 = (state_15718[(7)]);
var state_15718__$1 = state_15718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15718__$1,(23),out,inst_15652);
} else {
if((state_val_15720 === (1))){
var inst_15623 = calc_state();
var inst_15629 = cljs.core.__destructure_map(inst_15623);
var inst_15630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15629,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15629,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15629,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15635 = inst_15623;
var state_15718__$1 = (function (){var statearr_15746 = state_15718;
(statearr_15746[(8)] = inst_15631);

(statearr_15746[(9)] = inst_15630);

(statearr_15746[(10)] = inst_15633);

(statearr_15746[(11)] = inst_15635);

return statearr_15746;
})();
var statearr_15752_18832 = state_15718__$1;
(statearr_15752_18832[(2)] = null);

(statearr_15752_18832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (24))){
var inst_15638 = (state_15718[(12)]);
var inst_15635 = inst_15638;
var state_15718__$1 = (function (){var statearr_15759 = state_15718;
(statearr_15759[(11)] = inst_15635);

return statearr_15759;
})();
var statearr_15761_18839 = state_15718__$1;
(statearr_15761_18839[(2)] = null);

(statearr_15761_18839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (4))){
var inst_15660 = (state_15718[(13)]);
var inst_15652 = (state_15718[(7)]);
var inst_15651 = (state_15718[(2)]);
var inst_15652__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15651,(0),null);
var inst_15655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15651,(1),null);
var inst_15660__$1 = (inst_15652__$1 == null);
var state_15718__$1 = (function (){var statearr_15767 = state_15718;
(statearr_15767[(13)] = inst_15660__$1);

(statearr_15767[(14)] = inst_15655);

(statearr_15767[(7)] = inst_15652__$1);

return statearr_15767;
})();
if(cljs.core.truth_(inst_15660__$1)){
var statearr_15768_18851 = state_15718__$1;
(statearr_15768_18851[(1)] = (5));

} else {
var statearr_15769_18852 = state_15718__$1;
(statearr_15769_18852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (15))){
var inst_15639 = (state_15718[(15)]);
var inst_15682 = (state_15718[(16)]);
var inst_15682__$1 = cljs.core.empty_QMARK_(inst_15639);
var state_15718__$1 = (function (){var statearr_15773 = state_15718;
(statearr_15773[(16)] = inst_15682__$1);

return statearr_15773;
})();
if(inst_15682__$1){
var statearr_15777_18862 = state_15718__$1;
(statearr_15777_18862[(1)] = (17));

} else {
var statearr_15778_18863 = state_15718__$1;
(statearr_15778_18863[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (21))){
var inst_15638 = (state_15718[(12)]);
var inst_15635 = inst_15638;
var state_15718__$1 = (function (){var statearr_15780 = state_15718;
(statearr_15780[(11)] = inst_15635);

return statearr_15780;
})();
var statearr_15781_18866 = state_15718__$1;
(statearr_15781_18866[(2)] = null);

(statearr_15781_18866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (13))){
var inst_15673 = (state_15718[(2)]);
var inst_15674 = calc_state();
var inst_15635 = inst_15674;
var state_15718__$1 = (function (){var statearr_15783 = state_15718;
(statearr_15783[(17)] = inst_15673);

(statearr_15783[(11)] = inst_15635);

return statearr_15783;
})();
var statearr_15784_18874 = state_15718__$1;
(statearr_15784_18874[(2)] = null);

(statearr_15784_18874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (22))){
var inst_15704 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
var statearr_15785_18885 = state_15718__$1;
(statearr_15785_18885[(2)] = inst_15704);

(statearr_15785_18885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (6))){
var inst_15655 = (state_15718[(14)]);
var inst_15663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15655,change);
var state_15718__$1 = state_15718;
var statearr_15791_18887 = state_15718__$1;
(statearr_15791_18887[(2)] = inst_15663);

(statearr_15791_18887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (25))){
var state_15718__$1 = state_15718;
var statearr_15802_18892 = state_15718__$1;
(statearr_15802_18892[(2)] = null);

(statearr_15802_18892[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (17))){
var inst_15655 = (state_15718[(14)]);
var inst_15642 = (state_15718[(18)]);
var inst_15684 = (inst_15642.cljs$core$IFn$_invoke$arity$1 ? inst_15642.cljs$core$IFn$_invoke$arity$1(inst_15655) : inst_15642.call(null,inst_15655));
var inst_15685 = cljs.core.not(inst_15684);
var state_15718__$1 = state_15718;
var statearr_15809_18894 = state_15718__$1;
(statearr_15809_18894[(2)] = inst_15685);

(statearr_15809_18894[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (3))){
var inst_15709 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15718__$1,inst_15709);
} else {
if((state_val_15720 === (12))){
var state_15718__$1 = state_15718;
var statearr_15816_18896 = state_15718__$1;
(statearr_15816_18896[(2)] = null);

(statearr_15816_18896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (2))){
var inst_15638 = (state_15718[(12)]);
var inst_15635 = (state_15718[(11)]);
var inst_15638__$1 = cljs.core.__destructure_map(inst_15635);
var inst_15639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15638__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15638__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15638__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15718__$1 = (function (){var statearr_15819 = state_15718;
(statearr_15819[(15)] = inst_15639);

(statearr_15819[(12)] = inst_15638__$1);

(statearr_15819[(18)] = inst_15642);

return statearr_15819;
})();
return cljs.core.async.ioc_alts_BANG_(state_15718__$1,(4),inst_15643);
} else {
if((state_val_15720 === (23))){
var inst_15695 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
if(cljs.core.truth_(inst_15695)){
var statearr_15820_18901 = state_15718__$1;
(statearr_15820_18901[(1)] = (24));

} else {
var statearr_15826_18905 = state_15718__$1;
(statearr_15826_18905[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (19))){
var inst_15689 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
var statearr_15830_18906 = state_15718__$1;
(statearr_15830_18906[(2)] = inst_15689);

(statearr_15830_18906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (11))){
var inst_15655 = (state_15718[(14)]);
var inst_15670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15655);
var state_15718__$1 = state_15718;
var statearr_15837_18907 = state_15718__$1;
(statearr_15837_18907[(2)] = inst_15670);

(statearr_15837_18907[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (9))){
var inst_15655 = (state_15718[(14)]);
var inst_15639 = (state_15718[(15)]);
var inst_15677 = (state_15718[(19)]);
var inst_15677__$1 = (inst_15639.cljs$core$IFn$_invoke$arity$1 ? inst_15639.cljs$core$IFn$_invoke$arity$1(inst_15655) : inst_15639.call(null,inst_15655));
var state_15718__$1 = (function (){var statearr_15838 = state_15718;
(statearr_15838[(19)] = inst_15677__$1);

return statearr_15838;
})();
if(cljs.core.truth_(inst_15677__$1)){
var statearr_15839_18910 = state_15718__$1;
(statearr_15839_18910[(1)] = (14));

} else {
var statearr_15843_18911 = state_15718__$1;
(statearr_15843_18911[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (5))){
var inst_15660 = (state_15718[(13)]);
var state_15718__$1 = state_15718;
var statearr_15844_18916 = state_15718__$1;
(statearr_15844_18916[(2)] = inst_15660);

(statearr_15844_18916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (14))){
var inst_15677 = (state_15718[(19)]);
var state_15718__$1 = state_15718;
var statearr_15845_18922 = state_15718__$1;
(statearr_15845_18922[(2)] = inst_15677);

(statearr_15845_18922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (26))){
var inst_15700 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
var statearr_15846_18929 = state_15718__$1;
(statearr_15846_18929[(2)] = inst_15700);

(statearr_15846_18929[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (16))){
var inst_15692 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
if(cljs.core.truth_(inst_15692)){
var statearr_15847_18937 = state_15718__$1;
(statearr_15847_18937[(1)] = (20));

} else {
var statearr_15848_18939 = state_15718__$1;
(statearr_15848_18939[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (10))){
var inst_15706 = (state_15718[(2)]);
var state_15718__$1 = state_15718;
var statearr_15850_18945 = state_15718__$1;
(statearr_15850_18945[(2)] = inst_15706);

(statearr_15850_18945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (18))){
var inst_15682 = (state_15718[(16)]);
var state_15718__$1 = state_15718;
var statearr_15851_18946 = state_15718__$1;
(statearr_15851_18946[(2)] = inst_15682);

(statearr_15851_18946[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15720 === (8))){
var inst_15652 = (state_15718[(7)]);
var inst_15667 = (inst_15652 == null);
var state_15718__$1 = state_15718;
if(cljs.core.truth_(inst_15667)){
var statearr_15857_18947 = state_15718__$1;
(statearr_15857_18947[(1)] = (11));

} else {
var statearr_15861_18948 = state_15718__$1;
(statearr_15861_18948[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__12977__auto__ = null;
var cljs$core$async$mix_$_state_machine__12977__auto____0 = (function (){
var statearr_15863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15863[(0)] = cljs$core$async$mix_$_state_machine__12977__auto__);

(statearr_15863[(1)] = (1));

return statearr_15863;
});
var cljs$core$async$mix_$_state_machine__12977__auto____1 = (function (state_15718){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_15718);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e15864){var ex__12980__auto__ = e15864;
var statearr_15865_18953 = state_15718;
(statearr_15865_18953[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_15718[(4)]))){
var statearr_15866_18961 = state_15718;
(statearr_15866_18961[(1)] = cljs.core.first((state_15718[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18963 = state_15718;
state_15718 = G__18963;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12977__auto__ = function(state_15718){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12977__auto____1.call(this,state_15718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12977__auto____0;
cljs$core$async$mix_$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12977__auto____1;
return cljs$core$async$mix_$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_15869 = f__13913__auto__();
(statearr_15869[(6)] = c__13912__auto___18822);

return statearr_15869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18984 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18984(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18996 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18996(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19010 = (function() {
var G__19013 = null;
var G__19013__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19013__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19013 = function(p,v){
switch(arguments.length){
case 1:
return G__19013__1.call(this,p);
case 2:
return G__19013__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19013.cljs$core$IFn$_invoke$arity$1 = G__19013__1;
G__19013.cljs$core$IFn$_invoke$arity$2 = G__19013__2;
return G__19013;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15904 = arguments.length;
switch (G__15904) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19010(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19010(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15922 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15923){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15923 = meta15923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15924,meta15923__$1){
var self__ = this;
var _15924__$1 = this;
return (new cljs.core.async.t_cljs$core$async15922(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15923__$1));
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15924){
var self__ = this;
var _15924__$1 = this;
return self__.meta15923;
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15923","meta15923",-191182116,null)], null);
}));

(cljs.core.async.t_cljs$core$async15922.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15922");

(cljs.core.async.t_cljs$core$async15922.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15922");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15922.
 */
cljs.core.async.__GT_t_cljs$core$async15922 = (function cljs$core$async$__GT_t_cljs$core$async15922(ch,topic_fn,buf_fn,mults,ensure_mult,meta15923){
return (new cljs.core.async.t_cljs$core$async15922(ch,topic_fn,buf_fn,mults,ensure_mult,meta15923));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15916 = arguments.length;
switch (G__15916) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15913_SHARP_){
if(cljs.core.truth_((p1__15913_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15913_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15913_SHARP_.call(null,topic)))){
return p1__15913_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15913_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15922(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13912__auto___19048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_16057){
var state_val_16058 = (state_16057[(1)]);
if((state_val_16058 === (7))){
var inst_16044 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16059_19050 = state_16057__$1;
(statearr_16059_19050[(2)] = inst_16044);

(statearr_16059_19050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (20))){
var state_16057__$1 = state_16057;
var statearr_16064_19055 = state_16057__$1;
(statearr_16064_19055[(2)] = null);

(statearr_16064_19055[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (1))){
var state_16057__$1 = state_16057;
var statearr_16066_19056 = state_16057__$1;
(statearr_16066_19056[(2)] = null);

(statearr_16066_19056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (24))){
var inst_16022 = (state_16057[(7)]);
var inst_16036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16022);
var state_16057__$1 = state_16057;
var statearr_16073_19057 = state_16057__$1;
(statearr_16073_19057[(2)] = inst_16036);

(statearr_16073_19057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (4))){
var inst_15961 = (state_16057[(8)]);
var inst_15961__$1 = (state_16057[(2)]);
var inst_15963 = (inst_15961__$1 == null);
var state_16057__$1 = (function (){var statearr_16078 = state_16057;
(statearr_16078[(8)] = inst_15961__$1);

return statearr_16078;
})();
if(cljs.core.truth_(inst_15963)){
var statearr_16080_19067 = state_16057__$1;
(statearr_16080_19067[(1)] = (5));

} else {
var statearr_16081_19068 = state_16057__$1;
(statearr_16081_19068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (15))){
var inst_16016 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16089_19069 = state_16057__$1;
(statearr_16089_19069[(2)] = inst_16016);

(statearr_16089_19069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (21))){
var inst_16041 = (state_16057[(2)]);
var state_16057__$1 = (function (){var statearr_16090 = state_16057;
(statearr_16090[(9)] = inst_16041);

return statearr_16090;
})();
var statearr_16093_19078 = state_16057__$1;
(statearr_16093_19078[(2)] = null);

(statearr_16093_19078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (13))){
var inst_15994 = (state_16057[(10)]);
var inst_15998 = cljs.core.chunked_seq_QMARK_(inst_15994);
var state_16057__$1 = state_16057;
if(inst_15998){
var statearr_16096_19081 = state_16057__$1;
(statearr_16096_19081[(1)] = (16));

} else {
var statearr_16098_19084 = state_16057__$1;
(statearr_16098_19084[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (22))){
var inst_16032 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
if(cljs.core.truth_(inst_16032)){
var statearr_16108_19085 = state_16057__$1;
(statearr_16108_19085[(1)] = (23));

} else {
var statearr_16116_19086 = state_16057__$1;
(statearr_16116_19086[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (6))){
var inst_16025 = (state_16057[(11)]);
var inst_16022 = (state_16057[(7)]);
var inst_15961 = (state_16057[(8)]);
var inst_16022__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15961) : topic_fn.call(null,inst_15961));
var inst_16024 = cljs.core.deref(mults);
var inst_16025__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16024,inst_16022__$1);
var state_16057__$1 = (function (){var statearr_16120 = state_16057;
(statearr_16120[(11)] = inst_16025__$1);

(statearr_16120[(7)] = inst_16022__$1);

return statearr_16120;
})();
if(cljs.core.truth_(inst_16025__$1)){
var statearr_16121_19087 = state_16057__$1;
(statearr_16121_19087[(1)] = (19));

} else {
var statearr_16122_19088 = state_16057__$1;
(statearr_16122_19088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (25))){
var inst_16038 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16125_19090 = state_16057__$1;
(statearr_16125_19090[(2)] = inst_16038);

(statearr_16125_19090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (17))){
var inst_15994 = (state_16057[(10)]);
var inst_16007 = cljs.core.first(inst_15994);
var inst_16008 = cljs.core.async.muxch_STAR_(inst_16007);
var inst_16009 = cljs.core.async.close_BANG_(inst_16008);
var inst_16010 = cljs.core.next(inst_15994);
var inst_15972 = inst_16010;
var inst_15973 = null;
var inst_15974 = (0);
var inst_15975 = (0);
var state_16057__$1 = (function (){var statearr_16126 = state_16057;
(statearr_16126[(12)] = inst_15973);

(statearr_16126[(13)] = inst_15975);

(statearr_16126[(14)] = inst_15972);

(statearr_16126[(15)] = inst_15974);

(statearr_16126[(16)] = inst_16009);

return statearr_16126;
})();
var statearr_16127_19093 = state_16057__$1;
(statearr_16127_19093[(2)] = null);

(statearr_16127_19093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (3))){
var inst_16046 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16057__$1,inst_16046);
} else {
if((state_val_16058 === (12))){
var inst_16018 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16133_19102 = state_16057__$1;
(statearr_16133_19102[(2)] = inst_16018);

(statearr_16133_19102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (2))){
var state_16057__$1 = state_16057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16057__$1,(4),ch);
} else {
if((state_val_16058 === (23))){
var state_16057__$1 = state_16057;
var statearr_16136_19103 = state_16057__$1;
(statearr_16136_19103[(2)] = null);

(statearr_16136_19103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (19))){
var inst_16025 = (state_16057[(11)]);
var inst_15961 = (state_16057[(8)]);
var inst_16030 = cljs.core.async.muxch_STAR_(inst_16025);
var state_16057__$1 = state_16057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16057__$1,(22),inst_16030,inst_15961);
} else {
if((state_val_16058 === (11))){
var inst_15994 = (state_16057[(10)]);
var inst_15972 = (state_16057[(14)]);
var inst_15994__$1 = cljs.core.seq(inst_15972);
var state_16057__$1 = (function (){var statearr_16139 = state_16057;
(statearr_16139[(10)] = inst_15994__$1);

return statearr_16139;
})();
if(inst_15994__$1){
var statearr_16141_19105 = state_16057__$1;
(statearr_16141_19105[(1)] = (13));

} else {
var statearr_16143_19106 = state_16057__$1;
(statearr_16143_19106[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (9))){
var inst_16020 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16145_19107 = state_16057__$1;
(statearr_16145_19107[(2)] = inst_16020);

(statearr_16145_19107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (5))){
var inst_15969 = cljs.core.deref(mults);
var inst_15970 = cljs.core.vals(inst_15969);
var inst_15971 = cljs.core.seq(inst_15970);
var inst_15972 = inst_15971;
var inst_15973 = null;
var inst_15974 = (0);
var inst_15975 = (0);
var state_16057__$1 = (function (){var statearr_16147 = state_16057;
(statearr_16147[(12)] = inst_15973);

(statearr_16147[(13)] = inst_15975);

(statearr_16147[(14)] = inst_15972);

(statearr_16147[(15)] = inst_15974);

return statearr_16147;
})();
var statearr_16149_19113 = state_16057__$1;
(statearr_16149_19113[(2)] = null);

(statearr_16149_19113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (14))){
var state_16057__$1 = state_16057;
var statearr_16157_19114 = state_16057__$1;
(statearr_16157_19114[(2)] = null);

(statearr_16157_19114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (16))){
var inst_15994 = (state_16057[(10)]);
var inst_16000 = cljs.core.chunk_first(inst_15994);
var inst_16003 = cljs.core.chunk_rest(inst_15994);
var inst_16004 = cljs.core.count(inst_16000);
var inst_15972 = inst_16003;
var inst_15973 = inst_16000;
var inst_15974 = inst_16004;
var inst_15975 = (0);
var state_16057__$1 = (function (){var statearr_16173 = state_16057;
(statearr_16173[(12)] = inst_15973);

(statearr_16173[(13)] = inst_15975);

(statearr_16173[(14)] = inst_15972);

(statearr_16173[(15)] = inst_15974);

return statearr_16173;
})();
var statearr_16174_19124 = state_16057__$1;
(statearr_16174_19124[(2)] = null);

(statearr_16174_19124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (10))){
var inst_15973 = (state_16057[(12)]);
var inst_15975 = (state_16057[(13)]);
var inst_15972 = (state_16057[(14)]);
var inst_15974 = (state_16057[(15)]);
var inst_15982 = cljs.core._nth(inst_15973,inst_15975);
var inst_15986 = cljs.core.async.muxch_STAR_(inst_15982);
var inst_15987 = cljs.core.async.close_BANG_(inst_15986);
var inst_15988 = (inst_15975 + (1));
var tmp16150 = inst_15973;
var tmp16151 = inst_15972;
var tmp16152 = inst_15974;
var inst_15972__$1 = tmp16151;
var inst_15973__$1 = tmp16150;
var inst_15974__$1 = tmp16152;
var inst_15975__$1 = inst_15988;
var state_16057__$1 = (function (){var statearr_16176 = state_16057;
(statearr_16176[(12)] = inst_15973__$1);

(statearr_16176[(13)] = inst_15975__$1);

(statearr_16176[(17)] = inst_15987);

(statearr_16176[(14)] = inst_15972__$1);

(statearr_16176[(15)] = inst_15974__$1);

return statearr_16176;
})();
var statearr_16177_19126 = state_16057__$1;
(statearr_16177_19126[(2)] = null);

(statearr_16177_19126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (18))){
var inst_16013 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16179_19127 = state_16057__$1;
(statearr_16179_19127[(2)] = inst_16013);

(statearr_16179_19127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (8))){
var inst_15975 = (state_16057[(13)]);
var inst_15974 = (state_16057[(15)]);
var inst_15979 = (inst_15975 < inst_15974);
var inst_15980 = inst_15979;
var state_16057__$1 = state_16057;
if(cljs.core.truth_(inst_15980)){
var statearr_16183_19128 = state_16057__$1;
(statearr_16183_19128[(1)] = (10));

} else {
var statearr_16184_19129 = state_16057__$1;
(statearr_16184_19129[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_16185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16185[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_16185[(1)] = (1));

return statearr_16185;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_16057){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_16057);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e16186){var ex__12980__auto__ = e16186;
var statearr_16187_19135 = state_16057;
(statearr_16187_19135[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_16057[(4)]))){
var statearr_16188_19145 = state_16057;
(statearr_16188_19145[(1)] = cljs.core.first((state_16057[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19148 = state_16057;
state_16057 = G__19148;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_16057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_16057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_16189 = f__13913__auto__();
(statearr_16189[(6)] = c__13912__auto___19048);

return statearr_16189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16200 = arguments.length;
switch (G__16200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16222 = arguments.length;
switch (G__16222) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16224 = arguments.length;
switch (G__16224) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13912__auto___19158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_16293){
var state_val_16297 = (state_16293[(1)]);
if((state_val_16297 === (7))){
var state_16293__$1 = state_16293;
var statearr_16301_19160 = state_16293__$1;
(statearr_16301_19160[(2)] = null);

(statearr_16301_19160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (1))){
var state_16293__$1 = state_16293;
var statearr_16302_19163 = state_16293__$1;
(statearr_16302_19163[(2)] = null);

(statearr_16302_19163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (4))){
var inst_16240 = (state_16293[(7)]);
var inst_16241 = (state_16293[(8)]);
var inst_16243 = (inst_16241 < inst_16240);
var state_16293__$1 = state_16293;
if(cljs.core.truth_(inst_16243)){
var statearr_16304_19164 = state_16293__$1;
(statearr_16304_19164[(1)] = (6));

} else {
var statearr_16305_19165 = state_16293__$1;
(statearr_16305_19165[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (15))){
var inst_16279 = (state_16293[(9)]);
var inst_16284 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16279);
var state_16293__$1 = state_16293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16293__$1,(17),out,inst_16284);
} else {
if((state_val_16297 === (13))){
var inst_16279 = (state_16293[(9)]);
var inst_16279__$1 = (state_16293[(2)]);
var inst_16280 = cljs.core.some(cljs.core.nil_QMARK_,inst_16279__$1);
var state_16293__$1 = (function (){var statearr_16309 = state_16293;
(statearr_16309[(9)] = inst_16279__$1);

return statearr_16309;
})();
if(cljs.core.truth_(inst_16280)){
var statearr_16311_19171 = state_16293__$1;
(statearr_16311_19171[(1)] = (14));

} else {
var statearr_16315_19172 = state_16293__$1;
(statearr_16315_19172[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (6))){
var state_16293__$1 = state_16293;
var statearr_16321_19173 = state_16293__$1;
(statearr_16321_19173[(2)] = null);

(statearr_16321_19173[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (17))){
var inst_16286 = (state_16293[(2)]);
var state_16293__$1 = (function (){var statearr_16331 = state_16293;
(statearr_16331[(10)] = inst_16286);

return statearr_16331;
})();
var statearr_16332_19174 = state_16293__$1;
(statearr_16332_19174[(2)] = null);

(statearr_16332_19174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (3))){
var inst_16291 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16293__$1,inst_16291);
} else {
if((state_val_16297 === (12))){
var _ = (function (){var statearr_16337 = state_16293;
(statearr_16337[(4)] = cljs.core.rest((state_16293[(4)])));

return statearr_16337;
})();
var state_16293__$1 = state_16293;
var ex16330 = (state_16293__$1[(2)]);
var statearr_16338_19177 = state_16293__$1;
(statearr_16338_19177[(5)] = ex16330);


if((ex16330 instanceof Object)){
var statearr_16340_19178 = state_16293__$1;
(statearr_16340_19178[(1)] = (11));

(statearr_16340_19178[(5)] = null);

} else {
throw ex16330;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (2))){
var inst_16239 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16240 = cnt;
var inst_16241 = (0);
var state_16293__$1 = (function (){var statearr_16352 = state_16293;
(statearr_16352[(7)] = inst_16240);

(statearr_16352[(11)] = inst_16239);

(statearr_16352[(8)] = inst_16241);

return statearr_16352;
})();
var statearr_16353_19181 = state_16293__$1;
(statearr_16353_19181[(2)] = null);

(statearr_16353_19181[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (11))){
var inst_16258 = (state_16293[(2)]);
var inst_16259 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16293__$1 = (function (){var statearr_16357 = state_16293;
(statearr_16357[(12)] = inst_16258);

return statearr_16357;
})();
var statearr_16358_19184 = state_16293__$1;
(statearr_16358_19184[(2)] = inst_16259);

(statearr_16358_19184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (9))){
var inst_16241 = (state_16293[(8)]);
var _ = (function (){var statearr_16359 = state_16293;
(statearr_16359[(4)] = cljs.core.cons((12),(state_16293[(4)])));

return statearr_16359;
})();
var inst_16265 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16241) : chs__$1.call(null,inst_16241));
var inst_16266 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16241) : done.call(null,inst_16241));
var inst_16267 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16265,inst_16266);
var ___$1 = (function (){var statearr_16368 = state_16293;
(statearr_16368[(4)] = cljs.core.rest((state_16293[(4)])));

return statearr_16368;
})();
var state_16293__$1 = state_16293;
var statearr_16375_19187 = state_16293__$1;
(statearr_16375_19187[(2)] = inst_16267);

(statearr_16375_19187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (5))){
var inst_16277 = (state_16293[(2)]);
var state_16293__$1 = (function (){var statearr_16376 = state_16293;
(statearr_16376[(13)] = inst_16277);

return statearr_16376;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16293__$1,(13),dchan);
} else {
if((state_val_16297 === (14))){
var inst_16282 = cljs.core.async.close_BANG_(out);
var state_16293__$1 = state_16293;
var statearr_16383_19194 = state_16293__$1;
(statearr_16383_19194[(2)] = inst_16282);

(statearr_16383_19194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (16))){
var inst_16289 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16388_19195 = state_16293__$1;
(statearr_16388_19195[(2)] = inst_16289);

(statearr_16388_19195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (10))){
var inst_16241 = (state_16293[(8)]);
var inst_16270 = (state_16293[(2)]);
var inst_16271 = (inst_16241 + (1));
var inst_16241__$1 = inst_16271;
var state_16293__$1 = (function (){var statearr_16389 = state_16293;
(statearr_16389[(8)] = inst_16241__$1);

(statearr_16389[(14)] = inst_16270);

return statearr_16389;
})();
var statearr_16392_19198 = state_16293__$1;
(statearr_16392_19198[(2)] = null);

(statearr_16392_19198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16297 === (8))){
var inst_16275 = (state_16293[(2)]);
var state_16293__$1 = state_16293;
var statearr_16393_19205 = state_16293__$1;
(statearr_16393_19205[(2)] = inst_16275);

(statearr_16393_19205[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_16410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16410[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_16410[(1)] = (1));

return statearr_16410;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_16293){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_16293);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e16411){var ex__12980__auto__ = e16411;
var statearr_16412_19211 = state_16293;
(statearr_16412_19211[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_16293[(4)]))){
var statearr_16419_19213 = state_16293;
(statearr_16419_19213[(1)] = cljs.core.first((state_16293[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19214 = state_16293;
state_16293 = G__19214;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_16293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_16293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_16420 = f__13913__auto__();
(statearr_16420[(6)] = c__13912__auto___19158);

return statearr_16420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16429 = arguments.length;
switch (G__16429) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13912__auto___19221 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_16481){
var state_val_16482 = (state_16481[(1)]);
if((state_val_16482 === (7))){
var inst_16450 = (state_16481[(7)]);
var inst_16449 = (state_16481[(8)]);
var inst_16449__$1 = (state_16481[(2)]);
var inst_16450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16449__$1,(0),null);
var inst_16451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16449__$1,(1),null);
var inst_16452 = (inst_16450__$1 == null);
var state_16481__$1 = (function (){var statearr_16492 = state_16481;
(statearr_16492[(7)] = inst_16450__$1);

(statearr_16492[(9)] = inst_16451);

(statearr_16492[(8)] = inst_16449__$1);

return statearr_16492;
})();
if(cljs.core.truth_(inst_16452)){
var statearr_16498_19226 = state_16481__$1;
(statearr_16498_19226[(1)] = (8));

} else {
var statearr_16499_19227 = state_16481__$1;
(statearr_16499_19227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16482 === (1))){
var inst_16439 = cljs.core.vec(chs);
var inst_16440 = inst_16439;
var state_16481__$1 = (function (){var statearr_16500 = state_16481;
(statearr_16500[(10)] = inst_16440);

return statearr_16500;
})();
var statearr_16501_19228 = state_16481__$1;
(statearr_16501_19228[(2)] = null);

(statearr_16501_19228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16482 === (4))){
var inst_16440 = (state_16481[(10)]);
var state_16481__$1 = state_16481;
return cljs.core.async.ioc_alts_BANG_(state_16481__$1,(7),inst_16440);
} else {
if((state_val_16482 === (6))){
var inst_16466 = (state_16481[(2)]);
var state_16481__$1 = state_16481;
var statearr_16502_19231 = state_16481__$1;
(statearr_16502_19231[(2)] = inst_16466);

(statearr_16502_19231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16482 === (3))){
var inst_16468 = (state_16481[(2)]);
var state_16481__$1 = state_16481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16481__$1,inst_16468);
} else {
if((state_val_16482 === (2))){
var inst_16440 = (state_16481[(10)]);
var inst_16442 = cljs.core.count(inst_16440);
var inst_16443 = (inst_16442 > (0));
var state_16481__$1 = state_16481;
if(cljs.core.truth_(inst_16443)){
var statearr_16517_19233 = state_16481__$1;
(statearr_16517_19233[(1)] = (4));

} else {
var statearr_16519_19234 = state_16481__$1;
(statearr_16519_19234[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16482 === (11))){
var inst_16440 = (state_16481[(10)]);
var inst_16459 = (state_16481[(2)]);
var tmp16503 = inst_16440;
var inst_16440__$1 = tmp16503;
var state_16481__$1 = (function (){var statearr_16521 = state_16481;
(statearr_16521[(10)] = inst_16440__$1);

(statearr_16521[(11)] = inst_16459);

return statearr_16521;
})();
var statearr_16522_19236 = state_16481__$1;
(statearr_16522_19236[(2)] = null);

(statearr_16522_19236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16482 === (9))){
var inst_16450 = (state_16481[(7)]);
var state_16481__$1 = state_16481;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16481__$1,(11),out,inst_16450);
} else {
if((state_val_16482 === (5))){
var inst_16464 = cljs.core.async.close_BANG_(out);
var state_16481__$1 = state_16481;
var statearr_16529_19241 = state_16481__$1;
(statearr_16529_19241[(2)] = inst_16464);

(statearr_16529_19241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16482 === (10))){
var inst_16462 = (state_16481[(2)]);
var state_16481__$1 = state_16481;
var statearr_16530_19242 = state_16481__$1;
(statearr_16530_19242[(2)] = inst_16462);

(statearr_16530_19242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16482 === (8))){
var inst_16450 = (state_16481[(7)]);
var inst_16451 = (state_16481[(9)]);
var inst_16449 = (state_16481[(8)]);
var inst_16440 = (state_16481[(10)]);
var inst_16454 = (function (){var cs = inst_16440;
var vec__16445 = inst_16449;
var v = inst_16450;
var c = inst_16451;
return (function (p1__16425_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16425_SHARP_);
});
})();
var inst_16455 = cljs.core.filterv(inst_16454,inst_16440);
var inst_16440__$1 = inst_16455;
var state_16481__$1 = (function (){var statearr_16533 = state_16481;
(statearr_16533[(10)] = inst_16440__$1);

return statearr_16533;
})();
var statearr_16534_19244 = state_16481__$1;
(statearr_16534_19244[(2)] = null);

(statearr_16534_19244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_16535 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16535[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_16535[(1)] = (1));

return statearr_16535;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_16481){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_16481);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e16536){var ex__12980__auto__ = e16536;
var statearr_16537_19250 = state_16481;
(statearr_16537_19250[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_16481[(4)]))){
var statearr_16538_19251 = state_16481;
(statearr_16538_19251[(1)] = cljs.core.first((state_16481[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19252 = state_16481;
state_16481 = G__19252;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_16481){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_16481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_16540 = f__13913__auto__();
(statearr_16540[(6)] = c__13912__auto___19221);

return statearr_16540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16551 = arguments.length;
switch (G__16551) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13912__auto___19261 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_16587){
var state_val_16588 = (state_16587[(1)]);
if((state_val_16588 === (7))){
var inst_16561 = (state_16587[(7)]);
var inst_16561__$1 = (state_16587[(2)]);
var inst_16568 = (inst_16561__$1 == null);
var inst_16569 = cljs.core.not(inst_16568);
var state_16587__$1 = (function (){var statearr_16595 = state_16587;
(statearr_16595[(7)] = inst_16561__$1);

return statearr_16595;
})();
if(inst_16569){
var statearr_16596_19265 = state_16587__$1;
(statearr_16596_19265[(1)] = (8));

} else {
var statearr_16598_19267 = state_16587__$1;
(statearr_16598_19267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (1))){
var inst_16553 = (0);
var state_16587__$1 = (function (){var statearr_16599 = state_16587;
(statearr_16599[(8)] = inst_16553);

return statearr_16599;
})();
var statearr_16600_19269 = state_16587__$1;
(statearr_16600_19269[(2)] = null);

(statearr_16600_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (4))){
var state_16587__$1 = state_16587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16587__$1,(7),ch);
} else {
if((state_val_16588 === (6))){
var inst_16582 = (state_16587[(2)]);
var state_16587__$1 = state_16587;
var statearr_16601_19272 = state_16587__$1;
(statearr_16601_19272[(2)] = inst_16582);

(statearr_16601_19272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (3))){
var inst_16584 = (state_16587[(2)]);
var inst_16585 = cljs.core.async.close_BANG_(out);
var state_16587__$1 = (function (){var statearr_16602 = state_16587;
(statearr_16602[(9)] = inst_16584);

return statearr_16602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16587__$1,inst_16585);
} else {
if((state_val_16588 === (2))){
var inst_16553 = (state_16587[(8)]);
var inst_16556 = (inst_16553 < n);
var state_16587__$1 = state_16587;
if(cljs.core.truth_(inst_16556)){
var statearr_16603_19277 = state_16587__$1;
(statearr_16603_19277[(1)] = (4));

} else {
var statearr_16604_19278 = state_16587__$1;
(statearr_16604_19278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (11))){
var inst_16553 = (state_16587[(8)]);
var inst_16574 = (state_16587[(2)]);
var inst_16575 = (inst_16553 + (1));
var inst_16553__$1 = inst_16575;
var state_16587__$1 = (function (){var statearr_16606 = state_16587;
(statearr_16606[(8)] = inst_16553__$1);

(statearr_16606[(10)] = inst_16574);

return statearr_16606;
})();
var statearr_16609_19281 = state_16587__$1;
(statearr_16609_19281[(2)] = null);

(statearr_16609_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (9))){
var state_16587__$1 = state_16587;
var statearr_16611_19282 = state_16587__$1;
(statearr_16611_19282[(2)] = null);

(statearr_16611_19282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (5))){
var state_16587__$1 = state_16587;
var statearr_16615_19284 = state_16587__$1;
(statearr_16615_19284[(2)] = null);

(statearr_16615_19284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (10))){
var inst_16579 = (state_16587[(2)]);
var state_16587__$1 = state_16587;
var statearr_16616_19285 = state_16587__$1;
(statearr_16616_19285[(2)] = inst_16579);

(statearr_16616_19285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16588 === (8))){
var inst_16561 = (state_16587[(7)]);
var state_16587__$1 = state_16587;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16587__$1,(11),out,inst_16561);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_16617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16617[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_16617[(1)] = (1));

return statearr_16617;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_16587){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_16587);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e16621){var ex__12980__auto__ = e16621;
var statearr_16622_19294 = state_16587;
(statearr_16622_19294[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_16587[(4)]))){
var statearr_16623_19295 = state_16587;
(statearr_16623_19295[(1)] = cljs.core.first((state_16587[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19297 = state_16587;
state_16587 = G__19297;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_16587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_16587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_16624 = f__13913__auto__();
(statearr_16624[(6)] = c__13912__auto___19261);

return statearr_16624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16645 = (function (f,ch,meta16630,_,fn1,meta16646){
this.f = f;
this.ch = ch;
this.meta16630 = meta16630;
this._ = _;
this.fn1 = fn1;
this.meta16646 = meta16646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16647,meta16646__$1){
var self__ = this;
var _16647__$1 = this;
return (new cljs.core.async.t_cljs$core$async16645(self__.f,self__.ch,self__.meta16630,self__._,self__.fn1,meta16646__$1));
}));

(cljs.core.async.t_cljs$core$async16645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16647){
var self__ = this;
var _16647__$1 = this;
return self__.meta16646;
}));

(cljs.core.async.t_cljs$core$async16645.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16645.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16625_SHARP_){
var G__16654 = (((p1__16625_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16625_SHARP_) : self__.f.call(null,p1__16625_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16654) : f1.call(null,G__16654));
});
}));

(cljs.core.async.t_cljs$core$async16645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16630","meta16630",2133149366,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16629","cljs.core.async/t_cljs$core$async16629",-690803957,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16646","meta16646",-435954199,null)], null);
}));

(cljs.core.async.t_cljs$core$async16645.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16645");

(cljs.core.async.t_cljs$core$async16645.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16645");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16645.
 */
cljs.core.async.__GT_t_cljs$core$async16645 = (function cljs$core$async$__GT_t_cljs$core$async16645(f,ch,meta16630,_,fn1,meta16646){
return (new cljs.core.async.t_cljs$core$async16645(f,ch,meta16630,_,fn1,meta16646));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16629 = (function (f,ch,meta16630){
this.f = f;
this.ch = ch;
this.meta16630 = meta16630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16631,meta16630__$1){
var self__ = this;
var _16631__$1 = this;
return (new cljs.core.async.t_cljs$core$async16629(self__.f,self__.ch,meta16630__$1));
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16631){
var self__ = this;
var _16631__$1 = this;
return self__.meta16630;
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16645(self__.f,self__.ch,self__.meta16630,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16659 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16659) : self__.f.call(null,G__16659));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16630","meta16630",2133149366,null)], null);
}));

(cljs.core.async.t_cljs$core$async16629.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16629");

(cljs.core.async.t_cljs$core$async16629.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16629");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16629.
 */
cljs.core.async.__GT_t_cljs$core$async16629 = (function cljs$core$async$__GT_t_cljs$core$async16629(f,ch,meta16630){
return (new cljs.core.async.t_cljs$core$async16629(f,ch,meta16630));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16629(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16660 = (function (f,ch,meta16661){
this.f = f;
this.ch = ch;
this.meta16661 = meta16661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16662,meta16661__$1){
var self__ = this;
var _16662__$1 = this;
return (new cljs.core.async.t_cljs$core$async16660(self__.f,self__.ch,meta16661__$1));
}));

(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16662){
var self__ = this;
var _16662__$1 = this;
return self__.meta16661;
}));

(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16661","meta16661",-1429176317,null)], null);
}));

(cljs.core.async.t_cljs$core$async16660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16660");

(cljs.core.async.t_cljs$core$async16660.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16660.
 */
cljs.core.async.__GT_t_cljs$core$async16660 = (function cljs$core$async$__GT_t_cljs$core$async16660(f,ch,meta16661){
return (new cljs.core.async.t_cljs$core$async16660(f,ch,meta16661));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16660(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16715 = (function (p,ch,meta16716){
this.p = p;
this.ch = ch;
this.meta16716 = meta16716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16717,meta16716__$1){
var self__ = this;
var _16717__$1 = this;
return (new cljs.core.async.t_cljs$core$async16715(self__.p,self__.ch,meta16716__$1));
}));

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16717){
var self__ = this;
var _16717__$1 = this;
return self__.meta16716;
}));

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16715.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16716","meta16716",45454857,null)], null);
}));

(cljs.core.async.t_cljs$core$async16715.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16715.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16715");

(cljs.core.async.t_cljs$core$async16715.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16715");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16715.
 */
cljs.core.async.__GT_t_cljs$core$async16715 = (function cljs$core$async$__GT_t_cljs$core$async16715(p,ch,meta16716){
return (new cljs.core.async.t_cljs$core$async16715(p,ch,meta16716));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16715(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16790 = arguments.length;
switch (G__16790) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13912__auto___19357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_16827){
var state_val_16828 = (state_16827[(1)]);
if((state_val_16828 === (7))){
var inst_16821 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
var statearr_16836_19362 = state_16827__$1;
(statearr_16836_19362[(2)] = inst_16821);

(statearr_16836_19362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (1))){
var state_16827__$1 = state_16827;
var statearr_16837_19363 = state_16827__$1;
(statearr_16837_19363[(2)] = null);

(statearr_16837_19363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (4))){
var inst_16804 = (state_16827[(7)]);
var inst_16804__$1 = (state_16827[(2)]);
var inst_16807 = (inst_16804__$1 == null);
var state_16827__$1 = (function (){var statearr_16841 = state_16827;
(statearr_16841[(7)] = inst_16804__$1);

return statearr_16841;
})();
if(cljs.core.truth_(inst_16807)){
var statearr_16842_19368 = state_16827__$1;
(statearr_16842_19368[(1)] = (5));

} else {
var statearr_16843_19371 = state_16827__$1;
(statearr_16843_19371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (6))){
var inst_16804 = (state_16827[(7)]);
var inst_16812 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16804) : p.call(null,inst_16804));
var state_16827__$1 = state_16827;
if(cljs.core.truth_(inst_16812)){
var statearr_16845_19376 = state_16827__$1;
(statearr_16845_19376[(1)] = (8));

} else {
var statearr_16846_19377 = state_16827__$1;
(statearr_16846_19377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (3))){
var inst_16823 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16827__$1,inst_16823);
} else {
if((state_val_16828 === (2))){
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16827__$1,(4),ch);
} else {
if((state_val_16828 === (11))){
var inst_16815 = (state_16827[(2)]);
var state_16827__$1 = state_16827;
var statearr_16847_19393 = state_16827__$1;
(statearr_16847_19393[(2)] = inst_16815);

(statearr_16847_19393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (9))){
var state_16827__$1 = state_16827;
var statearr_16848_19400 = state_16827__$1;
(statearr_16848_19400[(2)] = null);

(statearr_16848_19400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (5))){
var inst_16810 = cljs.core.async.close_BANG_(out);
var state_16827__$1 = state_16827;
var statearr_16849_19413 = state_16827__$1;
(statearr_16849_19413[(2)] = inst_16810);

(statearr_16849_19413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (10))){
var inst_16818 = (state_16827[(2)]);
var state_16827__$1 = (function (){var statearr_16850 = state_16827;
(statearr_16850[(8)] = inst_16818);

return statearr_16850;
})();
var statearr_16851_19425 = state_16827__$1;
(statearr_16851_19425[(2)] = null);

(statearr_16851_19425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16828 === (8))){
var inst_16804 = (state_16827[(7)]);
var state_16827__$1 = state_16827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16827__$1,(11),out,inst_16804);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_16854 = [null,null,null,null,null,null,null,null,null];
(statearr_16854[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_16854[(1)] = (1));

return statearr_16854;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_16827){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_16827);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e16855){var ex__12980__auto__ = e16855;
var statearr_16856_19459 = state_16827;
(statearr_16856_19459[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_16827[(4)]))){
var statearr_16857_19468 = state_16827;
(statearr_16857_19468[(1)] = cljs.core.first((state_16827[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19469 = state_16827;
state_16827 = G__19469;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_16827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_16827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_16867 = f__13913__auto__();
(statearr_16867[(6)] = c__13912__auto___19357);

return statearr_16867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16869 = arguments.length;
switch (G__16869) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13912__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_16968){
var state_val_16969 = (state_16968[(1)]);
if((state_val_16969 === (7))){
var inst_16957 = (state_16968[(2)]);
var state_16968__$1 = state_16968;
var statearr_16976_19494 = state_16968__$1;
(statearr_16976_19494[(2)] = inst_16957);

(statearr_16976_19494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (20))){
var inst_16918 = (state_16968[(7)]);
var inst_16929 = (state_16968[(2)]);
var inst_16931 = cljs.core.next(inst_16918);
var inst_16904 = inst_16931;
var inst_16905 = null;
var inst_16906 = (0);
var inst_16907 = (0);
var state_16968__$1 = (function (){var statearr_16980 = state_16968;
(statearr_16980[(8)] = inst_16907);

(statearr_16980[(9)] = inst_16906);

(statearr_16980[(10)] = inst_16905);

(statearr_16980[(11)] = inst_16904);

(statearr_16980[(12)] = inst_16929);

return statearr_16980;
})();
var statearr_16982_19501 = state_16968__$1;
(statearr_16982_19501[(2)] = null);

(statearr_16982_19501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (1))){
var state_16968__$1 = state_16968;
var statearr_16984_19503 = state_16968__$1;
(statearr_16984_19503[(2)] = null);

(statearr_16984_19503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (4))){
var inst_16881 = (state_16968[(13)]);
var inst_16881__$1 = (state_16968[(2)]);
var inst_16884 = (inst_16881__$1 == null);
var state_16968__$1 = (function (){var statearr_16989 = state_16968;
(statearr_16989[(13)] = inst_16881__$1);

return statearr_16989;
})();
if(cljs.core.truth_(inst_16884)){
var statearr_16990_19510 = state_16968__$1;
(statearr_16990_19510[(1)] = (5));

} else {
var statearr_16991_19511 = state_16968__$1;
(statearr_16991_19511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (15))){
var state_16968__$1 = state_16968;
var statearr_17001_19513 = state_16968__$1;
(statearr_17001_19513[(2)] = null);

(statearr_17001_19513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (21))){
var state_16968__$1 = state_16968;
var statearr_17008_19514 = state_16968__$1;
(statearr_17008_19514[(2)] = null);

(statearr_17008_19514[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (13))){
var inst_16907 = (state_16968[(8)]);
var inst_16906 = (state_16968[(9)]);
var inst_16905 = (state_16968[(10)]);
var inst_16904 = (state_16968[(11)]);
var inst_16914 = (state_16968[(2)]);
var inst_16915 = (inst_16907 + (1));
var tmp16996 = inst_16906;
var tmp16997 = inst_16905;
var tmp16998 = inst_16904;
var inst_16904__$1 = tmp16998;
var inst_16905__$1 = tmp16997;
var inst_16906__$1 = tmp16996;
var inst_16907__$1 = inst_16915;
var state_16968__$1 = (function (){var statearr_17014 = state_16968;
(statearr_17014[(8)] = inst_16907__$1);

(statearr_17014[(9)] = inst_16906__$1);

(statearr_17014[(10)] = inst_16905__$1);

(statearr_17014[(11)] = inst_16904__$1);

(statearr_17014[(14)] = inst_16914);

return statearr_17014;
})();
var statearr_17019_19535 = state_16968__$1;
(statearr_17019_19535[(2)] = null);

(statearr_17019_19535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (22))){
var state_16968__$1 = state_16968;
var statearr_17024_19542 = state_16968__$1;
(statearr_17024_19542[(2)] = null);

(statearr_17024_19542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (6))){
var inst_16881 = (state_16968[(13)]);
var inst_16902 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16881) : f.call(null,inst_16881));
var inst_16903 = cljs.core.seq(inst_16902);
var inst_16904 = inst_16903;
var inst_16905 = null;
var inst_16906 = (0);
var inst_16907 = (0);
var state_16968__$1 = (function (){var statearr_17025 = state_16968;
(statearr_17025[(8)] = inst_16907);

(statearr_17025[(9)] = inst_16906);

(statearr_17025[(10)] = inst_16905);

(statearr_17025[(11)] = inst_16904);

return statearr_17025;
})();
var statearr_17026_19558 = state_16968__$1;
(statearr_17026_19558[(2)] = null);

(statearr_17026_19558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (17))){
var inst_16918 = (state_16968[(7)]);
var inst_16922 = cljs.core.chunk_first(inst_16918);
var inst_16923 = cljs.core.chunk_rest(inst_16918);
var inst_16924 = cljs.core.count(inst_16922);
var inst_16904 = inst_16923;
var inst_16905 = inst_16922;
var inst_16906 = inst_16924;
var inst_16907 = (0);
var state_16968__$1 = (function (){var statearr_17034 = state_16968;
(statearr_17034[(8)] = inst_16907);

(statearr_17034[(9)] = inst_16906);

(statearr_17034[(10)] = inst_16905);

(statearr_17034[(11)] = inst_16904);

return statearr_17034;
})();
var statearr_17041_19577 = state_16968__$1;
(statearr_17041_19577[(2)] = null);

(statearr_17041_19577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (3))){
var inst_16959 = (state_16968[(2)]);
var state_16968__$1 = state_16968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16968__$1,inst_16959);
} else {
if((state_val_16969 === (12))){
var inst_16943 = (state_16968[(2)]);
var state_16968__$1 = state_16968;
var statearr_17053_19582 = state_16968__$1;
(statearr_17053_19582[(2)] = inst_16943);

(statearr_17053_19582[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (2))){
var state_16968__$1 = state_16968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16968__$1,(4),in$);
} else {
if((state_val_16969 === (23))){
var inst_16955 = (state_16968[(2)]);
var state_16968__$1 = state_16968;
var statearr_17060_19585 = state_16968__$1;
(statearr_17060_19585[(2)] = inst_16955);

(statearr_17060_19585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (19))){
var inst_16938 = (state_16968[(2)]);
var state_16968__$1 = state_16968;
var statearr_17064_19586 = state_16968__$1;
(statearr_17064_19586[(2)] = inst_16938);

(statearr_17064_19586[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (11))){
var inst_16904 = (state_16968[(11)]);
var inst_16918 = (state_16968[(7)]);
var inst_16918__$1 = cljs.core.seq(inst_16904);
var state_16968__$1 = (function (){var statearr_17070 = state_16968;
(statearr_17070[(7)] = inst_16918__$1);

return statearr_17070;
})();
if(inst_16918__$1){
var statearr_17073_19589 = state_16968__$1;
(statearr_17073_19589[(1)] = (14));

} else {
var statearr_17074_19590 = state_16968__$1;
(statearr_17074_19590[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (9))){
var inst_16945 = (state_16968[(2)]);
var inst_16946 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16968__$1 = (function (){var statearr_17079 = state_16968;
(statearr_17079[(15)] = inst_16945);

return statearr_17079;
})();
if(cljs.core.truth_(inst_16946)){
var statearr_17081_19591 = state_16968__$1;
(statearr_17081_19591[(1)] = (21));

} else {
var statearr_17082_19592 = state_16968__$1;
(statearr_17082_19592[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (5))){
var inst_16886 = cljs.core.async.close_BANG_(out);
var state_16968__$1 = state_16968;
var statearr_17093_19595 = state_16968__$1;
(statearr_17093_19595[(2)] = inst_16886);

(statearr_17093_19595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (14))){
var inst_16918 = (state_16968[(7)]);
var inst_16920 = cljs.core.chunked_seq_QMARK_(inst_16918);
var state_16968__$1 = state_16968;
if(inst_16920){
var statearr_17100_19601 = state_16968__$1;
(statearr_17100_19601[(1)] = (17));

} else {
var statearr_17105_19602 = state_16968__$1;
(statearr_17105_19602[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (16))){
var inst_16941 = (state_16968[(2)]);
var state_16968__$1 = state_16968;
var statearr_17110_19603 = state_16968__$1;
(statearr_17110_19603[(2)] = inst_16941);

(statearr_17110_19603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16969 === (10))){
var inst_16907 = (state_16968[(8)]);
var inst_16905 = (state_16968[(10)]);
var inst_16912 = cljs.core._nth(inst_16905,inst_16907);
var state_16968__$1 = state_16968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16968__$1,(13),out,inst_16912);
} else {
if((state_val_16969 === (18))){
var inst_16918 = (state_16968[(7)]);
var inst_16927 = cljs.core.first(inst_16918);
var state_16968__$1 = state_16968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16968__$1,(20),out,inst_16927);
} else {
if((state_val_16969 === (8))){
var inst_16907 = (state_16968[(8)]);
var inst_16906 = (state_16968[(9)]);
var inst_16909 = (inst_16907 < inst_16906);
var inst_16910 = inst_16909;
var state_16968__$1 = state_16968;
if(cljs.core.truth_(inst_16910)){
var statearr_17136_19613 = state_16968__$1;
(statearr_17136_19613[(1)] = (10));

} else {
var statearr_17139_19614 = state_16968__$1;
(statearr_17139_19614[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12977__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12977__auto____0 = (function (){
var statearr_17144 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17144[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12977__auto__);

(statearr_17144[(1)] = (1));

return statearr_17144;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12977__auto____1 = (function (state_16968){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_16968);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e17145){var ex__12980__auto__ = e17145;
var statearr_17146_19617 = state_16968;
(statearr_17146_19617[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_16968[(4)]))){
var statearr_17159_19618 = state_16968;
(statearr_17159_19618[(1)] = cljs.core.first((state_16968[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19622 = state_16968;
state_16968 = G__19622;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12977__auto__ = function(state_16968){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12977__auto____1.call(this,state_16968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12977__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12977__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_17166 = f__13913__auto__();
(statearr_17166[(6)] = c__13912__auto__);

return statearr_17166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));

return c__13912__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17171 = arguments.length;
switch (G__17171) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17186 = arguments.length;
switch (G__17186) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17198 = arguments.length;
switch (G__17198) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13912__auto___19637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_17242){
var state_val_17243 = (state_17242[(1)]);
if((state_val_17243 === (7))){
var inst_17237 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17249_19639 = state_17242__$1;
(statearr_17249_19639[(2)] = inst_17237);

(statearr_17249_19639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (1))){
var inst_17212 = null;
var state_17242__$1 = (function (){var statearr_17251 = state_17242;
(statearr_17251[(7)] = inst_17212);

return statearr_17251;
})();
var statearr_17252_19641 = state_17242__$1;
(statearr_17252_19641[(2)] = null);

(statearr_17252_19641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (4))){
var inst_17215 = (state_17242[(8)]);
var inst_17215__$1 = (state_17242[(2)]);
var inst_17217 = (inst_17215__$1 == null);
var inst_17221 = cljs.core.not(inst_17217);
var state_17242__$1 = (function (){var statearr_17265 = state_17242;
(statearr_17265[(8)] = inst_17215__$1);

return statearr_17265;
})();
if(inst_17221){
var statearr_17266_19644 = state_17242__$1;
(statearr_17266_19644[(1)] = (5));

} else {
var statearr_17267_19645 = state_17242__$1;
(statearr_17267_19645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (6))){
var state_17242__$1 = state_17242;
var statearr_17274_19646 = state_17242__$1;
(statearr_17274_19646[(2)] = null);

(statearr_17274_19646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (3))){
var inst_17239 = (state_17242[(2)]);
var inst_17240 = cljs.core.async.close_BANG_(out);
var state_17242__$1 = (function (){var statearr_17279 = state_17242;
(statearr_17279[(9)] = inst_17239);

return statearr_17279;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17242__$1,inst_17240);
} else {
if((state_val_17243 === (2))){
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17242__$1,(4),ch);
} else {
if((state_val_17243 === (11))){
var inst_17215 = (state_17242[(8)]);
var inst_17231 = (state_17242[(2)]);
var inst_17212 = inst_17215;
var state_17242__$1 = (function (){var statearr_17287 = state_17242;
(statearr_17287[(10)] = inst_17231);

(statearr_17287[(7)] = inst_17212);

return statearr_17287;
})();
var statearr_17288_19654 = state_17242__$1;
(statearr_17288_19654[(2)] = null);

(statearr_17288_19654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (9))){
var inst_17215 = (state_17242[(8)]);
var state_17242__$1 = state_17242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17242__$1,(11),out,inst_17215);
} else {
if((state_val_17243 === (5))){
var inst_17215 = (state_17242[(8)]);
var inst_17212 = (state_17242[(7)]);
var inst_17226 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17215,inst_17212);
var state_17242__$1 = state_17242;
if(inst_17226){
var statearr_17292_19663 = state_17242__$1;
(statearr_17292_19663[(1)] = (8));

} else {
var statearr_17293_19667 = state_17242__$1;
(statearr_17293_19667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (10))){
var inst_17234 = (state_17242[(2)]);
var state_17242__$1 = state_17242;
var statearr_17297_19690 = state_17242__$1;
(statearr_17297_19690[(2)] = inst_17234);

(statearr_17297_19690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17243 === (8))){
var inst_17212 = (state_17242[(7)]);
var tmp17289 = inst_17212;
var inst_17212__$1 = tmp17289;
var state_17242__$1 = (function (){var statearr_17298 = state_17242;
(statearr_17298[(7)] = inst_17212__$1);

return statearr_17298;
})();
var statearr_17299_19692 = state_17242__$1;
(statearr_17299_19692[(2)] = null);

(statearr_17299_19692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_17304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17304[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_17304[(1)] = (1));

return statearr_17304;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_17242){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_17242);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e17305){var ex__12980__auto__ = e17305;
var statearr_17306_19693 = state_17242;
(statearr_17306_19693[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_17242[(4)]))){
var statearr_17310_19694 = state_17242;
(statearr_17310_19694[(1)] = cljs.core.first((state_17242[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19700 = state_17242;
state_17242 = G__19700;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_17242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_17242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_17319 = f__13913__auto__();
(statearr_17319[(6)] = c__13912__auto___19637);

return statearr_17319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17324 = arguments.length;
switch (G__17324) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13912__auto___19716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_17380){
var state_val_17381 = (state_17380[(1)]);
if((state_val_17381 === (7))){
var inst_17374 = (state_17380[(2)]);
var state_17380__$1 = state_17380;
var statearr_17389_19717 = state_17380__$1;
(statearr_17389_19717[(2)] = inst_17374);

(statearr_17389_19717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (1))){
var inst_17334 = (new Array(n));
var inst_17335 = inst_17334;
var inst_17336 = (0);
var state_17380__$1 = (function (){var statearr_17398 = state_17380;
(statearr_17398[(7)] = inst_17335);

(statearr_17398[(8)] = inst_17336);

return statearr_17398;
})();
var statearr_17399_19720 = state_17380__$1;
(statearr_17399_19720[(2)] = null);

(statearr_17399_19720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (4))){
var inst_17341 = (state_17380[(9)]);
var inst_17341__$1 = (state_17380[(2)]);
var inst_17345 = (inst_17341__$1 == null);
var inst_17346 = cljs.core.not(inst_17345);
var state_17380__$1 = (function (){var statearr_17405 = state_17380;
(statearr_17405[(9)] = inst_17341__$1);

return statearr_17405;
})();
if(inst_17346){
var statearr_17406_19721 = state_17380__$1;
(statearr_17406_19721[(1)] = (5));

} else {
var statearr_17407_19725 = state_17380__$1;
(statearr_17407_19725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (15))){
var inst_17368 = (state_17380[(2)]);
var state_17380__$1 = state_17380;
var statearr_17409_19727 = state_17380__$1;
(statearr_17409_19727[(2)] = inst_17368);

(statearr_17409_19727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (13))){
var state_17380__$1 = state_17380;
var statearr_17410_19729 = state_17380__$1;
(statearr_17410_19729[(2)] = null);

(statearr_17410_19729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (6))){
var inst_17336 = (state_17380[(8)]);
var inst_17364 = (inst_17336 > (0));
var state_17380__$1 = state_17380;
if(cljs.core.truth_(inst_17364)){
var statearr_17415_19730 = state_17380__$1;
(statearr_17415_19730[(1)] = (12));

} else {
var statearr_17416_19731 = state_17380__$1;
(statearr_17416_19731[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (3))){
var inst_17376 = (state_17380[(2)]);
var state_17380__$1 = state_17380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17380__$1,inst_17376);
} else {
if((state_val_17381 === (12))){
var inst_17335 = (state_17380[(7)]);
var inst_17366 = cljs.core.vec(inst_17335);
var state_17380__$1 = state_17380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17380__$1,(15),out,inst_17366);
} else {
if((state_val_17381 === (2))){
var state_17380__$1 = state_17380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17380__$1,(4),ch);
} else {
if((state_val_17381 === (11))){
var inst_17358 = (state_17380[(2)]);
var inst_17359 = (new Array(n));
var inst_17335 = inst_17359;
var inst_17336 = (0);
var state_17380__$1 = (function (){var statearr_17422 = state_17380;
(statearr_17422[(7)] = inst_17335);

(statearr_17422[(8)] = inst_17336);

(statearr_17422[(10)] = inst_17358);

return statearr_17422;
})();
var statearr_17425_19734 = state_17380__$1;
(statearr_17425_19734[(2)] = null);

(statearr_17425_19734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (9))){
var inst_17335 = (state_17380[(7)]);
var inst_17356 = cljs.core.vec(inst_17335);
var state_17380__$1 = state_17380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17380__$1,(11),out,inst_17356);
} else {
if((state_val_17381 === (5))){
var inst_17335 = (state_17380[(7)]);
var inst_17336 = (state_17380[(8)]);
var inst_17341 = (state_17380[(9)]);
var inst_17351 = (state_17380[(11)]);
var inst_17350 = (inst_17335[inst_17336] = inst_17341);
var inst_17351__$1 = (inst_17336 + (1));
var inst_17352 = (inst_17351__$1 < n);
var state_17380__$1 = (function (){var statearr_17433 = state_17380;
(statearr_17433[(12)] = inst_17350);

(statearr_17433[(11)] = inst_17351__$1);

return statearr_17433;
})();
if(cljs.core.truth_(inst_17352)){
var statearr_17438_19741 = state_17380__$1;
(statearr_17438_19741[(1)] = (8));

} else {
var statearr_17439_19742 = state_17380__$1;
(statearr_17439_19742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (14))){
var inst_17371 = (state_17380[(2)]);
var inst_17372 = cljs.core.async.close_BANG_(out);
var state_17380__$1 = (function (){var statearr_17442 = state_17380;
(statearr_17442[(13)] = inst_17371);

return statearr_17442;
})();
var statearr_17443_19744 = state_17380__$1;
(statearr_17443_19744[(2)] = inst_17372);

(statearr_17443_19744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (10))){
var inst_17362 = (state_17380[(2)]);
var state_17380__$1 = state_17380;
var statearr_17444_19745 = state_17380__$1;
(statearr_17444_19745[(2)] = inst_17362);

(statearr_17444_19745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17381 === (8))){
var inst_17335 = (state_17380[(7)]);
var inst_17351 = (state_17380[(11)]);
var tmp17441 = inst_17335;
var inst_17335__$1 = tmp17441;
var inst_17336 = inst_17351;
var state_17380__$1 = (function (){var statearr_17450 = state_17380;
(statearr_17450[(7)] = inst_17335__$1);

(statearr_17450[(8)] = inst_17336);

return statearr_17450;
})();
var statearr_17451_19746 = state_17380__$1;
(statearr_17451_19746[(2)] = null);

(statearr_17451_19746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_17455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17455[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_17455[(1)] = (1));

return statearr_17455;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_17380){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_17380);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e17459){var ex__12980__auto__ = e17459;
var statearr_17461_19752 = state_17380;
(statearr_17461_19752[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_17380[(4)]))){
var statearr_17462_19753 = state_17380;
(statearr_17462_19753[(1)] = cljs.core.first((state_17380[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19754 = state_17380;
state_17380 = G__19754;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_17380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_17380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_17472 = f__13913__auto__();
(statearr_17472[(6)] = c__13912__auto___19716);

return statearr_17472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17485 = arguments.length;
switch (G__17485) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13912__auto___19760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13913__auto__ = (function (){var switch__12976__auto__ = (function (state_17555){
var state_val_17556 = (state_17555[(1)]);
if((state_val_17556 === (7))){
var inst_17549 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17565_19764 = state_17555__$1;
(statearr_17565_19764[(2)] = inst_17549);

(statearr_17565_19764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (1))){
var inst_17492 = [];
var inst_17496 = inst_17492;
var inst_17498 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17555__$1 = (function (){var statearr_17577 = state_17555;
(statearr_17577[(7)] = inst_17498);

(statearr_17577[(8)] = inst_17496);

return statearr_17577;
})();
var statearr_17582_19769 = state_17555__$1;
(statearr_17582_19769[(2)] = null);

(statearr_17582_19769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (4))){
var inst_17501 = (state_17555[(9)]);
var inst_17501__$1 = (state_17555[(2)]);
var inst_17504 = (inst_17501__$1 == null);
var inst_17505 = cljs.core.not(inst_17504);
var state_17555__$1 = (function (){var statearr_17586 = state_17555;
(statearr_17586[(9)] = inst_17501__$1);

return statearr_17586;
})();
if(inst_17505){
var statearr_17587_19773 = state_17555__$1;
(statearr_17587_19773[(1)] = (5));

} else {
var statearr_17588_19774 = state_17555__$1;
(statearr_17588_19774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (15))){
var inst_17496 = (state_17555[(8)]);
var inst_17534 = cljs.core.vec(inst_17496);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17555__$1,(18),out,inst_17534);
} else {
if((state_val_17556 === (13))){
var inst_17528 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17601_19775 = state_17555__$1;
(statearr_17601_19775[(2)] = inst_17528);

(statearr_17601_19775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (6))){
var inst_17496 = (state_17555[(8)]);
var inst_17530 = inst_17496.length;
var inst_17531 = (inst_17530 > (0));
var state_17555__$1 = state_17555;
if(cljs.core.truth_(inst_17531)){
var statearr_17606_19780 = state_17555__$1;
(statearr_17606_19780[(1)] = (15));

} else {
var statearr_17610_19781 = state_17555__$1;
(statearr_17610_19781[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (17))){
var inst_17540 = (state_17555[(2)]);
var inst_17547 = cljs.core.async.close_BANG_(out);
var state_17555__$1 = (function (){var statearr_17619 = state_17555;
(statearr_17619[(10)] = inst_17540);

return statearr_17619;
})();
var statearr_17626_19784 = state_17555__$1;
(statearr_17626_19784[(2)] = inst_17547);

(statearr_17626_19784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (3))){
var inst_17551 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17555__$1,inst_17551);
} else {
if((state_val_17556 === (12))){
var inst_17496 = (state_17555[(8)]);
var inst_17520 = cljs.core.vec(inst_17496);
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17555__$1,(14),out,inst_17520);
} else {
if((state_val_17556 === (2))){
var state_17555__$1 = state_17555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17555__$1,(4),ch);
} else {
if((state_val_17556 === (11))){
var inst_17508 = (state_17555[(11)]);
var inst_17501 = (state_17555[(9)]);
var inst_17496 = (state_17555[(8)]);
var inst_17517 = inst_17496.push(inst_17501);
var tmp17633 = inst_17496;
var inst_17496__$1 = tmp17633;
var inst_17498 = inst_17508;
var state_17555__$1 = (function (){var statearr_17646 = state_17555;
(statearr_17646[(12)] = inst_17517);

(statearr_17646[(7)] = inst_17498);

(statearr_17646[(8)] = inst_17496__$1);

return statearr_17646;
})();
var statearr_17648_19787 = state_17555__$1;
(statearr_17648_19787[(2)] = null);

(statearr_17648_19787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (9))){
var inst_17498 = (state_17555[(7)]);
var inst_17513 = cljs.core.keyword_identical_QMARK_(inst_17498,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17555__$1 = state_17555;
var statearr_17649_19788 = state_17555__$1;
(statearr_17649_19788[(2)] = inst_17513);

(statearr_17649_19788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (5))){
var inst_17508 = (state_17555[(11)]);
var inst_17509 = (state_17555[(13)]);
var inst_17498 = (state_17555[(7)]);
var inst_17501 = (state_17555[(9)]);
var inst_17508__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17501) : f.call(null,inst_17501));
var inst_17509__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17508__$1,inst_17498);
var state_17555__$1 = (function (){var statearr_17655 = state_17555;
(statearr_17655[(11)] = inst_17508__$1);

(statearr_17655[(13)] = inst_17509__$1);

return statearr_17655;
})();
if(inst_17509__$1){
var statearr_17656_19802 = state_17555__$1;
(statearr_17656_19802[(1)] = (8));

} else {
var statearr_17657_19803 = state_17555__$1;
(statearr_17657_19803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (14))){
var inst_17508 = (state_17555[(11)]);
var inst_17501 = (state_17555[(9)]);
var inst_17522 = (state_17555[(2)]);
var inst_17523 = [];
var inst_17524 = inst_17523.push(inst_17501);
var inst_17496 = inst_17523;
var inst_17498 = inst_17508;
var state_17555__$1 = (function (){var statearr_17667 = state_17555;
(statearr_17667[(14)] = inst_17524);

(statearr_17667[(15)] = inst_17522);

(statearr_17667[(7)] = inst_17498);

(statearr_17667[(8)] = inst_17496);

return statearr_17667;
})();
var statearr_17668_19804 = state_17555__$1;
(statearr_17668_19804[(2)] = null);

(statearr_17668_19804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (16))){
var state_17555__$1 = state_17555;
var statearr_17673_19805 = state_17555__$1;
(statearr_17673_19805[(2)] = null);

(statearr_17673_19805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (10))){
var inst_17515 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
if(cljs.core.truth_(inst_17515)){
var statearr_17680_19810 = state_17555__$1;
(statearr_17680_19810[(1)] = (11));

} else {
var statearr_17681_19811 = state_17555__$1;
(statearr_17681_19811[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (18))){
var inst_17536 = (state_17555[(2)]);
var state_17555__$1 = state_17555;
var statearr_17682_19815 = state_17555__$1;
(statearr_17682_19815[(2)] = inst_17536);

(statearr_17682_19815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17556 === (8))){
var inst_17509 = (state_17555[(13)]);
var state_17555__$1 = state_17555;
var statearr_17688_19817 = state_17555__$1;
(statearr_17688_19817[(2)] = inst_17509);

(statearr_17688_19817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__12977__auto__ = null;
var cljs$core$async$state_machine__12977__auto____0 = (function (){
var statearr_17689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17689[(0)] = cljs$core$async$state_machine__12977__auto__);

(statearr_17689[(1)] = (1));

return statearr_17689;
});
var cljs$core$async$state_machine__12977__auto____1 = (function (state_17555){
while(true){
var ret_value__12978__auto__ = (function (){try{while(true){
var result__12979__auto__ = switch__12976__auto__(state_17555);
if(cljs.core.keyword_identical_QMARK_(result__12979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12979__auto__;
}
break;
}
}catch (e17694){var ex__12980__auto__ = e17694;
var statearr_17699_19830 = state_17555;
(statearr_17699_19830[(2)] = ex__12980__auto__);


if(cljs.core.seq((state_17555[(4)]))){
var statearr_17704_19834 = state_17555;
(statearr_17704_19834[(1)] = cljs.core.first((state_17555[(4)])));

} else {
throw ex__12980__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19839 = state_17555;
state_17555 = G__19839;
continue;
} else {
return ret_value__12978__auto__;
}
break;
}
});
cljs$core$async$state_machine__12977__auto__ = function(state_17555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12977__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12977__auto____1.call(this,state_17555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12977__auto____0;
cljs$core$async$state_machine__12977__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12977__auto____1;
return cljs$core$async$state_machine__12977__auto__;
})()
})();
var state__13914__auto__ = (function (){var statearr_17706 = f__13913__auto__();
(statearr_17706[(6)] = c__13912__auto___19760);

return statearr_17706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13914__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
