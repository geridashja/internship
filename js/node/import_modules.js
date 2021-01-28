//Exporting methods in NodeJS from import_module file in the same directory
const metoda = require('./export_modules');

console.log("Vlera e PI eshte = " + metoda.PI);
Human1 = new metoda.Person("Geri", 19);
console.log(Human1.name, Human1.age);