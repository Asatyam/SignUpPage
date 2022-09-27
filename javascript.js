const form = document.querySelector('form');
form.addEventListener('submit', e => {
    const pass1 = document.querySelector('#password');
    const pass2 = document.querySelector('#Cpassword');
    const errorMsg = document.querySelector('#message');
    if (pass1 !== pass2) {
        e.preventDefault();
        pass1.classList.add('error');
        pass2.classList.add('error');
        errorMsg.style.display = 'block';
        errorMsg.innerHTML="Password not matching"
        errorMsg.style.color="red";

    }
});