# Train Kiosk POC

A proof-of-concept interactive demo showcasing keyboard navigation logic and accessibility features for train ticket kiosks.

**[▶️ Run Demo](https://jakobrosin.github.io/Train-Kiosk-POC/)**

## About This Project

This project demonstrates the fundamental keyboard navigation patterns and user interaction flows for accessible self-service kiosks. It is designed as a **proof of concept** to showcase intended features and interaction logic, particularly for users who rely on keyboard navigation and screen readers.

**Important:** This is not a production-ready application. It is intended to demonstrate specific accessibility concepts and interaction patterns, not to be a fully functional or comprehensively accessible ticketing system.

## Key Features

### Keyboard Navigation
- **Arrow keys** for menu navigation (Up/Down to move, Left/Right for adjustments)
- **Enter** to select options
- **Backspace** to return to previous screens
- **R** to repeat the last spoken message

### Bilingual Support
- Full Estonian and English language support
- Finnish text-to-speech for Estonian (due to limited Estonian TTS availability)
- Proper Estonian grammatical cases for station names

### Accessibility Features Demonstrated
- Text-to-speech announcements for all interactions
- Progressive instruction system (detailed instructions fade as user gains familiarity)
- Clear visual focus indicators
- High contrast UI with WCAG-compliant color ratios
- Touch-friendly button sizes (WCAG 2.2 compliant)
- Minimal animations with `prefers-reduced-motion` support
- Screen reader compatible with ARIA labels

### User Flow
1. Language selection (English/Estonian)
2. Ticket purchase journey:
   - Departure and arrival station selection
   - One-way or round-trip ticket choice
   - Date and time selection for journeys
   - Ticket type and quantity selection (Adult, Student, Senior, Child)
   - Order review with visual route map
   - Payment simulation
   - Navigation directions to platform

### Additional Features
- Video call to station staff (simulated)
- Visual route map with train schedule information
- Platform navigation instructions for visually impaired users
- Sound effects for user feedback
- Transaction cancellation at any step

## Technical Stack

- **Pure HTML, CSS, and JavaScript** (no frameworks)
- **Web Speech API** for text-to-speech
- **Web Audio API** for sound effects
- **Responsive design** for various screen sizes
- **Static deployment ready** (no backend required)

## Installation & Usage

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/jakobrosin/Train-Kiosk-POC.git
   cd Train-Kiosk-POC
   ```

2. Open `index.html` in a modern web browser:
   ```bash
   open index.html
   # or
   python -m http.server 8000  # then visit http://localhost:8000
   # or
   npx serve
   ```

3. Ensure your browser has text-to-speech enabled and unmuted

**Note:** Some browsers restrict speech autoplay. If speech does not start automatically, press Enter once to activate it.

### Browser Requirements

- Modern browser with Web Speech API support (Chrome, Edge, Safari)
- JavaScript enabled
- Audio enabled for text-to-speech and sound effects

## Credits

**Created by:** Jakob Rosin
**Website:** [ligipääsuke.ee](https://ligipääsuke.ee)
**Email:** jakob@ligipaasuke.ee
**Purpose:** Accessibility demonstration and proof of concept

## License

This project is intended for demonstration and educational purposes.

## Feedback & Contact

For questions or feedback about this demo, please contact Jakob Rosin at [jakob@ligipaasuke.ee](mailto:jakob@ligipaasuke.ee) or visit [ligipääsuke.ee](https://ligipääsuke.ee).
