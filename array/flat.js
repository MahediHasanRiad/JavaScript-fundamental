
// flat == 1টা array এর মধ্যে যত array থাকুক না কেন, সব array কে 1টি array তে convert করে দিবে

const nestedArray = [[1, 2, 3], 4, 5, [6, 7], 8, [9]]
console.log(nestedArray.flat())

// flat using reduce
const reduceArray = nestedArray.reduce((acc, cur) => {
    return acc.concat(cur)
}, [])

console.log(reduceArray)