const request = require('request');

const validate =  (allLinks) => {
    //   if(allLinks.length == 0){
    //     reject('No hay ningun link');
    //   }else{

        allLinks.forEach( (element) => {
        //    const newElement = 
           element.status = await requestFunction(element.href);
         });
         return (allLinks);
    //   }//FINAL DEL ELSE   
    
}

function requestFunction (href){
    console.log('dentro')
    return new Promise((resolve,reject)=>{
        if(href){
            request(href, function (error, response, body) {
                resolve(response.statusCode)
                // const res = '';
                // if (!error && response.statusCode == 200) {
                //     console.log('OK') 
                //     resolve('OK');
                //     // element.status = 'OK'
                //     // Print the google web page.
                // }else{
                //     resolve('FAIL');
                //     //console.log(element.status);
                // }
                
            })
        }else{
            reject('no hay');
        }
    })
}

exports.validate = validate;

