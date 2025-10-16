document.addEventListener("DOMContentLoaded", () => {
  // ✅ Require login
  const currentUser = localStorage.getItem("currentUserEmail");
  if (!currentUser) {
    alert("Please log in first.");
    window.location.href = "index.html";
    return;
  }

  // ✅ Show welcome message
  const welcomeMsg = document.getElementById("welcomeMessage");
  if (welcomeMsg) {
    welcomeMsg.textContent = `Welcome, ${currentUser}`;
  }

  // ✅ Example standings data (replace later with backend data)
  const standings = [
    { player: "Dominic Ateek", wins: 3, losses: 0 },
    { player: "Kroif Yatoma", wins: 2, losses: 1 },
    { player: "Luke Sesi", wins: 1, losses: 2 },
    { player: "SLOWMO", wins: 0, losses: 3 },
  ];

  // Sort standings by wins descending
  standings.sort((a, b) => b.wins - a.wins);

  const tbody = document.querySelector("#standingsTable tbody");
  if (!tbody) return; // Prevents "null" errors if table is missing

  // ✅ Populate table
  standings.forEach((player, index) => {
    const row = document.createElement("tr");

    const isCurrentUser = currentUser.toLowerCase().includes(
      player.player.toLowerCase().split(" ")[0]
    );

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.player}</td>
      <td>${player.wins}</td>
      <td>${player.losses}</td>
    `;

    if (isCurrentUser) {
      row.style.backgroundColor = "#e0f0ff";
      row.style.fontWeight = "bold";
    }

    tbody.appendChild(row);
  });
});
