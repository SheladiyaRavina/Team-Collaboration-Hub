import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ loggedInUser }) => {
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/login'; 
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex-grow  text-white text-lg font-bold">
                    <Link to="/dashboard">Team Collaboration Hub</Link>
                </div>
        <div>
          {loggedInUser ? (
            <>
            
              <Link to="/tasks" className="text-white mr-4">
                Tasks
              </Link>
              <Link to="/chat" className="text-white  mr-4">
                Chat
              </Link>
              <button onClick={handleLogout} className="text-white bg-red-500 px-3 py-2 rounded-md">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">Login</Link>
              <Link to="/register" className="text-white bg-indigo-500 px-3 py-2 rounded-md">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 
