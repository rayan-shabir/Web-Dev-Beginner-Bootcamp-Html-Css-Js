let myLovelyString = "My good name is good Khan";

// Length of String
console.log(myLovelyString.length);

// Finding index of word
console.log(myLovelyString.indexOf("good"));

// Finding last index of word
console.log(myLovelyString.lastIndexOf("good"));

// Slicing the String
console.log(myLovelyString.slice(3, 6));

// Replacing the word with new word in a string
let d = myLovelyString.replace("good", "bad");
d = myLovelyString.replace("good", "very bad");

console.log(d, myLovelyString);