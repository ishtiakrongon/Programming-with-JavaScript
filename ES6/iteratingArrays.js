// using different kind of for loops to iterate over an array of string and number

// Traditional for() loop

let array = [10, 20, 30, 40, 50];

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//--------------------------------------------------------------------------------

// forEach() loop

let arr = [10, 20, 30, 40, 50];
arr.forEach(number => console.log(number));

//-------------------------------------------------------------------------------

// ES6 for of loop

let numbers = [10, 20, 30, 40, 50];

for(number of numbers) {
    console.log(number);
}

//-------------------------------------------------------------------------------

// ES6 for in loop

let name = ['cyraxx', 'hollowfire', 'clumsy'];

for(let index in name) {
    console.log(name[index]);
}