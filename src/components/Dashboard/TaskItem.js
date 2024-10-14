import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // Unique ID based on timestamp
      title: taskTitle,
      status: taskStatus,
    };
    onAddTask(newTask); // Call the onAddTask function from props
    setTaskTitle('');
    setTaskStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
        required
      />
      <select
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button type="submit" className="bg-indigo-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
