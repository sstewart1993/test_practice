/////// 1-add something to the start and end of the array using push and unshift //////////
let myArray = ["a", "b", "c", "d"];

myArray.push("end")
myArray.unshift("start")

console.log(myArray);

// using the spread operator

let myArray1 = ["a", "R", "c", "d"];
myArray1 = ["start", ...myArray1, "end"]

console.log(myArray1);

////////// 2- create a private variable in JS ////////

function secretVariable(){
    let private = "super secret Code";
    return function (){
        return private
    }
}

var getPrivateVariable = secretVariable();
// this will return the secret
console.log(getPrivateVariable());
// this will return an anonymous function
console.log(secretVariable());
