import React from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const ChatInterface = () => {
  return (
    <div className="h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <header className="border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <Menu size={24} />
            </button>
            <select className="border-none bg-transparent text-sm font-medium dark:text-white">
              <option>ChatGPT 4o mini</option>
            </select>
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

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-semibold text-center mb-8 dark:text-white">What can I help with?</h1>
          
          <div className="relative">
            <textarea 
              className="w-full p-4 pr-12 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Message ChatGPT"
              rows={1}
            />
            <button className="absolute right-2 bottom-2 p-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
              <span className="sr-only">Send message</span>
              →
            </button>
          </div>

          <div className="flex justify-center space-x-4 mt-6 flex-wrap gap-y-2">
            <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              Create image
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              Summarize text
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              Get advice
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              Make a plan
            </button>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-screen-xl mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            By messaging ChatGPT, you agree to our{' '}
            <a href="#" className="underline">Terms</a>
            {' '}and have read our{' '}
            <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChatInterface;