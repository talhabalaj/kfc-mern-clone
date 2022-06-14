module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['module-resolver'],
  extends: ['eslint:recommended', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
