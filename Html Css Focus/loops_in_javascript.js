// FOR LOOP
for(let i = 0; i < 3; i++) {
    // console.log(i);
}

// Iterating ARRAY using
// --> For Loop
let array1 = ["Rayan", "Ali", "Shahmeer"];
for(let index = 0; index < array1.length; index++) {
    console.log("Hello Friend, " + array1[index] + " Using For loop");
}

// --> For each Loop
let array2 = ["Rayan", "Ali", "Shahmeer"];
array2.forEach(function f(element) {
    console.log("Helo Friend, " + element + " Using For each loop");
});

// --> For of Loop
let array3 = ["Rayan", "Ali", "Shahmeer"];
for (element of array3) {
    console.log("Helo Friend, " + element + " Using For of loop");
}

// --> For in Loop
// We use For in Loop to iterate Object
let array4 = {
    name: "Rayan", 
    salary: 10,
    channel: "Programming"
};
for (key in array4) {
    console.log(`${key} of employee is ${array4[key]}`);
}

// While loop
let j = 0;
while(j < 5) {
    console.log(`${j} is less than 5 using while loop`);
    j++;
}

// do-While loop
let k = 34;
do {
    console.log(`${k} is less than 5 using do while loop`);
    k++;
} while(k < 5);
