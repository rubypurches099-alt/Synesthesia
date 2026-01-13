import React, { useState } from 'react';
import { Info } from 'lucide-react';

const NewtonColorPiano = () => {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  
  // Newton's original color-to-note mapping
  const newtonColors = {
    'C': { color: '#FF0000', name: 'Red' },
    'C#': { color: '#FF3300', name: 'Red-Orange' },
    'D': { color: '#FF6600', name: 'Orange' },
    'D#': { color: '#FF9900', name: 'Orange-Yellow' },
    'E': { color: '#FFFF00', name: 'Yellow' },
    'F': { color: '#00FF00', name: 'Green' },
    'F#': { color: '#00CC66', name: 'Green-Blue' },
    'G': { color: '#0099FF', name: 'Blue' },
    'G#': { color: '#0066CC', name: 'Blue-Indigo' },
    'A': { color: '#4B0082', name: 'Indigo' },
    'A#': { color: '#7B00B4', name: 'Indigo-Violet' },
    'B': { color: '#9400D3', name: 'Violet' }
  };

  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
  
  const generateKeys = () => {
    const keys = [];
    for (let octave = 0; octave <= 10; octave++) {
      for (let i = 0; i < notes.length; i++) {
        if (octave === 10 && i > 0) break; // Stop after C10
        const note = notes[i];
        const noteName = `${note}${octave}`;
        keys.push({
          note: noteName,
          baseNote: note,
          octave,
          isBlack: blackNotes.includes(note),
          color: newtonColors[note]
        });
      }
    }
    return keys;
  };

  const allKeys = generateKeys();
  const whiteKeys = allKeys.filter(k => !k.isBlack);
  const blackKeys = allKeys.filter(k => k.isBlack);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 overflow-hidden flex flex-col">
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Newton's Color Wheel Piano</h1>
        <p className="text-gray-300 text-sm mb-2">C0 to C10 • 10 Octaves • 121 Keys</p>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <Info size={16} />
          {showInfo ? 'Hide' : 'Show'} Newton's Mapping
        </button>
      </div>

      {showInfo && (
        <div className="bg-gray-800 rounded-lg p-4 mb-4 text-white text-sm max-w-4xl mx-auto">
          <h3 className="font-bold mb-2">Isaac Newton's Color-to-Note Correspondence</h3>
          <div className="grid grid-cols-7 gap-2">
            {whiteNotes.map(note => (
              <div key={note} className="text-center">
                <div 
                  className="w-full h-8 rounded mb-1"
                  style={{ backgroundColor: newtonColors[note].color }}
                />
                <div className="font-bold">{note}</div>
                <div className="text-xs text-gray-400">{newtonColors[note].name}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {hoveredKey && (
        <div className="text-center mb-2 h-8">
          <span className="text-white text-lg font-bold">{hoveredKey.note}</span>
          <span className="text-gray-400 text-sm ml-2">({hoveredKey.color.name})</span>
        </div>
      )}

      <div className="flex-1 overflow-x-auto overflow-y-hidden">
        <div className="relative h-full min-w-max px-8">
          {/* White keys */}
          <div className="flex h-full items-end pb-8">
            {whiteKeys.map((key, idx) => (
              <div
                key={key.note}
                className="relative border-r border-gray-700 cursor-pointer transition-all hover:brightness-110"
                style={{
                  width: '24px',
                  height: '200px',
                  backgroundColor: key.color.color,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                  borderRadius: '0 0 4px 4px'
                }}
                onMouseEnter={() => setHoveredKey(key)}
                onMouseLeave={() => setHoveredKey(null)}
              >
                {key.baseNote === 'C' && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white bg-opacity-70 px-1 rounded">
                    {key.octave}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Black keys */}
          <div className="absolute top-0 left-0 right-0 flex items-start pt-8 pl-8">
            {allKeys.map((key, idx) => {
              if (!key.isBlack) return null;
              
              // Calculate position based on white key positions
              const whiteKeysBefore = allKeys
                .slice(0, idx)
                .filter(k => !k.isBlack).length;
              
              const offset = key.baseNote === 'C#' ? 17 :
                           key.baseNote === 'D#' ? 17 :
                           key.baseNote === 'F#' ? 17 :
                           key.baseNote === 'G#' ? 17 :
                           key.baseNote === 'A#' ? 17 : 17;
              
              return (
                <div
                  key={key.note}
                  className="absolute cursor-pointer transition-all hover:brightness-110"
                  style={{
                    left: `${whiteKeysBefore * 24 + offset}px`,
                    width: '14px',
                    height: '120px',
                    backgroundColor: key.color.color,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                    borderRadius: '0 0 3px 3px',
                    border: '1px solid rgba(0,0,0,0.3)'
                  }}
                  onMouseEnter={() => setHoveredKey(key)}
                  onMouseLeave={() => setHoveredKey(null)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-4">
        Hover over keys to see note names • Colors repeat across all octaves based on Newton's original 7-color spectrum
      </div>
    </div>
  );
};

export default NewtonColorPiano;