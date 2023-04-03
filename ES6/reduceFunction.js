// array.reduce() = reduces an array to a single value

let prices = [5, 10, 15, 20, 25];

function checkOut(total, element) {
    return total + element
}

let total = prices.reduce(checkOut);

console.log(`The total price is: $${total}`);