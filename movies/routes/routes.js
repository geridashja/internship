const express = require('express');
const path = require('path');
const Movie = require('../module/model');
route = express.Router();


route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

route.get('/register_movies', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register_movies.html'));
});

route.get('/show_movies', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/show_movies.html'));
});

// //get all registered users from database and show them to all_users view
// route.get('/all_users', (req,res) => {
//     Credentials.find((err, data)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.render('all_users', {users:data});
//         }
//     })
// });

//register users
route.post('/add', (req, res) => {
    const newmovie = new Movie(req.body);
    newmovie.save().then((result)=>{
        res.sendFile(path.join(__dirname, '../views/home.html'));
    }).catch((err) => console.log(err));
});

//delete users
route.use((req,res)=>{
    res.sendFile(path.join(__dirname, '../views/404.html'));
});

module.exports = route;
