document.addEventListener("DOMContentLoaded", () => {
  // Hardcoded list of admins (must match login.js)
  const adminEmails = ["dominic.ateek@yahoo.com", "youremail@example.com"];

  // Retrieve logged-in user email (saved from login.js)
  const currentUserEmail = localStorage.getItem("currentUserEmail");

  // Check if user is authorized to access admin page
  if (!adminEmails.includes(currentUserEmail)) {
    alert("You are not authorized to access this page!");
    window.location.href = "dashboard.html"; // redirect non-admins
    return;
  }

  // Placeholder admin games
  const adminGames = [
    { home: "Packers", away: "Bears", winner: "" },
    { home: "Cowboys", away: "Giants", winner: "" },
  ];

  const tbodyAdmin = document.querySelector("#adminGamesTable tbody");

  if (!tbodyAdmin) {
    console.error("Admin table not found.");
    return;
  }

  adminGames.forEach((game, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${game.home}</td>
        <td>${game.away}</td>
        <td>
          <select id="winner${index}">
            <option value="">Select Winner</option>
            <option value="${game.home}">${game.home}</option>
            <option value="${game.away}">${game.away}</option>
          </select>
        </td>
        <td><button id="updateBtn${index}">Update</button></td>
      `;
    tbodyAdmin.appendChild(row);

    document
      .getElementById(`updateBtn${index}`)
      .addEventListener("click", () => updateWinner(index));
  });

  function updateWinner(index) {
    const winner = document.getElementById(`winner${index}`).value;
    const messageEl = document.getElementById("adminMessage");

    if (winner === "") {
      messageEl.textContent = "Please select a winner.";
      messageEl.style.color = "red";
    } else {
      adminGames[index].winner = winner;
      messageEl.textContent = `✅ Updated winner: ${winner}`;
      messageEl.style.color = "green";
    }
  }
});
