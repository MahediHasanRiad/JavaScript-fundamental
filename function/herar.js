// calculator
function sum(a, b, calculate){
    return calculate(a, b)
}

function calculate(a, b){
    console.log(a, b)
}

console.log(sum(2, 3, (a, b) => a + b))
console.log(sum(2, 3, (a, b) => a - b))
console.log(sum(2, 3, (a, b) => a * b))

//****************************************************************************** */

