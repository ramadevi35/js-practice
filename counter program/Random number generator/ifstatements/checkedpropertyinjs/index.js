// .checked= property that determines the checked state of an
//  HTML checkbox or radio button element

// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymetResult = document.getElementById("paymetResult");

// mySubmit.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = "You are Subscribed!";
//   } else {
//     subResult.textContent = "You are  not Subscribed!";
//   }
//   if (visaBtn.checked) {
//     paymetResult.textContent = `You are paying with Visa`;
//   } else if (masterCardBtn.checked) {
//     paymetResult.textContent = `You are paying with Master Card`;
//   } else if (payPalBtn.checked) {
//     paymetResult.textContent = `You are paying with Paypal`;
//   } else {
//     paymetResult.textContent = `You must select a payment type`;
//   }
// };

// Ternary Operator

// let age = 14;

// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);

// isStudent = true;
// let compare = isStudent ? "you are a student" : "you are not a student";
// console.log(compare);

// let purchaseamount = 200;
// let discount = purchaseamount >= 100 ? 10 : 0;

// console.log(
//   `your total is $${purchaseamount - purchaseamount * (discount / 100)}`
// );

// SWITCHES IN JS

// let percentage = 30;
// let Grade;

// switch (true) {
//   case percentage >= 90:
//     Grade = "A";
//     break;
//   case percentage >= 80:
//     Grade = "B";
//     break;
//   case percentage >= 70:
//     Grade = "C";
//     break;
//   case percentage >= 60:
//     Grade = "D";
//     break;
//   default:
//     Grade = "F";
// }
// console.log(Grade);

// useful javascript string methods and Examples:

// let username = "Ramadevi";

// username = username.charAt();
// username = username.indexOf("e");
// username = username.lastIndexOf("a");
// username = username.length;
// username = username.trim();
// username = username.toUpperCase();
// username = username.toUpperCase();
// username = username.repeat(4);
// username = username.startsWith(" ");
// let result = username.includes(" ");
// if (result) {
//   console.log("Your username can,t includes with ' '");
// } else {
//   console.log(username);
// }

// let phonenumber = "123-456-7890";

// // phonenumber = phonenumber.replaceAll("-", "");
// phonenumber = phonenumber.padStart(15, "0");

// console.log(phonenumber);

// string Slicing in JS Example:
const fullName = "Broseph code";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4, 8);

// let firstchar = fullName.slice(0, 1);
// let lastchar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

const email = "rams@gmail.com";

let extract = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(extract);
console.log(extension);

// JS Method chaining example:

let username = window.prompt("Enter your username:");
// NO Method Chaining:

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extrachars = username.slice(1);
// extrachars = extrachars.toLowerCase();

// username = letter + extrachars;
// console.log(username);

// Method Chaining :

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);
