//Number Guessing Game Example:

const minimum = 1;
const maximum = 100;

const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attmepts = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`Guess a number between ${minimum}-${maximum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert(`Please enter a valid number`);
  } else if (guess < minimum || guess > maximum) {
    window.alert(`Please enter a valid number`);
  } else {
    attmepts++;
    if (guess < answer) {
      window.alert(`TOO LOW!.TRY AGIN!`);
    } else if (guess > answer) {
      window.alert(`TOO HIGH!.TRY AGIN!`);
    } else {
      window.alert(
        `CORRECT!.The answer was ${answer}.It took you ${attmepts} attmepts.`
      );
      running = false;
    }
  }
}
