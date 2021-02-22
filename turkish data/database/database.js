const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password: "Geri001.",
    database: "test",
    client_encoding: "UTF8",
    host: "localhost",
    port: 5432
});

module.exports = pool;