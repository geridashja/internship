const express = require('express');
const path = require('path');
const savenames = require('./operations/save_names');


const app = express();

app.get('/',async(req,res) => {
    try {
        await savenames();
    } catch (error) {
        console.log(error.message);
    }
    res.sendFile('./views/home.html', { root: path.join(__dirname) });
});


app.listen(3000);
