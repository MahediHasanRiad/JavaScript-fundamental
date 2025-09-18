// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array


// every == সব condition সত্য হতে হবে
// some == ১টা condition সত্য হলেও হবে

const ages = [12, 33, 16, 40];

// Function to Run for every Element
function checkAge(age) {
  return age > 18;
}
// console.log(ages.some(checkAge))


const customers = [
  {name: 'riad', response: "positive", rating: 4},
  {name: 'shamim', response: "negative", rating: 2},
  {name: 'tamim', response: "positive", rating: 5},
  {name: 'arif', response: "positive", rating: 4}
]

const customerReview = customers.every(review => review.rating > 3)
console.log(customerReview)

if(customerReview == true){
  console.log('customer setisfied')
}else{
  console.log('Product has to be improved')
}