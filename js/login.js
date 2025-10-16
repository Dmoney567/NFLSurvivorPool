// Hardcoded list of admin emails
const adminEmails = ["dominic.ateek@yahoo.com", "youremail@example.com"];

// LOGIN BUTTON
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Save the current user email in localStorage
  localStorage.setItem("currentUserEmail", email);

  alert(`Logged in as ${email} (demo, no backend yet)`);

  // Redirect based on user type
  if (adminEmails.includes(email)) {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
});

// REGISTER BUTTON
document.getElementById("registerBtn").addEventListener("click", () => {
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  // Save the current user email in localStorage
  localStorage.setItem("currentUserEmail", email);

  alert(`Registered as ${email} (demo, no backend yet)`);

  // Redirect based on user type
  if (adminEmails.includes(email)) {
    window.location.href = "admin.html";
  } else {
    window.location.href = "dashboard.html";
  }
});
