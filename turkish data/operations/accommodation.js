const pool = require('../database/database');
const savedata = require('./save_data');
const savehotels = require('./hotles');
const e = require('express');


const csvFilePath2='./files/turkish_names.csv'


async function saveaccom(){
    await savehotels();
    await savedata();
    let arr = [];
    let hotel_iid = await pool.query('SELECT hotel_id FROM otel').then(res =>{
         res.rows.forEach(elem =>{
            arr.push(elem.hotel_id)
        });
    });
    console.log(arr.length);
    let arr1 = [];
    let turk_iid = await pool.query('SELECT turk_id FROM person').then(res =>{
         res.rows.forEach(elem =>{
            arr1.push(elem.turk_id)
        });
    });
    console.log(arr1.length)
    //.slice(-(hotel_iid.rows.length))
    var i = 0;
    var j=0;
    // let len = hotel_iid.rows.length;
    // let turk_iid = await pool.query('SELECT turk_id FROM person');
    for(k = 0;k< arr1.length;k++){
        // let hotel_id = hotel_iid.rows[j++].hotel_id;
        let room_num = random_room_num(1,1000);
        let chars_ofplate = plate_stringsgen();
        let first_nums_ofplate = random_room_num(1,81);
        let last_nums_ofplate = random_room_num(100,999);
        let full_plate = pad(first_nums_ofplate).toString() + " " + chars_ofplate + " " + last_nums_ofplate;
        let hotel_id = arr[j++];
        let person_id = arr1[i++];
        let newitem1 = await pool.query("INSERT INTO accommodation (hotel_id,person_id,room_number,turkish_plate) VALUES ($1,$2,$3,$4)", [hotel_id,person_id,room_num,full_plate]);
    }
    // pool.query("UPDATE table2 t2 SET val2 = t1.val1 FROM   table1 t1 WHERE  t2.table2_id = t1.table2_id")
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
