import React, { useState } from 'react';
import { FaFilter, FaSun, FaMoon } from 'react-icons/fa';

interface FilterSidebarProps {
  onFilterChange: (filters: { [key: string]: string }) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange, isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-30">
      <button 
        onClick={handleToggle}
        className="fixed top-20 left-2 p-2 bg-twitter-dark text-white rounded-full hover:bg-blue-600 transition-transform"
      >
        <FaFilter size={20} />
      </button>

      <button 
        onClick={toggleTheme}
        className="fixed top-36 left-2 p-2 bg-twitter-dark text-white rounded-full hover:bg-blue-600 transition-transform"
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full bg-twitter-dark text-white shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ width: '300px' }}
      >
        <div className="flex justify-between items-center p-4 bg-twitter-darker">
          <h2 className="text-lg font-bold">Filters</h2>
          <button onClick={handleToggle} className="text-red-400 hover:text-red-500">
            ✕
          </button>
        </div>
        {/* Filter content here */}
      </div>
    </div>
  );
};

export default FilterSidebar;
