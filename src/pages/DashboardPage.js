import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Dashboard = () => {

    const tasks = [
        { id: 1, title: 'Design Homepage', status: 'Completed' },
        { id: 2, title: 'Implement Login', status: 'Pending' },
        { id: 3, title: 'Setup Database', status: 'In Progress' },
        { id: 4, title: 'Create API Endpoints', status: 'Completed' },
        { id: 5, title: 'Write Unit Tests', status: 'Pending' },
        { id: 6, title: 'Integrate Payment Gateway', status: 'In Progress' },
        { id: 7, title: 'Deploy Application', status: 'Completed' },
        { id: 8, title: 'Fix Bugs', status: 'Pending' },
        { id: 9, title: 'Optimize Performance', status: 'In Progress' },
        { id: 10, title: 'Prepare Documentation', status: 'Completed' },
    ];


    const recentActivities = [
        { id: 1, activity: 'Reviewed Design Mockups', time: '5 minutes ago' },
        { id: 2, activity: 'Completed User Authentication', time: '15 minutes ago' },
        { id: 3, activity: 'Updated README File', time: '20 minutes ago' },
        { id: 4, activity: 'Fixed Bug in Payment Module', time: '25 minutes ago' },
        { id: 5, activity: 'Pushed Changes to Repository', time: '30 minutes ago' },
        { id: 6, activity: 'Conducted Team Meeting', time: '1 hour ago' },
        { id: 7, activity: 'Refactored Codebase', time: '1 hour ago' },
        { id: 8, activity: 'Deployed to Staging Environment', time: '2 hours ago' },
        { id: 9, activity: 'Reviewed Pull Requests', time: '2 hours ago' },
        { id: 10, activity: 'Updated Project Plan', time: '3 hours ago' },
   
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-white">Dashboard</h1>
                <div>
                    <button className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition-all mr-4">
                        <Link to="/tasks">Add Task</Link>
                    </button>
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all">
                        <NavLink to="/chat">Chat with Team</NavLink>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
                        <p className="mt-2 text-gray-600">Status: <span className={`font-bold ${task.status === 'Completed' ? 'text-green-500' : task.status === 'Pending' ? 'text-red-500' : 'text-yellow-500'}`}>{task.status}</span></p>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
                <ul className="space-y-2">
                    {recentActivities.map(activity => (
                        <li key={activity.id} className="border-b border-gray-200 pb-2">
                            <p className="text-gray-800">{activity.activity}</p>
                            <span className="text-gray-500 text-sm">{activity.time}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
