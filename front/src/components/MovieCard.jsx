import React, { useState, useEffect } from 'react';

const MovieCard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API endpoint
    fetch('YOUR_API_URL')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {movies.map(movie => (
        <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={movie.image} alt={`${movie.name} Poster`} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{movie.name}</h2>
            <p className="text-gray-600 mb-1">{movie.genre}</p>
            <p className="text-gray-600 mb-1">{movie.year}</p>
            <p className="text-gray-600">{movie.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
