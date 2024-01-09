// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// window.prompt ("sometext") , "defai;tText");
//  var person = prompt("Please enter your name");
//  console.log(person);
// var con = confirm("message here?")
// conole.log(con);

var num = [1,2]
var upper = ["A", "Z"]
var special = ["$", "%"]
var lower = ["a", "z"]

var userchoice = [1, 2, "$", "a", "z"]


