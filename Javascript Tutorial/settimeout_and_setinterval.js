log = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval fired </b>"
    console.log("I am your log");
}
// It will evaluate function after specific time
let clr1 = setTimeout(log, 3000);
clearTimeout(clr1);

let clr2 = setInterval(log, 5000);
clearInterval(clr2);