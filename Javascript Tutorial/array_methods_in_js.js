let myArr = [1, 2, "Rayan", null, true];

// Array Length
console.log(myArr.length);

// To delete last index element of array
myArr.pop();
console.log(myArr);

// To add element at last index of array
myArr.push("Ali");
console.log(myArr);

// To delete first index element of array
myArr.shift();
console.log(myArr);

// To add element at last index of array
myArr.unshift("Kashif")
console.log(myArr);

// NOTE: 
console.log(myArr.unshift("Kashif")); //It will return length of array
// Similary
const newLen = myArr.unshift("Kabeer");
console.log(newLen);

// Converting array to a string
myArr.toString();
console.log(myArr);

// Sortin array
let d = [1, 45, 23, 2943344,3443, 4737939322];
d.sort();
console.log(d);