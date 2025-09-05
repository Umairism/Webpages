document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById('firstname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Validation flags
    let valid = true;

    // Validate first name
    if (firstName.length < 2) {
        alert('First name must be at least 2 characters long.');
        valid = false;
    }

    // Validate email using regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    // Validate password length
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        valid = false;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        valid = false;
    }

    // If all validations pass, submit the form (you can replace this with actual registration logic)
    if (valid) {
        alert('Registration successful!');
        this.submit();
    }
});