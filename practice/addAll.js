// return a sum of all the numbers in a list
// e.g addAll(1,5,6,7) === 20

// function addAll(){
    // .1- using ES5 for loop
    // let args = Array.prototype.slice.call(arguments)
    // let total = 0;
    // for(i =0; i < args.length; i++){
    //     total += args[i]
    // }

    // return total
// }

function addAll(...numbers){
    ////////////////////////////////////////////////
    // .2- using ES6 ...rest & forEach
    // let total = 0
    // numbers.forEach(function(num){
    //     total += num;
    // });

    // return total

    //////////////////////////////////////////
    // using ES6 reduce

    return numbers.reduce((acc, cur) => acc + cur)

}

console.log(addAll(2,5,6,7));