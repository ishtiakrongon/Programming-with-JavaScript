let fruits = [];

fruits.push("apple");
fruits.push("orange");
console.log(fruits);

//-------------------------------------------------

// pop() method

fruits.pop();
console.log(fruits);


//---------------------------------------------------

// shift() it works like .pop(), except it removes first element
// instead of last element.

let exArray = ["Viper", "Invoker", "Husker"];
let rmvElement = exArray.shift();
console.log(rmvElement);

//--------------------------------------------------------------

// .unshift() is like .push() method except it adds the element
// first position rather than adding in last position.

let exA2 = ["Viper", "Invoker", "Husker"];
exA2.unshift("Kunkka");
console.log(exA2);

//--------------------------------------------------------------