//JAVASCRIPT Abstraction
/*
An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
In other words, it ignores the irrelevant details and shows only the required one.

*/

function A() {
  this.name = name;
}

function B(name) {
  this.name = name;
}
B.prototype = Object.create(A.prototype);
var b = new B("pulkit");
console.log(b instanceof A);
console.log(b instanceof A);
