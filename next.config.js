module.exports = {
  i18n: { locales: ['en-US'], defaultLocale: 'en-US' },
  optimizeFonts: false,
  poweredByHeader: false,
  reactStrictMode: true,

  webpack(config, { isServer }) {
    const rules = config.module.rules
      .find((rule) => typeof rule.oneOf === 'object')
      .oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (
          moduleLoader.loader.includes('css-loader') &&
          !moduleLoader.loader.includes('postcss-loader')
        ) {
          delete moduleLoader.options.modules.getLocalIdent;
          moduleLoader.options.modules.localIdentName = '[hash:base64:6]';
        }

        if (moduleLoader.loader.includes('resolve-url-loader'))
          moduleLoader.options.sourceMap = false;
      });
    });

    if (!isServer) {
      const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

      config.optimization.minimizer = config.optimization.minimizer.filter(
        ({ constructor: { name } }) => name !== 'CssMinimizerPlugin',
      );

      config.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minimizerOptions: [{ preset: ['advanced', { discardUnused: false }] }, {}],
          minify: [CssMinimizerPlugin.cssnanoMinify, CssMinimizerPlugin.cssoMinify],
        }),
      );
    }

    return config;
  },
};
