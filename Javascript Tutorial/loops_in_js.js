let arr = [1, 2, 3, "Rayan", 5];
console.log(arr);

// For loop
console.log("FOR LOOP");
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// For each loop
console.log("FOR-EACH LOOP");
arr.forEach(function(element){
    console.log(element);
})

// While loop
console.log("While LOOP");
let a = 0;
while(a < arr.length) {
    console.log(arr[a]);
    a++;
}

// do-While loop
console.log("do-While LOOP");
let j = 0;

do {
    console.log(arr[j]);
    j++;
}while(j < arr.length);