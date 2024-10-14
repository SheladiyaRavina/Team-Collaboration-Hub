import React from 'react';

const AdminDashboard = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-6">Admin Dashboard</h1>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Manage Users</h2>
        {users.length > 0 ? (
          <ul>
            {users.map((user, index) => (
              <li key={index} className="border-b py-2">
                {user.username}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard; // Default export
