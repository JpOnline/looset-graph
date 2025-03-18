goog.provide('quadtree_cljc.core');
/**
 * Returns a map representing a quadtree
 */
quadtree_cljc.core.__GT_quadtree = (function quadtree_cljc$core$__GT_quadtree(var_args){
var G__23302 = arguments.length;
switch (G__23302) {
case 3:
return quadtree_cljc.core.__GT_quadtree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return quadtree_cljc.core.__GT_quadtree.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(quadtree_cljc.core.__GT_quadtree.cljs$core$IFn$_invoke$arity$3 = (function (bounds,max_objects,max_levels){
return quadtree_cljc.core.__GT_quadtree.cljs$core$IFn$_invoke$arity$6(bounds,max_objects,max_levels,(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(quadtree_cljc.core.__GT_quadtree.cljs$core$IFn$_invoke$arity$6 = (function (bounds,max_objects,max_levels,level,objects,nodes){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"max-objects","max-objects",-441889834),max_objects,new cljs.core.Keyword(null,"max-levels","max-levels",-1678360932),max_levels,new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"objects","objects",2099713734),objects,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null);
}));

(quadtree_cljc.core.__GT_quadtree.cljs$lang$maxFixedArity = 6);

/**
 * Returns a map representing a bounding box
 */
quadtree_cljc.core.__GT_bounds = (function quadtree_cljc$core$__GT_bounds(x,y,width,height){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null);
});
/**
 * Returns the total number of sub-trees in `quadtree`. Valid
 *   sub-trees have a vector as their value to the parent's :nodes
 *   keyword.
 */
quadtree_cljc.core.total_nodes = (function quadtree_cljc$core$total_nodes(quadtree){
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(quadtree);
if(cljs.core.vector_QMARK_(nodes)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(1),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(quadtree_cljc.core.total_nodes,nodes));
} else {
return (0);
}
});
/**
 * Splits a `quadtree` created with `->quadtree` into
 *   4 sub-nodes returns `quadtree` if this quadtree already
 *   has four nodes. Returns nil if you passed the wrong type
 *   or doesn't have the required keywords.
 */
quadtree_cljc.core.split = (function quadtree_cljc$core$split(quadtree){
var map__23305 = quadtree;
var map__23305__$1 = cljs.core.__destructure_map(map__23305);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23305__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var map__23306 = bounds;
var map__23306__$1 = cljs.core.__destructure_map(map__23306);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23306__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var next_level = (level + (1));
var sub_width = (width / (2));
var sub_height = (height / (2));
var sub_quadtree = (function quadtree_cljc$core$split_$_sub_quadtree(quadtree__$1,x__$1,y__$1,width__$1,height__$1,level__$1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quadtree__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x__$1,new cljs.core.Keyword(null,"y","y",-1757859776),y__$1,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height__$1], null),new cljs.core.Keyword(null,"level","level",1290497552),level__$1,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentVector.EMPTY], null)], 0));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(nodes),(4))){
return quadtree;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(quadtree,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub_quadtree(quadtree,(x + sub_width),y,sub_width,sub_height,next_level),sub_quadtree(quadtree,x,y,sub_width,sub_height,next_level),sub_quadtree(quadtree,x,(y + sub_height),sub_width,sub_height,next_level),sub_quadtree(quadtree,(x + sub_width),(y + sub_height),sub_width,sub_height,next_level)], null));
}
});
/**
 * Determine the quadrant `bounds-obj` belongs to in `quadtree`
 */
quadtree_cljc.core.get_quadrant = (function quadtree_cljc$core$get_quadrant(quadtree,bounds_obj){
var default$ = (-1);
var qt_bounds = new cljs.core.Keyword(null,"bounds","bounds",1691609455).cljs$core$IFn$_invoke$arity$1(quadtree);
var map__23311 = qt_bounds;
var map__23311__$1 = cljs.core.__destructure_map(map__23311);
var qt_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23311__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var qt_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23311__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var qt_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23311__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var qt_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23311__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__23312 = bounds_obj;
var map__23312__$1 = cljs.core.__destructure_map(map__23312);
var obj_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var obj_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var obj_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var obj_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23312__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vertical_midpoint = (qt_x + (qt_width / (2)));
var horizontal_midpoint = (qt_y + (qt_height / (2)));
var top_quadrant = (((obj_y < horizontal_midpoint)) && (((obj_y + obj_height) < horizontal_midpoint)));
var bottom_quadrant = (obj_y > horizontal_midpoint);
var left_quadrants = (((obj_x < vertical_midpoint)) && (((obj_x + obj_width) < vertical_midpoint)));
var right_quadrants = (obj_x > vertical_midpoint);
if(((left_quadrants) && (top_quadrant))){
return (1);
} else {
if(((left_quadrants) && (bottom_quadrant))){
return (2);
} else {
if(((right_quadrants) && (top_quadrant))){
return (0);
} else {
if(((right_quadrants) && (bottom_quadrant))){
return (3);
} else {
return null;
}
}
}
}
});
/**
 * Insert `bounds-obj` into the node, returning a freshly grown quadtree.
 *   If the node exceeds the capacity, it will split and add all objects to
 *   their corresponding subnodes.
 */
