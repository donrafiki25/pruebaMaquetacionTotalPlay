# Prueba Técnica — Maquetación Landing Totalplay
## Objetivos
* Maquetar una landing con alta fidelidad visual respecto al diseño.
* Componentizar y estructurar un código frontend limpio y mantenible.
* Aplicar responsive design utilizando Bootstrap 5.
* Demostrar buenas prácticas de accesibilidad, semántica HTML y performance básica.

## Tecnologias usadas
* HTML
* CSS
* SCSS
* Javascript
* Typescript
* React
* Bootstrap

## Instalación y ejecución local
* Para instalarlo, se necesita nodeJS y npm: https://nodejs.org/en/download
* Teniendo npm, correr dentro de la carpeta principal la siguiente linea ```npm i``` para instalar todos los paquetes.
* Para correr el proyecto, correr con el siguiente comando: ```npm run dev``` y abrir en el link y puerto que indique (normalmente es en http://localhost:5173/). La consola debe quedarse abierta.
* Si se necesita correr SCSS correr con el siguiente comando en otra consola ```sass --watch ./path/to/folder/scss:./path/to/folder/css``` y dejar abierta.
* Si se quiere cortar el proceso, usar _CTRL + C_ 

## Build y Deploy
El deploy se hizo con GitHub Pages, usando igual GH-PAGES para que fuera más rápida la configuración.
Para el build, se usó ```npm run build```, checar que todas las carpetas de crearan bien, que no hubieran problemas de 404 o de algo faltante, y que funcionara para el deploy. 
Al final se tuvo que cambiar unas cosas dentro del archivo _package.json_ para que el deploy se hiciera bien junto con el módulo de gh-pages.
Finalmente, se hizo ```npm run deploy``` para que se subieran los cambios a Github en un nuevo branch, creado por gh-pages. Este branch cuenta con la estructura de la carpeta dist.

Link de la página: https://donrafiki25.github.io/pruebaMaquetacionTotalPlay/
