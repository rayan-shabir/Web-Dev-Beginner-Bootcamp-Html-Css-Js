const fs = require("fs");
// Synchronous or Blocking
// --> Line by Line execution
console.log("***Synchronous / Blocking Execution***");

const text = fs.readFileSync("rest.txt", "utf-8");
console.log(text);
console.log("This is a message");

// Asynchronous or non-Blocking
// --> Line by Line execution not guaranteed
// --> Callbacks will fire
console.log("\n***Asynchronous / non-Blocking Execution***");

fs.readFile("not.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});
console.log("This is a message");