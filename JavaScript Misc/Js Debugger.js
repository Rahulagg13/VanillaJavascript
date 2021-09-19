/*
Sometimes a code may contain certain mistakes.
Being a scripting language, JavaScript didn't show any error message in a browser.
But these mistakes can affect the output.


In debugging, generally we set breakpoints to examine each line of code step by step.
There is no requirement to perform this task manually in JavaScript.

JavaScript provides debugger keyword to set the breakpoint through the code itself.
The debugger stops the execution of the program at the position it is applied.
Now, we can start the flow of execution manually. If an exception occurs, the execution will stop again on that particular line.
*/
// example:

var a = 1;
var b = 2;
debugger;
console.log(a);
console.log(b);
