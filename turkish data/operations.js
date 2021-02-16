const fs = require('fs');
const pool = require('./database');
const csv = require('csvtojson');

const csvFilePath='./files/turkish_firstnames.csv'

//save firstnames
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    // let name = jsonObj.Names.split(' ')[0];
    jsonObj.forEach(async element => {
        let name = element.Names.split(' ')[0];
        let newitem = await pool.query("INSERT INTO data (firstname) VALUES ($1)", [name]);
    })
})
 
// Async / await usage
// const firstnames =  csv().fromFile(csvFilePath);
// console.log(firstnames)