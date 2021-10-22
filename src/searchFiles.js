const fs = require('fs');
const path = require('path');

const allLinks = [];
function searchFiles(route) {
  const absolute = path.resolve(route);
  let files = [];
  if (path.extname(absolute)) {
    files = fs.readFileSync(absolute);
  } else {
    files = fs.readdirSync(absolute);
  }
  files.forEach((elem) => {
    const newroute = path.join(absolute, elem);
    if (fs.statSync(newroute).isDirectory()) {
      searchFiles(newroute);
    } else if (path.extname(elem) === '.md' || path.extname(elem) === '.markdown') {
      allLinks.push(newroute);
    }
  });
  return allLinks;
}

exports.searchFiles = searchFiles;
