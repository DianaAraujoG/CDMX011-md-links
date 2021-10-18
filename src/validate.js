const axios = require('axios').default;

const mock = [{
  href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
  text: 'Node.js http.get - Documentación oficial',
  file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\Prueba\\README.md'
}]

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
    return({
      ...link,
      'status': 404,
      'txStatus': 'FAIL'
    });
  })
}
//console.log(axiosStatus(mock));

exports.validate = validate;