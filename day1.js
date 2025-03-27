//! use for questions 
//? use for answes
//*  use for taking question from the questions
// use for comments
//*=============================================

//*Basic level Questions

// ! what is javascript and about the history of javascript?
// ! what is the use of javascript in the web development?
// ! what is varibales and  how do we declare varibles in javascript?
//! what is the difference btwn var, let and const in javascript?
// ! why is let preferred over var?
//? var was the traditional way to declare variables.; 'let' and 'const' were introduced in ECMAScript 2015(ES6) to provide more features and better scoping .  Here are some reasons why 'let' is preferred over 'var'. 
// ? 1.Block Scope==> "let" has block scope, which means it is only accessible within the block where it is declared in. THis is in constrast to "var" , which has function scope, making it accessible thoughtout ht entire function.
//example:- 
// if (true){
//   var x=10; // here x is accessible outside the block;
//   let y =20;  //here y is not accessible outside the block;
// }
// console.log(x); //and we get output 10;
// console.log(y);  //and we get ReferenceError: y is not defined;
//?2. NO Hoisting==> "let" and "const" are not "hoisted" to the top of their scope, unlike "var". THis means that "let" and "const " variables are not initialised until they are actually declared.
// examples:-
// console.log(a); // and we get output undefined;
// var a = 10; // here x is declared and assigned a value 
// console.log(a); //here we get the output 10;
// console.log(b); // here we get ReferenceError: cannot access 'b' before initialization;
// let b=20; 
// console.log(b); // here we get the output 20 after initializing the value of b=20;
//?3. Re-declaration==> "let" and "const" do not allow re-declaration of variables in the same scope, whereas "var" does.
// example:-
// var c=2;
// console.log(c); // here we get the output 2;
// var c=3; //no error after re-decalaration
// console.log(c) // here we get the output 3;

// let d= 4;
// console.log(d); // here we get the output 4;
// let d=4; //here we get SyntaxError: Identifier 'd' has already been declared;
// ? 4. Fixes loop issues (avoids unexpected behaviour in setTimeout):- "let"  creates a new variables in each iteration, and preventing bugs. while "var" doesn't create a new variable for each loop iteration, and causing unexpected behaviour. 
//example  using var variable for loop :-
//  for (var i=1; i<=5; i++){
//   setTimeout(()=>{
//     console.log(i); // here we get the output 6 five times
//   },1000);
//  }
//  // example using let variable for loop :-
//  for (let i=1; i<=5; i++){
//   setTimeout(()=>{
//     console.log(i); // here we get the output 1,2,3,4,
//  },1000);
// };

// !What happens when we declare a variable without using  var, let and const?
//? In JavaScript when we declare a variable without using "var", "let" and "const", it is considered a global variable. THis is because JavaScript's default behaviour is to attach variables to the global object, which is the "window" object in a browser enviroment or the "global" object in a Node.js enviroment.
// // example:-
// // Declaring a variable without var, let, or const
// x = 10;
// console.log(x); // Output: 10
// console.log(window.x); // Output: 10 (in a browser environment)
//*=====================================================

//*Scope and HOisting
//!What is variable hoisting in JS?

//? Variable hoisting in js is a mechanism where variables declared with "var" are moved to the top of their scope before execution, regardless where they are actually declared.THis means that variables are "hoisted" to the top of their scope, even if they are declared after they are used. In simple terms : we can use variables before declaring them in javascript due to hoisting.
//*How does variable hoisting work?
//? Here's a step-by-step explanation of how variable hoisting works:
// ?Hoisiting works in two pahse during javascript execution:- 1.Memory creation phase(compilation phase) 2.Exection phase(code execution) 
//? Memory creation phase==> Before the code runs, JavaScript scan the code and reserves memory for variables and functions. (.)"var" varibales are hosted with undefined value while "let" and "const" variables are hoisted but remain in the temporal dead zone (TDZ). (.)Functions declarations are fully hoisted (moved to the top).like greet()
// console.log(x); // undefined
// var x = 10; //hoisted to the top (declared) and initialised with undefined
// console.log(x); // 10
//what happens internally
//?Execution phase = Js runs the code line by line. variables assigned later get their values. and if we try to access "let" or "const" before declaration, it throws a referenceError dur to the TDZ.
//*Hoisting with function:- Functions declared are fully hoisted , meaning you can call them before they are declared.
// example:-
// greet(); // ✅ Output: Hello, John!

