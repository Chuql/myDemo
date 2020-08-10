module.exports = {
  lintOnSave: false,

  devServer: {
    open: true,

    host: '127.0.0.1',
    // host: '2.0.7.78',

    port: 3000,

    https: false,

    hotOnly: false,

    proxy: null,

    before: app => {}
  },
}