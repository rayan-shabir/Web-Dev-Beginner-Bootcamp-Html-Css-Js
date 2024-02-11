// ALERT in In-Browser Java Script
alert("This is a message");

// Prompt in In-Browser Java Script
// --> In prompt "Guest is a default argument which is necessay to pass"
let name = prompt("What is your name?", "Guest");
console.log(name);

// Confirm in In-Browser Java Script
let deletePost = confirm("Do you really want to delete this post?");

if(deletePost) {
    console.log("Your post has been deleted Successfully...");
} else{
    console.log("Your post has not been deleted Successfully...");
}

// QUIZ

let age = prompt("Enter your age");

if(age >= 18) {
    console.log("You are allowed");
} else {
    console.log("You are not allowed");
}