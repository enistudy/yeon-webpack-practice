const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const port = process.env.PORT || 5000;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        // 첫번째 룰
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        // 두번째 룰
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
      // favicon: 'public/favicon.ico' 파비콘은 준비가 되어있지 않아 주석처리합니다.
    })
  ],
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    historyApiFallback: true
  }
};
