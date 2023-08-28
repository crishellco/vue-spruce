module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('raw')
      .test(/\.gist$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },

  configureWebpack: {
    mode: 'production',
    optimization: {},
  },

  css: { extract: false },

  lintOnSave: process.env.NODE_ENV !== 'production',

  productionSourceMap: false,
};
