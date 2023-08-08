import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-500 to-violet-500">
      <Navbar />
      <div >
        <h1 className="text-center decoration-8 text-8xl font-bold p-32">Watch <br></br> <h2 className=" text-transparent  bg-clip-text bg-gradient-to-t from-sky-100 via-cyan-200 to-sky-100">Movies and TV Shows</h2></h1>
      </div>
      <SearchBar />
      <Footer />
    </div>
  );
};

export default Home;
