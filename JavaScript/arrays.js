// basics
const fruits = ["banana", "orange", "apple"];

fruits[0] = "pineapple"; 

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let length = fruits.length;
console.log("número de frutas: ", length);
console.log(fruits.pop())
console.log(fruits.sort())

let lastFruit = fruits[fruits.length - 1]
console.log(lastFruit)

fruits.push("Lemon")
fruits.push("Kiwi")

for(let i = 0; i < fruits.length; i++) {
    console.log(i, "", fruits[i])
}

let type = typeof fruits;
console.log("Wrong type: ", type)

type = Array.isArray(fruits)
console.log("True type: Array?", type)

const cars = ["Honda", "Volvo", "Fiat"]
let mixed = fruits.concat(cars)
console.log("concat: ", mixed)

// splice method
console.log( "---------------------")
console.log("original:", fruits)
let removed = fruits.splice(2,2, "Mango")
console.log("removed: ", removed)
fruits.pop()
console.log("newest array: ", fruits)
console.log( "---------------------")

/*
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.
*/

//comparing to objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: "46"
}

person.firstName = "JULIA"
console.log(person.firstName)

// methods