// array.forEach() = executes a provided callback function
//                   once for each element.

let students = ["cyraxx", "hollowfire", "clumsy"];

students.forEach(capitalize);

students.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}


function print(element) {
    console.log(element);
}


// console.log(students[0]);


//--------------------------------------------

const socials = ['Twitter', 'Facebook', 'LinkedIn', 'Instagram']

socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));


//------------------------------------------------------------------------------------


const socialOBj = [
    {name: 'Facebook', url: 'https://www.facebook.com'},
    {name: 'Twitter', url: 'https://www.twitter.com'},
    {name: 'LinkedIn', url: 'https://www.linkedin.com'},
]

socialOBj.forEach(item => console.log(item.url));
socialOBj.forEach(item => console.log(item.name));


//----------------------------------------------------------------------------




