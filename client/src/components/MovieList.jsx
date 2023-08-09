import React, { useState, useEffect } from 'react';

const MovieList = () => {
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
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {showDataList.map((showData, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={showData.image} alt={showData.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{showData.name}</div>
            <p className="text-gray-700 text-base">{showData.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {showData.genre.split(', ').map((genre, genreIndex) => (
              <span
                key={genreIndex}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{genre}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
