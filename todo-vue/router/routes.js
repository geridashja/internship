const Express = require('express');
const Bodyparser = require('body-parser');
const ejs = require('ejs');
const router = Express.Router();

router.get('/', (req,res) => {
    res.render('home');
});

module.exports = router;