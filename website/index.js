// User Input using window.promt

// let username = window.prompt("What's your name? ");
// console.log(username);


const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle:");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is: ", circumference);
