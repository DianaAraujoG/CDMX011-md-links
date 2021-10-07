// module.exports = () => {
//   // ...
// };
const files = require('./searchFiles.js');
const links = require('./searchForLinks.js');
const fs = require('fs');
const path = require('path');
const readline = require("readline");

const route = process.argv[2];//__dirname; // la ruta absoluta de donde estoy 

const prueba = files.searchFiles(route);
//console.log(prueba);
const fileWithLinks = links.searchForLinks(prueba);

console.log(fileWithLinks);
