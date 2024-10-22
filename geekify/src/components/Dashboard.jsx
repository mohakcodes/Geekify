import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [content, setContent] = useState([]);

  const fetchContent = async () => {
    try {
      const response = await axios.post('https://hoblist.com/api/movieList', {
        category: 'movies',
        language: 'kannada',
        genre: 'all',
        sort: 'voting',
      });
      setContent(response.data.result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/login');
    }
    setUser(currentUser);
    fetchContent();
  }, []);

  return (
    <div className='flex justify-center'>
      <Navbar />
      <div className="p-5 mt-16 max-w-3xl w-full">
        <h1 className='flex justify-center font-bold text-3xl my-3 text-cyan-950 italic'>Movies List</h1>
        {content.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center mb-5 bg-gray-200 p-4 rounded-lg shadow-md"
          >
            <div className="flex flex-row items-center gap-x-8 justify-start w-full sm:w-auto ml-10 sm:ml-0">
              <div className="flex flex-col items-center text-center mb-4 sm:mb-0 sm:mr-4">
                <FaCaretUp className='text-2xl mb-1' />
                <div className="text-2xl font-bold text-gray-900">{item.totalVoted}</div>
                <FaCaretDown className='text-2xl mt-1' />
                <div className="text-sm text-gray-600 mt-1">Votes</div>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-36 h-56 rounded-lg object-cover"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-0 sm:ml-5 flex flex-col w-[60%]">
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-sm text-gray-700 mt-1">
                <strong>Genre:</strong> {item.genre}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Director:</strong> {item.director.join(', ')}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Starring:</strong> {item.stars.join(', ')}
              </p>
              <p className="text-sm font-semibold my-2 text-blue-900">
                {item.runTime ? `${item.runTime} min` : 'N/A'} | {item.language} | {new Date(item.releasedDate * 1000).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-700">
                <strong>{item.pageViews} Views</strong> | <strong>Voted By {item.totalVoted} people</strong>
              </p>

              <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200">
                Watch Trailer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;