const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
})

function checkInputs(){
  
  const fnameValue = firstname.value.trim();
  const lnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwdValue = password.value.trim();
  
  
  if(fnameValue === ''){
    setErrorFor(firstname, 'name cannot be blanked');
  }
  else{
    setSuccessFor(firstname);
  }
}

function setErrorFor(inp, msg){
  const formcontrol = inp.parentElement;
  const exclamation = formcontrol.querySelector('.fa-check-circle');
  const small = formcontrol.querySelector('small');
  
  small.innerText = msg;
  
  formcontrol.className = 'form-control error';
  
  exclamation.style.visibility = 'visible';
}

function setSuccessFor(inp){
  const formcontrol = inp.parentElement;
  formcontrol.className = 'form-control success';
}