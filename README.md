# Looset Graph

Foldable graphs, a way to abstract ideas and concepts. Try it in [Looset Graph](https://jponline.github.io/looset-graph/).

Also take a look at other similar tools to improve code visualization in [Looset Tools](https://jponline.github.io/looset-landing/).

And [Looset Cardume](https://jponline.github.io/looset-cardume), a way to fold Mermaid diagrams.

## Running
Use `shadow-cljs release frontend` to generate releasable js.

Use `shadow-cljs watch frontend` to fire hot reload.

Use `shadow-cljs release frontend --debug` to show function names in console errors.

<br>
Note: The NPM module antlr4 was generating buggy .js files, so download the antlr4 module through the command

```bash
npm v antlr4 dist.tarball | xargs curl | tar -xz --directory=packages/ && mv packages/package packages/antlr4
```

## Parser

The parsing code was generated by Antlr following [this instructions](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md).

Generate Javascript files from the grammar with

```bash
antlr4 -Dlanguage=JavaScript loosetGraphLexer.g4 -o packages/loosetGraphGrammar/ && antlr4 -Dlanguage=JavaScript -o packages/loosetGraphGrammar/ -no-listener -lib packages/loosetGraphGrammar/ loosetGraph.g4 && find packages/loosetGraphGrammar/ -type f ! -name '*.js' ! -name '*.json' -delete && mv packages/loosetGraphGrammar/loosetGraph.js packages/loosetGraphParser/loosetGraphParser.js && mv packages/loosetGraphGrammar/loosetGraphLexer.js packages/loosetGraphLexer/loosetGraphLexer.js && rm -r packages/loosetGraphGrammar/

antlr4 -Dlanguage=JavaScript -o packages/loosetGraphLexer/ -no-listener loosetGraph.g4 && find packages/loosetGraphLexer/ -type f ! -name '*.js' ! -name '*.json' -delete && mv packages/loosetGraphLexer/loosetGraphParser.js packages/loosetGraphParser/
```
