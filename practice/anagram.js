// check if the words are anagrams
// e.g elbow === below
// e.g dormitory === dirty room

function isAnagram(str1, str2){
    return formatStr(str1) === formatStr(str2)
}

// Helper function
function formatStr(str){
    return str
    .replace(/[^\w/]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

console.log(isAnagram("dormitory", "dirty room"));