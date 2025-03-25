//*data-types in js
//!what are the different data-types in javascript?
//!What is the difference between primitive and non-primitive (reference) data types?
//?In javascript, data types are categorized into two main types:-
//?Primitive data-types:- are immutable (cannot be changed) and are stored directly in memory.There are 7 primitive data-types:-numbers,string, boolean, undefined, null, symbol, BigInt.
////eg:-
// let num = 42;       // Number
// let str = "Hello";  // String
// let isJSFun = true; // Boolean
// let notDefined;     // Undefined
// let emptyValue = null; // Null
// let uniqueID = Symbol("id"); // Symbol
// let bigNum = 9007199254740991n; // BigInt
//?Non-primitive (reference) data-types:- are mutable (can be changed) and store a reference to the actual value.These are object, array, function, data, regExp.
////for eg:-
// let person = { name: "Alice", age: 25 }; // Object
// let numbers = [1, 2, 3, 4, 5]; // Array
// function greet() { console.log("Hello!"); } // Function
// let today = new Date(); // Date object
// let regex = /hello/i; // Regular Expression
//!How do you check the data type of a value in JavaScript?
//?The typeof operator returns the type of a variable as a string.
////EG:-
// console.log(typeof 42);          // "number"
// console.log(typeof "Hello");     // "string"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"
// console.log(typeof null);        // ❌ "object" (JavaScript bug)
// console.log(typeof Symbol("id"));// "symbol"
// console.log(typeof 123n);        // "bigint"
// ////for functions
// function greet() {}
// console.log(typeof greet); // "function"
// ////for objects and array
// console.log(typeof { name: "Alice" }); // "object"
// console.log(typeof [1, 2, 3]); // "object" (Arrays are objects)
//?when it comes to check if a value is an array The typeof operator cannot differentiate between objects and arrays. so we  Use Array.isArray() for arrays.
// let arr = [1, 2, 3];
// console.log(Array.isArray(arr)); // true

// let obj = { name: "Alice" };
// console.log(Array.isArray(obj)); // false
//!What is the difference between null and undefined?
//?Both null and undefined represent absence of value in javascript but they are different in meaning and usage.
//?Null=It is an intentional absence of value,it must be assigned manually to indicate "no value". while undefined means a variable  is declared but not assigned any value.
////eg:-of undefined
// let x;
// console.log(x);        // undefined
// console.log(typeof x); // "undefined"
 //// eg of null
// let y = null;
// console.log(y);        // null
// console.log(typeof y); // "object" (JavaScript bug)
//!What is the difference between typeof null and typeof undefined?