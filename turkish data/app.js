const express = require('express');
const path = require('path');
const scrap = require('./getnames');

const app = express();

app.get('/',async(req,res) => {
    try {
        await scrap();
        res.sendFile('home.html', { root: path.join(__dirname) });
        
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(3000);
