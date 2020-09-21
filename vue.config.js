module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/variables.scss";'
      }
    }
  }
}
