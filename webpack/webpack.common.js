const webpack = require('webpack')
const { resolve } = require('./utils')
const configs = require('./webpack-config')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function webpackCommonFunc(env) {
  const config = configs[env]
  const isDev = env !== 'production'

  const webpackConfig = {
    entry: {
      index: resolve('src', 'index.tsx')
    },
    output: {
      path: resolve('dist'),
      publicPath: config.staticPath,
      filename: `js/${isDev ? '[name]' : '[name].[chunkhash:8]'}.js`,
      chunkFilename: `js/${isDev ? '[name]' : '[name].[chunkhash:8]'}.js`
    },

    module: {
      rules: [
        // js(x) & ts(x)
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {}
          }
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: config.imgPath
              }
            },
            'css-loader',
            'postcss-loader',
            'less-loader'
          ]
        },
        // fonts
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: `fonts/[name].[contenthash][ext]`
          }
        },

        // images
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/resource',
          parser: {
            dataUrlCondition: {
              maxSize: 1
            }
          },
          generator: {
            filename: `images/[name].[contenthash][ext]`
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env),
        'process.env.STATIC_PATH': JSON.stringify(config.staticPath),
        'process.env.HOST': JSON.stringify(config.HOST)
      }),
      new HtmlWebpackPlugin({
        template: resolve('src', 'index.html'),
        filename: 'index.html',
        chunks: ['runtime', 'vendor', 'index'],
        hash: false,
        inject: 'body',
        xhtml: false,
        minify: {
          removeComments: true
        }
      })
    ],

    resolve: {
      alias: {
        '@/*': resolve('src/*'),
        '@utils': resolve('src/utils'),
        '@routes': resolve('src/routes')
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }
  }

  return webpackConfig
}
