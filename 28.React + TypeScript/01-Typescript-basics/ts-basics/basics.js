//4. Primitives: number, boolean, string
//4. More complex types: arrays, objects
//4. Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 12;
// age='16'; //Type 'string' is not assignable to type 'number'.
var isInstructor = true;
//5. More Complex types
var hobbies;
hobbies = ["Sports", "Cooking", "Running"];
var mixArray;
mixArray = [5, 7, "Hello", true, 20];
//we cant use readonly with index signature
var array = [10, "Hello", true, false];
var person = {
    name: "Max",
    age: 24,
};
//Create array(List) of object
var peoples;
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
var course = "React - The Complete Guide";
// course = 123;  //It gives error bcs ts have type infrence
//#7 Union Type
var union = "Raziullah Khan";
union = 20;
console.log("union", union);
//#9 Function and Function Types
function add(a, b) {
    return a + b;
}
console.log("Add function", add(5, 6));
function printValue(value) {
    console.log(value);
}
printValue(5);
//#10 Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
console.log(updatedArray);
// updatedArray[0].split('');  //using generic it gives error
