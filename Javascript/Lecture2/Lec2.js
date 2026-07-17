//Operators and Conditional Statements
console.log("Hello, World!");
// This is a simple JavaScript program that prints "Hello, World!" to the console.

//Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + (a ** b));
console.log("Pre Increment: " + (++a));
console.log("Post Increment: " + (a++));
console.log("Pre Decrement: " + (--b));
console.log("Post Decrement: " + (b--));

//Assignment Operators
let c = 20;
console.log("Assignment: " + (c = 30));
c += 10; // c = c + 10
console.log("Addition Assignment: " + c);
c -= 5; // c = c - 5
console.log("Subtraction Assignment: " + c);
c *= 2; // c = c * 2
console.log("Multiplication Assignment: " + c);
c /= 4; // c = c / 4
console.log("Division Assignment: " + c);
c %= 3; // c = c % 3
console.log("Modulus Assignment: " + c);
c **= 2; // c = c ** 2
console.log("Exponentiation Assignment: " + c); 

//Comparison Operators
let x = 10;
let y = 20;
console.log("Equal to: " + (x == y));
console.log("Not equal to: " + (x != y));
console.log("Strict equal to: " + (x === y));
console.log("Strict not equal to: " + (x !== y));
console.log("Greater than: " + (x > y));
console.log("Less than: " + (x < y));
console.log("Greater than or equal to: " + (x >= y));
console.log("Less than or equal to: " + (x <= y));

//Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote: " + canVote);

//Logical Operators
let isAdult = true;
let hasVoterID = false;
console.log("Can vote (AND): " + (isAdult && hasVoterID));
console.log("Can vote (OR): " + (isAdult || hasVoterID));
console.log("Can vote (NOT): " + (!isAdult));

//Conditional Statements
if (age >= 18) {
    console.log("You are eligible to vote.");
}   
else {
    console.log("You are not eligible to vote.");
}

