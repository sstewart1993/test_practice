// split an array into seperate arrays for certain length
// e.g ([1,2,3,4,5,6,7], 3) === ([1,2,3], [4,5,6],[7])

function chunkyArray(arr, len){
    // .1- using slice method

    // init chunkedArray
    // const chunkedArr = []
    // Set index
    // let i=0;

    // loop while index is less than array
    // while(i< arr.length){
    //     // slice out of the array and push to the chunkedArr
    //     chunkedArr.push(arr.slice(i, i+len))
    //     // increment by chunk.length 
    //     i += len
    // }
    // return chunkedArr


///////////////////////////////
    // .2- using the forEach

//     const chunkedArr = [];
//     // Loop through array
//     arr.forEach(function(val){
//         // get last element
//         const last = chunkedArr[chunkedArr.length -1]

//         // check if last and if last length is equal to the chunk length
//         if(!last || last.length === len){
//             chunkedArr.push([val])
//         }else{
//             last.push(val)
//         }
//     })
//     return chunkedArr
// }
}

// console.log(chunkyArray([1,2,3,4,5,6,7], 3));




/////////////////////////////////////////////////////////////////////////////////
// e.g  ([1,2,3], [4,5,6],[7]) === [1,2,3,4,5,6,7]
// flatten an array do the reverse of the chuncked one



function flattenArray(arrays){
// .1- use concat

    // return arrays.reduce(function (a,b) {
    //     return a.concat(b);
    // })

    ////////////////////////////////////////////
    // .2- use apply method
    // return [].concat.apply([],arrays);

    ////////////////////////////////////////
    // .3- use spread operator
    return [].concat(...arrays)



}

console.log(flattenArray([[1,2,3], [4,5,6],[7]]));
