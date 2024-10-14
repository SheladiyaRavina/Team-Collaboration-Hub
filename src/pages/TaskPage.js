import React, { useState, useEffect } from 'react';
import TaskForm from '../components/Dashboard/TaskForm';
import TaskList from '../components/Dashboard/TaskList';

const TaskPage = () => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState({ status: 'All', priority: 'All', dueDate: '' });

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Store updated tasks
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Store updated tasks
    setCurrentTask(null); // Reset current task
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Store updated tasks
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (filter.status === 'All' || task.status === filter.status) &&
      (filter.priority === 'All' || task.priority === filter.priority) &&
      (filter.dueDate === '' || task.dueDate === filter.dueDate)
    );
  });

  const handleEditTask = (task) => {
    setCurrentTask(task);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-indigo-600 text-center mb-6">Your Tasks</h1>
      
      <TaskForm addTask={addTask} currentTask={currentTask} updateTask={updateTask} />

      <div className="mt-4 mb-6 bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>
        <div className="flex flex-wrap mb-4">
          <div className="mr-4">
            <label className="mr-2">Filter by Status:</label>
            <select name="status" value={filter.status} onChange={handleFilterChange} className="border rounded px-2 py-1">
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="mr-4">
            <label className="mr-2">Filter by Priority:</label>
            <select name="priority" value={filter.priority} onChange={handleFilterChange} className="border rounded px-2 py-1">
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label className="mr-2">Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={filter.dueDate}
              onChange={handleFilterChange}
              className="border rounded px-2 py-1"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <TaskList tasks={filteredTasks} deleteTask={deleteTask} editTask={handleEditTask} />
      </div>
    </div>
  );
};

export default TaskPage;
