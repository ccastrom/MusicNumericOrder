const fs = require('node:fs');
const path=require('path');

const directoryPath= 'C:/Users/claud/OneDrive/Desktop/Temas 1';

fs.readdir(directoryPath, (err,files)=>{
    var validateDirectory=err?console.log(err):console.log(files)

   
    

});