// built in sort methods

let names = ["cyraxx", "hollowfire", "insidethecircle", "fearlock"];

// names = names.sort();

names = names.sort().reverse();

for (let name of names) {

    console.log(name);

}


//---------------------------------------------------------

// Decending order sort using callback functions

let scores = [20, 50, 100, 720, 230, 111];

scores = scores.sort(decendingSort);

scores.forEach(print);  // print all the elements of the array
                        // seperately in decending order


// callback print function to print result

function print(text) {

    console.log(text);

}

// decending sort function

function decendingSort(a, b) {

    return b - a;

}

// acending sort function

function ascendingSort(x, y) {
    return x - y;
}

//------------------------------------------------------------

