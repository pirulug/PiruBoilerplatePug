const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BeautifyHtmlWebpackPlugin = require("beautify-html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PAGES_DIR = `${path.resolve(__dirname, "src")}/pug/pages`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.js",
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      // Load SCSS SASS CSS
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
  plugins: [
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
          inject: false,
        })
    ),
    // Arreglar HTML
    new BeautifyHtmlWebpackPlugin({
      indent_size: 2,
      indent_char: " ",
      indent_with_tabs: true,
      editorconfig: false,
      eol: "\n",
      end_with_newline: false,
      indent_level: 0,
      preserve_newlines: false,
      max_preserve_newlines: 2,
      space_in_paren: false,
      space_in_empty_paren: false,
      jslint_happy: false,
      space_after_anon_function: false,
      space_after_named_function: false,
      brace_style: "collapse",
      unindent_chained_methods: false,
      break_chained_methods: false,
      keep_array_indentation: false,
      unescape_strings: false,
      wrap_line_length: 0,
      e4x: false,
      comma_first: false,
      operator_position: "before-newline",
      indent_empty_lines: false,
      templating: ["auto"],
    }),
    // new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: ["src/**/*"],
    compress: true,
    port: 9000,
    // open: {
    //   app: {
    //     name: "firefox",
    //   },
    // },
    open: true,
    liveReload: true,
  },
};
