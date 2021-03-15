// Return a string with every word capitalized 
// e.g hello world = Hello World

function capitalizeLetters(str){
    // .1- using a basic for loop
    // const strArr = str.toLowerCase().split(' ')

    for(let i=0; i<strArr.length; i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ')

    /////////////////////////////////
    // .2- using map()

    // return str
    // .toLowerCase()
    // .split(' ')
    // .map(function(word){
    //     return word[0].toUpperCase() + word.substr(1);
    // })
    // .join(' ')

    // .3- same as 2 but using arrow function (ES6)

    // return str
    // .toLowerCase()
    // .split(' ')
    // .map(word => word[0].toUpperCase() + word.substr(1))
    // .join(' ')

    ////////////////////////////////////////
    // .4- 
    // return str.replace(/\b[a-z]/gi, function(char){
    // return char.toUpperCase()
    // });


}

console.log(capitalizeLetters("hello world"));