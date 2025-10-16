const standings = [
    {player: 'Alice', wins: 2, losses: 0, status: 'Active'},
    {player: 'Bob', wins: 1, losses: 1, status: 'Active'},
    {player: 'Charlie', wins: 0, losses: 2, status: 'Eliminated'},
];

const tbodyStandings = document.querySelector('#standingsTable tbody');

standings.forEach(s => {  
    const row = document.createElement('tr');
    row.innerHTML = `<td>${s.player}</td><td>${s.wins}</td><td>${s.losses}</td><td>${s.status}</td>`;
    tbodyStandings.appendChild(row);
});

