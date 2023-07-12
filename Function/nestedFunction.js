// Nested Function

// nested function = Functions inside functions. Outer function
//                   have access to inner function. Inner function
//                   are hidden from outside.
//                   used in closures

let userName = "Hollowfire";
let userInbox = 0;


login();

function login() {
    displayuserName();
    displayuserInbox();

    function displayuserName() {
        console.log(`Welcome ${userName}`);
    }
    
    function displayuserInbox() {
        console.log(`You have ${userInbox} messages`);
    }
}

