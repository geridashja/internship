var names = ["Geri", "Geri1", "Geri2"];

function printnames(){
    setTimeout(()=>{
        names.forEach((name) =>{
            console.log(name);
        });
    },1000);
}

// we should keep the promise because wait is a new way to handle the responses
function add(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            names.push(name);
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject('There was an error');
            }
        },2000);
    })
}

async function init(){
    await add("Geri3");    //wait for this function to be finished
    printnames();          //then start this new function
}

init();