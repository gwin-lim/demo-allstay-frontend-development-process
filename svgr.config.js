const svgrOptions = {
  prettier: false,
  svgo: false,
  svgoConfig: {
    plugins: [{ removeViewBox: false }],
  },
  titleProp: true,
  ref: true,
};

const fileLoaderOptions = {
  name: 'static/media/[name].[hash].[ext]',
};

const issuer = {
  and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
};

module.exports = {
  svgrOptions,
  fileLoaderOptions,
  issuer,
};
