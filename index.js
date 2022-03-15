
// /**
//  * EXAMPLE 1: Create object and modify 
//  * its propierties.
//  */

// let myObject;
// myObject = {
//     a: 10,
//     b: "abc",
// };
// console.log(myObject);

// myObject.a = 15;
// console.log(myObject);

// myObject.c = true;
// console.log(myObject);

// delete myObject.b;
// console.log(myObject);
// console.log(myObject.a);

// /**
//  * CHALLENGE 1: 
//  * 
//  * Create variable called "mypost".
//  * Initial value should be {}.
//  * Add property called "postTitle" and value "Object is type reference".
//  * Add one more property "postLikes" with value 0.
//  * Add third property "shared" and set its value "false".
//  * Increse value of the value of the "postÑikes" by 1.
//  * Delete property "shared".
//  */

// let myPost = {};
// myPost.postTitle = "Object is a type reference";
// myPost.postLikes = 0;
// myPost.shared = false;
// console.log(myPost);
// myPost.postLikes = myPost.postLikes + 1;
// delete myPost.shared;
// console.log(myPost);

// /**
//  * EXAMPLE 2: 
//  * 
//  * use "const" for object declaration.
//  */

// const myObject = {};
// myObject.a = true; // NO ERROR: Variable is not reassigned.
// console.log(myObject);

// myObject = {
//     a: true,
// }; // Uncaught TypeError: Assignment to constant variable.

// /** 
//  * CHALLENGE 2: 
//  * 
//  * Create variable called "myObject" and add property "a" -10.
//  * Create another variable "copyOfMyObject" and its value should be myObject.
//  * Add new peoperty "b" with value false to the "copyOfMyObject".
//  * Print to the console "myObject" and "copyOfMNyObject" and interpret results.
//  */

// let myObject = {
//     a: -10,
// };
// let copyOfMyObject = myObject;
// copyOfMyObject.b = false;

// console.log(myObject);
// console.log(copyOfMyObject);

// /**
//  * EXAMPLE 3:
//  * 
//  * Bracket notation
//  */

// let myObject = {
//     a: true,
//     b: null,
//     c: 25,
// };
// console.log(myObject["a"]); // true
// // console.log(myObject[a]); // index.js:87 Uncaught ReferenceError: a is not defined
// console.log(myObject["b"]); // null

// const propertyName = "c";
// console.log(myObject[propertyName]); // 25
// console.log(myObject["propertyName"]); // undefined

// myObject["new" + "property" + "Name"] = "Value for dynamically computed property name."
// console.log(myObject);

// /**
//  * EXAMPLE 4:
//  * 
//  * Missing propierties
//  */

// const myObject = {
//     a: 3,
//     b: true,
// };
// // Code execution is not stopped
// console.log(myObject.c); // undefined
// console.log(myObject.absentproperty); // undefined
// // Code execution is STOPPED
// // console.log(nonDeclaredVariable); // Uncaught ReferenceError: nonDeclaredVariable is not defined

// // IMPORTANT
// // NEVER ASSIGN "undefined" to object or variable. Use "null" instead.
// myObject.newPropertyWithUndefinedValue = undefined;
// console.log(myObject);
// console.log(myObject.newPropertyWithUndefinedValue);

// /**
//  * CHALLENGE 3:
//  * 
//  * Create object "objectWithNestedObject" with initial value {}.
//  * Add property "nestedObject" with initial value {}.
//  * Add property "a" with value "null" to "nestedObject", use dot notation.
//  * Add property "b" with value "true" to "nestedObject", use bracket notation. Create new variable with propety name.
//  */

// let objectWithNestedObject = {};
// objectWithNestedObject.nestedObject = {};
// objectWithNestedObject.nestedObject.a = null;
// const propertyName = "b";
// objectWithNestedObject.nestedObject[propertyName] = true;
// console.log(objectWithNestedObject);

/** JS-BASIC/INTRO/CHALLENGE-1 -TASK
 * 
 * Create new .js file called "other.js" 
 * and in this file following line should
 * be printed to the console:
 * 
 * "Greetings from other.js file!"
 * 
 * Add referenceto this file to the 
 * "index.html"
*/

console.log("Hello from external JavaScript file");
