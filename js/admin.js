document.addEventListener("DOMContentLoaded", () => {
  // Hardcoded list of admins
  const adminEmails = ["dominic.ateek@yahoo.com", "youremail@example.com"];

  // Get current user
  const currentUserEmail = localStorage.getItem("currentUserEmail");

  // Check authorization
  if (!adminEmails.includes(currentUserEmail)) {
    alert("You are not authorized to access this page!");
    window.location.href = "dashboard.html";
    return;
  }

  const tbody = document.querySelector("#adminGamesTable tbody");
  const addGameBtn = document.getElementById("addGameBtn");
  const saveGamesBtn = document.getElementById("saveGamesBtn");
  const messageEl = document.getElementById("adminMessage");

  // Load existing games if any
  let adminGames = JSON.parse(localStorage.getItem("weeklyGames")) || [
    { home: "Packers", away: "Bears", winner: "" },
    { home: "Cowboys", away: "Giants", winner: "" },
  ];

  // Function to render table
  function renderGames() {
    tbody.innerHTML = "";
    adminGames.forEach((game, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><input type="text" id="home${index}" value="${game.home}" placeholder="Home Team"></td>
        <td><input type="text" id="away${index}" value="${game.away}" placeholder="Away Team"></td>
        <td>
          <select id="winner${index}">
            <option value="">Select Winner</option>
            <option value="${game.home}">${game.home}</option>
            <option value="${game.away}">${game.away}</option>
          </select>
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  renderGames();

  // Add new game row
  addGameBtn.addEventListener("click", () => {
    adminGames.push({ home: "", away: "", winner: "" });
    renderGames();
  });

  // Save games to localStorage
  saveGamesBtn.addEventListener("click", () => {
    // Update array with current input values
    adminGames = adminGames.map((game, index) => ({
      home: document.getElementById(`home${index}`).value.trim() || "TBD",
      away: document.getElementById(`away${index}`).value.trim() || "TBD",
      winner: document.getElementById(`winner${index}`).value.trim(),
    }));

    localStorage.setItem("weeklyGames", JSON.stringify(adminGames));

    messageEl.textContent = "✅ Games saved successfully! They will appear on the Picks page.";
    messageEl.style.color = "green";
  });
});
