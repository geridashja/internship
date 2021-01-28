const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const Credentials = require('./models/add');
const app = express();
app.use(express.urlencoded({ extended: true }));

const URI ="mongodb+srv://pokaripo:Geri001.@node.xyq4k.mongodb.net/credentials?retryWrites=true&w=majority";
app.set('view engine', 'ejs');

mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result)=> app.listen(3000)).catch((err)=>console.log(err));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/fill', (req, res) => {
    res.render('fill');
});

//get all registered users from database and show them to all_users view
app.get('/all_users', (req,res) => {
    Credentials.find((err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.render('all_users', {users:data});
        }
    })
});

//register users
app.post('/credentials', (req, res) => {
    const newfill = new Credentials(req.body);
    newfill.save().then((result)=>{
        res.render('home');
    }).catch((err) => console.log(err));
});

//delete users
app.use((req,res)=>{
    res.status(404).render('404');
});
