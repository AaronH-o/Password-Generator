// Assignment code here
const lowerAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialSet = ['!', '#', '@', '$', '%', '^', '&', '*'];

const totalSet = [lowerAlph, upperAlph, numberSet, specialSet];

var randomNum = function(range) {
  return Math.floor(Math.random() * range);
}

var generatePassword = function() {
  var passwordString = '';
  let passwordCriteria = {
    numLength: -1,
    lower: null,
    upper: null,
    num: null,
    special: null,
  };

  // get user input and validate
  do {
    passwordCriteria.numLength = prompt('Please enter the desired length of your password (8-128)');
    console.log(passwordCriteria.numLength);
  } while(typeof(passwordCriteria.numLength) != 'number' && !(passwordCriteria.numLength >= 8 && passwordCriteria.numLength <= 128 ));
  do {
    let input = prompt('Do you want your password to contain lowercase letters? (y/n)').trim().toLowerCase();
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      passwordCriteria.lower = (Array.from(input)[0] === 'y') ? true : false;
    }
  } while(passwordCriteria.lower == null);
  do {
    let input = prompt('Do you want your password to contain uppercase letters? (y/n)').trim().toLowerCase();
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      passwordCriteria.upper = (Array.from(input)[0] === 'y') ? true : false;
    }
  } while(passwordCriteria.upper == null);
  do {
    let input = prompt('Do you want your password to contain numbers? (y/n)').trim().toLowerCase();
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      passwordCriteria.num = (Array.from(input)[0] === 'y') ? true : false;
    }
  } while(passwordCriteria.num == null);
  do {
    let input = prompt('Do you want your password to contain special characters? (y/n)').trim().toLowerCase();
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      passwordCriteria.special = (Array.from(input)[0] === 'y') ? true : false;
    }
  } while(passwordCriteria.special == null);

  





  return passwordString;
}


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
