//Javascript Arrays

/*
Arrays are the collection of data having same data type
but in js ...Array may have elements having different types

*/
// example :-
// const newArray = ["pulkit", "tushar", 1, 2, 3];

// console.log(newArray);
// hence newArray is an Array
//we can define Array in  Js using 3 main methods
// 1. using array literals
// 2. Creating instance of an array
//3. Using an array constructor

//1.Using Array literals
// example:-
// const newArray = [1, 2, 3]; //using Array literals

//2.creating an instance of an array.
//example:-
// var newArray = new Array();
// newArray[0] = 1;
// newArray[1] = 2;
// newArray[2] = 3;
// console.log(newArray);

//3.Using an Array constructor
// var newArray = new Array(1, 2, 3);
// console.log(newArray);

//Array Methods
//1.concat()
/*
The JavaScript array concat() method combines two or more arrays and returns a new string.
This method doesn't make any change in the original array.
*/
// example:-
// const Array1 = [1, 2, 3];
// const Array2 = [4, 5, 6];
// console.log(Array1.concat(Array2));
//Example 2:-
// const Array1 = [1, 2, 3];
// const Array2 = [4, 5, 6];
// const Array3 = [7, 8, 9];
// console.log(Array1.concat(Array2, Array3));
//Example 3:-
// const Array1 = [1, 2, 3];
// const Array2 = [4, 5, 6];
// console.log(Array1.concat("qwerty", Array2));

//2.copyWithin()
/*
The JavaScript array copyWithin() method copies the part of the given array with its own elements and returns the modified array.
This method doesn't change the length of the modified array.
**Syntax:
array.copyWithin(target, start, end)
target - The position where the copied element takes place.
start - It is optional. It represents the index from where the method starts copying elements. By default, it is 0.
end - It is optional. It represents the index at which elements stops copying. By default, it is array.length-1.


*/
// example:-
// const Array1 = [1, 2, 3];
// console.log(Array1.copyWithin(0, 2, 3));

//ex2
// const Array1 = [1, 2, 3, 4, 5];
// console.log(Array1.copyWithin(2, 0, 2));
//ex3
// const Array1 = [1, 2, 3, 4, 5];
// console.log(Array1.copyWithin(4));

//3.Array.entities()
// const Array1 = [1, 2, 3];
// const itr = Array1.entries();
// // console.log(e);
// for (x of itr) {
//   console.log(x);
// }

//4.Array.every()
/*
The JavaScript array every() method checks whether all the given elements in an array are satisfying the provided condition.
It returns true when each given array element satisfying the condition otherwise false.
*/
// example:
// const newArray = [1, 2, 3, 4];
// function Check(value) {
//   return value < 30;
// }
// console.log(newArray.every(Check));
//it check for every element for that condition

//4.Array.flat(number_of_dimensions)
/*
it simply flat a multi-dimensional Array into a one dimensional array
 */
// example:-

// const newArray = [1, 2, [3, 4], [9, 0]]; //multi-dimensional
// console.log(newArray.flat(3));
// const newArray = [1, 2, [3, 4, [5, 6, [7, 8]]]]; //multi-dimensional
// console.log(newArray.flat(4));

//5.flatMap()
/*
The flatMap() method is a combination of flat() and map() methods.
This method initially maps each array element through a mapping function, then flatten up the array with depth value as 1.
*/

//6. fill(value,start,end)
/*
this fill the array with the value provided
*/
// example :-
// const newArray = [1, 2, 3];
// console.log(newArray.fill("p", 3, 7));

//7.form()
