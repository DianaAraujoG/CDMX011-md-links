const searchFiles = require('./searchFiles.js')
const fs = require('fs');
const path = require('path');

const files = searchFiles(process.argv[2], []);

function searchForLink (files){

    files.forEach(fileMD => {
        console.log('-----------------------------------------------------------------'+fileMD);
        
        const expresionReg = /\[([-a-zA-ZÀ-ÿ\u00f1\u00d10-9!"#$%&'(*+,)\-./:{;<|=>}?@[_`]+( [-a-zA-ZÀ-ÿ\u00f1\u00d10-9!"#$%&'(*+,)\-./:{;<|=>}?@[_`]+)*)\]\(https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*\)/gi
        fs.readFile(fileMD, 'utf8', function(err, file){
          let links =[];
          if(err){ console.log(err);}
            else{ //console.log(file) 
              if(file.match(expresionReg)){
                links = file.match(expresionReg);
                // console.log(file.match(expresionReg));
              }
              console.log(links.length);
              const objetosLinkks = links.map((texLink)=>{
                texLink = texLink.substr(0,texLink.length - 1 );
                texLink = texLink.slice(1);
                const arrayTexLink = texLink.split('](');
                console.log('TEXTO: ' + arrayTexLink[0] + ' URL: ' + arrayTexLink[1]);
              })
            }//fin del else
        })
    });
   
}