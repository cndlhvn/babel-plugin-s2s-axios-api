module.exports = babel => {
  const t = babel.types;
  return {
    name: "s2s-axios-api",
    visitor: {
      ExpressionStatement: function(path){
        const actionName = path.node.expression.name
        if(actionName == undefined){
          return
        }
        path.replaceWith(
          t.ExportNamedDeclaration(
            t.VariableDeclaration(
              "const",
              [t.VariableDeclarator(
                t.Identifier(actionName),
                t.ArrowFunctionExpression(
                  [t.Identifier("config")],
                  t.CallExpression(
                    t.MemberExpression(t.Identifier("axios"),t.Identifier("get")),
                    [t.TemplateLiteral(
                      [t.TemplateElement({raw: ""})],[]
                    ),
                     t.Identifier("config")
                    ]
                  )
                )
              )]
            ),[]
          )
        )
      }
    }
  };
}
