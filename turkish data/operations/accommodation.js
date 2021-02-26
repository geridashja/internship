const pool = require('../database/database');
const savealldata = require('./save_data');
const savehotels = require('./hotles');
const e = require('express');


const csvFilePath2 = './files/turkish_names.csv'


async function saveaccom(){
    await savealldata();
    let hotel_iid = await pool.query('SELECT otel_id FROM person').then(res =>{
        res.rows.forEach(async elem =>{
            let room_num = random_room_num(1,1000);
            let chars_ofplate = plate_stringsgen();

            let first_nums_ofplate = random_room_num(1,81);
            let last_nums_ofplate = random_room_num(100,999);
            let full_plate = pad(first_nums_ofplate).toString() + " " + chars_ofplate + " " + last_nums_ofplate;

            // let hotel_id = arr[j++];
            let hotel_id = elem.otel_id;
            let newitem1 = await pool.query("INSERT INTO accommodation (hotel_id,room_number,turkish_plate) VALUES ($1,$2,$3)", [hotel_id,room_num,full_plate]);
            });
    });
}


function pad(num) {
    if(num < 10){
        num = num.toString();
        return "0" + num;
    }
    return num;
}

function random_room_num(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}


function plate_stringsgen(){
   let length = 2;
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


module.exports = saveaccom;