const path = require("path");
const config = require("./config.js");
const PROJECT_ROOT = path.resolve(__dirname, "../");
const ENV = process.env.NODE_ENV;

const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: ENV,
  devtool: ENV === "development" ? "source-map" : false,
  watchOptions: {
    ignored: /node_modules/,
  },
  entry: config.webpack.entrypoints,
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].js",
  },
  optimization: {
    minimizer: ENV === "production" ? [] : [],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]?[hash]",
        },
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]?[hash]",
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  stats: "errors-only",
  plugins: [
    new CleanWebpackPlugin(path.resolve(PROJECT_ROOT, "dist"), {
      root: PROJECT_ROOT,
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "../src/images/"),
        to: path.resolve(__dirname, "../images/"),
      },
    ]),
  ],
};
