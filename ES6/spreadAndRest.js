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

// add new elements to arrays without using push() method

let veggies = ['onion', 'parsley']
veggies = [...veggies, 'carrot', 'beetroot']
console.log(veggies)

//---------------------------------------------------------------

// Convert a string to an array using the spread operator

const greeting = 'Hello';

const arrayofChars = [...greeting]
console.log(arrayofChars);

//---------------------------------------------------------------


// Copy either an object or an array into a sperate one

const car1 = {
    speed: 200,
    color: 'yellow'
}

const car2 = {...car1}

car1.speed = 201;

console.log(car1.speed, car2.speed);


//---------------------------------------------------------------


function count(...basket) {
    console.log(basket.length)
}

count(10, 9, 8, 7, 6);







