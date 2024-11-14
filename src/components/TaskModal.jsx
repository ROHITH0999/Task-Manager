import React, { useState } from 'react';

const TaskModal = ({ task, onSave, onClose }) => {
    const [updatedTask, setUpdatedTask] = useState({
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
        dueTime: task.dueDate
            ? new Date(task.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
            : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!updatedTask.dueDate || !updatedTask.dueTime) {
            alert('Time & Date are mandatory!');
            return;
        }
        const fullDueDate = `${updatedTask.dueDate}T${updatedTask.dueTime}:00`;

        const taskToSave = {
            ...updatedTask,
            dueDate: new Date(fullDueDate).toISOString(),
            lastUpdate: new Date().toISOString(),
        };
        onSave(taskToSave);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-4 neon-box-shadow">
                <h2 className="text-2xl font-semibold mb-6 text-neon-cyan glow-text text-center">Track Task</h2>

                <div className="grid grid-cols-2 gap-6 mb-4">
                    <div className="col-span-2 sm:col-span-1">
                        <input
                            type="text"
                            name="title"
                            value={updatedTask.title}
                            onChange={handleChange}
                            placeholder="Task Title"
                            className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green text-neon-green bg-gray-900"
                        />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <textarea
                            name="description"
                            value={updatedTask.description}
                            onChange={handleChange}
                            placeholder="Task Description"
                            className="w-full border border-gray-600 bg-opacity-80 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green text-neon-yellow bg-gray-900"
                            rows="4"
                        />
                    </div>

                    <div>
                        <input
                            type="date"
                            name="dueDate"
                            value={updatedTask.dueDate}
                            onChange={handleChange}
                            className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green text-neon-pink bg-gray-900"
                        />
                    </div>

                    <div>
                        <input
                            type="time"
                            name="dueTime"
                            value={updatedTask.dueTime}
                            onChange={handleChange}
                            className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green text-neon-orange bg-gray-900"
                        />
                    </div>

                    <div>
                        <select
                            name="priority"
                            value={updatedTask.priority}
                            onChange={handleChange}
                            className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green text-neon-yellow bg-gray-900"
                        >
                            <option value="1">High</option>
                            <option value="2">Medium</option>
                            <option value="3">Low</option>
                        </select>
                    </div>

                    <div>
                        <select
                            name="status"
                            value={updatedTask.status}
                            onChange={handleChange}
                            className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neon-green text-neon-cyan bg-gray-900"
                        >
                            <option value="0">UnDone</option>
                            <option value="1">Completed</option>
                            <option value="-1">Trash</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                    <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-neon-blue text-white-900 rounded-lg hover:bg-neon-cyan transition transform hover:scale-105 duration-200"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition transform hover:scale-105 duration-200"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
