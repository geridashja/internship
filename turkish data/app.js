const express = require('express');
const path = require('path');
const scrap_names = require('./getnames');
const scrap_lastnames = require('./getlast_names');
// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();

app.get('/',async(req,res) => {
    try {
        let firstnames = await scrap_names();
        let lastnames = await scrap_lastnames();

        //save as CSV FILE
        // const csvWriter = createCsvWriter({
        //     path: 'file.csv',
        //     header: [
        //         {id: 'name', title: 'NAME'},
        //     ]
        // });
        // let res = [];
        // results.forEach(element => {
        //     let obj = new Object();
        //     obj.name = element.split('-')[0];
        //     res.push(obj);
        //     });
        // csvWriter.writeRecords(res)
        // .then(() => {
        //     console.log('...Done');
        res.sendFile('home.html', { root: path.join(__dirname) });
        
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(3000);
