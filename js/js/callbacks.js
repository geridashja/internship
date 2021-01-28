var names = ["Geri", "Geri1", "Geri2"];

function printnames(){
    setTimeout(()=>{
        names.forEach((name) =>{
            console.log(name);
        });
    },1000);
}

function add(name, callback){
    setTimeout(()=>{
        names.push(name);
        callback();
    },2000);
}
add("Geri3",printnames);

//The idea behind callback is that if there is a function that we need to wait for it to complete 
//in order to start another function, we should use callbacks.

//we pass a argument name callback and then when we call the function we send as an argument the function
//which has to wait for this function to be completed