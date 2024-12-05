import React from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { ModelSelector } from '../features/ModelSelector';

export const Header = () => (
  <header className="border-b border-gray-200 dark:border-gray-700 p-2 sm:p-4">
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          <Menu size={24} />
        </button>
        <ModelSelector />
      </div>
      <div className="flex items-center space-x-2">
        <ThemeToggle />
        <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Log in
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100">
          Sign up
        </button>
      </div>
    </div>
  </header>
);