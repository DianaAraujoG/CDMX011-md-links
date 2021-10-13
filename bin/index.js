#!/usr/bin/env node
const mdLinks = require('../mdlinks.js');

//console.log('HOLIWI');
//'C:/Cursos/GitHub/CDMX011-md-links/Prueba' // la ruta absoluta de donde estoy 
const path = process.argv[2]
const op1 = process.argv[3];
const op2 = process.argv[4];

if(!op1 && !op2){
    mdLinks.f(path, 'justLinks')
     .then(res=>{
         console.log(res);
     })
     .catch(err =>{ console.log(err); })
}else
if(op1 == '--validate' && !op2){
    mdLinks.f(path, 'validate')
     .then(res=>{
         console.log(res);
     })
     .catch(err =>{ console.log(err); })
}else
if(op1 == '--stats' && !op2){
    mdLinks.f(path, 'stast')
     .then(res=>{
         console.log(res);
     })
     .catch(err =>{ console.log(err); })
}else
if(op1 == '--stats' && op2 == '--validate'){
    mdLinks.f(path, 'both')
     .then(res=>{
         console.log(res);
     })
     .catch(err =>{ console.log(err); })
}
