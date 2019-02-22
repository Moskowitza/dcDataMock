const path = require("path");
const webpack = require("webpack");
const NodemonPlugin = require("nodemon-webpack-plugin"); // Ding

module.exports = {
  // webpack configuration
  entry: {
    app: "./js/app.js",
  },
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new NodemonPlugin(),
    new webpack.ProvidePlugin({
      d3: "d3",
      crossfilter: "crossfilter2",
    }),
  ],
};
