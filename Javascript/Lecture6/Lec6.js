//DOM - Document Object Model

// window.alert("Hello");
console.log("Hello");

//Window Object: The window object represents an open window in a browser. It is a browser's object & is automatically created by a browser.
//It is a global object with lots of properties and methods.

window.console.log("hello2");

//When a page is loaded the browser creates a Document Onject Model (DOM) of the page.

//window -> document -> html -> head
//                           |
//                           --> body

console.dir(document.body);
console.log(document.body);
// console.log(document.body.childNodes[1].innerText = "abcd");

//DOM Manipulation

//Selectinng with id
let para = document.getElementById("demo"); //p
console.log(para);

//Selecting with class
let but = document.getElementsByClassName("click");
console.log(but);

//Selecting with tag
let tagO = document.getElementsByTagName("p");
console.log(tagO);

//Query Selector

let elements = document.querySelector("p"); //1st element
console.dir(elements);

let element = document.querySelectorAll("p"); //All elements
console.dir(element);

//Properties

//tagName : returns tag for element nodes
//innerText : returns the content of the element and all its children
//innerHTML : returns the plain text or HTML contents in the element
//textContent : returns textual content even for hidden elements

let fruit = document.querySelector("div");

console.dir(fruit);

fruit.innerHTML = "<div> inner div </div>";
console.log(fruit);


let headO = document.querySelector("h2");
console.dir(headO.innerText);
headO.innerText = headO.innerText + " from Apna College students";
console.log(headO);

let box = document.querySelectorAll("div");
console.log(box);
let boxO = document.querySelectorAll("div");
console.log(box);

let idx = 1;
for(b of box){
    console.log(b.innerText);
    idx++;
}

box[0].innerText = "New Heading 1";
box[1].innerText = "New Heading 2";
box[2].innerText = "New Heading 3";

for(b of box){
    console.log(b.innerText);
}

