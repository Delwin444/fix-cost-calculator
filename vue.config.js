const path = require('path')
module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fix-cost-calculator/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/variables.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('componentStyles', path.resolve(__dirname, 'src/scss/components'))
  }
}
