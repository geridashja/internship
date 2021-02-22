const pool = require('../database/database');
const csv = require('csvtojson');
const turk_id_gen = require('./turkid_generator');
const birthday_generator = require('./birthday_generator');


const csvFilePath2='./files/turkish_names.csv'


async function saveaccom(){
    let turk_iid = await pool.query('SELECT turk_id FROM person');
    let hotel_iid = await pool.query('SELECT hotel_id FROM otel');
    var i = 0;
    csv({
        noheader: false,
        headers: ['Names','Lastnames']
    })
    .fromFile(csvFilePath2)
        .then((jsonObj)=>{
            jsonObj.forEach(async element => {
                let person_id = turk_iid.rows[i++].turk_id;
                let hotel_id = hotel_iid.rows[i++].hotel_id;
                //details from csv
                //generate random room number between 1 and 1000
                let room_num = random_room_num(1,1000);
                let chars_ofplate = plate_stringsgen();
                let first_nums_ofplate = random_room_num(1,81);
                let last_nums_ofplate = random_room_num(100,999);
                let full_plate = pad(first_nums_ofplate).toString() + " " + chars_ofplate + " " + last_nums_ofplate;
                let newitem1 = await pool.query("INSERT INTO accommodation (hotel_id,person_id,room_number,turkish_plate) VALUES ($1,$2,$3,$4)", [hotel_id,person_id,room_num,full_plate]);
                
            })
    })
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

module.exports = saveaccom;
