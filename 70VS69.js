const files = require('./searchFiles');
const links = require('./searchForLinks.js');

const filesMD = files.searchFiles('C:/Cursos/GitHub/CDMX011-md-links/Prueba');
const allLinks = links.searchForLinks(filesMD);

const sesentayNUEVE = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/es/',
      text: 'Node.js',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developers.google.com/v8/',
      text: 'motor de JavaScript V8 de Chrome',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      text: 'Arreglos',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      text: 'Array - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      text: 'Array.prototype.sort() - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      text: 'Array.prototype.forEach() - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      text: 'Array.prototype.map() - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
      text: 'Array.prototype.filter() - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
      text: 'Array.prototype.reduce() - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
      text: 'Objetos en JavaScript',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops',
      text: 'Estructuras condicionales y repetitivas',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
      text: 'Tomando decisiones en tu código — condicionales - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/03-functions',
      text: 'Funciones (control de flujo)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic',
      text: 'Funciones clásicas',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/02-arrow',
      text: 'Arrow Functions',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
      text: 'Funciones — bloques de código reutilizables - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
      text: 'Píldora recursión - YouTube Laboratoria Developers',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://medium.com/laboratoria-developers/recursi%C3%B3n-o-recursividad-ec8f1a359727',
      text: 'Recursión o Recursividad - Laboratoria Developers en Medium',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/docs/latest/api/modules.html',
      text: 'Modules: CommonJS modules - Node.js Docs',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
      text: 'Función Callback - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise',
      text: 'Promise - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
      text: 'How to Write a JavaScript Promise - freecodecamp (en inglés)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://jestjs.io/docs/es-ES/getting-started',
      text: 'Empezando con Jest - Documentación oficial',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://jestjs.io/docs/es-ES/asynchronous',
      text: 'Tests de código asincrónico con Jest - Documentación oficial',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://jestjs.io/docs/es-ES/manual-mocks',
      text: 'Manual Mocks con Jest - Documentación oficial',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.npmjs.com/',
      text: 'Sitio oficial de npm (en inglés)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://docs.npmjs.com/files/package.json',
      text: 'package.json - Documentación oficial (en inglés)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://docs.npmjs.com/misc/scripts',
      text: 'scripts - Documentación oficial (en inglés)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/process.html',
      text: 'Process - Documentación oficial (en inglés)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/fs.html',
      text: 'File system - Documentación oficial (en inglés)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/path.html',
      text: 'Path - Documentación oficial (en inglés)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Overview',
      text: 'Generalidades del protocolo HTTP - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Messages',
      text: 'Mensajes HTTP - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
      text: 'Códigos de estado de respuesta HTTP - MDN',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://dev.to/khaosdoctor/the-complete-guide-to-status-codes-for-meaningful-rest-apis-1-5c5',
      text: 'The Complete Guide to Status Codes for Meaningful ReST APIs - dev.to',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://jestjs.io/',
      text: 'Jest',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://docs.npmjs.com/cli/install',
      text: 'docs oficiales de <code>npm install</code> acá',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/Laboratoria/course-parser',
      text: '<code>course-parser</code>',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/markdown-it/markdown-it',
      text: 'markdown-it',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      text: 'expresiones regulares (<code>RegExp</code>)',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/markedjs/marked',
      text: 'marked',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/jsdom/jsdom',
      text: 'JSDOM',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/cheeriojs/cheerio',
      text: 'Cheerio',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/markedjs/marked',
      text: 'marked',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'http://community.laboratoria.la/c/js',
      text: 'foro de la comunidad',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/workshopper/learnyounode',
      text: 'learnyounode',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/workshopper/how-to-npm',
      text: 'how-to-npm',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://github.com/stevekane/promise-it-wont-hurt',
      text: 'promise-it-wont-hurt',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/es/about/',
      text: 'Acerca de Node.js - Documentación oficial',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/fs.html',
      text: 'Node.js file system - Documentación oficial',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
      text: 'Node.js http.get - Documentación oficial',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Node.js',
      text: 'Node.js - Wikipedia',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
      text: 'What exactly is Node.js? - freeCodeCamp',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
      text: '¿Qué es Node.js y para qué sirve? - drauta.com',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
      text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
      text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
      text: 'Node.js y npm',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
      text: 'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
      text: 'Asíncronía en js',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://docs.npmjs.com/getting-started/what-is-npm',
      text: 'NPM',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
      text: 'Publicar packpage',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
      text: 'Crear módulos en Node.js',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
      text: 'Leer un archivo',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
      text: 'Leer un directorio',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://nodejs.org/api/path.html',
      text: 'Path',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
      text: 'Linea de comando CLI',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    },
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'recurso',
      file: '/Users/emma/Documents/Laboratoria/Proyectos/CDMX011-md-links/README.md'
    }
]
let setenta = []
let NUEVE = []
allLinks.forEach(element => {
    setenta.push(element.href)
})

sesentayNUEVE.forEach(ele =>{
    NUEVE.push(ele.href)
})

setenta.forEach(otro=>{
    if(NUEVE.includes(otro)){
        //continue;
    }else{
        console.log(otro);
    }
})
console.log(setenta);