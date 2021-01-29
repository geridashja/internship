const { render } = require('ejs');
const express = require('express');
const path = require('path');
const { title } = require('process');
const Movie = require('../module/model');
route = express.Router();

//ROUTES
// redering using EJS for dynamic data
route.get('/', (req, res) => {
    res.render('home');
});

route.get('/register_movies', (req, res) => {
    res.render('register_movies');
});

route.get('/show_movies', (req, res) => {
    res.render('show_movies');
});

route.get('/delete_movies', (req, res) => {
    res.render('delete_movies');
});

//show books
route.get('/show', (req,res) => {
    let titlee = req.query;
    Movie.findOne({title: titlee.title}).then((result) =>{
        //if the book we search is not in the database, then show 404 ERROR Page
        if(result == null){
            res.render('404');
        }
        else{
            res.render('movie',{ title: result.title, year : result.year, isit: true});
        }
    }).catch((err)=> console.log(err));
    console.log(titlee);
});

//add books
route.post('/add', (req, res) => {
    const newmovie = new Movie(req.body);
    newmovie.save().then((result)=>{
        res.render('home');
    }).catch((err) => console.log(err));
});

//delete
route.get('/delete', (req, res) => {
    let movie = req.query;
    let delit= Movie.findOne({title: movie.title});
    delit.remove().then((result)=>{
        res.render('home');
    });
    console.log(movie);
});


route.use((req,res)=>{
    res.render('404');
});

module.exports = route;
