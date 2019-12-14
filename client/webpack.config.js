const path = require("path");

const webpack = require("webpack");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const appConfig = require("../app-config");

// development settings
const isDev = process.env.NODE_ENV === "development";
const { production, development } = appConfig;
const port = isDev ? development.port : production.port;

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

/*
 *  webpack development configs
 * */
const baseConfig = {
  entry: ["./client/index.js", "./client/assets/index.js"],
  output: {
    path: path.resolve("server/public"),
    filename: "index_bundle.js"
  },
  devServer: {
    proxy: [
      {
        path: "/api/",
        target: `http://localhost:${port}`
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
  }
};

const devConfg = {
  devtool: "eval-sourcemap"
};

const productionConfig = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        },
        sourceMap: true
      })
    ]
  }
};

// get target config
let targetConfig;

if (isDev) {
  targetConfig = { ...baseConfig, ...devConfg };
} else {
  const plugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ];
  targetConfig = { ...baseConfig, ...productionConfig };
  targetConfig.plugins = [...targetConfig.plugins, ...plugins];
}

module.exports = targetConfig;
