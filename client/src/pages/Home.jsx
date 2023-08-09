import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-500 to-violet-500">
      <Navbar />
      <div >
        <h1 className="text-center decoration-8 text-8xl font-bold p-32">Watch <br></br> <h2 className=" text-transparent  bg-clip-text bg-gradient-to-t from-sky-100 via-cyan-200 to-sky-100">Movies and TV Shows</h2><h4 className=" text-transparent  bg-clip-text bg-gradient-to-t from-sky-300 via-cyan-300 to-sky-300">Cinema24</h4></h1>
      </div>
      <SearchBar />
      <MovieList />
      <Footer />
      
    </div>
  );
};

export default Home;
