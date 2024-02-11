let now = new Date();
console.log(now);

let dt = new Date(5000);
console.log(dt);

let newDt = new Date("2015-04-06");
console.log(newDt);

let newDate = new Date(3020, 4, 12, 7, 29, 21, 33);
console.log(newDate);

let yr = newDate.getFullYear();
console.log("The year is " + yr);

let month = newDate.getMonth();
console.log("The month is " + month);

let dat = newDate.getDate();
console.log("The date is " + dat);

let hr = newDate.getHours();
console.log("The hour is " + hr);

let mi = newDate.getMinutes();
console.log("The minute is " + mi);

let sec = newDate.getSeconds();
console.log("The second is " + sec);

newDate.setDate(4);
console.log(newDate);

newDate.setDate(39);
console.log(newDate);

newDate.setMinutes(12);
console.log(newDate);

newDate.setHours(7);
console.log(newDate);

newDate.setSeconds(49);
console.log(newDate);

newDate.setYear(1444);
console.log(newDate);

newDate.setMonth(11);
console.log(newDate);