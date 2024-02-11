// DOM MANIPULATION
// document.location   //It will give random information about our page

// document.getElementById('click').click();

// document.getElementById('click').style.border = '2px solid blue';

// To access Element by Id
let elemId = document.getElementById('click');
console.log(elemId);

// To access Element by Class name
let elemClass = document.getElementsByClassName('container');
console.log(elemClass);

// To change CSS property of specific element
// elemClass[0].style.background = 'yellow';

// To add Classes to specific element
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('test-success');

// To remove a Class from specific element
elemClass[0].classList.remove('test-success');

// To access HTML of any specific element
console.log(elemClass[0].innerHTML);

// To access TEXT of any specific element
console.log(elemClass[0].innerText)


// To access Element by Tag Name
let tn = document.getElementsByTagName('div');
console.log(tn);

// To add child to specific Element
let createdElement1 = document.createElement('p');
createdElement1.innerHTML = "This is the created paragraph";

tn[0].appendChild(createdElement1);

// To replace child of specific Element
let createdElement2 = document.createElement('b');
createdElement2.innerHTML = "This is  created bold";

tn[0].replaceChild(createdElement2, createdElement1);

// To delete child of specific Element
// tn[0].removeChild(createdElement2);

// To get title of page
document.title;

// To get URL of page
document.URL;

// To get scripts of HTML page
document.scripts;

// Selecting elements by using Query Selector
let que1 = document.querySelector('#firstContainer');  //It will return 1st matched element
console.log(que1);

// Selecting elements by using Query Selector
let que2 = document.querySelectorAll('#firstContainer');  //It will return all matched element
console.log(que2);