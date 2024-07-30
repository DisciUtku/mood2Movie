import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const { mood } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`/api/movies?mood=${mood}`);
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setError(error.message);
            }
        };
        fetchMovies();
    }, [mood]);

    return (
        <div>
            <h2>Movies for {mood} mood</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {movies.map(movie => (
                        <li key={movie._id}>{movie.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MovieList;
