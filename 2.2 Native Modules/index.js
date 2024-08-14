const fs = require(fs);
FileSystem.writeFile("message.txt","Hello ",(err) =>{
    if (err) throw err;
    console.log("the file has been saved");
});
