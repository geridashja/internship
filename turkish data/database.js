const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password: "Geri001.",
    database: "test4",
    host: "localhost",
    port: 5432
});

module.exports = pool;