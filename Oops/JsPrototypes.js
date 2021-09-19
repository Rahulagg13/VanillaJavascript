//JavaScript Prototype Object
/*
JavaScript is a prototype-based language that facilitates the objects to acquire properties and features from one another.
Here, each object contains a prototype object.
In JavaScript, whenever a function is created the prototype property is added to that function automatically.
This property is a prototype object that holds a constructor property.

#syntax

ClassName.prototype.methodName=value
value may be a constructor or a string value

*/
//Requirement for Prototype Objects
/*
Whenever an object is created in JavaScript, its corresponding functions are loaded into memory.
So, a new copy of the function is created on each object creation.
In a prototype-based approach, all the objects share the same function.
This ignores the requirement of creating a new copy of function for each object.
Thus, the functions are loaded once into the memory.
*/
//Prototype Chaining
//  each Class is derived from from Objects
//  and objects of that class derived from the upper base class
// so from  that way prototypes are available to each object of the class
// this is known as prototype chaining
// Objects //inherit prototypes //globally present
//   ^
//   |
//Classes //inheriting from Objects
//   ^
//   |
//Class Object1  //inheriting from class

// Examples
// function Person(firstName, lastName) {
//   //Instance Members
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// var pulkit = new Person("Pulkit", "gupta");
// //prototype members
// Person.prototype.fullName = function () {
//   //ClassName.prototype.Method
//   return this.firstName + " " + this.lastName;
// };
// Person.prototype.gender = "Male";
// console.log(pulkit.fullName());

//Example 2:
// function College(Name, Branch) {
//   this.Name = Name;
//   this.Branch = Branch;
// }
// var clg = new College("Abes", "CSE"); //object (3rd method)

// College.prototype.Details = function () {
//   //adding a prototype
//   return this.Name + " " + this.Branch;
// };
// College.prototype.Head = "Pulkit Gupta";
// console.log(College);
// console.log(clg.Details());
// console.log(clg.Head);

// const obj = {
//   name: "xyz",
// };
// console.log(obj.Head); //for this object it is undefined
