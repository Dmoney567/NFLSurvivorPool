document.addEventListener("DOMContentLoaded", () => {
    // Example list of games
    const games = [
        { home: 'Packers', away: 'Bears' },
        { home: 'Cowboys', away: 'Giants' },
        { home: 'Chiefs', away: 'Raiders' },
    ];

    // Reference to the table body
    const tbody = document.querySelector('#gamesTable tbody');

    // Populate the table with games
    games.forEach((game, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${game.home}</td>
            <td>${game.away}</td>
            <td>
                <select id="pick${index}">
                    <option value="">Select</option>
                    <option value="${game.home}">${game.home}</option>
                    <option value="${game.away}">${game.away}</option>
                </select>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Handle pick submission
    document.getElementById('submitPick').addEventListener('click', () => {
        const picks = games.map((game, i) =>
            document.getElementById(`pick${i}`).value
        );

        const message = document.getElementById('pickMessage');

        if (picks.includes("")) {
            message.textContent = "Please pick a team for all games!";
            message.style.color = "red";
        } else {
            message.textContent = `✅ Your picks: ${picks.join(", ")}`;
            message.style.color = "green";

            // Save the user's first pick (to display on dashboard)
            localStorage.setItem('userPick', picks[0]);

            // Optional: redirect back to dashboard
            // window.location.href = "dashboard.html";
        }
    });
});
