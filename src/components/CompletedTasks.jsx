import React, { useState, useEffect } from 'react';
import { filterTasksByStatus } from '../utils/storage';
import TaskList from './TaskList';

const CompletedTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(filterTasksByStatus(1)); // Status 1 for completed tasks
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-20 max-w-7xl mx-auto h-screen bg-gray-900 rounded-xl shadow-2xl flex flex-col">
            <h2 className="text-4xl font-semibold text-neon-green glow-text mb-6 text-center">Completed Tasks</h2>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-grow overflow-y-auto">
                <TaskList tasks={tasks} refreshTasks={refreshTasks} />
            </div>
        </div>
    );
};

export default CompletedTasks;
