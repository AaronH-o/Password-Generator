// Assignment code here
const lowerAlph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperAlph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialSet = ['!', '#', '@', '$', '%', '^', '&', '*'];

var generatePassword = function() {
  var passwordString = '';
  var charPool = [];
  let passwordCriteria = {
    numLength: -1,
    lower: null,
    upper: null,
    num: null,
    special: null,
    criteriaMet: false,
  };

  // get user input and validate
  do {
    passwordCriteria.numLength = prompt('Please enter the desired length of your password (8-128)');
    console.log(passwordCriteria.numLength);
  } while(typeof(passwordCriteria.numLength) != 'number' && !(passwordCriteria.numLength >= 8 && passwordCriteria.numLength <= 128 ));
  do {
    let input = prompt('Do you want your password to contain lowercase letters? (y/n)').trim().toLowerCase();
    // Array.from(String)[0] to look at first char of string
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      if(Array.from(input)[0] === 'y') {
        passwordCriteria.lower = true;
        for(let i = 0; i < lowerAlph.length; i++) {
          charPool.push(lowerAlph[i]);
        }
      } else {
        passwordCriteria.lower = false;
      }
    }
  } while(passwordCriteria.lower == null);
  do {
    let input = prompt('Do you want your password to contain uppercase letters? (y/n)').trim().toLowerCase();
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      if(Array.from(input)[0] === 'y') {
        passwordCriteria.upper = true;
        for(let i = 0; i < upperAlph.length; i++) {
          charPool.push(upperAlph[i]);
        }
      } else {
        passwordCriteria.upper = false;
      }
    }
  } while(passwordCriteria.upper == null);
  do {
    let input = prompt('Do you want your password to contain numbers? (y/n)').trim().toLowerCase();
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      if(Array.from(input)[0] === 'y') {
        passwordCriteria.num = true;
        for(let i = 0; i < numberSet.length; i++) {
          charPool.push(numberSet[i]);
        }
      } else {
        passwordCriteria.num = false;
      }
    }
  } while(passwordCriteria.num == null);
  do {
    let input = prompt('Do you want your password to contain special characters? (y/n)').trim().toLowerCase();
    if(Array.from(input)[0] === 'y' || Array.from(input)[0] === 'n') {
      if(Array.from(input)[0] === 'y') {
        passwordCriteria.special = true;
        for(let i = 0; i < specialSet.length; i++) {
          charPool.push(specialSet[i]);
        }
      } else {
        passwordCriteria.special = false;
      }
    }
  } while(passwordCriteria.special == null);

  // make sure at least one character type is selected
  if(!passwordCriteria.lower && !passwordCriteria.upper && !passwordCriteria.num && !passwordCriteria.special) {
    alert('Choose at least one character type');
    return '';
  }

  do {
    let validPassword = [false, false, false, false];
    // create passwordString
    for(let i = 0; i < passwordCriteria.numLength; i++) {
      passwordString = passwordString.concat(charPool[Math.floor(Math.random() *charPool.length)]);
    }

    // check if criteria is met
    if(passwordCriteria.lower) {
      validPassword[0] = false;
      for(let i = 0; i < lowerAlph.length; i++) {
        if(passwordString.includes(lowerAlph[i])) {
          validPassword[0]  = true;
          break;
        }
      }
    } else {
      validPassword[0]  = true;
    }
    if(passwordCriteria.upper) {
      validPassword[1]  = false;
      for(let i = 0; i < upperAlph.length; i++) {
        if(passwordString.includes(upperAlph[i])) {
          validPassword[1]  = true;
          break;
        }
      }
    } else {
      validPassword[1]  = true;
    }
    if(passwordCriteria.num) {
      validPassword[2]  = false;
      for(let i = 0; i < numberSet.length; i++) {
        if(passwordString.includes(numberSet[i])) {
          validPassword[2] = true;
          break;
        }
      }
    } else {
      validPassword[2] = true;
    }
    if(passwordCriteria.special) {
      validPassword[3] = false;
      for(let i = 0; i < specialSet.length; i++) {
        if(passwordString.includes(specialSet[i])) {
          validPassword[3] = true;
          break;
        }
      }
    } else {
      validPassword[3] = true;
    }
    
    passwordCriteria.criteriaMet = (validPassword[0] && validPassword[1] && validPassword[2] && validPassword[3]);

  } while(!passwordCriteria.criteriaMet)

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
