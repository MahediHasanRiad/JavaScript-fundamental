
// promise
const { rejects } = require('assert')
const { resolve } = require('path')

const fs = require('fs')
const { error } = require('console')
const FileName = 'name.txt'

const dataValue = new Promise((resolve, rejects) => {

    return fs.readFile(FileName, 'utf-8', (err, data)=>{
        if(err){
            rejects(err)
        }else{
            resolve(data)
        }
    })
})

dataValue.then((data) => {
    console.log(data)
}).catch((e) => {
    console.log(e)
})


////////////////////////////////////////////////////////////////////////////////////

// async await

const arr = 24

function arrFunction(){
    const promise = new Promise((resolve, rejects) => {

   
        if(arr % 2 == 0){
            console.log('this is even')
            resolve('Even')
        }else{
            rejects('Not match')
        }
    
    return;
})
}

async function value() {

    let info = await arrFunction()
    console.log(info)
    console.log('this is info')
}

value()
console.log('this')