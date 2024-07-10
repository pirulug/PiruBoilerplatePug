const Webpack = require("webpack");
const Path = require("path");
const Fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PrettifyWebpackPlugin = require("pirulug-prettify-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const DeleteEmptyFilesPlugin = require("pirulug-delete-empty-files-webpack-plugin");

const opts = {
  rootDir: process.cwd(),
  devBuild: process.env.NODE_ENV !== "production",
};

// PUG
const PAGES_DIR = `${Path.resolve(__dirname, "src")}/view/pages`;
const PAGES = Fs.readdirSync(PAGES_DIR).filter((fileName) =>
  fileName.endsWith(".pug")
);

// Genera un número aleatorio entre 1024 y 65535
const randomPort = Math.floor(Math.random() * (65535 - 1024) + 1024);

module.exports = {
  entry: {
    app: "./src/js/app.js",
    prism: "./src/plugins/prism/prism.js",
    custom: "./src/plugins/custom/custom.js",
    bootstrapicons: "./src/plugins/bootstrapicons/bootstrapicons.js",
    fontawesome: "./src/plugins/fontawesome/fontawesome.js",
    feathericons: "./src/plugins/feathericons/feathericons.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  // devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  output: {
    path: Path.join(opts.rootDir, "dist"),
    pathinfo: opts.devBuild,
    filename: "js/[name].js",
    chunkFilename: "js/[name].js",
  },
  performance: { hints: false },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 7,
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: false } }],
        },
      }),
    ],
    runtimeChunk: false,
  },
  plugins: [
    // DELETE
    new CleanWebpackPlugin(),
    // Extract css files to seperate bundle
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].css",
    }),
    // Copy fonts and images to dist
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
    // Beautify
    new PrettifyWebpackPlugin({
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      htmlWhitespaceSensitivity: "ignore",
      endOfLine: "auto",
      htmlWhitespaceSensitivity: "css",
      jsxBracketSameLine: false,
      htmlWhitespaceSensitivity: "ignore",
      proseWrap: "always",
    }),
    //
    new DeleteEmptyFilesPlugin(__dirname, "dist"),
  ],
  module: {
    rules: [
      // Babel-loader
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      // Css-loader & sass-loader
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true,
              },
            },
          },
        ],
      },
      // Load fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      // Load images
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name][ext]",
        },
      },
      // Pug
      {
        test: /\.pug$/,
        use: [
          {
            loader: "pirulug-pug-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss"],
    modules: ["node_modules"],
    alias: {
      request$: "xhr",
    },
  },
  devServer: {
    static: {
      directory: Path.join(__dirname, "dist"),
    },
    watchFiles: ["src/**/*"],
    compress: true,
    port: randomPort,
    // open: {
    //   app: {
    //     name: "firefox",
    //   },
    // },
    open: true,
    liveReload: true,
  },
};
