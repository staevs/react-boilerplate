module.exports = [
  {
    blankLine: 'always',
    prev: '*',
    next: ['return']
  },
  {
    blankLine: 'always',
    prev: 'block-like',
    next: '*'
  },
  {
    blankLine: 'always',
    prev: 'directive',
    next: '*'
  },
  { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
  {
    blankLine: 'any',
    prev: ['const', 'let', 'var'],
    next: ['const', 'let', 'var']
  }
];
