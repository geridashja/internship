const Express = require('express');

const pool = require('../database');
const router = Express.Router();

//create a todo item
router.post('/create', async(req,res) =>{
    try {
        // const newitem = await pool.query("INSERT INTO all_recipes (body) VALUES ($1)", [req.body.body]);
        // res.json(newitem);
        const item = req.body;
        console.log(item);
        // res.json(req.body);
    } catch (err) {
        console.log(err.message);
    }
    res.redirect('/');
});

router.get('/recipes', async(req,res) =>{
    try {
        const todoitems = await pool.query('SELECT * FROM all_recipes');
        // res.render('home', {todoitems: todoitems});
        return res.json(todoitems);
    } catch (error) {
        console.log(error.message);
    }
});

//delete items
router.delete('/:id', async(req,res) => {
    try {
        const deleteditem = await pool.query('DELETE FROM all_recipes WHERE all_id = $1', [1]);
    } catch (error) {
        console.log(error.message);
    }
    res.redirect('/');
});

// //update items
// router.post('/:id', async(req,res) =>{
//     try {
//         const id = req.params.id;
//         const newbody = req.body.body;
//         const updateditem = await pool.query("UPDATE todo SET body = $1 WHERE todo_id = $2", [newbody, id]);
//     } catch (error) {
//         console.log(error.message);
//     }
//     res.redirect('/');
// })



module.exports = router;