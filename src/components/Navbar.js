// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Mood2Movie</h1>
            <Link to="/">Home</Link>
        </nav>
    );
};

export default Navbar;
