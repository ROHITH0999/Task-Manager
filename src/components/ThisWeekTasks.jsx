import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTasks } from '../utils/storage';

const ThisWeekTasks = () => {
    const [weeklyTasks, setWeeklyTasks] = useState([]);

    const refreshTasks = () => {
        const tasks = getTasks();
        const now = new Date();

        // Calculate start and end dates of the current week
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay()); // Start of week (Sunday)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // End of week (Saturday)

        const filteredTasks = tasks.filter(task => {
            const taskDueDate = new Date(task.dueDate);
            return taskDueDate >= startOfWeek && taskDueDate <= endOfWeek;
        });

        setWeeklyTasks(filteredTasks);
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-20 max-w-7xl mx-auto h-screen bg-gray-900 rounded-xl shadow-2xl flex flex-col">
            {/* Title */}
            <h2 className="text-4xl font-semibold text-neon-green glow-text mb-6 text-center">This Week's Tasks</h2>

            {/* Task List Section */}
            {weeklyTasks.length > 0 ? (
                <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-grow overflow-y-auto">
                    <TaskList tasks={weeklyTasks} refreshTasks={refreshTasks} />
                </div>
            ) : (
                <p className="text-gray-500 text-center">No tasks due this week.</p>
            )}
        </div>
    );
};

export default ThisWeekTasks;
