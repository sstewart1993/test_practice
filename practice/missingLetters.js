// Find the missing letter in the list and return it. If all letters there return undefined
// e.g ("abce") == "d"

function missingLetters(str){
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare){
            ++compare
        }else{
            missing = String.fromCharCode(compare)
        }
    });

    return missing

}

console.log(missingLetters("abce"));