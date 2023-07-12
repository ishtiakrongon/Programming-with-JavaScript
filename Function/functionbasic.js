// Function


function addTwoNum() {
    let a = 2;
    let b = 3;
    let c = a + b;
    console.log(c);
}

addTwoNum();

//-----------------------------------------------------------

// Using return statement

function sumTwoNum(a, b) {

    let c = a + b;
    console.log(c);

}

sumTwoNum(5, 4);

//-----------------------------------------------------------

// create a function to loop over an array

function listArrayItems(arr) {

    for (let i = 0; i < arr.length; i++) {

        console.log(i + 1 + ".", arr[i]); // it will print out all
                             // elements of an array

    }

}

//----------------------------------------------------------

let colors = ["red", "purple", "white", "blue", "yellow", "cyan"];

listArrayItems(colors);


//-----------------------------------------------------------

// Your task in this exercise is to code a function which will 
// be able to take a word and locate the position of a chosen 
// letter in that given word.  

function letterFinder(word, match) {

    for (let i = 0; i < word.length; i++) {

        if (word[i] == match) {
            console.log("Found the", match, "at", i);
        }
        else {
            console.log("-------No match found at", i);
        }
    }
}

letterFinder("test", "t");


//-----------------------------------------------------------

// How to capitalize each word in an array

function capitalizeWords(arr) {
    return arr.map((word) => {
      const capitalizedFirst = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();
      return capitalizedFirst + rest;
    });
  }
  
const words = ['welcome', 'to', 'CODING', 'Beauty'];
  
// [ 'Welcome', 'To', 'Coding', 'Beauty' ]
console.log(capitalizeWords(words));


//-------------------------------------------------------------














