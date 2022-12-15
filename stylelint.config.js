module.exports = {
  extends: ['stylelint-config-recess-order'],
  ignoreFiles: [
    '**/node_modules/**',
    '**/.next/**',
    '**/build/**',
    '**/coverage/**',
  ],
  rules: {
    'function-whitespace-after': null,
  },
  overrides: [
    {
      files: ['**/*.{jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
}
