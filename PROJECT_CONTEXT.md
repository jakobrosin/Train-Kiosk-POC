# Project Context & Development Notes

## Overview

This is a **proof-of-concept (POC)** interactive demo of an accessible train ticket kiosk system. Created by Jakob Rosin (jakob@ligipaasuke.ee, ligipääsuke.ee).

**Important:** This is NOT intended to be a production-ready, fully accessible system. It's a demonstration tool to showcase specific accessibility concepts, interaction patterns, and keyboard navigation logic for self-service kiosks.

## Project Purpose

### Primary Goals
1. **Demonstrate keyboard navigation patterns** for self-service kiosks
2. **Showcase accessibility features** that can be implemented in kiosks
3. **Provide a tangible example** for discussions about accessible design
4. **Serve as a foundation** for further development and user testing

### Use Cases
- **Client presentations** - Show potential clients what accessible kiosk design looks like
- **Stakeholder education** - Help non-technical stakeholders understand accessibility
- **Design discussions** - Foundation for planning real implementations
- **User testing** - Gather feedback on interaction patterns
- **Portfolio piece** - Demonstrate expertise in accessible design

## Technical Stack

### Pure Web Technologies (No Frameworks)
- **HTML5** - Semantic structure with ARIA labels
- **CSS3** - Custom properties for theming, responsive design
- **Vanilla JavaScript** - No dependencies, fully self-contained
- **Web Speech API** - Text-to-speech announcements
- **Web Audio API** - Sound effects for user feedback

### Why No Frameworks?
- **Simplicity** - Easy to understand and modify
- **Portability** - Works anywhere, no build step
- **Performance** - Lightweight and fast
- **Demonstration clarity** - Code is easier to explain to clients

## Key Design Decisions

### 1. Bilingual Support (English/Estonian)
- **Estonian uses Finnish TTS** - Estonian TTS not widely supported in browsers
- **Proper grammatical cases** - Station names use elative case (Tallinnast = from Tallinn)
- **Informal voice in Estonian** - More natural for accessibility context (Vali vs. Valige)
- **Separate TTS for each language** - Language screen speaks English in en-US, Estonian in fi-FI

### 2. Accessibility Features Implemented

#### TTS Toggle (S Key)
- **Purpose**: Allow screen reader users to disable system TTS and use their own screen reader
- **Implementation**:
  - Press 'S' to toggle on/off
  - Ascending sound (ding-dong) when enabled
  - Descending sound (dong-ding) when disabled
  - Announced in first screen
- **Why**: Screen readers conflict with system TTS, users need control

#### Progressive Instructions
- **First screen**: Full detailed instructions
- **Screens 2-4**: Shorter instructions
- **Screens 5+**: No instructions (user is familiar)
- **Why**: Reduces cognitive load as users learn the interface

#### Minimal Animations
- **Only 2 animations**: Video call pulse, loading dots
- **Respects prefers-reduced-motion**: All animations disabled if user preference set
- **Why**: Motion can cause issues for users with vestibular disorders

#### Sound Effects
- **Different sounds for different actions**:
  - Confirm: Single beep
  - Select: Quick click
  - Train whistle: On main menu
  - Quantity change: Soft tick
  - Error: Descending tones
  - TTS toggle: Ding-dong patterns
- **Why**: Multi-sensory feedback helps users understand system state

### 3. UI Design Philosophy

#### Kiosk-Like Aesthetic
- **Railroad stripe accents** - Transportation theme
- **Train icon (▮▮)** - Visual branding
- **Corner accents** - Mimics physical kiosk screens
- **Professional dark theme** - Reduces eye strain, modern look
- **Large touch targets** - WCAG 2.2 compliant (suitable for elderly, motor impairments)

#### Visual Hierarchy
- **38px headings** - Clear screen titles
- **24px menu items** - Easy to read
- **High contrast** - Text meets WCAG AAA standards
- **Left accent bar** - Shows active selection clearly

### 4. User Flow Design

#### Complete Ticket Purchase Journey
1. Language selection (EN/ET)
2. Departure station
3. Arrival station
4. Round-trip selection
5. Departure date/time
6. Return date/time (if round-trip)
7. Ticket type/quantity selection
8. Review with route map
9. Payment simulation
10. Platform navigation instructions

#### Why This Flow?
- **Realistic** - Matches actual train ticket kiosks
- **Comprehensive** - Shows multiple interaction patterns
- **Flexible** - Can cancel at any point (Backspace)
- **Informative** - Route map provides visual confirmation

### 5. Keyboard Navigation Logic

#### Core Controls
- **↑/↓** - Navigate menu items
- **←/→** - Adjust values (date, time, quantity)
- **Enter** - Confirm selection
- **Backspace** - Go back to previous screen
- **R** - Repeat last announcement
- **S** - Toggle system TTS on/off

