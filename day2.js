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

//? typeof null is actually a well-known Bug in Javascript,Historically, null was intended to be its own primitive type, but due to early implementation mistake in Js.It was classified as an object. Instead of throwing an error or classifying null as "null", typeof null mistakely returns "object".
// ? typeof undefined returns undefined because it represents a variable that has been declared but not assigned a value. eg:-
// let name;
// console.log(name);//ouptut:undefined
// console.log(typeof undefined); // "undefined"

// !Why does typeof null return "object"?
//?In early Js implementations, values were stored in memory using type tag system:
// ? 1.Objects were represented with the type tag 000
// ? 2.Null was mistakely assigned the same tag (000), making it return "object".
// ? THis was an accidental mistake , but since JS had already been widely adopted, fixing it would break existing code.so, the js community decided to keep it for backward compatibility.
// ? JS cannot fix this issue because changing typeof null to return "null" would break existing websites and applications.However, modern Js programmers are aware of this bug and use better null-checking methods (like === null instead of typeof).
// !How do you create a symbol in JavaScript, and why is it used?
// ?A symbol in js is a unique and immutable primitive data-type introduced in ES6. It is mainly used to create unique property keys to prevent naming conflicts in objects.
// //how to create a symbol
// const mySymbol = Symbol();
// console.log(mySymbol);
// !What is NaN in JavaScript, and how can you check if a value is NaN?
// ?1. it stands for Not a number in js. 2. It is a special value used to represent invalid or undefined mathematical operations,fails to produce a valid number. 3. It is not equal to itself(NaN===NaN) because NaN represents an undefined result, which means every nan is different. eg:-
// console.log(0 / 0); // NaN (Undefined mathematical operation)
// console.log(Math.sqrt(-1)); // NaN (Square root of a negative number)
// console.log(parseInt("Hello")); // NaN (Cannot convert "Hello" to a number)
// //console.log(parseInt("56"));
//*How to check if a value is NaN?
//?JS provides multiple way to check for NaN, but some methods are more reliable than others.
// 1. method is : Number.isNaN() = ES6  introduced this, which only returns true if the value is actually NaN and does not perform type conversion.
// console.log(Number.isNaN(123)); // false
// console.log(Number.isNaN("Hello")); // false (Unlike `isNaN`, it does not convert)
// console.log(Number.isNaN(undefined)); // false
// console.log(Number.isNaN(NaN)); // true
//?NaN is not equal to itself because NaN represents an undefined result, JavaScript treats every instance of NaN as unique.
// console.log(NaN === NaN); // false (Unique behavior in JavaScript)
// console.log(typeof NaN); // "number" (Even though it's "Not-a-Number"!)

// Best way to check for NaN
// function isReallyNaN(value) {
//   return Number.isNaN(value);
// }

// console.log(isReallyNaN(NaN)); // true
// console.log(isReallyNaN("Hello")); // false
// console.log(isReallyNaN(undefined)); // false
// console.log(isReallyNaN(123)); // false

// !What is the difference between == and === in JavaScript?
// ?In JavaScript, == (double equals) and === (triple equals) are comparison operators, but they behave differently when comparing values.
// ?The == operator compares values but ignores data types. If the values are of different types, JavaScript converts one or both values to a common type before making the comparison (type coercion).
// console.log(5 == "5");    // true  (String "5" is converted to Number 5)
// console.log(0 == false);  // true  (false is converted to 0)
// console.log(null == undefined); // true (Both are treated as similar)
// console.log(" " == 0);    // true  (Empty string converts to 0)
// ?The === operator compares both value and data type. If the types are different, it does not attempt conversion and returns false.
// console.log(5 === "5");    // false (Number ≠ String)
// console.log(0 === false);  // false (Boolean ≠ Number)
// console.log(null === undefined); // false (Different types)
// console.log(" " === 0);    // false (String ≠ Number)
//*why is === preferred over ==?
//?Using == can lead to unexpected results due to automatic type conversion. To avoid bugs and ensure type safety, always prefer === unless type conversion is explicitly needed.

