document.addEventListener("DOMContentLoaded", () => {
  // Hardcoded list of admin emails
  const adminEmails = ["dominic.ateek@yahoo.com", "kroifyatoma@yahoo.com"];

  // Get the login form
  const form = document.getElementById("loginForm");
  if (!form) return; // Prevents errors if form isn't found

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Retrieve saved users (from signup)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const validUser = users.find(
      (user) =>
        (user.username === email || user.email === email) &&
        user.password === password
    );

    // Reject if not found and not an admin
    if (!validUser && !adminEmails.includes(email)) {
      alert("❌ Invalid credentials. Please try again or sign up.");
      return;
    }

    // Save current user
    localStorage.setItem("currentUserEmail", email);

    alert(`✅ Logged in as ${email}`);

    // Redirect based on role
    if (adminEmails.includes(email)) {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });
});
