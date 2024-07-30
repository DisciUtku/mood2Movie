// MoodGrid.js
import React from 'react';
import MoodButton from './MoodButton';

const moods = [
    { mood: 'Cheerful', emoji: '😊' },
    { mood: 'Reflective', emoji: '🤔' },
    // Diğer moodlar burada...
];

const MoodGrid = ({ onMoodSelect }) => {
    return (
        <div className="mood-grid">
            {moods.map(({ mood, emoji }) => (
                <MoodButton key={mood} mood={mood} emoji={emoji} onClick={onMoodSelect} />
            ))}
        </div>
    );
};

export default MoodGrid;
