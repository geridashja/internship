const Express = require('express');
const Bodyparser = require('body-parser');
const ejs = require('ejs');

const router = Express.Router();

//import database
const db = require('../database');

router.get('/', (req,res) => {
    // const todoitem = db.find();
    res.render('home');
});

// router.post('/', (req,res) => {
//     const todoitem = new db;
//     db.save();
//     res.render('home');
// });
module.exports = router;