quadtree_cljc.core.insert = (function quadtree_cljc$core$insert(quadtree,bounds_obj){
var map__23321 = quadtree;
var map__23321__$1 = cljs.core.__destructure_map(map__23321);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var max_levels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"max-levels","max-levels",-1678360932));
var max_objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23321__$1,new cljs.core.Keyword(null,"max-objects","max-objects",-441889834));
var all_objects = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(objects,bounds_obj);
if((cljs.core.count(nodes) > (0))){
var quadtree__$1 = quadtree;
var quadtree__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(quadtree__$1,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.PersistentVector.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (quadtree__$3,obj){
var quadrant = quadtree_cljc.core.get_quadrant(quadtree__$3,obj);
var nodes__$1 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(quadtree__$3);
if(cljs.core.truth_(quadrant)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quadtree__$3,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nodes__$1,quadrant,(function (){var G__23324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodes__$1,quadrant);
var G__23325 = obj;
return (quadtree_cljc.core.insert.cljs$core$IFn$_invoke$arity$2 ? quadtree_cljc.core.insert.cljs$core$IFn$_invoke$arity$2(G__23324,G__23325) : quadtree_cljc.core.insert.call(null,G__23324,G__23325));
})())], null)], 0));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(quadtree__$3,new cljs.core.Keyword(null,"objects","objects",2099713734),(function (p1__23319_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23319_SHARP_,obj);
}));
}
}),quadtree__$2,all_objects);
} else {
if((((cljs.core.count(all_objects) > max_objects)) && ((level < max_levels)))){
var quadtree__$1 = ((cljs.core.empty_QMARK_(nodes))?quadtree_cljc.core.split(quadtree):quadtree);
return (quadtree_cljc.core.insert.cljs$core$IFn$_invoke$arity$2 ? quadtree_cljc.core.insert.cljs$core$IFn$_invoke$arity$2(quadtree__$1,bounds_obj) : quadtree_cljc.core.insert.call(null,quadtree__$1,bounds_obj));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quadtree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objects","objects",2099713734),all_objects], null)], 0));
}
}
});
/**
 * Takes a `quadtree` and inserts all bounds objects from the
 *   bounds-objs vector.
 */
quadtree_cljc.core.insert_all = (function quadtree_cljc$core$insert_all(quadtree,bounds_objs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (quadtree__$1,obj){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([quadtree__$1,quadtree_cljc.core.insert(quadtree__$1,obj)], 0));
}),quadtree,bounds_objs);
});
/**
 * Retrieves a vector of all the bounds objects that could collide with
 *   `bounds-obj` in `quadtree`.
 */
quadtree_cljc.core.retrieve = (function quadtree_cljc$core$retrieve(quadtree,bounds_obj){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((function (){var quadrant = quadtree_cljc.core.get_quadrant(quadtree,bounds_obj);
var nodes = new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(quadtree);
if((cljs.core.count(nodes) > (0))){
if(cljs.core.truth_(quadrant)){
var G__23330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodes,quadrant);
var G__23331 = bounds_obj;
return (quadtree_cljc.core.retrieve.cljs$core$IFn$_invoke$arity$2 ? quadtree_cljc.core.retrieve.cljs$core$IFn$_invoke$arity$2(G__23330,G__23331) : quadtree_cljc.core.retrieve.call(null,G__23330,G__23331));
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23328_SHARP_){
return (quadtree_cljc.core.retrieve.cljs$core$IFn$_invoke$arity$2 ? quadtree_cljc.core.retrieve.cljs$core$IFn$_invoke$arity$2(p1__23328_SHARP_,bounds_obj) : quadtree_cljc.core.retrieve.call(null,p1__23328_SHARP_,bounds_obj));
}),nodes);
}
} else {
return new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(quadtree);
}
})()));
});
/**
 * Returns true if this object is a point in space
 *   as in it has no width or height
 */
quadtree_cljc.core.point_QMARK_ = (function quadtree_cljc$core$point_QMARK_(p__23332){
var map__23333 = p__23332;
var map__23333__$1 = cljs.core.__destructure_map(map__23333);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23333__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(height,(0))));
});
/**
 * Returns a vector of all the points that collide/intersect
 *   with `bounds-obj` in the `quadtree`.
 */
quadtree_cljc.core.retrieve_points = (function quadtree_cljc$core$retrieve_points(quadtree,bounds_obj){
return cljs.core.filterv((function (p1__23334_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__23334_SHARP_),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds_obj))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__23334_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds_obj))) && (quadtree_cljc.core.point_QMARK_(p1__23334_SHARP_)))));
}),quadtree_cljc.core.retrieve(quadtree,bounds_obj));
});
/**
 * Takes two object bounds and returns true if they
 *   intersect. 
 */
quadtree_cljc.core.intersects_QMARK_ = (function quadtree_cljc$core$intersects_QMARK_(obj_a,obj_b){
var map__23335 = obj_a;
var map__23335__$1 = cljs.core.__destructure_map(map__23335);
var x_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23335__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23335__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23335__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23335__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__23336 = obj_b;
var map__23336__$1 = cljs.core.__destructure_map(map__23336);
var x_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23336__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var max_x_for_a = (x_a + width_a);
var max_y_for_a = (y_a + height_a);
var max_x_for_b = (x_b + width_b);
var max_y_for_b = (y_b + height_b);
return (!((((max_x_for_a < x_b)) || ((((x_a > max_x_for_b)) || ((((max_y_for_a < y_b)) || ((y_a > max_y_for_b)))))))));
});
/**
 * Returns all a vector of all the objects that collide/intersect
 *   with `bounds-obj` in the `quadtree`.
 */
quadtree_cljc.core.retrieve_intersections = (function quadtree_cljc$core$retrieve_intersections(quadtree,bounds_obj){
return cljs.core.filterv((function (p1__23337_SHARP_){
return quadtree_cljc.core.intersects_QMARK_(p1__23337_SHARP_,bounds_obj);
}),quadtree_cljc.core.retrieve(quadtree,bounds_obj));
});

//# sourceMappingURL=quadtree_cljc.core.js.map
