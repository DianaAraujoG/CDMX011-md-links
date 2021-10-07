const fs = require('fs');
const path = require('path');

let arrayLinksMD = [];
function searchForLinks (files){
    files.forEach(fileMD => {
        console.log('-----------------------------------------------------------------'+fileMD);
        const expresionReg = /\[([-a-zA-ZÀ-ÿ\u00f1\u00d10-9!"#$%&'(*+,)\-./:{;<|=>}?@[_`]+( [-a-zA-ZÀ-ÿ\u00f1\u00d10-9!"#$%&'(*+,)\-./:{;<|=>}?@[_`]+)*)\]\(https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*\)/gi
        const file = fs.readFileSync(fileMD, 'utf8')
        let links =[];
        //console.log(file) 
        if(file.match(expresionReg)){
          links = file.match(expresionReg);
          // console.log(file.match(expresionReg));
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
            'file': fileMD,
            'text': arrayTexLink[0],
            'url':arrayTexLink[1]
          })
        })      
    });
//console.log(arrayLinksMD);
  return(arrayLinksMD);  
}//final de la funcion

exports.searchForLinks = searchForLinks;