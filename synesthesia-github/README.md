# Synesthesia - The Sound of Colour

**MIDI Visualizer Collection by Ruby Purches**

A collection of real-time MIDI visualizers that transform musical notes into visual color representations using Newton's color wheel and synesthetic principles.

## 🎨 Live Demo

**Visit:** `https://YOUR-USERNAME.github.io/synesthesia/`

*(Replace YOUR-USERNAME with your GitHub username after setup)*

---

## ✨ Current Visualizers

### 1. **Original Lightweight**
- Newton's color wheel mapping (C = Violet, D = Red, E = Orange, etc.)
- Chord detection and harmonic analysis
- Extensive background customization
- Gradient mixer and additive color modes
- Lanes and layers display modes

**Launch:** [Newton MIDI Visualizer](visualizers/newton-midi-visualizer.html)

### 2. **Oscilloscope**
- Real-time waveform visualization
- MIDI notes converted to sine waves at actual frequencies (A4 = 440Hz)
- Dynamic horizontal scrolling
- Additive color mixing for multiple notes
- Technical frequency-accurate display

**Launch:** [Oscilloscope Visualizer](visualizers/newton-midi-oscilloscope.html)

### 3. **MIDI Grid Visualizer**
- Grid-based note display
- Structured layout with precise timing
- Visual feedback for note velocity
- Clean, organized interface

**Launch:** [Grid Visualizer](visualizers/midi-grid-visualizer.html)

### 4. **MIDI Visualizer Recorder**
- All visualization features plus recording capabilities
- Capture and replay MIDI performances
- Save and load sessions
- Perfect for documenting compositions

**Launch:** [Recorder Visualizer](visualizers/midi-visualizer-recorder.html)

---

## 🎵 How It Works

### Color Mapping Theory
This visualizer uses a combination model to map frequency to color across the full audible frequency spectrum:

**Newton's Color Wheel (Hue):**
- C → Violet
- D → Red  
- E → Orange
- F → Yellow
- G → Green
- A → Blue
- B → Indigo

**Munsell's Color Model (Value):**
- Octave controls brightness
- C0 = darker, C10 = brighter

**Velocity Controls:**
- Size of visual elements
- Color saturation/intensity

### MIDI Setup
1. Configure IAC buses in Audio MIDI Setup (macOS) or virtual MIDI ports (Windows/Linux)
2. Route each track to a different bus
3. Open visualizer in browser
4. Watch your music become color!

---

## 📂 Repository Structure

```
synesthesia/
├── index.html                    # Main landing page (standalone)
├── visualizers/                  # Current production visualizers
│   ├── newton-midi-visualizer.html
│   ├── newton-midi-oscilloscope.html
│   ├── midi-grid-visualizer.html
│   └── midi-visualizer-recorder.html
├── archive/                      # Historical versions
│   ├── main-visualizers/
│   ├── styles/                   # Synthwave, Kandinsky, Minimal
│   ├── oscilloscope/             # Oscilloscope versions
│   ├── multitrack/               # Development versions v1-27
│   ├── basic/                    # Early standalone versions
│   └── landing-pages/            # Landing page iterations
├── docs/                         # Documentation and guides
└── assets/                       # Images and screenshots
```

---

## 🗂️ Archive

All previous versions, experimental builds, and development iterations are preserved in the `/archive/` directory:

- **Style Variations:** Synthwave, Kandinsky, Minimal Monochrome themes
- **Development History:** Complete multitrack development (v1-27)
- **Basic Versions:** Early prototypes and standalone builds
- **Landing Pages:** All landing page design iterations

**Browse Archive:** [archive/](archive/)

---

## 🎯 Features

- ✅ **Real-time MIDI input** - Direct from DAW or MIDI controller
- ✅ **Multi-track support** - Visualize multiple MIDI tracks simultaneously
- ✅ **Customizable backgrounds** - Gradients, solid colors, additive modes
- ✅ **Display modes** - Lanes (separate tracks) or Layers (overlaid)
- ✅ **Color theory based** - Newton's color wheel + Munsell's value system
- ✅ **No dependencies** - Pure HTML/CSS/JavaScript
- ✅ **Works offline** - No external libraries required
- ✅ **Cross-browser** - Chrome, Firefox, Safari, Edge

---

## 🚀 Quick Start

### For Users:
1. Visit the [live demo](https://YOUR-USERNAME.github.io/synesthesia/)
2. Click any visualizer to launch
3. Set up MIDI routing in your DAW
4. Start playing!

### For Developers:
```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/synesthesia.git

# Open any HTML file directly in browser
# No build process required!
```

---

## 📖 Documentation

- [Enhanced Versions Implementation Guide](docs/Enhanced-Versions-Implementation-Guide.txt)
- [Web Text Edit Formatting Guide](docs/Web-text-edit-Landing-page-formatting.txt)
- [Landing Page Tutorial](docs/landing-page-tutorial.txt)

---

## 🎨 Theory & Models

**Synesthesia Spectral Mapping Scale:**
- Real-time MIDI to colour converter
- Correlates MIDI data with the synesthetic spectral scale
- Visualizes music theory and harmonic relationships
- Maps frequency to color across full audible spectrum
- Quantized to standard tuned 10-octave piano roll (C0-C10)
- Full visual light spectrum according to Newton's color wheel
- Octave mapped to value according to Munsell's Color Model
- Velocity assigned to chroma/intensity/saturation

---

## 🛠️ Technical Details

**Built with:**
- Pure HTML5 Canvas
- Web MIDI API
- JavaScript (ES6+)
- CSS3 for styling

**Browser Requirements:**
- Modern browser with Web MIDI API support
- MIDI device or virtual MIDI routing

**No dependencies, no frameworks, no build tools required!**

---

## 📝 Version History

- **v1.1** - Added oscilloscope waveform visualizer
- **v1.0** - Initial release with Newton's color wheel visualizer
- See [archive/](archive/) for complete development history (v1-27)

---

## 🌟 Future Development

Planned features:
- Additional color mapping models
- Export to video
- MIDI file playback
- Preset management
- More style variations

---

## 📄 License

All rights reserved - Ruby Purches

---

## 👤 Author

**Ruby Purches**

*The Sound Of Colour*

---

## 🙏 Acknowledgments

- Isaac Newton - Color wheel (Opticks, 1704)
- Albert H. Munsell - Color space and value system
- Web MIDI API - Browser MIDI support

---

## 📧 Contact

For questions, collaborations, or custom visualizers, please reach out through GitHub.

---

**The Sound Of Colour - MIDI Visualizer Collection**

*Bringing color to sound through visual art generation*
