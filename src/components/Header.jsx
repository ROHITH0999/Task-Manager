import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="fixed right-0 top-0 left-60 bg-gray-900 py-3 px-4 h-16 shadow-lg neon-header">
            <div className="flex justify-between items-center max-w-4xl mx-auto">
                
                {/* Archive Button */}
                <button
                    onClick={() => navigate('/archives')}
                    className="flex items-center text-gray-400 font-semibold hover:text-neon-yellow transition transform hover:scale-105 duration-200">
                    <span className="inline-flex items-center w-6 h-6 text-xs bg-gray-800 rounded mr-2 transform hover:scale-105 duration-200">
                        <img src='/public/back-svgrepo-com.svg' alt='back' className='h-5 w-5' />
                    </span>
                    <span className="text-neon-green glow-text">Archive</span>
                </button>

                {/* Header Title */}
                <h1 className="text-2xl font-bold text-neon-cyan glow-animation">Task's</h1>

                {/* This Week Button */}
                <button
                    onClick={() => navigate('/thisweek')}
                    className="flex items-center text-gray-400 font-semibold hover:text-neon-yellow transition transform hover:scale-105 duration-200">
                    <span className="text-neon-pink glow-text">This Week</span>
                    <span className="inline-flex items-center w-6 h-6 bg-gray-800 rounded ml-2 transform hover:scale-105 duration-200">
                        <img src='/public/right-arrow-svgrepo-com.svg' alt='Right' className='h-5 w-5' />
                    </span>
                </button>
            </div>
        </header>
    );
};

export default Header;
