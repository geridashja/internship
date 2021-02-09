const Express = require('express');

const pool = require('../database');
const router = Express.Router();

//add a recipe
router.post('/create', async(req,res) =>{
    try {
        const item = req.body;
        const keys = Object.keys(item);
        const newitem = await pool.query("INSERT INTO all_recipes (body) VALUES ($1)", [keys[0]]);
        return res.json(newitem)
    } catch (err) {
        console.log(err.message);
    }
    // res.redirect('/');
});

router.get('/recipes', async(req,res) =>{
    try {
        const todoitems = await pool.query('SELECT * FROM all_recipes');
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




module.exports = router;