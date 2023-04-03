// the map() method creates a new array populated with the results of calling a provided function on every element in the calling


let storeUSD = [5, 6, 7, 8, 9];
let storeEUR;


storeEUR = storeUSD.map( value => value *= 0.84)    // arrow function
console.log(storeEUR);