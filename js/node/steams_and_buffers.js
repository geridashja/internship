// Streams   
// They are data-handling method and are used to read or write input into output sequentially. 
// Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end 
// information exchange in an efficient way.

// A buffer is a temporary memory that a stream take to hold some data until it is consumed

const fs = require('fs');

const readStream = fs.createReadStream('./facts.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./facts2.txt');

readStream.on('data', (chunk) =>{
    console.log("----NEW CHUNK----")
    console.log(chunk);
})

readStream.pipe(writeStream); //writing to the data