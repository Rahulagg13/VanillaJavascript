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
// Objects //inherit prototypes
//   ^
//   |
//Classes //inheriting from Objects
//   ^
//   |
//Class Object1  //inheriting from class

// Examples
function Person(firstName, lastName) {
  //Instance Members
  this.firstName = firstName;
  this.lastName = lastName;
}
var pulkit = new Person("Pulkit", "gupta");
//prototype members
Person.prototype.fullName = function () {
  //ClassName.prototype.Method
  return this.firstName + " " + this.lastName;
};
Person.prototype.gender = "Male";
console.log(pulkit.fullName());
