const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");

/** @type {import("webpack").Configuration} */
const config = {
  mode: "production",
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  plugins: [],
};

module.exports = merge(baseConfig, config);
