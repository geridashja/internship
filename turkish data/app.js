const express = require('express');
const path = require('path');
const fs = require('fs')

 const app = express();

app.get('/',async(req,res) => {
    try {
        // let lastnames = [];
        // let firstnames = [];
        res.sendFile('home.html', { root: path.join(__dirname) });
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(3000);
