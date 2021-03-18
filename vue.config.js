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
    optimization: {
      // nodeEnv: 'production',
      // minimize: true,
      splitChunks: {
        chunks: 'all',
      },
    },

    // exclude: ['src/**/*.spec.js'],
  },

  css: {
    extract: false,
  },

  lintOnSave: process.env.NODE_ENV !== 'production',

  productionSourceMap: false,
};
