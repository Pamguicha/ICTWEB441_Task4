// selectors for RegisterForm 
const submitBtnRegisterForm = document.querySelector("#submitBtnRform");
const errorUserNameRf = document.querySelector("#usernameError");
const errorEmailRf = document.querySelector("#emailRegisterFormError");
const errorPassword = document.querySelector("#passwordError");
const errorConfirmPassword = document.querySelector("#confirmPasswordErrorRf");
const errorFirstNameRf = document.querySelector("#firstNameErrorRf");
const errorSurname = document.querySelector("#surnameErrorRf");
const errorGender = document.querySelector("#genderError");
const errorAddress = document.querySelector("#addressError");
const errorSuburb = document.querySelector("#suburbError");
const errorPostcode = document.querySelector("#postcodeError");
const errorState = document.querySelector("#stateError");
const errorMobileNumberRf = document.querySelector("#telephoneErrorRf");


//event listener register form
submitBtnRegisterForm.addEventListener("click", function(ev){
  ev.preventDefault();
  return validateUserData();
});

const validateUserData = () =>{
  let error = 0;

  error = validateUsername(error);
  error = validateEmailRf(error);
  error = validatePassword(error);
  error = validateConfirmPassword(error);
  error = validateFirstNameRf(error);
  error = validateSurname(error);
  error = validateGender(error);
  error = validateAddress(error);
  error = validateSuburb(error);
  error = validatePostcode(error);
  error = validateState(error);
  error = validateMobileRf(error);

  if(error === 0) {
    return true; //no errors found
  }
  else {
    return false; // there are some errors
  }

}
//function for username 
//Required. Must be between 6 characters and 20 characters. Must not contain any special characters.
  function validateUsername(errorFound){
    let userdata = document.getElementById("username").value;
     if (userdata.length >= 6 && userdata.length <=20){
      errorUserNameRf.innerHTML="*"; 

     } else {
      errorUserNameRf.innerHTML = "Your username must be between 6 and 20 characters";
      return ++errorFound;
     }
     let illegalChars = /\W/;
     if (illegalChars.test(userdata)) {
      errorUserNameRf.innerHTML = "Your username cannot contain illegal characters such as symbols";
      return ++errorFound;
     } 
     else { //no error found
      errorUserNameRf.innerHTML = "*";
      return errorFound;
     }
  }
  //function validateEmail 
  //Required. Must be a valid email address.
 function validateEmailRf(errorFound){
   let userdata = document.getElementById("emailRegisterForm").value;
    let regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regExpression.test(userdata)){
     errorEmailRf.innerHTML = "*";
      return 0;
    }
    else {
      errorEmailRf.innerHTML = "The email address is not valid";
      return ++errorFound;
    }
 }
 //Required. Must be between 8 characters and 12 characters.
  
  function validatePassword(errorFound){
    let userdataPassword = document.getElementById("passwordRegisterForm").value;
    if(userdataPassword.length >= 8 && userdataPassword.length <=12){
    errorPassword.innerHTML = "*";
     } 
     else {
      errorPassword.innerHTML = "The password must contain between 8 and 12 characters";
      return ++errorFound;
    }
    return errorFound;
  }
    //Required. Must match the password that the user has entered. 
  function validateConfirmPassword(errorFound){
    let userdataFirstPassword = document.getElementById("passwordRegisterForm").value;
    let userdata = document.getElementById("password-confirmation").value;
    if(userdata === userdataFirstPassword){
      errorConfirmPassword.innerHTML = "*";

    }
    else {
      errorConfirmPassword.innerHTML = "The password must match the password that you has entered";
      return ++errorFound;
    }
  }
  //Required. Must be between 3 characters and 20 characters. Must not contain any special characters.
  function validateFirstNameRf(errorFound){
    let userdata = document.getElementById("firstNameRegisterForm").value;
  
     if (userdata.length >= 3 && userdata.length <=20){
      errorFirstNameRf.innerHTML="*"; 
       } else {
      errorFirstNameRf.innerHTML = "Your name must be between 3 and 20 characters";
      return ++errorFound;
     }
     let illegalChars = /\W/;
     if (illegalChars.test(userdata)) {
      errorFirstNameRf.innerHTML = "Your name cannot contain illegal characters such as symbols";
      return ++errorFound;
     } 
     else { //no error found
      errorFirstNameRf.innerHTML = "*";
      return errorFound;
     }
  }
//Required. Must be between 3 characters and 20 characters. Must not contain any special characters.
  function validateSurname(errorFound){
    let userdata = document.getElementById("surname").value;

    if(userdata.length >= 3 && userdata.length <=20){
      errorSurname.innerHTML = "*";
    } else {
      errorSurname.innerHTML = "our surname must be between 3 and 20 characters";
      return ++errorFound;
    }
    let illegalChars = /\W/;
     if (illegalChars.test(userdata)) {
      errorSurname.innerHTML = "Your surname cannot contain illegal characters such as symbols";
      return ++errorFound;
  }
  else {
    errorSurname.innerHTML = "*";
    return errorFound;
  }
}
//required
function validateGender(errorFound) {
  let gender = document.querySelectorAll('input[name="gender"]');
  if(!gender.length){
    errorGender.innerHTML = "Required";
    return ++errorFound;
  }
  else {
    errorGender.innerHTML = "*";
    return errorFound;
  }
}
//Required. Must be between 3 characters and 50 characters. Must not contain any special characters.
function validateAddress(errorFound) {
  let userdata = document.getElementById("address").value;

  if(userdata.length >= 3 && userdata.length <=50){
    errorAddress.innerHTML = "*";

  } else {
    errorAddress.innerHTML = "Your address must be between 3 and 50 characters";
      return ++errorFound;
  }
  let illegalChars = /[^\w\s]/;
     if (illegalChars.test(userdata)) {
      errorAddress.innerHTML = "Your address cannot contain illegal characters such as symbols";
      return ++errorFound;
  }
  else {
    errorAddress.innerHTML = "*";
    return errorFound;
  }
}
//Required. Must be between 3 characters and 20 characters. Must not contain any special characters.
function validateSuburb(errorFound){
let userdata = document.getElementById("suburb").value;
  if(userdata.length >= 3 && userdata.length <=20){
    errorSuburb.innerHTML = "*";
  } else {
    errorSuburb.innerHTML = "Your suburb must be between 3 and 20 characters";
    return ++errorFound;
  }
  let illegalChars = /\W/;
     if (illegalChars.test(userdata)) {
      errorSuburb.innerHTML = "Your suburb cannot contain illegal characters such as symbols";
      return ++errorFound;
  }
  else {
    errorSuburb.innerHTML = "*";
 }
}
//Required. Must be 4 characters exactly.
function validatePostcode(errorFound){
  let userdata = document.getElementById("postcode").value;
    if(userdata.length === 4) {
      errorPostcode.innerHTML = "*";
    } else {
      errorPostcode.innerHTML = "Your postcode must be 4 characters";
      return ++errorFound;
    }

}
//required
function validateState(errorFound){
  let userdata = document.getElementById("state").value;
    if (userdata === ""){
      errorState.innerHTML = "Required";
       return ++errorFound;
    }else {
      errorState.innerHTML = "*";
  }
    }
function validateMobileRf(errorFound){
  let userdata = document.getElementById("telephoneRegisterRf").value;
  let regExpression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if(regExpression.test(userdata)){
     errorMobileNumberRf.innerHTML = "*";
      return 0;
    }
    else {
      errorMobileNumberRf.innerHTML = "The telephone number is not valid";
      return ++errorFound;
    }
 };

