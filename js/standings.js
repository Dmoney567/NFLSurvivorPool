document.addEventListener("DOMContentLoaded", () => {
    // Example standings data (replace with real data later)
    const standings = [
        { player: "Dominic Ateek", wins: 3, losses: 0 },
        { player: "Kroif Yatoma", wins: 2, losses: 1 },
        { player: "Luke Sesi", wins: 1, losses: 2 },
        { player: "SLOWMO", wins: 0, losses: 3 },
    ];

    const tbody = document.querySelector("#standingsTable tbody");

    // Sort by wins (descending)
    standings.sort((a, b) => b.wins - a.wins);

    // Populate table
    standings.forEach((player, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.player}</td>
            <td>${player.wins}</td>
            <td>${player.losses}</td>
        `;
        tbody.appendChild(row);
    });
});
