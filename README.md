<p align="center">
  <br>
  <img width="500" src="src/img/logo.png" alt="Webpack + Pug">
  <br>
  <br>
</p>

# PiruBoilerplatePug

PiruBoilerplatePug is a lightweight framework for creating static HTML templates efficiently.

## Features

* Utilizes Webpack 5 for streamlined task automation.
* Built on the foundation of Sass and Pug (formerly Jade).
* Compiles Pug templates and updates the browser on every change.
* Detects errors in Sass, Pug, and JavaScript, preventing Webpack crashes.
* Generates source maps for compiled files.

## Getting Started

1. Fork and clone this repository or download it as a ZIP archive.
2. Run `npm install` (ensure you have an updated npm version and Node.js 6 or higher).
3. Execute `npm run build` to compile files for production.
4. Use `npm run dev` to compile files for development.
5. Utilize `npm run watch` to automatically compile changes.
6. Start a local server and see instant changes with `npm start`.
7. Enjoy a streamlined workflow!

## Project Structure

1. The **src** folder contains the directory structure for your work.
2. The **public** folder holds the compiled files ready for production.
3. Import your Sass partials in `app.scss`; their order is specified in the file.
4. For Pug, the `pages` directory includes project pages, and `includes` contains reusable components.
5. In the case of JavaScript, the `modules` folder encompasses importable modules in `app.js`.


```
├───📁 src/
│   ├───📁 fonts/
│   │   └───📄 piru.ttf
│   ├───📁 img/
│   │   ├───📄 logo.png
│   │   └───📄 piru.jpg
│   ├───📁 js/
│   │   ├───📁 modulos/
│   │   │   ├───📄 bootstrap.js
│   │   │   └───📄 feathericons.js
│   │   └───📄 app.js
│   ├───📁 pug/
│   │   ├───📁 includes/
│   │   │   ├───📄 footer.pug
│   │   │   ├───📄 header.pug
│   │   │   ├───📄 layout.pug
│   │   │   ├───📄 navbar.pug
│   │   │   └───📄 sidebar.pug
│   │   └───📁 pages/
│   │       ├───📄 index.pug
│   │       └───📄 post.pug
│   └───📁 scss/
│       ├───📁 base/
│       │   ├───📄 _reset.scss
│       │   └───📄 _typografi.scss
│       ├───📁 components/
│       │   ├───📄 _button.scss
│       │   └───📄 _card.scss
│       ├───📁 config/
│       │   ├───📄 _functions.scss
│       │   ├───📄 _mixins.scss
│       │   └───📄 _variables.scss
│       ├───📁 hacks/
│       │   └───📄 _hack.scss
│       ├───📁 layout/
│       │   ├───📄 _footer.scss
│       │   ├───📄 _header.scss
│       │   └───📄 _wrapper.scss
│       ├───📁 themes/
│       │   ├───📄 _dark.scss
│       │   └───📄 _light.scss
│       ├───📁 vendors/
│       │   └───📄 _vendors.scss
│       └───📄 app.scss
├───📄 .babelrc
├───📄 .editorconfig
├───📄 package-lock.json
├───📄 package.json
├───📄 postcss.config.js
├───📄 README.md
└───📄 webpack.config.js
```