// function greet() {
//     console.log("Hello, John!");
// }//internally js moves the funcitons to the top
//* BUT function expression (const/let function) are not hoisted
// hello(); //referenceError: cannot access 'hello' before initialisation
// const hello=function(){
//   console.log("Hello, Pankj!");
// };

//!What is the difference between global scope, function scope, and block scope?
//?Scope in JavaScript refers to the context in which variables are declared and accessed. and IN JAvascript scope determines where a variable can be access and used in our code.; It defines the visibility and lifetime of variables. When a variable is declared, it is bound to a specific scope, and its accessibility is determined by that scope.
//?Here's a breakdown of the three types of scope in JavaScript:
//?Global scope==>A variable that declared outside any function or block is called global scope.;it can be accessed anywhere in the program.
// //example:- 
// let name="pnkj"; //global variable
// function greet(){
//   console.log("hello " + name); //can access "name"
// }
// greet(); //output: hello pnkj
// console.log(name);//accessible globally
// ?Function scope:- A variable that declared inside a function is called function scope and is only accessible within that function where they are declared.it cannot be access outside the function. It exists only while the function runs and deleted when the function finishes executing.
// //eg:-
// function greet(){
//   let name="pnkj"; //function scope variable
//   console.log("hello " + name); //accessible inside the function
// }
// greet();
// console.log(name);// here we get referenceError: name is not defined
//?Block-scope==> A variable that declared with "let" and "const" inside a block({}) like if,for,while are called block scope. THey cannot be accessed outside the block.only accessible within the block where they are declared.it exist only within {} and deleted when the block finishes executing. Note:- var ignores the block scope
// //eg:-
// {
//   let a=10;
//   console.log(a);
// }
// console.log(a)//got referenceError a is not defined

//!How does var behave differently inside and outside a function?
//?when "var" is declared outside a funtion, it belongs to the global scope and can be accessed anywhere in the code.
// //eg:-
// var name="pnkj";
// function greet(){
//   console.log("Hello "+name);
// }
// greet();
// console.log(name);
//?when "var" is declared inside a function, it belongs to the function scope and can only accessible within that function
// // eg:-
// function myFunction(){
//   var age=23; //function scope
//   console.log(age); //output: 23; Accessible inside function
// }
// myFunction();
// console.log(age);//reference error: age is not defined
//?when "var"  is declare inside a block ({}), it still ignores the block scope and becomes globally accessible
// //example:-
// if(true){
//   var city="Bihar";
//   console.log(city);//output:Bihar ,Accessible inside block
// }
// console.log(city);//output : Bihar, Accessible outside block
// //here, event though var city is declared inside a block{}, it behaves as a global variable
//?Hoisting behaviour of var==> Var follows hoisting, but it default value becomes undefined.THis means you can use var before declaring it, but it will have an undefined value.
// //eg:-
// console.log(name); //output: undefined
// var name="pnkj";
// console.log(name); //output: pnkj
// here du to hoisting, javascript moves var name; to the top before execution; but since no value was assigned initially,the first console.log(name); prints undefined

//!why do let and const prevent hoisting issues?
//?"let" and "const" are hoisted, but they behave differently from var. Unlike var, they do not get assigned "undefine" during hoisting.Instead, they stay in the temporal dead zone(TDZ) until they are initialized.If we try to access them before declaration, JavaScript throws a ReferenceError.

