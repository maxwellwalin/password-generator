// Assignment Code
var generateBtn = document.querySelector(".btn");

// Assigning criteria variables as strings
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789"; 
var special = "".concat(" ","!","#","$","%","&","'","(",'"',")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~")

//defining function to randomize strings
function randomize(string) {
  var array = string.split('');           // Convert String to array
  array.sort(function() {                 // Sort array randomly using Math.random
    return 0.5 - Math.random();
  });  
  string = array.join('');                // Convert Array to string
  return string;                        // Return randomized string
}

function generatePassword() {
// Defining empty string password variable to concat later
  var passwordUntrimmed = "";

// When button is pressed, prompt for password length is stored in a variable, then converted to number type
  var passwordLengthString = prompt("Enter a desired password length between 8 and 128 characters.");
  var passwordLength = Number(passwordLengthString);
// While the password length input is not a number, less than 8, or greater than 128, alert the user of invalidity and prompt them for another input
  while (isNaN(passwordLength) || 8 > passwordLength || passwordLength > 128) {
    alert("You did not enter a valid password length! Please choose a number between 8 and 128.");
    passwordLengthString = prompt("Enter a desired password length between 8 and 128 characters.");
    passwordLength = Number(passwordLengthString);
  }

// Store true/false variables based on the users choice of desired criteria
  var lowercaseSelection = confirm("Would you like to use lowercase characters in your password? (ie. " + lowercase + ")");
  var uppercaseSelection = confirm("Would you like to use uppercase characters in your password? (ie. " + uppercase + ")");
  var numericSelection = confirm("Would you like to use numeric characters in your password? (ie. " + numeric + ")");
  var specialSelection = confirm("Would you like to use special characters in your password? (ie. " + special + ")");

// Repeat concat of criteria until the passwordUntrimmed.length is greater than or equal to user's selected passwordLength
  while (passwordLength > passwordUntrimmed.length) {
    if (lowercaseSelection) {
    passwordUntrimmed = passwordUntrimmed.concat(lowercase)
  } 
    if (uppercaseSelection) {
    passwordUntrimmed = passwordUntrimmed.concat(uppercase)
  } 
    if (numericSelection) {
    passwordUntrimmed = passwordUntrimmed.concat(numeric) 
  } 
    if (specialSelection) {
    passwordUntrimmed = passwordUntrimmed.concat(special)
  } 
}

// Randomize the long, in-order string that was concat previously
  var passwordUntrimmedRandomized = randomize(passwordUntrimmed);
// Cut the long, now randomized, password string to the passwordLength defined by user and store in password variable
  var password = passwordUntrimmedRandomized.substring(0, passwordLength);
// Return the randomized, now specific length, password 
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

