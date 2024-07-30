// MoodButton.js
import React from 'react';

const MoodButton = ({ mood, emoji, onClick }) => {
    return (
        <button onClick={() => onClick(mood)}>
            {emoji} {mood}
        </button>
    );
};

export default MoodButton;
