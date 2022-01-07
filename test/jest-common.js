const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
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
  collectCoverageFrom: ['**/src/**/*.js'],
}
