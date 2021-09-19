/*
**** Getters and Setters are not functions
they are used to protect your data , particularly when creating classes

getters start with  word 'get'--> they are known as accessors
and 
setters start with word 'set'-->they are known as mutators


*/

// example-->

// const Name = {
//   set fullName(name) {
//     //this is a setter starting with word set
//     //set fullName is not a function
//     const parts = name.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
//   get fullName() {
//     //this is a getter starting with word get
//     //get FullName is not a function
//     // return `${this.firstName} ${this.lastName}`;
//   },
// };

//calling the getter
// var name = Name.fullName; //it will give the fullname
// console.log(name);

// //calling the setters
// Name.fullName = "tushar gupta"; //it will set the firstName-tushar and lastName-gupta and create new object
// name = Name.fullName; //getter
// console.log(name);

// example2-->

// const Name = {
//   //setter
//   set fullName(name) {
//     const parts = name.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
//   //getter
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// //setting the fullName
// Name.fullName = "Pulkit Gupta";
// var name = Name.fullName;
// console.log(name);

// //again setting the new name
// Name.fullName = "Tushar Gupta";
// name = Name.fullName;
// console.log(name);

// example 3 -->
//using setters and getters with class

// const Square = class {
//   constructor(side) {
//     this.side = side;
//   }
//   get Validation() {
//     return this.side > 0;
//   }
//   get Area() {
//     return this.side * this.side;
//   }
//   set Area(area) {
//     const side = Math.sqrt(area);
//     this.side = side;
//   }
// };
// const s1 = new Square(-12);
// console.log(s1.Area);
// console.log(s1.Validation);
// const s2 = new Square();
// s2.Area = 144;
// console.log(s1.Area);
// console.log(s2.Validation);
