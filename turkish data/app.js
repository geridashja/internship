const express = require('express');
const path = require('path');
const savenames = require('./save_names');


const app = express();

app.get('/',async(req,res) => {
    try {
        await savenames();
        res.sendFile('home.html', { root: path.join(__dirname) });
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(3000);
