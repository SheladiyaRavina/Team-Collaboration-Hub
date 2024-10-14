import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));

    // Check if the username and password match the stored user data
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Successful login
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
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
        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded">Login</button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <Link to="/register" className="text-indigo-500">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
