const path = require('path');
const loaderUtils = require('loader-utils');

const withTM = require('next-transpile-modules')([
  'd3-array',
  'd3-color',
  'd3-format',
  'd3-interpolate',
  'd3-path',
  'd3-scale',
  'd3-shape',
  'd3-time',
  'd3-time-format',
  'internmap',
  'recharts',
]);

const hashOnlyIdent = (context, _, exportName) =>
  loaderUtils
    .getHashDigest(
      Buffer.from(
        `filePath:${path
          .relative(context.rootContext, context.resourcePath)
          .replace(/\\+/g, '/')}#className:${exportName}`,
      ),
      'md4',
      'base64',
      6,
    )
    .replace(/^(-?\d|--)/, '_$1');

/** @type {import('next').NextConfig} */
module.exports = withTM({
  experimental: { esmExternals: 'loose' },
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
          moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
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
});
