<p align="center">
  <br>
  <img width="500" src="src/img/logo.png" alt="Webpack + pug">
  <br>
  <br>
</p>

# PiruBoilerplatePug

It is a simple framework for static Html templates.

## Features of GeleBatmPUG

* Uses Webpack 5 to automate tasks.
* It is based on Sass and pug.
* Compiles pug and updates the browser with each change.
* Catches errors in Sass, pug and Js preventing webpack from crashing.
* Creates sourcemaps of the compiled files.

## Mode of use

1. Create a fork of this repository and clone it locally (or download this repository by zip).
2. Run `npm install` (make sure you have npm updated and Nodejs version 6 or higher).
3. Run `npm run build` to compile your files for production.
4. Run `npm run dev` to compile your files for development.
5. Run `npm run watch` to listen for changes and compile them.
6. Run `npm start` to start local server and reflect changes instantly.
7. Enjoy

## Structure

1. The **src** folder contains the file structure you will be working with.
2. The **public** folder contains the compiled files to be taken to production.
3. For Sass import your partials from `app.scss`, the order is indicated in the same file.
4. For pug, the `pages` folder contains the project pages and the `includes` folder the blocks.
5. For Js, the `modules` folder contains the modules that will be imported from `app.js`.

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