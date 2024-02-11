// SetTimeOut --> Allows us to run the function once after the interval of time.
// ClearTimeOut --> Clear/Stop the function call that is set by SetTimeOut
// SetInterval --> Allows us to run the function repeatedly after the interval of time.

// SetTimeOut
console.log("SetInterval_and_SetTimeOut");

function greet1() {
    console.log("Hello Good Morning");
}

let timeOut = setTimeout(greet1, 5000);

clearTimeout(timeOut);

// setTimeout(greet1(), 5000);     --> Wrong as it is calling the function inside setTimeout

function greet2(name, byeText) {
    console.log(name + " " + byeText);
}

setTimeout(greet2, 8000, "Rayan", "Good Night");

// SetInterval
function greet3(hiText, name, text) {
    console.log(hiText + " " + name + " " + text);
}

let interval = setInterval(greet3, 4000, "Hi Yabyyyy", "Ahmed", "Take Care");

clearInterval(interval);

// DisplayTimeFunction
function displayTime() {
    let time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);