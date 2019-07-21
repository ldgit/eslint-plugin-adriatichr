/**
 * @fileoverview Enforce special naming of class selectors used to find DOM elements
 * @author Danko Lučić
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Enforce special naming of class selectors used to find DOM elements",
            category: "selector-class-naming",
            recommended: false
        },
        fixable: null,
        schema: [],
        type: "problem",
    },

    create(context) {
        function handleGetElementsByClassName(node) {
            const firstArgument = node.parent.parent.arguments[0].value;
            if (firstArgument.indexOf('js-') === 0) {
                return;
            }

            context.report({ 
                node,
                message: 'Must use selector with js-* prefix',
                type: "selector-class-naming",
            });
        }

        function handleQuerySelector(node) {
            const firstArgument = node.parent.parent.arguments[0].value;
            if (firstArgument.indexOf('.js-') === 0) {
                return;
            }

            context.report({ 
                node,
                message: 'Must use selector with js-* prefix',
                type: "selector-class-naming",
            });
        }

        function handleJQuery(node) {
            const firstArgument = node.parent.arguments[0].value;
            if (firstArgument.indexOf('.js-') === 0) {
                return;
            }

            context.report({ 
                node,
                message: 'Must use selector with js-* prefix',
                type: "selector-class-naming",
            });
        }

        return {
            Identifier(node) {
                switch (node.name) {
                    case 'getElementsByClassName':
                        handleGetElementsByClassName(node);
                        break;
                    case 'querySelector':
                    case 'querySelectorAll':
                        handleQuerySelector(node);
                        break;
                    case '$':
                    case 'jQuery':
                        handleJQuery(node);
                    default:
                        break;
                };
            }
        };
    }
};
