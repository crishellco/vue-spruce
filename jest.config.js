module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,vue}', '!src/index.js', '!**/demo/**'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
};
