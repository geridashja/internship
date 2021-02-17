const fs = require('fs');
const pool = require('../database/database');
const csv = require('csvtojson');
const turk_id_gen = require('./turkid_generator');
const birthday_generator = require('./birthday_generator');

const csvFilePath2='./files/turkish_names.csv'


async function savedata(){
    csv({
        noheader: false,
        headers: ['Names','Lastnames']
    })
    .fromFile(csvFilePath2)
        .then((jsonObj)=>{
            jsonObj.forEach(async element => {
                let data = birthday_generator();
                const birthday = data[0];
                const year = data[1];
                const month = data[2];
                const day = data[3];
                let firstname = element.Names.split(' ')[0];
                let lastname = element.Lastnames.split(' ')[0];
                let turk_iid = turk_id_gen();
                // let newitem1 = await pool.query("INSERT INTO data (turk_id,firstname,lastname) VALUES ($1,$2,$3)", [turk_iid, firstname,lastname]);
            })
    })
}

module.exports = savedata;