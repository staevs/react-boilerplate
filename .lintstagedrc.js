module.exports = {
  '*.{json,css,scss,md,html}': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{ts,tsx}': () => 'tsc --noEmit --project tsconfig.json',
  'package.json': () =>
    'node scripts/lint.mjs --fix --skip-eslint --skip-ts --skip-json'
};
