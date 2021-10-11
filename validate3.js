const statusCode =  require('url-status-code');

function validate (allLinks) {
    return new Promise((resolve,reject)=>{
      if(allLinks.length == 0){
        reject('No hay ningun link');
      }else{
        allLinks.forEach(element => {
           const newElement = statusFunction(element.href);
           element.status = newElement;
         });
         resolve(Promise.all(allLinks));
      }//FINAL DEL ELSE   
    }) 
}
function statusFunction (href){
    statusCode(href, function (error, status) {
        if(error){
            return(error);
        }else
        if (status >= 200 && status <= 299) {
            console.log('entre')
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