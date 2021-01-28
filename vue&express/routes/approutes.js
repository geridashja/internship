const express = require('express');
const routes = express.Router();
const path = require('path');
const Info = require('../models/info')

routes.use(express.urlencoded({ extended: true }));

routes.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next();
})
routes.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, '../views/home.html'));
})

routes.get('/add_users', (req,res) =>{
    res.sendFile(path.join(__dirname, '../views/add_users.html'));
})

//POST 
routes.post('/info', (req,res) =>{
    let newuser = new Info(req.body);
    newuser.save().then(result => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    }).catch((err) => console.log(err));
})

routes.use((req,res) =>{
    res.sendFile(path.join(__dirname, '../views/404.html'));
})

module.exports = routes;