//! Can we access a variable before declaring it ? what happens?
//?Yes, we can access a variable before declaring it but it depends on how the varibale is declared(var,let or const).
//let me elaborate this using variable hoisting process
//? 1. var==> if we access var before declaring it , js hoists it to the top but assigns undefined, instead of actual value. THis can lead to unexpected behaviour. for example:-
// console.log(name); //output:undefined (it means hoisted)
// var name="pnkj";
// console.log(name);//output:pnkj
//here what exactly happens:- js hoists var name; to the top , but it doesn't assign pnkj immediately. instead, it initializes name with undefined before execution.
//?2. let and const==> if we access "let" and "const" before declaring it, they are also hoisted but they do not get undefined. Instead ,they remain in the temporal dead zone until they are initialize. if we try to access them before declaration, JavaScript throws a ReferenceError. for example:-
// console.log(name);//ReferenceError: name is not defined
// let name="pnkj";
// console.log(name);//output:pnkj
//const example
// console.log(name);//ReferenceError: name is not defined
// const name="pnkj";
// console.log(name);//output:pnkj
//here what exactly happens:- let and const exist in the TDZ from the start of the block until they are initialized. Unlike var, they do not get undefined, preventing accidental use before declaration.

//*=================================================

//*Advaned Questions
// !Can const variables be changed?
//?The answer depends on what type of value is stored in cosnt:- 1. For Primitive values==it cannot be changed. for example:-
// const age=23;
// age=30; //we get typeerro:assignement to constant variable
//? 2.for objects and arrays(non-primitive values)==> can modify properties , but cannot reassign.In const ,only the reference (memory location) is constant, but object properties can be modified. for example:-

// const person={
//   name:"pankj",
//   age:20
// };
// person.age=25;//allowed:modifying object properties
// console.log(person.age)//output: 25;

// person={name: "ram",age:21};// not allowed:reassigning a new object , we will get typeError

//! What happens when you declare the same variable name twice using var?
//?If we declare a variable twince using var, JavaScript doest Not throw an error.Instead the second declaration overwrites the first one.
// //for example:-
// var name="ram";
// // console.log(name);
// var name="siya";
// console.log(name); //output:'siya'

// ! What happens if you try to redeclare a variable using let or const?
//?Unlike var, let and const do not allow redeclaration in the same scope. If we try to redeclare a variable using let or cosnt, Javascript throws a syntaxError.For Example:-
// let name = "siya";
// let name = "ram"; // SyntaxError: Identifier 'name' has already been declared 
//here,let must have unique names in the same scope,we can assigned it instead of redeclaration like 
// name="krishna";
//?similarly; const behaves just like let in terms of redeclaration but we can use different variables
//!here, Even though let and const cannot be redeclared in the same scope , they can be redeclaredin a different block scope;
// let color='red';
// if(true){
//   let color="blue"; //allowed different scope
//   console.log(color);//output:blue
// }
// console.log(color);//output:red;

// !Can you declare a variable without initializing it?
// ?Yes, we can declare a variable without initializing it, but the behaviour depends on whether we're using var, let or const.
//declaring without initialization using "var" is allowed for example
// var x; // Declared without initialization
// console.log(x); //  Output: undefined, here no value is assigned but js automatically sets it to undefined

//declaring without initializing using "let" is allowed also
// let y;
// console.log(y);//output:undefined, here like var, they get the value undefined if no value is assigned.

//declaring without initialization using "const" is not allowed
// const z; //here we get syntax error: missing initializer in const declaration,here const variable must be initialized at the time of declaration,since const means constant, you cannot leave it without a value

//!What is the Temporal Dead Zone (TDZ)?
//?The temporal Dead Zone is the time between when a variable is declared using let or const and when it is initialized with a value.During this period, trying to access the variable results in a referenceError. for example:-
console.log(x); //reference Error:cannot access "x" before initialization
let x = 20;
console.log(x);//output:20
//here why does this happen?==> The variable x exists but is in the Temporal Dead Zone until it is initialized (x=20).
//Accessing it before initialization throws a referenceError.
//!why doesn't var have a TDZ?
//?var is hoisted and initialized as undefined, so it doesnot enter the TDZ.