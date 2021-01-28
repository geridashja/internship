const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text\html');
    fs.readFile('./index.html', (err, data) => {
        if(err){
            throw err;
        }
        else{
            res.write(data);
            res.end();
        }
    })
}).listen(3000);

// server.listen(3000, 'localhost', () => {
//     console.log('Listening at port 3000');
// })