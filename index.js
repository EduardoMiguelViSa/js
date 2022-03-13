/**
 * EXAMPLE 1:  Variable declaration.
 */

//var a;
// console.log(a);

// console.log(b); // Uncaught ReferenceError: b is not defined

// let c;
// console.log(c);

// const d; // Uncaught SyntaxError: Missing initializer in const declaration

/**
 * EXAMPLE 2: "let"
 */

// let myNumber = 10;
// console.log(myNumber);

// Declaration
// let myString;
// console.log(myString);
// Assignment
// myString = "Hello from String";
// console.log(myString);
// Re-assignment
// myString = "New value for myString variable";
// console.log(myString);

/**
 * EXAMPLE 3: "var"
 */

 // var myNumber = 10;
 // console.log(myNumber);
 
 // Declaration
 // var myString;
 // console.log(myString);
 // Assignment
 // myString = "Hello from String";
 // console.log(myString);
 // Re-assignment
 // myString = "New value for myString variable";
 // console.log(myString);

 /**
 * EXAMPLE 4: "const"
 */

 // const myBoolean = true;
 // console.log(myBoolean);
 // myBoolean = false; // index.js:55 Uncaught TypeError: Assignment to constant variable.
 // const myBoolean = false; // Uncaught SyntaxError: Identifier 'myBoolean' has already been declared

 /**
  * CHALLENGE 2:
  * 
  * Declare variable "myObject" and assign value {}.
  * Print this variable to the console
  * NOTE - variable "myObject will NOT be reassigned in the future."
  */

 // const myObject = {};
 // console.log(myObject);
 // myObject = {}; //index.js:68 Uncaught TypeError: Assignment to constant variable.

  /**
  * CHALLENGE 3:
  * 
  * Declare "x" and assign value 10 to it.
  * Declare "y" and assign value true to it.
  * Declare "myObject" and assign object with two name-value pairs.
  * Declare "anotherObject", later assign value to it - object with three name-value pairs.
  */

  // var x = 10;
  // const y = true;
  // const myObject = {a: x, b: y};
  // console.log(myObject);
  /**
   * {a: 10, b: true, _proto_: Object}
   */
  // x = 20;
  // const anotherObject = {newA: x, b: true, c: myObject};
  // console.log(anotherObject);
   /**
    * {
    * newA: 20, 
    * b: true, 
    * c: {a: 10, b: true, _proto_},
    * _proto_: Object}
    */

// DYNAMIC ----------------------------------------------- 

        // PRIMITIVES
    // let myVariable;
    // console.log(myVariable); // undefined
    // myVariable = 10;
    // console.log(myVariable);  // 10
    // myVariable = true;
    // console.log(myVariable);  // true
        // OBJECTS
     // myVariable = {x: true, y: 10};
     // console.log(myVariable);  // {x: true, y: 20}

  /**
  * CHALLENGE 1:
  * 
  * Declare a new variable with any name you want.
  * Assign value null to it. Determine type of the variable after this assigment.
  * Assign number 15 to the same variable. What is the type of the variable now?
  * Reassign value false to the sanem variable. What is the final type of the variable?
  */

  let myVariable = {x: true, y: 10};
  console.log(myVariable);  // {x: true, y: 20}
  myVariable.y = 20;
  console.log(myVariable);  // {x: true, y: 20}
  // // THIS WILL BREAK THE CODE
  // myVariable = null;
  myVariable.x = fasle; // Uncaught ReferenceError: fasle is not defined

  var miVariable = null;
  //console.log(typeof(miVariable));
  var miVariable = 15;
  //console.log(typeof(miVariable));
  var miVariable = false;
  //console.log(typeof(miVariable));