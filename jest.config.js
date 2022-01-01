const path = require('path')

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  // `shared` でいいの？相対パス指定したほうが安全なんじゃ？
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  moduleNameMapper: {
    '\\.module.css': 'identity-obj-proxy',
    '\\.css': require.resolve('./test/style-mock'),
  },
  snapshotSerializers: ['jest-emotion'],
}
