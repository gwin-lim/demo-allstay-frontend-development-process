const path = require('path');
const { webpackAliases } = require('../config/modules');

module.exports = {
  reactOptions: { legacyRootApi: false },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "staticDirs": ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      }
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (config, { _ }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      ...webpackAliases
    };
    return config;
  },
}