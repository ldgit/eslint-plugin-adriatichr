/**
 * @fileoverview Enforce Adriatic.hr import convention
 * @author Danko Lučić
 */
'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Enforce Adriatic.hr import convention',
      category: 'no-relative-paths',
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create: function(context) {
    return {
      ImportDeclaration(node) {
        const sourceName = node.source.value.trim();

        if (sourceName.indexOf('./') === 0 || sourceName.indexOf('../') === 0) {
          context.report({
            node,
            message:
              'Relative imports not allowed, use @PROJECT_ROOT/path/to/module',
          });
        }
      },
    };
  },
};
