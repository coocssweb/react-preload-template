module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 200,
      propList: ['*']
    }
  }
}
