const adminGames = [
    {home: 'Packers', away: 'Bears', winner: ''},
    {home: 'Cowboys', away: 'Giants', winner: ''},
];

const tbodyAdmin = document.querySelector('#adminGamesTable tbody');

adminGames.forEach((game, index) => {
    const row = document.createElement('tr');
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
        <td><button onclick="updateWinner(${index})">Update</button></td>
    `;
    tbodyAdmin.appendChild(row);
});

function updateWinner(index){
    const winner = document.getElementById(`winner${index}`).value;
    if(winner === ""){
        document.getElementById('adminMessage').textContent = "Please select a winner.";
    } else {
        adminGames[index].winner = winner;
        document.getElementById('adminMessage').textContent = `Updated winner: ${winner}`;
    }
}

