var txt = "JavaScript";
var x;

for (x of txt) {                // for/of loop loops for every character on the string
  console.log(x);
}


var person = {fname:"John", lname:"Doe", age:25};
var x;
for (x in person) {
  console.log(x);
}