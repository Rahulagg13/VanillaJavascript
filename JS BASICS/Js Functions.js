/* JAVASCRIPT FUNCTIONS */
//JavaScript functions are used to perform operations. We can call JavaScript function many times to reuse the code.
//Advantages
// ->Code reusability: We can call a function several times so it save coding.
// ->Less coding: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.
// examples;
// function fun() {
//   return console.log("hello");
// }
// fun();
//_______________________________
// function fun(arg) {
//   return console.log(arg);
// }
// fun("Hello");
//_______________________________
// function fun(arg1, arg2, arg3, arg4) {
//   return console.log(arg1, arg2, arg3);
// }
// fun("Hello", "bye", "GoodBye");
//_______________________________
// function Cube(num) {
//   return num * num * num;
// }
// console.log(Cube(2));
//_______________________________

//******* JavaScript Function Object
/*
In JavaScript, the purpose of Function constructor is to create a new Function object. It executes the code globally.
However, if we call the constructor directly, a function is created dynamically but in an unsecured way.
*/
// var add = new Function("num1", "num2", "return num1+num2"); //declaring new Function using function constructor
// console.log(add(2, 3));

// var pow = new Function("num1", "num2", "return Math.pow(num1,num2)");
// console.log(pow(2, 3));

// var fun = new Function("String", "String2", "console.log(String)");
// fun("huii");
//******** Javascript Methods

// 1.apply() //array
//2.bind()
//3.call()
//3.toString()

//1.apply()
/*
Syntax:
function.apply(thisArg, [array])
thisArg->basically for calling the function
//--------------------------------
The JavaScript Function apply() method is used to call a function contains this value and an argument contains elements of an array.
Unlike call() method, it contains the single array of arguments.
->function.apply(thisArg, [array])
*/
// example:
// const arr = [1, 2, 3];
// const max = Math.max.apply(null, arr);
// console.log(max);
// const min = Math.min.apply(null, arr);
//console.log(min);
// const newArr = [4, 5, 6];
// arr.push.apply(arr, newArr);
// console.log(arr);
// var website = {
//   name: "Javatpoint",
//   getName: function () {
//     return this.name;
//   },
// };
// var unboundGetName = website.getName;
// var boundGetName = unboundGetName.bind(website);
// console.log(boundGetName());

//4.toString()
// function fun() {
//   return console.log("Fun");
// }
// console.log(fun.toString());
// console.log(typeof fun.toString());
