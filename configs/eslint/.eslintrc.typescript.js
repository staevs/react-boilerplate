const path = require('path');

const linePaddings = require('./rules/linePaddings');
const namingConvention = require('./rules/namingConvention');

module.exports = {
  extends: [
    './.eslintrc.base.js',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports'
      }
    ],
    '@typescript-eslint/no-array-constructor': 'warn',
    '@typescript-eslint/no-duplicate-imports': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true }
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false
      }
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type']
      },
      ...linePaddings
    ],
    'default-case': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'padding-line-between-statements': 'off',
    ...namingConvention
  },
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: [path.join(process.cwd(), './tsconfig.json')]
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: [path.join(process.cwd(), './tsconfig.json')]
      }
    }
  }
};
