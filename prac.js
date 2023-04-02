function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();

//----------------------------------------------------------

const  [a, b]  =  [1,2,3,4]

console.log(b)

//----------------------------------------------------------

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);

//----------------------------------------------------------

