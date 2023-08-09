const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://AndiMongo:wtfisthis123@andicluster.x3fpaon.mongodb.net/MoviesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Create a movies  schema and model
const moviesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  cast: [{ type: String, required: true }],
  country: { type: String, required: true },
  image: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: String, required: true },
  videoQuality: { type: String, required: true },
  duration: { type: String, required: true },
  kind: { type: String, required: true },
  trailer: {type: String, required: true}
}, { collection: 'MoviesCollection' }); // Specify the custom collection name

const Movie = mongoose.model('MoviesDocument', moviesSchema); // Specify the custom model name

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(helmet()); // Use the helmet middleware to set headers

// Set Content Security Policy (CSP) header to allow fonts from 'localhost:3000'
app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self' data: localhost:3000;"
  );
  next();
});

// Route to get all movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

// Route to add a new Movie
app.post('/api/movies', async (req, res) => {
  const { name, description, cast, country, image, genre, releaseDate, videoQuality, duration, kind } = req.body;
  if (!name || !description || !cast || !country || !image || !genre || !releaseDate || !videoQuality || !duration || !kind) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  try {
    const newMovie = new Movie({ name, description, cast, country, image, genre, releaseDate, videoQuality, duration, kind });
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save the movie.' });
  }
});

// Route to delete a movie
app.delete('/api/movies/:id', async (req, res) => {
  const movieId = req.params.id;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);
    if (!deletedMovie) {
      return res.status(404).json({ error: 'movie not found.' });
    }
    res.status(200).json({ message: 'movie deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete the movie.' });
  }
});

// Default route for the root path ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the movies API! To get movies, use /api/movies endpoint.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});