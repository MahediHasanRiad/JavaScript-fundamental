// simple object diclaration

const peoples = {
    name : "riad",
    age: 24,
    salary: 10,
    gender: "male"
}

// console.log(peoples.name)


// -----------------------------------+++++++++++++++++++++++++++++++------------------------------


const students = [
    {
        Name: 'riad',
        age: 10,
        gander: 'male'
    },
    {
        Name: 'shamim',
        age: 16,
        gander: 'male'
    },
    {
        Name: 'rani',
        age: 20,
        gander: 'female'
    },
    {
        Name: 'rimi',
        age: 15,
        gander: 'female'
    },

]

for(let i = 0; i < students.length; i++){

    if(students[i].age > 15) {
        console.log(students[i].Name)
    }
    
    if(students[i].gander == 'male'){
        console.log("student Name is: " +students[i].Name, "Age is: "+ students[i].age)
    }
}