module.exports = {
  chainWebpack: config => {
    config.module
      .rule('raw')
      .test(/\.gist$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },

  configureWebpack: {
    externals: {
      vue: 'Vue',
    },
  },
};
