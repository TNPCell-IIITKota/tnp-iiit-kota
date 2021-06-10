const __path = require('path');

const plugin = ({ types: t }) => {
  const cloneNode = t.cloneNode || t.cloneDeep;

  return {
    name: 'babel-plugin-cx',
    visitor: {
      Program: {
        enter(path, state) {
          state.stylesIdentifier = path.scope.generateUidIdentifier('styles');
        },

        exit(path, state) {
          if (state.hasProp) {
            const importDeclaration = t.importDeclaration(
              [t.importDefaultSpecifier(state.stylesIdentifier)],
              t.stringLiteral(
                __path
                  .parse(state.file.opts.filename)
                  .name.toLowerCase()
                  .replace(/^([^]*)$/, state.opts.pathReplace),
              ),
            );

            path.node.body.unshift(importDeclaration);
          }
        },
      },

      JSXAttribute(path, state) {
        if (path.node.name.name !== state.opts.propName) return;

        if (
          state.opts.ignoredElements.includes(
            path.findParent((p) => p.isJSXOpeningElement()).node.name.name,
          )
        )
          return;

        path.node.name.name = 'className';
        const value = path.get('value');

        if (value.isLiteral()) {
          value.replaceWith(
            t.jsxExpressionContainer(
              t.memberExpression(
                cloneNode(state.stylesIdentifier),
                cloneNode(value.node),
                true,
                false,
              ),
            ),
          );

          state.hasProp = true;
        } else if (value.isJSXExpressionContainer()) {
          const expression = value.get('expression');
          expression.replaceWith(
            t.memberExpression(
              cloneNode(state.stylesIdentifier),
              cloneNode(expression.node),
              true,
              false,
            ),
          );

          state.hasProp = true;
        }
      },

      JSXSpreadAttribute(path, state) {
        if (
          state.opts.ignoredElements.includes(
            path.findParent((p) => p.isJSXOpeningElement()).node.name.name,
          )
        )
          return;

        const argument = path.get('argument');
        if (!argument.isObjectExpression()) return;
        const properties = argument.get('properties');

        for (const property of properties) {
          if (property.node.key.name === state.opts.propName) {
            property.node.key.name = 'className';
            const value = property.get('value');
            value.replaceWith(
              t.memberExpression(
                cloneNode(state.stylesIdentifier),
                cloneNode(value.node),
                true,
                false,
              ),
            );

            state.hasProp = true;
          }
        }
      },
    },
  };
};

module.exports = plugin;
