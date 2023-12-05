lexer grammar loosetGraphLexer;

ID : [a-zA-Z0-9]+ ;
SEMI : ':' ;
ARROW : '->' ;
DOUBLE_ARROW : '=>' ;
SPACES_RULE_TOKEN : [ \t\r\n]+ -> skip ;

OPEN_EDN  : '{' -> pushMode(EDN_MODE) ;
mode EDN_MODE;
    OPEN_SUB_EDN : '{' -> pushMode(EDN_MODE) ;
    CLOSE_EDN : '}' -> popMode ;
    EDN : ~[{}]+ ;
