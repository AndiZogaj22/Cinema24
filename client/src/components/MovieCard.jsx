import React, { useState, useEffect } from 'react';

const MovieCard = () => {
  const [showDataList, setShowDataList] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual URL of your API
    fetch('http://localhost:3000/api/movies')
      .then(response => response.json())
      .then(data => setShowDataList(data))
      .catch(error => console.error(error));
  }, []);

  if (showDataList.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-6">
      {showDataList.map((showData, index) => (
        <div key={index} className="max-w-xs rounded overflow-hidden shadow-md">
          <img
            className="w-full hover:scale-110 transition duration-500 cursor-pointer object-cover"
            src={showData.image}
            alt={showData.name}
          />
          <div className="px-3 py-8 bg-slate-900">
            <div className="flex text-white font-bold text-xl">
              {showData.name}
              <small className="ml-3 p-0.5 rounded-tr-lg bg-white text-black font-semibold">
                {showData.videoQuality}
              </small>
            </div>
            <small className="mt-1 block text-gray-400 text-xs">
              {showData.releaseDate}
            </small>
            <div className="mt-1 text-white font-bold text-xs">
               {showData.kind}
            </div>
          </div>
          <div className="px-3 pb-3 bg-slate-900">
            {showData.genre.split(', ').map((genre, genreIndex) => (
              <span
                key={genreIndex}
                className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-1"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
