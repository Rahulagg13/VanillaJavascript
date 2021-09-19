//*************JAVASCRIPT ENCAPSULATION*************
//wrapping of data and methods under one unit name is called encapsulation
// example --> class

/*
The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data.
It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: -
Use var keyword to make data members private.
Use setter methods to set the data and getter methods to get that data.
*/
// it allows us to-
// read/write data
// read data only
// write data only
// examples:--
// class Student {
//   constructor(name, marks) {
//     this.name = name;
//     this.marks = marks;
//   }
//   get Marks() {
//     return this.marks;
//   }
//   set Marks(marks) {
//     this.marks = marks;
//   }
//   get Name() {
//     return this.name;
//   }
//   set Name(name) {
//     this.name = name;
//   }
//   static isValidMarks(stu) {
//     return stu.marks > 0 || stu.marks < 100;
//   }
// }
// var pulkit = new Student("Pulkit", 90);
// console.log(pulkit);
// console.log(pulkit.Name);
// console.log(pulkit.Marks);
// pulkit.Marks = -100;
// pulkit.name = "Pulkit Gupta";
// console.log(pulkit.Marks);
// console.log(pulkit.Name);
// console.log(Student.isValidMarks(pulkit));
