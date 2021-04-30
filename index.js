module.exports = (api, options) => {
  api.chainWebpack(config => {
    config.module.rules.delete("md");

    const rule = config.module
      .rule('md')
      .test(/\.md$/)

    rule
      .use('vue-loader')
        .loader('vue-loader')
        .options({ /* ... */ })
      
    rule.use("markdown-loader")
      .loader(require.resolve('@do-it/markdown-loader'))
      .options({
        sourceDir: ''
      })
  });
};
