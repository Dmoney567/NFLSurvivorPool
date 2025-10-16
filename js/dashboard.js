document.addEventListener("DOMContentLoaded", () => {
  // Check if user is logged in
  const currentUser = localStorage.getItem("currentUserEmail");
  if (!currentUser) {
    alert("Please log in first.");
    window.location.href = "index.html";
    return;
  }

  // Display personalized welcome
  const welcomeMsg = document.getElementById("welcomeMessage");
  welcomeMsg.textContent = `Welcome, ${currentUser.split("@")[0]}! 👋`;

  // Logout button clears localStorage and redirects
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("currentUserEmail");
    alert("You’ve been logged out.");
    window.location.href = "index.html";
  });
});
