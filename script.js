

const loginBtn = document.getElementById('login-btn');
const email = document.getElementById('email');
const password = document.getElementById('password');


loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if(email.value === 'mohammadrobin636@gmail.com' && password.value === '12345678') {
        console.log('valid');
    } else {
        console.log('Invalid');
    }
});