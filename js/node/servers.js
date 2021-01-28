//Creating a server

const http = require('http');

const server = http.createServer((request, response) => {
    console.log("Request made");
});

//Listen stay always open and check for request
server.listen(3000, 'localhost', () => {
    console.log("Listening for request on port 3000");
});
