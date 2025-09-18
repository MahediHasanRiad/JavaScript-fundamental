
// class name must be start capital letter

class Animal {

    constructor(name, legs, speak){
        this.name = name
        this.legs = legs
        this.speak = speak
    }

    nameFn(){
        console.log('this is '+ this.name)
    }

    static legFn(number){       
        console.log('total legs is '+ number)
    }
}

const dog = new Animal('cow', 4, 'bhaw bhaw')       // create object
const cat = new Animal('cat', 2)

// cat.nameFn()        // call function  
// Animal.legFn(2)     // call from Class , its kind of global function

// console.log(dog)
// console.log(cat)




/////////////////////////////////////////////////////////////////////////////////////////////


class Books {
    constructor(name, price, pages){
        this.name = name
        this.price = parseInt(price)
        this.pages = pages
    }
    nameFn(){
        console.log('hi this is ' + this.name)
    }
    static price(price){
        return 'total price is ' + price
    }
}

const book1 = new Books('R1', 200, 299)
// book1.nameFn()

// console.log(Books.price(5))


