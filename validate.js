const axios = require('axios');

function validate (allLinks){
  return new Promise((resolve,reject)=>{
    const newArray = allLinks.map((link)=>{
      return axiosStatus(link);
    })
    resolve(Promise.all(newArray));
  })
}

async function axiosStatus (link){
  return await axios.get(link.href)
  .then(function (response) {
    // handle success
    return({
      ...link,
      'status': response.status,
      'txStatus': 'OK'
    });
  })
  .catch(function (error) {
    // handle error
    //console.log(error)
    return({
      ...link,
      'status': error.response.status,
      'txStatus': 'FAIL'
    });
  })
}

exports.validate = validate;