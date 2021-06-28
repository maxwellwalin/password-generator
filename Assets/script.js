// Assignment Code
var generateBtn = document.querySelector("#generate");

// assigning criteria variables as strings
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789"; 
var special = "".concat(" ","!","#","$","%","&","'","(",'"',")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~")

//creating array out of all possible criteria
var criteria = [lowercase, uppercase, numeric, special]

//defining variable for ALL CRITERIA SELECTED
var passwordAllCriteria = criteria[0].concat(criteria[1],criteria[2],criteria[3])

//defining function to randomize strings
function shuffle(s) {
  var arr = s.split('');           // Convert String to array
  
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}

//randomizing the ALL CRITERIA string
passwordFullRandomized = shuffle(passwordAllCriteria)
console.log(passwordFullRandomized);

function generatePassword() {
  return passwordFullRandomized
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", prompt("Choose passworld length between 8 and 128 characters"));
