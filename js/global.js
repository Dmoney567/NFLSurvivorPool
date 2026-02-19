document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  // Get logged-in user once at the top
  const loggedInUser = localStorage.getItem("currentUserEmail");

  // Hide logout button if no one is logged in
  if (!loggedInUser && logoutBtn) {
    logoutBtn.style.display = "none";
  }

  // Make logout button work if it exists
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

  // Redirect protection: block access to pages if not logged in
  const protectedPages = ["dashboard.html", "picks.html", "standings.html", "admin.html"];
  const currentPage = window.location.pathname.split("/").pop();

  if (protectedPages.includes(currentPage) && !loggedInUser) {
    alert("Please log in first.");
    window.location.href = "index.html";
  }
});

(function highlightActiveSidebarLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";

  // Grab all sidebar links
  const links = document.querySelectorAll(".sidebar a[href]");
  links.forEach((a) => {
    const href = (a.getAttribute("href") || "").split("/").pop();

    // match exact file name (dashboard.html, picks.html, etc.)
    if (href === current) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    } else {
      a.classList.remove("active");
      a.removeAttribute("aria-current");
    }
  });
})();

