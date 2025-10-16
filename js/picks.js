// Example matchups for the week (you'll later load this from your admin page)
const matchups = [
  { home: "Lions", away: "Packers", spread: "-3.5" },
  { home: "Chiefs", away: "Broncos", spread: "-7" },
  { home: "Bills", away: "Dolphins", spread: "-2.5" },
  { home: "49ers", away: "Cowboys", spread: "-4" },
  { home: "Eagles", away: "Giants", spread: "-5.5" },
  { home: "Ravens", away: "Steelers", spread: "-3" },
  { home: "Bengals", away: "Browns", spread: "-2" },
  { home: "Vikings", away: "Bears", spread: "-1.5" }
];

const container = document.getElementById("matchupsContainer");
const submitBtn = document.getElementById("submitPickBtn");
let selectedTeam = null;

// Build matchup rows
matchups.forEach(({ home, away, spread }) => {
  const row = document.createElement("div");
  row.classList.add("matchup-row");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = home;
  homeBtn.classList.add("team-btn");

  const vsLabel = document.createElement("span");
  vsLabel.textContent = ` @ ${away} (${spread})`; // shows " @ Tea
