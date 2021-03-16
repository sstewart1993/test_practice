// .4- some people are standing in a row in a park. 
// There are some trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a 
// non-descending order without moving the trees
// e.g 
// a = [-1,150,190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a){
    const arr1 = []
    const arr2 = []

    a.forEach((val, i) => {
        if(val === -1){
            arr1.push(i)
        } else{
            arr2.push(val)
        }
    })

    const sortArr = arr2.sort((a,b) => a - b);
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1))

    return sortArr
}


const a = [-1,150,190, 170, -1, -1, 160, 180]
console.log(sortByHeight(a));