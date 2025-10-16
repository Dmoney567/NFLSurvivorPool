document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  // If a logout button exists on this page, make it work
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const confirmed = confirm("Are you sure you want to log out?");
      if (confirmed) {
        localStorage.removeItem("currentUserEmail");
        alert("You have been logged out.");
        window.location.href = "index.html";
      }
    });
  }

  // Optional: Redirect if not logged in
  const protectedPages = ["dashboard.html", "picks.html", "standings.html", "admin.html"];
  const currentPage = window.location.pathname.split("/").pop();
  const loggedInUser = localStorage.getItem("currentUserEmail");

  if (protectedPages.includes(currentPage) && !loggedInUser) {
    alert("Please log in first.");
    window.location.href = "index.html";
