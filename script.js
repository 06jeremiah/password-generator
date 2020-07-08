var generateBtn = document.querySelector("#generate");

// Arrays of characters for the password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789";
var specialChar = "!@#$%^&*()_+";


//this function generates the password
function generatePassword() {
  var avaiableChars = ""
  var guaranteedChars = ""
 
  
  var numberOfCharacters = prompt("How many characters do you want the password to be between 10 to 50?")
  
  // used a while loop: length of password at least 10 characters and no more than 100 characters
  while (numberOfCharacters <= 9 || numberOfCharacters === 50) {
    
    // if specified condition is false it will prompt the alert
    alert("Password length must be between 10 to 50 characters, try again please");
    //2nd prompt will come up after the alert
    numberOfCharacters = prompt("How many characters do you want the password to be between 10 to 50?")
    
    // message the console with number of characters selected by the user
    console.log("len: " + numberOfCharacters)
  }
  
  //3rd prompt for the user if above statement is true
  var lowerCase = confirm("do you want lowercase characters for your password?");
  
  //message the console with the character selected by the user
  console.log('lower Case: ' + lowerCase);
  
  //4th prompt for the user
  var upperCase = confirm("do you want upper characters for your password?");
  
  //message the console with the character selected by the user
  console.log('Upper Case: ' + upperCase);
  
  //5th prompt for the user
  var numeric = confirm("do you want numbers for your password?");
  
  //message the console with the character selected by the user
  console.log('Numeric ' + numeric);
  
  //6th prompt for the user
  var punctuation = confirm("do you want special characters for your password?");
  
  //message the console with the character selected by the user
  console.log('Punctuation ' + punctuation);

  //if lowercase variable is true it will random pick a letter from lowerChars 
  if (lowercase) {
    guaranteedChars += randomize(lowerChars)
    avaiableChars += lowerChars
  }
  //if uppercase variable is true it will random pick a letter from upperChars
  if (upperCase) {
    guaranteedChars += randomize(upperChars)
    avaiableChars += upperChars
  }
  //if numeric variable is true it will random pick a letter from munberChars
  if (numeric) {
    guaranteedChars += randomize(numberChars)
    avaiableChars += numberChars

  }
  //if punctuation variable is true it will random pick a letter from punctuationChars
  if (punctuation) {
    guaranteedChars += randomize(punctuationChars)
    avaiableChars += punctuationChars

  }
  //used the for loop: the var i = guaranteedChars by the length of the string, i must be less than number of "numberOfCharacters", i increases the value
  var password = guaranteedChars;
  for (let i = guaranteedChars.length; i < numberOfCharacters; i++) {
    //adding password string to randomize function
    password += randomize(avaiableChars)
  }
  //The return statement stops the execution of function and returns a value from that function
  return password
  
}
//function picks one random character from string
function randomize(characters) {
  //math.floor Math.random returns random characters + the length to the user 
  var randomIndex = Math.floor(Math.random() * characters.length);
  //the return statement stops the execution of function and returns a value from that function
  return characters[randomIndex]
}
//this function calls another function is hooking into 2 elements for the password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//when user clicked button it writes the function above
generateBtn.addEventListener("click", writePassword);