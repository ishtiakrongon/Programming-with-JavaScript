// array.reduce() = reduces an array to a single value
// summation of an array can be done with reduce method


let prices = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let total = prices.reduce((a, b) => a + b);

console.log(`Total price: $${total}`);


// function totalPrice (a, b) {
//     return a + b;
// }


//--------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sum = numbers.reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue;
// })

const sum = numbers.reduce( (acc, crr) => acc + crr );

console.log(sum);

// Using a for loop

const sumFun = () => {
    let acc = 0;
    for (let curr of numbers) {
        acc += curr;
    }
return acc;
}
console.log(sumFun());
//-------------------------------------------------------------------------------------

const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 175 },
]

const totalCartPrice = cart.reduce( function (acc, product) {
    return acc + product.price;
},0 );
console.log(totalCartPrice);
