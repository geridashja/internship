const express = require('express');
const path = require('path');
const db = require('./database');
const app = express();


app.get('/',(req,res) => {
    res.sendFile('home.html', { root: path.join(__dirname) });
})

app.listen(3000);