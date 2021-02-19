const express = require('express');
const path = require('path');
const savedata = require('./operations/save_data');
const saveaccom = require('./operations/accommodation');

const app = express();

app.get('/',async(req,res) => {
    try {
        // await savedata();
        await saveaccom();
    } catch (error) {
        console.log(error.message);
    }
    res.sendFile('./views/home.html', { root: path.join(__dirname) });
});


app.listen(3000);
