/* Production build:
  ========================================================================== */
const { merge } = require('webpack-merge')
const { resolve } = require('./utils')

// plugins for production build only:
const JsonMinimizerPlugin = require('json-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// default config
const commonConfig = require('./webpack.common.js')('production')

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: resolve('./dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].[contenthash].css`,
      chunkFilename: `css/[id].[contenthash:8].css`
    })
  ],
  module: {
    rules: []
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          minChunks: 1,
          priority: 10
        },
        common: {
          test: /[\\/]src[\\/]/,
          chunks: 'all',
          name: 'common',
          minChunks: 3,
          priority: 10
        }
      }
    },
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    chunkIds: 'deterministic',
    minimize: true,
    minimizer: [
      new JsonMinimizerPlugin(),
      new TerserPlugin(),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ]
  }
})
