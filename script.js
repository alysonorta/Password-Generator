// Assignment Code
var generateBtn = document.querySelector("#generate");
var resultEl = document.getElementById("#password");
// var passwordLengthPrompt = Number(prompt("Please enter length of desired password.", 8 ));
// var passwordLowercasePrompt = confirm ("Should the password include lowercase characters?");
// var passwordUppercasePrompt = confirm("Should the password include uppercase characters?");
// var passwordNumberPrompt = confirm("Should the password include numbers?");
// var passwordSpecialPrompt = confirm("Should the password include special characters (!?$..etc)");




var randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};

generateBtn.addEventListener("click", generatePassword);


function generatePassword(){
  var passwordLengthPrompt = Number(prompt("Please enter length of desired password.", 8 ));
  var passwordLowercasePrompt = confirm ("Should the password include lowercase characters?");
  var passwordUppercasePrompt = confirm("Should the password include uppercase characters?");
  var passwordNumberPrompt = confirm("Should the password include numbers?");
  var passwordSpecialPrompt = confirm("Should the password include special characters (!?$..etc)");


  // var generatedPassword = "";

  var typesCount = passwordLowercasePrompt + passwordUppercasePrompt + passwordNumberPrompt + passwordSpecialPrompt;

  var typesArr = [{passwordLowercasePrompt}, {passwordUppercasePrompt}, {passwordNumberPrompt}, {passwordSpecialPrompt}] .filter 
  (item => Object.values(item)[0]);


  for (let i = 0; i < typesArr.length; i += 1) {
    if(typesArr[i].passwordLowercasePrompt === true ){ 
       generatePassword +=  randomLower();
    }
    if(typesArr[i].passwordUppercasePrompt === true){
      generatePassword += randomUpper();
    }
    if(typesArr[i].passwordNumberPrompt === true){
      generatePassword += randomNumber();
    }
    if(typesArr[i].passwordSpecialPrompt === true){
      generatePassword += randomSymbol();
    }

  }
  return;

};



// Password generator functions

function randomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);  
}

function randomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);  
}

function randomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);  
}

function randomSymbol () {
  var symbols = "!@#$%^&*(){}[]=<>/,."
  return symbols [Math.floor(Math.random() * symbols.length)];  
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   return password;
// }

// console.log(password);

