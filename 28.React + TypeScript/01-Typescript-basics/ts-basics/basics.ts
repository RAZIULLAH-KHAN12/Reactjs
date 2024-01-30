//4. Primitives: number, boolean, string
//4. More complex types: arrays, objects
//4. Function types, parameters

let age: number;
age = 12;
// age='16'; //Type 'string' is not assignable to type 'number'.

let isInstructor: boolean = true;

//5. More Complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking", "Running"];

//Mixing type array
type MyArray = (number | boolean | string)[];
let mixArray: MyArray;
mixArray = [5, 7, "Hello", true, 20];

//Create an array with different types in typescript using interface
interface Mix {
  [key: number]: number | boolean | string;
}

//we cant use readonly with index signature
const array: Mix = [10, "Hello", true, false] as const;

//Object with type aliases
type Person = {
  name: string;
  age: number;
};
let person: Person = {
  name: "Max",
  age: 24,
};

//Create array(List) of object
let peoples: Person[];
peoples = [
  {
    name: "Max",
    age: 24,
  },
  {
    name: "Raziullah",
    age: 22,
  },
  {
    name: "Harsh",
    age: 20,
  },
];

//#6 Type Inference

let course = "React - The Complete Guide";
// course = 123;  //It gives error bcs ts have type infrence

//#7 Union Type
let union: string | number | boolean = "Raziullah Khan";
union = 20;
console.log("union", union);

//#8 type aliases
type Hello = string;
type Obj = {
  age: number;
  name: string;
  address: string;
};

//#9 Function and Function Types
function add(a: number, b: number): number | string {
  return a + b;
}

console.log("Add function", add(5, 6));

function printValue(value: any) {
  console.log(value);
}
printValue(5);

//#10 Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

console.log(updatedArray);

// updatedArray[0].split('');  //using generic it gives error

