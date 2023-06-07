let myArray = ['Lycan','Tinker', 'Husker'];

// using push() to add another element in the array. This element will add in last.

myArray.push('Akasha');
console.log(myArray);

// using pop() method to delete last element of the array.

deleteLastElement = myArray.pop();
console.log(deleteLastElement);

// using shift method to show 1st element of the array.

console.log(myArray.shift());

// using unshift() method to add new element in the array in 1st position.

newFirstElement = myArray.unshift('Phoenix');
console.log(newFirstElement);