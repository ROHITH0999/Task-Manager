import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { updateTask, moveToTrash } from '../utils/storage';

const TaskList = ({ tasks, refreshTasks, permanentDeleteTask }) => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle task deletion
    const handleDelete = (taskId) => {
        moveToTrash(taskId);
        refreshTasks();
    };

    // Handle task edit button click
    const handleEdit = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    // Handle task save after modal close
    const handleSave = (updatedTask) => {
        updateTask(updatedTask);
        refreshTasks();
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto h-auto flex flex-col">
            <div className="flex-grow">
                {tasks && tasks.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="w-full p-8 bg-gray-800 rounded-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out mb-6"
                            >
                                <TaskCard
                                    task={task}
                                    onDelete={permanentDeleteTask || handleDelete}
                                    onEdit={handleEdit}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-400 text-xl col-span-full">No Task Found!</p>
                )}
            </div>

            {isModalOpen && (
                <TaskModal
                    task={selectedTask}
                    onSave={handleSave}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default TaskList;
