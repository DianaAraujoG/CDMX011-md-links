const files = require('./searchFiles.js');
const links = require('./searchForLinks.js');
const validate = require('./validate.js');
const stats = require('./stats.js');

function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    // let res = []
    const filesMD = files.searchFiles(path);
    const fileWithLinks = links.searchForLinks(filesMD);
    switch (options) {
      case 'justLinks':
        resolve(fileWithLinks);
        break;
      case 'validate':
        validate.validate(fileWithLinks)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => { console.log(err); });
        break;
      case 'stast':
        const statsFn = stats.stats(fileWithLinks, false);
        resolve(statsFn);
        break;
      case 'both': {
        async function fn1() {
          const linksV = await validate.validate(fileWithLinks);
          const statsFn2 = stats.stats(linksV, true);
          resolve(statsFn2);
        }
        fn1();
      }
        break;
      default:
        reject(new Error('Opcion invalida'));
        break;
    }// switch
    // resolve(res)
  });// end promise
}// f()

exports.f = mdLinks;
