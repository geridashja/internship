const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password: "Geri001.",
    database: "todo_database",
    host: "localhost",
    post: 5432
});

module.exports = pool;