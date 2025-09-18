
// lenght
const names = 'mahedi hasan riad hasan'
console.log(names.length) // for string length count



// indexOf
console.log(names.indexOf('hasan'))  // find index number (kotho number gore word ti ace)
console.log(names.lastIndexOf('hasan')) // if i find same word but last one


// same thing but using function
function FindIndexNumber(str){
    console.log(str.indexOf('a') + ' Big Boss')
}
FindIndexNumber('riad')


// slice
const n2 = 'my name is riad, i have a mouce'
console.log(n2.slice(0, 5))  // cut 0 no index to 4 no index, and other will remove


// replace
const n3 = 'my name is riad, i have a mouce'
console.log(n3.replace('riad', 'shamim')) // riad will replace the shamim


// split
const n4 = 'my name is riad, i have a mouce, i do not need anything'
console.log(n4.split(','))      // return a array, devided every sentance from ' , '


// trim
const n5 = '    my name is       Tamim     '
console.log(n5.trim())  // remove extra space from beginning & ending



// upper case & lower case
const n6 = 'MY name is Riad'
console.log(n6.toLowerCase())
console.log(n6.toUpperCase())



