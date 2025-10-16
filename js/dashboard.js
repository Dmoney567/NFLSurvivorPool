document.addEventListener("DOMContentLoaded", () => {
    // Retrieve logged-in user's email (if saved from login.js)
    const currentUserEmail = localStorage.getItem('currentUserEmail');

    // Greet the user
    const headerTitle = document.querySelector("header h1");
    if (currentUserEmail) {
        headerTitle.textContent = `Welcome, ${currentUserEmail}!`;
    } else {
        headerTitle.textContent = "Welcome, Guest!";
    }

    // Placeholder: Retrieve current pick (saved in localStorage)
    const savedPick = localStorage.getItem('userPick');
    const pickDisplay = document.getElementById('currentPick');

    if (savedPick) {
        pickDisplay.textContent = `You picked the ${savedPick} this week!`;
    } else {
        pickDisplay.textContent = "You haven't made a pick yet.";
    }
});
