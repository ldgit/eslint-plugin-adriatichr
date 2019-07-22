module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    'no-var': ['error'],
    'prefer-const': [
      'error',
      { destructuring: 'any', ignoreReadBeforeAssign: false },
    ],
  },
};
