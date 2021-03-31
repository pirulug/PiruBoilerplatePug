const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const FileManagerPlugin = require("filemanager-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATH = {
  src: path.resolve(__dirname, "src"),
  dist: path.resolve(__dirname, "dist"),
};

const PAGES_DIR = `${PATH.src}/pug/pages`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.js",
  },
  mode: "development",
  plugins: [
    // Extract css files to seperate bundle
    new MiniCssExtractPlugin({
      filename: "css/app.css",
      chunkFilename: "css/app.css",
    }),

    // Copiar img fonts
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/fonts", to: "fonts" },
        { from: "src/img", to: "img" },
      ],
    }),

    // Eliminar Archivos para actualizar
    new CleanWebpackPlugin(),

    // Cargar paginas de .pug
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, ".html")}`,
          minify: {
            collapseWhitespace: false,
            keepClosingSlash: false,
            removeComments: false,
            removeRedundantAttributes: false,
            removeScriptTypeAttributes: false,
            removeStyleLinkTypeAttributes: false,
            useShortDoctype: false,
            preventAttributesEscaping: false,
          },
          inject: true,
        })
    ),
  ],
  module: {
    rules: [
      // SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // Load fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/[name].[ext]",
              outputPath: "fonts/",
              publicPath: "../fonts/",
            },
          },
        ],
      },
      // Load images
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "../img/",
            },
          },
        ],
      },
      // Pug
      {
        test: /\.pug$/,
        use: ["pug-loader?{pretty:true}"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 6969,
    open: true,
  },
};
