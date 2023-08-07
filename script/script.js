const logregBox = document.querySelector('.logreg-box');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const phShowHide = document.querySelectorAll('#phHide');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

phShowHide.forEach((icon) => {
    icon.addEventListener('click', () => {
        let getPassInput = icon.parentElement.querySelector('input');
        if (getPassInput.type === 'password') {
            getPassInput.type = 'text';
            icon.classList.replace('uil-eye-slash', 'uil-eye');
        } else {
            getPassInput.type = 'password';
            icon.classList.replace('uil-eye', 'uil-eye-slash');
        }
    });
});