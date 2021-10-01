// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');
const readline = require("readline");

const route = process.argv[2];//__dirname; // la ruta absoluta de donde estoy 

function busqueda (route){
  console.log(route);
  fs.readdir(route, function (err, files){
    files.forEach((elem)=>{
      const newroute = path.join(route,elem);
      
      if(path.extname(elem)){
        if (path.extname(elem) === '.md' || path.extname(elem) === '.markdown'){
          searchForLink(elem);
        }
      }
      else{
        
        fs.lstat(elem, function(err, element){
          if(err){ console.log(err) }
          else
          if(element.isDirectory()){
            console.log('Carpeta: '+elem + ' path: ' + path.extname(elem)) ;
            console.log(newroute);
            // if(elem != '.git'){
            //     busqueda(newroute);
            // }
          }
      })
      
      // fs.lstat(elem, function(err, element){
      //   if(err){ console.log(err) }
      //   else
      //   if(element.isDirectory()){
      //     console.log('Carpeta: '+elem + ' path: ' + path.extname(elem)) ;
      //     console.log(newroute);

      //     // if(elem != '.git'){
      //     //   busqueda(newroute);
      //     // }
      //     //console.log(path.toNamespacedPath(elem))
      //    // const newroute = path.toNamespacedPath(elem)
      //     //console.log(route + "\"  + elem);
      //    // busqueda(newroute);
      //   }
      //   else{
      //     if (path.extname(elem) === '.md' || path.extname(elem) === '.markdown'){
      //       searchForLink(elem);
      //     }
      //   }
        
      }
    })
  })
}

function searchForLink (fileMD){
  //if (path.extname(fileMD) === '.md' || path.extname(fileMD) === '.markdown'){
    console.log(fileMD);
    const expresionReg = /\[[\w]{1,}\]\(https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*\)/gi
    fs.readFile(fileMD, 'utf8', function(err, file){
      if(err){ console.log(err);}
       else{ //console.log(file) 
        console.log(file.match(expresionReg));
      }//fin del else
    })
  //}
}
busqueda(route);
