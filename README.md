# eslint-plugin-adriatichr

Just an experiment for use in Adriatic.hr, company I work for.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-adriatichr`:

```
$ npm install eslint-plugin-adriatichr --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-adriatichr` globally.

## Usage

Add `adriatichr` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["adriatichr"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "adriatichr/rule-name": 2
  }
}
```

## Supported Rules

- `no-relative-paths`
- `selector-class-naming`
