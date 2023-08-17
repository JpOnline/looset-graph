grammar loosetGraph;

loosetGraph
  : edge*
  | foldable* edge* ;

foldable
  : foldableID node* ;

foldableID : (labelID | lixID) ':' ;

edge : node '->' node ;

node : lixID | labelID ;

labelID : '=>' ID ;

lixID : ID ;

ID : [a-zA-Z0-9]+ ;
SPACES_RULE_TOKEN
   : [ \t\r\n]+ -> skip
   ;

// Try it in http://lab.antlr.org/
