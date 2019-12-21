const merge = require('webpack-merge');

const {
  baseFragment,
  devServerFragment,
  esFragment,
  graphqlFragment,
  pluginsFragment,
  stylesFragment,
} = require('./config/webpack.fragments');

module.exports = merge(
  baseFragment,
  {
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.css', '.scss'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
  },
  devServerFragment,
  esFragment,
  graphqlFragment,
  stylesFragment,
  pluginsFragment,
);
