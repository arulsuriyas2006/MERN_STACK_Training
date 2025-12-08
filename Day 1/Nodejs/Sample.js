let fs = require('fs');
console.log(fs);
fs.writeFile("sample.txt","This is new file created using Nodejs",(err)=>{
    console.log(err);
});