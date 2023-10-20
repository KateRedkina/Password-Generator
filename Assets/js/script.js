// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays of characters 
var numeric = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "_", "^", "`", "{", "|", "}", "~", "]"];

// characters chosen by the user
var allChar = [];

// function that generates the password length
function findPasswordLength () {
  var passwordLength = 0; 
  // keep asking the user to choose a length until the answer is a number between 8 and 128 included
  do {
    passwordLength = 0;
    passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
    if (passwordLength < 8) {
      window.alert("Password length must be at least 8 characters.");
    } else if (passwordLength > 128) {
      window.alert("Password length must be less than 129 characters.");
    } else if (isNaN(passwordLength)) {
      window.alert("You entered an invalid password length. Please enter a number between 8 and 128 characters included.");
    } else {
      window.alert("You chose " + passwordLength + " characters for your password.");
    } 
  } while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength));
  return passwordLength;
}

// function that generates a random password
function generatePassword() {
  var passwordLength = findPasswordLength();
  var isSymbol= confirm("Click OK to confirm including special characters.");
  var isNumeric = confirm("Click OK to confirm including numberic characters.");
  var isLowerCase = confirm("Click OK to confirm including lowercase characters.");
  var isUpperCase = confirm("Click OK to confirm including uppercase characters.");
  
  // if user don't select any character type
  if (isLowerCase === false && isUpperCase === false && isNumeric === false && isSymbol === false) {
    allChar = alert("Must select at least one character type!");
    // if nothing choosen, return to the beginning of the function to start again
    return generatePassword();
    // if user chooses all character types
    } else if (isLowerCase && isUpperCase && isNumeric && isSymbol) {
      allChar = lowerCase.concat(upperCase, numeric, symbol);
    // if user chooses lower, upper and numeric
    } else if (isLowerCase && isUpperCase && isNumeric) {
      allChar = lowerCase.concat(upperCase, numeric);
    // if user chooses lower, upper and symbol
    } else if (isLowerCase && isUpperCase && isSymbol) {
      allChar = lowerCase.concat(upperCase, symbol);
    // if user chooses lower, numeric and symbol
    } else if (isLowerCase && isNumeric && isSymbol) {
      allChar = lowerCase.concat(numeric, symbol);
    // if user chooses upper, numeric and symbol
    } else if (isUpperCase && isNumeric && isSymbol) {
      allChar = upperCase.concat(numeric, symbol);
    // if user chooses lower and upper
    } else if (isLowerCase && isUpperCase) {
      allChar = lowerCase.concat(upperCase);
    // if user chooses lower and numeric
    } else if (isLowerCase && isNumeric) {
      allChar = lowerCase.concat(numeric);
    // if user chooses lower and symbol  
    } else if (isLowerCase && isSymbol) {
      allChar = lowerCase.concat(symbol);
    // if user chooses upper and numeric  
    } else if (isUpperCase && isNumeric) {
      allChar = upperCase.concat(numeric);
    // if user chooses upper and symbol  
    } else if (isUpperCase && isSymbol) {
      allChar = upperCase.concat(symbol);
    // if user chooses symbol and numeric  
    } else if (isSymbol && isNumeric) {
      allChar = symbol.concat(numeric);
    // if user chooses upper only 
    } else if (isUpperCase) {
      allChar = upperCase;
    // if user chooses lower only  
    } else if (isLowerCase) {
      allChar = lowerCase;
    // if user chooses numeric only  
    } else if (isNumeric) {
      allChar = numeric;     
    // if user chooses symbol only  
    } else if (isSymbol) {
      allChar = symbol;
    }

  // variable that will store the random selection of characters after it's being made by the for loop
  var finalRandomChar = [];

  // randomizes allChar with user choosen length
  for (var i = 0; i < passwordLength; i++) {
      var makesRandomChar = allChar[Math.floor(Math.random() * allChar.length)];
      finalRandomChar.push(makesRandomChar);
  }

  // remove commas from the array characters to make proper result
  var finalPassword = finalRandomChar.join("");
  return finalPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);