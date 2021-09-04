//JAVASCRIPT POLYMORPHISM
/*
The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.
It provides an ability to call the same method on different JavaScript objects.
As JavaScript is not a type-safe language, we can pass any type of data members with the methods.
*/
// class A {
//   constructor() {
//     console.log("Class A");
//   }
//   display() {
//     console.log("this is from class A display");
//   }
// }
// class B extends A {
//   constructor() {
//     super();
//     console.log("Class B");
//   }
//   display() {
//     // this function overwrite the class A display function
//     console.log("this is from class B display");
//   }
// }
// const b = [new A(), new B()];

// // b.display();
// b.forEach((element) => {
//   element.display();
// });

//Prototype based example
function A() {}
A.prototype.display = function () {
  return console.log("this is from A");
};
function B() {}
B.prototype = Object.create(A.prototype);
const b = [new A(), new B()];

// b.display();
b.forEach((element) => {
  element.display();
});
