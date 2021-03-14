// Reverse a string:
// e.g "hello" = "olleh"

function reverseString(str){
// .1
    // const strArr = str.split('');
    // strArr.reverse();
    // return strArr.join('');

//////////////////////////////////////////
// .2
    // return str
    //     .split('')
    //     .reverse()
    //     .join('');

////////////////////////////////////////
// .3- decreasing for loop
// let revString = '';
// for(let i = str.length -1; i >=0; i --){
//     revString = revString + str[i];
// }
// return revString

////////////////////
// .4- increasing for loop

// let revString = '';
// for(let i = 0; i <= str.length -1; i ++){
//     revString = str[i] + revString;
// }
// return revString

////////////////////////////////
// .5- For-Of loop

// let revString = '';
// for(let char of str){
//     revString = char + revString;
// }
// return revString

///////////////////////////////
// .6- For Each method

// let revString = '';
// str.split('').forEach(function(char){
//     revString = char + revString;
// });
// return revString;

///////////////////////////////////
// .7- Arrow function same as 6 just using the arrow

let revString = '';
str.split('').forEach(char => revString = char + revString);
return revString;

}

console.log(reverseString("hello"))