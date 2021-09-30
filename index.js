// module.exports = () => {
//   // ...
// };

const fs = require('fs')
const path = require('path')

const route = __dirname; // la ruta absoluta de donde estoy 

function busqueda (route){
  console.log(route);
  fs.readdir(route, function (err, files){
    files.forEach((elem)=>{
      fs.lstat(elem, function(err, element){
        if(err){ console.log(err) }
        else
        if(element.isDirectory()){
          console.log('Carpeta: '+elem)
          // console.log(path.toNamespacedPath(elem))
          const newroute = path.toNamespacedPath(elem)
          
          //console.log(route + "\"  + elem);
          //busqueda('C:'+prueba[1]);
        }
        else{
          //if (path.extname(element) === '.md' || path.extname(element) === '.markdown'){
            searchForLink(elem);
          //}
        }
        
      })
    })
  })
}

function searchForLink (fileMD){
  if (path.extname(fileMD) === '.md' || path.extname(fileMD) === '.markdown'){
    console.log(fileMD);
    fs.readFile(fileMD, function(err, file){
      if(err){ console.log(err) }
       else{ console.log(file.toString()) }
    })
  }
}
busqueda(route);
