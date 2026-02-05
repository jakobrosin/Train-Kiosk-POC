# Train Kiosk POC

An interactive demo of accessible train ticket kiosk design.

**[Try the demo](https://jakobrosin.github.io/Train-Kiosk-POC/)**

## What is this?

A proof-of-concept showing how self-service kiosks can be made accessible through keyboard navigation, text-to-speech, and clear visual design. In a real-world situation, one would access the self-service kiosk interface via a dedicated hardware keypad attached to the kiosk, not via a web interface on their computer.

**Not production software** — it's a demonstration tool.

## Keyboard Controls

| Key | Action |
|-----|--------|
| ↑ ↓ | Navigate menu |
| ← → | Adjust values (date, time, quantity) |
| Enter | Select |
| Backspace | Go back |
| R | Repeat last message |
| S | Toggle text-to-speech |
| C | Toggle high contrast |
| H | Open help |
| +/- | Adjust text size |

## Features

- **Bilingual** — English and Estonian (uses Finnish TTS for Estonian)
- **Full ticket flow** — station selection, date/time, ticket types, payment simulation
- **Text-to-speech** — all interactions announced
- **Sound feedback** — distinct UI sounds for different actions
- **High contrast mode** — for low vision users
- **Adjustable text size** — press +/- from any screen
- **Platform directions** — navigation instructions after purchase

## Tech

Pure HTML/CSS/JavaScript. No frameworks, no build step, no backend. Uses Web Speech API and Web Audio API.

## Run locally

```bash
git clone https://github.com/jakobrosin/Train-Kiosk-POC.git
cd Train-Kiosk-POC
open index.html
```

Or use `python -m http.server 8000` / `npx serve`.

## Contact

**Jakob Rosin**
[ligipääsuke.ee](https://ligipääsuke.ee) · jakob@ligipaasuke.ee
