/************** JAVASCRIPT OBJECTS***************/
// **** A JavaScript object is a collection of named values

//objects are the entities that have a set of properties and methods
//objects have key value pairs
//since js is object-oriented language then all things in js are in obj.
//we can declare objects in js in 3 ways:-
// 1.by using object literals //simple
// 2.by creating instance of object
// 3.by using an object constructor //use of new keyword

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
//---------------------------------------
// const Person = new Object();
// Person.name = "Pulkit";
// Person.age = 19;
// console.log(Person.name);
// console.log(Person.age);

//3. By creating an object constructor
// function Name(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// const person = new Name("pulkit", "gupta");
// console.log(person.firstName);
// console.log(person.lastName);
//---------------------------------------
// function Obj(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person = new Obj("pulkit", 20);
// console.log(person.name);
// console.log(person.age);

//one more example
// function Rect(length, breadth) {
//   this.length = length;
//   this.breadth = breadth;
// }
// const r1 = new Rect(10, 20);
// console.log(r1.length);
// console.log(r1.breadth);
// const r2 = new Rect(100, 400);
// console.log(r2.breadth);
// console.log(r2.length);
//Javascript Object Properties
//Methods to Access the properties of Javascript objects are-->
// 1. obj.key
// 2. obj["key"]
// 3. let x="key" and obj[x]
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
//one more example
// function Rect(length, breadth) {
//   this.length = length;
//   this.breadth = breadth;
//   this.color = "red";
//   this.n_o_s = 4;
// }
// const r1 = new Rect(10, 20);
// console.log(r1.length);
// for (property in r1) {
//   console.log(r1[property]);
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

//************ Javascript Objects Methods
// 1.assign()
//this will assign new values to the target object
//it will not overwrite the existing values
// syntax:
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { c: 4, d: 5, e: 6 };
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

//2.create()
// const fun = {
//   print: function () {
//     console.log("this is sample");
//   },
// };
// const Obj = Object.create(fun);
// Obj.print();

// const people = {
//   printIntroduction: function () {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   },
// };
// const me = Object.create(people);
// me.name = "Marry"; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten
// me.printIntroduction();

//3.defineProperties()

//4.defineProperty()
//5.entries()
//6.freeze()
//7.getOwnPropertyDescriptor()
//8.getOwnPropertyDescriptors()
//9.getOwnPropertyNames()
//10.getOwnPropertySymbols()
//11.getPrototypeOf()
//12.is()
//13.preventExtensions()
// const obj = { name: "pulkit" };
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));

//14.seal()
//it seal the object and prevent the new properties to added in that
// const obj = { name: "pulkit" };
// Object.seal(obj);
// console.log(Object.isSealed(obj));

//15.setPrototypeOf()
//16.values()
// var obj = { name: "Pulkit", age: "19" };
// console.log(Object.values(obj));
