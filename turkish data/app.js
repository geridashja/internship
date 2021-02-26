const express = require('express');
const path = require('path');
const saveaccom = require('./operations/accommodation');
const pool = require('./database/database');
const app = express();

app.get('/',async(req,res) => {
    try {
        await saveaccom();
        await pool.query("UPDATE accommodation o SET person_id = d.turk_id FROM person d WHERE d.otel_id = o.hotel_id;")

    } catch (error) {
        console.log(error.message);
    }
    res.sendFile('./views/home.html', { root: path.join(__dirname) });
});

app.listen(3000);
