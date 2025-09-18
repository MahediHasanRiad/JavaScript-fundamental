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

const findCgp = students.filter(student => student.cgp > 3.50)
// console.log(findCgp)

const findSubjectToper = students.filter(student => student.subject == 'bangla' && student.cgp > 3.30)
// console.log(findSubjectToper)


const findDue = students.find(std => std.due == true)
// console.log(findDue)


// filter using reduce
const number = [2, 43, 54, 555, 432, 77]

const numReduce = number.reduce((acc, cur) => {
    if(cur % 2 === 0){
        acc.push(cur)
    }
    return acc
}, [])

// console.log(numReduce)




////////////////////////////////////////
