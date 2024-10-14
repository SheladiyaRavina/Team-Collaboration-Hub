import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a user object
    const newUser = {
      username,
      password,
    };

    // Store the user in local storage
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    
    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded">Register</button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/login" className="text-indigo-500">Login here</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
