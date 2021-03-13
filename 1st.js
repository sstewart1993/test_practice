// add something to the start and end of the array using push and unshift
let myArray = ["a", "b", "c", "d"];

myArray.push("end")
myArray.unshift("start")

console.log(myArray);

// using the spread operator

let myArray1 = ["a", "R", "c", "d"];
myArray1 = ["start", ...myArray1, "end"]

console.log(myArray1);