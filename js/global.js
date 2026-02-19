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
  const protectedPages = [
    "dashboard.html",
    "picks.html",
    "standings.html",
    "admin.html",
    "pools.html",
    "createPool.html",
    "joinPool.html",
    "managePool.html"
  ];

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  if (protectedPages.includes(currentPage) && !loggedInUser) {
    alert("Please log in first.");
    window.location.href = "index.html";
    return;
  }

  // =============================
  // Hide Admin link if not admin
  // (applies to ALL pages)
  // =============================
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const adminLink = document.querySelector('.sidebar a[href="admin.html"]');
  if (!isAdmin && adminLink) adminLink.style.display = "none";

  // =============================
  // Highlight active sidebar link
  // (applies to ALL pages)
  // =============================
  const links = document.querySelectorAll(".sidebar a[href]");
  links.forEach((a) => {
    const href = (a.getAttribute("href") || "").split("/").pop();

    if (href === currentPage) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    } else {
      a.classList.remove("active");
      a.removeAttribute("aria-current");
    }
  });
});
