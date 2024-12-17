// Open Profile Modal
document.getElementById('profileLink').addEventListener('click', function() {
    document.getElementById('profileModal').style.display = 'flex';
});

// Close Profile Modal by clicking the Close Button or outside the modal
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('profileModal').style.display = 'none';
});

// Close the modal if clicked outside of it
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('profileModal')) {
        document.getElementById('profileModal').style.display = 'none';
    }
});

// Handle login button click
document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert('Login successful');
        document.getElementById('profileModal').style.display = 'none';
    } else {
        alert('Please fill in both fields');
    }
});

// Change modal heading when Sign Up link is clicked
document.getElementById('signupLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('modalHeading').textContent = 'Sign Up';
    document.getElementById('loginBtn').textContent = 'Sign Up';
});
