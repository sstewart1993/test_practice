// return the character that appears the most
// e.g (javascript) = 'a'

function maxCharacter(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.toLowerCase().split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++
        } else{
            charMap[char] = 1
        }
    })

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char
        }
    }
    return maxNum + ' x ' + maxChar
}

console.log(maxCharacter("javascript"));