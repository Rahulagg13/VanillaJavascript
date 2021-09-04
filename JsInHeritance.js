//Javascript Inheritance
/*
The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.
It provides flexibility to the child class to reuse the methods and variables of a parent class.
 we use extends keyword to inherit the properties of base class in derived class
*/
// example
// class Capture extends Date {
//   constructor(name, year) {
//     super(year);
//     this.moment = name;
//   }
// }
// var date = new Capture("Selfie", "2001");
// console.log(date.moment);
// console.log(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
// console.log(date.getHours() + ":" + date.getMinutes());

//prototype function based examples
// function Bike(company) {
//   this.company = company;
// }
// //prototypes are used to set the new properties to the object which is accessible to all objects
// Bike.prototype.getCompany = function () {
//   return this.company;
// };
// //Another constructor function
// function Vehicle(name, price) {
//   this.name = name;
//   this.price = price;
// }
// var bike = new Bike("Honda");
// Vehicle.prototype = bike; //Now Bike treats as a parent of Vehicle.
// var vehicle = new Vehicle("Shine", 70000);
// // document.writeln(
// //   vehicle.getCompany() + " " + vehicle.name + " " + vehicle.price
// // );
// console.log(vehicle.getCompany());
// console.log(vehicle.name);
// console.log(vehicle.price);

//More Example
function School(S_name) {
  this.School_name = S_name;
}
//going to declare a prototype
School.prototype.getSchoolName = function () {
  return this.School_name;
};

//
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}
//inheriting the school one into Student one
Student.prototype = s; //now School will behave as a parent for Student one
//creating an object for the school one
var s = new School("DPS");
//creating an object for Student one
var Stu = new Student("pulkit", 90);
console.log(s);
console.log(Stu);
