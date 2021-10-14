const fs = require('fs');
const path = require('path');

let arrayLinksMD = [];
function searchForLinks (files){
    files.forEach(fileMD => {                                                                                                                              //(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9(@:%_\+.~#?&//=]*)                     
        console.log('-----------------------------------------------------------------'+fileMD);
        const expresionReg = /\[([^\]]+)\]\(https?:\/\/(www\.)?[\w\-]+(\.[\w\-]+)+[/#?]?.*\)/gi
        const file = fs.readFileSync(fileMD, 'utf8')
        let links =[];
        //console.log(file) 
        if(file.match(expresionReg)){
          links = file.match(expresionReg);
        }
          //console.log(links.length);
        links.forEach((texLink)=>{
          texLink = texLink.substr(0,texLink.length - 1 );
          texLink = texLink.slice(1);
          const arrayTexLink = texLink.split('](');
          if(arrayTexLink[0].length >= 50){
            arrayTexLink[0] = arrayTexLink[0].slice(0,49);
          }
           // console.log('TEXTO: ' + arrayTexLink[0] + ' URL: ' + arrayTexLink[1]);
          arrayLinksMD.push({
            'href':arrayTexLink[1],
            'text': arrayTexLink[0],
            'file': fileMD
          })
        })      
    });
//console.log(arrayLinksMD);
  return(arrayLinksMD);  
}//final de la funcion

exports.searchForLinks = searchForLinks;