// Reading a File with help of NodeJs Module
const fs = require("fs");
let text = fs.readFileSync('not.txt', 'utf-8');

console.log("The content of the file is:: ");
console.log(text);

// Writing to a File with help of NodeJs Module
text = text.replace("browser", "rest");
console.log(text);

console.log("Writing to a File");
fs.writeFileSync('rest.txt', text);

console.log("Writing to a file is done");
