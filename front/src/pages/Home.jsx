import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar />
      <div>
        <h1 className="text-center decoration-8 text-9xl font-bold p-32">Welcome...</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
