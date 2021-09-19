//JAVASCRIPT Abstraction
/*
An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
In other words, it ignores the irrelevant details and shows only the required one.

*/
//instance of method check weather the object is belong to the particular class or not

// function A() {
//   this.name = name;
// }

// function B(name) {
//   this.name = name;
// }
// B.prototype = Object.create(A.prototype);
// var b = new B("pulkit");
// console.log(b instanceof A);
// console.log(b instanceof A);

//Example of Abstraction
function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  //we hide the data that are imp
  //here we hide salary and Annual Salary method to avoid any changes outside the class
  var salary = salary;
  var AnnualSalary = () => {
    console.log(salary * 12);
  };
  this.details = () => {
    console.log(this.name + " | " + this.age);
    AnnualSalary();
  };
}
const e1 = new Employee("pulkit", 20, 2000);
e1.details();
