# Enforce Adriatic.hr import convention (no-relative-paths)

## Rule Details

Examples of **incorrect** code for this rule:

```js

import foo from './bar';
import baz from '../baz';
import './bar';
import '../bar';

```

Examples of **correct** code for this rule:

```js

import foo from '@PROJECT_ROOT/full/path/to/bar';
import baz from '@PROJECT_ROOT/full/path/baz';
import '@PROJECT_ROOT/full/path/to/bar';
import '@PROJECT_ROOT/full/path/baz';

```
