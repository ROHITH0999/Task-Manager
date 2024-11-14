import React, { useState, useEffect } from 'react';
import { getTasks } from '../utils/storage';
import TaskList from './TaskList';

const TaskSearchFilter = ({ setIsFilterOpen }) => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        setTasks(getTasks());
    }, []);

    // Filter tasks based on search criteria
    useEffect(() => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const filtered = tasks.filter(task => {
            const matchesSearch = !searchTerm || task.title.toLowerCase().includes(lowerSearchTerm) || task.description.toLowerCase().includes(lowerSearchTerm);
            const matchesPriority = !priorityFilter || Number(task.priority) === parseInt(priorityFilter);
            const matchesStatus = statusFilter === '' || Number(task.status) === parseInt(statusFilter);
            return matchesSearch && matchesPriority && matchesStatus;
        });
        setFilteredTasks(filtered);
    }, [searchTerm, priorityFilter, statusFilter, tasks]);

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] mx-4 overflow-y-auto relative">

                {/* Close button in the top right corner */}
                <button
                    onClick={() => setIsFilterOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <span className="text-2xl font-bold">&times;</span>
                </button>

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Search & Filter Tasks</h2>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search by title or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                />

                {/* Priority filter dropdown */}
                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                >
                    <option value="">All Priorities</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>

                {/* Status filter dropdown */}
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
                >
                    <option value="">All Statuses ❓</option>
                    <option value="0">Overdue ⏰</option>
                    <option value="1">Completed ✅</option>
                    <option value="-1">Trashed 🚮</option>
                </select>

                {/* Filtered Task Results */}
                <div className="mt-4 mb-4 border-t border-gray-200 pt-4">
                    {filteredTasks.length > 0 ? (
                        <TaskList tasks={filteredTasks} />
                    ) : (
                        <p className="text-gray-500 text-center">No tasks match your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskSearchFilter;
