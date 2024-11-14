import React, { useState, useEffect } from 'react';
import { filterTasksByStatus, clearTrash, permanentDeleteTask } from '../utils/storage';
import TaskList from './TaskList';

const Trash = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(filterTasksByStatus(-1)); // -1 for tasks in trash
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    const handleClearTrash = () => {
        if (window.confirm("Are you sure you want to empty the trash? This action cannot be undone.")) {
            clearTrash();
            refreshTasks();
        }
    };

    const deleteTask = (taskId) => {
        if (window.confirm("Are you sure you want to delete this Task? This action cannot be undone.")) {
            permanentDeleteTask(taskId);
            refreshTasks();
        }
    };

    return (
        <div className="p-20 max-w-7xl mx-auto h-screen bg-gray-900 rounded-xl shadow-2xl flex flex-col">
            {/* Title and Clear Trash Button */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-4xl font-semibold text-neon-yellow glow-text mb-6 text-center">Trash Items</h2>
                <button
                    onClick={handleClearTrash}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300 neon-glow"
                >
                    Clear All
                </button>
            </div>
            {/* Task List Section */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-grow overflow-y-auto">
                <TaskList
                    refreshTasks={refreshTasks}
                    tasks={tasks}
                    permanentDeleteTask={deleteTask}
                />
            </div>
        </div>
    );
};

export default Trash;
