const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password: "Geri001.",
    database: "files",
    host: "localhost",
    port: 5432
});

module.exports = pool;