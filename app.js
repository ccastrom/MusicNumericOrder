const fs = require('node:fs');
const path=require('path');

const directoryPath= 'C:/Users/claud/OneDrive/Desktop/Temas 1';


var add_numeric_order_to_playlist=(musicPlayList)=>{
        
    for (let i = 0; i < musicPlayList.length; i++) {

        var oldPath ='C:/Users/claud/OneDrive/Desktop/Temas 1/'+ musicPlayList[i];
        var newPath='C:/Users/claud/OneDrive/Desktop/Temas 1/'+ i+")"+musicPlayList[i];

        console.log(newPath)

        // fs.rename(oldPath,newPath,(err)=>{
        //   if(err){
        //     console.log(err);
        //   }else{
        //     console.log("renamed files")
        //   }
        // })

       
       
    }

    
}

fs.readdir(directoryPath, (err,files)=>{
    var i=0;
    var validateDirectory=err?console.log(err):add_numeric_order_to_playlist(files);

});