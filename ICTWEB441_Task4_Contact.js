//selectors contact us
const submitContactForm = document.querySelector("#submitContact");
const errorFirstNameCf = document.querySelector("#firstNameErrorCf");
const errorEmailContactForm = document.querySelector("#emailErrorCf");
const errorPhoneNumber = document.querySelector("#telephoneErrorCf");
const errorMessage = document.querySelector("#messageError");


//TODO Validate 4 inputs contact form 
// event listener contact form
submitContactForm.addEventListener("click", function(ev){
  ev.preventDefault();
  return contactDataValidated();
});

const contactDataValidated = () =>{
  let errorContact = 0;
  errorContact = validateNameContactForm(errorContact);
  errorContact = validateEmailContactForm(errorContact);
  errorContact = validateTelephone(errorContact);
  errorContact = validateMessage(errorContact);

  if(errorContact === 0) {
    return true; //no errors found
  }
  else {
    return false; // there are some errors
  }

}
  
//function firstName
/*Required. Must be between 6 characters and 20 characters. Must not contain any special characters.*/
function validateNameContactForm(errorFound){
  let userData = document.getElementById("firstNameContactForm").value;
  if(userData.length >= 6 && userData.length <=20){
    errorFirstNameCf.innerHTML = "*";
  } else {
    errorFirstNameCf.innerHTML = "Your first name must be between 6 and 20 characters";
    return errorFound++;
  }
}

//function email contact Required. Must be a valid email address.
function validateEmailContactForm(errorFound){
  let userData = document.getElementById("emailContactForm").value;
    let regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regExpression.test(userData)){
     errorEmailContactForm.innerHTML = "*";
      return 0;
    }
    else {
      errorEmailContactForm.innerHTML = "The email address is not valid";
      return ++errorFound;
 }
}

//function phone number Must be between 8 characters and 10 characters. Must not contain any special characters.
function validateTelephone(errorFound){
  let userData = document.getElementById("telephoneContact").value;
  if (userData.length >= 8 && userData.length <= 10){
    errorPhoneNumber.innerHTML = "*";
  } else {
    errorPhoneNumber.innerHTML = "Your phone number must be between 8 and 10 characters";
    return errorFound++;
  }
  let illegalChars = /\W/;
     if (illegalChars.test(userdata)) {
      errorPhoneNumber.innerHTML = "Your name cannot contain special characters such as symbols";
      return ++errorFound;
     } 
     else { //no error found
      errorPhoneNumber.innerHTML = "*";
     }

}

//function message Must be more than 10 characters.
function validateMessage(errorFound){
  let userData = document.getElementById("messageContactForm").value;
  if(userData.length >=10){
    errorMessage.innerHTML = "*";
  } else {
    errorMessage.innerHTML = "Your message must be more than 10 characters";
    return errorFound++;
  }
}

/*Mouse event functions*/ 
const changeSubmitContactColor = document.querySelector(".submitContactForm");

changeSubmitContactColor.addEventListener("mouseover", function(){
changeSubmitContactColor.style.backgroundColor = "#00d0b7";
});

changeSubmitContactColor.addEventListener("mouseout", function(){
  changeSubmitContactColor.style.backgroundColor = "#8c15e9";
});

const changeClearContactBtn = document.querySelector(".clearForm");

changeClearContactBtn.addEventListener("mouseover", function(){
changeClearContactBtn.style.backgroundColor ="#8c15e9";
});

changeClearContactBtn.addEventListener("mouseout", function(){
changeClearContactBtn.style.backgroundColor = "#00d0b7";
});