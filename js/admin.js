document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("gamesTableBody");
  const addGameBtn = document.getElementById("addGameBtn");
  const saveGamesBtn = document.getElementById("saveGamesBtn");

  // Load saved games if available
  const savedGames = JSON.parse(localStorage.getItem("matchups")) || [];
  renderTable(savedGames);

  // Renders the matchup table
  function renderTable(games) {
    tableBody.innerHTML = "";
    games.forEach((game, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><input type="text" value="${game.home}" placeholder="Home Team"></td>
        <td><input type="text" value="${game.away}" placeholder="Away Team"></td>
        <td><input type="text" value="${game.spread}" placeholder="Spread (e.g., -3.5)"></td>
        <td><button class="deleteBtn" data-index="${index}">❌ Delete</button></td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Add a new matchup
  addGameBtn.addEventListener("click", () => {
    savedGames.push({ home: "", away: "", spread: "" });
    renderTable(savedGames);
    document.activeElement.blur(); // prevents Chrome focus warning
  });

  // Delete matchup
  tableBody.addEventListener("click", e => {
    if (e.target.classList.contains("deleteBtn")) {
      const idx = e.target.dataset.index;
      savedGames.splice(idx, 1);
      renderTable(savedGames);
    }
  });

  // Save all matchups to localStorage
  saveGamesBtn.addEventListener("click", () => {
    const updatedGames = [];
    tableBody.querySelectorAll("tr").forEach(row => {
      const inputs = row.querySelectorAll("input");
      const [home, away, spread] = [...inputs].map(i => i.value.trim());
      if (home && away) updatedGames.push({ home, away, spread });
    });

    localStorage.setItem("matchups", JSON.stringify(updatedGames));
    showSaveMessage();
  });

  // Success popup
  function showSaveMessage() {
    const msg = document.createElement("div");
    msg.textContent = "✅ Matchups saved successfully!";
    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.background = "#28a745";
    msg.style.color = "white";
    msg.style.padding = "10px 20px";
    msg.style.borderRadius = "8px";
    msg.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    msg.style.zIndex = "9999";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
  }
});
