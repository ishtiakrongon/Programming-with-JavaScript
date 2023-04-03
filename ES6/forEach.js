// array.forEach() = executes a provided callback function once for each array element

let students = ["hollowfire", "cyraxx", "clumsy"];

students.forEach(captalize);
students.forEach(print);

function captalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
    console.log(element);
}
