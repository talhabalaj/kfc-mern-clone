module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/file-extension-in-import': ['error', 'always'],
  },
}
