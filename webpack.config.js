const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const production = argv.mode === "production";

  const plugins = [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ];

  if (production)
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "assets/styles/[name].[contenthash].css",
        chunkFilename: "assets/styles/[id].[contenthash].css",
      }),
    );

  return {
    mode: "production",
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [
            production ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "icss",
                },
              },
            },
          ],
        },
        {
          test: /\.module\.css$/i,
          use: [
            production ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: production
                    ? "[hash:base64:5]"
                    : "[local]_[hash:base64:5]",
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: "asset",
          generator: {
            filename: "assets/images/[hash][ext][query]",
          },
        },

        {
          test: /\.(eot|ttf|woff|woff2)$/i,
          type: "asset",
          generator: {
            filename: "assets/fonts/[hash][ext][query]",
          },
        },
        {
          test: /\.(svg)$/i,
          type: "asset",
          generator: {
            filename: "assets/vectors/[hash][ext][query]",
          },
        },
      ],
    },
    plugins,
  };
};
