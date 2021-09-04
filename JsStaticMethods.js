//Javascript Static Methods
//javascript static methods are provided ,which are only for class not for class instances
// means that the instance of the class cannot access the static methods
// we have to call static methods on Class to invoke
// example
// var person = class {
//   constructor(name) {
//     this.name = name;
//   }
//   static isValid(person) {
//     console.log("static method is invoked");
//     return person.name.length !== 0;
//   }
// };
// var pulkit = new person("pulkit");
// // console.log(pulkit.isValid({ name: "pulkit" })); //we cannot use static methods on class objects
// console.log(person.isValid(pulkit));

// *************Important Points ***************//
/*
->The static keyword is used to declare a static method.
->The static method can be of any name.
->A class can contain more than one static method.
->If we declare more than one static method with a similar name, the JavaScript always invokes the last one.//imp
->The static method can be used to create utility functions.
->We can use this keyword to call a static method within another static method.//imp
->We cannot use this keyword directly to call a static method within the non-static method.//imp
In such case, we can call the static method either using the class name or as the property of the constructor.
*/

// example:
// var person = class {
//   constructor(name) {
//     this.name = name;
//     // person.isValid({ name: "pulkit" });
//     // this.constructor.isValid({ name: "Pulkit" });
//   }

//   static isValid(person) {
//     //this will be overwritten by the next static member
//     console.log("static method is invoked");
//     return person.name.length !== 0;
//   }
//   static isValid(person) {
//     //always this static function is invoke when called
//     console.log("static method 2 is invoked");
//     return person.name.length !== 0;
//   }
// };
// var pulkit = new person("pulkit");
// console.log(person.isValid(pulkit));
