// take an array and return the sum of the even numbers and the odd
// e.g ([50, 60, 60, 45, 71]) == [170, 116]

// function evenOddSums(arr){
//     let evenSum = 0
//     let oddSum = 0

//     arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

//     return [evenSum, oddSum]
// }

function evenOddSums(arr){
let arrEven = 0
let arrOdd = 0


for(i=0; i <= arr.length -1; i++){
    if(arr[i] % 2 === 0){
        arrEven += arr[i]
    }else{
        arrOdd += arr[i]
    }}

return [arrEven, arrOdd]

}

console.log(evenOddSums([50, 60, 60, 45, 71]));