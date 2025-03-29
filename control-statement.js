// 1️⃣ Basics of Control Statements
// ✅ Covers: if, if-else, else-if, switch, break, continue, return*/

// Basic Questions
//!What are control statements in JavaScript? Why are they used?
//?Control statements in javascript are used to control the flow of execution based on conditions and loops. THey are help in decision-making and repetitive tasks.
//!What is the difference between conditional statements and looping statements?
//?Conditional statements are used to execute a block of code based on a condition (like:- if, if-else, switch). Looping statements are used to execute a block of code multiple times.(like:-for, while, do, for-in, for-of)
//!What are the different types of control statements in JavaScript?
//?1.Conditional statement:- if, if-else, else-if, switch
//?2.Loop statement:- for, while, do-while, for-in, for-of  
//?3Jump statements:- break, continue, return
//!How does an if statement work? Provide an example.
// let age= 18;
// if(age>=18){
// console.log("You can drive");
// };
//!How does an if-else statement work? Provide an example.
// let age1=43;
// if(age1>=18){
// console.log("You can drive");
// }else{
//   console.log("You can not drive");
// }
//!What is an else-if ladder? When should we use it?
//?The else-if ladder is used when there are multiple conditions to check
// let age2=14;
// if(age2>=18){
// console.log("you can drive")
// }else if(age2<=70 && age2>=18){
// console.log("you can drive")
// }else{
//   console.log("you should use a bicycle");
// }

// !What happens if there is no else in an if-else statement?
//?If there is no else in an if-else statement, the code will not execute antyhing when the if condition fails.
//!Can we write an if statement without curly braces {}?
//?Yes, we can write an if statement wihtout using curly braces {}.
// if (10>9) console.log("True");
//!What is a nested if statement? Give an example.
//?A nested if statement is an if statement inside another if statement.
// for example
// let age3=54;
// if(age3>=18){
//   if(age3<=70){
//     console.log("You can drive");
//   }
// }
//ANOTHER EXAMPLE
// let num=10;
// if(num>=10){
//   if(num<=20){
//     console.log('num is between 10 and 20');
//   }
// }
//! What will be the output of:
// let num = 10;
// if (num > 5) 
//     console.log("Greater than 5");
// else 
//     console.log("Less than 5");

// 2️⃣ if, else if, and else – Deep Dive
// ✅ Covers: Nested if, shorthand if, ternary operator
// Intermediate Questions
//!What is the difference between if, if-else, and else-if statements?
//?In if statement, we can execute a block of code only when a condition is true.
//?In if-else statement, we can execute a block of code when a condition is true and another block of code when the condition is false.
//?In else-if statement, we can check multiple conditions and execute a block of code when any one of the conditions is true.
// !How does a nested if statement work?

// !Can we write an if-else statement in one line? (Ternary Operator)
//?yes  , we can write an if-else statement in one line using the ternary operator.
// let age=1;
// let result= age>=18 ? "You can drive" : "You can not drive";
// console.log(result);
// !What is the output of:
// let x = 10;
// if (x < 10) console.log("Less than 10");
// if (x > 10) console.log("Greater than 10");
// else console.log("Equal to 10");
// !Explain the ternary operator with an example.
//?The ternary operator is a shorthand for if-else statement. It is used to execute a block of code when a condition is true and another block of code when the condition is false.
// let age=12;
// let result= age>=18 ? "You can drive" : "You can not drive"; // if age is greater than or equal to 18 then you can drive otherwise you can not drive
// console.log(result);
//! What is the difference between ternary operator and if-else?
//?The ternary operator is a shorthand for if-else statement. It is used to execute a block of code when a condition is true and another block of code when the condition is false.
//?The if-else statement is used to execute a block of code when a condition is true and another block of code when the condition is false. 
// !Can we replace every if-else with a ternary operator?Is it good practice?
//?Yes, we can replace every if-else statement with a ternary operator. It is a good practice because it is more readable and easy to understand.
//! What will be the output of:
// let a = 5;
// let b = (a > 0) ? "Positive" : "Negative";
// console.log(b);
// 3️⃣ switch Statement – Deep Dive
// ✅ Covers: switch-case, default, break
// Intermediate Questions
//! What is a switch statement, and when should we use it?
//?A switch statement is a control statement that allows us to execute different blocks of code based on different cases.When we have multiple values to campare we use switch statement.
//eg:
// let day1 = "Monday";
// switch (day1) {  
//   case "Monday": console.log("Monday");
//   case "Tuesday": console.log("Tuesday"); 
//   case "Wednesday": console.log("Wednesday");
//   case "Thursday": console.log("Thursday");
//   case "Friday": console.log("Friday");
//   case "Saturday": console.log("Saturday");
//   case "Sunday": console.log("Sunday");
//   default: console.log("Invalid day");
// }
// !How does a switch-case statement work in JavaScript?
//?A switch-case statement works by comparing the value of a variable with the values in the case statements.
//?If the value matches, the code inside the corresponding case block is executed. If not, the code inside the default block is executed. If no case matches and no default is provided, the switch statement does nothing.
// !What is the purpose of the break statement in a switch?
//?The break statement is used to exit a switch statement and move on to the next statement.
// !What happens if we omit the break statement inside a switch?
// ?if we omit the break statement inside a switch, the code inside the next case block will be executed.
//! What is the default case in a switch?
// ?The default case is a catch-all case that is executed when none of the case statements match the value of the variable.
//! What will be the output of:
// let day = 2;
// switch (day) {
//     case 1: console.log("Monday");
//     case 2: console.log("Tuesday");
//     case 3: console.log("Wednesday");
//     default: console.log("Invalid Day");
// }
//! How is a switch different from an if-else statement?
// ?A switch statement is a more compact way to check multiple conditions at once. It is used when we have a large number of conditions to check. while if-else statement is used when we have a small number of conditions to check.
//!Can a switch statement check ranges like if-else?
// ?No, a switch statement cannot check ranges like if-else.it only checks exact values.
//! Can we use a switch statement for strings? Give an example.
//?Yes, we can use a switch statement for strings.
// let day = "Monday";
// switch (day) {
//   case "Monday": console.log("Monday");
//   case "Tuesday": console.log("Tuesday");
//   case "Wednesday": console.log("Wednesday");
//   default: console.log("Invalid Day");
// }
// !How do switch statements handle strict comparison (===)?
// ?Switch statements handle strict comparison (===) by comparing the value and type of the variable.
// 4️⃣ Loop Control Statements – break and continue
// ✅ Covers: Breaking loops, skipping iterations

