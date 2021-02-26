const pool = require('../database/database');
const csv = require('csvtojson');
const csvFilePath2='./files/turkish_names.csv'



const savedata = async () => {
    return new Promise((resolve, reject) => {
        var i = 0;
        csv({
            noheader: false,
            headers: ['Lastnames','Fathername','Mothername']
        })
        .fromFile(csvFilePath2)
            .then((jsonObj)=>{
                jsonObj.forEach(async element => {
                    let lastname = element.Fathername.split(' ')[0];
                    let father = element.Mothername.split(' ')[0];
                    let mother = element.field4.split(' ')[0];
                    let newitem1 = await pool.query("INSERT INTO data (lastname,fathername,mothername) VALUES ($1,$2,$3)", [lastname,father,mother]);
                })
    })
      setTimeout(() => {
        resolve('DONE');
      }, 3000)
    })
  };
  
module.exports = savedata;