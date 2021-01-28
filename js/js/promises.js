var names = ["Geri", "Geri1", "Geri2"];

function printnames(){
    setTimeout(()=>{
        names.forEach((name) =>{
            console.log(name);
        });
    },1000);
}

function add(name){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            names.push(name);
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject("There was an error!");
            }
        },2000);
    })
}
add("Geri3").then(printnames).catch(err => console.log(err));
