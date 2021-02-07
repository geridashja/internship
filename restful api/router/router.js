const Express = require('express');

const pool = require('../database');
const router = Express.Router();

// router.get('/', (req,res) => {
//     res.render('home');
// });


//create a todo item
router.post('/', async(req,res) =>{
    // const body = req.query;
    // console.log(body);
    // res.render('home');
    try {
        const body = req.body.body;
        const newitem = await pool.query("INSERT INTO todo (body) VALUES ($1)", [body]);
        console.log(body)
    } catch (err) {
        console.log(err.message);
    }
    res.redirect('/');
});

router.get('/', async(req,res) =>{
    try {
        const todoitems = await pool.query('SELECT * FROM todo');
        res.render('home', {todoitems: todoitems});
        // console.log(todoitems);
    } catch (error) {
        console.log(error.message);
    }
});

//delete items
router.get('/:id', async(req,res) => {
    try {
        const id = req.params.id;
        const deleteditem = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);
    } catch (error) {
        console.log(error.message);
    }
    res.redirect('/');
});

//update items
router.post('/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const newbody = req.body.body;
        const updateditem = await pool.query("UPDATE todo SET body = $1 WHERE todo_id = $2", [newbody, id]);
    } catch (error) {
        console.log(error.message);
    }
    const id = req.params.id;
    res.redirect('/');
    
    console.log(id);
})



module.exports = router;