// !How do you convert a string into a number in JavaScript?
// ?JavaScript provides multiple ways to convert a string ("123") into a number (123). Here are the most common methods:
//* 1. using Number()
//?Safest way to convert a string to a number. It works with integers and decimals.
// console.log(Number("123"));    // 123  (Number)
// console.log(Number("123.45")); // 123.45 (Number)
// console.log(Number("ABC"));    // NaN  (Not a Number, because "ABC" is not numeric)
// *2. using parseInt() for whole numbers.
//?extracts only the interger part of a string. ignores non-numeric characters after the number.
//console.log(parseInt("123px"));    // 123  (Ignores "px")
// console.log(parseInt("42.99"));    // 42   (Removes decimal)
// console.log(parseInt("ABC"));      // NaN  (Not a number)
//*3.using parseFloat () for decimal numbers
//?extracts floating-point(decimal) number from a string. works similary to parseInt () but keeps decimals
// console.log(parseFloat("123.45px")); // 123.45 (Ignores "px")
// console.log(parseFloat("99.99"));    // 99.99
// console.log(parseFloat("100ABC"));   // 100   (Ignores non-numeric part)
//*4.Using + (unary plus operator)
//?fastest and shortest way to convert a string into a number
// console.log(+"123");    // 123
// console.log(+"99.99");  // 99.99
// console.log(+"ABC");    // NaN (Not a Number)
//*using Math.floor(), Math,ceil(), Math.round()
//?THese methods convert stirng into numebr while rounding the value
// console.log(Math.floor("12.8"));  // 12 (Rounds down)
// console.log(Math.ceil("12.3"));   // 13 (Rounds up)
// console.log(Math.round("12.5"));  // 13 (Rounds to nearest)
// !How do you check if a variable is an array?
// ?In JavaScript, there are multiple ways to check if a variable is an array.
//*1.using Array.isArray()-best way to check if a variable is an array or not , it only returns true for arrays and false for everythings else. eg:-
// console.log(Array.isArray([1, 2, 3]));  // ✅ true
// console.log(Array.isArray("hello"));    // ❌ false
// console.log(Array.isArray({ key: "value" })); // ❌ false
// console.log(Array.isArray(null));       // ❌ false
// console.log(Array.isArray(undefined));  // ❌ false
//*2.using instanceof (less reliable)-check is an object is an instance of array., fails for array from different js enviroment (like iframes)
// console.log([1, 2, 3] instanceof Array);  // ✅ true
// console.log("hello" instanceof Array);    // ❌ false
// console.log({ key: "value" } instanceof Array); // ❌ false
//*3.object.prototype.toString.call()-advanced= this methods works even if the array comes from a different execution context (like an iframes), it retruns "[object Array]" for arrays.
// console.log(Object.prototype.toString.call([1, 2, 3]));  // ✅ "[object Array]"
// console.log(Object.prototype.toString.call("hello"));    // ❌ "[object String]"
// console.log(Object.prototype.toString.call({}));         // ❌ "[object Object]"
//!What is the difference between parseInt(), parseFloat(), and Number()?
//?These three functions are used to convert values into numbers in Js, but they work differently..
//?1.parseInt()-converts to an integer==extracts an integer(whole number) from a string.,ignores non-numberic characters after the number,does not round, just removes decimals, supports radix
// console.log(parseInt("42"));       // ✅ 42 (integer)
// console.log(parseInt("42.99"));    // ✅ 42 (removes decimal)
// console.log(parseInt("42px"));     // ✅ 42 (ignores "px")
// console.log(parseInt("abc42"));    // ❌ NaN (invalid number)
// console.log(parseInt("101", 2));   // ✅ 5 (binary "101" → decimal 5)
//*2.parseFloat-converts to a floating-point decimal numbers==works like parseInt(), but keeps decimals
// console.log(parseFloat("42.99"));   // ✅ 42.99 (keeps decimal)
// console.log(parseFloat("42px"));    // ✅ 42 (ignores "px")
// console.log(parseFloat("3.14rad")); // ✅ 3.14 (ignores "rad")
// console.log(parseFloat("abc42.5")); // ❌ NaN (invalid number
//*3.Number()-converts the entire value to a  number==converts a string, boolean, or other types directly into a number, returns NaN if the entire value is invalid, does not ignore non-numeric characters
// console.log(Number("42"));       // ✅ 42
// console.log(Number("42.99"));    // ✅ 42.99
// console.log(Number("42px"));     // ❌ NaN (invalid number)
// console.log(Number(true));       // ✅ 1 (true → 1)
// console.log(Number(false));      // ✅ 0 (false → 0)
// console.log(Number(null));       // ✅ 0 (null → 0)
// console.log(Number(""));         // ✅ 0 (empty string → 0)
// console.log(Number("abc42"));    // ❌ NaN (invalid number)
//!Why does 0.1 + 0.2 !== 0.3 in JavaScript?
// console.log(0.1+0.2!==0.3);//true
//?this is because of how floating point arithmetic works in Js
//?here, js uses the IEEE 754 floating-point standard(64-bit representation) for numbers. ; some decimal numbers cannot be represented exactly in binary.; when adding 0.1 and 0.2, the result in a small inaccuracy due to binary rounding errors.
//!What happens when you add a number and a string together?
//?In JS when we  use the + operator with a number and a string, implicit type conversion (type coercion) happens. THe number is converted into a string, and string concatenation occurs instead of addition. examples:-
// console.log(5 + "10");   // ✅ "510" (String)
// console.log("5" + 10 + 20);  // ✅ "51020"
// console.log(5 + 10 + "20"); // ✅ "1520"
//?When using -, *, /, or %, JavaScript tries to convert the string to a number instead.
// console.log("10" - 5);   // ✅ 5  (String "10" converted to Number)
// console.log("10" * 2);   // ✅ 20 (String "10" converted to Number)
// console.log("20" / 4);   // ✅ 5  (String "20" converted to Number)
// console.log("15" % 4);   // ✅ 3  (String "15" converted to Number)
//*Here, JS does not concatenate.Instead, it converts the string to a number and performs the arithmetic operation.

