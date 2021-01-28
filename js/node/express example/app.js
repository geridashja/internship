const express = require('express');
const ejs = require('ejs');
const app = express();

//setting View Engine EJS
app.set('view engine', 'ejs');
//Basic Routing GET request
app.get('/', (req,res) =>{
    res.render('index');
});

app.get('/about', (req,res) =>{
    res.render('about');
});

app.get('/contact', (req,res) =>{
    res.render('contact');
});

app.listen(3000);

//Redirecting the User
app.get('/about-us', (req,res) =>{
    res.redirect('./about');
});

//404 Error

app.use((req,res) =>{
    res.status(404).render('404');
});