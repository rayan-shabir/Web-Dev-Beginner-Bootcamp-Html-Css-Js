let myVar1 = 34;
let myVar2 = "string";
let myVar3 = undefined;
let myVar4 = null;
let myVar5 = true;

// console.log(myVar1);
// console.log(myVar2);
// console.log(myVar3);
// console.log(myVar4);
// console.log(myVar5);

// OBJECTS
let employee = {
    name : "Ali",
    salary: 100,
    channel1: "Programmer",
    'channel 2': "Exit You"
}

// printing object employee
console.log(employee);

// Accessing Objects variables
console.log(employee.channel1);
console.log(employee['name']);
console.log(employee['channel 2']);

// Arrays
let array1 = [1, 2, 3, "Rayan", true];
console.log(array1);

// creating array by another method
let array2 = new Array(4, 1, 13, "Rayan", false);
console.log(array2);

// Pushing Elements in Array
array2.push(5);
array2.push("Ahmed");
console.log(array2);

// Length of Array
console.log(array2.length);
// Sorting an Array
array2 = array2.sort();
console.log(array2);

