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

