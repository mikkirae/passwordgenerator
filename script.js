// Assignment Code
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
  
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y', 'z',
];

var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q', 'R','S','T','U','V','W', 'X','Y','Z',
];


// password options function
function getPasswordOptions() {
  
  var length = parseInt(
    prompt('How many characters would you like your password to be?'),
    8
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password must less than 129 characters');
    return null;
  }
  
  var SpecialCharacters = confirm(
    'Click OK to include special characters.'
  );

  var NumericCharacters = confirm(
    'Click OK to include numeric characters.'
  );

  var LowerCasedCharacters = confirm(
    'Click OK to include lowercase characters.'
  );
  
  var UpperCasedCharacters = confirm(
    'Click OK to include uppercase characters.'
  );

  
  if (
    SpecialCharacters === false &&
    NumericCharacters === false &&
    LowerCasedCharacters === false &&
    UpperCasedCharacters === false
  ) {
    alert('Please select at least one character');
    return null;
  }

  
  var passwordOptions = {
    length: length,
    SpecialCharacters: SpecialCharacters,
    NumericCharacters: NumericCharacters,
    LowerCasedCharacters: LowerCasedCharacters,
    UpperCasedCharacters: UpperCasedCharacters,
  };

  return passwordOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;

function generatePassword() {
  var options = getPasswordOptions();
  
  var result = [];
  
  var possibleCharacters = [];
 
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.SpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.NumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  
  if (options.LowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  
  if (options.UpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
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
