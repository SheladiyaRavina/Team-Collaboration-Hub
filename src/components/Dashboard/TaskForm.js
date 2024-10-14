import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, currentTask, updateTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Pending');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
      setStatus(currentTask.status);
      setPriority(currentTask.priority);
      setDueDate(currentTask.dueDate);
    } else {
      setTitle('');
      setStatus('Pending');
      setPriority('Low');
      setDueDate('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: currentTask ? currentTask.id : Date.now(),
      title,
      status,
      priority,
      dueDate,
    };

    if (currentTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    // Reset form
    setTitle('');
    setStatus('Pending');
    setPriority('Low');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-2xl font-semibold mb-4">{currentTask ? 'Edit Task' : 'Add Task'}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
        className="border rounded w-full px-3 py-2 mb-4"
      />
      <div className="flex mb-4">
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border rounded px-3 py-2 mr-2">
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="border rounded px-3 py-2">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border rounded w-full px-3 py-2 mb-4"
      />
      <button type="submit" className="bg-indigo-600 text-white rounded px-4 py-2">
        {currentTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
