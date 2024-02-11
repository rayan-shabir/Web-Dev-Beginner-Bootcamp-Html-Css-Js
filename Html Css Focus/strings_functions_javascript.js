var str = "This is a String";
console.log(str);

// First Occurence of a string
var position = str.indexOf('is');
console.log(position);

// Last Occurence of a string
position = str.lastIndexOf('is');
console.log(position);

// Substring from a string
// Method # 01
var slice = str.slice(1, 6);
console.log(slice);
// Method # 02
var substring = str.substring(1, 6);
console.log(substring);
// Method # 03
var substr = str.substr(1, 6);
console.log(substr);

// Replace function in String
var replace  = str.replace('String', 'Rayan');
console.log(str);
console.log(replace);

// To Upper Case
console.log(str.toUpperCase());
// To Lower Case
console.log(str.toLowerCase());

// Concatinating String
// NOTE: For concatinating we can also use + operator
var concat = str.concat('Hi hw u');
console.log(concat);

// Trim Function
var stringWithWhiteSpaces = "      this contains        whiteSpaces      ";
console.log(stringWithWhiteSpaces);
console.log(stringWithWhiteSpaces.trim());

// Finding Character in a String
var char2 = str.charAt(2);
console.log(char2);

char2 = str.charCodeAt(2);
console.log(char2);

console.log(str[2]);
