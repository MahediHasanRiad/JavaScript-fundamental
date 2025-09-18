const arr = [1, 2, 3, 4 , 5, 6, 7, 8]

const arrInto = arr.map(value => value * 2).flat()
const arrInto2 = arr.map(value => [value * 2]).flat()
const flatMapArray = arr.flatMap(value => [value * 2])  // flatmap

console.log(arrInto)
console.log("flatmap: ",flatMapArray)


// into using reduce
const intoReduce = arr.reduce((acc, cur) => {
    return acc.concat(cur * 2)
}, [])

console.log(intoReduce)