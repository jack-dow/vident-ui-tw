module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  moduleNameMapper: {
    // '@vident-ui/core/src/styles.api': '<rootDir>/package/vident-ui-core/src/styles.api',
    '@vident-ui/(.*)': '<rootDir>/packages/$1/src',
  },
};
