#!/usr/bin/env node
const files = require('./searchFiles.js');
const links = require('./searchForLinks.js');
const validate = require('./validate3.js');
const stats = require('./stats.js');
const fs = require('fs');
const path = require('path');
const readline = require("readline");

//console.log('HOLIWI');
const route = process.argv[2];//__dirname; // la ruta absoluta de donde estoy 

const prueba = files.searchFiles(route);
//console.log(prueba);
const fileWithLinks = links.searchForLinks(prueba);

validate.validate(fileWithLinks)
    .then(res=>{
        console.log('PRomise');
        console.log(res);
    })

// stats.stats(fileWithLinks);
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