# My CodeHS Arcade

A personal collection of **JavaScript Graphics** games—original projects and remixes—playable in the browser from one lobby.

## Play locally

Serve the folder with any static file server, then open the lobby:

```bash
# Python 3
python3 -m http.server 8080

# or npx
npx serve .
```

Visit [http://localhost:8080](http://localhost:8080) and pick a game.

Games run via the official [chs-js-lib](https://codehs.github.io/chs-js-lib/) (same APIs as the CodeHS IDE: `Circle`, `WebImage`, `setTimer`, `readLine`, etc.).

CodeHS-hosted images are mirrored under `assets/img/` so games work off localhost/GitHub Pages without CORS errors (`js/local-assets.js` rewrites those URLs automatically).

## Layout

| Path | Purpose |
|------|---------|
| `index.html` | Arcade lobby — browse and launch games |
| `play.html?game=<id>` | Player page (e.g. `play.html?game=avalanche`) |
| `games/*.js` | Playable copies of each project |
| `Avalanche`, `FruitNinja`, … | Original source files (unchanged) |

## Games (17)

Avalanche, Asteroids, Balloon Pop, Bubble Blaster, Bug Hunt, Cherry Picking, Click Target, CraZ Ball, Dragway, Fruit Ninja, Helicopter, Hit the Mole, Kickups, Line Cross, Lockdown Star, Mouse Catcher, Plane Shooter, Reaction Click.

## Deploy

Push to GitHub and enable **GitHub Pages** on the repo root (or `/docs` if you prefer). No build step required.
