const fs = require('node:fs');
const path=require('path');

const directoryPath= 'C:/Users/claud/OneDrive/Desktop/Temas 1/';


fs.readdir(directoryPath, (err,files)=>{
    var i=0;
    var validateDirectory=err?console.log(err):add_numeric_order_to_playlist_folder(files);
});

var order_music_by_numeric_order=(musicPlayList)=>{
    const arrayMusic=musicPlayList.sort((a,b)=>{
        const numA = parseInt(a.match(/\d+/)); 
        const numB = parseInt(b.match(/\d+/)); 
        
        return numA - numB;

    })

    return arrayMusic;
}


var add_numeric_order_to_playlist_folder=(musicPlayList)=>{

    var musicPlayListSorted=order_music_by_numeric_order(musicPlayList);
        
    for (let i = 0; i < musicPlayListSorted.length; i++) {
       
        console.log(musicPlayListSorted[i])
       

        var oldPath =directoryPath+ musicPlayListSorted[i];
        var oldPathSliced=oldPath.slice(42)
        var newPath=directoryPath+ i+")"+oldPathSliced;

        console.log(oldPathSliced)

       
        fs.rename(oldPath,newPath,(err)=>{
          if(err){
            console.log(err);
          }else{
            console.log("renamed files")
          }
        })

       
       
    }

    
}

