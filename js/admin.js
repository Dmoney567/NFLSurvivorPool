const tableBody = document.getElementById("gamesTableBody");
const addGameBtn = document.getElementById("addGameBtn");
const saveGamesBtn = document.getElementById("saveGamesBtn");

// Load saved games if available
const savedGames = JSON.parse(localStorage.getItem("matchups")) || [];
renderTable(savedGames);

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

addGameBtn.addEventListener("click", () => {
  savedGames.push({ home: "", away: "", spread: "" });
  renderTable(savedGames);
});

tableBody.addEventListener("click", e => {
  if (e.target.classList.contains("deleteBtn")) {
    const idx = e.target.dataset.index;
    savedGames.splice(idx, 1);
    renderTable(savedGames);
  }
});

saveGamesBtn.addEventListener("click", () => {
  const updatedGames = [];
  tableBody.querySelectorAll("tr").forEach(row => {
    const inputs = row.querySelectorAll("input");
    const [home, away, spread] = [...inputs].map(i => i.value.trim());
    if (home && away) updatedGames.push({ home, away, spread });
  });

  localStorage.setItem("matchups", JSON.stringify(updatedGames));
  alert("✅ Matchups saved successfully!");
});
