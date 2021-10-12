
function stats (allLinks, filesMD){
    const statsPearFile = filesMD.map((mdFile)=>{
        console.log(mdFile);
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
            }
        });
        console.log('Total: ' + links.length);
        console.log('Unique: ' + unique.length);
    })
    

}

exports.stats = stats;