
//GIVEN I need a new, secure password

//WHEN I click the button to generate a password

//THEN I am presented with a series of prompts for password criteria

//WHEN prompted for password criteria

//THEN I select which criteria to include in the password

//Assignment Code
var generateBtn = document.querySelector("#generateBtn");
var createPasswordBtn = document.querySelector("#createPassBtn");
var new_password_display = document.querySelector("#password");
var length_num = document.querySelector("#passwordLength");
var isLowerCaseAllowed = document.querySelector("#lowerCase");
var isUpperCaseAllowed = document.querySelector("#upperCase");
var isNumbersAllowed = document.querySelector("#numbersAllowed");
var isSpecialCharAllowed = document.querySelector("#specialChar");

var popUpBox = document.querySelector("#optionDialog");

// possible characters
var length = 8;
var letterLowerCase = "abcdefghijklmnopqrstuvwxyz";
var letterUpperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()-";

console.log(a,b,c,d,e,f,g,h,i,j,)

//WHEN prompted for character types to include in the password
generateBtn.onclick = promptPasswordOptions;
createPasswordBtn.onclick = CreatePassword;

function promptPasswordOptions(){
    $('#optionDialog').dialog({
        height: 450,
        width:450,        
        title: 'Password Options',
        classes:'dialogStyle',
        modal:true,
        position:'center',
        open:function(){
            length_num.value = 8;
        }
       
       
    });
}

//THEN I choose lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
 



//THEN my input should be validated and at least one character type should be selected
function validateSelection(){

    if(isLowerCaseAllowed.checked == false && isUpperCaseAllowed.checked == false 
        && isNumbersAllowed.checked == false && isSpecialCharAllowed.checked == false){
        return false;
    }        
    return true;
}
function CreatePassword(){
    if(validateSelection()== false){
        alert("");
        return false;
    }

//generate code goes here!!
    var randomPassword = k;
    new_password_display.value =new_pass;




}

//THEN a password is generated that matches the selected criteria

//WHEN the password is generated

//THEN the password is either displayed in an alert or written to the page


