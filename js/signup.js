document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("newEmail").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();
 
    if (!firstName || !lastName || !phoneNumber || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirm) {
      alert("❌ Passwords do not match!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === email)) {
      alert("⚠️ This email is already registered. Try logging in.");
      return;
    }

    // Save new user
    users.push({ firstName, lastName, phoneNumber, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Account created successfully!");
    window.location.href = "index.html";
  });
});
