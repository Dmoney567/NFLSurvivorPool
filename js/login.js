document.addEventListener("DOMContentLoaded", () => {
  // Hardcoded list of admin emails
  const adminEmails = ["dominic.ateek@yahoo.com", "kroifyatoma@yahoo.com"];

  // Login form submit handler
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    // Retrieve saved users from localStorage (from signup)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const validUser = users.find(
      (user) => user.username === email && user.password === password
    );

    if (!validUser && !adminEmails.includes(email)) {
      alert("❌ Invalid credentials. Please try again or sign up.");
      return;
    }

    // Save the current user email in localStorage
    localStorage.setItem("currentUserEmail", email);

    alert(`✅ Logged in as ${email}`);

    // Redirect based on user type
    if (adminEmails.includes(email)) {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });
});
