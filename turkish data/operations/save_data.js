const fs = require('fs');
const pool = require('../database/database');
const csv = require('csvtojson');
const turk_id_gen = require('./turkid_generator');
const birthday_generator = require('./birthday_generator');
var moment = require('moment');
const parse = require('postgres-date')


const csvFilePath2='./files/turkish_names.csv'


async function savedata(){
    csv({
        noheader: false,
        headers: ['Names','Lastnames','Fathername','Mothername','Gender']
    })
    .fromFile(csvFilePath2)
        .then((jsonObj)=>{
            jsonObj.forEach(async element => {
                //getting birthday details
                let data = birthday_generator();
                let birthday = data[0];
                let year = data[1];
                let month = data[2];
                let day = data[3];
                //getting the age of person
                var d = new Date();
                var currentyear = d.getFullYear();
                let age = currentyear-year;
                var isMarried = "";
                if(age > 18)
                    isMarried = "Yes"
                else
                    isMarried = "No"
                //details from csv
                let firstname = element.Names.split(' ')[0];
                let lastname = element.Lastnames.split(' ')[0];
                let father = element.Fathername.split(' ')[0];
                let mother = element.Mothername.split(' ')[0];
                let gender = element.Gender.split(' ')[0];
                //getting the turkish id generated
                let turk_iid = turk_id_gen();
                let birthobj = new Date(birthday);
                birthcountry = "TURKEY";
                //saving to database
                // let newitem1 = await pool.query("INSERT INTO data (turk_id,firstname,lastname,fathername,mothername,gender,ismarried,birthyear,birthmonth,birthdayy,data,birthcountry) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)", [turk_iid, firstname,lastname,father,mother,gender,isMarried,year,month,day,birthobj,birthcountry]);
            })
    })
}

module.exports = savedata;