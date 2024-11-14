import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const TaskCard = ({ task, onDelete, onEdit }) => {
    const overdueClass = task.dueDate < new Date().toISOString() ? "text-red-500 font-bold" : "text-yellow-500";

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition m-2">
            <div className="flex justify-between items-center mb-1">
                <div className="text-xl font-bold text-gray-800">{task.title}</div>
                <div className={`text-xs ${overdueClass}`}>{task.dueDate < new Date().toISOString() ? "Overdue" : "Due Soon"}</div>
                <div className="mt-4 flex space-x-4">
                    <button
                        onClick={() => onEdit(task)}
                        className="w-16 h-8 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center"
                    >
                        ✏️
                    </button>
                    <button
                        onClick={() => onDelete(task.id)}
                        className="w-16 h-8 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center"
                    >
                        🗑️
                    </button>
                </div>
            </div>

            <p className="text-sm text-gray-600 mb-2">{task.description}</p>

            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {task.priority === "1" && <span className="text-red-500 font-bold">High Priority</span>}
                    {task.priority === "2" && <span className="text-orange-500 font-bold">Medium Priority</span>}
                    {task.priority === "3" && <span className="text-green-500 font-bold">Low Priority</span>}
                </div>

                <div className="text-xs text-gray-500">
                    {task.dueDate && `Due ${formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}`}
                </div>
            </div>


        </div>
    );
};

export default TaskCard;
