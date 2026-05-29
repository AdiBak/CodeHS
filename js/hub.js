const grid = document.getElementById("game-grid");
const search = document.getElementById("search");
const filters = document.querySelectorAll(".filter-chip");
const countEl = document.getElementById("game-count");

let activeGenre = "all";

function renderCard(game) {
  const card = document.createElement("a");
  card.className = "game-card";
  card.href = `play.html?game=${game.id}`;
  card.style.setProperty("--accent", game.accent);
  const rulesHtml = game.rules
    .map((r) => `<li>${r}</li>`)
    .join("");
  card.innerHTML = `
    <span class="game-card__genre">${game.genre}</span>
    <h3 class="game-card__title">${game.title}</h3>
    <p class="game-card__tagline">${game.tagline}</p>
    <ul class="game-card__rules">${rulesHtml}</ul>
    <span class="game-card__controls">${game.controls}</span>
    <span class="game-card__play">Play →</span>
  `;
  return card;
}

function filteredGames() {
  const q = search.value.trim().toLowerCase();
  return GAMES.filter((g) => {
    const genreOk = activeGenre === "all" || g.genre === activeGenre;
    const text = `${g.title} ${g.tagline} ${g.genre} ${g.rules.join(" ")}`.toLowerCase();
    const searchOk = !q || text.includes(q);
    return genreOk && searchOk;
  });
}

function render() {
  const list = filteredGames();
  grid.replaceChildren(...list.map(renderCard));
  countEl.textContent =
    list.length === GAMES.length
      ? `${GAMES.length} games`
      : `${list.length} of ${GAMES.length} games`;
}

search.addEventListener("input", render);

filters.forEach((chip) => {
  chip.addEventListener("click", () => {
    filters.forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeGenre = chip.dataset.genre;
    render();
  });
});

render();
