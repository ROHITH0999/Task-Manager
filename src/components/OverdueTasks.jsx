import React, { useState, useEffect } from 'react';
import { getOverdueTasks } from '../utils/storage';
import TaskList from './TaskList';

const OverdueTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(getOverdueTasks());
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-20 max-w-7xl mx-auto h-screen flex flex-col space-y-8 bg-gray-900 rounded-lg shadow-lg">
            <h2 className="text-4xl font-semibold text-neon-pink glow-text mb-6 text-center">Overdue Tasks</h2>
            <div className="flex-grow overflow-y-auto bg-gray-800 rounded-lg shadow-xl p-6 relative">
                {/* Custom Scrollbar Design */}
                <div className="overflow-auto scrollbar-thin scrollbar-thumb-neon-blue scrollbar-track-gray-700 scrollbar-rounded-lg">
                    {/* Optional: Add a subtle divider between the heading and task list */}
                    <div className="border-t-2 border-neon-cyan mt-4 mb-6"></div>
                    <TaskList tasks={tasks} refreshTasks={refreshTasks} />
                </div>
            </div>
        </div>
    );
};

export default OverdueTasks;
