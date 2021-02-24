const pool = require('../database/database');
const csv = require('csvtojson');
const turk_id_gen = require('./turkid_generator');
const birthday_generator = require('./birthday_generator');


const csvFilePath2='./files/turkish_names.csv'


async function savedata(){
    let hotel_iid = await pool.query('SELECT hotel_id FROM otel');
    var i = 0;
    csv({
        noheader: false,
        headers: ['Names','Lastnames','Fathername','Mothername','Gender']
    })
    .fromFile(csvFilePath2)
        .then((jsonObj)=>{
            jsonObj.slice(-(hotel_iid.rows.length)).forEach(async element => {
                //getting birthday details
                let data = birthday_generator();
                let birthday = data[0];
                let year = data[1];
                let month = data[2];
                let day = data[3];
                //getting the age of person
                var d = new Date();
                var currentyear = d.getFullYear();
                let age = currentyear-year;
                var isMarried = "";
                if(age > 18)
                    isMarried = "Yes"
                else
                    isMarried = "No"
                //details from csv
                let firstname = element.Names.split(' ')[0];
                let lastname = element.Lastnames.split(' ')[0];
                let father = element.Fathername.split(' ')[0];
                let mother = element.Mothername.split(' ')[0];
                let gender = element.Gender.split(' ')[0];
                //getting the turkish id generated
                let turk_iid = turk_id_gen();
                let birthobj = new Date(birthday);
                //country
                let birthcountry = "TURKEY";
                // let cities = ["Adana","Adiyaman","Afyon","Agri","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydin","Balikesir","Bartin","Batman","Bayburt","Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri","Corum","Denizli","Diyarbakir","Duzce","Edirne","Elazig","Erzincan","Erzurum","Eskisehir","Gaziantep","Giresun","Gumushane","Hakkari","Hatay","Igdir","Isparta","Istanbul","Izmir","Kahramanmaras","Karabuk","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kirikkale","Kirklareli","Kirsehir","Kocaeli","Konya","Kutahya","Malatya","Manisa","Mardin","Mersin","Mugla","Mus","Nevsehir","Nigde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Sanliurfa","Siirt","Sinop","Sirnak","Sivas","Tekirdag","Tokat","Trabzon","Tunceli","Usak","Van","Yalova","Yozgat","Zonguldak"];
                //randomly select a city
                // let randomIndex = Math.floor(Math.random() * cities.length); 
                // let randomcity = cities[randomIndex];
                let hotel_id = hotel_iid.rows[i++].hotel_id
                //saving to database
                let newitem1 = await pool.query("INSERT INTO person (turk_id,firstname,lastname,fathername,mothername,gender,ismarried,birthyear,birthmonth,birthdayy,data,birthcountry,otel_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)", [turk_iid, firstname,lastname,father,mother,gender,isMarried,year,month,day,birthobj,birthcountry,hotel_id]);
            })
    })
}

module.exports = savedata;