//Loops and Strings
for(i=0;i<5;i++){
    console.log("Hello World");
}
console.log("Loop has ended");

//Calculating the sum of first n natural numbers
let n = 100;
let sum = 0;
for(i=1;i<=n;i++){
    sum += i;
}
console.log("Sum of first " + n + " natural numbers is: " + sum);

//Print i
for(let count=1;count<=5;count++){
    console.log("i = " + count);
}
let count = 1;
while(count<=5){
    console.log("i = " + count);
    count++;
}
console.log(count);

//Infinite loop
// for(let i=1;i>0;i++){
//     console.log("i = " + i);
// }

//While loop
let found = 0;
while(found <5){
    console.log("i = " + found);
    found++;
}
let a = 19;
while(a<=10){
    console.log("a = " + a);
    a++;
}

//do while loop
let b = 19; 
do{
    console.log("b = " + b);
    b++;
}while(b<=10);

//for of loop
let fruits = ["apple", "banana", "orange"];
for(let fruit of fruits){
    console.log(fruit);
}

let str = "Hello World";
for(let char of str){
    console.log(char);
}

let str1 = "Hello World";
let size = 0;
for(let char of str1){
    size++;
}
console.log("Size of the string is: " + size);

let students = {
    "name": "John",
    "age": 20,
    "grade": "A"
}

for(let key in students){
    console.log(key + ": " + students[key]);
}

//Print even numbers from 1 to 100
let evenNumbers = [];
for(let i=1;i<=100;i++){
    if(i%2==0){ 
        // console.log(i);
        evenNumbers.push(i);
    }
}
console.log("Even numbers from 1 to 100 are: " + evenNumbers);

//Create a game where the user has to guess a number between 1 and 10. The user has 3 attempts to guess the number. If the user guesses the number correctly, print "You guessed it!". If the user fails to guess the number in 3 attempts, print "Sorry, you failed to guess the number. The correct number was: " + randomNumber.
// let randomNumber = 27;
// let attempts = 3;
// for(let i=1;i<=attempts;i++){
//     let userGuess = prompt("Guess a number between 1 and 100. Attempt " + i + " of " + attempts);        
//     if(userGuess == randomNumber){
//         console.log("You guessed it!");
//         break;
//     }
//     else{
//         console.log("Wrong guess. Try again.");
//     }
//     if(i==attempts){
//         console.log("Sorry, you failed to guess the number. The correct number was: " + randomNumber);
//     }
// }

//Strings
let str2 = "Hello World";
console.log(str2.length);
console.log(str2[0]);
console.log(str2[6]);
console.log(typeof str2);

//Template literals
let name = "John";
let age = 20;
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

let obj = {
    name: "John",
    age: 20,
    grade: "A"
}
console.log(`Name: ${obj.name}, Age: ${obj.age}, Grade: ${obj.grade}`);
console.log(obj.age);

let speacialString = `Hello\tWorld ${1+2+3}`;
console.log(speacialString);
console.log(speacialString.length);

//String methods
let str3 = "   Hello World   ";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.trim());
let str4 = "Hello";
let str5 = "World123";
console.log(str4.concat(" ", str5));
console.log(str4 + " " + str5);
console.log(str5.slice(0, 5));

console.log(str5.replace("123", "456"));

console.log(str5.charAt(0));

let fullname = prompt("Enter your name: ");
let username = "@" + fullname.toLowerCase() + fullname.length;
console.log("username: " + username);