const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Geri001.",
    database: "todo" 
});

client.connect();
module.exports = client;