// 2D Array = Two Dimensional Arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["onions", "potatoes", "tomatoes"];
let meats = ["chicken", "beef", "mutton"];

let groceryList = [fruits, vegetables, meats];

for (let list of groceryList) {
    //  console.log(list);
    for (let item of list) {
        console.log(`${count}.` + item);
    }
}