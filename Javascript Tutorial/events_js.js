// It will work when button was clicked
function clicked() {
    console.log("Button is clicked");
}


// It will work when page is loaded
window.onload = function() {
    console.log("Page is loaded");
}


// Events in JS
firstContainer.addEventListener('click', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> We are clicked </b>";
    console.log("Clicked on Container");
})

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log("Mouse up when clicked on container");
// })

// firstContainer.addEventListener('mousedown', function(){
//     console.log("Mouse down when clicked on container");
// })