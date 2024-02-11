// ***Simple Function***
// function greet() {
//     console.log("Good Morning");
// }


// ***Arrow Function***
let greet1 = ()=> {
    console.log("Good Morning");
}

let greet2 = ()=> console.log("Good Morning");

setTimeout(() => {
    console.log("We are inside SetTimeOut statement")
}, 3000);

// Method # 01
let sum1 = (a, b) => {
    return a+b;
}

let s1 = sum1(3, 4);
console.log(s1);

// Method # 02
let sum2 = (a, b) => a+b;

let s2 = sum1(8, 7);
console.log(s2);

let half = a => a/2;

let h = half(45);
console.log(h);

// Using arrow function inside object

let obj1 = {
    greeting: "Good Morning",
    names: ["Rayan", "Ahmed", "Ali"],
    speak() {
        this.names.forEach((student)=>{
            console.log(this.greeting + " Yohoo hoo " + student);
        });
    }
}

obj1.speak();