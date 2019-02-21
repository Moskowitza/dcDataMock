const path = require('path');
const webpack = require('webpack');

module.exports = {
  // webpack configuration
  entry: {
    app: './js/app.js',
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.ProvidePlugin({
      d3: 'd3',
    }),
  ],
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         exclude: /node_modules/,
  //         loader: 'babel-loader',
  //       },
  //     ],
  //   },
};
