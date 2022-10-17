const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    clickInputs();
})

function clickInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstnameValue === ''){
        //show error
        //add error class

    }
}