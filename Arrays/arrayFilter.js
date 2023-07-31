// array.filter() = It is used to filtering data in a array


let incomes = [23500, 20000, 15000, 42310, 55000];

function checkIncome(income) {
    return income > 16000;
}

let checkIncomeRange = incomes.filter(checkIncome);

// for (let i = 0; i < checkIncomeRange.length; i++) {
//     console.log(checkIncomeRange[i]);
// }

checkIncomeRange.forEach(print => console.log(print));

//------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter( number => number % 2 === 0 )

evenNumbers.forEach(item => console.log(item));

console.log("\n---------------------------------------------------------------\n");

for (let evenNumber of evenNumbers) {
    console.log(evenNumber);
}

console.log("\n---------------------------------------------------------------\n");

for (let row = 0; row < evenNumbers.length; row++) {
    console.log(evenNumbers[row]);
}


//--------------------------------------------------------------------------------------




