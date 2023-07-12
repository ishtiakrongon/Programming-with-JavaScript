// arrow function => Compact alternative to traditional function


// traditional function

// const GREETING = function(userName) {
//     console.log(`Hello! ${userName}`);
// }


const GREETING = (userName) => console.log(`Hello! ${userName}`);

GREETING("cyraxx");


//------------------------------------------------------


// const PERCENT = function(numerator, denominator) {
//     return (numerator / denominator) * 100;
// }

const PERCENT = (x, y) => (x / y) * 100;
console.log(`${PERCENT(75, 100)}%`);


let grades = [75, 60, 65, 83, 87, 90, 95];

grades.sort((x, y) => y - x);

grades.forEach((text) => console.log(text));

// same as above arrow function
for (let grade of grades) {
    console.log(grade);
}
// same as above function. This is a traditional method ~_~
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
}



