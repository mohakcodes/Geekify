import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 gap-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mt-12">
        Welcome to <span className='italic font-mono text-red-600'>Geekify</span> Movies
      </h1>
      <p className="text-xl text-gray-700 italic max-w-md text-center">
        Discover the best movies curated just for you, at your fingertips.
      </p>
      <button className='p-2 mt-2 bg-purple-700 text-lg font-medium text-white rounded-lg hover:underline'>
        <Link to='/dashboard'>Get Started</Link>
      </button>
    </div>
  );
}

export default Home;
