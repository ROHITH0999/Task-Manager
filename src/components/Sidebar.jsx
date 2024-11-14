import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigationItems from '../utils/navigations';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="fixed inset-y-0 left-0 bg-gray-900 shadow-lg max-h-screen w-64 neon-sidebar">
      <div className="flex flex-col justify-between h-full">

        {/* Sidebar Header */}
        <div className="px-4 py-6 text-center border-b border-gray-800">
          <h1 className="text-2xl font-bold leading-none text-neon-blue glow-animation">
            <span className="text-neon-yellow">Task Manager</span> App
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 flex-grow">
          <ul className="space-y-1">
            {navigationItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    className={`flex items-center py-3 px-4 rounded-lg text-sm font-bold transition-all duration-200 hover:bg-gray-800 ${isActive ? 'bg-gray-800 text-neon-yellow' : 'text-gray-400 hover:text-neon-green'}`}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-md mr-4 transition-all duration-200 ${isActive ? 'bg-neon-yellow text-gray-900' : 'bg-gray-700 text-neon-green hover:bg-neon-green hover:text-gray-900'}`}>
                      <img src={item.icon} alt={`${item.name} icon`} className="w-5 h-5" />
                    </div>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

       
      </div>
    </aside>
  );
};

export default Sidebar;
