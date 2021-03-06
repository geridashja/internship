const pool = require('../database/database');
const savealldata = require('./person_table');
let DateGenerator = require('random-date-generator');

const csvFilePath2 = './files/turkish_names.csv'

const saveaccom = async () => {
    await savealldata();
    return new Promise(async (resolve, reject) => {
        let hotel_iid = await pool.query('SELECT hotel_id FROM otel');
        let turk_iid = await pool.query('SELECT turk_id FROM person').then(res =>{
            res.rows.forEach(async elem =>{
                let room_num = random_room_num(1,1000);
                let chars_ofplate = plate_stringsgen();
    
                let first_nums_ofplate = random_room_num(1,81);
                let last_nums_ofplate = random_room_num(100,999);
                let full_plate = pad(first_nums_ofplate).toString() + " " + chars_ofplate + " " + last_nums_ofplate;
    
                //accom date
                let startDate = new Date(2020, 1, 1);
                let endDate = new Date(2021, 2, 20);
                let date = DateGenerator.getRandomDateInRange(startDate, endDate); 
                let newdate = JSON.stringify(date).split('T')[0];
                let year = newdate.slice(1,5);
                let month = newdate.slice(6,8)
                let day = newdate.slice(9,11)
                let datee = year+ "/" +month +"/" +day;
                //release date
                let startDate2 = new Date(2021, 2, 20);
                let endDate2 = new Date(2021, 5, 20);
                let date2 = DateGenerator.getRandomDateInRange(startDate2, endDate2); 
                let newdate2 = JSON.stringify(date2).split('T')[0];
                let year2 = newdate2.slice(1,5);
                let month2 = newdate2.slice(6,8)
                let day2 = newdate2.slice(9,11)
                let datee2 = year2+ "/" +month2 +"/" +day2;

                let hotel_id = hotel_iid.rows[Math.floor((Math.random() * 950) + 1)].hotel_id
                
                let accom_date = new Date(datee);
                let release_date = new Date(datee2);
                let acom_id = random_room_num(100,5000000000);
                let turk_id = elem.turk_id;
                let newitem1 = await pool.query("INSERT INTO accommodation (acom_id,person_id,room_number,turkish_plate,accommodation_date,otel_id,accommodation_release_date) VALUES ($1,$2,$3,$4,$5,$6,$7)", [acom_id,turk_id,room_num,full_plate,accom_date,hotel_id,release_date]);
                });
        });
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