// push
// pop
// shift
// unshift

const arr = [1, 2, 3, 5, 3, 7, 8, 4, 54]
arr.push(99)
// console.log(arr)    // add in last

arr.pop()
// console.log(arr)    // remove from last

arr.shift()
// console.log(arr)    // remove from 1st

arr.unshift(11)     
// console.log(arr)    // add in 1st

arr.splice(5, 0, 555)       
// console.log(arr)       // {index where to start}, {how many items to remove}, {items to add }


// new array 
const newArry = new Array()
newArry.push(12)
newArry.push(15)
// console.log(newArry)


// largest number
const bigNumber = [2, 3, 4, 555, 64, 3, 22, 434, 55, 54]

let numbers = bigNumber[0]
for(let i = 1; i < bigNumber.length; i++){
    if(bigNumber[i] > numbers){
        numbers = bigNumber[i]
    }
}
// console.log('Largest Number is: '+ number)


// 2nd largest number
const bigNumber2 = [105, 555, 455, 44, 345]
let largeNumber2 = bigNumber2[0]
let secondlargestNumber = -Infinity

for(let i = 0; i < bigNumber2.length; i++){
    if(bigNumber2[i] > largeNumber2){
        largeNumber2 = bigNumber2[i]
    }
}

for(let j = 0; j < bigNumber2.length; j++){
    if(bigNumber2[j] == largeNumber2){
        continue;
    }else if(bigNumber2[j] > secondlargestNumber){
        secondlargestNumber = bigNumber2[j]
    }
}

console.log(largeNumber2)
console.log(secondlargestNumber)

//==================================================================================

// even number
let age = [10, 23, 45, 34, 64, 33, 23, 44, 21, 43]

for(let i = 0; i < age.length; i++) {

    if(age[i] % 2 == 0){
        // console.log(age[i])
    }
}

// -----------------------------+++++++++++++++++++++++++++----------------------------

// found Big number from array (easy way)

let number2 = [11, 22, 13, 4, 45, 65, 67, 3, 45, 165, 99]
// console.log(Math.max(...number))


// --------------------------------++++++++++++++++++++++++++++++++-----------------------------

// found even + Big number from array
let number = [11, 22, 13, 4, 45, 65, 67, 3, 44, 165, 99]
let largeNumber = [0]

for(let i = 0; i < number.length; i++){
    if(number[i] % 2 == 0){
        if(number[i] > largeNumber){
            largeNumber = number[i]
        }
    }
}
// console.log(largeNumber)


// -------------------------------+++++++++++++++++++++++++++++++++--------------------------

// find a smallest number from the Array
let smallNum = [18, 32, 4, 5, 65, 665, 45, 30, 44, 455, 666, 664, 65, 34]
let sNum = smallNum[0]

for(let i = 0; i < smallNum.length; i++){
    if(smallNum[i] < sNum){
        sNum = smallNum[i]
    }
}
// console.log(sNum)



// -----------------------------------+++++++++++++++++++++++++++++++++++----------------------------

