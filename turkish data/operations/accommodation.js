const pool = require('../database/database');
const csv = require('csvtojson');
const turk_id_gen = require('./turkid_generator');
const birthday_generator = require('./birthday_generator');


const csvFilePath2='../files/turkish_names.csv'


async function saveaccom(){
    csv({
        noheader: false,
        headers: ['Names','Lastnames']
    })
    .fromFile(csvFilePath2)
        .then((jsonObj)=>{
            jsonObj.forEach(async element => {
                //details from csv
                let firstname = element.Names.split(' ')[0];
                let lastname = element.Lastnames.split(' ')[0];
                //getting the turkish id generated
                let turk_iid = turk_id_gen();
                //generate random room number between 1 and 1000
                let room_num = random_room_num(1,1000);
                let chars_ofplate = stringGen();
                let last_nums_ofplate = random_room_num(100,999);
            })
    })
}

function random_room_num(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
}

function stringGen()
{
   let length = 2;
   var result = '';
   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
saveaccom();