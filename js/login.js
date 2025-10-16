// Global variable to store current logged-in email (demo)
let currentUserEmail = "";

// Hardcoded list of admin emails
const adminEmails = ["dominic.ateek@yahoo.com", "youremail@example.com"];

// Login button
document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value; 

    currentUserEmail = email; // save the email 

    alert(`Logged in as ${email} (demo, no backend yet)`);

    // Redirect based on admin or regular user
    if(adminEmails.includes(email)){
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'dashboard.html';
    }
});

// Register button
document.getElementById('registerBtn').addEventListener('click', () => {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    currentUserEmail = email; // save the email

    alert(`Registered as ${email} (demo, no backend yet)`);

    // Redirect based on admin or regular user
    if(adminEmails.includes(email)){
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'dashboard.html';
    }
});
