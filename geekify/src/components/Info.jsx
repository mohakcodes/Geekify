import React from 'react';
import Navbar from './Navbar';

export const Info = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-100 p-6">
      <Navbar />
      <div className="mt-16 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-950 mb-8">Company Information</h1>
        <div className="space-y-4 text-lg sm:text-xl">
          <h2 className="font-semibold text-gray-800">
            Company: <span className="text-purple-600">Geeksynergy Technologies Pvt Ltd</span>
          </h2>
          <h2 className="font-semibold text-gray-800">
            Address: <span className="text-purple-600">Sanjayanagar, Bengaluru-56</span>
          </h2>
          <h2 className="font-semibold text-gray-800">
            Phone: <span className="text-purple-600">XXXXXXXXX09</span>
          </h2>
          <h2 className="font-semibold text-gray-800">
            Email: <span className="text-purple-600">XXXXXX@gmail.com</span>
          </h2>
        </div>
      </div>
    </div>
  );
};