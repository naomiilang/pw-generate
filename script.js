// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    console.log(password);
  passwordText.value = password;

}

function generatePassword() {
  //prompts 
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var string_length = prompt("How long do you want your password to be?");
    var capLet = confirm("Do you want do have capital letters in your password?")
    var randomString = '';
    for ( var i=0; i<string_length; i++) {
        var rNum = Math.floor(Math.random() * chars.length);
        randomString += chars[rNum];
    }
    return randomString;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
