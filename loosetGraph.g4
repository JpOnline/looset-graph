parser grammar loosetGraph;
options { tokenVocab=loosetGraphLexer; }

loosetGraph
  : edge*
  | foldable* edge*
  | foldable* edge* nodeProps* ;

foldable
  : foldableID node* ;

foldableID : (labelID | lixID) SEMI ;

edge : node ARROW node | node HIFEN edgeString ARROW node ;

node : lixID | labelID ;

labelID : DOUBLE_ARROW ID ;

lixID : ID ;

edgeString : ID ;

nodeProps : node edn ;

edn : OPEN_EDN innerEdn* CLOSE_EDN
    | OPEN_SUB_EDN innerEdn CLOSE_EDN ;

innerEdn : EDN | edn
    | OPEN_SUB_EDN innerEdn* CLOSE_EDN ;

// Try it in http://lab.antlr.org/

