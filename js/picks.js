document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("matchupsContainer");
  const submitBtn = document.getElementById("submitPickBtn");

  // Load matchups from admin page (localStorage)
  const matchups = JSON.parse(localStorage.getItem("matchups")) || [];

  let selectedTeam = null;
  container.innerHTML = ""; // clear container

  if (matchups.length === 0) {
    container.innerHTML = "<p>No matchups available. Please check back later.</p>";
    submitBtn.disabled = true;
    return;
  }

  // Build matchup buttons
  matchups.forEach(({ home, away, spread }) => {
    const row = document.createElement("div");
    row.classList.add("matchup-row");

    const homeBtn = document.createElement("button");
    homeBtn.textContent = `${home} (${spread})`;
    homeBtn.classList.add("team-btn");

    const vsLabel = document.createElement("span");
    vsLabel.textContent = "@";

    const awayBtn = document.createElement("button");
    awayBtn.textContent = away;
    awayBtn.classList.add("team-btn");

    [homeBtn, awayBtn].forEach((btn) => {
      btn.addEventListener("click", () => {
        // Clear other selections
        document.querySelectorAll(".team-btn").forEach((b) => b.classList.remove("selected"));
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
    alert(`✅ You picked: ${
