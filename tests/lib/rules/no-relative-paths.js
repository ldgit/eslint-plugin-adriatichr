/**
 * @fileoverview Enforce Adriatic.hr import convention
 * @author Danko Lučić
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-relative-paths"),

RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
    }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-relative-paths", rule, {
    valid: [
        {
            code: "import foo from 'npm-package';",
        },
        {
            code: "import 'npm-package';",
        },
        {
            code: "import foo from '@PROJECT_ROOT/full/path/to/bar';",
        },
        {
            code: "import baz from '@PROJECT_ROOT/full/path/baz';",
        },
        {
            code: "import '@PROJECT_ROOT/full/path/to/bar';",
        },
        {
            code: "import '@PROJECT_ROOT/full/path/baz';",
        },
    ],
    invalid: [
        {
            code: "import foo from './bar';",
            errors: [{
                message: "Relative imports not allowed, use @PROJECT_ROOT/path/to/module",
            }]
        },
        {
            code: "import foo from ' ./bar';",
            errors: [{
                message: "Relative imports not allowed, use @PROJECT_ROOT/path/to/module",
            }]
        },
        {
            code: "import baz from '../baz';",
            errors: [{
                message: "Relative imports not allowed, use @PROJECT_ROOT/path/to/module",
            }]
        },
        {
            code: "import baz from ' ../baz';",
            errors: [{
                message: "Relative imports not allowed, use @PROJECT_ROOT/path/to/module",
            }]
        },
        {
            code: "import './bar';",
            errors: [{
                message: "Relative imports not allowed, use @PROJECT_ROOT/path/to/module",
            }]
        },
        {
            code: "import '../bar';",
            errors: [{
                message: "Relative imports not allowed, use @PROJECT_ROOT/path/to/module",
            }]
        },
    ]
});
