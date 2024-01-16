// Assignment code here
const lowerAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialSet = ['!', '#', '@', '$', '%', '^', '&', '*'];


var generatePassword = function() {
  let passwordCriteria = {
    numLength: -1,
    lower: null,
    upper: null,
    num: null,
    special: null,
  };

  do {
    passwordCriteria.numLength = prompt('Please enter the desired length of your password (8-128)');
    console.log(passwordCriteria.numLength);
  } while(typeof(passwordCriteria.numLength) != 'number' && !(passwordCriteria.numLength >= 8 && passwordCriteria.numLength <= 128 ));
  


};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
