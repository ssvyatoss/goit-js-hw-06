const emailInput = document.querySelector('.login-form');
// const emailEmail = document.querySelector('[type="email"]')

emailInput.addEventListener('submit', handleSubmit);

function handleSubmit (ev) {
    ev.preventDefault();
    const {
        elements: {email, password} 
    } = ev.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert("Alert! Please fill in all the fields!");
    }

    var obj = {email: email.value, password: password.value};
    console.log(obj);
    ev.currentTarget.reset();
}

