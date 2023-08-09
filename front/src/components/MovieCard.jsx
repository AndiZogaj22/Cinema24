import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual URL of your API
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map(product => (
        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src={product.image} alt={product.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <div className="flex justify-between">
              <p className="text-gray-700 text-base">{`Price: ${product.price}`}</p>
              <a href={product.brand} target="_blank" rel="noopener noreferrer" className="text-blue-500">Brand</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
