const axios = require('axios').default;

// const mock = [{
//   href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
//   text: 'Node.js http.get - Documentación oficial',
//   file: 'C:\\Cursos\\GitHub\\CDMX011-md-links\\Prueba\\README.md'
// }]

async function axiosStatus(link) {
  return await axios.get(link.href)
    .then((response) => ({
      ...link,
      status: response.status,
      txStatus: 'OK',
    }))
    .catch((error) => ({
      ...link,
      status: 404,
      txStatus: 'FAIL',
      errorr: error.response,
    }));
}

function validate(allLinks) {
  return new Promise((resolve, reject) => {
    if (allLinks.length == 0) {
      reject(new Error('No hay ilinks'));
    } else {
      const newArray = allLinks.map((link) => axiosStatus(link));
      resolve(Promise.all(newArray));
    }
  });
}

exports.validate = validate;
