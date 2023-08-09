import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch recipe data from the API
    axios.get('https://dummyapi.online/api/movies').then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div>
      <div className="recipe-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} className="card w-96 h-96 bg-base-100 shadow-xl pb-24" style={{ margin: '30px' }}>
            <figure className="px-10 pt-15" style={{ height: '50%' }}>
              <img
                src={movie.image}
                alt={movie.movie}
                className="rounded-xl"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </figure>
            <div className="card-body items-center text-center" style={{ height: '50%' }}>
              <h2 className="card-title">{movie.movie}</h2>
              <h2 className="badge badge-outline p-3">{movie.rating}</h2>
              <p>{truncateDescription(movie.description)}</p>
              <div className="card-actions">
                <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
