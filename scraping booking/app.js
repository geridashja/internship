const express = require('express');
const path = require('path');
const pool = require('./database');
const scrap = require('./booking');

const app = express();


app.get('/',async(req,res) => {
    try {
        let array = await scrap();
        let resu = [];
        array.forEach(async element => {
            let obj = new Object();
            obj.name = element.split(',')[0];
            obj.city = element.split(',')[1];
            obj.country = element.split(',')[2];
            console.log(obj.name);
            let newitem = await pool.query("INSERT INTO otel (hotel_name, city, country) VALUES ($1,$2,$3)", [obj.name, obj.city ,obj.country]);
            resu.push(obj);
        });
        console.log(resu);
        res.sendFile('home.html', { root: path.join(__dirname) });
        
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(3000);