//*======================================================================
//!What is type coercion in javascript?
//!What is implicit vs. explicit type conversion?
//?Type coercion is the automatic conversion of "values" from one data type to another
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
// for example of implicit

//for example of explicit

// ! What happens if you use  + between a number and a string?
//?When we use  + operator btween a number and a string, + operators prefers string concatenation, when atleast one operand is a string.
//eg
// console.log("01"+12);

// ! what is "5"-2 in js, and why?
//?here - operator forces umeric conversion when one operand is a string.so when the operation is mathematical (-,*,/), Js tries to convert string to numbers.
//!what is null +5 in Javascript?
//? here null + 5 return 5.
// console.log(null+5);
// ! what is true +1?
// ? returns 2
// console.log(true+1)
//!What is undefined + 5 in JavaScript?
// console.log(undefined+5); retruns not a numbeR;
// !Why does "5" + 2 return "52" while "5" - 2 returns 3?
//?When we use "5"+2 we will get output 52 because here + operator prefers string concatenation, when atleast one operand is a string.while when we use "5"-2, it returns output as 3 beacuse - operator forces numeric conversion when one operand is a string.

//!What happens when you compare null == 0 and null >= 0?
// console.log(null==0); //returns false
// console.log(null>=0);//retruns true
//!How can you force a value to be a number in JavaScript?
//?
// !What is the output of typeof NaN?
//?it returns number
// console.log(typeof NaN)
// !What happens when you use typeof on an array?
// ?here we get object as a return.
// !How do you check if two objects are equal in JavaScript?
//?
let obj1={
  name:"pnkj",
  age:23
}
let obj2={
  name:"pankj",
  age:24
}

console.log(obj1===obj2)
