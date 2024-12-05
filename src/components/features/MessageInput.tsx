import React from 'react';

export const MessageInput = () => (
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
);