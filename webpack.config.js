const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const production = argv.mode === "production";

  const styleLoader = production ? MiniCssExtractPlugin.loader : "style-loader";

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
    mode: production ? "production" : "development",
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [
            styleLoader,
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
            styleLoader,
            {
              loader: "css-loader",
              options: {
                modules: {
                  mode: "local",
                  localIdentName: production ? "[hash]" : "[local]_[hash]",
                  namedExport: false,
                  exportLocalsConvention: "as-is",
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
          resourceQuery: /url/,
          generator: {
            filename: "assets/vectors/[hash][ext][query]",
          },
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        },
      ],
    },
    plugins,
  };
};
