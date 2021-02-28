const pool = require('../database/database');
const savealldata = require('./person_table');
const savehotels = require('./hotel_table');
const e = require('express');


const csvFilePath2 = './files/turkish_names.csv'

const saveaccom = async () => {
    await savealldata();
    return new Promise(async (resolve, reject) => {
        let hotel_iid = await pool.query('SELECT turk_id,otel_id FROM person').then(res =>{
            res.rows.forEach(async elem =>{
                let room_num = random_room_num(1,1000);
                let chars_ofplate = plate_stringsgen();
    
                let first_nums_ofplate = random_room_num(1,81);
                let last_nums_ofplate = random_room_num(100,999);
                let full_plate = pad(first_nums_ofplate).toString() + " " + chars_ofplate + " " + last_nums_ofplate;
    
                // let hotel_id = arr[j++];
                let acom_id = random_room_num(1,50000000);
                let turk_id = elem.turk_id;
                let newitem1 = await pool.query("INSERT INTO accommodation (acom_id,person_id,room_number,turkish_plate) VALUES ($1,$2,$3,$4)", [acom_id,turk_id,room_num,full_plate]);
                });
        });
        // await pool.query("UPDATE accommodation o SET person_id = d.turk_id FROM person d WHERE d.otel_id = o.hotel_id")
    setTimeout(() => {
      resolve('xxx');
    }, 1000)
  })
};
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