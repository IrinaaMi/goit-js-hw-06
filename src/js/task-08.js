const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
const user = {};

function onFormSubmit(event) {
    event.preventDefault();


    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;
    if (email.value === "" || password.value === "") {
        alert('All fields must be filled');
    } else {
        user.email = email.value;
        user.password = password.value;
        console.log(user);
    }
    event.currentTarget.reset();
}