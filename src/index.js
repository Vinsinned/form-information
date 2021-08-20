import './style.css';

//let submit = document.querySelector('#submit');
let emailInput = document.querySelector('#email');
let emailError = document.querySelector('#email + span.error')
let countryInput = document.querySelector('#country');
let countryError = document.querySelector('#country + span.error');
let zipcodeInput = document.querySelector('#zipcode');
let zipcodeError = document.querySelector('#zipcode + span.error');
let passwordInput = document.querySelector('#password');
let passwordError = document.querySelector('#password + span.error');
let confirmationInput = document.querySelector('#passwordConfirmation');
let confirmationError = document.querySelector('#passwordConfirmation + span.error');

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showErrorEmail();
    }
});
countryInput.addEventListener('input', () => {
    if (countryInput.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showErrorCounty();
    }
});
zipcodeInput.addEventListener('input', () => {
    if (zipcodeInput.validity.valid) {
        zipcodeError.textContent = '';
        zipcodeError.className = 'error';
    } else {
        showErrorZipcode();
    }
});
passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showErrorPassword();
    }
});
confirmationInput.addEventListener('input', () => {
    if (confirmationInput.value == passwordInput.value) {
        confirmationError.textContent = '';
        confirmationError.className = 'error';
    } else {
        showErrorConfirmation();
    }
})

submit.addEventListener('click', (event) => {
    if (confirmationInput.value != passwordInput.value) {
        confirmationError.textContent = 'Password does not match!';
    }
    if (!emailInput.validity.valid || !zipcodeInput.validity.valid || !confirmationInput.validity.valid
    || !passwordInput.validity.valid) {
        event.preventDefault();
        showError();
    }
})
function showErrorEmail() {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = 'Please type in an email address!';
    } else if (emailInput.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address!';
    } else if (emailInput.validity.tooShort) {
        emailError.textContent = 'Value is too short!';
    } 
}
function showErrorZipcode() {
    if (zipcodeInput.validity.valueMissing) {
        zipcodeError.textContent = 'Please enter a zipcode!';
    } else if (/^\d+$/.test(zipcodeInput.value) == false) {
        console.log('lol')
        zipcodeError.textContent = 'Zipcode must be only numbers!';
    } else if (zipcodeInput.validity.tooShort) {
        zipcodeError.textContent = 'Value doesn\'t meet minimum length!';
    }
}

function showErrorPassword() {
    if (passwordInput.validity.valueMissing) {
        passwordError.textContent = 'Please enter a password!';
    } else if (passwordInput.validity.tooShort) {
        passwordError.textContent = 'The password is too short!';
    }
}

function showErrorConfirmation() {
    if (confirmationInput.validity.valueMissing) {
        confirmationError.textContent = 'Please confirm your password!'
    } else if (confirmationInput.value != passwordInput.value) {
        confirmationError.textContent = 'Password does not match!';
    }
}