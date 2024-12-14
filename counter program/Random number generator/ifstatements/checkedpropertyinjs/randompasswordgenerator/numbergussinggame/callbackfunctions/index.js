// callback: a function that is passed as an argument to another function.

// hello(wait);

// function hello(callback) {
//   console.log("Hello");
//   callback();
// }

// function goodbye() {
//   console.log("Goodbye");
// }
// function greet() {
//   console.log("Hi Rama");
// }
// function wait() {
//   console.log("Wait");
// }

// sum(displayresult, 5, 5);
// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }
// function displayconsole(result) {
//   console.log(result);
// }
// function displayresult(result) {
//   document.getElementById("myH1").textContent = result;
//   document.getElementById(
//     "mytext"
//   ).textContent = `The total value is ${result}`;
// }

//forEach Method callback function:

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(qube);
// numbers.forEach(display);

// function display(element) {
//   console.log(element);
// }
// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = element * 3;
// }
// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }
// function qube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }
// Example 2:

// let fruits = ["orange", "apple", "banana", "grapes"];

// fruits.forEach(capitalize);
// fruits.forEach(display);

// function display(element) {
//   console.log(element);
// }
// function uppercase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// Map() Method with Examples:
// Example 1:
// const numbers = [1, 2, 3, 4, 5];
// const squarenumbers = numbers.map(square);
// const cubenumbers = numbers.map(cube);

// console.log(cubenumbers);

// function square(element) {
//   return Math.pow(element, 2);
// }
// function cube(element) {
//   return Math.pow(element, 3);
// }

// Example 2:

// const names = ["rama", "akhil", "nikhil", "srinu", "harish"];

// const nameUpper = names.map(changednames);
// const namelower = names.map(changedlower);
// const charchange = names.map(changechar);
// console.log(charchange);

// function changednames(element) {
//   return element.toUpperCase();
// }
// function changedlower(element) {
//   return element.toLowerCase();
// }
// function changechar(element) {
//   return element.charAt(0).toUpperCase() + element.slice(1);
// }

// Example 3:

// const dates = ["2024-1-10", "2025-02-20", "2026-03-30"];
// const Newdates = dates.map(formatdate);
// const updates = dates.map(changedate);
// const removesymbol = dates.map(changedate2);
// console.log(removesymbol);

// function formatdate(element) {
//   let parts = element.split("-");
//   return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }
// function changedate(element) {
//   let parts = element.split("-");
//   return `${parts[1]}.${parts[2]}.${parts[0]}`;
// }

// function changedate2(element) {
//   let parts = element.split("-");
//   return `${parts[1]}${parts[2]}${parts[0]}`;
// }

// Filter() method with Examples:
// Example 1:
// const numbers = [1, 2, 4, 6, 8, 9, 7];
// const evennums = numbers.filter(isEven);
// const oddnums = numbers.filter(isOdd);
// console.log(oddnums);

// function isEven(element) {
//   return element % 2 === 0;
// }
// function isOdd(element) {
//   return element % 2 !== 0;
// }

// Example 2:
// const ages = [12, 16, 18, 19, 20, 40, 50, 14];
// const adult = ages.filter(getadults);
// const children = ages.filter(getchildren);

// console.log(children);

// function getadults(element) {
//   return element >= 18;
// }
// function getchildren(element) {
//   return element < 18;
// }

// Example 3:
// const words = [
//   "apple",
//   "banana",
//   "coconut",
//   "pomegranate",
//   "kiwi",
//   "orange",
//   "apricot",
// ];
// const shortword = words.filter(getShortWords);
// const longword = words.filter(getlongwords);
// const chars = words.filter(alphabet);
// console.log(chars);

// function getShortWords(element) {
//   return element.length <= 6;
// }
// function getlongwords(element) {
//   return element.length > 6;
// }

// function alphabet(element) {
//   return element.charAt(0) === "a";
// }

// Reduce() Method with Examples:

// Example 1:
// const prices = [20, 65, 440, 25, 40];

// const total = prices.reduce(gettotal);

// console.log(`Your total price $${total.toFixed(2)}`);

// function gettotal(accumelater, nextelement) {
//   return accumelater + nextelement;
// }

// Example 2:

// const grades = [60, 95, 85, 45, 99, 25, 35, 55];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(minimum);

// function getMax(accumelater, nextelement) {
//   return Math.max(accumelater, nextelement);
// }
// function getMin(accumelater, nextelement) {
//   return Math.min(accumelater, nextelement);
// }

// Function Expressions and declarations with Examples:

// setTimeout(function hello() {
//   console.log("hello");
// }, 3000);

// const numbers = [1, 2, 3, 6, 4, 9, 7];
// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// const evennum = numbers.filter(function (element) {
//   return element % 2 === 0;
// });
// const oddnum = numbers.filter(function (element) {
//   return element % 2 !== 0;
// });
// const total = numbers.reduce(function (accumelater, nextelement) {
//   return accumelater + nextelement;
// });
// console.log(total);
