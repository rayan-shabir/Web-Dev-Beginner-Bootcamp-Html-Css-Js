var string = "this";
var name = 'Rayan';
var channel = "Logical Expers"
var message = "Rayan is an It Professional";

console.log(string + name + channel);

// Template Literals in Strings
var temp = `${name} is a nice person and he has a channel called ${channel}`;
console.log(temp);

// To count Length of String
var len = name.length;
console.log(`The length of name is ${len}`);

// Escape characters
console.log("Hello World \n Hi \thow r u");

// Making string using String Constructor
var age = new String("My age is 19");
console.log(age);