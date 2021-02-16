const fs = require('fs');
const pool = require('./database');
const csv = require('csvtojson');
const { json } = require('express');

const csvFilePath2='./files/turkish_data.csv'


function geri(){
    csv({
        noheader: false,
        headers: ['Names','Lastnames']
    })
    .fromFile(csvFilePath2)
        .then((jsonObj)=>{
            jsonObj.forEach(async element => {
                let firstname = element.Names.split(' ')[0];
                let lastname = element.Lastnames.split(' ')[0];
                let newitem1 = await pool.query("INSERT INTO data (firstname,lastname) VALUES ($1,$2)", [firstname,lastname]);
            })
    })
}

geri();