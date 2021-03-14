let age = 5

while(age <6){
    console.log("Your age is less than 10");
    age ++
}
console.log("u are now over 10");


//////////// to find the output if each value is worth a different value ////////////
//////// even = 1 points, odd = 2 points, 5= 5 points //////////////

var arr = [2, 3]
numbers = [2,4,6,8]

let i = 0;

function loop(){
while(i < numbers.length){
    let total = 0;
    for(n in numbers){
        if (n % 5 == 0){
            total += 5
        }if(n % 2 == 0){
            total += 2
        }if( n % 2 != 0){
            total += 1
        }
    }
    i++
    return total
}}

console.log(loop());



