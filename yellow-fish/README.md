This project started as a take-home front-end exercise based on a provided Figma design. I later iterated on it using reviewer feedback, focusing on semantic HTML, accessibility (keyboard focus states), and robustness (local vendoring of dependencies).

# Junior Front End Developer – Technical Task

## Project Overview
This is a front-end implementation of the LG internal learning platform page based on the supplied Figma design.

What the repo includes:

- A recreation of the page 1 figma design
- Nav icons 
- Breadcrumb Menu
- Product Features slider component
- Learning Progress tracking component
- AI feature in the same style as figma design
- Responsive styling
- Curry's footer and logo integration

---

## Running the Project Locally
### Simple

Open the unzipped project folder and double-click `yellow-fish.html` to open it in your default browser.

### Via terminal

1. Unzip the `yellow-fish.zip` file.
2. Open the project folder in VS Code.
3. Open a new terminal:
   - VS Code → Terminal → New Terminal
4. Navigate to the project root folder (if needed).
5. Open the page in your browser (run one of the following):

```sh
open -a "Arc" yellow-fish.html
open -a "Google Chrome" yellow-fish.html
open -a "Safari" yellow-fish.html
open -a "Firefox" yellow-fish.html
```

### Optional: run a local server
Some browsers apply extra restrictions when opening local files directly. If you run into any issues, run a quick local server:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/yellow-fish.html`.

---

## Assumptions / Tradeoffs
- The design brief asks you to treat Figma as the main reference; where copy or interaction details were not fully defined, I aimed for simple, clear, on-brief content.
- Kept the build framework-free (vanilla HTML/CSS/JS) to match the “keep it simple” guidance.
- Prioritised accessibility basics (skip link, clear headings, `aria-*`, and visible `:focus-visible` styles).
- Vendored Swiper locally under `vendor/swiper/` to avoid relying on an external CDN.

## Pre-submit Checklist (for future take-homes)
- Validate HTML structure (catch unclosed tags / mis-nesting).
- Keyboard test: tab through all interactive elements; ensure visible focus states.
- Responsive check: mobile → tablet → desktop (no overflow / clipped content).
- “Offline” test: reload once with the network disabled (catch CDN-only dependencies).
- Scan for placeholder copy and swap for simple, on-brief text (or note assumptions clearly).
