const Express = require('express');

const pool = require('../database');
const router = Express.Router();

// router.get('/', (req,res) => {
//     res.render('home');
// });

router.get('/', async(req,res) =>{
    try {
        const todoitems = await pool.query('SELECT * FROM todo');
        res.render('home', {todoitems: todoitems});
        // console.log(todoitems);
    } catch (error) {
        console.log(error.message);
    }

});

//create a todo item
router.post('/', async(req,res) =>{
    // const body = req.query;
    // console.log(body);
    // res.render('home');
    try {
        const body = req.body;
        // const newitem = await pool.query("INSERT INTO todo (body) VALUES ($1)", [body]);
        console.log(body)
    } catch (err) {
        console.log(err.message);
    }
});


module.exports = router;