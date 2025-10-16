document.addEventListener("DOMContentLoaded", () => {
  // Hardcoded list of admin emails
  const adminEmails = ["dominic.ateek@yahoo.com", "kroifyatoma@yahoo.com"];

  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!validUser && !adminEmails.includes(email)) {
      alert("❌ Invalid credentials. Please try again or sign up.");
      return;
    }

    // Save logged-in user info
    localStorage.setItem("currentUserEmail", email);

    // Store first name for personalized greeting
    if (validUser && validUser.firstName) {
      localStorage.setItem("currentUserFirstName", validUser.firstName);
    }

    alert(`✅ Logged in as ${email}`);

    if (adminEmails.includes(email)) {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  });
});
