let jsonObj = {
    name: "Rayan",
    age: 19,
    salary: "10k",
    channel: "Logical Expers"
}

console.log(jsonObj);

// It will convert JSON object to string form
let myJsonStr = JSON.stringify(jsonObj);

console.log(myJsonStr);

// It will convert String form to JSON Object
let newJsonObj = JSON.parse(myJsonStr);

console.log(newJsonObj);