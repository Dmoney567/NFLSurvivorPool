document.addEventListener("DOMContentLoaded", () => {
  // Remove autofocus warning (harmless, but silenced)
  document.activeElement.blur();

  const form = document.getElementById("signupForm");
  if (!form) return; // Prevents errors if form not found

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("newEmail").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Basic validation
    if (!firstName || !lastName || !phoneNumber || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    // Simple phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber.replace(/\D/g, ""))) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (password !== confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    if (users.some((user) => user.email === email)) {
      alert("⚠️ This email is already registered. Try logging in.");
      return;
    }

    // Save new user data
    const newUser = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert(`✅ Account created successfully! Welcome, ${firstName}!`);
    window.location.href = "index.html";
  });
});