// Advanced Questions
// !What is the difference between break and continue?
//?Break statement is used to exit a loop or switch statement. Continue statement is used to skip the current iteration of a loop.
// !What happens if we use break inside a loop?
//?Break statement is used to exit a loop or switch statement.so when we use break inside a loop it will break the loop.
//!What will be the output of:
//?here i is less than 5 so it will print 0,1,2,3,4 but when i is 2 it will break the loop.
// for (let i = 0; i < 5; i++) {
//     if (i === 2) break;
//     console.log(i); //output: 0,1
// }
//! What happens if we use continue inside a loop?
//? when we use continue inside a loop it will skip the current iteration of a loop.
// !What will be the output of:
//? here i is less than 5 so it will print 0,1,2,3,4 but when i is 2 it will skip the current iteration of a loop.
// for (let i = 0; i < 5; i++) {
//     if (i === 2) continue;
//     console.log(i); //output: 0,1,3,4
// }
// !Can we use break inside a nested loop?
//?Yes, we can use break inside a nested loop.
// for example
// for (let i = 0; i <3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j === 1) break;
//         console.log(i, j);
//     }
// } 
//?here i is less than 3 so it will print 0,1,2 but when j is 1 it will break the loop.

// !Can we use continue inside a nested loop?
//?Yes, we can use continue inside a nested loop.
// for example
// for (let i = 0; i <3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j === 1) continue;
//         console.log(i, j);
//     }
// }
// ?here i is less than 3 so it will print 0,1,2 but when j is 1 it will skip the current iteration of a loop.
// !How do labeled break and continue work?
// outerLoop: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j === 1) break outerLoop;
//         console.log(i, j);
//     }
// }
//?here i is less than 3 so it will print 0,1,2 but when j is 1 it will break the loop and break the outer loop.
// !When should we use break vs. return in a loop?
//?
// 5️⃣ return Statement in JavaScript
// ✅ Covers: Exiting functions, differences from break

// Expert Questions
// !What is a return statement, and where is it used?
//?return statement is used to exit a function and return a value.It is used to return a value from a function.
// !What happens when we use return inside a function?
//?when we use return inside a function, it will exit the function and return a value.
// !What is the difference between return and break?
//?return is used to exit a function while break is used to exit a loop.
//?if we use return inside a loop it will exit the loop and return a value.
// !What will be the output of:
// function test() {
//     console.log("Before return"); //this will be the output
//     return;
//     console.log("After return");
// }
// test();
//! Can we use return inside a loop? What happens?
//?Yes, we can use return inside a loop. so when we use return inside a loop it will exit the loop and return a value.
//for example
// function test() {
//     for (let i = 0; i < 3; i++) {
//         if (i === 1) return;
//         console.log(i);
//         }
//         console.log("After loop");
//         }
//         test();
// !What will be the output of:
// function checkNumber(num) {
//     if (num > 0) return "Positive";
//     else if (num < 0) return "Negative";
//     else return "Zero";
// }
// console.log(checkNumber(5));
// !What happens if a function has no return statement?
// ?if a function has no return statement, it will return undefined.
// 6️⃣ Advanced Control Statement Scenarios
// ✅ Covers: Error handling, edge cases

// Expert Questions
// !What happens if we accidentally write an assignment (=) instead of comparison (==) in an if statement?
//?if we accidentally write an assignment (=) instead of comparison (==) in an if statement, it will be treated as a comparison and it will always return true.

// !What will be the output of:
// let x = 0;
// if (x = 10) {
//     console.log("True");
// } else {
//     console.log("False");
// }
//! What is short-circuiting in JavaScript control statements?
//?Short-circuiting is a feature in JavaScript that allows us to evaluate multiple conditions in a single if statement.It is used to avoid evaluating unnecessary conditions.It is used when we have a large number of conditions to check.
// for example
// if (a && b && c) {
//     console.log("All conditions are true");
//     } else {
//         console.log("At least one condition is false");
//         }
// !What is the output of:
console.log(0 || "Hello");
console.log(1 && "World");
//? this is beacuse 0 is falsy so it will return "Hello" and "World" is truthy so it will return "World".
// !How can we avoid deeply nested if-else statements?
//? we can use guard clauses to avoid deeply nested if-else statements.
//! What are guard clauses, and how do they improve if-else code?
//?Guard clauses are used to avoid deeply nested if-else statements.it is used to check if a condition is true or false. it improve the if-else code by making it easier to read and understand.
//example
// if (a > 0) {
//     if (b > 0) {
//         if (c > 0) {
//             console.log("All conditions are true");
//             }
//             }
//             }
//             // can be written as
//             if (a > 0 && b > 0 && c > 0) {
//                 console.log("All conditions are true");
//                 }
                
// !How does try-catch work as a control statement in JavaScript?
//?try-catch is a control statement in JavaScript that allows us to handle errors in our code.it is used to catch errors that may occur in our code.    
// example
// try {
//     // code that may throw an error
// } catch (error) {
//     // code to handle the error
// }