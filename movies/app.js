const express = require('express');
const mongoose = require('mongoose');
const Route = require('./routes/routes');

const app = express();
app.use(express.urlencoded({ extended: true }));

const URI ="mongodb+srv://pokaripo:Geri001.@node.xyq4k.mongodb.net/movies?retryWrites=true&w=majority";

//I added { useNewUrlParser: true, useUnifiedTopology: true } to remove unnecessary warnings in terminal 
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result)=> app.listen(3000)).catch((err)=>console.log(err));

app.use(Route);