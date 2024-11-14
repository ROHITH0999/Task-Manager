import React, { useEffect, useState } from 'react';
import { getTasks, addTask } from '../utils/storage';
import TaskModal from './TaskModal';
import TodayTasks from './TodayTasks';
import TaskSearchFilter from './TaskSearchFilter';

const TodayPlan = () => {
    const today = new Date();
    const [todayTasks, setTodayTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [tasksFinished, setTasksFinished] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Motivational messages
    const motivationalMessages = [
        "💪 Keep pushing, you're doing great!",
        "🚀 Stay focused and finish strong!",
        "🌟 Believe in yourself, you're unstoppable!",
        "💥 Every task brings you closer to success!",
        "🔥 Keep up the momentum, you're on fire!",
        "🌈 Stay positive, finish strong!"
    ];

    // Function to get a random motivational message
    const getRandomMotivationalMessage = () => {
        const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
        return motivationalMessages[randomIndex];
    };

    const refreshTasks = () => {
        const tasks = getTasks();
        const todayTasksList = tasks.filter(task => {
            return new Date(task.dueDate).toDateString() === new Date().toDateString();
        });

        setTodayTasks(todayTasksList);
        setTasksFinished(todayTasksList.filter(task => Number(task.status) === 1).length); // Correct progress count
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    // Toggle modal visibility
    const toggleModal = () => setShowModal(!showModal);

    // Save a new task from the modal
    const handleSaveTask = (newTask) => {
        addTask(newTask);
        refreshTasks();
    };

    return (
        <main className="min-h-screen bg-gray-900 text-gray-300 p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Sidebar Section */}
                <div className="md:col-span-1 bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-xl neon-box-shadow">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <h1 className="text-xl sm:text-2xl font-bold text-neon-green glow-animation">Dashboard</h1>
                        <button
                            type="button"
                            className="btn-neon text-sm sm:text-base"
                            onClick={toggleModal}
                        >
                            + New Task
                        </button>
                    </div>
                    
                    <hr className="border-gray-700 my-4 sm:my-6" />
                    <div className="space-y-4 sm:space-y-6">
                        <div className="p-3 sm:p-4 bg-gray-700 rounded-lg shadow-inner text-center text-neon-yellow glow-text">
                            <h2 className="text-base sm:text-lg font-semibold">Today's Progress</h2>
                            <p className="mt-1 text-lg sm:text-xl">{tasksFinished} / {todayTasks.length} tasks completed</p>
                        </div>

                        {/* Motivational Message */}
                        <div className="p-3 sm:p-4 bg-gray-700 rounded-lg shadow-inner text-center text-neon-pink glow-text">
                            <h2 className="text-base sm:text-lg font-semibold">Motivation</h2>
                            <p className="mt-1 text-lg sm:text-xl">{getRandomMotivationalMessage()}</p> {/* Dynamic Motivational Message */}
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="md:col-span-2">
                    {/* Greeting Section */}
                    <div className="mt-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 shadow-lg transform hover:scale-105 transition-all">
                        <h2 className="text-2xl sm:text-3xl font-bold text-neon-blue mb-2 sm:mb-3 glow-animation">🚀 Today's Mission 🚀</h2>
                        <p className="text-gray-200 text-sm sm:text-base font-medium">Stay focused, stay determined. You're just one step away from achieving your goals!</p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                        <div className="flex space-x-3 sm:space-x-4">
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="bg-neon-orange px-3 sm:px-4 py-2 rounded-lg text-gray-900 font-semibold shadow-md hover:bg-neon-yellow transition-all hover:scale-105 neon-glow"
                            >
                                Search & Filter
                            </button>
                        </div>
                        {isFilterOpen && <TaskSearchFilter setIsFilterOpen={setIsFilterOpen} />}
                    </div>

                    {/* Today's Tasks Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        <div className="p-4 sm:p-5 bg-gray-800 rounded-lg shadow-md neon-box-shadow animate-fade-in max-h-[60vh] overflow-y-auto">
                            <h3 className="text-lg sm:text-xl font-bold text-neon-blue glow-animation mb-3 sm:mb-4">Tasks for Today</h3>
                            <TodayTasks todayTasks={todayTasks} refreshTasks={refreshTasks} />
                        </div>

                        {/* Task Statistics */}
                        <div className="p-4 sm:p-5 bg-gray-800 rounded-lg shadow-md neon-box-shadow animate-fade-in max-h-[60vh] overflow-y-auto">
                            <h3 className="text-lg sm:text-xl font-bold text-neon-purple glow-animation mb-3 sm:mb-4">Quick Stats</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="p-3 sm:p-4 bg-gray-700 rounded-lg shadow-inner text-center text-neon-pink glow-text">
                                    <h4 className="text-base sm:text-lg font-semibold">Total Tasks Finished</h4>
                                    <p className="mt-1 text-xl sm:text-2xl">{tasksFinished}</p>
                                </div>
                                <div className="p-3 sm:p-4 bg-gray-700 rounded-lg shadow-inner text-center text-neon-yellow glow-text">
                                    <h4 className="text-base sm:text-lg font-semibold">Daily Goal</h4>
                                    <p className="mt-1 text-sm sm:text-base">Stay focused and complete at least 5 tasks!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Task Modal */}
            {showModal && (
                <TaskModal
                    task={{ title: '', description: '', dueDate: today, priority: '2', status: 0 }}
                    onSave={handleSaveTask}
                    onClose={toggleModal}
                />
            )}
        </main>
    );
};

export default TodayPlan;
