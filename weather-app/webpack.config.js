const path = require('path')

module.exports = {
  entry: {
    app: './client/index.js'
  },
  output: {
    path: path.join(__dirname, '../public/weather'),
    publicPath: '/weather/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-0']
        }
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}