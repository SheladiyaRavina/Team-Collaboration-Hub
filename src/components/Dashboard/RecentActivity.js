import React from 'react';

const RecentActivity = () => {
  // Dummy data for recent activities
  const activities = [
    'User created a new task: "Build API"',
    'User completed the task: "Design UI"',
    'User logged in.',
    'User logged out.',
  ];

  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={index} className="border-b py-2">
          {activity}
        </li>
      ))}
    </ul>
  );
};

export default RecentActivity; // Default export
