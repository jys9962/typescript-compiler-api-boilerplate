import * as ts from 'typescript';
import type { TransformerExtras, PluginConfig } from 'ts-patch';

export default (
  program: ts.Program,
  pluginConfig: PluginConfig,
  { ts: tsInstance }: TransformerExtras,
) => (ctx: ts.TransformationContext) => {
  const { factory } = ctx;
  return (sourceFile: ts.SourceFile) => {

    function visit(node: ts.Node): ts.Node {

      if (ts.isStringLiteral(node) && node.text === 'before') {
        return factory.createStringLiteral('after');
      }
      return ts.visitEachChild(node, visit, ctx);
    }

    return ts.visitNode(sourceFile, visit);
  };
}


