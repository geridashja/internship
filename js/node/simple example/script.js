const http = require('http');
const fs = require('fs');

path = '.';
const server = http.createServer((req,res) => {
    if(req.url == '/home'){
        path+= '/home.html';
    }
    else if(req.url == '/contact'){
        path+= '/contact.html';
    }
    else if(req.url == '/about' ){
        path+= '/about.html';
    }
    res.setHeader('Content-Type', 'text\html');
    fs.readFile(path,(err,data) =>{
        if(err)
            throw err;
        else{
            res.write(data);
            res.end();
        }
    })
}).listen(3000);