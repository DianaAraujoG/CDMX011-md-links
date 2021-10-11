
function stats (allLinks){
    const links = allLinks.length;
    const unique = [];
    const broken = [];

    allLinks.forEach(element => {
        if(unique.includes(element.href)){
            //continue;
        }else{
            unique.push(element.href);
        }
    });
    console.log('Total: ' + links);
    console.log('Unique: ' + unique.length);

}

exports.stats = stats;