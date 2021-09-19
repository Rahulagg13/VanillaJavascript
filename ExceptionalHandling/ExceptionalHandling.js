//Exception Handling in Javascript
/*

An exception signifies the presence of an abnormal condition which requires special operable techniques.
In programming terms, an exception is the anomalous code that breaks the normal flow of the code.
Such exceptions require specialized programming constructs for its execution.


In programming, exception handling is a process or method used for handling the abnormal statements in the code and executing them.
It also enables to handle the flow control of the code/program.
For handling the code, various handlers are used that process the exception and execute the code.
For example, the Division of a non-zero value with zero will result into infinity always, and it is an exception.
Thus, with the help of exception handling, it can be executed and handled.
*/
//Types Of Errors
/*
While coding, there can be three types of errors in the code:

1.Syntax Error: When a user makes a mistake in the pre-defined syntax of a programming language, a syntax error may appear.
2. Runtime Error: When an error occurs during the execution of the program, such an error is known as Runtime error. 
The codes which create runtime errors are known as Exceptions. 
Thus, exception handlers are used for handling runtime errors.
3. Logical Error: An error which occurs when there is any logical mistake in the program that may not produce the desired output,
and may terminate abnormally. Such an error is known as Logical error.
*/
// There are following statements that handle if any exception occurs:
/*
-throw statements
-try…catch statements
-try…catch…finally statements.
*/
/*
try{} statement: Here, the code which needs possible error testing is kept within the try block. 
In case any error occur, it passes to the catch{} block for taking suitable actions and handle the error.
Otherwise, it executes the code written within.

catch{} statement: This block handles the error of the code by executing the set of statements written within the block.
This block contains either the user-defined exception handler or the built-in handler.
This block executes only when any error-prone code needs to be handled in the try block. Otherwise, the catch block is skipped.
*/
//Syntax
/*
try{
expression; } //code to be written.
catch(error){
expression; } // code for handling the error.
*/
// example
// try {
//   const a = [1, 2, 3];
//   console.log(a);
//   console.log(b);
// } catch (e) {
//   console.log("Error", e.message);
// }

//Throw Exceptions
//syntax
// try{
// throw exception; // user can define their own exception
// }
// catch(error){
// expression; }  // code for handling exception.
/*

*/
// try {
//   throw new Error("This is the throw keyword"); //user-defined throw statement.
// } catch (e) {
//   console.log(e.message); // This will generate an error message
// }

//try ...catch...finally
//syntax
/*
try{
expression;
}
catch(error){
expression;
}
finally{
expression; } //Executable code
*/
// try {
//   var a = 4;
//   if (a == 2) console.log("ok");
//   else throw new Error("Value of a must be 2");
// } catch (e) {
//   console.log("Error found" + e.message);
// } finally {
//   console.log("Value of a is ", a);
// }
