//Functions and Methods

function print(){
    console.log("Hello");
}
print();
print();

function sum(a,b){
    console.log(a+b);
}
sum(7,8);

function sum1(a,b){
    let sum;
    sum = a+b;
    return sum;
    console.log("Hello");
}
let c = sum1(6,8);
console.log(c);

//Funtion Parametres - They are local variables that have scope till function block.

//Arrow Functions

const arrowmul = (a,b) => {
    return a*b;
}
let b = arrowmul(3,4);
console.log(b);

function String(n){
    let count = 0;
    for(let s of n){
        if(s=="A"||s=="E"||s=="I"||s=="O"||s=="U"||s=="a"
            ||s=="e"||s=="i"||s=="o"||s=="u"
        ){
            count++;
        }
    }
    return count;
}

let d = String("ironman");
console.log(d);

const arrowString = (n) =>{
        let count = 0;
    for(let s of n){
        if(s=="A"||s=="E"||s=="I"||s=="O"||s=="U"||s=="a"
            ||s=="e"||s=="i"||s=="o"||s=="u"
        ){
            count++;
        }
    }
    return count;
}

let e = arrowString("Remarkable");
console.log(e);

//forEach

//function to execute each element in array
//Callback is a function passed as an argument to another function.

let arr = [1,2,3,4,5,6]
 arr.forEach(function printVal(val){ //each value at each index
    console.log(val);
 })
 
arr1 = ["Pune","Kochi","Noida"]
arr1.forEach((val,idx , arr1) => { //each value at each index
    console.log(val,idx,arr1);
 })

//Higher Order Functions
// - forEach function
//A Higher-Order Function is a function that:
    //1.Takes another function as an argument, or
    //2.Returns another function.

//Practice
 arr.forEach(function square(val){ //each value at each index
    console.log(val*val);
 })

//Array Methods
//map

//Creates a new array with the results of some operation. 
//The value its callback returns are used to form a new array.

let newArr = [1,2,3,4,5,6,7,8];

let Arr3 = newArr.map((val)=>{
    return val*val;
})

console.log(newArr);
console.log(Arr3);

//filter
//Creates a new array of elements that give true for condition/filter.

let arr4 = newArr.filter((val) => {
    return val%2 == 0;
})

console.log(arr4);

//reduce
//Performs some operation and reduces an array to a single value.
//It returns that single value.


let sum0 = newArr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum0);

//Practice
let marks = [87,93,64,99,86]
let high = marks.filter((val) => {
    return val>90;
})
console.log(high);

n = prompt("Enter your number: ");
let ino = [];
for(let i=1;i<=n;i++){
    ino.push(i);
}
console.log(ino);

let red = ino.reduce(function(acc, currVal) {
    return acc + currVal;
}, 0);

console.log(red);

let redMul = ino.reduce(function(acc, currVal) {
    return acc * currVal;
}, 1);
console.log(redMul);





