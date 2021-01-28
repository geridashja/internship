// setTimeout is a global object used to add a time when we want to run our code inside

setTimeout(() => { // 2 arguments passed, the function and the time to wait (3000 = 3s)
    console.log("Prita 3 sekonda");
    clearInterval(geri); // kur te perfundojne funksioni ne setTimeout, ateher do ndalojme edhe setIntervalin
}, 3000);

const geri = setInterval(() =>{  //this creates a loop running this function inside CTRL-C to stop it
    console.log("Vk me zemra");
}, 1000);

console.log(__dirname) //prints the directory we are in
console.log(__filename) //prints the path we are in including the file