/************** JAVASCRIPT OBJECTS***************/
// **** A JavaScript object is a collection of named values

//objects are the entities that have a set of properties and methods
//objects have key value pairs
//since js is object-oriented language then all things in js are in obj.
//we can declare objects in js in 3 ways:-
//1.by using object literals //simple
//2.by crating instance of object //use of new keyword
//3.by using an object constructor //use of new keyword

//1. by using object literals
// const name = {
//   firstName: "Pulkit",
//   lastName: "Gupta",
// };
// console.log(name.firstName);
// console.log(name.lastName);

//2. by creating instance of an object //use of new Keyword
// const name = new Object();
// name.firstName = "Pulkit";
// name.lastName = "Gupta";
// console.log(name.firstName);
// console.log(name.lastName);

//3. By creating an object constructor
// function Name(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// const person = new Name("pulkit", "gupta");
// console.log(person.firstName);
// console.log(person.lastName);

//Javascript Object Properties
//Methods to Access the properties of Javascript objects are-->
//1. obj.key
//2. obj["key"]
//3. let x="key" and obj[x]
//  Example
// 1. by using object literals

// const name = {
//   firstName: "Pulkit",
//   lastName: "Gupta",
// };
// console.log(name.firstName); //by using .property method
// console.log(name["firstName"]); //by using ["property"] method
// let x = "lastName";
// console.log(name[x]); //by using [expression] method

// JavaScript for...in Loop
// const name = {
//   firstName: "Pulkit",
//   lastName: "Gupta",
// };
// for (x in name) {
//   //it will give key
//   console.log(name[x]);
// }
/*
Example Explained
The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]
*/
//deleting properties
// const name = {
//   firstName: "Pulkit",
//   lastName: "Gupta",
// };
// delete name.firstName;
// delete name["firstName"];
// console.log(name);

//Nested Objects
// const person = new Object();
// person.firstName = "Pulkit";
// person.lastName = "gupta";
// person.skills = new Object();
// person.skills.dev = "Javascript";
// person.skills.Dsa = "Cpp";
// // console.log(person["skills"]["Dsa"]);
// for (property in person) {
//   console.log(property);
// }
//Nested Arrays and Objects
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };
// console.log(myObj.cars);
// to get access to cars in obj

// Object Methods
/**
 * 
 Methods are actions that can be performed on objects.
 */

//  Object.assign({your new values},source) //it will add new values and copy other object in that
// source is other object
//it cannot over write
// example-->
const o1 = {
  a: 1,
  b: 2,
  c: 3,
};

const o2 = Object.assign({ c: 5, d: 78, e: 908 }, o1);
console.log(o2);
