const path = require('path');
const { webpackAliases } = require('../config/modules');
const postcssConfig = require('../postcss.config');
const {
  svgrOptions,
  fileLoaderOptions,
  issuer
} = require('../svgr.config');

const findPred = ext => rule => {
  if (!rule) return false;
  if (!rule.test) return false;
  if (typeof rule.test === 'string') return rule.test === rule;
  if (rule.test instanceof RegExp) return rule.test.test(`.${ext}`);
  return false;
};

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

    config.module.rules.find(findPred('svg')).exclude = /\.svg$/i;
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {...svgrOptions},
        },
        {
          loader: 'file-loader',
          options: {...fileLoaderOptions},
        },
      ],
      issuer: issuer,
    });

    const cssTestPred = findPred('css');
    const cssRuleIndex = config.module.rules.findIndex(r => cssTestPred(r));
    if (cssRuleIndex >= 0) {
      config.module.rules[cssRuleIndex] = {
        ...config.module.rules[cssRuleIndex],
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                implementation: require('postcss'),
                ...postcssConfig,
              },
            },
          },
        ]
      };
    }

    console.log(config.module.rules);

    return config;
  },
};
