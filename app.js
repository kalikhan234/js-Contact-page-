const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Reset messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Validate the form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let valid = true;

    // Name validation (not empty)
    if (name.value.trim() === "") {
        valid = false;
        name.setCustomValidity("Please enter your name.");
    } else {
        name.setCustomValidity("");
    }

    // Email validation (valid email format)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        email.setCustomValidity("Please enter a valid email address.");
    } else {
        email.setCustomValidity("");
    }

    // Message validation (not empty)
    if (message.value.trim() === "") {
        valid = false;
        message.setCustomValidity("Please enter your message.");
    } else {
        message.setCustomValidity("");
    }

    // Show error or success message
    if (valid) {
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.opacity = 0;
            setTimeout(() => successMessage.style.display = 'none', 300);
        }, 2000);
    } else {
        errorMessage.style.display = 'block';
    }

    // Inform the user of validation error if present
    name.reportValidity();
    email.reportValidity();
    message.reportValidity();
});