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

emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
        emailError.className = 'error';
    } else {
        showError();
    }
});
countryInput.addEventListener('input', () => {
    if (countryInput.validity.valid) {
        countryError.textContent = '';
        countryError.className = 'error';
    } else {
        showError();
    }
});
zipcodeInput.addEventListener('input', () => {
    if (zipcodeInput.validity.valid) {
        zipcodeError.textContent = '';
        zipcodeError.className = 'error';
    } else {
        showError();
    }
});
passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'error';
    } else {
        showError();
    }
})

submit.addEventListener('click', () => {

})
function showError() {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = 'Please type in an email address!';
    } else if (emailInput.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address!';
    } else if (emailInput.validity.tooShort) {
        emailError.textContent = 'Value is too short!';
    } 
    if (zipcodeInput.validity.valueMissing) {
        zipcodeError.textContent = 'Please enter a zipcode!';
    } else if (/^\d+$/.test(zipcodeInput.value) == false) {
        console.log('lol')
        zipcodeError.textContent = 'Zipcode must be only numbers!';
    } else if (zipcodeInput.validity.tooShort) {
        zipcodeError.textContent = 'Value doesn\'t meet minimum length!';
    }
    if (passwordInput.validity.valueMissing) {
        passwordError.textContent = 'Please enter a password!';
    } else if (passwordInput.validity.tooShort) {
        passwordError.textContent = 'The password is too short!';
    }
}
showError();