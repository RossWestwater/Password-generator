// GIVEN I need a new, secure password

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwdField = document.querySelector(".card-body");
var linebreak = '\n';

pwLength = "";
small = "";
big = "";
num = "";
specChar = "";

var pwCriteria = {
  characters: pwLength,
  lowercase: small,
  uppercase: big,
  numeric: num,
  specialCharacters: specChar
  }

  //random value functions
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomSpecChar(){
  var SpecCharList = "!@#$%^&*()[]{}.,'<>/?";
  return SpecCharList[Math.floor(Math.random() * SpecCharList.length)];
}

var password = [];


// Write password to the #password input
function writePassword() {
  
  // first prompt for desired password length
  var pwCharLength = window.prompt('How many characters would you like your password to be? Please select between 8 and 128 characters.');
  // validate selection 
  if (!pwCharLength || pwCharLength < 8 || pwCharLength > 128) {
    window.alert("Please provide a valid character length! Please try again.");
    return writePassword();
    }
  // update the object
  pwCriteria.characters = pwCharLength; 
  otherCriteriaInput();
};

function otherCriteriaInput() {
  window.alert("Please select which of the following 4 criteria you would like your password to contain."); 
  var lowercaseCheck = window.confirm("Lowercase Letters");
    pwCriteria.lowercase = lowercaseCheck;
  
  var uppercaseCheck = window.confirm("Uppercase Letters");
    pwCriteria.uppercase = uppercaseCheck;

  var numCheck = window.confirm("Numbers");
    pwCriteria.numeric = numCheck;

  var specCharCheck = window.confirm("Special Characters");
    pwCriteria.specialCharacters = specCharCheck;
    console.log(pwCriteria);
  
  if (pwCriteria.lowercase === true) {
  pwCriteria.lowercase = "Yes"
  }
  else {
    pwCriteria.lowercase = "No"
  };
  if (pwCriteria.uppercase === true) {
  pwCriteria.uppercase = "Yes"
  }
  else {
    pwCriteria.uppercase = "No"
  };
  if (pwCriteria.numeric === true) {
  pwCriteria.numeric = "Yes"
  }
  else {
    pwCriteria.numeric = "No"
  };
  if (pwCriteria.specialCharacters === true) {
  pwCriteria.specialCharacters = "Yes"
  }
  else {
    pwCriteria.specialCharacters = "No"
  };

  var confirmInputs = window.confirm("Here's what you entered." + "\nPassword Length: " + 
  pwCriteria.characters + "\nLowercase Letters: " + pwCriteria.lowercase + "\nUppercase Letters: "
  + pwCriteria.uppercase + "\nNumbers: " + pwCriteria.numeric + "\nSpecial Characters: " 
  + pwCriteria.specialCharacters + "\n \nIf this is correct, select 'Ok'.");
  if (confirmInputs === false) {
    window.alert("Whoops! Let's try starting over.");
    return otherCriteriaInput();
  }
  function generatePassword(){

  }
};
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create pwCriteria = [
  // characters: []
  // lowercase: ""
  // uppercase: ""
  // numeric: ""
  // special-chars: ""
  // ]

// prompt character length
  // choose between 8 - 128 ; inval if null.
  // confirm selected valid input.
    // if confirm.prompt = true, take valid input and -- until = 1 and add all these individual numbers to the "characters" array.

// window.alert "Please select which of the following 4 criteria you would like your password to contain."
  // confirm.prompt Lowercase Letters?
    // update the pWCriteria array 
  // confirm.prompt Uppercase Letters?
    // update the pWCriteria array  
  // confirm.prompt Numbers?
    // update the pWCriteria array 
  // confirm.prompt Special Characters?
    // update the pWCriteria array
  // confirm.prompt "Here's what you selected: (concatenate the various object pieces). If this is correct, press 'Ok' to generate your password!"

// create randomizing functions for each of the 4 values we'll be wanting to randomize.
// select a random function randomly and run it, if it's obj is true.
  // add this value to the password array
    // each true function must be run > 1 times.
    // loop this function to continue until the pwCriteria.length is reached.
// create a div element
  // .textContent = password array
  // nest this into #password
