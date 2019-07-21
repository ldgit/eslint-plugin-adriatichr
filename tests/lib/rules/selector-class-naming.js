/**
 * @fileoverview Enforce special naming of class selectors used to find DOM elements
 * @author Danko Lučić
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/selector-class-naming"),

RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("selector-class-naming", rule, {

    valid: [
        {
            code: "someOtherFunction('.foo');",
        },
        {
            code: "document.getElementsByClassName('js-foo');",
        },
        {
            code: "document.querySelector('.js-foo');",
        },
        {
            code: "$('.js-foo');",
        },
        {
            code: "jQuery('.js-foo');",
        },
    ],

    invalid: [
        {
            code: "document.getElementsByClassName('foo');",
            errors: [{
                message: "Must use selector with js-* prefix",
            }]
        },
        {
            code: "document.querySelector('.foo');",
            errors: [{
                message: "Must use selector with js-* prefix",
            }]
        },
        {
            code: "document.querySelectorAll('.foo');",
            errors: [{
                message: "Must use selector with js-* prefix",
            }]
        },
        {
            code: "$('.foo');",
            errors: [{
                message: "Must use selector with js-* prefix",
            }]
        },
        {
            code: "jQuery('.foo');",
            errors: [{
                message: "Must use selector with js-* prefix",
            }]
        },
    ]
});
