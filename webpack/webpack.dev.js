/* Development build:
  ========================================================================== */
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// default config
const commonConfig = require('./webpack.common.js')('development')

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  // spin up a server for quick development
  devServer: {
    compress: false,
    open: false,
    hot: true,
    port: 8084,
    client: {
      progress: false,
      overlay: {
        errors: false,
        warnings: false
      }
    },
    // to test in other devices:
    // allowedHosts: 'all',

    // fix CORS:
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name].css`,
      chunkFilename: `css/[id].css`
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  watchOptions: {
    // for some systems, watching many files can result in a lot of CPU or memory usage
    // https://webpack.js.org/configuration/watch/#watchoptionsignored
    // ! don't use this pattern, if you have a monorepo with linked packages
    ignored: /node_modules/
  }
})
