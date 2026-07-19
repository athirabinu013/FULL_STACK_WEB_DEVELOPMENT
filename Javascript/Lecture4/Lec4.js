//Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits); // Output: ["apple", "banana", "orange"]
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange
console.log(fruits[3]); // Output: undefined
console.log(fruits[2]= "grape"); // Output: grape
console.log(fruits.length); // Output: 3
console.log(typeof fruits); // Output: object
console.log(fruits); // Output: ["apple", "banana", "grape"]

let str = "Hello, World!";
console.log(str[0]= "h"); // Output: h 
console.log(str); // Output: Hello, World! (Doesn't change the original string because strings are immutable in JavaScript)

//Loops
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: apple, banana, grape
}

for(let fruit of fruits) {
    console.log(fruit); // Output: apple, banana, grape
}

console.log(fruits.join().toUpperCase()); // Output: APPLE,BANANA,GRAPE

do {
    console.log(fruits.pop()); // Output: grape, banana, apple
} while (fruits.length > 0);

let marks = [90, 80, 70, 60, 50];
while (marks.length > 0) {
    console.log(marks.pop()); // Output: 50, 60, 70, 80, 90
}
console.log(marks); // Output: []

//Practice
let marks_students = [85,97,44,37,76,60];
console.log(marks_students); // Output: [85, 97, 44, 37, 76, 60]
total_marks = 0;
for (let i = 0; i < marks_students.length; i++) {
    total_marks += marks_students[i];
}
console.log(total_marks); // Output: 399
let average_marks = total_marks / marks_students.length;
console.log(average_marks); // Output: 66.5

let rate = [250,645,300,900,50];
let index = 0;
for(let value of rate) {
    console.log(`The value at index ${index} is ${value}`);
    index++;
    let offer = value * 0.1;
    value -= offer;
    console.log(`The discounted value at index ${index - 1} is ${value}`);
}

//Array Methods

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(numbers.push(6)); // Output: 6 (new length of the array)
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

console.log(numbers.pop()); // Output: 6 (removed element)
console.log(numbers); // Output: [1, 2, 3, 4, 5]

console.log(numbers.toString()); // Output: "1,2,3,4,5"
console.log(numbers.join(" - ")); // Output: "1 - 2 - 3 - 4 - 5"

let numbers2 = [6, 7, 8, 9, 10];
console.log(numbers.concat(numbers2));

console.log(numbers.unshift(0)); // Output: 6 (new length of the array)
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]

console.log(numbers.shift()); // Output: 0 (removed element)
console.log(numbers); // Output: [1, 2, 3, 4, 5]

console.log(numbers.slice(1, 4)); // Output: [2, 3, 4] (elements from index 1 to 3 , no change in the original array)
console.log(numbers.splice(1, 2)); // Output: [2, 3] (removed elements , changes the original array)
console.log(numbers); // Output: [1, 4, 5] (remaining elements after splice)

console.log(numbers.reverse()); // Output: [5, 4, 1] (reverses the array)
console.log(numbers.sort()); // Output: [1, 4, 5] (sorts the array in ascending order)

console.log(delete numbers[1]); // Output: true (deletes the element at index 1)
console.log(numbers); // Output: [1, empty, 5] (the element at index 1 is deleted but the length of the array remains the same)

console.log(numbers.push(2)); //Output: [1,2,5,empty]
console.log(numbers.sort());
console.log(numbers);

//Practice

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];

console.log(companies.shift());
console.log(companies);

// console.log(companies[1] = "Ola");
console.log(companies.splice(1,1,"Ola"));
console.log(companies);

console.log(companies.push("Amazon"));
console.log(companies);