#### Why These Keys?
- **Arrow keys** - Universal, intuitive, accessible
- **Enter/Backspace** - Familiar from other interfaces
- **R** - Easy to reach, mnemonic (Repeat)
- **S** - Easy to reach, mnemonic (Speech)

## Technical Implementation Notes

### State Management
- Simple state object tracks user selections
- No complex state library needed for POC
- State resets on transaction cancel

### Audio Management
- Speech queue prevents overlapping announcements
- Sound effects use Web Audio API for consistency
- All audio can be toggled off

### Estonian Number Conversion
- Numbers converted to Estonian words for better TTS
- Handles numbers 0-999
- Used for prices, quantities, platform numbers, directions

### Route Map Visualization
- SVG-like design with CSS
- Gradient track from blue (departure) to green (arrival)
- Railroad ties pattern for realistic look
- Responsive grid for journey details

## Current Status

### Implemented Features ✅
- Bilingual support (EN/ET)
- Full ticket purchase flow
- TTS with toggle control
- Sound effects
- Route map visualization
- Video call simulation
- Platform navigation directions
- Progressive instructions
- Keyboard navigation
- High contrast UI
- Touch-friendly design

### Known Limitations ⚠️
- No real payment processing
- No actual train schedule integration
- Estonian TTS uses Finnish (browser limitation)
- Not comprehensively accessible (it's a POC)
- Simulated data only
- No backend/database
- No user accounts or saved preferences

## Future Development Considerations

### Suggested Next Features
1. **High contrast mode toggle** (C key) - Easy win, big visual impact
2. **Keyboard shortcuts help** (H key) - Improves discoverability
3. **Touch screen support** - Click events on buttons
4. **Session timer** - Realism and security demonstration
5. **Speech rate control** - Accessibility enhancement
6. **Digital ticket display** - Completes user journey

### Architectural Decisions for Scaling
- **Keep it simple** - This is a POC, not production code
- **Avoid over-engineering** - Don't add complexity for hypothetical features
- **Maintain accessibility** - Every feature should be keyboard-accessible
- **Document decisions** - Update this file when making significant changes

## Testing & Validation

### Manual Testing Checklist
- [ ] English TTS works on language screen
- [ ] Estonian TTS (fi-FI) works on language screen
- [ ] S key toggles TTS with appropriate sounds
- [ ] All screens navigable with keyboard only
- [ ] Route map displays correctly
- [ ] Sound effects play for all actions
- [ ] Backspace returns to previous screen
- [ ] R key repeats last announcement
- [ ] Numbers announced in Estonian words
- [ ] Transaction can be cancelled at any step

### Browser Compatibility
- ✅ Chrome/Edge (Chromium) - Primary target
- ✅ Safari - Works with limitations
- ⚠️ Firefox - TTS support varies by OS
- ❌ IE - Not supported (not needed)

### Screen Reader Testing
- Partial testing with built-in screen readers
- ARIA labels in place
- Live regions for announcements
- Should be tested with NVDA/JAWS for production

## Deployment

### GitHub Pages
- **URL**: https://jakobrosin.github.io/Train-Kiosk-POC/
- **Repository**: https://github.com/jakobrosin/Train-Kiosk-POC
- **Updates**: Automatic on push to main branch
- **Visibility**: Public (for demonstration purposes)

### Local Development
```bash
# Clone
git clone https://github.com/jakobrosin/Train-Kiosk-POC.git
cd Train-Kiosk-POC

# Run (any of these)
open index.html
python -m http.server 8000
npx serve
```

## Development History

### Phase 1: Initial Setup
- Basic HTML structure
- Language selection
- Ticket purchase flow
- English-only version

### Phase 2: Estonian Localization
- Added Estonian translations
- Fixed informal voice (Vali vs. Valige)
- Added elative case for station names (Tallinnast)
- Implemented number-to-words for Estonian TTS

### Phase 3: UI Enhancement
- Professional kiosk design
- Railroad theme elements
- Route map visualization
- Enhanced typography
- Accessibility improvements

### Phase 4: TTS Toggle Feature
- S key to toggle system voice
- Sound effects for on/off
- Separate TTS for English/Estonian on language screen
- "Accessibility mode enabled" announcement

### Phase 5: Documentation & Deployment
- Comprehensive README
- GitHub Pages setup
- Repository renamed to "Train-Kiosk-POC"
- This context document

## Contact & Feedback

**Creator**: Jakob Rosin
**Email**: jakob@ligipaasuke.ee
**Website**: ligipääsuke.ee

This project is open for feedback and suggestions for improvement. It's designed to evolve based on user testing and stakeholder input.

---

**Last Updated**: January 2025
**Version**: POC 1.0
**Status**: Active Development
