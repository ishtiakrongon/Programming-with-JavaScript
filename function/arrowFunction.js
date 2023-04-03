// Arrow function =>
// Shortcut for a function expression

let hello;

// Traditional function expression

hello = function () {
    console.log("Hi!");
}
console.log(hello());

//------------------------------------------------------------------

// Arrow function

let helloAgain = () => console.log("Bye");
console.log(helloAgain())

//-----------------------------------------------------------------

let x = "Yo";
let bye;

bye = function(x) {
    return x + " Bye!" + "\n";
}
console.log(bye(x));

//------------------------------------------------------------------

let y = "Pathetic";
let coding;

coding = (y) => y + " " + "learning experience!";
console.log(coding(y));


//-------------------------------------------------------------------


let z = x => x * 2;
console.log(z(2));

