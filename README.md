# eslint-plugin-adriatichr

Just an experiment for eventual use of custom lint rules in Adriatic.hr, company I work for.

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
