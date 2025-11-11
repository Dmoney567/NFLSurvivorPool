// Simple localStorage login with admin support
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  // List of admin emails (add or remove as needed)
  const adminEmails = [
    "dominic.ateek@yahoo.com", // example — replace with your actual one
    "kroifyatoma@yahoo.com"
  ];

  if (!user) {
    alert("Invalid email or password.");
    return;
  }

  // Save session info
  localStorage.setItem("loggedInUser", user.username || email);
  localStorage.setItem("loggedInEmail", email);

  // Check if admin
  const isAdmin = adminEmails.includes(email);
  localStorage.setItem("isAdmin", isAdmin);

  // Redirects
  if (isAdmin) {
    alert(`Welcome back, Admin ${user.username}!`);
    window.location.href = "admin.html";
  } else {
    const currentPoolId = localStorage.getItem("currentPoolId");
    window.location.href = currentPoolId ? "dashboard.html" : "pools.html";
  }
});
