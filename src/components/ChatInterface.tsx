import React from 'react';
import { Menu } from 'lucide-react';

const ChatInterface = () => {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Menu size={24} />
            </button>
            <select className="border-none bg-transparent text-sm font-medium">
              <option>ChatGPT 4o mini</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Log in
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-semibold text-center mb-8">What can I help with?</h1>
          
          {/* Message Input */}
          <div className="relative">
            <textarea 
              className="w-full p-4 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Message ChatGPT"
              rows={1}
            />
            <button className="absolute right-2 bottom-2 p-2 text-gray-400 hover:text-gray-600">
              <span className="sr-only">Send message</span>
              →
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center space-x-4 mt-6">
            <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              Create image
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              Summarize text
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              Get advice
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
              Make a plan
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 p-4">
        <div className="max-w-screen-xl mx-auto text-center text-sm text-gray-500">
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