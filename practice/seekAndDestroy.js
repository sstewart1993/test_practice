// remove from the array whatever is in the following argument
// e.g ([2,3,4,5, 'hello'], 2,3) == ([3,4, 'hello'])

function seekAndDestroy(arr){
    const args = Array.from(arguments)

    return args
}

console.log(seekAndDestroy([2,3,4,6,6, 'hello'], 2,6));