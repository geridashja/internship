const express = require('express');
const mongoose = require('mongoose');
const approutes = require('./routes/approutes');
const app = express();

const URI = "mongodb+srv://pokaripo:Geri001.@node.xyq4k.mongodb.net/credentials?retryWrites=true&w=majority";
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result)=> app.listen(3000)).catch((err)=>console.log(err));

app.use(approutes);