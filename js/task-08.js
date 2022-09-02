const emailInput = document.querySelector('.login-form');
// const emailEmail = document.querySelector('[type="email"]')

emailInput.addEventListener('submit', handleSubmit);

function handleSubmit (ev) {
    ev.preventDefault();
    const {
        elements: {email, password} 
    } = ev.currentTarget;

    if (email.value === '' || password.value === '') {
        return console.log("Alert! Please fill in all the fields!");
    }

    console.log(`Login: ${email.value}, Password: ${password.value}`);
    ev.currentTarget.reset();
}

