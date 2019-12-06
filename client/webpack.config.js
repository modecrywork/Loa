const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

/*
  plugins configs
*/
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, `./index.html`),
  filename: "index.html",
  inject: "body"
});

const CleanWebpackPluginConfig = new CleanWebpackPlugin({
  verbose: true
});

module.exports = {
  entry: ["./client/index.js", "./client/assets/index.js"],
  output: {
    path: path.resolve("server/public"),
    filename: "index_bundle.js"
  },
  devServer: {
    proxy: [
      {
        path: "/api/",
        target: "http://localhost:3001"
      }
    ],
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: { name: "images/[name].[ext]" }
          },
          {
            loader: "image-webpack-loader",
            options: {
              optipng: { optimizationLevel: 7 },
              pngquant: { quality: [0.75, 0.9], speed: 3 },
              mozjpeg: { progressive: true },
              gifsicle: { interlaced: false }
            }
          }
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, CleanWebpackPluginConfig],
  performance: {
    hints: false
  },
  devtool: "eval-sourcemap"
};
