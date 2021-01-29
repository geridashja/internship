const express = require('express');
route = express.Router();

route.get('/', (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname })
});

// route.get('/contact', (req, res) => {
//     res.render('contact');
// });

// route.get('/about', (req, res) => {
//     res.render('about');
// });

// route.get('/fill', (req, res) => {
//     res.render('fill');
// });

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

// //register users
// route.post('/credentials', (req, res) => {
//     const newfill = new Credentials(req.body);
//     newfill.save().then((result)=>{
//         res.render('home');
//     }).catch((err) => console.log(err));
// });

//delete users
route.use((req,res)=>{
    res.sendFile('./views/404.html', { root: __dirname })
});

module.exports = route;
