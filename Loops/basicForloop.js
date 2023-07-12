for(let counter = 1; counter <= 10; counter += 1) {
    console.log(counter);
}

for(let i = 10; i > 0; i -= 3){
    console.log(i);
}
console.log("Happy New Year!");

//------------------------------------------------------------

// nested for loops
// week 1 and 2 | days 1 to 5

for (i = 1; i <= 2; i++) {
    for (j = 1; j<= 5; j++) {
        console.log("week " + i + " Days " + j);
    }
}

//------------------------------------------------------------

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}

//-----------------------------------------------------------

let names = "Hollowfire";
for (let wordCount = 0; wordCount < names.length; wordCount++){
   console.log(names[wordCount]);
}

//-----------------------------------------------------------

let prices = [10, 20, 30, 40, 50, 60];

// count forward

for (let i = 0; i < prices.length; i++) {

    console.log(prices[i]);

}

// count backward

console.log("\n");

for (let j = prices.length - 1; j >= 0; j--) {
    console.log(prices[j]);
}

//-----------------------------------------------------------

let savings = [25, 35, 45, 65, 75, 85];

for (let saving of savings) {
    console.log(saving);
}

//----------------------------------------------------------



