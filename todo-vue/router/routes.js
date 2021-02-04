const Express = require('express');
const ejs = require('ejs');

const router = Express.Router();

//import database
const db = require('../database');
const { response } = require('express');

//getting all todos from database
router.get('/', (req,res) => {
    const todoitem = db.query('SELECT * FROM todos ORDER BY id ASC', (error, result) => {
        if(error){
            throw error;
        }
        response.json(result)
    });
    res.render('home');
});

// router.post('/', (req,res) => {
//     const todoitem = new db;
//     db.save();
//     res.render('home');
// });
module.exports = router;