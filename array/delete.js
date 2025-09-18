// shift
const num = [1, 2, 3, 4, 5, 6, 7]
num.shift()
Array.prototype.shift.apply(num)    // old way
console.log("Num => ", num)


// splite
const num2 = [1, 2, 3, 4, 5, 6, 7]
num2.splice(2, 3)
console.log('num2 => ', num2)



// filter
const num3 = [1, 2, 3, 4, 5, 6, 7]
const filterNum = num3.filter(item => item != 3)
console.log('Filter => ', filterNum)

