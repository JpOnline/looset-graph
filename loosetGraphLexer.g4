lexer grammar loosetGraphLexer;

ID
  : [a-zA-Z] [a-zA-Z0-9-*+!_/]+    // Case 1: Standard ID
  | '"' (~'"')* '"'                // Case 2: Quoted ID (Allows newlines now)
    {
       // JavaScript Lexer Action
       // Replace 1+ sequences of Space or Tab with a single space.
       // This intentionally excludes \r and \n, so newlines are preserved.
       this.text = this.text.replace(/[ \t]+/g, ' ');
    }
  ;

SEMI : ':' ;
ARROW : '->' ;
HIFEN : '-' ;
DOUBLE_ARROW : '=>' ;
SPACES_RULE_TOKEN : [ \t\r\n]+ -> skip ;

OPEN_EDN  : '{' -> pushMode(EDN_MODE) ;
mode EDN_MODE;
    OPEN_SUB_EDN : '{' -> pushMode(EDN_MODE) ;
    CLOSE_EDN : '}' -> popMode ;
    EDN : ~[{}]+ ;
