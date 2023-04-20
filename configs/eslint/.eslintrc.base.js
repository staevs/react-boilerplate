const general = require('./rules/general');
const imports = require('./rules/imports');
const linePaddings = require('./rules/linePaddings');
const promises = require('./rules/promises');
const react = require('./rules/react');

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:eslint-comments/recommended',
    'prettier'
  ],
  plugins: [
    'import',
    'jsx-a11y',
    'react-hooks',
    'eslint-comments',
    '@emotion',
    'promise',
    'prettier'
  ],
  rules: {
    ...general,
    ...imports,
    ...promises,
    ...react,
    'padding-line-between-statements': ['error', ...linePaddings]
  }
};
