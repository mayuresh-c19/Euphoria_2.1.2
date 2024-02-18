import React from 'react';

// Component to display a beat
function Beat({ beat }: { beat: any }) {
    return (
        <div>
            <h2>{beat.name}</h2>
            <audio controls src={beat.audioUrl}>
                Your browser does not support the audio element.
            </audio>
        </div>
    );
}

// Main Explore component
const Explore = () => {
  // Hardcoded beats data
  const beats = [
    { id: 1, name: 'Better Day', audioUrl: '/beats/better-day.mp3' },
    { id: 2, name: 'Blade Main', audioUrl: '/beats/blade-main.mp3' },
    { id: 3, name: 'Sunrise Bliss', audioUrl: '/beats/sunrise-bliss.mp3' },
    { id: 4, name: 'Titanium', audioUrl: '/beats/titanium.mp3' },
  ];

  return (
    <div>
        {beats.map((beat: any) => (
            <Beat key={beat.id} beat={beat} />
        ))}
    </div>
  );
}
 
export default Explore;