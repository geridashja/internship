let DateGenerator = require('random-date-generator');


let startDate = new Date(1935, 1, 1);
let endDate = new Date(2008, 1, 1);

function birthday_generator() {
    let date = DateGenerator.getRandomDateInRange(startDate, endDate); 
    let newdate = JSON.stringify(date).split('T')[0];
    let year = newdate.slice(1,5);
    let month = newdate.slice(6,8)
    let day = newdate.slice(9,11)
    let birthday = year+ "/" +month +"/" +day;
    return [birthday, year,month,day];
}

module.exports = birthday_generator;