const { merge } = require('webpack-merge')
const config = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:7].css'
    })
  ]
})