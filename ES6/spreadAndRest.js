// Spread operator three dots ...

const fruits = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruits, ...berries];   // using spread operator to concatenate

console.log(fruitsAndBerries);

// Join objects

const flying = {
    wings : 2
}

const car = {
    wheels: 4
}

const flyingCar = {
    ...flying,
    ...car
}

console.log(flyingCar)

// add new elements to arrays without using ppush() method

let veggies = ['onion', 'parsley']
veggies = [...veggies, 'carrot', 'beetroot']
console.log(veggies)

//---------------------------------------------------------------







