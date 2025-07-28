
import React from 'react';
import { Icons } from '../ui/Icons';
import { Button } from '../ui/Button';

interface HeaderProps {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleTheme, theme, onMenuClick }) => {
  return (
    <header className="flex-shrink-0 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border">
      <div className="flex items-center justify-between p-4 h-16">
        <div className="flex items-center">
            <button
                onClick={onMenuClick}
                className="lg:hidden mr-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Open sidebar"
            >
                <Icons.Menu className="h-6 w-6" />
            </button>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'dark' ? <Icons.Sun className="h-5 w-5" /> : <Icons.Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
             <img src="https://picsum.photos/id/42/100/100" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};
