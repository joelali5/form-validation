//Get the elements from the DOM
const Form = document.getElementById('form');
const Username = document.getElementById('username');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const Password2 = document.getElementById('password2');


Form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameVal = Username.value.trim();
    const emailVal = Email.value.trim();
    const passwordVal = Password.value.trim();
    const Password2Val = Password2.value.trim();

    //An if statement to check the inputs
    if(usernameVal === '') {
        errorFn(username, 'Username cannot be blank');
    } else {
        successFn(username);
    }

    if(emailVal === '') {
        errorFn(email, 'Email cannot be blank');
    } else if(!isEmail(emailVal)) {
        errorFn(email, 'Email is not valid');
    } else {
        successFn(email);
    }

    if(passwordVal === '') {
        errorFn(password, 'Password cannot be blank');
    } else {
        successFn(password);
    }

    if(Password2Val === '') {
        errorFn(password2, 'Password cannot be blank');
    } else if(Password2Val !== passwordVal) {
        errorFn(password2, 'Password does not match');
    }else {
        successFn(password2);
    }
};


function errorFn(input, message) {
    const formControl = input.parentNode;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
};

function successFn(input) {
    const formControl = input.parentNode;
    formControl.className = 'form-control success';
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}