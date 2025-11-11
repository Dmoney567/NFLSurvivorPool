// Create user into localStorage
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const password = document.getElementById("signupPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some(u => u.email === email)) {
    alert("An account with this email already exists.");
    return;
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  // Auto-login after signup
  localStorage.setItem("loggedInUser", username);

  // Send to Pools to create/join a pool
  window.location.href = "pools.html";
});
