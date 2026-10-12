'use strict';

const form = document.querySelector('form');

const email = document.querySelector('[data-email]');
const password = document.querySelector('[data-password]');
const passwordRepeat = document.querySelector('[data-password-repeat]');
const age = document.querySelector('[data-age]');
const city = document.querySelector('[data-city]');
const checkbox = document.querySelector('[data-checkbox]');

const cleanBtn = document.querySelector('[data-clean-btn]');
const json = document.querySelector('[data-json]')

function showError(error, message) {
    error.textContent = message;
    error.classList.add('error-active');
}

function hideError(error) {
    error.textContent = '';
    error.classList.remove('error-active');
}

function validateEmail() {
    const error = email.closest('label').querySelector('[data-error]');
    const value = email.value.trim();

    if (value === '') {
        showError(error, 'Введіть email');
        return false;
    }

    if (!email.validity.valid) {
        showError(error, 'Неправильний формат email');
        return false;
    }

    localStorage.setItem('email', email.value);

    hideError(error);
    return true;
}

function validatePassword() {
    const error = password.closest('label').querySelector('[data-error]');
    const value = password.value;

    if (value.length < 8) {
        showError(error, 'Пароль повинен містити мінімум 8 символів');
        return false;
    }

    if (!/[0-9]/.test(value)) {
        showError(error, 'Пароль повинен містити хоча б одну цифру');
        return false;
    }

    if (!/[a-zA-Z]/.test(value)) {
        showError(error, 'Пароль повинен містити хоча б одну літеру');
        return false;
    }

    localStorage.setItem('password', password.value);

    hideError(error);
    return true;
}

function validateConfirmPassword() {
    const error = passwordRepeat
        .closest('label')
        .querySelector('[data-error]');

    if (passwordRepeat.value === '') {
        showError(error, 'Підтвердіть пароль');
        return false;
    }

    if (password.value !== passwordRepeat.value) {
        showError(error, 'Паролі не збігаються');
        return false;
    }

    localStorage.setItem('passwordRepeat', passwordRepeat.value);

    hideError(error);
    return true;
}

function validateAge() {
    const error = age.closest('label').querySelector('[data-error]');
    const value = age.value;

    if (
        value === '' ||
        Number(value) < 16 ||
        Number(value) > 120
    ) {
        showError(error, 'Вік повинен бути від 16 до 120 років');
        return false;
    }

    localStorage.setItem('age', age.value);

    hideError(error);
    return true;
}

function validateCity() {
    const error = city.closest('label').querySelector('[data-error]');

    if (city.value === '') {
        showError(error, 'Виберіть місто');
        return false;
    }

    localStorage.setItem('city', city.value);

    hideError(error);
    return true;
}

function validateTerms() {
    const error = checkbox.closest('label').querySelector('[data-error]');

    if (!checkbox.checked) {
        showError(error, 'Потрібно погодитися з умовами');
        return false;
    }

    localStorage.setItem('terms', checkbox.checked);

    hideError(error);
    return true;
}

function loadFormData() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    const savedPasswordRepeat = localStorage.getItem('passwordRepeat');
    const savedAge = localStorage.getItem('age');
    const savedCity = localStorage.getItem('city');
    const savedCheckbox = localStorage.getItem('terms');

    if (savedEmail !== null) {
        email.value = savedEmail;
    }

    if (savedPassword !== null) {
        password.value = savedPassword;
    }

    if (savedPasswordRepeat !== null) {
        passwordRepeat.value = savedPasswordRepeat;
    }

    if (savedAge !== null) {
        age.value = savedAge;
    }

    if (savedCity !== null) {
        city.value = savedCity;
    }

    if (savedCheckbox !== null) {
        checkbox.checked = savedCheckbox === 'true';
    }
}

form.addEventListener('click', function (event) {

    const button = event.target.closest('[data-button-show-hide]');

    if (!button) return;

    const container = button.closest('[data-password-container]');
    const input = container.querySelector('input');
    const image = button.querySelector('img');

    if (input.type === 'password') {

        input.type = 'text';
        image.src = 'images/show.png';

    } else {

        input.type = 'password';
        image.src = 'images/hide.png';

    }
});

email.addEventListener('focusout', function () {
    validateEmail();
});

password.addEventListener('focusout', function () {
    validatePassword();
});

passwordRepeat.addEventListener('focusout', function () {
    validateConfirmPassword();
});

age.addEventListener('focusout', function () {
    validateAge();
});

city.addEventListener('focusout', function () {
    validateCity();
});

checkbox.addEventListener('change', function () {
    validateTerms();
});

form.addEventListener('submit', function (event) {

    event.preventDefault();

    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmPasswordValid = validateConfirmPassword();
    const ageValid = validateAge();
    const cityValid = validateCity();
    const termsValid = validateTerms();

    if (!emailValid) {
        email.focus();
        return;
    }

    if (!passwordValid) {
        password.focus();
        return;
    }

    if (!confirmPasswordValid) {
        passwordRepeat.focus();
        return;
    }

    if (!ageValid) {
        age.focus();
        return;
    }

    if (!cityValid) {
        city.focus();
        return;
    }

    if (!termsValid) {
        checkbox.focus();
        return;
    }

    json.textContent = ''

    const data = {
        email: email.value,
        password: password.value,
        passwordRepeat: passwordRepeat.value,
        age: age.value,
        city: city.value,
        terms: checkbox.checked
    };

    json.textContent = JSON.stringify(data)

    console.log(data);
});

cleanBtn.addEventListener('click', function (event) {

    event.preventDefault();

    form.reset();
    localStorage.clear();
    json.textContent = '';

    const errors = form.querySelectorAll('[data-error]');

    errors.forEach(function (error) {
        hideError(error);
    });

    const images = form.querySelectorAll(
        '[data-button-show-hide] img'
    );

    images.forEach(function (image) {
        image.src = 'images/hide.png';
    });

    const passwordInputs = form.querySelectorAll(
        '[data-password-container] input'
    );

    passwordInputs.forEach(function (input) {
        input.type = 'password';
    });
});


loadFormData();