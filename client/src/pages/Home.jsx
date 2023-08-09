import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-500 to-violet-500">
      <Navbar />
      <div className="text-center mt-10 md:mt-20 p-8 md:p-16 lg:p-24">
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold">
          Watch
        </h1>
        <h2 className="font-bold text-transparent bg-clip-text bg-gradient-to-t from-sky-100 via-cyan-200 to-sky-100 text-4xl md:text-6xl lg:text-9xl mt-2">
          Movies and TV Shows
        </h2>
        <h4 className="font-bold text-transparent bg-clip-text bg-gradient-to-t from-sky-300 via-cyan-300 to-sky-300 text-3xl md:text-4xl lg:text-8xl mt-2">
          Cinema24
        </h4>
      </div>

      <div className="flex justify-center items-center p-4 md:p-8 lg:p-16">
        <div className="w-full max-w-xl">
          <SearchBar />
        </div>
      </div>

      <MovieCard />
      <Footer />
    </div>
  );
};

export default Home;
