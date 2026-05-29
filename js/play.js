(function () {
  const params = new URLSearchParams(window.location.search);
  const gameId = params.get("game");
  const selectedGame = GAMES.find((g) => g.id === gameId);

  const titleEl = document.getElementById("game-title");
  const taglineEl = document.getElementById("game-tagline");
  const controlsEl = document.getElementById("game-controls");
  const rulesEl = document.getElementById("game-rules");
  const tipsEl = document.getElementById("game-tips");
  const canvas = document.getElementById("game-canvas");
  const loader = document.getElementById("loader");
  const errorEl = document.getElementById("play-error");

  if (!selectedGame) {
    document.body.classList.add("play--missing");
    if (errorEl) {
      errorEl.hidden = false;
      errorEl.textContent = "Unknown game. Pick one from the arcade lobby.";
    }
    if (loader) loader.hidden = true;
    return;
  }

  document.title = `${selectedGame.title} · My CodeHS Arcade`;
  titleEl.textContent = selectedGame.title;
  taglineEl.textContent = selectedGame.tagline;
  controlsEl.textContent = selectedGame.controls;
  if (rulesEl) {
    rulesEl.innerHTML = selectedGame.rules.map((r) => `<li>${r}</li>`).join("");
  }
  if (tipsEl) {
    if (selectedGame.tips) {
      tipsEl.hidden = false;
      tipsEl.innerHTML = `<strong>Note</strong><br />${selectedGame.tips}`;
    } else {
      tipsEl.hidden = true;
      tipsEl.innerHTML = "";
    }
  }
  document.documentElement.style.setProperty("--accent", selectedGame.accent);

  const script = document.createElement("script");
  script.src = `games/${selectedGame.id}.js`;
  script.onload = () => {
    try {
      // CodeHS IDE defaults to a light canvas; games that want dark call setBackgroundColor in start().
      if (typeof setBackgroundColor === "function" && typeof Color !== "undefined") {
        setBackgroundColor(Color.white);
      }
      // CodeHS IDE appends this after user code; the CDN build does not.
      if (typeof start === "function") {
        start();
      }
    } catch (err) {
      console.error(err);
      errorEl.hidden = false;
      errorEl.textContent =
        err instanceof Error ? err.message : "This game failed to start.";
    }
    loader.hidden = true;
  };
  script.onerror = () => {
    loader.hidden = true;
    errorEl.hidden = false;
    errorEl.textContent = "Could not load this game. Check that the file exists.";
  };
  document.body.appendChild(script);

  document.getElementById("fullscreen-btn")?.addEventListener("click", () => {
    const wrap = document.getElementById("canvas-wrap");
    if (!document.fullscreenElement) {
      wrap.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  });
})();
