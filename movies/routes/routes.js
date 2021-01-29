const { render } = require('ejs');
const express = require('express');
const path = require('path');
const Movie = require('../module/model');
route = express.Router();

//ROUTES
route.get('/', (req, res) => {
    res.render('home');
});

route.get('/register_movies', (req, res) => {
    res.render('register_movies');
});

route.get('/show_movies', (req, res) => {
    res.render('show_movies');
});

//show books
route.get('/show', (req,res) => {
    let titlee = req.query;
    Movie.findOne({title: titlee.title}).then((result) =>{
        res.render('movie',{ title: result.title, year : result.year, isit: true});
    }).catch((err)=> console.log(err));
    console.log(titlee);
});

//register users
route.post('/add', (req, res) => {
    const newmovie = new Movie(req.body);
    newmovie.save().then((result)=>{
        res.render('home');
    }).catch((err) => console.log(err));
});

route.use((req,res)=>{
    res.render('404');
});

module.exports = route;
