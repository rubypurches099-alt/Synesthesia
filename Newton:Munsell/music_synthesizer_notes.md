# Music Synthesizer Project Notes

## Fine Tuning (Thursday PM)
Need to figure out what's up with the other versions & how to run them, but for now, will try new method. Troubleshoot later.

---

## Mapping

### MIDI Pitch → Colour (HUE)

**360° circle of HSL/HSV corresponds to 1 octave (Newton's Theory)**

**Formula:**
```
Hue = (30 × (MIDI_note mod 12)) mod 360
```

**Note Values:**
- C: 0°
- C#/D♭: 30°
- D: 60°
- D#/E♭: 90°
- E: 120°
- F: 150°
- F#/G♭: 180°
- G: 210°
- G#/A♭: 240°
- A: 270°
- A#/B♭: 300°
- B: 330°

**Piano Range:** A0 - C8

**Value Mapping:** 0 - 10
```
Value = 10 × (MIDI × 21)
(#88 108-21)
```

**Munsell Colour (Value) → HSL (L)**
```
L = Value/10
```

---

### Velocity/Saturation

**Range:**
- Velocity: 0-127
- Saturation: 0-1

**Formula:**
```
S = Velocity/127
```

---

## Page 2: Plugin Ideas

### PROPOSAL: Plug-in Paul "Synesthesia" (PaulSpectrum Bundle)

1. **IDEA:** To create audio-visual tool with "direct" (the visual output)
   - Pure mode

2. **To access thru Holder - MuCOS: thru modular Solo**
   - Full colour automation Solo
   - #PVT: (access thru holder - MuCOS) NoDB node

3. **Issues:**
   - only 3 streaming greer/blue impact for delogged ꟿ (with/colour
   - MIDI → listening & greer or delogged
   - PVD (PPT? Live double Circle)
   - (Place?) intercepted to colour / straight (dyne)
   - × still unedited Blue/unical Purple

**PVDFS:** (text unclear)

---

## Page 3: Additional Options

### Fullnaming Range: 80-OH2 - 4168 & H2
- (A0-) > C (0-0-0) normalized

**RGBA numbers:** 0-255 or (0-0-0-1)

**Frequency to Hue:**  
```
Hue = αpha
```

**Velocity/loudness:**

**Linear Map (HSV → RGB)**

**Free-Hue Limear Map (HSV → RGB)**

---

### Option 1:
**High:** = Blue Plus Plt

### Option 2: Logarithmic maf:
- (Human hearing)
- is logarithmic
- frequency perception)

**Hue:**
- min - freq = 87.3
- max - freq = 4186 'ħo

**Logarithmic Map (Real min-freq)**
```
/math.log(Real(max-freq))
/min-freq) × 360
```
