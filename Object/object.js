const info = {
    name: 'riad',
    roll: 12,
    address: 'Dhaka'
}

const findOnlyKey = Object.keys(info)       // show only key => name, roll, address
const findOnlyValue = Object.values(info)   // show only value => riad, 12, dhaka

// console.log('Info key is: '+ findOnlyKey)        
// console.log('value is: '+ findOnlyValue)


const addNewValue = Object.assign(info, {nation: 'bangladesh'})         // marge object or add new object
// console.log(addNewValue)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const cars = [
    {
        brand: 'bmw',
        capecity: 5,
        color: 'red'
    }, 
     {
        brand: 'toyota',
        capecity: 4,
        color: 'blue'
    }, 
     {
        brand: 'bmw',
        capecity: 8,
        color: 'black'
    }, 
     {
        brand: 'yamaha',
        capecity: 6,
        color: 'red'
    }, 
     {
        brand: 'audi',
        capecity: 5,
        color: 'red'
    }

]

let findBrand = cars.find(cars => cars.brand === 'bmw')     // {find == one result}
// console.log(findBrand)

let filterCapacity = cars.filter((cars) => {      // {filter == all result}
    if(cars.capecity < 7){
        return cars.capecity
    }
})
// console.log(filterCapacity)


let mapDiscount = cars.map(cars => {          // map use করলে ture / false & Array return করে
    if(cars.color == 'red'){
        return cars.brand + ' affordable cars'
    } else if(cars.color == 'blue'){
        return cars.brand + ' 15% flat discount'
    }else{
        return cars.brand + ' 8% Discount'
    }
})
// console.log(mapDiscount)


cars.splice(0, 0, {color: 'black'})     // new object add করার জন্য
// console.log(cars)



const buyCar = cars.forEach(cars => {               // loop
    if(cars.capecity > 5 || cars.color == 'red'){
       return 'you can buy ' + cars.brand
    }
})

// console.log(buyCar)


const someCar = cars.some(cars => cars.brand == 'bmw')      // some == object এর কিছু brand 'bmw' এর আছে কিনা?
console.log(someCar)

const everyCar = cars.every(cars => cars.brand == 'bmw')       // every == object এর সব brand 'bmw' এর কিনা?
console.log(everyCar)