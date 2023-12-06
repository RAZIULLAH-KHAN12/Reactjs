// import { apiKey } from "./util.js"
// import ab from "./util.js";  //default export without curly braces import
// import {a as aa, b} from "./util.js";
// import * as util from "./util.js";
// console.log(ab);
// console.log(`The sum of a and b is ${util.a + util.b}`);

console.log("Hello World!");

// const userName =  "Ram";
// userName = "S";  --> not valid
// console.log(userName);

// let a = 10;
// a='Hello' -->valid

//Function

// function createGreet(userName, message = "Hello") {
//     // console.log(`Hello Mr ${userName} ${message}`);
//     return `Hi, I am ${userName} ${message}`;
// }
// console.log(createGreet());
// const greeting1 = createGreet('Raziullah');
// const greeting2 = createGreet('Rahul', 'good');
// console.log(greeting1);
// console.log(greeting2);

//Anonymous Function
// export default function() {
//     console.log('Hello');
// };

//Arrow function
// export const a = (userName, message) => {
//     console.log('Hello');
//     return userName + " " + message;
// };

//Object in JS

// const user = {
//   name: "Raziullah",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   },
// };
// console.log(user);
// console.log(user.name);
// user.greet();

//Classes --> to create a blue print of the object
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
 
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   }
// }

// const user1 = new User("Raziullah", 22);
// user1.greet();


//Array
const hobbies = ['Sports', 'cooking', 'reading', 'running'];
// console.log(hobbies);
// console.log(hobbies[0]);
// console.log(hobbies.at(0));

// const indx = hobbies.findIndex(val => val === 'Sports')
// console.log(indx);

// const hmap = hobbies.map((item) => {
//     return ({text: item});
// });

// console.log(hmap);


//Destructuring
// 1.Array Destructuring
const userNameData = ['Raziullah', 'Ravi', 'David', 'Munro'];

// const firstName = userNameData[0];
// const secondName = userNameData[1];
// const thirdName = userNameData[2];
// const fourthName = userNameData[3];

//Instead of this we can use destructuring in a single line
// const [firstName, secondName, thirdName, fourthName] = userNameData;
// console.log(firstName, secondName, thirdName, fourthName);

//2. Object Destructuring.
const user = { 
    name: 'Max',
    age: 22
}

const {name: n, age: a} = user;
// console.log(n, a);


//Spread operators  --> it pulls all the value from existing array and return new array
const mergedUserNameData = [...hobbies, ...userNameData]
// console.log(mergedUserNameData);

//inside object spreat operator work
const extendedUser = {
    isAdmin: true,
    ...user
}
// console.log(extendedUser);


//Control Structure
// const password = prompt('Your Password');
// if(password === 'Hello') {
//     console.log('Hello works');
// } else if(password === 'hello') {
//     console.log('hello works');
// } else {
//     console.log('Access not granted.');
// }

// for(const hobby of hobbies) {
//     console.log(hobby);
// }


//DOM Manipulation
const list = document.querySelector('ul');
// list.remove();


//Function as Values
function handleTimeout() {
    console.log('Timed out!');
}

const handleTimeout2 = () => {
    console.log('Timed out ... again');
} 

// setTimeout(handleTimeout()); --> When we pass function as a parameter then that time () parenthesis not add/
setTimeout(handleTimeout, 2000); //pass function as a value
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log('More timing out!');
}, 4000);

function greeter(greetFn) {
    greetFn();
}
greeter(() => console.log("Hi!"));


//Function inside a function
function init() {
    function greet() {
        console.log('I am inside function');
    }
    greet();
}
// init()


//Reference vs Primitive Values  --> in memory stor actual value
let userMessage = 'Hello!';
userMessage = userMessage.concat('!!!');

//Refernece values --> in memory store reference values
//This is array and in js array is an object and object is a reference value
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
fruits.push('Pineapple');
console.log(fruits);