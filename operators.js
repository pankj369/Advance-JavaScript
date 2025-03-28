//!Operators in JavaScript
//?Operators are special symbol that perform operations on variables.THey allow us to manipulate data, perform calculations, and make decisions in our code.
//!types of operators in js
//?1.Arithmetic Operators-it is used to perform mathematical calculation on numeric values.
//like +,-,*,/,%,**
//?2.Assignment Operators-it is used to assign values to variables.
//like =,!=,!==,+=,-=,/=,*=,%=
//?3.Comparison Operators-it is used to compare values and return a Boolean result (true or false).
//like ==,!=,===,!==,>,<,>=,<=  
//?4.Logical Operators-it is used to combine conditional statements.
//like &&,||,!  
//?5.Bitwise Operators-it is used to perform operations on binary numbers.
//like &,|,^,~,<<,>>  
//?Ternary operator-it is used to assign a value to a variable based on a condition.
//condtion ? value1 : value2
// *special operators like
//?6.String Operators-it is used to concatenate strings.
//like +=,+=
//?7.typeof operator-it is used to check the data type of a variable.
//typeof variable 

const { constants } = require("crypto");

//?8.instanceof operator-it is used to check if an object is an instance of a class
7//like object instanceof class
//?9.delete operator-it is used to delete a property from an object
//?10.in operator-it is used to check if a property exists in an object
//?11.new operator-it is used to create a new object
//!What is the difference btwn unary, binary, and ternary operators? 
//?Unary operators are operators that work with a single operand.
// Example: let x = 10; console.log(-x); // -10
// ? Binary operators are operators that work with two operands.
// let sum=5+10;
// console.log(sum)
// ? Ternary operators are operators that work with three operands. 
// let result = (5 > 3) ? "Yes" : "No";
// console.log(result);
// !What is an operand in JavaScript?
//?Operand are the values on which an operator performs an operation for eg 5+10 here 5 and 10 are operands.
//!What is arithmetic operator in js?
// ?Arithmetic operators are used to perform mathematical calculations:for examples:- Addition (+),Subtraction (-),Multiplication (*),Division (/),Modulus (% - Remainder),Exponentiation (** - Power),Increment (++ - Increases by 1),Decrement (-- - Decreases by 1)
//!What is the difference btwn /and % operators?
//? / (division) returns the quotient of division: 10 / 3 → 3.3333 
// console.log(10 / 3); // 3.3333
//? % (modulus) returns the remainder: 10 % 3 → 1
// console.log(10 % 3); // 1
// !What happens when you divide a number by 0 in JavaScript? 
//?when we divide a postive number by 0 it returns infinity. 
// console.log(10 / 0); // Infinity
// ?when we divide a negative number by 0 it returns -infinity.
// console.log(-10 / 0); // -Infinity
// ?when we divide 0 by 0 it returns NaN (Not a Number)
// console.log(0 / 0); // NaN
//! What is the ** operator in JavaScript? 
// ?The exponentiation operator ** is used to raise a number to a given power.
// console.log(2 ** 3); // 8
//*this operator works similary to Math.pow(base, exponent)
// console.log(Math.pow(2,3));
//!What is the difference between pre-increment (++x) and post-increment (x++)? 
//! What is the output of: 
// let a = 5; 
// console.log(a++); //returns the value before increment first, output:5
// console.log(a);  //return the value after increment, output:6
// console.log(++a); //return the value after increment first, output:7
// ?here in post-increment first returns the current value and then increase by +1 
//?while in pre increment-first increased the value by +1 and then returns the value.
//! What is the result of console.log("10" - 5); and why?   
//?here js converts string "10" tp number and performs subtraction. this is beacuse - operator forces numeric conversion when one operand is a string.
// console.log("10" - 5); // 5
// console.log(10 - 5); // 5
//! How does JavaScript handle NaN in arithmetic operations? 
//?Any arithmetic operation with NaN returns NaN always.It stands for "Not a Number"
// console.log(NaN+5);
//! What happens when you add two NaN values together? 
// ? It returns NaN beacuse any arithmetic operation involving NaN always returns NaN.
// ! What are assignment operators in JavaScript? 
//?assignement operator are the operators that assigns values to the variables. for examples :- =,!=,!==,==,+=,-=,/=,*=,%=  
//! What is the difference between = and == in JavaScript? 
// ?The = operator is used to assign a value to a variable, while the == operator is used to compare two values for equality.
// for example
// let x = 5;
// console.log(x == 5); // true
// console.log(x = 5); // 5
//! How does += work in JavaScript? 
// ?The += operator is used to add a value to a variable and assigns the result to the variable.
// for example
// let x = 5;
// x += 5; //equivalent to x=x+5
// console.log(x);
//! What happens when you use += with a string? 
// ?If any one of the operands in an operation is string, the other operand will be converted to a string and the result will be a string.so,+= performs string concatenation instead of addition.
// for example
// console.log("10" +3);
// !What is the result of the following code? 
// let x = "10"; 
// x += 5; 
// console.log(x); 
//?here since x is a string, += performs string concatenation instead of addition.
//! What is the difference between == and ===? 
// ?The == operator performs type coercion,it compares the values of two operands but after tyope coercion while the === operator does not perform type coercion. it compares the values and the types of two operands.
//! What is the difference between != and !==? 
// ? != checks if values are not equal after type conversion while !== checks if values and types are not equal
// example
// console.log(5!="5");//false because type conversion makes them equal
// console.log(5!=="5");//true beacuse of different data types and strict equality checks both
// !What will be the output of: 
// console.log(0 == false); //output true, beacuse 0 is falsy values, so == treates them as equal
// console.log(0 === false); //false as === checks both data-types and number
// console.log("" == false); //emtpy string is also falsy so == teats them equally
// console.log("" === false);//strict comparison, string !== boolean
// !Why does null == undefined return true but null === undefined return false? 
// ? null==undefined => returns true beacuse both are falsy and considered equal in loose equality
//?null===undefined=> returns false beacuse strict equality checks types and they are different
// !What is the output of "5" > 3 and why? 
// ?it returns true  because "5" (string ) is converted to number 5, and 5>3 is true.
//! What happens when you compare a number and a string using > or <? 
// ?In JavaScript when we compare a number and a string using > and < , it converts the string to a number if possible. and if conversion fails, it results in false. for example
// console.log("10" > 5); // true (string "10" converted to number 10)
// console.log("abc" > 5); // false (string can't be converted)
// ================================================================================================
//* Advanced Questions 

