module.exports = {
  camelcase: 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['camelCase']
    },
    {
      selector: [
        'classProperty',
        'objectLiteralProperty',
        'typeProperty',
        'classMethod',
        'objectLiteralMethod',
        'typeMethod',
        'accessor',
        'enumMember'
      ],
      format: null,
      modifiers: ['requiresQuotes']
    },
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE']
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE']
    },
    {
      selector: ['variable'],
      types: ['function'],
      format: ['PascalCase', 'camelCase']
    },
    {
      selector: 'variable',
      modifiers: ['global'],
      format: ['camelCase', 'UPPER_CASE', 'PascalCase']
    },
    {
      selector: ['variable', 'typeProperty', 'parameter'],
      types: ['boolean'],
      format: ['PascalCase'],
      prefix: [
        'is',
        'was',
        'should',
        'has',
        'had',
        'can',
        'did',
        'will',
        'allow'
      ]
    },
    {
      selector: ['variable', 'method', 'parameter'],
      types: ['function'],
      format: ['PascalCase', 'camelCase']
    },
    {
      selector: ['enum'],
      format: ['PascalCase'],
      custom: {
        regex:
          '((people|men|women|children)|(s|ss|sh|ch|x|z|o)es|[^aiu]s)(?<!series|lens|news)$',
        match: false
      }
    },
    {
      selector: ['property'],
      format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE']
    },
    {
      selector: ['property'],
      format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      leadingUnderscore: 'allowDouble',
      filter: {
        regex: '^__html$',
        match: true
      }
    },
    {
      selector: ['property'],
      format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      filter: {
        regex:
          '^_(active|checked|disabled|first|focus|focusVisible|hover|last|notFirst|notLast|placeholder|selected)$',
        match: true
      }
    },
    {
      selector: ['typeLike', 'enumMember'],
      format: ['PascalCase'],
      custom: {
        regex: '^[A-Z0-9]{4,}$',
        match: false
      }
    },
    {
      selector: ['typeProperty'],
      format: ['camelCase', 'snake_case'],
      leadingUnderscore: 'allow'
    },
    {
      selector: ['typeProperty'],
      format: ['UPPER_CASE'],
      filter: {
        regex: '^VITE_',
        match: true
      }
    },
    {
      selector: 'parameter',
      format: ['camelCase'],
      leadingUnderscore: 'allow'
    },
    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'require'
    }
  ]
};
