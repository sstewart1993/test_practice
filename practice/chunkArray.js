// split an array into seperate arrays for certain length
// e.g ([1,2,3,4,5,6,7], 3) === ([1,2,3], [4,5,6],[7])

function chunkyArray(arr, len){
    // init chunkedArray
    const chunkedArr = []
    // Set index
    let i=0;

    // loop while index is less than array
    while(i< arr.length){
        // slice out of the array and push to the chunkedArr
        chunkedArr.push(arr.slice(i, i+len))
        // increment by chunk.length 
        i += len
    }
    return chunkedArr
}

console.log(chunkyArray([1,2,3,4,5,6,7], 3));