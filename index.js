// module.exports = () => {
//   // ...
// };
const fs = require('fs');
const path = require('path');
const readline = require("readline");

const route = process.argv[2];//__dirname; // la ruta absoluta de donde estoy 

function searchFiles (route, allLinks){
  // let allLinks = [];
  const absolute = path.resolve(route);
  fs.readdir(absolute, function (err, files){
    files.forEach((elem)=>{
      const newroute = path.join(absolute,elem);
      fs.lstat(newroute, function(err, element){
        if(err){ console.log(err) }
        else
        if(element.isDirectory()){
          searchFiles(newroute, allLinks);
        }
        else{
          if (path.extname(elem) === '.md' || path.extname(elem) === '.markdown'){
            allLinks.push(newroute);
            console.log(allLinks);
          }
        }
      })
  })
})
 return allLinks;
}

function searchForLink (fileMD){
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
}
searchFiles(route, []);
