// Example matchups for the week
const matchups = [
  { home: "Lions", away: "Packers" },
  { home: "Chiefs", away: "Broncos" },
  { home: "Bills", away: "Dolphins" },
  { home: "49ers", away: "Cowboys" },
  { home: "Eagles", away: "Giants" },
  { home: "Ravens", away: "Steelers" },
  { home: "Bengals", away: "Browns" },
  { home: "Vikings", away: "Bears" }
];

const container = document.getElementById("matchupsContainer");
const submitBtn = document.getElementById("submitPickBtn");
let selectedTeam = null;

// Build matchup buttons
matchups.forEach(({ home, away }) => {
  const row = document.createElement("div");
  row.classList.add("matchup-row");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = home;
  homeBtn.classList.add("team-btn");

  const vsLabel = document.createElement("span");
  vsLabel.textContent = "vs";

  const awayBtn = document.createElement("button");
  awayBtn.textContent = away;
  awayBtn.classList.add("team-btn");

  [homeBtn, awayBtn].forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove all other selections
      document.querySelectorAll(".team-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedTeam = btn.textContent;
      submitBtn.disabled = false;
    });
  });

  row.appendChild(homeBtn);
  row.appendChild(vsLabel);
  row.appendChild(awayBtn);
  container.appendChild(row);
});

submitBtn.addEventListener("click", () => {
  if (!selectedTeam) return;
  alert(`You picked: ${selectedTeam}`);
  submitBtn.disabled = true;
  document.querySelectorAll(".team-btn").forEach(b => (b.disabled = true));
});
