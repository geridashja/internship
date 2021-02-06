const Express = require('express');

const pool = require('../database');
const router = Express.Router();

router.get('/', (req,res) => {
    res.render('home');
});

module.exports = router;