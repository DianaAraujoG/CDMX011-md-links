const request = require('request');

function validate (allLinks) {
    return new Promise((resolve,reject)=>{
      if(allLinks.length == 0){
        reject('No hay ningun link');
      }else{
        allLinks.forEach(element => {
           const newElement = requestFunction(element.href);
           element.status = newElement;
         });
         resolve(allLinks);
      }//FINAL DEL ELSE   
    }) 
}
function requestFunction (href){
    request(href, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('OK') 
            return 'OK';
            // element.status = 'OK'
            // Print the google web page.
        }else{
            return 'FAIL'
            //console.log(element.status);
        }
    }) 
}
exports.validate = validate;

// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log("URL is OK") // Print the google web page.
//   }
// })