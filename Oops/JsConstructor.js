//Javascript Constructors
// A JavaScript constructor method is a special type of method which is used to initialize and create an object.
// It is called when memory is allocated for an object.
/*
*** Important Points ***
->The constructor keyword is used to declare a constructor method.
->The class can contain one constructor method only.
->JavaScript allows us to use parent class constructor through super keyword.//Imp
explain
=>suppose we have a parent class 'Class A' and we have one Derived Class 'Class B';
we created an object for class B and we have to initialize an with constructor of class A and B
so we have to call the constructor of class A by using super() inside the constructor of class B
 example:-
 class A{
     constructor(){
         this.gender="Male"
     }
 }
 class B extends A{
     constructor(name){
         super()//use to call the constructor of class A
         this.name=name
     }
 }
 var obj =new B("pulkit");
 console.log(obj.name);
 console.log(obj.gender)
*/
// when we define a class then there is only one constructor for the class
//constructor will assign the default values for the object when created
// example
// var Person = class {
//   constructor(name) {
//     this.name = name;
//   }
// };
// const pulkit = new Person("pulkit");
// console.log(pulkit);

// *************** Important Points to remember ***************** //;
//-> If we didn't specify any constructor method, JavaScript use default constructor method.
// ->super()//used to call the constructor of the parent class
//->class only have one constructor method only
