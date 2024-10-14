import React from 'react';
import AdminDashboard from '../components/Dashboard/AdminDashboard';
import RecentActivity from '../components/Dashboard/RecentActivity';

const AdminPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600 p-6">Admin Page</h1>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <AdminDashboard />
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
