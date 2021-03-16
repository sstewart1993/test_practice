// remove from the array whatever is in the following argument
// e.g ([2,3,4,5, 'hello'], 2,3) == ([3,4, 'hello'])

// function seekAndDestroy(arr){
//     // .1- arguments, indexOf, filter
//     const args = Array.from(arguments)

//     function filterArr(arr){
//         // return true if NOT in array
//         return args.indexOf(arr) === -1
//     }

//     return arr.filter(filterArr)
// }

function seekAndDestroy(arr, ...rest){
    // .2- ...rest, filter & includes
    return arr.filter(val => !rest.includes(val))
}

console.log(seekAndDestroy([2,3,4,6,6, 'hello'], 2,6,));