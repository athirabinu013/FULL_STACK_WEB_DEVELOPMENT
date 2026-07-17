console.log("Hello, World!");
let age = 14;
age = 15;
console.log("My age is: " + age);

let name = "John";
name = "Doe";
console.log("My name is: " + name);
console.log("The type of name is: " + typeof name);

const pi = 3.14;
console.log("The value of pi is: " + pi);

console.log("The type of pi is: " + typeof pi);

isFollow = true;
console.log("Is following: " + isFollow);
console.log("The type of isFollow is: " + typeof isFollow);

let a;
console.log("The value of a is: " + a); 
console.log("The type of a is: " + typeof a);

let x = null;
console.log("The value of x is: " + x);
console.log("The type of x is: " + typeof x);

let b = BigInt(1234);
console.log("The value of b is: " + b);
console.log("The type of b is: " + typeof b);


const obj = { name: "Alice", age: 30 };
console.log("The value of obj is: " + JSON.stringify(obj));
console.log("The type of obj is: " + typeof obj);
console.log("The name in obj is: " + obj.name);
console.log("The age in obj is: " + obj["age"]);

console.log("Homework");
let product = {
    name: "Parker Jotter Standard CT Ball Pen", 
    price: 270, 
    quantity: 1, 
    color: "Black", 
    isAvailable: true
            };
console.log("The value of product is: " + JSON.stringify(product));
console.log("The name in product is: " + product.name);
console.log("The price in product is: " + product["price"]);
console.log("The quantity in product is: " + product.quantity);
console.log("The color in product is: " + product.color);
console.log("Is the product available: " + product.isAvailable);

const profile = {
    name: 'shradhakhapra',
    posts: 195,
    followers: 546000,
    handle: '@shradhakhapra',
    profession: 'Entrepreneur',
    Organization: 'Apna College',
    bio: 'To educate a person is the highest privilege',
    isVerified: true
}
console.log("The value of profile is: " + JSON.stringify(profile));
console.log("The name in profile is: " + profile.name);
console.log("The posts in profile is: " + profile.posts);
console.log("The followers in profile is: " + profile.followers);
console.log("The handle in profile is: " + profile.handle);
console.log("The profession in profile is: " + profile.profession);
console.log("The Organization in profile is: " + profile.Organization);
console.log("The bio in profile is: " + profile.bio);
console.log("Is the profile verified: " + profile.isVerified);
