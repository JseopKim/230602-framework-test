const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/react.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
};
