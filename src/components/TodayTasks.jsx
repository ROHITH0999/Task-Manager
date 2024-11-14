import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { markDone } from '../utils/storage';

const TodayTasks = ({ todayTasks, refreshTasks }) => {

    return (
        <>
            {todayTasks.length > 0 ? (
                todayTasks
                    .sort((task1, task2) => {
                        const dueDate1 = new Date(task1.dueDate);
                        const dueDate2 = new Date(task2.dueDate);

                        // Check if one task is overdue
                        const isTask1Overdue = dueDate1 < new Date(); // If dueDate1 has passed
                        const isTask2Overdue = dueDate2 < new Date(); // If dueDate2 has passed

                        // If one task is overdue and the other is not, place the overdue task last
                        if (isTask1Overdue && !isTask2Overdue) {
                            return 1;
                        }
                        if (!isTask1Overdue && isTask2Overdue) {
                            return -1;
                        }

                        // Otherwise, sort by deadline (ascending)
                        if (dueDate1 !== dueDate2) {
                            return dueDate1 - dueDate2; // Earlier deadline comes first
                        }

                        // If deadlines are the same, sort by priority (ascending)
                        return Number(task1.priority) - Number(task2.priority); // Lower priority value means higher priority
                    })
                    .map((task, index) => (
                        <div key={index} className="p-3 bg-white border rounded-xl text-gray-800 space-y-2 mb-4 shadow-md max-w-xs mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="text-gray-400 text-xs">{task.title}</div>
                                <div className="text-blue-400 text-xs font-bold">{new Date(task.dueDate).toLocaleTimeString()}</div>
                            </div>

                            {/* Description with Ellipsis for more than 2 lines */}
                            <a href="#" className="font-bold text-md hover:text-yellow-800 hover:underline block overflow-hidden text-ellipsis line-clamp-2">
                                {task.description}
                            </a>

                            <div className="flex justify-between items-center text-xs">
                                <div className="flex items-center space-x-1">
                                    {task.priority === '1' && (
                                        <span className="text-red-500 font-bold">High Priority</span>
                                    )}
                                    {task.priority === '2' && (
                                        <span className="text-orange-500 font-bold">Medium Priority</span>
                                    )}
                                    {task.priority === '3' && (
                                        <span className="text-green-500 font-bold">Low Priority</span>
                                    )}
                                </div>

                                <div className="text-gray-600">
                                    {task.priority === 'High' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-red-500 inline align-middle mr-1" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    )}
                                    Deadline is today
                                </div>
                            </div>

                            <div className="text-gray-500 text-xs flex justify-between">
                                <div>
                                    Last update {formatDistanceToNow(task.lastUpdate, { addSuffix: true })}
                                </div>
                                {
                                    task.status == 0 ? (
                                        <button
                                            onClick={() => {
                                                markDone(task.id);
                                                refreshTasks();
                                            }}
                                            className="w-40 h-6 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600">
                                            Mark as Done
                                        </button>
                                    ) : ""
                                }
                            </div>
                        </div>
                    ))
            ) : (
                <p>No tasks for today!</p>
            )}
        </>
    );
};

export default TodayTasks;
