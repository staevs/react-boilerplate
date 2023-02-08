module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  extends: [
    './configs/eslint/.eslintrc.base.js',
    'plugin:storybook/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./configs/eslint/.eslintrc.typescript.js']
    },
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx'],
      extends: ['./configs/eslint/.eslint.storybook.js']
    },
    {
      files: ['vite.config.ts', '.storybook/main.ts', 'cypress.config.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['cypress/**/*.ts', 'cypress/*.ts'],
      rules: {
        '@typescript-eslint/no-namespace': 'off',
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['state', 'config', 'req']
          }
        ]
      }
    },
    {
      files: ['**/shared/ui/components/**/*.[jt]sx?(x)'],
      rules: {
        'no-restricted-imports': 'off'
      }
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'warn'
  }
};
