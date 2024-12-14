// Random Password Generator example:

function generatepassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "012346789";
  const symbolChars = "!@#$%^*_+=";

  let allowedChars = "";
  let Password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(password lenght must be atleast 1)`;
  }
  if (allowedChars.length === 0) {
    return `(Atleast 1 set of character needs to be selected)`;
  }
  for (i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    Password += allowedChars[randomIndex];
  }

  return Password;
}

const passwordlength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const Password = generatepassword(
  passwordlength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated Password:${Password}`);
