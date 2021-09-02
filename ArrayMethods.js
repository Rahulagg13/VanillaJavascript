/*******************ARRAY METHODS********************/

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(Array);

// let MixedArray = [1, 1.23, "Pulkit", true, undefined, null]; //valid array

//join()
// console.log(Array.join(" $ ")); //it will join all the elements of an array with $ and present it as a string
// console.log(Array.join(" * "));
// console.log(Array.join(" , "));

//pop()
// console.log(Array.pop()); //remove element from last and display it in the console //0
// console.log(Array.pop()); //9
// console.log(Array.pop()); //8

//push()
// console.log(Array.push(124)); //it will add the element in the array from end and show the last index in the console
// console.log(Array);

//shift()
// console.log(Array.shift()); //remove the element form the start //remove 1 and display in the console
// console.log(Array);

//unshift()
// console.log(Array.unshift("100")); //it will add new element at the start and shift all others to higher 1 index
// console.log(Array);

//delete
// delete Array[0]; //delete the desired element//you will see empty at the place
// console.log(Array);

//splice()
// splice(position,no. of elements to be removed,elements to be add)
// console.log(Array.splice(2, 0, "343"));
// console.log(Array);

//toString()
// console.log(Array.toString()); //join the elements with ',' and display as a string

//concat()
// let newArray = ["q", "w", "e", "r"];
// console.log(Array.concat(newArray));

//silce()
// console.log(Array.slice(5));
// console.log(Array.slice(5, 10)); //silce(start,end)

//sort()
// console.log(Array.sort()); //arrange in asc

//reverse()
// console.log(Array.reverse()); //reverse an array

//includes()
// console.log(Array.includes(3)); //true
