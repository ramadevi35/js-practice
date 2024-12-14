// IF STATEMENTS

// let age = 15;

// if (age > 18) {
//   console.log("You are old enough to enter this site");
// } else {
//   console.log("you must be 18+ to enter this site");
// }

// let time = 14;

// if (time < 12) {
//   console.log("Good Morning!");
// } else {
//   console.log("Good Afternoon!");
// }

// let isStudent = true;

// if (isStudent) {
//   console.log("You are a student");
// } else {
//   console.log("You are not a student");
// }

// let age = 18;
// let haslicence = false;

// if (age >= 16) {
//   console.log("You are old enough to drive");
//   if (haslicence) {
//     console.log("You have your licence!");
//   } else {
//     console.log("You do not have a licence yet!");
//   }
// } else {
//   console.log("You must be 16+ to have a licence");
// }

const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");

let age;
mysubmit.onclick = function () {
  age = mytext.value;
  age = Number(age);
  if (age > 100) {
    resultElement.textContent = `You are too old to enter this site`;
  } else if (age >= 18) {
    resultElement.textContent = "you are old enough to enter this site";
  } else if (age == 0) {
    resultElement.textContent = "You can,t enter.you were just born";
  } else if (age < 0) {
    resultElement.textContent = "Your age can,t be below 0";
  } else {
    resultElement.textContent = "You must be 18+ to enter this site";
  }
};
