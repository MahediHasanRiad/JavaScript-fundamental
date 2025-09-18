
const num = [
    [1, 2],
    [3, 4],
    [5, 6]
]
for(let i = 0; i < num.length; i++){
    // console.log(`x is -> ${num[i][0]}, and y is -> ${num[i][1]}`)
}


// sum dimantional array
const roll = [
    [1, 2],
    [3, 4],
    [5, 6]
]
let sumRoll = [];

for(let i = 0; i < roll.length; i++){
   sumRoll = roll[i][0] + roll[i][1]
//    console.log(sumRoll)
}



// sum 2 Dimantional array
const value = [
    [10, 11],
    [12, 13],
    [14, 15]
]
const value2 = [
    [7, 8],
    [10, 11],
    [12, 13]
]
let result = []

const matrixValue = (value, value2) => {
    for(let i = 0; i < value.length; i++){
        let res = []
        for(let j = 0; j < value[i].length; j++){
            res = value[i][j] + value2[i][j]
            result.push(res)
        }
    }
    console.log(result)
}
matrixValue(value, value2)



// horizoltal sum
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const horizoltalSum = matrix.map(value => {
    // console.log(value)
    return value.reduce((a, b) => a + b)
})

// console.log(horizoltalSum)
