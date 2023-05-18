grammar loosetGraph;

loosetGraph
  : edge*
  | foldable* edge* ;

foldable
  : foldableID node* ;

foldableID : (LABEL_ID | ID) ':' ;

edge : node '->' node ;

node : ID | LABEL_ID ;

LABEL_ID : '=>'[a-zA-Z0-9]+ ;
ID : [a-zA-Z0-9]+ ;
SPACES_RULE_TOKEN
   : [ \t\r\n]+ -> skip
   ;
