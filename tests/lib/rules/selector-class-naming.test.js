/**
 * @fileoverview Enforce special naming of class selectors used to find DOM elements
 * @author Danko Lučić
 */
'use strict';

const rule = require('../../../lib/rules/selector-class-naming');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
ruleTester.run('selector-class-naming', rule, {
  valid: [
    { code: "someOtherFunction('.foo');" },
    { code: "document.getElementsByClassName('js-foo');" },
    { code: "document.querySelector('.js-foo');" },
    { code: "document.querySelector('#foo');" },
    { code: "document.querySelector('div');" },
    { code: "document.querySelector('.js-foo > .js-bar');" },
    { code: "document.querySelector('.js-foo>.js-bar');" },
    { code: "document.querySelector('.js-foo ~ .js-bar');" },
    { code: "document.querySelector('.js-foo, .js-bar');" },
    { code: "$('.js-foo');" },
    { code: "jQuery('.js-foo');" },
  ],

  invalid: [
    {
      code: "document.getElementsByClassName('foo');",
      errors: [{ message: 'Must use selector with js-* prefix' }],
    },
    ...getInvalidExamplesForCssSelectorArguments('document.querySelector'),
    ...getInvalidExamplesForCssSelectorArguments('document.querySelectorAll'),
    ...getInvalidExamplesForCssSelectorArguments('$'),
    ...getInvalidExamplesForCssSelectorArguments('jQuery'),
  ],
});

function getInvalidExamplesForCssSelectorArguments(functionName) {
  const selectorExamples = [
    '.foo',
    '.js-foo .bar',
    '.js-foo   .bar',
    '.js-foo > .bar',
    '.js-foo>.bar',
    '.js-foo >   .bar',
    '.js-foo, .bar',
    '.js-foo, .bar',
    '.js-foo>.bar',
    '.js-foo  >.bar',
    '.js-foo ~ .bar',
    '.js-foo ~   .bar',
    '.js-foo   ~ .bar',
    '.js-foo~.bar',
  ];

  return selectorExamples
    .map(selector => `${functionName}('${selector}')`)
    .map(code => ({
      code,
      errors: [{ message: 'Must use selector with js-* prefix' }],
    }));
}
