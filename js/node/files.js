const fs = require('fs');

//all file functions are asynchronous


//reading files

fs.readFile('./facts.txt', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

//writing files

let wordd = "True";
if(!fs.existsSync('./facts.txt')){
    fs.writeFile('./facts.txt', wordd, () => {
        console.log("written to file");
    })
}
else{
    fs.appendFile('./facts.txt', wordd, (err) => {
        if(err){
            throw err;
        }
        console.log("written to file");
    })
}

//directories or create folders

fs.mkdir('./folder', (err) => {
    if(err){ 
        throw err;
    }
    console.log("Folder created");
})

//deleting files

fs.rmdir('./folder', (err) => {
    if(err){
        throw err;
    }
    console.log("Folder deleted");
})