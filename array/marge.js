
//  marge 2 array
const arr2 = [1, 2, 3]
const arr3 = [4, 5, 6]

const marge = arr2.concat(arr3)    // concat 2 array
const marge3 = [...arr2, ...arr3]

// console.log('marge: ',marge)
// console.log('marge3: ',marge3)


const arr4 = [33, 44,55]
const marge5 = [...arr2, ...arr3, ...arr4]
// console.log(marge5)