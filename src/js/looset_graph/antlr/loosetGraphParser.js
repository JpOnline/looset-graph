// Generated from loosetGraph.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import loosetGraphListener from './loosetGraphListener.js';
const serializedATN = [4,1,5,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,5,0,16,8,0,10,0,12,0,19,9,0,1,0,5,0,22,8,0,10,0,12,0,
25,9,0,1,0,5,0,28,8,0,10,0,12,0,31,9,0,3,0,33,8,0,1,1,1,1,5,1,37,8,1,10,
1,12,1,40,9,1,1,2,1,2,3,2,44,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,3,4,54,
8,4,1,5,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,0,60,0,32,1,0,0,0,2,
34,1,0,0,0,4,43,1,0,0,0,6,47,1,0,0,0,8,53,1,0,0,0,10,55,1,0,0,0,12,58,1,
0,0,0,14,16,3,6,3,0,15,14,1,0,0,0,16,19,1,0,0,0,17,15,1,0,0,0,17,18,1,0,
0,0,18,33,1,0,0,0,19,17,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,
0,23,21,1,0,0,0,23,24,1,0,0,0,24,29,1,0,0,0,25,23,1,0,0,0,26,28,3,6,3,0,
27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,33,1,0,0,0,31,
29,1,0,0,0,32,17,1,0,0,0,32,23,1,0,0,0,33,1,1,0,0,0,34,38,3,4,2,0,35,37,
3,8,4,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,3,1,0,
0,0,40,38,1,0,0,0,41,44,3,10,5,0,42,44,3,12,6,0,43,41,1,0,0,0,43,42,1,0,
0,0,44,45,1,0,0,0,45,46,5,1,0,0,46,5,1,0,0,0,47,48,3,8,4,0,48,49,5,2,0,0,
49,50,3,8,4,0,50,7,1,0,0,0,51,54,3,12,6,0,52,54,3,10,5,0,53,51,1,0,0,0,53,
52,1,0,0,0,54,9,1,0,0,0,55,56,5,3,0,0,56,57,5,4,0,0,57,11,1,0,0,0,58,59,
5,4,0,0,59,13,1,0,0,0,7,17,23,29,32,38,43,53];


const atn = new antlr4.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class loosetGraphParser extends antlr4.Parser {

    static grammarFileName = "loosetGraph.g4";
    static literalNames = [ null, "':'", "'->'", "'=>'" ];
    static symbolicNames = [ null, null, null, null, "ID", "SPACES_RULE_TOKEN" ];
    static ruleNames = [ "loosetGraph", "foldable", "foldableID", "edge", 
                         "node", "labelID", "lixID" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = loosetGraphParser.ruleNames;
        this.literalNames = loosetGraphParser.literalNames;
        this.symbolicNames = loosetGraphParser.symbolicNames;
    }



	loosetGraph() {
	    let localctx = new LoosetGraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, loosetGraphParser.RULE_loosetGraph);
	    var _la = 0;
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3 || _la===4) {
	                this.state = 14;
	                this.edge();
	                this.state = 19;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 20;
	                    this.foldable(); 
	                }
	                this.state = 25;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	            }

	            this.state = 29;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3 || _la===4) {
	                this.state = 26;
	                this.edge();
	                this.state = 31;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	foldable() {
	    let localctx = new FoldableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, loosetGraphParser.RULE_foldable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.foldableID();
	        this.state = 38;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 35;
	                this.node(); 
	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	foldableID() {
	    let localctx = new FoldableIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, loosetGraphParser.RULE_foldableID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 41;
	            this.labelID();
	            break;
	        case 4:
	            this.state = 42;
	            this.lixID();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 45;
	        this.match(loosetGraphParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	edge() {
	    let localctx = new EdgeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, loosetGraphParser.RULE_edge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.node();
	        this.state = 48;
	        this.match(loosetGraphParser.T__1);
	        this.state = 49;
	        this.node();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	node() {
	    let localctx = new NodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, loosetGraphParser.RULE_node);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.lixID();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.labelID();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labelID() {
	    let localctx = new LabelIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, loosetGraphParser.RULE_labelID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(loosetGraphParser.T__2);
	        this.state = 56;
	        this.match(loosetGraphParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lixID() {
	    let localctx = new LixIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, loosetGraphParser.RULE_lixID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(loosetGraphParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

loosetGraphParser.EOF = antlr4.Token.EOF;
loosetGraphParser.T__0 = 1;
loosetGraphParser.T__1 = 2;
loosetGraphParser.T__2 = 3;
loosetGraphParser.ID = 4;
loosetGraphParser.SPACES_RULE_TOKEN = 5;

loosetGraphParser.RULE_loosetGraph = 0;
loosetGraphParser.RULE_foldable = 1;
loosetGraphParser.RULE_foldableID = 2;
loosetGraphParser.RULE_edge = 3;
loosetGraphParser.RULE_node = 4;
loosetGraphParser.RULE_labelID = 5;
loosetGraphParser.RULE_lixID = 6;

class LoosetGraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraphParser.RULE_loosetGraph;
    }

	edge = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EdgeContext);
	    } else {
	        return this.getTypedRuleContext(EdgeContext,i);
	    }
	};

	foldable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FoldableContext);
	    } else {
	        return this.getTypedRuleContext(FoldableContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterLoosetGraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitLoosetGraph(this);
		}
	}


}



class FoldableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraphParser.RULE_foldable;
    }

	foldableID() {
	    return this.getTypedRuleContext(FoldableIDContext,0);
	};

	node = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NodeContext);
	    } else {
	        return this.getTypedRuleContext(NodeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterFoldable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitFoldable(this);
		}
	}


}



class FoldableIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraphParser.RULE_foldableID;
    }

	labelID() {
	    return this.getTypedRuleContext(LabelIDContext,0);
	};

	lixID() {
	    return this.getTypedRuleContext(LixIDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterFoldableID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitFoldableID(this);
		}
	}


}



class EdgeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraphParser.RULE_edge;
    }

	node = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NodeContext);
	    } else {
	        return this.getTypedRuleContext(NodeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterEdge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitEdge(this);
		}
	}


}



class NodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraphParser.RULE_node;
    }

	lixID() {
	    return this.getTypedRuleContext(LixIDContext,0);
	};

	labelID() {
	    return this.getTypedRuleContext(LabelIDContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitNode(this);
		}
	}


}



class LabelIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraphParser.RULE_labelID;
    }

	ID() {
	    return this.getToken(loosetGraphParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterLabelID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitLabelID(this);
		}
	}


}



class LixIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = loosetGraphParser.RULE_lixID;
    }

	ID() {
	    return this.getToken(loosetGraphParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.enterLixID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof loosetGraphListener ) {
	        listener.exitLixID(this);
		}
	}


}




loosetGraphParser.LoosetGraphContext = LoosetGraphContext; 
loosetGraphParser.FoldableContext = FoldableContext; 
loosetGraphParser.FoldableIDContext = FoldableIDContext; 
loosetGraphParser.EdgeContext = EdgeContext; 
loosetGraphParser.NodeContext = NodeContext; 
loosetGraphParser.LabelIDContext = LabelIDContext; 
loosetGraphParser.LixIDContext = LixIDContext; 
