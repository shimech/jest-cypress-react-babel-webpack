const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  testEnvironment: 'jest-environment-jsdom',
  // `shared` でいいの？相対パス指定したほうが安全なんじゃ？
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    __dirname,
  ],
  moduleNameMapper: {
    '\\.module.css': 'identity-obj-proxy',
    '\\.css': require.resolve('./style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 18,
      functions: 29,
      lines: 29,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
}
