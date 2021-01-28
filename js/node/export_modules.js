// Creating fucntions here to export them
const sum = (a,b) => {
    return a+b;
}
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const PI = 3.14;

module.exports = {sum : sum, Person : Person, PI : PI } //used to export modules with this name
