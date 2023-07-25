// array.reduce() = reduces an array to a single value
// summation of an array can be done with reduce method


let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let total = prices.reduce((a, b) => a + b);

console.log(`Total price: $${total}`);


// function totalPrice (a, b) {
//     return a + b;
// }

