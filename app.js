const fs = require('node:fs');
const path=require('path');

const directoryPath= 'C:/Users/claud/OneDrive/Desktop/Temas 1';


var add_numeric_order_to_playlist=(musicPlayList)=>{

    
}

fs.readdir(directoryPath, (err,files)=>{
    var validateDirectory=err?console.log(err):add_numeric_order_to_playlist(files)

   
    

});