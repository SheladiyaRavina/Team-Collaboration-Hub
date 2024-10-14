import React from 'react';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks available</p>
      ) : (
        <ul className="list-disc pl-5">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center bg-white rounded-lg shadow-md p-3 mb-2">
              <div>
                <h3 className="font-semibold text-lg">{task.title}</h3>
                <p className="text-sm text-gray-600">Status: {task.status} | Priority: {task.priority} | Due: {task.dueDate}</p>
              </div>
              <div>
                <button onClick={() => editTask(task)} className="bg-blue-500 text-white rounded px-2 py-1 mr-2">
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white rounded px-2 py-1">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
