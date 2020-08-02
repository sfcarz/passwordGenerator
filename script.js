// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// Strings
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = lowerCaseLetters.toUpperCase();
var oneTenNum = "0123456789";
var specialChar = `!'"@#$%^&*()-_=+<>,.?{}[]`;
// Converted to Arrays
var arLower = lowerCaseLetters.split("");
var arUpper = upperCaseLetters.split("");
var oneTenNumArray = oneTenNum.split("");
var specialCharArray = specialChar.split("");

function writePassword() {
  // event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

function generatePassword() {
  var passWord = [];
  var characters = [];

  // var respond = confirm('Are you ready to generate your password?');
  var length = prompt(
    "How long do you want your password? Must be between 8 to 128 characters long"
  );

  console.log(parseInt(length) > 8);

  if (parseInt(length) > 8 && parseInt(length) < 128) {
    var isLowerCase = confirm("Do you want to include lowercase?");
    var isUpperCase = confirm("Do you want to include uppercase?");
    var isNumbers = confirm("Do you want to include numbers?");
    var isSpecialChar = confirm("Do you want to include special characters?");
    if (isLowerCase) {
      characters = characters.concat(arLower);
    }

    if (isUpperCase) {
      characters = characters.concat(arUpper);
    }

    if (isNumbers) {
      characters = characters.concat(oneTenNumArray);
    }

    if (isSpecialChar) {
      characters = characters.concat(specialCharArray);
    }
    var randomize = "";
    for (var i = 0; i < parseInt(length); i++) {
      randomize += characters[Math.floor(characters.length * Math.random())];
      passWord = randomize;
    }

    console.log(randomize);
    console.log(passWord);
    console.log(generatePassword);
  } else {
    alert("You must enter a number between 8 and 128");
  }
  return(passWord)
}

generateBtn.addEventListener("click", writePassword);
