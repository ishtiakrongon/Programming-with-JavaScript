// Creating an object with their properties and values

let gameUser = {
    username : "Hollowfire",
    gameId : 122230043,
    genre: "Rpg",
    role : "tank"

}
console.log(gameUser);

console.log(gameUser.username);

//-------------------------------------------------------------

let house = {}

house["rooms"] = 4;
house["drawingroom"] = 1;
house["kitchen"] = "big";
house["color"] = "white";

console.log(house);

//-------------------------------------------------------------

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//-------------------------------------------------------------

//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()