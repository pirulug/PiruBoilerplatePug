<p align="center">
  <br>
  <img width="500" src="src/img/logo.png" alt="Webpack + pug">
  <br>
  <br>
</p>

# PiruBoilerplatePug

Es una sencilla estructura para plantillas Html estaticos.

## Características de GeleBatmPUG

* Usa Webpack 5 para automatizar las tareas
* Está basado en Sass y pug.
* Compila pug y actualiza el navegador con cada cambio
* Captura errores en Sass, pug y Js evitando que webpack se detenga.
* Crea los sourcemaps de los archivos compilados

## Modo de uso

1. Cree un fork de este repositorio y clonelo en local (o descargue este repositorio por zip).
2. Ejecute `npm install` (asegúrese de tener npm actualizado y Nodejs en verción 6 como mínimo)
3. Ejecute `npm run build` para compilar sus archivos para producción
4. Ejecute `npm run dev` para compilar sus archivos para desarrollo
5. Ejecute `npm run watch` para escuchar los cambios y compilarlos
6. Ejecute `npm start` para iniciar servidor local y reflejar cambios al instante
7. Disfrute

## Estructura

1. La carpeta **src** contiene la estructura de archivos con la que trabajará
2. La carpeta **public** contiene los archivos compilados que deberán llevarse a producción
3. Para Sass importe sus partials desde `app.scss`, el orden está indicado en el mismo archivo
4. Para pug, la carpeta `pages` contiene las páginas del proyecto y la carpeta `includes` los bloques.
5. Para Js, la carpeta `modules` contiene los módulos que serán importados desde `app.js`

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