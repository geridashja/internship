const Express = require('express');

const pool = require('../database');
const router = Express.Router();

router.get('/', (req,res) => {
    res.render('home');
});

//create a todo item
router.post('/todos', async(req,res) =>{
    try {
        console.log(req.body);
    } catch (err) {
        console.log(err.message);
    }
})
module.exports = router;