//! How does JavaScript compare objects using == or ===? 
//?In JavaScript objects are compared by reference not by value.
//?The == and === operators check whether two objects refer to the same location in memory, not whether they have the same content
//example
// let obj1 = { a: 1 };
// let obj2 = { a: 1 };

// console.log(obj1 == obj2);  // false
// console.log(obj1 === obj2); // false
//?here even though obj1 and obj2 have identical properties, they are different objects in memory, so the comparison returns false.
// !What is the output of {} == {} and why? 
// console.log({}=={});
// console.log({}==={});
//?In JavaScript, Each {} creates a new object in memory, so they are different objects and comapring them results in false.
// !How does JavaScript compare arrays using == or ===? 
// ?Arrays, like objects, are reference types.Two arrays are equal only if they refer to the same memory location.
// let arr1=[1,2,3];
// let arr2=[1,2,3];
// console.log(arr1==arr2);
// console.log(arr1===arr2);
// let arr3 = arr1;  // Both point to the same reference
// console.log(arr1 == arr3);  // true
// console.log(arr1 === arr3); // true
//?Since arr1 and arr2 are seperated arrays, == and === return false. However, when arr3 is assigned arr1, both reference the same array, so true is returned.

// !What are logical operators in JavaScript? 
//?This operator is use to perform operations on boolean values.There are three types of logical operators are:- &&, ||, !.
//! What is short-circuiting in logical operators? 
//? Short circuiting means that evaluation stops as soon as the result is determined.for example
// console.log(true || alert("This will not run"));  // true, alert never executes
// console.log(false && alert("This will not run")); // false, alert never executes
//! What is the difference between && and ||?
//! What is the result of: 
// console.log(true || false); //true
// console.log(false || "hello");//"hello"
// console.log(false && "hello"); //false
// console.log("hi" && "bye"); //"bye" (last truthy value)
//! What is the difference between !!x and Boolean(x)? 
//?here !!x and Boolean(x) both convert a value into a boolean.!!x is a shorthand for Boolean(x).
// console.log(!!"hello");
// console.log(Boolean(""))
//! Why does console.log(0 || "hello") return "hello"? 
// console.log(0||"hello")
//?here, 0 is a falsy value so || operator moves to "hello", which is truthy.
//! What is the output of console.log(null || undefined || 5) and why? 
// console.log(null||undefined||5);
// ?here null and undefined are falsy value so it returns 5 as it is truthy value
//! What is the output of console.log(5 && "hello") and why? 
// console.log(5&&"hello");
//! What is the output of console.log("" && 10)? 
// console.log(""&&10);
// ? here "" is falsy, so it is returned immediately.
//! What are bitwise operators in JavaScript? 
// ?Bitwise operators are used to perform operations on binary values.They perform operations at bit level.
//! What is the difference between & and &&? 
// ?& is a bitwise AND operator it works on individual bits.
// for example
// console.log(1 & 1); // 1
// ? while && is a logical AND operator. and works with boolean logic.
// for example
// console.log(1 && 1); // 1
// console.log(true&& false);
//! How does the bitwise NOT ~ operator work? 
// ?It inverts all bits and adds 1 to the result.
// console.log(~5);
//?it returns -6 because 5 is 0101 in binary and ~5 is 1010 in binary
//! What is the output of console.log(~5) and why? 
//?it returns -6 because 5 is 0101 in binary and ~5 is 1010 in binary
//! How does << (left shift) and >> (right shift) work? 

