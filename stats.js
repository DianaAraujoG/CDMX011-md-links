
function stats (allLinks, filesMD, validate){
    const resultStats = [];
    const statsPearFile = filesMD.map((mdFile)=>{
        const links = [];
        const unique = [];
        const broken = [];

        allLinks.forEach(element => {
            if( mdFile == element.file){
                links.push(element.href)
                if(unique.includes(element.href)){
                    //continue;
                }else{
                    unique.push(element.href);
                }
                if(validate){
                    if(element.txStatus == 'FAIL'){
                        broken.push(element.href);
                    }    
                }
            }
        });
        resultStats.push({
            'file': mdFile,
            'total': links.length,
            'unique': unique.length,
            'broken': broken.length
        })
        // console.log(mdFile);
        // console.log('Total: ' + links.length);
        // console.log('Unique: ' + unique.length);
        // console.log('Broken: ' + broken.length);
    }) // fin del map
    
    return resultStats;
}

exports.stats = stats;