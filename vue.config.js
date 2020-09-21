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
  }
}
