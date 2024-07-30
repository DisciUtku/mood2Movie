// Home.js
import React from 'react';
import MoodGrid from '../components/MoodGrid';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleMoodSelect = (mood) => {
        navigate(`/movies/${mood}`);
    };

    return (
        <div>
            <h2>Discover top-rated movies based on your mood</h2>
            <MoodGrid onMoodSelect={handleMoodSelect} />
        </div>
    );
};

export default Home;