//! What is the difference between >> and >>>?

//! What is the result of console.log(5 & 3)? 

//! What is the ternary (? :) operator in JavaScript? 
//?The ternary operator is a conditional operator that takes three operands: a condition, a value if the condition is true, and a value if the condition is false.It is a shorthand for if-else statements.
// let age = 12;
// let result =age>=18 ? "Adult" : "kid";
//// console.log(age>=18 ? "Adult" : "kid");
// console.log(result);
//! How does it work with multiple conditions? 
// let result = (5 > 3) ? "Yes" : "No"; 
// console.log(result); 

// console.log(null ? "Hello" : "Bye"); 
// console.log(0 ? "True" : "False");
//! How can you replace an if-else statement with a ternary operator? 
// let age = 12;
// if (age >= 18) {
//   console.log("adult");
// } else {
//   console.log("kid");
// } 
// //Ternary operator
// let result = age >= 18 ? "adult" : "kid";
// console.log(result);
//! What does the typeof operator do?
// ?typeof operator returns the type of the variable. It can be used to check the type of a variable.
// console.log(typeof 5); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof null); // "object"
//! What is the output of typeof NaN and why? 
// console.log(typeof NaN); // "number"
//?NaN is a special value that represents "Not a Number". It is a numeric value that is not a valid number. It is often used in JavaScript to represent an error condition. It is a number, so typeof returns "number". 
// !How does instanceof work? 
// ?Instanceof operator is used to check if an object is an instance of a class. It returns true if the object is an instance of the class, and false otherwise.
// console.log("hello" instanceof String);// false because "hello" is not an instance of String, it is a primitive data type
// console.log(5 instanceof Number);// false because 5 is not an instance of Number, it is a primitive data type
// console.log(true instanceof Boolean);//false 
// console.log([] instanceof Array);//true
// console.log({} instanceof Object);//true
//!What is the difference between typeof and instanceof? 
//? typeof is an operator used to check the data type of a variable. while instanceof is also an operator but used to check object prototype inheritance.
//! What happens when you use the delete operator on an object property? 
//?when we use delete operator it will delete the items from an object.
//  for example
// let obj={ name: "Pankaj", age: 30};
// delete obj.age;
// console.log(obj); 
//! What does the void operator do? 
//?It returns undefined no matter what.
// console.log(void 0);
// console.log(void "hello");
//! What is the purpose of the in operator? 
//?It checks if a property exists in an object.
let obj = { name: "John", age: 30 }; 
console.log('name' in obj);
console.log('salary' in obj);
// !What is the result of: 
// let obj = { name: "John", age: 30 }; 
// console.log("name" in obj); 
// console.log("salary" in obj); 
// console.log("5" + 2); 
// console.log("5" - 2); 
// console.log(5 + true); 
// console.log(5 - true); 
// console.log(5 + null); 
// console.log(5 + undefined); 

//! Why does true + true return 2? 

// !How does JavaScript handle "" + 1 + 1 and 1 + 1 + ""? 

// !How does operator precedence work in JavaScript? 
