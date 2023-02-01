const resolver = require('postcss-import-alias-resolver');
const { webpackAliases } = require('./config/modules');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': {
      resolve: resolver({
        alias: {
          ...webpackAliases
        },
        dontPrefix: false,
      }),
    },
  }
};
