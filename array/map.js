const students = [
    {
        name: 'riad', 
        roll: 1,
        cgp: 3.50,
        subject: 'bangla',
        due : true
    },
    {
        name: 'shamim', 
        roll: 2,
        cgp: 3.90,
        subject: 'english',
        due : false
    },
    {
        name: 'tamim', 
        roll: 3,
        cgp: 3.5,
        subject: 'math',
        due : true
    },
    {
        name: 'rakib', 
        roll: 4,
        cgp: 2.90,
        subject: 'english',
        due : true
    },
    {
        name: 'arif', 
        roll: 5,
        cgp: 3.90,
        subject: 'bangla',
        due : false
    },
]


const sendEmail = students.filter(std => std.cgp < 3.50).map(student => {
    return{
        ...student,
        Title: 'consern',
        email: 'You have vary low CGPA'
    }
    
})

// console.log(sendEmail)



///////////////////////////////////////////////////////////

const mapDue = students.filter(value => value.due == true).map(valueDeo => {
    // console.log(valueDeo)
    return{
        ...valueDeo,
        massage: 'Your dedline in expired, pls submit your Due'
    }
})
// console.log(mapDue)



// square 
const squareArr = [2, 3, 4, 5, 6]

const squareResult = squareArr.map(value => value * value)
console.log("Squre: ", squareResult)

// square using reduce funtion 
const squareReduce = squareArr.reduce((acc, cur) => {
    acc.push(cur * cur)
    return acc
}, [])

console.log("Reducer: ",squareReduce)