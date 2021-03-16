// Sum all the prime numbers
// e.g sumAllPrimes(10) == 17

function sumAllPrime(num){
    let total = 0;

    function checkForPrime(i){
        for(let j = 2; j < i; j++){
            if(i % j === 0){
                return false
            }
        }
        return true
    }

    for(let i = 2; i <= num; i++){
        if(checkForPrime(i)){
            total += i
        }
    }
    return total
}

console.log(sumAllPrime(10));