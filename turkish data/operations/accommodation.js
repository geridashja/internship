const pool = require('../database/database');
const savedata = require('./save_data');
const savehotels = require('./hotles');
const e = require('express');


const csvFilePath2='./files/turkish_names.csv'


async function saveaccom(){
    await savehotels();
    await savedata();
    let hotel_iid = await pool.query('SELECT hotel_id FROM otel');
    //.slice(-(hotel_iid.rows.length))
    var i = 0;
    var j=0;
    let len = hotel_iid.rows.length;
    let turk_iid = await pool.query('SELECT turk_id FROM person');
    for(k = 0;k< len;k++){
        let hotel_id = hotel_iid.rows[j++].hotel_id;
        let room_num = random_room_num(1,1000);
        let chars_ofplate = plate_stringsgen();
        let first_nums_ofplate = random_room_num(1,81);
        let last_nums_ofplate = random_room_num(100,999);
        let full_plate = pad(first_nums_ofplate).toString() + " " + chars_ofplate + " " + last_nums_ofplate;
        if(person_id = turk_iid.rows[i++].turk_id != undefined){
            var person_id = turk_iid.rows[i++].turk_id;
        }
        else{
            person_id = 1;
        }
        let newitem1 = await pool.query("INSERT INTO accommodation (hotel_id,person_id,room_number,turkish_plate) VALUES ($1,$2,$3,$4)", [hotel_id,person_id,room_num,full_plate]);
    }
    // let turk_iid = await pool.query('SELECT turk_id FROM person');
    // for(v = 0;v< turk_iid.rows.length;v++){
    //     let person_id = turk_iid.rows[v++].turk_id;
    //     let newitem1 = await pool.query(`UPDATE accommodation SET person_id = $1`, [1]);
    //     console.log(person_id)
    // }
    
}

//converting 1,2,3 etc to 01,02,03 etc
function pad(num) {
    if(num < 10){
        num = num.toString();
        return "0" + num;
    }
    return num;
}
//rand nums
function random_room_num(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}

//rand chars
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

// saveaccom();
module.exports = saveaccom;
