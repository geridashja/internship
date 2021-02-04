const {Client} = require('pg');

const connectionString = 'postgres://postgres:Geri001.@localhost:5432/todo';
const client = new Client({connectionString});
client.connect();
module.exports = client;