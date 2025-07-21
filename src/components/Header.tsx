import React, { useState } from 'react';
import { Menu, Zap } from 'lucide-react';
import { COMPANY_NAME, NAVIGATION_ITEMS } from '../constants';
import { NavigationItem } from '../types';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 transition-all duration-300 hover:scale-105">
          <div className="p-2 bg-blue-500 rounded-lg shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <span className="text-3xl font-bold text-blue-800 tracking-tight">{COMPANY_NAME}</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item: NavigationItem) => (
            <a
              key={item.href}
              href={item.href}
              className={
                item.primary
                  ? "px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  : "text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 hover:scale-105"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 border-t border-gray-100 z-40">
          <nav className="flex flex-col items-center space-y-4">
            {NAVIGATION_ITEMS.map((item: NavigationItem) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={
                  item.primary
                    ? "px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mt-4"
                    : "text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 w-full text-center py-2"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 