module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:jest/recommended',
    'plugin:jest-formatting/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['jest-formatting'],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['babel-eslint'],
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'object-curly-newline': ['error', { multiline: true }],
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: { jest: true },
    },
  ],
};
