const Express = require('express');

const pool = require('../database');
const router = Express.Router();

//add a recipe
router.post('/create', async(req,res) =>{
    try {
        const item = req.body;
        //axios.post returns an object so i need to use Object.keys in order to get the keys
        const keys = Object.keys(item);
        //object.keys return a list so keys[0] is the string i need to get
        const newitem = await pool.query("INSERT INTO all_recipes (body) VALUES ($1)", [keys[0]]);
        
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

//delete recipe
router.delete('/:id', async(req,res) => {
    try {
        const deleteditem = await pool.query('DELETE FROM all_recipes WHERE all_id = $1', [1]);
    } catch (error) {
        console.log(error.message);
    }
    res.redirect('/');
});

// //update recipe
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