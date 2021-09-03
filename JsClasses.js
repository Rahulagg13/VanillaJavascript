/***************JAVASCRIPT CLASSES*********************/
/*
In JavaScript, classes are the special type of functions.
 We can define the class just like function declarations and function expressions.
The JavaScript class contains various class members within a body including methods or constructor. 
The class is executed in strict mode.
So, the code containing the silent error or mistake throws an error 

*******************

The class syntax contains two components:

Class declarations
Class expressions
*/

/*
JAVASCRIPT CLASSES ARE DECLARE USING KEYWORD CLASS 
....BY NAMING CONVENTION OF JS THE NAME OF CLASS MUST START WITH UPPERCASE LETTER
*/

//EXAMPLE

//Declaring class

//this is the example of class declaration method

// class Employee {
//   //Initializing an object
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   //Declaring method
//   detail() {
//     document.writeln(this.id + " " + this.name + "<br/>");
//     document.writeln(this.id + " , " + this.name + "<br/>");
//   }
// }
// //passing object to a variable
// var e1 = new Employee(101, "Martin Roy");
// var e2 = new Employee(102, "Duke William");
// var e3 = new Employee(103, "Pulkit");
// var e4 = new Employee(104, "tushar");
// e1.detail(); //calling method
// e2.detail();
// e3.detail();
// e4.detail();

//we cannot define multiple classes with same name
// it will throw an error
// A class can be declared once only. If we try to declare class more than one time, it throws an error.

//Class expression
/*
Another way to define a class is by using a class expression.
 Here, it is not mandatory to assign the name of the class. So, the class expression can be named or unnamed.
 The class expression allows us to fetch the class name. However, this will not be possible with class declaration.
*/
//Unnamed class expression
// var emp = class {
//   constructor(id, name) {
//     (this.id = id), (this.name = name);
//   }
//   detail() {
//     document.writeln(this.id + " , " + this.name);
//   }
// };
// const e1 = new emp(101, "pulkit");
// e1.detail();
// var emp = class {
//   constructor(id, name) {
//     (this.id = id), (this.name = name);
//   }
//   detail() {
//     document.writeln(this.id + " , " + this.name);
//   }
// };
// const e2 = new emp(102, "tushar");
// e2.detail();
// document.writeln(emp.name);

// Rerendering is possible in class expression
//named class expression
// var emp = class Employee {
//   constructor(id, name) {
//     (this.id = id), (this.name = name);
//   }
//   detail() {
//     document.writeln(this.id + " " + this.name);
//   }
// };
// const e1 = new emp(101, "pulkit");
// e1.detail();
// //Re-rendering of named class expression
// var emp = class Employee {
//   constructor(id, name) {
//     (this.id = id), (this.name = name);
//   }
//   detail() {
//     document.writeln(this.id + " , " + this.name);
//   }
// };
// var e2 = new emp(102, "tushar");
// e2.detail();
// console.log(emp.name);
// console.log(Employee.name);//error
/*
 Class declaration vs Class Expression
-->Class Declaration cannot be re-render while class expression can.
-->

*/

/********THIS KEYWORD*********/
// The JavaScript this keyword refers to the object it belongs to.

// More Examples
// var Rectangle = class {
//   //initializing an Object
//   constructor(width, height, color) {
//     (this.width = width), (this.height = height), (this.color = color);
//   }
//   //declaring methods
//   getArea() {
//     document.writeln(
//       this.width +
//         " * " +
//         this.height +
//         " = " +
//         this.height * this.width +
//         "<br/>"
//     );
//   }
//   getDescription() {
//     document.writeln(
//       "Hi I am a rectangle of height= " +
//         this.height +
//         " and width = " +
//         this.width +
//         " and my color is " +
//         this.color +
//         "<br/>"
//     );
//   }
// };
// var R1 = new Rectangle(5, 3, "red");
// R1.getArea();
// R1.getDescription();

//Getters and setters in JsClasses

// class square {
//   constructor(side) {
//     this.side = side;
//     this.requests = 0;
//   }
//   //getters
//   get Side() {
//     this.requests++;
//     return this.side;
//   }
//   get Area() {
//     this.requests++;

//     return this.side * this.side;
//   }
//   //setters
//   set Area(area) {
//     this.requests++;
//     this.side = Math.sqrt(area);
//   }
// }
// const s1 = new square(10); //declaring an object
// console.log(s1.Side);
// console.log(s1.Area);
// s1.Area = 25; //setters
// console.log(s1.Area); //getters
// console.log(s1.Side); //getters
// console.log("Number of requests");
// console.log(s1.requests);

//Static members
//static members are not called upon objects
// they are refrenced to the classes
//They are upon Classes
// class Square {
//   constructor(side) {
//     this.side = side;
//   }
//   get Area() {
//     return this.side * this.side;
//   }
//   static isEqual(s1, s2) {
//     //never use 'this' inside static methods
//     console.log(s1.Area);
//     console.log(s2.Area);
//     return s1.Area === s2.Area;
//   }
//   static Valid(s) {
//     return s.side > 0;
//   }
// }
// var s1 = new Square(-10);
// var s2 = new Square(10);
// console.log(Square.isEqual(s1, s2));
// console.log(Square.Valid(s1));
// //if we use s1.isEqual(s1,s2), then it will throw an error that it is is Equal is not a function
