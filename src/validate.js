const axios = require('axios').default;

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
      reject(new Error('No hay links'));
    } else {
      const newArray = allLinks.map((link) => axiosStatus(link));
      resolve(Promise.all(newArray));
    }
  });
}

exports.validate = validate;
