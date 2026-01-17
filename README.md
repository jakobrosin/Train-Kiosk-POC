Train Ticket Kiosk Demo (Static)

This is a frontend-only, static kiosk demo that supports:
- Arrow keys to move
- Enter to confirm
- Backspace to go back
- R to repeat the last spoken prompt

It uses the browser's built-in speech synthesis (OS voices) when available.

Run options:

1) Quickest: open index.html in a browser.
   Note: Some browsers restrict speech autoplay. If speech does not start,
   press Enter once.

2) Recommended: serve the folder with any static server.
   Example (if you have node installed):
     npx serve

Files:
- index.html
- styles.css
- app.js
