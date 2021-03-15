// check if  a word is a palindrone (same forward as backwards)
// e.g ("racecar") === true  ("hello") === false

function isPalindrone(str){
    // .1- reverse the string then just check if its the same
    const revString = str.split('').reverse().join('');
    return revString === str;
}

console.log(isPalindrone("racecar"));

// reverse a given number including any signs
// e.g 125 === 521 or -12 === -21

function reverseInt(int){
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int);
}

console.log(reverseInt(12345));