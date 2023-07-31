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

//--------------------------------------------------------------------------------


const values = [1, 2, 3, 4, 5, 6]

const doubleNumbers = values.map( (multiply) => multiply * 2 );
console.log(doubleNumbers);

console.log("\n----------------------------------------------------\n");

const newString = values.map( (number) => "Number " + number );
console.log(newString);

//--------------------------------------------------------------------------------


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


// Create an array of company names

const companyNames = companies.map( (company) => company.name );
console.log(companyNames);

// Create an array with company name and category

const companyInfo = companies.map( (company) => {
    return {
        name: company.name,
        category: company.category
    }
} )

console.log(companyInfo);

//--------------------------------------------------------------------------------------

// Create an array of the length of each company in years

const companyYears = companies.map((company) => company.end - company.start);

console.log(companyYears);

//-------------------------------------------------------------------------------------

// Chain map method

const value2 = [1, 2, 3, 4, 5, 6]

const sqrtandDouble = value2
        .map(number => Math.sqrt(number))
        .map(sqrt => sqrt * 2);
console.log(sqrtandDouble);


//----------------------------------------------------------------------------------

const value3 = [1,2,3,4,5,6,7,8,9,10]

const evenDouble = value3.filter( (evenNumber) => evenNumber % 2 === 0 )
                         .map(double => double * 2)
console.log(evenDouble);

//---------------------------------------------------------------------------------


