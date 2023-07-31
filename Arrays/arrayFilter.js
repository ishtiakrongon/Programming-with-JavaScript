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

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company nine', category: 'Retail', start: 1981, end: 1989}
]


// Get Only Retail Companies

const retailCompanies = companies.filter( company => company.category === 'Retail' );

console.log(retailCompanies);

//-----------------------------------------------------------------------------

// Get companies that started in or after 1980 and ended in or before 2005;

const earlyCompanies = companies.filter(company => company.start >= 1980 && company.end <= 2005);

console.log(earlyCompanies);