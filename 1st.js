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



/////////// 3- What is the output ////////////
// the output is 3 as 4, 2 arent accessed at all num++ is undefined so only num=3 is called
var num = 4;
function outer(){
    var num = 2;
    function inner(){
        num++;
        var num = 3;
        console.log(num);
    } 
    inner();
}
outer();


//////////// 4- what is the out output2 //////////////
// this will return a string 

console.log(typeof typeof 1);
//typeof 1 will return "number"
console.log(typeof 1);
// then typeof "number" will return string
console.log(typeof "number");
 


////////// 5- what is the output3 ///////////

var hero = {
    _name: "John Doe",
    getSecretId: function(){
        return this._name;
    }
}

var stoleSecretId = hero.getSecretId; //add .bind(hero) to the end of hero.... to get name returned for both

console.log(stoleSecretId());
console.log(hero.getSecretId());