// return the longest word from a string
// e.g "hello, my name is brad" === "hello"
// e.g "hello there, my name is brad" === ["hello"], ["brad"]

function longestWord(sen){
    // create a filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // sort by length
    const sorted = wordArr.sort(function(a,b){
        return b.length -a.length
    })

    // If multiple words then put in an array
    const longestWordArr = sorted.filter(function(word) {
        return word.length === sorted[0].length;
    })

    // check if more than one array value
    if(longestWordArr.length === 1){
        // return the word not array
        return longestWordArr[0]
    }else{
        return longestWordArr
    }
}

console.log(longestWord("helloo there, my name is brad"));