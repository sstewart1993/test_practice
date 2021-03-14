//////// this will calc the sum of the array //////////

console.log(
    [1,2,3,4,5].reduce((a,b) => a + b)
);

console.log(
    [].reduce((a,b) => a + b, 0)
);



////////return only the even numbers from an array ///////////
var numbers = [1,2,3,4,5,6,7,8,9,10];


var evenNumbers = numbers.filter(function(item){
    return(item % 2 == 0)
}) 

var oddNumbers = numbers.filter(function(item){
    return(item % 2 !=0)
})

var dBy5 = numbers.filter(function(item){
    return (item % 5 == 0)
})

console.log(evenNumbers);
console.log(oddNumbers);
console.log(dBy5);


