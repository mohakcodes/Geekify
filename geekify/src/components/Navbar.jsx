import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  return (
    <nav className="bg-purple-300 py-4 px-6 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Link to="/" className="text-black font-mono text-2xl sm:text-3xl font-bold">
        Geekify
      </Link>
      <div className="flex items-center space-x-2">
        <Link to="/info" className="text-black hover:text-white hover:bg-green-800 text-lg sm:text-xl font-medium p-2 rounded-md">
          Company Info
        </Link>
        {currentUser && (
          <>
            <Link 
              to="/dashboard" 
              className="text-black hover:text-white hover:bg-green-800 text-lg sm:text-xl font-medium p-2 rounded-md sm:block hidden"
            >
              Dashboard
            </Link>
            <button 
              onClick={handleLogout}
              className="text-black hover:text-white hover:bg-red-600 text-lg sm:text-xl font-medium p-2 rounded-md"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;