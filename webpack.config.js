const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: [/\.css$/, /\.less$/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: "../",
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader?sourceMap",
          // "less-loader?sourceMap",
          {
            loader: "less-loader?sourceMap",
            options: {
              paths: [path.resolve(__dirname, "src/less")]
            }
          }
        ]
      },
      // {
      //   test: /\.less$/,
      //   use: ["style-loader", "css-loader", "less-loader"]
      // },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.svg/,
        use: {
          loader: "react-svg-loader",
          options: {}
        }
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.SourceMapDevToolPlugin({
      exclude: ["vendors"]
    }),
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "Karmo",
      filename: "index.html",
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  devServer: {
    disableHostCheck: true,
    contentBase: "./dist",
    historyApiFallback: true
  }
};
