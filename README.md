# Password-generator

## Description
This Password-generator was created to provide a secure password the user could utilize for creating a "strong" password for any given website. Using the criteria of character length and any selectable combination of randomized: lowercase letters,  uppercase letters, numbers and special characters, the user can ensure their password needs are met relative to their desired password, to ensure maximized security. This was built as a tool for someone who just wants simple inputs and may want to have a password that does not follow potentially exploitable biases (ie. commonly strung-together-characters) when creating a password. This password generator will guarantee at LEAST one of each of the selected criteria and will be randomly generated. It's not the most beautiful password generator, but it was created entirely using prompts so I could demonstrate my understanding of the coding concepts by doing something other than the typical checkbox formatted password generators I've seen. It is very easy to use and uses several points of confirmation and validations to prevent breakablility. Future updates could include a copy function that would allow the user to simply copy the password, instead of having to manually type it out after it is generated. 

## Usage
The following screenshots show the functionality of my Password-generator through each prompt, assuming 8 characters and all characters are desired:
![start](/Assets/PW_Start.png), ![character length prompt](/Assets/PW_first_prompt.png), ![second prompt](/Assets/PW_criteria_notification_prompt.png), ![lowercase prompt](/Assets/PW_lowercase_prompt.png), ![uppercase prompt](/Assets/PW_uppercase_prompt.png), ![numbers prompt](/Assets/PW_numbers_prompt.png), ![special characters prompt](/Assets/PW_specChars_prompt.png), ![confirmation of selected criteria](/Assets/PW_criteriaConfirmation_prompt.png), ![generated password](/Assets/PW_generatedPassword_prompt.png).

The validations and their resulting prompts were set up to do the following: 
1. prevent non-numbers from being entered into the quantity of desired characters. Will return the user to enter their character length, again.
![not a number input](/Assets/PW_invalidCharLength_validation2.png)
2. prevent numbers < 8 or > 128 from being entered. This will also retrigger the character length selection prompt.
![less than 8 or greater than 128 characters input](/Assets/PW_invalidCharLength_validation.png)
3. prevent situations where no character types were selected. It will pass them back through the 4 selectable criteria to allow them to update their selections.
![no criteria selected](/Assets/PW_noSelections_validation.png)

## Credits
I know youtube is taboo, but I was struggling to find a succinct way to do the random generation of the various character types. The only bit I did use from a video I watched was the random generation formatting from https://www.youtube.com/watch?v=duNmhKgtcsI to create the letters and get an idea of how to do the special characters. The numbers were from a previous module/classes that we have done. I was looking for a shortcut that would help me not to have to type out 52 strings in arrays for the uppercase/lowercase letters, mainly, and what I found achieves that using the existing fromCharCode(); function, which I am sure I could use at a later date.

## Tests
Various validations were required to prevent letter inputs for character length and ensuring that at least one criteria is selected to generate the password. The main challenge I had was ensuring that at least one of each of the desired criteria is actually generated, to prevent random selection from possibly (despite however unlikely) skipping over a desired character selection. For example, at 8 characters, it is more likely to randomly [i]exclude[i] one of the selected criteria by randomly picking between the other criteria over 8 random instances. I elected to pick from the selected items once, then randomly pick between the selected items for the rest of the character length to prevent this.