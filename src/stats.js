function stats(allLinks, validate) {
  const resultStats = [];
  //  filesMD.forEach((mdFile) => {
  // const links = [];
  const unique = [];
  const broken = [];

  allLinks.forEach((element) => {
    //  if (mdFile == element.file) {
    // links.push(element.href);
    if (unique.includes(element.href)) {
      // continue;
    } else {
      unique.push(element.href);
    }
    if (validate) {
      if (element.txStatus == 'FAIL') {
        broken.push(element.href);
      }
    }
    // }
  });
  resultStats.push({
    total: allLinks.length,
    unique: unique.length,
    broken: broken.length,
  });
  // }); // fin del map

  return resultStats;
}

exports.stats = stats;
