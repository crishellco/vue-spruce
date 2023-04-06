module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/package/**', '!src/package/**/index.js'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/?(*.)+(spec).[jt]s?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@popperjs/)'],
};
