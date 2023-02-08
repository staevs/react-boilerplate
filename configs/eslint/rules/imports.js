module.exports = {
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }
  ],
  'import/prefer-default-export': 'off',
  'import/no-default-export': 'error',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/setupTests.{js,jsx,ts,tsx}',
        './configs/**/*.{js,jsx,ts,tsx}',
        './configs/*.{js,jsx,ts,tsx}',
        './scripts/**/*.{js,jsx,ts,tsx}',
        './scripts/*.{js,jsx,ts,tsx}'
      ]
    }
  ],
  'import/order': [
    'error',
    {
      'newlines-between': 'always',
      pathGroupsExcludedImportTypes: ['react'],
      groups: [
        'unknown',
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index']
      ],
      pathGroups: [
        {
          pattern: 'react',
          group: 'builtin',
          position: 'before'
        }
      ],
      alphabetize: { order: 'asc', caseInsensitive: true }
    }
  ]
};
