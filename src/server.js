const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const movieSchema = new mongoose.Schema({
    title: String,
    mood: String,
});

const Movie = mongoose.model('Movie', movieSchema);

app.get('/api/movies', async (req, res) => {
    const { mood } = req.query;
    try {
        console.log('Received mood:', mood); // Gelen mood'u kontrol edin
        const movies = await Movie.find({ mood });
        console.log('Fetched movies:', movies); // Alýnan filmleri kontrol edin
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
