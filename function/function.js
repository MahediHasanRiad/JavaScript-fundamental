
function sayHello(){
    console.log('hello world')
}
// sayHello()


                        // ex-2
function sayName(){
    console.log('riad')
}

// sayName()

                            //ex-3

function addNumbers(a, b){
    console.log(a+b)
}

// addNumbers(2, 4)

                        // ex-4 for cheaking elegibility of vote

function checkVotingEligibility(age){
    if(age >= 18){
        console.log('You can Vote')
    } else{
        console.log('You Can not Vote')
    }
}

// checkVotingEligibility(2)
// checkVotingEligibility(18)


// ex-5 
function isEven(number){
    if(number % 2 == 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}

// isEven(21)


// ex-6

function printOneToTen(num){
    for(let i = num; i <= num+10; i++){
        console.log(i)
    }
}

// printOneToTen(35)


// ex-7

function sumUpTo(num){
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum = sum + i
    }
    return console.log(sum);
}

// sumUpTo(3)


// ex-8
function findLargest(a, b, c){
    if(a > b && a > c){
        console.log(a + ' is Biggest one')
    }else if(b > a && b > c){
        console.log(b + ' is Biggest one')
    }else{
        console.log(c + ' is biggest one')
    }
}

// findLargest(10, 40, 30)
a()
function a(){
    console.log('this')
}