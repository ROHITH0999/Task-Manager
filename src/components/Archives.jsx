import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTasks } from '../utils/storage';

const Archives = () => {
    const [archivedTasks, setArchivedTasks] = useState([]);

    const refreshTasks = () => {
        const tasks = getTasks();
        const archived = tasks.filter(task => Number(task.status) === 1); // Archived tasks
        setArchivedTasks(archived);
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-20 max-w-7xl mx-auto h-screen bg-gray-900 rounded-xl shadow-2xl flex flex-col">
            {/* Title */}
            <h2 className="text-4xl font-semibold text-neon-blue glow-text mb-6 text-center">Archived Tasks</h2>

            {/* Task List Section */}
            {archivedTasks.length > 0 ? (
                <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-grow overflow-y-auto">
                    <TaskList tasks={archivedTasks} refreshTasks={refreshTasks} />
                </div>
            ) : (
                <p className="text-gray-500 text-center">No archived tasks available.</p>
            )}
        </div>
    );
};

export default Archives;
