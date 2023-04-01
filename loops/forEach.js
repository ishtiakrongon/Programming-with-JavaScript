// forEach() method


const fruits = ['kiwi', 'mango', 'apple', 'pear'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);

//-------------------------------------------------------

// filter() method
// this method filters arrays based on a specific test

const num = [0, 10, 20, 30, 40, 50];

var nums = num.filter( function(num) {
            return num > 20;
        } )
console.log(nums);

//--------------------------------------------------------

// map() method
// This method is used to map each array item over to another array's item
// based on whatever work is performed inside the function that is passed-in to the map
// as a parameter.

var mappingArrys = [0, 10, 20, 30, 40, 50].map( function(num) {
                        return num / 10;
                    })
console.log(mappingArrys);

//-----------------------------------------------------------