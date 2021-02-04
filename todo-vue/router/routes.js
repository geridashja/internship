const Express = require('express');
const router = Express.Router();
//import database
const client = require('./api/database');

//getting all todos from database
router.get('/', (req,res) => {
    const todoitem = client.query('SELECT * FROM todos', (error, result) => {
        if(error){
            throw error;
        }
        //this is how we accesss the data rows
        //JSON.stringify(result.rows[0].todo)
        res.json(result);
    });
});

// router.post('/', (req,res) => {
//     const todoitem = new db;
//     db.save();
//     res.render('home');
// });
module.exports = router;