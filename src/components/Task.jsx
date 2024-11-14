import React from 'react';

const Task = ({ task, onDelete, onUpdate }) => (
    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
        <div className="flex justify-between">
            <div className="text-gray-400 text-xs">{task.dueDate}</div>
            <button onClick={() => onDelete(task.id)} className="text-red-500 text-sm">Delete</button>
        </div>
        <div className="font-bold text-xl">{task.title}</div>
        <div className="text-sm">{task.description}</div>
        <div className="mt-2">
            <button
                onClick={() => onUpdate(task.id, 'High')}
                className={`py-1 px-3 rounded-md ${task.priority === 'High' ? 'bg-red-500' : 'bg-gray-300'}`}
            >
                High
            </button>
            <button
                onClick={() => onUpdate(task.id, 'Medium')}
                className={`py-1 px-3 rounded-md ${task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-gray-300'}`}
            >
                Medium
            </button>
            <button
                onClick={() => onUpdate(task.id, 'Low')}
                className={`py-1 px-3 rounded-md ${task.priority === 'Low' ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                Low
            </button>
        </div>
    </div>
);

export default Task;