// module.exports = () => {
//   // ...
// };
const files = require('./searchFiles.js')
const fs = require('fs');
const path = require('path');
const readline = require("readline");

const route = process.argv[2];//__dirname; // la ruta absoluta de donde estoy 

let arrayFiles = [];

files.searchFiles(route, (err,  content)=>{
  if (err){ console.log(err) }
  arrayFiles.push(content);
  console.log(arrayFiles);
  return arrayFiles;
});
console.log('INDEX:   '+ prueba);

// links.searchForLinks();
