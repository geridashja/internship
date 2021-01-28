var arr = ["Geri", "asdas", 1,true];
var arr2 = ["vk"];
function print(arr){
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

// arr.push("Melisa");
// print(arr);
// console.log("\n");

// arr.pop();
// print(arr);
// console.log("\n");

// arr.shift(); //remove the beggining of array and return the deleted value
// print(arr);
// console.log("\n");

// arr.unshift("KARI"); //add to the beggining of the arra and return the length of the array
// print(arr);

var arr3 = arr.concat(arr2); //concatenate 2 arrays (merge)
print(arr3);