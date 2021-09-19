//JAVASCRIPT DOCUMENT OBJECT MODEL
/*
The document object represents the whole html document.

When html document is loaded in the browser, it becomes a document object.
It is the root element that represents the html document.
It has properties and methods. By the help of document object, we can add dynamic content to our web page.


As mentioned earlier, it is the object of window. So
--> window.document is same as -->document

*/
//we can apply various methods to manipulate the DOM
// some are:-
/*
1. getElementById()
2. getElementByTagName()
3. getElementByName()
4.getElementsByClassName()
5.write()
6.writeln()
*/

//getElementById()
/*
The document.getElementById() method returns the element of specified id.
example:
const getId=document.getElementById('idOfTheElement')
*/
// const idO = document.getElementById("o");
//getElementByClassName()
/*
The document.getElementsByName() method returns all the element of specified name.
this document can access the elements with class name also
this will return an array
*/
// const ClassO = document.getElementsByClassName("o");
// ClassO is an array
// console.log(ClassO[3]);

//getElementByTagName()
/*
by this we can select all the document elements having same tags
*/
// const div = document.getElementsByTagName("div");
// div[0].innerHTML = "<strong>Pulkit</strong></br>";

//getElementByName()
//it will return an array
// document.getElementsByName("name").forEach((Element) => {
//   console.log(Element.value);
// });
