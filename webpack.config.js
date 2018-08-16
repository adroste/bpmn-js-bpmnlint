var path = require('path');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    entry: './example/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/example'
  },
  module: {
    rules: [
      {
        test: /\.bpmn$|\.svg$/,
        use: {
          loader: 'raw-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './node_modules/diagram-js/assets/diagram-js.css', to: './css' },
      { from: './node_modules/bpmn-font/dist/css/bpmn-embedded.css', to: './css' },
      { from: './assets/fonts/*', to: './fonts', flatten: true },
      { from: './assets/css/*', to: './css', flatten: true }
    ])
  ]
};