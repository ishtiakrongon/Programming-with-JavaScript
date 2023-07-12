// array.map() = executes a provided callback function once 
// for each array element and creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);

squares.forEach(print);




function print(element) {
    console.log(element);
}

function square(element) {

    return Math.pow(element, 2);

}