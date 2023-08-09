import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <form method="GET">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="rounded-md absolute inset-y-0 left-0 flex items-center pl-2 bg-gray-800 ">
            <button type="submit" className=" pr-5 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 ml-3">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            name="q"
            className="indent-0 py-4 px-12 md:px-16 lg:px-20 text-xl text-white bg-gray-900 rounded-md pl-16 focus:outline-none focus:bg-white focus:text-gray-900 w-full md:w-auto"
            placeholder="Search..." 
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
