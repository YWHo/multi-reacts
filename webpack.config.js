const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin  = require('terser-webpack-plugin')

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-0']
            }
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimizer: [
      new TerserPlugin ({
        test: /(?!.min).js(\?.*)?$/i,
        sourceMap: true,
        terserOptions: {
          warnings: false,
          comments: false, // drop comments
          compress: {
            pure_funcs: [ 'console.log' ]   // drop console.log
          }
        }
      })
    ]
  },
  devtool: 'source-map'
}

const currencyAppConfig = Object.assign({}, commonConfig, {
  entry: {
    app: './currency-app/index.js'
  },
  output: {
    path: path.join(__dirname, './public/currency'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Currency App',
      template: './templates/index.html',
      chunks: ['app'],
      path: path.join(__dirname, './public/currency'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
})

const weatherAppConfig = Object.assign({}, commonConfig, {
  entry: {
    app: './weather-app/index.js'
  },
  output: {
    path: path.join(__dirname, './public/weather'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Weather App',
      template: './templates/index.html',
      chunks: ['app'],
      path: path.join(__dirname, './public/weather'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
})


module.exports = [currencyAppConfig, weatherAppConfig]