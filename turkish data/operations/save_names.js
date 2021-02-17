const fs = require('fs');
const pool = require('../database/database');
const csv = require('csvtojson');
const turk_id_gen = require('./turkid_generator');


const csvFilePath2='./files/turkish_data.csv'


async function savenames(){
    csv({
        noheader: false,
        headers: ['Names','Lastnames']
    })
    .fromFile(csvFilePath2)
        .then((jsonObj)=>{
            jsonObj.forEach(async element => {
                let firstname = element.Names.split(' ')[0];
                let lastname = element.Lastnames.split(' ')[0];
                let turk_iid = turk_id_gen();
                let newitem1 = await pool.query("INSERT INTO data (turk_id,firstname,lastname) VALUES ($1,$2,$3)", [turk_iid, firstname,lastname]);
            })
    })
}

module.exports = savenames;