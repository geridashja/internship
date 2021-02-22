const express = require('express');
const path = require('path');
const savedata = require('./operations/save_data');
const saveaccom = require('./operations/accommodation');
const scrap = require('./operations/hotles')
const pool = require('./database/database');
const app = express();

app.get('/',async(req,res) => {
    try {
        // await savedata();
        // await saveaccom();
        let array = await scrap();
        let resu = [];
        array.forEach(async element => {
            let obj = new Object();
            obj.id = random_room_num(10000,50000);
            obj.name = element.split(',')[0];
            obj.city = element.split(',')[1];
            obj.country = element.split(',')[2];
            let newitem = await pool.query("INSERT INTO otel (hotel_id,hotel_name, city, country) VALUES ($1,$2,$3,$4)", [obj.id,obj.name, obj.city ,obj.country]);
        });
    } catch (error) {
        console.log(error.message);
    }
    res.sendFile('./views/home.html', { root: path.join(__dirname) });
});

function random_room_num(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}

app.listen(3000);
