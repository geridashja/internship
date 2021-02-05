const bodyParser = require('body-parser');
const Express = require('express');
const router = Express.Router();
//import database
const client = require('./api/database');

//getting all todos from database
router.get('/', (req,res) => {
    client.query('SELECT * FROM todos', (error, result) => {
        if(error){
            throw error;
        }
        //this is how we accesss the data rows
        console.log((JSON.stringify(result.rows[2].body)));
        res.json(result);
    });
});


router.post('/', (req,res) => {
    client.query('INSERT INTO "todos" VALUES ($1, $2)', [2,"qi nbeth sot"]);
});
module.exports = router;