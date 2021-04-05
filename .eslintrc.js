module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:eslint/recommended',
  ],

  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },
}
