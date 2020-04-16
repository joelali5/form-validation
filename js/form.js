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
    const radioMale = document.getElementById('male');
    const radioFemale = document.getElementById('female');

    //Check the inputs
    if(usernameVal === '') {
        errorFn(username, 'Please enter your username');
    } else {
        successFn(username);
    }

    if(emailVal === '') {
        errorFn(email, 'Please enter your email');
    } else if(!isEmail(emailVal)) {
        errorFn(email, 'kindly enter a valid email add');
    } else {
        successFn(email);
    }

    if(passwordVal === '') {
        errorFn(password, 'Please enter your password');
    } else {
        successFn(password);
    }

    if(Password2Val === '') {
        errorFn(password2, 'Please confirm your password');
    } else if(Password2Val !== passwordVal) {
        errorFn(password2, 'Password does not match. please try again.');
    }else {
        successFn(password2);
    }

    if(radioMale.checked === false && radioFemale.checked === false) {
        alert('Please select a gender');
    }
};


function errorFn(input, message) {
    const formControl = input.parentNode;
    const small = formControl.querySelector('small');
    formControl.className = 'form__control error';
    small.innerText = message;
};

function successFn(input) {
    const formControl = input.parentNode;
    formControl.className = 'form__control success';
};

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}