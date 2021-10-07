
const fs = require('fs');
const path = require('path');
const { findSourceMap } = require('module');


let allLinks = [];
function searchFiles (route){
  const absolute = path.resolve(route);
  const files = fs.readdirSync(absolute);
    files.forEach((elem)=>{
      const newroute = path.join(absolute,elem);
      if(fs.statSync(newroute).isDirectory()){
        searchFiles(newroute);
      }
      else{
        if (path.extname(elem) === '.md' || path.extname(elem) === '.markdown'){
          allLinks.push(newroute);
        }
      }
    })
 return allLinks;
}

exports.searchFiles = searchFiles;