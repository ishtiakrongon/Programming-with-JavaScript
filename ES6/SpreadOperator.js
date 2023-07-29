/**
 * SPREAD OPERATOR = allows an iterable such as an array
 *                   or string to be expanded in places
 *                   where zero or more arguments are expected.
 *                   (Unpack the element)
 */

// spread operator = ... (Three dots)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);
console.log(...numbers);

let text = "Rongon";
console.log(...text);

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(`Maximum number: ${maximum}`);
console.log(`Minimum number: ${minimum}`);

//-------------------------------------------------------------

// add an array elements to other array

let class1 = ["hollowfire", "cyraxx", "fearlock"];
let class2 = ["insidethecircle", "clmusy", "soulreaper"];

class1.push(...class2);

// for (let count of class1) {
//     console.log(count);
// }

for (let i = 0; i < class1.length; i++) {
    console.log(`${i + 1}. ${class1[i]}`);
}

//-----------------------------------------------------------

// Join Arrays using spread operator

const fruits = ['apple', 'mango', 'jackfruit']
const berries = []
berries.push('blueberry');
berries.push('strawberry');

const fruitsandberries = [...fruits, ...berries]
console.log(fruitsandberries);

//----------------------------------------------------------

// Convert a string to an array

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']