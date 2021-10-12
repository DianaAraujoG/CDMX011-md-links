#!/usr/bin/env node
const files = require('./searchFiles.js');
const links = require('./searchForLinks.js');
const validate = require('./validate.js');
const stats = require('./stats.js');
const fs = require('fs');
const path = require('path');
const readline = require("readline");

//console.log('HOLIWI');
const route = process.argv[2];//__dirname; // la ruta absoluta de donde estoy 

const filesMD = files.searchFiles(route);
//console.log(filesMD);
const fileWithLinks = links.searchForLinks(filesMD);

//console.log(validate.validate(fileWithLinks));

stats.stats(fileWithLinks, filesMD);
// console.log(fileWithLinks);
// const resValite = validate.validate(fileWithLinks)
//     .then(res =>{
//         console.log('PROMISEEEE:')
//         console.log(res);
//     })
//     .catch(err =>{ console.log(err); })


// const mdLinks = require("md-links");

// mdLinks("./some/example.md")
//   .then(links => {
//     // => [{ href, text, file }, ...]
//   })
//   .catch(console.error);

// mdLinks("./some/example.md", { validate: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }, ...]
//   })
//   .catch(console.error);

// mdLinks("./some/dir")
//   .then(links => {
//     // => [{ href, text, file }, ...]
//   })
//   .catch(console.error);