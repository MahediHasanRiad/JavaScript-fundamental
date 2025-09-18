
// Count Down Timer
function countDown(count){

    let  number = count

    const timer = setInterval(function(){
        console.log(number)
        number--;

        if(number < 0){
            clearInterval(timer)
            console.log('Time up')
        }
    }, 1000)
}

// countDown(5)


// send reply after 3 sec, take time to thinking
function calculate(number1, number2){

    console.log('pls wait a sec.....')
    return number1 + number2;
    
}

let res = calculate(5, 4)
console.log(res)