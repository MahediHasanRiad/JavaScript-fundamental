
// reduce(({total / acc}, {current value / cur}, {index}, {array}) => {....}, {acc value / output কি চাই})

// sum array
const num = [1, 2, 3, 4, 5, 6]

const sumReduce = num.reduce((acc, cur) => {
    // console.log("acc ",acc, "cus ",cur)

    return acc = acc + cur

})

// console.log(sumReduce)

//***********************************************************************//

// convert in one array
const nestedArry = [1, 2, 3, [22, 33], 4, 5, [66, 77], [99]]

const nestedReduce = nestedArry.reduce((acc, cur) => {
    // console.log( acc += cur )
    return acc.concat(cur)
}, [])

// console.log("nestedReduce: ",nestedReduce)



// object
const subject = [
    'java',
    'javaScript',
    'python',
    'java',
    'java',
    'python',
    'nodeJS'
]

const countSubject = subject.reduce((acc, cur) => {
    if(acc[cur]){
        acc[cur]++
    }else{
        acc[cur] = 1
    }
    return acc
}, {})

// console.log(countSubject)   //{ java: 3, javaScript: 1, python: 2, nodeJS: 1 }



// reduce-right (start from end)

const name = [
    'riad',
    'shamim',
    'tamim',
    'shamim',
    'tamim',
    'tamim'
]

const nameCount = name.reduceRight((acc, cur) => {
    if(acc[cur]){
        acc[cur]++
    }else{
        acc[cur] = 1
    }

    // console.log(acc)
    return acc
}, {})

// console.log(nameCount)




// add to card
const products = [
    {name: 'javascript', price: 350, quantity: 1},
    {name: 'python', price: 30, quantity: 1},
    {name: 'javascript', price: 350, quantity: 1},
    {name: 'python', price: 300, quantity: 1},
    {name: 'javascript', price: 350, quantity: 1}
]

const totalProduct = products.reduce((acc, cur) => {
    if(acc[cur.name]){
        acc[cur.name].price += cur.price
        acc[cur.name].quantity += cur.quantity
    }else{
        acc[cur.name] = {
            price: cur.price,
            quantity: cur.quantity
        }
    }
    return acc
}, {})

// console.log(totalProduct)


//************************************************************ */

// Big Data
let bigData = []

for(let i = 1; i < 5000000; i++){
    bigData.push(i)
}

// find odd number & multiply 2..... using {map & filter}
console.time('timer')
const oddNum = bigData.filter(value => value % 2 === 0).map(value => value * 2)
// console.log(oddNum)
// console.timeEnd('timer')


// find odd number & multiply 2..... using {reduce}
// console.time('Reduce')
const oddNumReduce = bigData.reduce((acc, cur) => {
    if(cur % 2 === 0){
        acc.push(cur * 2)
    }
    return acc
}, [])

// console.log(oddNumReduce)
// console.timeEnd('Reduce')


//******************************************************************************************* */

