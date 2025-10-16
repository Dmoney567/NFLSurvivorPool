const games = [
    {home: 'Packers', away: 'Bears'},
    {home: 'Cowboys', away: 'Giants'},
    {home: 'Chiefs', away: 'Raiders'},
];

const tbody = document.querySelector('#gamesTable tbody');

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

document.getElementById('submitPick').addEventListener('click', () => {
    const picks = games.map((game, i) => document.getElementById(`pick${i}`).value);
    if(picks.includes("")) {
        document.getElementById('pickMessage').textContent = "Please pick a team for all games!";
    } else {
        document.getElementById('pickMessage').textContent = `Your picks: ${picks.join(", ")}`;
    }
});

