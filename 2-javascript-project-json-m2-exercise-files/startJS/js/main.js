// JavaScript Document
let start = '{"favColor":"Red", "favSeason":"Spring"}';

let myObject = JSON.parse(start);
console.log(myObject);

let myString = JSON.stringify(myObject);
console.log(myString);

let dataOne = '{"first":"Antal", "last":"Tettinger", "city":"Chengdu"}';

let myData = JSON.parse(dataOne);

document.getElementById('message').innerHTML = myData.last;
