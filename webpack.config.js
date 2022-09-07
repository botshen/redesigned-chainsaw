const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  // 入口文件
  entry: {
    summerUI: "./lib/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    // 库名
    library: "summerUI",
    // umd 通用模块定义
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        // 用正则去匹配 .tsx 文件
        // . 在正则用  \. 表示 ? 表示 x 可有可无 $ 表示以什么结尾
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
