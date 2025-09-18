

const myFile = `{  
    "name": "riad",
    "roll": 12,
    "address": "Dhaka, bangladesh"
}`;

const user = JSON.parse(myFile)          // convert server data to object data
console.log(user['address'])


const myFile2 = {
    name: 'riad',
    roll: 12, 
    address: 'dhaka, bangladesh'
}

const user2 = JSON.stringify(myFile2)       // convert object data to server data
console.log(user2)





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


