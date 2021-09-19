/* JAVASCRIPT LOOPS */
/*
1.for
2.while //while loop is entry controlled loop.
3.do-while //exit controlled loop. //it will iterate one time and then check the condition for more iterations to be performed
4.for-in //used for iteration in objects
5.forEach //used for iteration in Arrays
6.for-of //used to get all the elements from the Array

*/

// examples
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// ---------------------------
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// ---------------------------
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);
// ---------------------------
// let Obj = {
//   person: "pulkit",
//   age: 18,
//   standard: "B.tech",
// };
// for (let key in Obj) {
//   console.log(key, ":", Obj[key]);
// }
// ---------------------------
// let Arr = ["pulkit", "tushar", "paras"];
// Arr.forEach((Element, index) => {
//   console.log(Element, index);
// });
//----------------------------
let Arr = [1, 2, 3, 4, 5];
for (let element of Arr) {
  console.log(element);
}
