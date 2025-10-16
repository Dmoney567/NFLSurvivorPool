document.getElementById('loginBtn').addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Logged in as ${email} (demo, no backend yet)`);
    window.location.href = 'dashboard.html';
});

document.getElementById('registerBtn').addEventListener('click', () => {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    alert(`Registered as ${email} (demo, no backend yet)`);
    window.location.href = 'dashboard.html';
});

