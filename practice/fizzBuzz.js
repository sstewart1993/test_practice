// create a game of fizzbuzz for 0 to 100
// 3=fizz, 5=buzz, 15=fizzbuzz

 function fizzBuzz(){
    for(i=1; i < 101; i++){
        if(i % 15 === 0){
            console.log("FizzBuzz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
 }
 
 console.log(fizzBuzz());