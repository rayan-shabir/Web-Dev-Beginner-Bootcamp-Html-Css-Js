let obj = {
    name : 'Rayan',
    length : 1,
    a : {this : "that"}
}

let js = JSON.stringify(obj);
console.log(js);

console.log(typeof(obj));
console.log(typeof(js));

let parsed = JSON.parse(`{"name" : "Rayan", "length" : 1, "a" : {"this" : "that"}}`);
console.log(parsed);