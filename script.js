let user = document.getElementById("email");
let pass = document.getElementById("pass");
let email_error = document.getElementById("email-error");
let pass_error = document.getElementById("pass-error");
let btn = document.querySelector("button");

user.addEventListener("change", validateEmail);
pass.addEventListener("change", validatePassword);
btn.addEventListener("click", showSuccess);
btn.disabled = true;
let mailFlag = false;
let passFlag = false;


function validateEmail(){
  if(user.value.length <= 3 || !user.value.includes('@') || !user.value.includes('.')){
    email_error.innerText = "Make sure email is more than 3 characters and has @ and ."
  }
  else{
    mailFlag = true;
  }
  enableBtn();
}
function validatePassword(){
  if(pass.value.length <= 8){
    pass_error.innerText = "Make sure password is more than 8 characters."
  }
  else{
    passFlag = true;
  }
  enableBtn();
}
function enableBtn(){
  if(mailFlag == true && passFlag == true){
    btn.disabled = false;
  }
}

function showSuccess(e){
  e.preventDefault();
  pass_error.style.color = "green";
  pass_error.innerText = "All good to go!"
}