const pool = require('../database/database');
const csv = require('csvtojson');
const turk_id_gen = require('./turkid_generator');
const birthday_generator = require('./birthday_generator');
const savedata = require('./data');
const savehotels = require('./hotel_table');
const csvFilePath2='./files/turkish_names.csv'

const savealldata = async () => {
    return new Promise(async (resolve, reject) => {
        await savedata();
        await savehotels();
        let last_names = await pool.query('SELECT lastname,fathername,mothername FROM data');
        csv({
            noheader: false,
            headers: ['Firstnames']
        })
        .fromFile(csvFilePath2)
            .then((jsonObj)=>{
                for(let i=0;i<125;i++){
                    jsonObj.forEach(async element => {
                        let data = birthday_generator();
                        let birthday = data[0];
                        let year = data[1];
                        let month = data[2];
                        let day = data[3];
        
                        var d = new Date();
        
                        var currentyear = d.getFullYear();
                        let age = currentyear-year;
        
                        var isMarried = "";
                        if(age > 18)
                            isMarried = "Yes"
                        else
                            isMarried = "No"
        
                        let firstname = element.Firstnames.split(' ')[0];
                        let lastname = last_names.rows[Math.floor((Math.random() * 8000) + 1)].lastname;
                        let father = last_names.rows[Math.floor((Math.random() * 8000) + 1)].fathername;
                        let mother = last_names.rows[Math.floor((Math.random() * 8000) + 1)].mothername;

                        let turk_iid = turk_id_gen();

                        let birthobj = new Date(birthday);

                        let birthcountry = "TURKEY";
                        let newitem1 = await pool.query("INSERT INTO person (turk_id,firstname, lastname,fathername,mothername,ismarried,birthyear,birthmonth,birth_day,birthday,birthcountry) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)", [turk_iid,firstname,lastname,father,mother,isMarried,year,month,day,birthobj,birthcountry]);
                    })
                }
        
        })
      setTimeout(() => {
        resolve('xxx');
      }, 1000)
    })
  };
  
module.exports = savealldata;