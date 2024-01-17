var generateBtn = document.querySelector("#generate");

function generatePassword(){

var length = Number(prompt("Between 8 and 128, how many charecters would you like your password to obtain?"))

if(length < 8 || length > 128 ){
window.alert("Invalid Entry, Please enter numeric value between 8 and 128")
return}

var options= {
  num: '0123456789',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  special:'!@#$%^&*',
  lower: 'abcdefghijklmnopqrstuvwxyz'
  } ;

var numQ = confirm("Would you like any numbers? OK=Yes Cancel=No");
if(!numQ){
options.num = ""  
}; 
 

var uppQ = confirm("Did you want any upppercase letters? OK=Yes Cancel=No");
if(!uppQ){
  options.upper =""
};

var lowerQ = confirm("Did you want any lowercase letters? OK=Yes Cancel=No");
if(!lowerQ) {
  options.lower = ""
};


var specialQ = confirm("Do you care for some special charecters? OK=Yes Cancel=No");
if(!specialQ) {
  options.special = ""
}

var source = ""
source += options.num 
source += options.upper
source += options.special
source += options.lower

var FinPW = ""

for (var index = 0; index < length; index++) {
  FinPW += source.charAt(Math.floor(Math.random()* source.length));  
}

return FinPW;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);













  



