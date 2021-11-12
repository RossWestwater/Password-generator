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
var linebreak = "\n";

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
  specialCharacters: specChar,
};

var desiredTasks = [];
var password = [];

//random value functions
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * max - min) + min;
}
function randomSpecChar() {
  var SpecCharList = "!@#$%^&*()[]{}.,'<>/?";
  return SpecCharList[Math.floor(Math.random() * SpecCharList.length)];
}

// when called (with button click) start the prompts for input values
function writePassword() {
  // first prompt for desired password length
  var pwCharLength = window.prompt(
    "How many characters would you like your password to be? Please select between 8 and 128 characters."
  );
  if (isNaN(pwCharLength)) {
    window.alert ("Please select a valid number.");
    return writePassword();
  }
  // validate selection
  if (!pwCharLength || pwCharLength < 8 || pwCharLength > 128) {
    window.alert("Please provide a valid character length! Please try again.");
    return writePassword();
  }
  // update the object
  pwCriteria.characters = pwCharLength;
  otherCriteriaInput();
}

// store the desired password criteria for later generation

function otherCriteriaInput() {
  window.alert(
    "Please select which of the following 4 criteria you would like your password to contain."
  );
  var lowercaseCheck = window.confirm("Lowercase Letters");
  pwCriteria.lowercase = lowercaseCheck;
  if (lowercaseCheck === true) {
    desiredTasks.push("lowercase");
  }

  var uppercaseCheck = window.confirm("Uppercase Letters");
  pwCriteria.uppercase = uppercaseCheck;
  if (uppercaseCheck === true) {
    desiredTasks.push("uppercase");
  }

  var numCheck = window.confirm("Numbers");
  pwCriteria.numeric = numCheck;
  if (numCheck === true) {
    desiredTasks.push("numbers");
  }

  var specCharCheck = window.confirm("Special Characters");
  pwCriteria.specialCharacters = specCharCheck;
  console.log(pwCriteria);
  if (specCharCheck === true) {
    desiredTasks.push("special characters");
  }
  // validation to ensure at least one criteria has been met
  if (
    lowercaseCheck === false &&
    uppercaseCheck === false &&
    numCheck === false &&
    specCharCheck === false
  ) {
    window.alert(
      "Please select at least one item to include in your password."
    );
    return otherCriteriaInput();
  }

  // convert True to Yes and False to No for upcoming confirmation prompt

  if (pwCriteria.lowercase === true) {
    pwCriteria.lowercase = "Yes";
  } else {
    pwCriteria.lowercase = "No";
  }
  if (pwCriteria.uppercase === true) {
    pwCriteria.uppercase = "Yes";
  } else {
    pwCriteria.uppercase = "No";
  }
  if (pwCriteria.numeric === true) {
    pwCriteria.numeric = "Yes";
  } else {
    pwCriteria.numeric = "No";
  }
  if (pwCriteria.specialCharacters === true) {
    pwCriteria.specialCharacters = "Yes";
  } else {
    pwCriteria.specialCharacters = "No";
  }

  // confirmation of selections. if fat fingered, start again

  var confirmInputs = window.confirm(
    "Here's what you entered." +
      "\nPassword Length: " +
      pwCriteria.characters +
      "\nLowercase Letters: " +
      pwCriteria.lowercase +
      "\nUppercase Letters: " +
      pwCriteria.uppercase +
      "\nNumbers: " +
      pwCriteria.numeric +
      "\nSpecial Characters: " +
      pwCriteria.specialCharacters +
      "\n \nIf this is correct, select 'Ok'."
  );
  if (confirmInputs === false) {
    window.alert("Whoops! Let's try starting over.");
    return otherCriteriaInput();
  }
  generatePassword();
}

function generatePassword() {
  // randomize between the true statements
  // run the function associated with the true statement on a loop until the quantity
  // of desired characters reached, adding characters to the password array as they are generated

  for (i = 0; i < pwCriteria.characters; i++) {
    var randomSelect =
      desiredTasks[Math.floor(Math.random() * desiredTasks.length)];
    console.log(randomSelect);
    if (randomSelect === "lowercase") {
      // 4. append the result to the password array
      password.push(randomLower());
    } else if (randomSelect === "uppercase") {
      password.push(randomUpper());
    } else if (randomSelect === "numbers") {
      password.push(randomNumber(0, 9));
    } else if (randomSelect === "special characters") {
      password.push(randomSpecChar());
    }
  }

  // display password with commas removed
  window.alert("your password is:\n" + password.join(""));
  location.reload();
}

generateBtn.addEventListener("click", writePassword);

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
