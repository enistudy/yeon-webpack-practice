const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const port = process.env.PORT || 5000;

module.exports = {
  name: "webpack-test",
  mode: "development", // 나중에 production
  devtool: "inline-source-map",
  entry: ["./src/index", "@babel/polyfill"],
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
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
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[hash].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
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
