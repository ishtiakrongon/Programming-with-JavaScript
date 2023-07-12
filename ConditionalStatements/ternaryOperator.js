// ternary operator = Shortcut for if-else statement
//                    Takes 3 operands

/*********************************************
 * 1. a condition with ?
 * 2. expression if True :
 * 3. expression if False
 ********************************************/

// condition ? expressionIfTrue : expressionIfFalse

let adult = checkAge(21);

function checkAge(age) {

    // if (age >= 18) {
    //     return true;
    // }
    // else {
    //     return false;
    // }


    // ternary operator

    return age >= 18 ? true : false;

}

console.log(adult);

