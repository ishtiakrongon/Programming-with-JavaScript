// Sorting an array ascending order

let array = [35, 29, 70, 45, 89, 100, 10];

let ascendingSort = (x, y) => x - y;    // arrow function =>
let print = element => console.log(element);    // arrow function =>

array = array.sort(ascendingSort);
array.forEach(print);
