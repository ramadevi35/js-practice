//Easy Way

// let username = window.prompt("what is your username?");

// console.log(username);

//professional Way

// let username;

// document.getElementById("my btn").onclick = function () {
//   username = document.getElementById("my text").value;
//   document.getElementById("my h1").textContent = `Hello ${username}`;
// };

// function happybirthday(username, age) {
//   console.log("Happy birthday to you");
//   console.log("Happy birthday to you");
//   console.log(`Happy birthday to ${username}`);
//   console.log("Happy birthday to you");
//   console.log(` ${age} years old are you`);
// }
// happybirthday("Ramadevi", 31);
// happybirthday("Harish", 32);
// happybirthday("sasivarna", 30);

// function add(x, y) {
//   return x + y;
// }    `
// function substraction(x, y) {
//   return x - y;
// }
// function multipliction(x, y) {
//   return x * y;
// }
// function division(x, y) {
//   return x / y;
// }
// function isEven(num) {
//   return num % 2 === 0 ? true : false;
// }
// function isvalidemail(email) {
//   return email.includes("@") ? true : false;
// }
// console.log(isvalidemail("rams@gmail.com"));
// console.log(isvalidemail("devigmail.com"));
// console.log(isvalidemail("bobs@gmail.com"));

// TEMPERATURE CONVERSION PROGRAM
// "use strict";
// const textbox = document.getElementById("textbox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;
// function convert() {
//   if (toFahrenheit.checked) {
//     temp = Number(textbox.value);
//     temp = (temp * 9) / 5 + 32;
//     result.textContent = temp.toFixed(1) + "°F";
//   } else if (toCelsius.checked) {
//     temp = Number(textbox.value);
//     temp = (temp - 32) * (5 / 9);
//     result.textContent = temp.toFixed(1) + "°C";
//   } else {
//     result.textContent = `select a unit`;
//   }
// }

// Arrays method

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();
// for (let i = fruits.length - 1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// fruits.sort().reverse();
// fruits.forEach((fruit) => {
//   console.log(fruit);
// });
// console.log(fruits.indexOf("coconut"));

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);

// let username = "Ramadevi";
// let letters = [...username].join("-");

// console.log(letters);

let fruits = ["apple", "mango", "banana", "grapes"];
let veg = ["beans", "tamoto", "potatos"];
let newFruits = [...fruits, ...veg, "milk", "eggs", "horlicks"];

console.log(newFruits);
