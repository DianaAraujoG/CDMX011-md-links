const fs = require('fs');
const path = require('path');

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

exports.searchFiles = searchFiles;