// filter() function is used for filtering the data

let students = [16, 17, 18, 20, 23, 25]

let adultStudents;

function checkAge(age) {
    if( age >= 18 ) {
        return age;
    }
}

adultStudents = students.filter(age => age >= 18);
console.log(adultStudents);