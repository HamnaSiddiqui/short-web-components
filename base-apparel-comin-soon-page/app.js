const form = document.querySelector('.form');
const input = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkEmail();
})

function checkEmail(){
    if(input.type == 'email'){
        if(validateEmail(input.value)){
            input.parentElement.classList.remove('error');
        }
        else{
            input.parentElement.classList.add('error');
        }
    }
}

function validateEmail(email){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}