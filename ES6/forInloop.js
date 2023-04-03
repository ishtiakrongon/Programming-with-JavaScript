// Using for in loop to loop over an object

const Car = {
    make: "Toyota",
    model: "X-Corolla",
    year: 2005,
    color: "Silver"
}

for(let property in Car) {
    console.log(Car[property]);
}