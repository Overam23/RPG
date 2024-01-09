// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {


  var options= {
  num: [1,2,4,5,6,7,8],
  upper: ["A", "B", "C", "D", "E"],
  special: ["!", "@", "#", "$"],
  lower: ["a", "b", "c", "d", "e"]
  };





  var numQ = prompt("Would you like any numbers? Yes or No ");
if (numQ == options.num[0-7] );
window.alert("YASSS!"); 

var uppQ = prompt("Did you want any upppercase letters? Type Yes or No");
if (uppQ      );

var lowerQ = prompt("Did you want any lowercase letters? Type Yes or No")
if (lowerQ    );

var specialQ = prompt("Do you care for some special charecters? Type Yes or No")
if (specialQ   );



var num = [1,2,4,5,6,7,8]
var upper = ["A", "B", "C", "D", "E"]
var special = ["!", "@", "#", "$"]
var lower = ["a", "b", "c", "d", "e"]



  


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




  



