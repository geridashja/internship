const express = require('express');
const path = require('path');
const savedata = require('./operations/save_data');
const saveaccom = require('./operations/accommodation');
const pool = require('./database/database');
const savehotels = require('./operations/hotles');
const app = express();

app.get('/',async(req,res) => {
    try {
        
        await saveaccom();
        // var i =0;
        // .then(async res => {
        //     let hotel_iid = await pool.query('SELECT hotel_id FROM otel');
        //     // pool.query(`UPDATE person SET age = "${}"  WHERE id = 3`, (err, res) => {
        //     //     pool.end();
        //     // });
        //     hotel_iid.rows.slice(-(hotel_iid.rows.length)).forEach(async element => {
        //         let hotel_id = hotel_iid.rows[i++].hotel_id;
        //         console.log(hotel_id);
        //     });
        // })
    } catch (error) {
        console.log(error.message);
    }
    res.sendFile('./views/home.html', { root: path.join(__dirname) });
});

app.listen(3000);
