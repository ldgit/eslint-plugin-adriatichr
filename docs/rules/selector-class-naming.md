# Enforce special naming of class selectors used to find DOM elements (selector-class-naming)

Enforces special naming pattern (`js-*`) for html classes used by javascript to find DOM elements.

## Rule Details

This rule aims to eliminate errors caused by removal/renaming of css classes that are also used as hooks in javascript code to find DOM elements.

Your designers should not hang any css rules on classes prefixed with `js-`.

Examples of **incorrect** code for this rule:

```js

document.getElementsByClassName('foo');
document.querySelector('.foo');
$('.foo');

```

Examples of **correct** code for this rule:

```js

document.getElementsByClassName('js-foo');
document.querySelector('.js-foo');
$('.js-foo');

```

### Options

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

- [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/#javascript-specific-classes) Nicolas Gallagher
- [CSS Naming Conventions that Will Save You Hours of Debugging](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/#1-use-js-class-names) Emmanuel Ohans